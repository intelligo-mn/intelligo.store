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


    }

    public function index(Request $request)
    {

            return redirect()->back()->with(['ok'=>'ok']);

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
