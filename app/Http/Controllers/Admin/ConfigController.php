<?php namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class ConfigController extends MainAdminController
{
    public function __construct()
    {
        $this->middleware('DemoAdmin', ['only' => ['setconfig']]);

        parent::__construct();

    }

    
    public function index()
    {

        return view('_admin.pages.config');
    }

    public function setconfig(Request $request)
    {

        $input= $request->all();


        $v = \Validator::make($input, [
            'sitelogo' => 'mimes:png',
            'favicon' => 'mimes:png',
        ]);

        if ($v->fails()) {
            \Session::flash('error.message', $v->errors()->first());

            return redirect()->back()->withInput($input);
        }

        $sitelogo = $request->file('sitelogo');
        $favicon = $request->file('favicon');

        if($sitelogo){
            $sitelogo->move(public_path().'\assets\img', 'logo.png');
        }
        if($favicon){
            $favicon->move(public_path().'\assets\img', 'favicon.png');
        }

        foreach($input as $key => $int){

            \DbConfig::store($key, $int);
        }


        \Session::flash('success.message', 'Өөрчлөлт амжилттай хадгалагдлаа.');

        return redirect()->back();
    }


}
