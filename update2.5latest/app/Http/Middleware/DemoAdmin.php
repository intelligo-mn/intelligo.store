<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Guard;

class DemoAdmin
{
    /**
     * The Guard implementation.
     *
     * @var Guard
     */
    protected $auth;

    /**
     * Create a new filter instance.
     *
     * @param  Guard  $auth
     * @return void
     */
    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
    }


    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        if ($this->auth->check() and $this->auth->user()->email == 'demo@admin.com') {

            if ($request->ajax()) {
                return array('status' => 'Error', 'errors' => 'You have no permission for this as demo admin account!');
            } else {
                \Session::flash('error.message',  'You have no permission for this as demo admin account!');
                return redirect()->back();
            }
        }

        return $next($request);
    }
}
