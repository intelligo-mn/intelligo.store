<?php

namespace App\Http\Controllers;

use ZipArchive;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Config\Repository;
class AkbilisimController extends Controller
{

    protected $server  =  'http://envato.akbilisim.com/api/BA';
    protected $rf  =  '1';
    protected $product  =  'buzzy';

    public function __construct()
    {
        parent::__construct();

        $this->buzzyPath = base_path('storage/.'.$this->product);

        if(!isset($this->server)){
            \Session::flash('error.message', 'Please Contact: contact@akbilisim.com');
            return redirect()->back();

        }

    }

    public function index(Request $request)
    {

        $code= $request->query('code');

        if(empty($code)){
            \Session::flash('error.message', 'Please type Buzzy code.');
            return redirect()->back();
        }
        $jok=curlit($this->server.$code.'?r='.$this->rf.'&t='.$this->product.'&u='.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
        $jok= json_decode($jok, true);
        if (rop($jok['d'])){
            \Session::flash('success.message', 'Your purchase is verified.');
            $this->codep($code);
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
        if (file_exists(base_path('storage/.'.$this->product))){
            return false;
        }
        try {

            file_put_contents($this->buzzyPath, $code);
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
