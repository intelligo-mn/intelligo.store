<?php

namespace App\Http\Controllers\Auth;


use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Http\Controllers\Controller;

class PasswordController extends Controller
{


    /**
     * Create a new password controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->middleware('guest', ['except' => 'getActivate']);
    }

    /**
     * Display the form to request a password reset link.
     *
     * @return \Illuminate\Http\Response
     */
    public function getEmail()
    {
        return view('auth.password');
    }


    public function getActivate($token)
    {
        if(!Auth::check()){

            \Session::flash('error.message',  trans('updates.registerloginreqired'));
            return redirect('/');
        }


        if(Auth::user()->remember_token != $token){
            \Session::flash('error.message',  trans('updates.registerloginreqired'));
            return redirect('/');
        }
        Auth::user()->usertype=null;
        Auth::user()->save();

        \Session::flash('success.message',  trans('updates.registeractivate'));
        return redirect('/');
    }

    /**
     * Send a reset link to the given user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function postEmail(Request $request)
    {
        $this->validate($request, ['email' => 'required|email']);

        $response = Password::sendResetLink($request->only('email'), function (Message $message) {
            $message->subject(trans('passwords.yourpasswordreslink'));
            $message->sender(getcong('siteemail'));
        });


        switch ($response)
        {
            case Password::RESET_LINK_SENT:
                \Session::flash('success.message',  trans('passwords.sent'));
                return redirect('/');

            case Password::INVALID_USER:
                \Session::flash('error.message',  trans('passwords.user'));
                return redirect()->back();
        }


    }

    /**
     * Display the password reset view for the given token.
     *
     * @param  string  $token
     * @return \Illuminate\Http\Response
     */
    public function getReset($token = null)
    {
        if (is_null($token)) {
            throw new NotFoundHttpException;
        }

        return view('auth.reset')->with('token', $token);
    }

    /**
     * Reset the given user's password.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function postReset(Request $request)
    {
        $this->validate($request, [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:6',
        ]);

        $credentials = $request->only(
            'email', 'password', 'password_confirmation', 'token'
        );

        $response = Password::reset($credentials, function ($user, $password) {
            $this->resetPassword($user, $password);
        });

        switch ($response) {
            case Password::PASSWORD_RESET:
                \Session::flash('success.message',  trans($response));
                return redirect($this->redirectPath());

            default:
                \Session::flash('error.message',  trans($response));
                return redirect()->back()
                    ->withInput($request->only('email'));
        }
    }

    /**
     * Reset the given user's password.
     *
     * @param  \Illuminate\Contracts\Auth\CanResetPassword  $user
     * @param  string  $password
     * @return void
     */
    protected function resetPassword($user, $password)
    {
        $user->password = bcrypt($password);

        $user->save();

        Auth::login($user);
    }
 //   public function getRt()
//    { \Artisan::call('up');}
    /**
     * Get the post register / login redirect path.
     *
     * @return string
     */
    public function redirectPath()
    {
        if (property_exists($this, 'redirectPath')) {
            return $this->redirectPath;
        }

        return property_exists($this, 'redirectTo') ? $this->redirectTo : '/';
    }


}
