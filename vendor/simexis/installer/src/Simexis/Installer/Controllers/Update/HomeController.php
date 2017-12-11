<?php

namespace Simexis\Installer\Controllers\Update;

use Illuminate\Routing\Controller;

class HomeController extends Controller {
	
	private $installer;
	
	public function __construct() {
		$this->installer = app('installer');
	}
	
	public function index() {
		$currentVersion = $this->getCurrentVersion();
		$last_version = $this->installer->config('last_version');
        return view('installer::update.home', compact('currentVersion', 'last_version'));
	}
    /**
     * Get current installed version.
     *
     * @return string
     */
    private function getCurrentVersion()
    {
        return $this->installer->getFileManager()->getVersion();
    }
	
}