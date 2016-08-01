<header id="header" class="header">

    <div class="container">
        <div class="header__logo">
            <a href="/" title="">
                <img  class="site-logo" src="{{ url('/assets/img/logo.png') }}" alt="">
            </a>
        </div>
        <div class="header__nav">
            <div class="coltrigger pull-l">
                <a href="javascript:" id="menu-toggler">
                    <i class="fa fa-align-justify"></i>
                </a>
            </div>
            <div id="colnav" class="toggle-nav pull-l">
            <ul class="navmenu">
                <li @if(Request::segment(1)=='news') class="active" @endif>
                    <a  href="{{ url('news') }}">{{ trans('index.news') }}</a>
                </li>
                <li @if(Request::segment(1)=='lists' or Request::segment(1)=='list') class="active" @endif>
                    <a href="{{ url('lists') }}">{{ trans('index.lists') }}</a>
                </li>
                <li @if(Request::segment(1)=='polls' or Request::segment(1)=='poll') class="active" @endif>
                    <a href="{{ url('polls') }}">{{ trans('index.polls') }}</a>
                </li>
                <li @if(Request::segment(1)=='videos' or Request::segment(1)=='video') class="active" @endif>
                    <a href="{{ url('videos') }}">{{ trans('index.videos') }}</a>
                </li>
                <li class="hor">
                    <a class="cats_link" href="javascript:">{{ trans('index.sections') }}</a>
                    <ul class="sub-nav sections">
                        @foreach(\App\Categories::orderBy('name')->groupBy('name')->get() as $cat)
                            <li class="nav-polls">
                                <a class="sub-item" href="/{{ $cat->name_slug }}">{{ $cat->name }}</a>
                            </li>
                        @endforeach


                    </ul>
                </li>
            </ul>

            <div class="search_link">
                <div class="searchbox_container">
                    <form methot="get" action="/search"  role="search">
                        <input type="text" name="q" id="searchbox_text" placeholder="{{ trans('index.search') }}">
                    </form>
                </div>
                <a id="searchbutton" href="javascript:"><i class="fa fa-search"></i></a>
            </div>
            </div>
        </div>
        <div class="header__usernav">
            <div class="create-links hor">
                <a class="button button-rosy" href="{{ action('PostsController@CreateNew') }}"><i class="fa fa-plus-circle"></i><b>{{ trans('index.create') }}</b></a>
                <ul class="sub-nav ">
                    <li>
                        <a href="{{ action('PostsController@CreateNew') }}" class="sub-item"><i class="fa fa-file-text"></i> {{ trans('index.new', ['type' => trans('index.new-s') ]) }}</a>
                    </li>
                    <li>
                        <a href="{{ action('PostsController@CreateNew', ['new'=>'list']) }}" class="sub-item"><i class="fa fa-th-list"></i> {{ trans('index.new', ['type' => trans('index.list') ]) }}</a>
                    </li>
                    <li>
                        <a href="{{ action('PostsController@CreateNew', ['new'=>'poll']) }}" class="sub-item"><i class="fa fa-check-square-o"></i> {{ trans('index.new', ['type' => trans('index.poll') ]) }}</a>
                    </li>
                    <li>
                        <a href="{{ action('PostsController@CreateNew', ['new'=>'video']) }}" class="sub-item"><i class="fa fa-youtube-play"></i> {{ trans('index.new', ['type' => trans('index.video') ]) }}</a>
                    </li>
                </ul>
            </div>
            <ul class="navmenu">
            @if(Auth::check())
                <li class="profile-info hor pull-r">
                    <a href="{{ action('UsersController@index', [Auth::user()->username_slug ]) }}" class="user-profile">
                        <img src="{{ makepreview(Auth::user()->icon, 's', 'members/avatar') }}" width="32" height="32"  alt="{{ Auth::user()->username }}">
                        <span class="name"><i class="fa fa-caret-down"></i> <strong class="namegp"> {{ Auth::user()->username }}</strong></span>
                    </a>
                    <ul class="sub-nav">
                        <li>
                            <a class="sub-item" href="{{ action('UsersController@index', [ Auth::user()->username_slug ]) }}">{{ trans('index.myprofile') }}</a>
                        </li>
                        <li>
                            <a class="sub-item" href="{{ action('UsersController@deletedposts', ['id' => Auth::user()->username_slug ]) }}">{{ trans('index.trash') }}</a>
                        </li>
                        <li>
                            <a class="sub-item" href="{{ action('UsersController@updatesettings', ['id' => Auth::user()->username_slug ]) }}">{{ trans('index.settings') }}</a>
                        </li>
                        @if(Auth::user()->usertype=='Admin')
                        <li>
                            <a class="sub-item" href="/admin">{{ trans('index.adminp') }}</a>
                        </li>
                        @endif
                        <li>
                            <a class="sub-item" href="{{ action('Auth\AuthController@logout') }}">{{ trans('index.logout') }}</a>
                        </li>

                    </ul>
                </li>
            @else
                    @unless(Request::is('login') or Request::is('register'))
                <li class="pull-r">
                    <a class="signin_link" href="{{ action('Auth\AuthController@login') }}" rel="get:Loginform"><i class="fa fa-user" style="font-size:20px"></i></a>
                </li>
                    @endunless
            @endif

            </ul>
        </div>

    </div>
</header>
