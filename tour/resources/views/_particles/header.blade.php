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
                    <i class="fa fa-bars"></i>
                </a>
            </div>
            <div id="colnav" class="toggle-nav pull-l" >
                <ul class="navmenu">
                    <li class="cats_link" ><a href="http://www.blog.toroo.info" class="biga firsg" data-type=""><i class="fa "></i> Нүүр хуудас <i class="fa fa-caret-right"></i></a></li>
                    
                    @foreach(\App\Categories::where("main", '1')->where("disabled", '0')->orwhere("main", '2')->where("disabled", '0')->orderBy('order')->limit(9)->get() as $categorys)
                        <li class="cats_link" ><a href="{{ url($categorys->name_slug) }}" class="biga firsg" data-type="{{ $categorys->id }}"><i class="fa fa-{{ $categorys->icon }}"></i> {{ $categorys->name }} <i class="fa fa-caret-right"></i></a></li>
                    @endforeach
                </ul>
            </div>
            <div class="clear"></div>
        </div>
    </div>
    
      <div class="navmenu login-button">
        @if(Auth::check())
            <li class="profile-info hor pull-r">
                <a href="javascript:;" class="user-profile">
                    <img src="{{ makepreview(Auth::user()->icon, 's', 'members/avatar') }}" width="32" height="32"  alt="{{ Auth::user()->username }}">
                    <span class="name"><i class="fa fa-caret-down" style="margin-right:0;"></i> </span>
                </a>
                <ul class="sub-nav">
                    <li>
                        <strong style="display:block;padding:0 15px 10px 10px;font-size:16px;font-weight: 600">{{ Auth::user()->username }}</strong>
                    </li>
                    <li>
                        <a class="sub-item" href="{{ action('UsersController@index', [ Auth::user()->username_slug ]) }}">{{ trans('index.myprofile') }}</a>
                    </li>
                    <li>
                        <a class="sub-item" href="{{ action('UsersController@followfeed', ['id' => Auth::user()->username_slug ]) }}">{{ trans('updates.feedposts') }}</a>
                    </li>
                    <li>
                        <a class="sub-item" href="{{ action('UsersController@draftposts', ['id' => Auth::user()->username_slug ]) }}">{{ trans('index.draft') }}</a>
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
                <div class="clear"></div>
            </li>
        @endif

    </div>
</header>

