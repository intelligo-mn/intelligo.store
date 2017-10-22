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
            return Socialite::driver($type)->stateless()->scopes(['email', 'public_profile'])->redirect();
        }else{
            return Socialite::driver($type)->redirect();
        }

        return Socialite::driver($type)->stateless()->redirect();
    }

    /**
     * Obtain the user information from facebook.
     *
     * @return Response
     */
    public function handleSocialCallback($type, User $user)
    {

        if($type=='facebook'){
            $money = Socialite::driver($type)->stateless()->user();
        }else {
            $money = Socialite::driver($type)->user();
        }


        if($money->getEmail() > ""){
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

        $checkUserslug = User::where('username', $username)->orwhere('username_slug', $username)->first();
        if(isset($checkUserslug)){
            $username=$username.'-'.substr(md5(time()),0,5);
            $username_slug=str_slug($username, '-').'-'.substr(md5(time()),0,5);
        }else{
           $username_slug=str_slug($username, '-');
        }

        $user->facebook_id = $money->getId();
        $user->username = $username;
        $user->username_slug = $username_slug;
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

        $req = $request->all();


        $okay = Validator::make($req, [
            'email' => 'required|email',
            'password' => 'required',
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


        $req = $request->all();

        $val = $this->validator($req);

        if(getenvcong('BuzzyContactCaptcha')=="on"){
            if(empty($req['g-recaptcha-response'])){
                return array("errors" => trans('buzzycontact.areyouhuman'));
            }
        }

        if($val->fails()){

            return array('status' => trans('updates.error'), 'errors' => $val->errors()->first());

        }




        Auth::login($this->create($request->all()));

        if(!empty(getenvcong('MAIL_USERNAME'))){
            $this->mailtoregistareduser();
        }

        return array('status' => trans('auth.congratz'), 'text' => trans('auth.joined'), 'url' => '/');

    }


    protected function mailtoregistareduser()
    {

        try{
            $this->mail->send('emails.registered', compact(""), function($message)
            {
                $message->sender(getenvcong('siteemail'), getenvcong('sitename'));
                $message->subject(trans('updates.registermailsubject'));
                $message->from(getenvcong('siteemail'), getenvcong('sitename'));
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
