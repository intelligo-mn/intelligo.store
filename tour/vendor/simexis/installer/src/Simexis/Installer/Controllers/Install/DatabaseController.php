<?php

namespace Simexis\Installer\Controllers\Install;

use DB;
use Lang;
use Illuminate\Routing\Controller;
use Simexis\Installer\Helpers\DatabaseManager;
use Simexis\Installer\Request\DatabaseRequest;
use Illuminate\Contracts\Foundation\Application;

class DatabaseController extends Controller {
	
	public function index(DatabaseManager $checker) {
        return view('installer::install.database');
	}
	
	public function post(Application $app, DatabaseRequest $request, DatabaseManager $manager) {
		
		$driver = $manager->setConfig($app, [
						'host' => $request->get('host'),
						'database' => $request->get('database'),
						'username' => $request->get('username'),
						'password' => $request->get('password')
					]);
		
		try {
			DB::connection($driver);
		} catch(\Exception $e) {
			return redirect(route('installer::database'))
                        ->withErrors(['exception' => $e->getMessage()])
                        ->withInput();
		}
		
		try {
			$manager->writeConfig($app, [
						'host' => $request->get('host'),
						'database' => $request->get('database'),
						'username' => $request->get('username'),
						'password' => $request->get('password')
					]);
		} catch(\Exception $e) {
			return redirect(route('installer::database'))
                        ->withErrors(['exception' => $e->getMessage()])
                        ->withInput();
		}
		
		return redirect(route('installer::database_finish'));
	}
	
	public function finish(Application $app, DatabaseManager $manager) {
		
		$response = $manager->migrateAndSeed();
		if($response['status'] == 'danger')
			return redirect(route('installer::database'))
                        ->withErrors(['message' => $response['message']])
                        ->withInput();
						
		$installer = app('installer');
		$fm = $installer->getFileManager();
		if(!$fm->create(app('installer')->config('last_version')))
			return redirect(route('installer::database'))
                        ->withErrors(['exception' => Lang::get('installer::installer.database.error')])
                        ->withInput();
		
		return redirect(route('installer::finish'))
                        ->with($response);
	}
	
}