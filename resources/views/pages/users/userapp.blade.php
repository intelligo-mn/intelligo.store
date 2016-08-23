@extends("app")
@section('head_title', $userinfo->username.' | '. getcong('sitename'))
@section('modeboxed', 'mode-boxed')
@section("content")

    <div class="content">

        <div class="container" style="padding: 0; ">

            <div class="profile-splash">
        <div class="profile-splash-cov"></div>
            <img src="{{ makepreview($userinfo->splash, 'b', 'members/splash') }}" width="100%" data-big="" alt="{{ $userinfo->username }}" class="profile-splash-img">
               <div class="profile-section">


                    <a href="/profile/{{ $userinfo->username_slug }}"><img src="{{ makepreview($userinfo->icon, 'b', 'members/avatar') }}" width="180" height="180" data-big="" alt="{{ $userinfo->username }}" class="profile-image"></a>

                </div>

                <div class="profile-display-name">
                    <a href="/profile/{{ $userinfo->username_slug }}" style="margin-right:5px;">  {{ $userinfo->username }}</a>

                    @if($userinfo->usertype == 'Admin')
                        <div class="label label-admin" style="top:-5px;font-size:12px;">{{ trans('updates.usertypeadmin') }}</div>
                    @elseif($userinfo->usertype == 'Staff')
                        <div class="label label-staff" style="top:-5px;font-size:12px;">{{ trans('updates.usertypestaff') }}</div>
                    @elseif($userinfo->usertype == 'banned')
                        <div class="label label-banned" style="top:-5px;font-size:12px;">{{ trans('updates.usertypebanned') }}</div>
                    @endif
                </div>

                <div id="following_area" class="profile-follow">
                    @include('.pages.users._userfollowbutton')
                </div>
            </div>

            <div class="profile-wrap">

                <div class="profile-content clearfix">

                    <div class="profile-sidebar">

                        <div class="profile-section">

                           <div class="profile-details">
                                @if($userinfo->name)
                                    <div class="profile-detail">
                                        <strong>{{ trans('index.usern') }}</strong>
                                        {{ $userinfo->name }}
                                    </div>
                                @endif
                                @if($userinfo->genre)
                                    <div class="profile-detail">
                                        <strong>{{ trans('index.gender') }}</strong>
                                        {{ $userinfo->genre }}
                                    </div>
                                @endif
                                @if($userinfo->town)
                                    <div class="profile-detail">
                                        <strong>{{ trans('index.location') }}</strong>
                                        {{ $userinfo->town }}
                                    </div>
                                @endif
                            </div>



                            @can('if-authuser-allows', $userinfo)
                            <a class="button button-blue button-full set-button" href="/profile/{{ $userinfo->username_slug }}/settings">{{ trans('index.settings') }}</a>
                            @endcan
                        </div>

                        <div class="profile-section">
                            @if($DB_PLUGIN_NEWS == 'on')<div class="profile-stat">    <div class="profile-stat-label">   <i class="fa fa-file-text"></i>   <span class="stat-text">{{ trans('index.total', ['type' => trans('index.news') ]) }}</span>    </div>      <a class="profile-stat-count" href="/profile/{{ $userinfo->username_slug }}/news">{{ $newscount }} </a>     </div>@endif
                            @if($DB_PLUGIN_LISTS == 'on')<div class="profile-stat">    <div class="profile-stat-label">   <i class="fa fa-th-list"></i>   <span class="stat-text">{{ trans('index.total', ['type' => trans('index.lists') ]) }}</span>    </div>    <a class="profile-stat-count" href="/profile/{{ $userinfo->username_slug }}/lists">{{ $listscount }} </a>      </div>@endif
                            @if($DB_PLUGIN_QUIZS == 'on')<div class="profile-stat">    <div class="profile-stat-label">   <i class="fa fa-question-circle"></i>   <span class="stat-text">{{ trans('index.total', ['type' => trans('moduquiz.quizzes') ]) }}</span>    </div>    <a class="profile-stat-count" href="/profile/{{ $userinfo->username_slug }}/quizzes">{{ $quizzescount }} </a>  </div>@endif
                            @if($DB_PLUGIN_POLLS == 'on')<div class="profile-stat">    <div class="profile-stat-label">   <i class="fa fa-check-circle-o"></i>   <span class="stat-text">{{ trans('index.total', ['type' => trans('index.polls') ]) }}</span>    </div>    <a class="profile-stat-count" href="/profile/{{ $userinfo->username_slug }}/polls">{{ $pollscount }} </a>  </div>@endif
                            @if($DB_PLUGIN_VIDEOS == 'on')<div class="profile-stat">    <div class="profile-stat-label">   <i class="fa fa-youtube-play"></i>   <span class="stat-text">{{ trans('index.total', ['type' => trans('index.videos') ]) }}</span>    </div>    <a class="profile-stat-count" href="/profile/{{ $userinfo->username_slug }}/videos">{{ $videoscount }} </a>   </div>@endif
       
                             @foreach(\App\Categories::where("main", '1')->where("disabled", '0')->orwhere("main", '2')->where("disabled", '0')->orderBy('order')->get() as $categorys)
                                <div class="profile-stat">
                                    <div class="profile-stat-label">
                                    <a href="{{ action('PostsController@CreateNew', ['new'=>$categorys->posturl_slug]) }}" class="sub-item"><i class="fa fa-{{ $categorys->icon }}"></i> {{ trans('index.new', ['type' => ucfirst($categorys->posturl_slug) ]) }}</a>
                                    </div>
                                </div>

                            @endforeach
       
@if($userinfo->about )
                        <div class="profile-section">
                            <div class="profile-sidebar-label">
                                {{ trans('index.about') }}
                            </div>
                            <p>{{ $userinfo->about }}</p>
                        </div>
@endif
                        @if($userinfo->facebookurl or $userinfo->twitterurl or $userinfo->weburl )
                        <div class="profile-section">
                            <div class="profile-sidebar-label">
                                 {{ trans('index.links') }}
                            </div>

                            <div class="external-sign-in">
                                @if($userinfo->facebookurl) <a href="{{ $userinfo->facebookurl }}" class="Facebook mini"></a> @endif
                                @if($userinfo->twitterurl)<a href="{{ $userinfo->twitterurl }}" class="Twitter mini"></a> @endif
                                @if($userinfo->weburl) <a href="{{ $userinfo->weburl }}" class="Weburl mini"><i class="fa fa-external-link" style="margin-top:10px"></i></a> @endif
                            </div>

                        </div>
                        @endif
                        @if($userinfo->following()->count() > 0)
                        <div class="profile-section follow-images">
                            <div class="profile-sidebar-label">
                                {{ trans('updates.following') }}

                                <a class="more_follow" href="/profile/{{ $userinfo->username_slug }}/following">{{ trans('updates.allfollow', ['count' => $userinfo->following()->count()]) }}</a>
                            </div>
                            @foreach($userinfo->following()->take(12)->get() as $following)

                                <a class="follow-image" href="/profile/{{ $following->followed->username_slug }}" title="{{ $following->followed->username }}"><img src="{{ makepreview($following->followed->icon, 's', 'members/avatar') }}" width="52" height="52" alt="{{ $following->followed->username }}"></a>

                            @endforeach
                        </div>
                        @endif
                        @if($userinfo->followers()->count() > 0)
                        <div class="profile-section follow-images">
                            <div class="profile-sidebar-label">
                                {{ trans('updates.followers') }}
                                <a class="more_follow" href="/profile/{{ $userinfo->username_slug }}/followers"> {{ trans('updates.allfollow', ['count' => $userinfo->followers()->count()]) }}</a>
                            </div>
                            @foreach($userinfo->followers()->take(12)->get() as $follower)

                                <a class="follow-image" href="/profile/{{ $follower->follower->username_slug }}" title="{{ $follower->follower->username }}"><img src="{{ makepreview($follower->follower->icon, 's', 'members/avatar') }}" width="52" height="52" alt="{{ $follower->follower->username }}"></a>

                            @endforeach
                        </div>
                        @endif


                        <div class="profile-section" style="border:0">
                            {!! trans('index.joinedat', ['time' => $userinfo->created_at->diffForHumans() ]) !!}
                        </div>

                    </div>

                    <div class="profile-main">

                        @yield("usercontent")
                        
                    </div>
                     
                </div>
            </div>


        </div>

    </div>

@endsection