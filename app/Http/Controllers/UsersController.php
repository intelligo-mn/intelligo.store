<?php

namespace App\Http\Controllers;

use App\User;
use Gate;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;

class UsersController extends Controller
{


    public function __construct(User $users, Request $request)
    {

        $this->middleware('DemoAdmin', ['only' => ['updatesettings']]);


        $userslug = $request->segment('2');

        $userinfo= $users->where('username_slug', $userslug)->first();

        if(!$userinfo){
            abort('404');
        }

        $this->userinfo = $userinfo;

        $newscount = $userinfo->posts()->approve('yes')->byType('news')->count();

        $listscount = $userinfo->posts()->approve('yes')->byType('list')->count();

        $videoscount = $userinfo->posts()->approve('yes')->byType('video')->count();

        $pollscount = $userinfo->posts()->approve('yes')->byType('poll')->count();


        \View::share(['userinfo' => $userinfo,
            'newscount' => $newscount,
            'listscount' => $listscount,
            'videoscount' => $videoscount,
            'pollscount' => $pollscount
        ]);

    }


    public function index(Request $request){


        $requesttye = $request->segment('3');
        if($requesttye == 'news'){
            $t = 'news';
        }elseif($requesttye == 'lists'){
            $t = 'list';
        }elseif($requesttye == 'videos'){
            $t = 'video';
        }elseif($requesttye == 'polls'){
            $t = 'poll';
        }else{
            $t = 'all';
        }

        $lastPosts = $this->userinfo->posts()->approve('yes')->byType($t)->paginate(15);


        return view("pages.users.dashboard", compact('lastPosts'));

    }

    public function draftposts(){

        $this->authorize('if-authuser-allows', $this->userinfo);

        $lastPosts = $this->userinfo->posts()->approve('draft')->paginate(15);

        $patitle = trans('index.draft');

        return view("pages.users.otherposts", compact('lastPosts', 'patitle'));

    }

    public function deletedposts(){

        $this->authorize('if-authuser-allows', $this->userinfo);

        $lastPosts = $this->userinfo->posts()->onlyTrashed()->paginate(15);

        $patitle = trans('index.trash');

        return view("pages.users.otherposts", compact('lastPosts', 'patitle'));

    }


    public function settings()
    {

        $this->authorize('if-authuser-allows', $this->userinfo);

        return view("pages.users.settings");

    }

    public function updatesettings(Request $request){

        $this->authorize('if-authuser-allows', $this->userinfo);

        $inputs= $request->all();

        $val = $this->validator($inputs, $this->userinfo->id);

        if($val->fails()){

            \Session::flash('error.message',  $val->errors()->first());

            return redirect()->back()->withInput($inputs);
        }

        $icon = $request->file('icon');

        if($icon){
            $tmpFilePath = 'upload/media/members/avatar/';

            $hardPath =  str_slug($inputs['username'], '-').'-'.md5(time());

            $img = Image::make($icon);

            $img->fit(200, 200)->save($tmpFilePath.$hardPath.'-b.jpg');
            $img->fit(90, 90)->save($tmpFilePath.$hardPath. '-s.jpg');

            $this->userinfo->icon = $hardPath;
        }

        $this->userinfo->username = $inputs['username'];
        $this->userinfo->username_slug =  str_slug($inputs['username'], '-');
        $this->userinfo->email = $inputs['email'];
        $this->userinfo->password =bcrypt($inputs['password']);
        $this->userinfo->name = $inputs['name'];
        $this->userinfo->town = $inputs['town'];
        $this->userinfo->genre = $inputs['gender'];
        $this->userinfo->about = $inputs['about'];
        $this->userinfo->facebookurl = $inputs['facebook'];
        $this->userinfo->twitterurl = $inputs['twitter'];
        $this->userinfo->weburl = $inputs['web'];

        $this->userinfo->save();

        \Session::flash('success.message',  trans('index.successupdated'));

        return redirect('/profile/'.str_slug($inputs['username'], '-').'/settings');

    }



    /**
     * Validator update.
     */
    public function validator(array $request, $userid)
    {

        $rules = [
            'username' => 'required|max:35|min:3|unique:users,username,'.$userid,
            'email' => 'required|email|max:75|unique:users,email,'.$userid,
            'password' => 'min:6|max:15',
            'icon' => 'mimes:jpg,jpeg,gif,png',
            'name' => 'max:20|min:3',
            'town' => 'max:20|min:3',
            'gender' => 'max:20|min:3',
            'about' => 'max:500|min:3',
            'facebook' => 'url|max:100|min:7',
            'twitter' => 'url|max:100|min:7',
            'web' => 'url|max:100|min:7',
        ];



        return \Validator::make($request, $rules);

    }


}
