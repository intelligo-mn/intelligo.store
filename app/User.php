<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class User extends Model implements AuthenticatableContract,
                                    AuthorizableContract,
                                    CanResetPasswordContract
{
    use Authenticatable, Authorizable, CanResetPassword;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['usertype', 'username', 'username_slug', 'name', 'surname', 'genre', 'about', 'facebookurl', 'twitterurl', 'weburl', 'email', 'icon', 'splash', 'password', 'remember_token'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password'];


    public function posts(){

        return $this->hasMany('App\Posts', 'user_id');

    }

    public function comments(){

        return $this->hasMany('App\Comments', 'user_id');

    }

    public function vote(){

        return $this->hasMany('App\PollVotes', 'user_id');

    }
    public function followers(){

        return $this->hasMany('App\Followers', 'followed_id');

    }
    public function following(){

        return $this->hasMany('App\Followers', 'user_id');

    }

    public static function findByUsernameOrFail($username,$columns = array('*')) {
        if ( ! is_null($user = static::where('username_slug', $username)->first($columns))) {
            return $user;
        }

        abort(404);
    }


    /**
     * Check user owns related model
     *
     * @param $related
     * @return bool
     */
    public function userifowns($related){

        return $this->id == $related->user_id;

    }

    public function userifhaveyourowns($relateduser){

        return $this->id == $relateduser->id;

    }



    public function setUsername_slugAttribute($username)
    {
        return $this->attributes['username_slug'] = str_slug($username, '-');
    }



}

