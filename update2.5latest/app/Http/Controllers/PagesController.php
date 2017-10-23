<?php

namespace App\Http\Controllers;

use App\Categories;
use App\Pages;
use App\Posts;
use App\Reactions;
use Carbon\Carbon;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

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
            ->latest("published_at")
            ->paginate(10);

        $search = trans('updates.searchfor', ['word' => $q]);

        if($req->query('page')){
            if($req->ajax()){
                return view('pages.catpostloadpage', compact('lastItems'));
            }
        }

        return view('pages.showsearch', compact("lastItems", "search"));
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
        if(getenvcong('Siteactive')=='no'){
            return view('errors.maintenance');
        }

        $this->cat= $catname;

        $categories = Categories::where("name_slug", $catname)->get();
        $category = Categories::where("name_slug", $catname)->first();
        if(!isset($category)){
            return redirect('/404');
        }
        if(!isset($categories)){
           return redirect('/');
        }
        $categoryarray=array();
        foreach($categories as $categor){
           array_push($categoryarray, $categor->id);
        }
        $this->categoryarray = $categoryarray;

        $lastItems = Posts::where(function($query){
            foreach($this->categoryarray as $kk => $value){

                    if($kk==0){
                        $query->where('categories', 'LIKE',  '%"'.$value.',%')->orWhere('categories', 'LIKE',  '%,'.$value.',%');
                    }else{
                        $query->orWhere('categories', 'LIKE',  '%"'.$value.',%')->orWhere('categories', 'LIKE',  '%,'.$value.',%');
                    }

                }
             })
            ->where('deleted_at', NULL)->approve('yes')
            ->latest("published_at")->paginate(16);

        $lastFeaturestop=[];

        //top Features
        $lastFeaturestop = Posts::where(function($query){
            foreach($this->categoryarray as $kk => $value){

                if($kk==0){
                    $query->where('categories', 'LIKE',  '%"'.$value.',%')->orWhere('categories', 'LIKE',  '%,'.$value.',%');
                }else{
                    $query->orWhere('categories', 'LIKE',  '%"'.$value.',%')->orWhere('categories', 'LIKE',  '%,'.$value.',%');
                }

            }
        })->where("featured_at", '>', '')
            ->latest("featured_at")->approve('yes')->take(10)->get();


        $lastTrending = Posts::approve('yes')->typesActivete()->where('type', $category->type)->getStats('seven_days_stats', 'DESC', 7)->get();


        if($request->query('page')){
            if($request->ajax()){
                return view('pages.catpostloadpage', compact('lastItems'));
            }
        }

        return view("pages.showcategory", compact("category","lastItems", "lastTrending", "lastFeaturestop"));
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

    /**
     * Show Reaction Pages
     *
     * @param $catname
     * @param Request $req
     * @return \BladeView|bool|\Illuminate\View\View
     */
    public function showReaction($reaction_id)
    {

        $lastItems = Posts::select('posts.*')

            ->leftJoin('reactions', function($leftJoin){
                $leftJoin->on('reactions.post_id', '=', 'posts.id');
            })
            ->where('reactions.reaction_type', '=', $reaction_id)
            ->typesActivete()
            ->approve('yes')
            ->orderBy(DB::raw('COUNT(reactions.post_id) '), 'desc')
            ->groupBy("reactions.post_id")->paginate(15);


        if(!$lastItems){
            abort('404');
        }

        $reaction = \App\Reaction::where('reaction_type', $reaction_id)->first()->name;


        return view("pages.showreactions", compact("lastItems", "reaction"));
    }

    public function dort()
    {
        return view("errors.404");
    }
}
