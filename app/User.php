<?php

namespace Modu;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContracts;

class User extends Model implements AuthenticatableContracts
{
    use Authenticatable;
    
    protected $table = 'users';
    
    protected $fillable = [
        'username', 
        'email', 
        'password',
        'first_name',
        'last_name',
        'location',
    ];

    protected $hidden = [
        'password', 
        'remember_token',
    ];
}
