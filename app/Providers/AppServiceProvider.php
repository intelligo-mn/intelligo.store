<?php

namespace app\Providers;

use App\Category;
use App\Company;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $table = 'company';

        if (\Schema::hasTable($table)) {
            try {
                $main_company = Company::find(1);
            } catch (ModelNotFoundException $e) {
                $main_company = Company::defaultCompany();
            }

            $categories_menu = \Cache::remember('categories_mothers', 25, function () {
                return Category::select('id', 'name')
                  ->childsOf('mothers')
                  ->actives()
                  ->get()->toArray();
            });

            $menu = [];

            foreach ($categories_menu as $value) {
                $menu[$value['id']] = $value;
            }

            \View::share('main_company', $main_company);
            \View::share('categories_menu', $menu);
        }
    }

    /**
     * Register any application services.
     *
     * This service provider is a great spot to register your various container
     * bindings with the application. As you can see, we are registering our
     * "Registrar" implementation here. You can add your own bindings too!
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            'Illuminate\Contracts\Auth\Registrar',
            'App\Services\Registrar'
        );
    }
}
