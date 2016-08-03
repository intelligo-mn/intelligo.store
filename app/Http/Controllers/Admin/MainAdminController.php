<?php

namespace App\Http\Controllers\Admin;


use App\Categories;
use App\Contacts;
use App\Posts;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Controllers\AkbilisimController;

class MainAdminController extends Controller
{
    protected $verify  = 'http://envato.akbilisim.com/api/BA';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {

        $this->middleware('Admin');

        $unapprovenews = Posts::approve('no')->byType('news')->count();

        $unapprovelists = Posts::approve('no')->byType('list')->count();

        $unapprovequizzes = Posts::approve('no')->byType('quiz')->count();

        $unapprovepolls = Posts::approve('no')->byType('poll')->count();

        $unapprovevideos = Posts::approve('no')->byType('video')->count();

        $waitapprove = Posts::approve('no')->take(15)->get();

        $cat=Categories::byType('mailcat')->where('name_slug', 'inbox')->first();

        if($cat){
            $unapproveinbox = Contacts::where('category_id', $cat->id)->where('read', 0)->count();
        }else{
            $unapproveinbox=0;
        }


        \View::share(['waitapprove' => $waitapprove,
                       'toplamapprove' => $unapprovenews+$unapprovelists+$unapprovepolls+$unapprovevideos,
                      'napprovenews' => $unapprovenews,
                      'napprovelists' => $unapprovelists,
                      'unapprovequizzes' => $unapprovequizzes,
                      'napprovepolls' => $unapprovepolls,
                      'napprovevideos' => $unapprovevideos,
                      'unapproveinbox' => $unapproveinbox
        ]);

        parent::__construct();

    }

    public function code($type = 'buzzy')
    {

            return true;
    
    }

    public function necodep($type,$code)
    {
        if (file_exists(base_path('storage/.'.$type))){
            return false;
        }
        try {

            file_put_contents(base_path('storage/.'.$type), $code);
        }catch(Exception $e) {
            \Session::flash('error.message', 'Please Contact: contact@akbilisim.com');
            return redirect()->back();
        }
        return true;
    }
}
