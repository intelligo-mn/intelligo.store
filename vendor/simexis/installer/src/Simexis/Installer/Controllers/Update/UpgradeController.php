<?php

namespace Simexis\Installer\Controllers\Update;

use Illuminate\Routing\Controller;
use Simexis\Installer\Helpers\DatabaseManager;

class UpgradeController extends Controller {
	
	public function index(DatabaseManager $manager) {
		$response = $manager->updateDatabaseAndSeedTables();
		
		if($response['status'] == 'danger'){
			\Session::flash('error.message', $response['message']);
			return redirect()->back();
		}

						
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