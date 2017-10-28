<?php

namespace Simexis\Installer\Controllers\Install;

use Illuminate\Routing\Controller;
use Simexis\Installer\Helpers\PermissionsChecker;

class PermissionsController extends Controller {
	
	public function index(PermissionsChecker $checker) {
		$permissions = $checker->check(
            config('installer.permissions')
        );
        return view('installer::install.permissions', compact('permissions'));
	}
	
}