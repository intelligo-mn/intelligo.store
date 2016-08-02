<?php

namespace App\Http\Controllers;

use App\Followers;
use App\Posts;
use App\User;
use Gate;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;

class UsersController extends Controller
{


    public function __construct(User $users, Request $request)
    {

        parent::__construct();

        $this->middleware('DemoAdmin', ['only' => ['updatesettings']]);

        $userslug = $request->segment('2');

        $userinfo= $users->where('username_slug', $userslug)->first();

        if(!$userinfo){
            abort('404');
        }

        $this->userinfo = $userinfo;


        $this->s3url=awsurl();


        $newscount = $userinfo->posts()->typesActivete()->approve('yes')->byType('news')->count();

        $listscount = $userinfo->posts()->typesActivete()->approve('yes')->byType('list')->count();

        $quizzescount = $userinfo->posts()->typesActivete()->approve('yes')->byType('quiz')->count();

        $videoscount = $userinfo->posts()->typesActivete()->approve('yes')->byType('video')->count();

        $pollscount = $userinfo->posts()->typesActivete()->approve('yes')->byType('poll')->count();


        \View::share(['userinfo' => $userinfo,
            'newscount' => $newscount,
            'listscount' => $listscount,
            'quizzescount' => $quizzescount,
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
        }elseif($requesttye == 'quizzes'){
            $t = 'quiz';
        }elseif($requesttye == 'videos'){
            $t = 'video';
        }elseif($requesttye == 'polls'){
            $t = 'poll';
        }else{
            $t = 'all';
        }

        $lastPosts = $this->userinfo->posts()->typesActivete()->approve('yes')->byType($t)->latest('published_at')->paginate(15);



        return view("pages.users.dashboard", compact('lastPosts'));

    }

    public function draftposts(){

        $this->authorize('if-authuser-allows', $this->userinfo);

        $lastPosts = $this->userinfo->posts()->typesActivete()->approve('draft')->latest('published_at')->paginate(15);

        $patitle = trans('index.draft');

        return view("pages.users.otherposts", compact('lastPosts', 'patitle'));

    }

    public function deletedposts(){

        $this->authorize('if-authuser-allows', $this->userinfo);

        $lastPosts = $this->userinfo->posts()->typesActivete()->onlyTrashed()->latest('published_at')->paginate(15);

        $patitle = trans('index.trash');

        return view("pages.users.otherposts", compact('lastPosts', 'patitle'));

    }

    public function follow(){

        if($this->userinfo->id == Auth::user()->id){
            return array(['error' => 'hata', 'message' => 'dasd']);
        }

        $follow = Followers::where("followed_id", $this->userinfo->id)->where("user_id", Auth::user()->id)->first();
        if($follow){
            $follow->delete();
        }else{
            $follow = new Followers;
            $follow->user_id = Auth::user()->id;
            $follow->followed_id = $this->userinfo->id;
            $follow->save();
        }


        return view('.pages.users._userfollowbutton', compact('this->userinfo'));
    }


    public function following()
    {


        $follows = $this->userinfo->following()->paginate(36);

        return view("pages.users.following", compact('follows'));

    }
    public function followers()
    {

        $follows = $this->userinfo->followers()->paginate(36);

        return view("pages.users.followers", compact('follows'));

    }
    public function followfeed()
    {

        $this->authorize('if-authuser-allows', $this->userinfo);


        $userIds = $this->userinfo->following()->lists('followed_id');

        $lastPosts = Posts::whereIn('user_id', $userIds)->typesActivete()->approve('yes')->latest("published_at")->paginate(10);


        return view("pages.users.followingposts", compact('lastPosts'));

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
       $splash = $request->file('splash');
       $username = isset($inputs['username']) ? $inputs['username'] : Auth::user()->username;
       $email = isset($inputs['email']) ? $inputs['email'] : Auth::user()->email;
       $password = $inputs['password'];

        if($icon){
            $tmpFilePath = 'upload/media/members/avatar/';

            $hardPath =  str_slug($username, '-').'-'.md5(time());

            $img = Image::make($icon);
            $img2 = Image::make($icon);

            $imbig=$img->fit(200, 200)->save($tmpFilePath.$hardPath.'-b.jpg');
            $imsmal=$img2->fit(90, 90)->save($tmpFilePath.$hardPath. '-s.jpg');

            $this->userinfo->icon = $hardPath;

            if(env('APP_FILESYSTEM')=="s3"){

                \Storage::disk('s3')->put($tmpFilePath.$hardPath.'-b.jpg', $imbig->stream()->__toString());

                \Storage::disk('s3')->put($tmpFilePath.$hardPath.'-s.jpg', $imsmal->stream()->__toString());

                \File::delete(public_path($tmpFilePath.$hardPath.'-b.jpg'));
                \File::delete(public_path($tmpFilePath.$hardPath.'-s.jpg'));


                $this->userinfo->icon = $this->s3url.$tmpFilePath.$hardPath;
            }

        }

        if($splash){
            $tmpFilePath = 'upload/media/members/splash/';

            $hardPath =  str_slug($username, '-').'-'.md5(time());

            $img = Image::make($splash);
            $img2 = Image::make($splash);

            $spabig=$img->fit(910, 250)->save($tmpFilePath.$hardPath.'-b.jpg');
            $spamal=$img2->fit(300, 120)->save($tmpFilePath.$hardPath. '-s.jpg');

            $this->userinfo->splash = $hardPath;

            if(env('APP_FILESYSTEM')=="s3"){

                \Storage::disk('s3')->put($tmpFilePath.$hardPath.'-b.jpg', $spabig->stream()->__toString());

                \Storage::disk('s3')->put($tmpFilePath.$hardPath.'-s.jpg', $spamal->stream()->__toString());

                \File::delete(public_path($tmpFilePath.$hardPath.'-b.jpg'));
                \File::delete(public_path($tmpFilePath.$hardPath.'-s.jpg'));

                $this->userinfo->splash = $this->s3url.$tmpFilePath.$hardPath;
            }
        }

        if(getcong('UserEditUsername')=='true' or Auth::user()->usertype=='Admin'){
            if($username){
                $this->userinfo->username = $username;
                $this->userinfo->username_slug =  str_slug($username, '-');
            }
        }

        if(getcong('UserEditEmail')=='true' or Auth::user()->usertype=='Admin'){
            if($email){
                $this->userinfo->email = $email;
            }
        }

        if($password){
            $this->userinfo->password =  bcrypt($password);
        }

        $this->userinfo->name = $inputs['name'];
        $this->userinfo->town = $inputs['town'];
        $this->userinfo->genre = $inputs['gender'];
        $this->userinfo->about = $inputs['about'];
        $this->userinfo->facebookurl = isset($inputs['facebook']) ? $inputs['facebook'] : '';
        $this->userinfo->twitterurl = isset($inputs['twitter']) ? $inputs['twitter'] : '';
        $this->userinfo->weburl = isset($inputs['web']) ? $inputs['web'] : '';

        $this->userinfo->save();

        \Session::flash('success.message',  trans('index.successupdated'));

        return redirect('/profile/'.str_slug($username, '-').'/settings');

    }



    /**
     * Validator update.
     */
    public function validator(array $request, $userid)
    {

        $rules = [
            'username' => 'max:35|min:3|unique:users,username,'.$userid,
            'email' => 'email|max:75|unique:users,email,'.$userid,
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
