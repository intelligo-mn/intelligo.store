<header class="header--section header--style-1">
    <div class="header--topbar bg--color-2">
        <div class="container">
            <div class="float--left float--xs-none text-xs-center">
                <ul class="header--topbar-info nav">
                    <li><i class="fa fm fa-map-marker"></i>New York</li>
                    <li><i class="fa fm fa-mixcloud"></i>21<sup>0</sup> C</li>
                    <li><i class="fa fm fa-calendar"></i>Today (Sunday 19 April 2017)</li>
                </ul>
            </div>
            <div class="float--right float--xs-none text-xs-center">
                <ul class="header--topbar-action nav">
                    @if(!Auth::check())
                        <li ><a href="/login"><i class="fa fm fa-user-o"></i>{{ trans('index.login') }}</a></li>
                    @endif
                    @if(Auth::check())
                        <li ><a href="{{ action('UsersController@index', [ Auth::user()->username_slug ]) }}" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fm fa-user-o"></i>{{ Auth::user()->username }}</a>
                            <ul class="dropdown-menu">
                                <li><a href="{{ action('UsersController@updatesettings', ['id' => Auth::user()->username_slug ]) }}"> { trans('index.settings') }}</a></li>
                               @if(Auth::user()->usertype=='Admin')
                                    <li>
                                        <a href="/admin">{{ trans('index.adminp') }}</a>
                                    </li>
                               @endif
                                <li>
                                    <a href="{{ action('Auth\AuthController@logout') }}">{{ trans('index.logout') }}</a>
                                </li>
                            </ul>
                        </li>
                    @endif
                </ul>
                <ul class="header--topbar-lang nav">
                    <li class="dropdown"> 
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        @if(Session::get ('locale') == 'en')
                          <img width="24px" height="24px" src="{!! asset('assets/img/en.svg')!!}" alt="English">
                        @elseif(Session::get ('locale') == 'mn')
                          <img width="24px" height="24px" src="{!! asset('assets/img/mn.svg')!!}" alt="Mongolia">
                        @elseif(Session::get ('locale') == 'ru')
                          <img width="24px" height="24px" src="{!! asset('assets/img/ru.svg')!!}" alt="Russia">
                        @endif 
                        {{ \Config::get('app.language.'.$DB_USER_LANG)['name']  }}<i class="fa flm fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="/selectlanguge/en"><img width="24px" height="24px" src="{!! asset('assets/img/en.svg')!!}" alt="English"> English</a></li>
                            <li><a href="/selectlanguge/ru"><img width="24px" height="24px" src="{!! asset('assets/img/ru.svg')!!}" alt="English"> Russia</a></li>
                            <li><a href="/selectlanguge/mn"><img width="24px" height="24px" src="{!! asset('assets/img/mn.svg')!!}" alt="English"> Mongolia</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="header--topbar-social nav hidden-sm hidden-xxs">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i class="fa fa-rss"></i></a></li>
                    <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="header--mainbar">
        <div class="container">
            <div class="header--logo float--left float--sm-none text-sm-center">
                <h1 class="h1"> <a href="{{ action('IndexController@index') }}" class="btn-link"> <img src="uriankhai/img/logo.png" alt="USNews Logo"> <span class="hidden">USNews Logo</span> </a> </h1> </div>
            <div class="header--ad float--right float--sm-none hidden-xs">
                <a href="#"> <img src="uriankhai/img/ads-img/ad-728x90-01.jpg" alt="Advertisement"> </a>
            </div>
        </div>
    </div>
    <div class="header--navbar style--1 navbar bd--color-1 bg--color-1" data-trigger="sticky">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#headerNav" aria-expanded="false" aria-controls="headerNav"> <span class="sr-only">Toggle Navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
            </div>
            <div id="headerNav" class="navbar-collapse collapse float--left">
                <ul class="header--menu-links nav navbar-nav" data-trigger="hoverIntent">
                    <li>
                      <a href="{{ action('IndexController@index') }}" data-type="{{ action('IndexController@index') }}">{{ trans('index.home') }}</a>
                         
                   </li>

                    @foreach(\App\Pages::where('footer', '1')->
                    where("lang", \Session::get('locale'))->get() as $page)
                        <li> <a href="{{ action('PagesController@showpage', [$page->slug ]) }}" title="{{ $page->title }}">{{ $page->title }}</a></li>
                    @endforeach
                
                    @foreach(\App\Categories::where("main", '1')->where("disabled", '0')->orwhere("main", '2')->
                        where("lang", \Session::get('locale'))->
                        where("disabled", '0')->orderBy('order')->limit(5)->get() as $categorys)
                        <li>
                            <a href="{{ url($categorys->name_slug) }}" data-type="{{ $categorys->id }}">{{ $categorys->name }} </a>
                        </li>
                    @endforeach
                </ul>
            </div>
            <form action="#" class="header--search-form float--right" data-form="validate">
                <input type="search" name="search" placeholder="Search..." class="header--search-control form-control" required>
                <button type="submit" class="header--search-btn btn"><i class="header--search-icon fa fa-search"></i></button>
            </form>
        </div>
    </div>
</header>