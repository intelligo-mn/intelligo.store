<?php namespace App\Http\Controllers\Admin;

use App\Settings;
use Illuminate\Http\Request;
use App\Http\Requests;

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
        $footerlogo = $request->file('footerlogo');
        $favicon = $request->file('favicon');

        if($footerlogo){
            $footerlogo->move(public_path().'/assets/img', 'flogo.png');
        }
        if($sitelogo){
            $sitelogo->move(public_path().'/assets/img', 'logo.png');
        }
        if($favicon){
            $favicon->move(public_path().'/assets/img', 'favicon.png');
        }



        if(isset($input['HomeColSec1Type1'])){
            $this->deletebuilderconfigs('HomeColSec1Type1');
        }
        if(isset($input['HomeColSec2Type1'])){
            $this->deletebuilderconfigs('HomeColSec2Type1');
        }
        if(isset($input['HomeColSec3Type1'])){
            $this->deletebuilderconfigs('HomeColSec3Type1');
        }

        foreach($input as $key => $int){

            \DbConfig::store($key, $int);
        }

        \Session::flash('success.message', trans("admin.ChangesSaved"));

        return redirect()->back();
    }

    public function deletebuilderconfigs($type)
    {

        $aaa=Settings::where('key', 'LIKE', "%$type%")->get();
        if(isset($aaa)){
            foreach($aaa as $tp){
                $tp->delete();
            }
        }
    }
}
