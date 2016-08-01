<?php

namespace App\Http\Controllers;

use App\Categories;
use App\Pages;
use App\Posts;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class PagesController extends Controller
{


    /**
     * Show news/lists category
     *
     * @return \Illuminate\View\View
     */
    public function posttype(Request $request){

        $cat = $request->segment('1');
        if($cat == 'news'){
            $t = 'news';
            $title = trans('index.news');
        }elseif($cat == 'lists'){
            $t = 'list';
            $title = trans('index.lists');
        }elseif($cat == 'videos'){
            $t = 'video';
            $title = trans('index.videos');
        }elseif($cat == 'polls'){
            $t = 'poll';
            $title = trans('index.polls');
        }else{
            $t = 'all';
            $title = trans('index.posts');
        }

        $lastItems = Posts::byType($t)
                            ->approve('yes')
                            ->latest("published_at")
                            ->paginate(15);

        $lastNews = Posts::approve('yes')->byType($t)->getStats('seven_days_stats', 'DESC', 7)->get();

        $todayhit = Posts::approve('yes')->byType($t)->getStats('one_day_stats', 'DESC', 6)->get();

        //top Features
        $lastFeaturestop = Posts::approve('yes')->byType($t)->where("featured_at", '>', '')->latest("featured_at")->take(4)->get();


        if(count($lastItems) < 5){

            return view('errors.starting', ['type' => $title]);

        }


        return view('pages.showcategory', compact("lastFeaturestop","lastItems","todayhit","lastNews", "title"));

    }


    /**
     * Show search page
     *
     * @param Request $req
     * @return \BladeView|bool|\Illuminate\View\View
     */
    public function search(Request $req){

        $q = $req->query('q');

        $lastItems = Posts::where("title", "LIKE", "%$q%")
            ->approve('yes')
            ->latest("published_at")
            ->paginate(10);

        $title = 'POSTS';

        $search = 'Search results for "'.$q.'"';

        $lastNews = Posts::approve('yes')->getStats('thirty_days_stats', 'DESC', 7)->get();

        return view('pages.showcategory', compact("lastItems","lastNews","title","search"));
    }



    /**
     * Show child categories
     *
     * @param $catname
     * @param Request $req
     * @return \BladeView|bool|\Illuminate\View\View
     */
    public function showCategory($catname)
    {
        $this->cat= $catname;

        $category = Categories::where("name_slug", $catname)->first();

        if(!$category){
            abort('404');
        }


        $lastItems = Posts::select('posts.*')

            ->leftJoin('categories', function($leftJoin){
                $leftJoin->on('categories.id', '=', 'posts.category_id');
            })
            ->where('categories.name_slug', '=',  $catname)
            ->latest("published_at")->approve('yes')->paginate(15);

        $title = $category->name;

        $lastNews = Posts::approve('yes')->getStats('seven_days_stats', 'DESC', 7)->get();

        return view("pages.showcategory", compact("lastItems", "lastNews", "title"));
    }

    /**
     * Show Pages
     *
     * @param $catname
     * @param Request $req
     * @return \BladeView|bool|\Illuminate\View\View
     */
    public function showpage($catname, Request $req)
    {

        $page = Pages::where("slug", $catname)->first();

        if(!$page){
            abort('404');
        }

        return view("pages.showpage", compact("page"));
    }

}
