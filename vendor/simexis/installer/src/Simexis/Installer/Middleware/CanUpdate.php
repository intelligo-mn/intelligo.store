<?php
namespace Simexis\Installer\Middleware;

use Closure;

class CanUpdate
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
        if($this->notInstalled()) {
            return redirect()->route('installer::welcome');
        }
        if($this->upToDate()) {
            return redirect(url());
        }
        
        return $next($request);
    }
    /**
     * Check if the application is not installed.
     *
     * @return bool
     */
    public function notInstalled()
    {
		return ! app('installer')->getFileManager()->isInstalled();
    }
    /**
     * Check if an update is available.
     *
     * @return bool
     */
    public function upToDate()
    {
		return !app('installer')->getFileManager()->isUpdatable();
    }
}