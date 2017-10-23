<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use YAAP\Theme\Facades\Theme;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

abstract class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct(){


        Theme::init(getenvcong('CurrentTheme'));

        $lang = \Session::get('locale');
        if ($lang == null){
            $lang = getenvcong('sitedefaultlanguage');
            \Session::put('locale', $lang);
        }

        Carbon::setLocale($lang);
        \App::setLocale($lang);



        \View::share(['DB_PLUGIN_NEWS' => getenvcong('p-buzzynews'),
            'DB_PLUGIN_LISTS' => getenvcong('p-buzzylists'),
            'DB_PLUGIN_POLLS' => getenvcong('p-buzzypolls'),
            'DB_PLUGIN_VIDEOS' =>  getenvcong('p-buzzyvideos'),
            'DB_PLUGIN_QUIZS' => getenvcong('p-buzzyquizzes'),
            'DB_USER_LANG' => $lang
        ]);




    }

}
