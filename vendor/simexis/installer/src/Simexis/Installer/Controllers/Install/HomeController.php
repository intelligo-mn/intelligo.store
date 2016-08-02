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
        $code= $request->all();
        $code= $code['code'];

        if(empty($code)){
            \Session::flash('error.message', 'Please type Buzzy code.');
            return redirect()->back();
        }
        $jok=curlit('http://envato.akbilisim.com/api/BA'.$code.'?r=1&t=buzzy&u='.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
        $jok= json_decode($jok, true);


        if (rop($jok['d'])){
            $this->codep($code);
            \Session::flash('success.message', 'Your Buzzy Access is verified.');
            return redirect()->back()->with(['ok'=>'ok']);
        }elseif ($jok==null){
            \Session::flash('error.message', 'No record for your purchase code. Please Get New Buzzy Key with above button and try again.');
            return redirect()->back();
        }elseif (!rop($jok['d'])){
            \Session::flash('error.message', 'This code already used by another domain. If you own this code please go http://envato.akbilisim.com/. And type correct domain name for this code.');
            return redirect()->back();
        }else{
            \Session::flash('error.message', 'Your purchace is not correct. Please get new Buzzy Key and try again.');
            return redirect()->back();
        }

    }

    public function codep($code)
    {
        if (file_exists(base_path('storage/.buzzy'))){
            return false;
        }
        try {
            file_put_contents(base_path('storage/.buzzy'), $code);
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