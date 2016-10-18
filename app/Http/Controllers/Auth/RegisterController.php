<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Person;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */
    use RegistersUsers;

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Show the registration form.
     *
     * @return void
     */
    protected function showRegistrationForm()
    {
        return view('auth.register', [
            'email' => session()->has('email') ? session()->get('email') : ''
        ]);
    }

    /**
     * Process the user registration.
     *
     * @return void
     */
    protected function register(Request $request)
    {
        $this->validate($request, $this->rules());

        $user = $this->createUser($request->all());

        $this->sendRegistrationEmail($request->all());

        auth()->login($user);

        return redirect($this->redirectTo);
    }

    /**
     * Return the registration validation rules
     *
     * @return array
     */
    protected function rules()
    {
        return [
            'first_name' => 'required|max:20|min:3',
            'last_name' => 'required|max:20|min:3',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6',
        ];
    }

    /**
     * Create a new user.
     *
     * @param  array  $data
     * @return User
     */
    protected function createUser(array $data)
    {
        $user = User::create([
            'email'       => $data['email'],
            'nickname'    => $data['email'],
            'password'    => bcrypt($data['password']),
            'role'        => 'person',
        ]);

        Person::create([
            'user_id'    => $user->id,
            'first_name' => $data['first_name'],
            'last_name'  => $data['last_name'],
        ]);

        return $user;
    }

    /**
     * Send the registration email.
     *
     * @param  array  $data
     * @return void
     */
    protected function sendRegistrationEmail(array $data)
    {
        $title = trans('user.emails.verification_account.subject');

        $name = $data['first_name'].' '.$data['last_name'];

        \Mail::queue('emails.accountVerification', ['data' => $data, 'title' => $title, 'name' => $name], function ($message) use ($data) {
            $message->to($data['email'])->subject(trans('user.emails.verification_account.subject'));
        });

        session()->put('message', trans('user.signUp_message', ['_name' => $name]));

        session()->save();
    }
}