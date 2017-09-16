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

    public function __construct(){

        parent::__construct();

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

            ->latest("published_at")->limit(10)
            ->paginate(10);


        $search = trans('updates.searchfor', ['word' => $q]);


        if($req->query('page')){
            if($req->ajax()){
                return view('pages.catpostloadpage', compact('lastItems'));
            }else{
                return redirect('/');
            }
        }

        return view('pages.showsearch', compact("lastItems","search"));
    }



    /**
     * Show child categories
     *
     * @param $catname
     * @param Request $req
     * @return \BladeView|bool|\Illuminate\View\View
     */
    public function showCategory($catname, Request $request)
    {
        $this->cat= $catname;

        $category = Categories::where("name_slug", $catname)->first();



        if(!$category){
            abort('404');
        }

        if($category->main=="1" or $category->main=="2" ){

            $lastItems = Posts::select('posts.*')

                ->leftJoin('categories', function($leftJoin){
                    $leftJoin->on('categories.id', '=', 'posts.category_id');
                })

                ->where('categories.type', '=',  $category->id)
                ->latest("published_at")->approve('yes')->paginate(15);

            //top Features
            $lastFeaturestop = Posts::select('posts.*')

                ->leftJoin('categories', function($leftJoin){
                    $leftJoin->on('categories.id', '=', 'posts.category_id');
                })

                ->where('categories.type', '=',  $category->id)
                ->where("featured_at", '>', '')->latest("featured_at")->approve('yes')->take(4)->get();


        }else{

            $lastItems = Posts::select('posts.*')

                ->leftJoin('categories', function($leftJoin){
                    $leftJoin->on('categories.id', '=', 'posts.category_id');
                })

                ->where('categories.name_slug', '=',  $category->name_slug)
                ->latest("published_at")->approve('yes')->paginate(15);

            $lastFeaturestop = "";

        }



        $lastNews = Posts::approve('yes')->typesActivete()->where('type', $category->type)->getStats('seven_days_stats', 'DESC', 7)->get();

        if($request->query('page')){
            $lastFeatures=$lastNews;
            if($request->ajax()){
                return view('pages.catpostloadpage', compact('lastItems','lastFeatures'));
            }else{
                return redirect('/');
            }
        }


        return view("pages.showcategory", compact("category","lastItems", "lastNews", "lastFeaturestop"));
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

    /**
     * Show Tags
     *
     * @param $catname
     * @param Request $req
     * @return \BladeView|bool|\Illuminate\View\View
     */
    public function showtag($tagname)
    {

        $lastItems = Posts::where("tags", 'LIKE', '%'.$tagname.'%')->latest("published_at")->approve('yes')->paginate(15);

        if(!$lastItems){
            abort('404');
        }

        return view("pages.showtag", compact("lastItems", "tagname"));
    }

}
