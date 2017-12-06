<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Auth;
use Laravel\Socialite\Facades\Socialite;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Mail\Mailer;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function __construct(Mailer $mailer)
    {
        $this->mail =$mailer;

        parent::__construct();
        $this->middleware('guest', ['except' => 'logout']);
    }


    /**
     * Redirect the user to the facebook authentication page.
     *
     * @return Response
     */
    public function socialConnectRedirect($type)
    {
        if($type=='facebook'){
            return Socialite::driver($type)->scopes(['email', 'public_profile'])->redirect();
        }

        return Socialite::driver($type)->redirect();
    }

    /**
     * Obtain the user information from facebook.
     *
     * @return Response
     */
    public function handleSocialCallback($type, User $user)
    {

        $money = Socialite::driver($type)->user();

        if(null !== $money->getEmail()){
                $checkUser = User::where('email', '=', $money->getEmail())->first();
                if($checkUser){
                    Auth::login($checkUser);
                    return redirect('/');
                }
        }else{
            \Session::flash('error.message', trans('auth.cantgetemail'));
            \Session::flash('username',  $money->getNickname());
            return redirect('/register');
        }

        if(null !== $money->getName() and null == $money->getNickname()){
            $username=$money->getName();
        }else{
            $username=$money->getNickname();
        }
        $key=substr(md5(time()),0,5);

        $user->facebook_id = $money->getId();
        $user->username = $username;
        $user->username_slug = str_slug($username, '-').'-'.$key;
        $user->name = $money->getName();
        $user->email = $money->getEmail();
        $user->icon  = $money->getAvatar();
        $user->remember_token = md5($money->getEmail());
        $user->save();

        Auth::login($user);

        \Session::flash('success.message', trans('auth.joined'));

        return redirect('/');

    }

    /**
     * Log the user out of the application.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        \Auth::logout();

        return redirect('/');
    }

    /**
     * Show the application login form.
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        if($request->ajax()){

            return view('_forms._loginform');

        }

        if (view()->exists('auth.authenticate')) {
            return view('auth.authenticate');
        }

        return view('auth.login');
    }



    /**
     * Show the application registration form.
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {

        if($request->ajax()){

            return view('_forms._signupform');

        }

        return view('auth.register');
    }


    /**
     * Handle a login request to the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function newlogin(Request $request)
    {

        $okay = Validator::make($request->all(), [
            'email' => 'required|email', 'password' => 'required',
        ]);

        if($okay->fails()){
            return array('errors' => $okay->errors()->first());
        }


        $credentials = $request->only('email', 'password');


        if (Auth::attempt($credentials, $request->has('remember'))) {

            if(Auth::user()->usertype=='banned'){
                \Auth::logout();
                return array("errors" => 'You account has been banned!');
            }

            return $this->handleUserWasAuthenticated($request);
        }

        return array("errors" => trans('auth.failed'));

    }



    /**
     * Send the response after the user was authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  bool  $throttles
     * @return \Illuminate\Http\Response
     */
    protected function handleUserWasAuthenticated(Request $request)
    {

        if (method_exists($this, 'authenticated')) {
            return $this->authenticated($request, Auth::user());
        }

        if(Auth::user()->usertype=='approve'){
            if(!empty(env('MAIL_USERNAME'))){
                $this->mailtoregistareduser();
            }
        }

        return array("success" => trans('auth.logined'), "url" => $this->redirectPath($request));
    }



    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function newRegister(Request $request)
    {

        $val = $this->validator($request->all());

        if($val->fails()){

            return array('status' => trans('updates.error'), 'errors' => $val->errors()->first());

        }

        Auth::login($this->create($request->all()));

        if(!empty(env('MAIL_USERNAME'))){
            $this->mailtoregistareduser();
        }

        return array('status' => trans('auth.congratz'), 'text' => trans('auth.joined'), 'url' => '/');

    }


    protected function mailtoregistareduser()
    {

        try{
            $this->mail->send('emails.registered', compact(""), function($message)
            {
                $message->sender(getcong('siteemail'), getcong('sitename'));
                $message->subject(trans('updates.registermailsubject'));
                $message->from(getcong('siteemail'), getcong('sitename'));
                $message->to(Auth::user()->email);
                $message->getSwiftMessage();
            });
        }
        catch(\Exception $e){
           return true;
        }


    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {

        $slug = str_slug($data['username'], '-');
        if(empty($slug)){

            $slug = substr(md5(time()),0,10);
        }

        return User::create([
            'usertype' => 'approve',
            'username' => $data['username'],
            'username_slug' => $slug,
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'remember_token' => md5($data['email']),
        ]);
    }

    /**
     * Validator register. Step One
     *
     */
    public function validator(array $request)
    {
        $rules = [
            'username' => 'required|unique:users|max:35|min:3',
            'email' => 'required|email|max:75|unique:users',
            'password' => 'required|min:6|max:15',
        ];

        return Validator::make($request, $rules);

    }

    /**
     * Get the post register / login redirect path.
     *
     * @return string
     */
    public function redirectPath($request)
    {
        return $request->query('redirectTo') ? $request->query('redirectTo') :  action('UsersController@index', [Auth::user()->username_slug]) ;
    }

}
