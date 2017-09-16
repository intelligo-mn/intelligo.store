<?php 

namespace Simexis\Installer\Commands;

use DB;
use Lang;
use Illuminate\Console\Command;
use Simexis\Installer\Helpers\DatabaseManager;
use Symfony\Component\Console\Input\InputOption;
use Simexis\Installer\Helpers\PermissionsChecker;
use Simexis\Installer\Helpers\RequirementsChecker;
use Symfony\Component\Console\Input\InputArgument;
use \Illuminate\Database\Connectors\ConnectionFactory;

class InstallCommand extends Command {

	/**
	* The console command name.
	*
	* @var string
	*/
	protected $name = 'app:install';

	/**
	* The console command description.
	*
	* @var string
	*/
	protected $description = "Install application.";

	/**
	* Execute the console command.
	*
	* @return void
	*/
	public function fire(RequirementsChecker $requirement, PermissionsChecker $permision, DatabaseManager $dbmanager)
	{
		$requirements = $requirement->check(
            config('installer.requirements')
        );
		
		$rows = [];
		if(isset($requirements['requirements']) && is_array($requirements['requirements'])) {
			foreach($requirements['requirements'] AS $k=>$v) {
				$rows[] = [$k, $v ? 'Ok' : 'Error'];
			}
		}
		
		if($rows) {
			$this->table([
				'Requirements',
				'Status'
			],
			$rows);
		
			if(isset($requirements['error']) && $requirements['error']) {
				return $this->error('Error: Missing requirements!');
			}
			
			$continue = $this->confirm('Continue installation', 'yes');
			if(!$continue)
				return;
		}
		
		$permissions = $permision->check(
            config('installer.permissions')
        );
		
		$rows = [];
		if(isset($permissions['permissions']) && is_array($permissions['permissions'])) {
			foreach($permissions['permissions'] AS $v) {
				$rows[] = [$v['folder'], $v['permission']];
			}
		}
		
		if($rows) {
			$this->table([
				'Folder/File',
				'Is Writable'
			],
			$rows);
		
			if(isset($permissions['error']) && $permissions['error']) {
				return $this->error('Error: Missing permissions!');
			}
				
			$continue = $this->confirm('Continue installation', 'yes');
			if(!$continue)
				return;
		}

		$host = $this->ask('Set database host', 'localhost');
		$username = $this->ask('Set database username', 'root');
		$password = $this->ask('Set database password', '');
		$name = $this->ask('Set database name', '');
		
		$driver = $dbmanager->setConfig($this->laravel, [
						'host' => $host,
						'database' => $name,
						'username' => $username,
						'password' => $password
					]);
					
		try {
			with(new ConnectionFactory($this->laravel))->make(config('database.connections.' . $driver), $driver)->getPdo();
		} catch(\Exception $e) {
			return $this->error('Error: ' . $e->getMessage() . '!');
		}
		
		try {
			$dbmanager->writeConfig($this->laravel, [
						'host' => $host,
						'database' => $name,
						'username' => $username,
						'password' => $password
					]);
		} catch(\Exception $e) {
			return $this->error('Error: ' . $e->getMessage() . '!');
		}
		
		$this->call('vendor:publish');
		
		$response = $dbmanager->migrateAndSeed();
		if($response['status'] == 'danger')
			return $this->error('Error: ' . $response['message'] . '!');
						
		$installer = $this->laravel['installer'];
		$fm = $installer->getFileManager();
		if(!$fm->create($this->laravel['installer']->config('last_version')))
			return $this->error('Error: ' . Lang::get('installer::installer.database.error') . '!');
		
		return $this->info('Installation is completed!');
						
	}
}