<?php
namespace Simexis\Installer\Middleware;

use Closure;

class CanAccess
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

        if (!file_exists(base_path('storage/.buzzy'))) {
            return view('installer::install.home');
        }
        $code=file_get_contents(base_path('storage/.buzzy'), true);
        $jok=curlit('http://envato.akbilisim.com/api/BA'.$code.'?t=buzzy&r=2&u='.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
        $jok= json_decode($jok, true);

        if ($jok['d']!=$_SERVER['HTTP_HOST']){
            unlink(base_path('storage/.buzzy'));
            return redirect('/');
        }

        return $next($request);
    }

}