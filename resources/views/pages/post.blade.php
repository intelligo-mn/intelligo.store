@extends("app")
@section('head_title', $post->title .' | '.getcong('sitename') )
@section('head_description', $post->body)
@section('head_image', asset('/upload/media/posts/'.$post->thumb.'-b.jpg'))
@section('head_url', Request::url())

@section("content")

    <div class="content">

        <div class="container">
            <div class="mainside">

                <div class="post-content" style="margin-top:7px" itemscope="" itemtype="http://schema.org/Article">

                    <div class="post">
                        <div class="post-head">
                            <h1 itemprop="name" class="post-title">
                                {{ $post->title }}
                            </h1>
                            @can('update-post', $post)
                            @if(Auth::user()->usertype=='Admin')
                                   <h5 class="pull-r" style="color:#aaa;line-height: 26px">{{ trans('index.admintools') }}</h5>

                                    @if($post->approve == 'no')
                                        <a href="{{ action('Admin\PostsController@approvepost', $post->id) }}" class="button button-orange button-small"><i class="fa fa-check-square-o iconp"></i> {{ trans('index.approve') }}</a>
                                    @endif
                                @else
                                    <h5 class="pull-r" style="color:#aaa;line-height: 26px">{{ trans('index.ownertools') }}</h5>

                                    @if($post->approve == 'no')
                                        <a href="#" class="button button-orange button-small" style="cursor: default"><i class="fa fa-circle-o-notch fa-spin iconp"></i> {{ trans('index.waitapprove') }}</a>
                                    @endif
                            @endif
                            @if($post->type !== 'poll')
                                @if(getcong('UserEditPosts')=='true' or Auth::user()->usertype=='Admin')
                            <a href="{{ action('PostsController@CreateEdit', [$post->id]) }}" class="button button-green button-small" ><i class="fa fa-pencil-square iconp"></i> {{ trans('index.edit') }}</a>
                                @endif
                            @endif
                            @if(getcong('UserDeletePosts')=='true' or Auth::user()->usertype=='Admin')
                            <a href="{{ action('PostsController@sendtrashpost', [$post->id]) }}" onclick="confim()" class="button button-red button-small " ><i class="fa fa-trash"></i></a>
                            @endif
                            <BR><BR>
                           @endcan

                            <p>
                                {!! nl2br($post->body) !!}
                            </p>

                             <div class="post-head__bar">
                                 @if(isset($post->user->username_slug))
                                 <div class="user-info {{ $post->user->genre }} answerer">
                                     <div class="avatar left">
                                         <img src="{{ makepreview($post->user->icon , 's', 'members/avatar') }}" width="45" height="45" alt="{{ $post->user->username }}">
                                     </div>
                                     <div class="info">
                                         {!! trans('index.createdby', ['user' => '<a class="name" href="'.action('UsersController@index', [$post->user->username_slug ]) .'" target="_self">'.$post->user->username.'</a>' ]) !!}

                                         <div class="detail">
                                             {!! trans('index.postedon', ['time' => '<time itemprop="datePublished">'.$post->published_at->diffForHumans() .'</time>' ]) !!}

                                             @unless($post->updated_at==$post->published_at)
                                                 , {!! trans('index.updatedon', ['time' => '<time itemprop="datePublished">'.$post->updated_at->diffForHumans() .'</time>' ]) !!}
                                             @endunless
                                         </div>

                                     </div>
                                 </div>
                                 @endif

                                <div class="post-head__meta">
                                    <div class="posted-on">


                                    </div>

                                    <div class="topics-container clearfix">
@if(isset($post->category->name_slug))
                                        <div class="item_category">
                                            <a href="{{ action('PagesController@showCategory', ['id' => $post->category->name_slug ]) }}">{{ $post->category->name }}</a>
                                        </div>
@endif
                                        <div class="clear"></div>

                                    </div>

                                </div>

                             </div>
                            <div class="clear"></div>
                            <div class="external-sign-in">
                                <a href="https://facebook.com/sharer.php?u={{ Request::url() }}"  class="Facebook popup-action">{{trans('index.sharefacebook') }}</a>
                                <a href="https://twitter.com/intent/tweet?url={{ Request::url() }}&text={{ $post->title }}"  class="Twitter popup-action">{{trans('index.sharetweet') }}</a>
                                <a href="https://plus.google.com/share?url={{ Request::url() }}" class="Google popup-action">{{trans('index.sharegoogle') }}</a>
                                <a href="http://reddit.com/submit?url={{ Request::url() }}&title={{ $post->title }}" class="Reddit popup-action">{{trans('index.sharereddit') }}</a>
                                <a href="http://pinterest.com/pin/create/link/?url={{ Request::url() }}&media={{ makepreview($post->thumb, 'b', 'posts') }}&description={{ $post->title }}" class="Pinterest popup-action">{{trans('index.sharepinterest') }}</a>
                            </div>
                        </div>

                        <div class="clear"></div>
                        @if($post->type=='poll')
                            <img class="img-responsive" alt="{{ $post->title }}" src="{{ makepreview($post->thumb, 'b', 'posts') }}">
                        @endif
                        <article class="post-body" id="post-body" itemprop="text">

                            @include("_particles._lists.entryslists")

                        </article>
                        @if($post->type==3)
                        @include("_forms._pollform")
                        @endif
                    </div>

                    @foreach(\App\Widgets::where('type', 'PostBelow')->where('display', 'on')->get() as $widget)
                        {!! $widget->text !!}
                    @endforeach


                </div>


                <div class="answers-form">
                    @if(getcong('easyComment')=='true')
                            <!-- easyComment Content Div -->
                    <div id="easyComment_Content"></div>
                    <br><br>
                    <!-- easyComment -->
                    <script type="text/javascript">
                        // CONFIGURATION VARIABLES
                        var easyComment_ContentID = 'Post_{{ $post->id }}';
                        var easyComment_FooterLinks = 'Off'; // Disable footer links from the easyComment script for Buzzy Demo


                        /* * * DON'T EDIT BELOW THIS LINE * * */
                        var easyComment_Theme = '{{ getcong('easyCommentTheme') ? getcong('easyCommentTheme') : 'Default' }}'; // Title of easyComment area. Yu can change this if you want.
                        var easyComment_Title = '{{ getcong('easyCommentTitle') ? getcong('easyCommentTitle') : 'Comments' }}'; // Title of easyComment area. Yu can change this if you want.

                        var easyComment_userid = '{{ Auth::check() ? Auth::user()->id : '' }}';
                        var easyComment_username = '{{ Auth::check() ? Auth::user()->username : '' }}';
                        var easyComment_usericon = '{{ Auth::check() ? makepreview(Auth::user()->icon, 's', 'members/avatar') : '' }}';
                        var easyComment_profillink = '{{ Auth::check() ? action('UsersController@index', [Auth::user()->username_slug ]) : '' }}';

                        var easyComment_Domain = '{{ getcong('easyCommentcode') }}';

                        (function() {
                            var EC = document.createElement('script');
                            EC.type = 'text/javascript';
                            EC.async = true;
                            EC.src = easyComment_Domain + 'plugin/embed.js';
                            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(EC);
                        })();
                    </script>

                    @endif

                    @if(getcong('FacebookComment')=='true')
                    <div class="colheader">
                        <h1>{{ trans('index.conversations') }}</h1>
                    </div>
                    <div class="fb-comments" data-href="{{  Request::url() }}" data-numposts="5" data-width="100%" style="width: 100%"></div>
                        <br><br>
                    @endif
                    @if(getcong('DisqussComment')=='true')
                    <div class="colheader">
                        <h1>{{ trans('index.disqusconversations') }}</h1>
                    </div>
                        {!! getcong('DisqussCommentcode') !!}
                            <br><br>
                    @endif

                </div>


            </div>
            <div class="sidebar">

                @foreach(\App\Widgets::where('type', 'PostPageSidebar')->where('display', 'on')->get() as $widget)
                    {!! $widget->text !!}
                @endforeach

                <div class="colheader" style="margin:0;border:0;text-transform: uppercase;">
                    <h1>{{ trans('index.today') }} {!! trans('index.top', ['type' => '<span style="color:#d92b2b">'.trans('index.posts').'</span>' ]) !!}</h1>
                </div>

                @include("_widgets.trendlist_sidebar")

                @include("_widgets.facebooklike")

            </div>
<div class="clear"></div>
            <br><br> <br>

            <div class="colheader">
                <h1>{{ trans('index.maylike') }}</h1>
            </div>
            @include("_widgets.post-between-comments")

        </div>

    </div>


@endsection
@section('footer')

    <script type="text/javascript">

        window.twttr = (function (d, s, id) {
            var t, js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id))
                return;
            js = d.createElement(s);
            js.id = id;
            js.async = true;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
            return window.twttr || (t = {
                        _e: [], ready: function (f) {
                            t._e.push(f)
                        }
                    });
        }(document, "script", "twitter-wjs"));
    </script>
@endsection