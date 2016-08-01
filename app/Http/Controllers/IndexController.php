<?php

namespace App\Http\Controllers;

use App\Events\Inst;
use App\Posts;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{

    public function index()
    {

        //top Features
        $lastFeaturestop = Posts::forhome('Features')->approve('yes')->where("featured_at", '>', '')->latest("featured_at")->take(4)->get();

        //latest lists
        $lastFeatures = Posts::forhome()->approve('yes')->byType('list')->latest("published_at")->paginate(20);

        $lastvideoscol1 = Posts::forhome()->approve('yes')->byType('video')->latest("published_at")->take(6)->get();

        $lastpoll = Posts::forhome()->approve('yes')->byType('poll')->latest("published_at")->take(2)->get();

        //latest news
        $lastNews = Posts::forhome()->approve('yes')->byType('news')->latest("published_at")->take(20)->get();

        $lastTrending = Posts::forhome()->approve('yes')->getStats('one_day_stats', 'DESC', 10)->get();

        $lastTrendingVideos = Posts::forhome()->approve('yes')->byType('video')->getStats('one_day_stats', 'DESC', 7)->get();

          if(count($lastFeatures) < 5 and count($lastNews) < 5){

              return view('errors.starting');

          }

        if(\Request::query('page')){

            return view('._particles._lists.indexpages_list', compact('lastFeatures'));

        }


        return view('pages.index', compact('lastFeaturestop','lastFeatures','lastvideoscol1','lastpoll', 'lastNews','lastNewsVideos', 'lastTrending', 'lastTrendingVideos'));
    }

}
