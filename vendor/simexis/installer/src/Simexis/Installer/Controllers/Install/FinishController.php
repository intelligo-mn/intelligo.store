<?php

namespace Simexis\Installer\Controllers\Install;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\File;

class FinishController extends Controller {
	
	public function index() {
        return view('installer::install.finish');
	}
	
}