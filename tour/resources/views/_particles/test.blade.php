  <div class="header__usernav">
                @if(Auth::check() and Auth::user()->usertype=='Admin' or getcong('UserCanPost') !="false")
                    <div class="create-links hor">
                        <a class="button button-rosy" href="javascript:;"><i class="fa fa-plus-circle"></i><b>{{ trans('index.create') }}</b></a>
                        <ul class="sub-nav ">
                            @foreach(\App\Categories::where("main", '1')->where("disabled", '0')->orwhere("main", '2')->where("disabled", '0')->orderBy('order')->get() as $categorys)
                                <li>
                                    <a href="{{ action('PostsController@CreateNew', ['new'=>$categorys->posturl_slug]) }}" class="sub-item"><i class="fa fa-{{ $categorys->icon }}"></i> {{ trans('index.new', ['type' => ucfirst($categorys->posturl_slug) ]) }}</a>
                                </li>

                            @endforeach


                        </ul>
                    </div>
                @endif
                <ul class="navmenu">
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
                    @else
                        @unless(Request::is('login') or Request::is('register'))
                            <li class="pull-r">
                                <a class="signin_link" href="{{ action('Auth\AuthController@login') }}" rel="get:Loginform"><i class="fa fa-user" style="font-size:20px"></i></a>
                            </li>
                        @endunless
                    @endif

                </ul>
            </div>
