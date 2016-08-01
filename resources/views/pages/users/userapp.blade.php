@extends("app")
@section('head_title', $userinfo->username.' on '. getcong('sitename'))
@section("content")

    <div class="content">

        <div class="container" style="padding: 0; ">

            <div class="profile-wrap">

                <div class="profile-content clearfix">

                    <div class="profile-sidebar">


                        <div class="profile-section">
                              <div class="profile-display-name">
                                  <a href="/profile/{{ $userinfo->username_slug }}">  {{ $userinfo->username }}</a>
                              </div>

                            <a href="/profile/{{ $userinfo->username_slug }}"><img src="{{ makepreview($userinfo->icon, 'b', 'members/avatar') }}" width="120" height="120" data-big="" alt="{{ $userinfo->username }}" class="profile-image"></a>
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
                            <div class="profile-stat">    <div class="profile-stat-label">   <i class="fa fa-file-text"></i>   <span class="stat-text">{{ trans('index.total', ['type' => trans('index.news') ]) }}</span>    </div>      <a class="profile-stat-count" href="/profile/{{ $userinfo->username_slug }}/news">{{ $newscount }} </a>     </div>
                            <div class="profile-stat">    <div class="profile-stat-label">   <i class="fa fa-th-list"></i>   <span class="stat-text">{{ trans('index.total', ['type' => trans('index.lists') ]) }}</span>    </div>    <a class="profile-stat-count" href="/profile/{{ $userinfo->username_slug }}/lists">{{ $listscount }} </a>      </div>
                            <div class="profile-stat">    <div class="profile-stat-label">   <i class="fa fa-check-circle-o"></i>   <span class="stat-text">{{ trans('index.total', ['type' => trans('index.polls') ]) }}</span>    </div>    <a class="profile-stat-count" href="/profile/{{ $userinfo->username_slug }}/polls">{{ $pollscount }} </a>  </div>
                            <div class="profile-stat">    <div class="profile-stat-label">   <i class="fa fa-youtube-play"></i>   <span class="stat-text">{{ trans('index.total', ['type' => trans('index.videos') ]) }}</span>    </div>    <a class="profile-stat-count" href="/profile/{{ $userinfo->username_slug }}/videos">{{ $videoscount }} </a>   </div>
                        </div>
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
                                @if($userinfo->facebookurl) <a href="{{ $userinfo->facebookurl }}" class="Facebook do-signup tgec"></a> @endif
                                @if($userinfo->twitterurl)<a href="{{ $userinfo->twitterurl }}" class="Twitter do-signup tgec"></a> @endif
                                @if($userinfo->weburl) <a href="{{ $userinfo->weburl }}" class="Weburl do-signup tgec"><i class="fa fa-external-link"></i></a> @endif
                            </div>

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