<?php
namespace Simexis\Installer\Middleware;

use Closure;

class CanInstall
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($this->alreadyInstalled()) {
            return redirect()->route('installer::upgrade');
        }
        
        return $next($request);
    }
    /**
     * If application is already installed.
     *
     * @return bool
     */
    public function alreadyInstalled()
    { 
        return app('installer')->getFileManager()->isInstalled();
    }
}