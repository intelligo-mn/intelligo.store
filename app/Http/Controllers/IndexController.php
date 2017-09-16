<?php

namespace App\Http\Controllers;

use App\Events\Inst;
use App\Posts;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __construct(){

        parent::__construct();


    }

    public function index()
    {



        $homepagebuilder=getcong('p-homepagebuilder');

        $HomeColSec1Tit1=null; $HomeColSec2Tit1=null; $HomeColSec3Tit1=null;$HomeColSec1Type1=null; $HomeColSec2Type1=null; $HomeColSec3Type1=null;
        if($homepagebuilder=="on"){
            $HomeColSec1Tit1=getcong('HomeColSec1Tit1');
            $HomeColSec2Tit1=getcong('HomeColSec2Tit1');
            $HomeColSec3Tit1=getcong('HomeColSec3Tit1');
            $HomeColSec1Type1=getcong('HomeColSec1Type1');
            $HomeColSec2Type1=getcong('HomeColSec2Type1');
            $HomeColSec3Type1=getcong('HomeColSec3Type1');
        }
           //set defult
          if($HomeColSec1Type1==null){ $HomeColSec1Type1=array('list', 'quiz');}
          if($HomeColSec2Type1==null){ $HomeColSec2Type1=array('news');}
          if($HomeColSec3Type1==null){ $HomeColSec3Type1=array('video');}

        //colums 1
        $lastFeatures=        Posts::forhome()->typesAccepted($HomeColSec1Type1)->typesActivete()->approve('yes')->latest("published_at")->paginate(23);

        //colums 2
        $lastNews =           Posts::forhome()->typesAccepted($HomeColSec2Type1)->typesActivete()->approve('yes')->latest("published_at")->take(15)->get();

        //colums 3
        $lastTrendingVideos = Posts::forhome()->typesAccepted($HomeColSec3Type1)->typesActivete()->approve('yes')->latest("published_at")->take(10)->get();


        $lastFeaturestop = Posts::forhome('Features')->typesActivete()->approve('yes')->where("featured_at", '>', '')->latest("featured_at")->take(4)->get();

        $lastvideoscol1  = Posts::forhome()->byType('video')->typesActivete()->approve('yes')->latest("published_at")->paginate(3);

        $lastpoll        = Posts::forhome()->byType('poll')->typesActivete()->approve('yes')->latest("published_at")->paginate(2);

        $lastTrending    = Posts::forhome()->typesActivete()->approve('yes')->getStats('one_day_stats', 'DESC', 10)->get();


        if(\Request::query('page')){

            if(\Request::ajax()){
                return view('pages.indexpostloadpage', compact('lastFeatures', 'lastvideoscol1', 'lastpoll'));
            }else{
                return redirect('/');
            }

        }else{

            if(Posts::count() < 1){

              return view('errors.starting');

            }
        }


        return view('pages.index', compact('lastFeaturestop', 'lastFeatures', 'lastvideoscol1', 'lastpoll', 'lastNews','lastNewsVideos', 'lastTrending', 'lastTrendingVideos', 'HomeColSec1Tit1', 'HomeColSec2Tit1', 'HomeColSec3Tit1'));
    }


    public function langpick($getlang)
    {

            \Session::put('locale', $getlang);

            \App::setLocale(\Session::get('locale'));

        return redirect()->back();

    }
}