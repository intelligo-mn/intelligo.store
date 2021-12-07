<?php

namespace App\Providers;

use Illuminate\Contracts\Auth\Access\Gate as GateContract;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any application authentication / authorization services.
     *
     * @param  \Illuminate\Contracts\Auth\Access\Gate  $gate
     * @return void
     */
    public function boot(GateContract $gate)
    {
        parent::registerPolicies($gate);


        $gate->define('user-can', function($user, $related){

            return $user->userifowns($related);

        });


        $gate->define('if-authuser-allows', function($user, $related){

            if($user->usertype=='Admin'){
                return true;
            }

            return $user->id === $related->id;
        });


        $gate->define('update-post', function ($user, $post) {


            if($user->usertype=='Admin' or $post->user_id == $user->id){
                return true;
            }

            return $user->id === $post->user_id;
        });





    }
}
