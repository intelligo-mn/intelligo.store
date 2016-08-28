<?php

namespace app\Services;

use App\Person;
use App\User;
use Illuminate\Contracts\Auth\Registrar as RegistrarContract;
use Validator;

class Registrar implements RegistrarContract
{
    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     *
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function validator(array $data)
    {
        return Validator::make($data, [
            'first_name' => 'required|max:20|min:3',
            'last_name'  => 'required|max:20|min:3',
            'nickname'   => 'required|max:20|unique:users',
            'email'      => 'required|email|max:255|unique:users',
            'role'       => 'required',
            'password'   => 'required|confirmed|min:6',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data
     *
     * @return User
     */
    public function create(array $data)
    {
        $role = $data['role'];
        if ($role == 'admin' && !Auth::user()->isAdmin()) {
            $role = 'person';
        }

        $user = User::create([
            'nickname' => $data['nickname'],
            'email'    => $data['email'],
            'password' => bcrypt($data['password']),
            'role'     => $role,
        ]);

        Person::create([
            'user_id'    => $user->id,
            'first_name' => $data['first_name'],
            'last_name'  => $data['last_name'],
        ]);

        return $user;
    }
}
