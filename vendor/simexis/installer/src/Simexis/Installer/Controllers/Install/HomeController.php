<?php

namespace Simexis\Installer\Controllers\Install;

use ZipArchive;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Simexis\Installer\Helpers\RequirementsChecker;

class HomeController extends Controller {


    public function index(RequirementsChecker $checker) {

        $requirements = $checker->check(
            config('installer.requirements')
        );
        return view('installer::install.requirements', compact('requirements'));

    }

	public function checkcode() {

          return view('installer::install.home');

	}

    public function checkedcode(Request $request)
    {
            return redirect()->back()->with(['ok'=>'ok']);

    }

    public function codep($code)
    {
        if (file_exists(base_path('storage/.modu'))){
            return false;
        }
        try {
            file_put_contents(base_path('storage/.modu'), $code);
        }catch(Exception $e) {
            \Session::flash('error.message', 'Please Contact: contact@akbilisim.com');
            return redirect()->back();
        }
        return true;
    }

    public function getr($zurl)
    {
        return true;
    }


}