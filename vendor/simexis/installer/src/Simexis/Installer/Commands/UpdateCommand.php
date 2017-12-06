<?php 

namespace Simexis\Installer\Commands;

use Illuminate\Console\Command;
use Simexis\Installer\Helpers\DatabaseManager;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;

class UpdateCommand extends Command {

	/**
	* The console command name.
	*
	* @var string
	*/
	protected $name = 'app:upgrade';

	/**
	* The console command description.
	*
	* @var string
	*/
	protected $description = "Update application.";

	/**
	* Execute the console command.
	*
	* @return void
	*/
	public function fire(DatabaseManager $dbmanager)
	{
		
		$currentVersion = $this->laravel['installer']->getFileManager()->getVersion();
		$last_version = $this->laravel['installer']->config('last_version');
		
		$continue = $this->confirm(sprintf('Your are currently running version %s and the latest available version is %s continue upgrade', $currentVersion, $last_version), 'yes');
			if(!$continue)
				return;
			
		$this->call('vendor:publish');
		
		$response = $dbmanager->updateDatabaseAndSeedTables();
		
		if($response['status'] == 'danger')
			return $this->error('Error: ' . $response['message'] . '!');
						
		$fm = $this->laravel['installer']->getFileManager();
		if(!$fm->create(app('installer')->config('last_version')))
			return $this->error('Error: ' . Lang::get('installer::installer.database.error') . '!');
		
		return $this->info('Upgrade is completed!');
	}
}