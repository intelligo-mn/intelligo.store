<?php

namespace app\Http\Middleware;

use Closure;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $roles = $this->getRequiredRoleForRoute($request->route());

        if (auth()->check() && $request->user()->hasRole($roles) || !$roles) {
            return $next($request);
        }
        
        return redirect()->route('home');
    }

    /**
     * Obtiene los roles requeridos por la ruta.
     *
     * @param string/array $route arreglo de cadenas o cadena con el nombre del rol necesario
     *
     * @return bool
     */
    private function getRequiredRoleForRoute($route)
    {
        $actions = $route->getAction();

        return isset($actions['roles']) ? $actions['roles'] : null;
    }
}
