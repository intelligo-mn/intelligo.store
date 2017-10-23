<?php

namespace App\Http\Controllers;

use App\Posts;
use App\Http\Requests;

class IndexController extends Controller
{
    public function __construct(){

        parent::__construct();

    }

    public function index()
    {
        if(getenvcong('Siteactive')=='no'){
            return view('errors.maintenance');
        }

        $homepagebuilder=getenvcong('p-homepagebuilder');

        $HomeColSec1Tit1=null; $HomeColSec2Tit1=null; $HomeColSec3Tit1=null;$HomeColSec1Type1=null; $HomeColSec2Type1=null; $HomeColSec3Type1=null;
        if($homepagebuilder=="on"){
            $HomeColSec1Tit1=getenvcong('HomeColSec1Tit1');
            $HomeColSec2Tit1=getenvcong('HomeColSec2Tit1');
            $HomeColSec3Tit1=getenvcong('HomeColSec3Tit1');
            $HomeColSec1Type1=getenvcong('HomeColSec1Type1');
            $HomeColSec2Type1=getenvcong('HomeColSec2Type1');
            $HomeColSec3Type1=getenvcong('HomeColSec3Type1');
        }
           //set default
          if($HomeColSec1Type1==null){ $HomeColSec1Type1=config('buzzytheme_'.getenvcong('CurrentTheme').'.HomeColSec1Type1') !== null ? config('buzzytheme_'.getenvcong('CurrentTheme').'.HomeColSec1Type1') : '["list", "quiz"]';}
          if($HomeColSec2Type1==null){ $HomeColSec2Type1=config('buzzytheme_'.getenvcong('CurrentTheme').'.HomeColSec2Type1') !== null ? config('buzzytheme_'.getenvcong('CurrentTheme').'.HomeColSec2Type1') : '["news"]';}
          if($HomeColSec3Type1==null){ $HomeColSec3Type1=config('buzzytheme_'.getenvcong('CurrentTheme').'.HomeColSec3Type1') !== null ? config('buzzytheme_'.getenvcong('CurrentTheme').'.HomeColSec3Type1') : '["video"]';}


        $lang = \Session::get('locale');

        //colums 1
        $lastFeatures=        Posts::forhome()->typesAccepted($HomeColSec1Type1)->
                    where("lang", $lang)->
                    typesActivete()->approve('yes')->latest("published_at")->paginate(10);

        //colums 2
        $lastNews =           Posts::forhome()->typesAccepted($HomeColSec2Type1)->
                    where("lang", $lang)->
                    typesActivete()->approve('yes')->latest("published_at")->paginate(config('buzzytheme_'.getenvcong('CurrentTheme').'.homepage_news_limit'));

        //colums 3
        $lastTrendingVideos = Posts::forhome()->typesAccepted($HomeColSec3Type1)->
                    where("lang", $lang)->
                    typesActivete()->approve('yes')->latest("published_at")->take(10)->get();

        $lastFeaturestop = Posts::forhome('Features')->typesActivete()->approve('yes')->
                    where("lang", $lang)->
                    where("featured_at", '>', '')->latest("featured_at")->take(10)->get();

        $lastvideoscol1  = Posts::forhome()->byType('video')->typesActivete()->approve('yes')->getStats('one_day_stats', 'DESC')->paginate(3);

        $lastpoll        = Posts::forhome()->byType('poll')->typesActivete()->approve('yes')->latest("published_at")->paginate(2);

        $lastTrending    = Posts::forhome()->typesActivete()->approve('yes')->getStats('one_day_stats', 'DESC', 10)->get();


        if(\Request::query('page')){

            if(\Request::ajax()){

                if(\Request::query("timeline")=="right"){

                return view('pages.indexrightpostloadpage', compact('lastNews'));

                }else{

                return view('pages.indexpostloadpage', compact('lastFeatures', 'lastvideoscol1', 'lastpoll'));

                }

            }else{
                return redirect('/');
            }

        }else{

            if(Posts::where("lang", $lang)->count() < 5){
              return view('errors.starting');
            }
        }

        return view('pages.index', compact('lastFeaturestop', 'lastFeatures', 'lastvideoscol1', 'lastpoll', 'lastNews','lastNewsVideos', 'lastTrending', 'lastTrendingVideos', 'HomeColSec1Tit1', 'HomeColSec2Tit1', 'HomeColSec3Tit1'));
    }


    /**
     * Show a Amp Post
     *
     * @return \Illuminate\View\View
     */
    public function amp()
    {

        $lastFeaturestop = Posts::forhome('Features')->where('type', '!=', 'quiz')->where('type', '!=', 'poll')->typesActivete()->approve('yes')->where("featured_at", '>', '')->latest("featured_at")->take(10)->get();


        //colums 2
        $lastNews =   Posts::forhome()->where('type', '!=', 'quiz')->where('type', '!=', 'poll')->typesActivete()->approve('yes')->latest("published_at")->paginate(10);


        return view('amp.index', compact('lastFeaturestop',  'lastNews'));

    }


    public function langpick($getlang)
    {

            \Session::put('locale', $getlang);

            \App::setLocale(\Session::get('locale'));

        return redirect()->back();

    }


}