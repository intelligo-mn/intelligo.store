<article role="main" itemscope itemtype="http://schema.org/NewsArticle" class="news__item" data-type="{{ $post->type }}" data-id="{{ $post->id }}" data-url="{{ makeposturl($post) }}" data-title="{{ $post->title }}" data-description="{{ $post->body }}" data-keywords="" data-share="0">
    <meta itemprop="mainEntityOfPage" content="{{ makeposturl($post) }}">
    <meta itemprop="dateModified" content="{{ $post->created_at->toW3cString() }}"/>
    <meta itemprop="inLanguage" content="{{ getenvcong('sitelanguage') }}" />
    <meta itemprop="genre" content="news" name="medium" />


    <div class="content-body">
        <div class="content-body--left">
            <div class="content-sticky">

                <div class="content-share">
                    <a class="content-share__item facebook buzz-share-button" data-share-type="facebook" data-type="news" data-id="{{ $post->id }}" data-post-url="/shared" data-title="{{ $post->title }}" data-sef="{{  makeposturl($post) }}">
                        <div class="content-share__icon facebook-white"></div>
                        @if(isset($post->shared->facebook))
                            <div class="content-share__badge buzz-share-badge-facebook {{ $post->shared->facebook > 0 ? 'is-visible': ''}} hide-phone">{{ $post->shared->facebook }}</div>
                        @endif
                    </a>
                    <a class="content-share__item twitter buzz-share-button" data-share-type="twitter" data-type="news" data-id="{{ $post->id }}" data-post-url="/shared" data-title="{{ $post->title }}" data-sef="{{  makeposturl($post)  }}">
                        <div class="content-share__icon twitter-white"></div>
                        @if(isset($post->shared->twitter))
                            <div class="content-share__badge buzz-share-badge-twitter {{ $post->shared->twitter > 0 ? 'is-visible': ''}} hide-phone">{{ $post->shared->twitter }}</div>
                        @endif
                    </a>
                    <a class="content-share__item gplus buzz-share-button" data-type="news" data-id="{{ $post->id }}" data-share-type="gplus" data-post-url="/shared" data-title="{{ $post->title }}" data-sef="{{ makeposturl($post) }}">
                        <div class="content-share__icon gplus-white"></div>
                        @if(isset($post->shared->gplus))
                            <div class="content-share__badge buzz-share-badge-gplus {{ $post->shared->gplus > 0 ? 'is-visible': ''}} hide-phone">{{ $post->shared->gplus }}</div>
                        @endif
                    </a>
                    <a class="content-share__item whatsapp buzz-share-button visible-phone" data-type="news" data-id="{{ $post->id }}" data-share-type="whatsapp" data-post-url="/shared" data-title="{{ $post->title }}" data-sef="{{  makeposturl($post) }}">
                        <div class="content-share__icon whatsapp-white"></div>
                        @if(isset($post->shared->whatsapp))
                            <div class="content-share__badge buzz-share-badge-whatsapp {{ $post->shared->whatsapp > 0 ? 'is-visible': ''}} hide-phone">{{ $post->shared->whatsapp }}</div>
                        @endif
                    </a>
                    <a class="content-share__item mail buzz-share-button" data-type="news" data-id="{{ $post->id }}" data-share-type="mail" data-post-url="/shared" data-title="{{ $post->title }}" data-sef="{{   makeposturl($post) }}">
                        <div class="content-share__icon mail-white"></div>
                        @if(isset($post->shared->mail))
                            <div class="content-share__badge buzz-share-badge-mail {{ $post->shared->mail > 0 ? 'is-visible': ''}} hide-phone">{{ $post->shared->mail }}</div>
                        @endif
                    </a>
                </div>
                <div class="content-font hide-phone">
                    <div class="content-font__item has-dropdown" data-target="font-dropdown-{{ $post->id }}" data-align="left-bottom">
                        <span class="content-font__icon"></span>
                    </div>
                    <div class="font-dropdown font-dropdown-{{ $post->id }} dropdown-container">
                        <ul>
                            <li class="font-dropdown__item dropdown-container__item ripple has-ripple" data-action="minus">
                                <span class="font-dropdown__item__icon font-dropdown__item__icon--minus"></span>
                            </li>
                            <li class="font-dropdown__item dropdown-container__item ripple has-ripple" data-action="plus">
                                <span class="font-dropdown__item__icon font-dropdown__item__icon--plus"></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-body--right">
            @if($post->approve == 'draft')
                <div class="label label-staff" >{{ trans('updates.thisdraftpost') }}</div>
            @endif
            <div class="content-title">
                <h1 itemprop="headline"><a href="{{ makeposturl($post) }}">{{ $post->title }}</a></h1>
            </div>

            @can('update-post', $post)
                  <div style="margin:5px 0">
                    @if(Auth::user()->usertype=='Admin')
                        @if($post->approve == 'no')
                            <a href="{{ action('Admin\PostsController@approvepost', $post->id) }}" class="button button-orange button-small" style="height:26px"><i class="material-icons" style="font-size: 18px;margin-top:-2px;vertical-align: middle">&#xE90A;</i> {{ trans('index.approve') }}</a>
                        @endif
                    @else
                        @if($post->approve == 'no')
                            <a href="#" class="button button-orange button-small" style="cursor: default;height:26px"><i class="material-icons"  style="font-size: 18px;margin-top:-2px;vertical-align: middle">&#xE422;</i> {{ trans('index.waitapprove') }}</a>
                        @endif
                    @endif

                    @if(getenvcong('UserEditPosts')=='yes' or Auth::user()->usertype=='Admin')
                        <a href="{{ action('PostsController@CreateEdit', [$post->id]) }}" class="button button-green button-small" style="height:26px"><i class="material-icons " style="font-size: 18px;margin-top:-2px;vertical-align: middle">&#xE150;</i>  {{ trans('index.edit') }}</a>
                    @endif
                    @if(getenvcong('UserDeletePosts')=='yes' or Auth::user()->usertype=='Admin')
                        <a href="{{ action('PostsController@sendtrashpost', [$post->id]) }}" onclick="confim()" class="button button-red button-small " style="height:26px"><i class="material-icons" style="font-size: 18px;margin-top:-2px;vertical-align: middle">&#xE16C;</i></a>
                    @endif
                  </div>
            @endcan
            @if(getenvcong('PostPreviewShow')=='yes')
            <figure class="content-body__image" itemprop="image" itemscope="" itemtype="https://schema.org/ImageObject">
                <img class="lazy" data-original="{{ makepreview($post->thumb, 'b', 'posts') }}" alt="{{ $post->title }}" width="788" style="display: block;">
                <meta itemprop="url" content="{{ makepreview($post->thumb, 'b', 'posts') }}">
                <meta itemprop="width" content="788">
                <meta itemprop="height" content="443">
            </figure>
            @endif
            <div class="content-info">
                <div class="clearfix" itemprop="author" itemscope="" itemtype="http://schema.org/Person" >

                    @if(isset($post->user->username_slug))
                            <!-- publisher -->
                            <div itemprop="publisher" itemscope="" itemtype="https://schema.org/Organization">
                                <div itemprop="logo" itemscope="" itemtype="https://schema.org/ImageObject">
                                    <meta itemprop="url" content="{{ makepreview($post->user->icon , 'b', 'members/avatar') }}">
                                    <meta itemprop="width" content="200">
                                    <meta itemprop="height" content="200">
                                </div>
                                <meta itemprop="name" content="{{ $post->user->username }}">
                                @if(isset($post->user->facebook))<meta itemprop="sameAs" content="{{ $post->user->facebook }}">@endif
                                @if(isset($post->user->twitter))<meta itemprop="sameAs" content="{{ $post->user->twitter }}">@endif
                            </div>

                        <div class="user-info {{ $post->user->genre }} answerer">
                            <div class="avatar left">
                                <img src="{{ makepreview($post->user->icon , 's', 'members/avatar') }}" width="45" height="45" alt="{{ $post->user->username }}">
                            </div>
                            <div class="info">


                                <a itemprop="name" class="content-info__author" href="{{ action('UsersController@index', [$post->user->username_slug ]) }}" target="_self">{{ $post->user->username}}</a>

                                @if($post->user->usertype == 'Admin')
                                    <div class="label label-admin" style="margin-left:5px">{{ trans('updates.usertypeadmin') }}</div>
                                @elseif($post->user->usertype == 'Staff')
                                    <div class="label label-staff" style="margin-left:5px">{{ trans('updates.usertypestaff') }}</div>
                                @elseif($post->user->usertype == 'banned')
                                    <div class="label label-banned" style="margin-left:5px">{{ trans('updates.usertypebanned') }}</div>
                                @endif


                                <div class="detail">

                                    {!! trans('index.postedon', ['time' => '<time  class="content-info__date" itemprop="datePublished" datetime="'.$post->published_at->toW3cString() .'">'.$post->published_at->diffForHumans() .'</time>' ]) !!}
                                    @unless($post->updated_at==$post->published_at)
                                        <div class="content-info__line">—</div> {!! trans('index.updatedon', ['time' => '<time class="content-info__date" itemprop="dateModified" datetime="'.$post->published_at->toW3cString() .'">'.$post->updated_at->diffForHumans() .'</time>' ]) !!}
                                    @endunless
                                </div>

                            </div>
                        </div>
                    <div style="float:right;color:#888;width:60px;text-align:right;font-size:13px;margin-top: 2px">
                        <b>{{ isset($post->popularityStats->all_time_stats) ? number_format($post->popularityStats->all_time_stats) : "0" }}</b><br> {{ trans('updates.views') }}
                    </div>

                    <div class="item_category">
                        <?php $postatpe=\App\Categories::where("type", $post->type)->first();
                        $postacatpe=getfirstcat($post->categories);
                        ?>
                        {!! isset($post->categories)  && isset($postacatpe) ? '<a href="'. action('PagesController@showCategory', ['id' => $postacatpe->name_slug ]).'" class="seca"> '.$postacatpe->name. '</a>' : '' !!} {!! isset($postatpe) ? '<a href="'.action('PagesController@showCategory', ['id' => $postatpe->name_slug ]) .'" style="margin-right:5px"> '.$postatpe->name. '</a>' : '' !!}
                    </div>

                    @endif

                </div>


            </div>
             @include('_particles.ads', ['position' => 'PostShareBw', 'width' => '788', 'height' => 'auto'])

            <div class="content-body__description" itemprop="description">{!! nl2br($post->body) !!}</div>


            <div class="content-body__detail" itemprop="articleBody">

                @include("_particles.lists.entryslists")

            </div>

            <!-- source url -->

            <!-- tags -->
            @if ($post->tags != "")
            <div class="content-tag hide-mobiles">
                    @foreach(explode(',', $post->tags) as $tag)
                    <span class="tagy"><a href="{{ action('PagesController@showtag', $tag) }}">{{$tag}}</a></span>
                    @endforeach
            </div>
            @endif

             @include('_particles.ads', ['position' => 'PostBelow', 'width' => '788', 'height' => 'auto'])

            @include("_forms._reactionforms")


            @if(getenvcong('PostPageAutoload') == 'related')
                @if(isset($lastFeatures))
                    @if(count($lastFeatures) >= 3)
                            <br>
                        <div class="colheader">
                            <h1>{{ trans('index.maylike') }}</h1>
                        </div>
                        @include("_particles.lists.may-like-posts")
                    @endif
                @endif
            @endif


            @if(isset($commentson))
            <div class="content-comments">
                <div class="content-comments">
                    @if(getenvcong('p-easycomment')=='on')
                            <!-- easyComment Content Div -->
                    <div id="easyComment_Content"></div>
                    <br><br>
                    <!-- easyComment -->
                    <script type="text/javascript">
                        // CONFIGURATION VARIABLES
                        var easyComment_ContentID = 'Post_{{ $post->id }}';
                        var easyComment_FooterLinks = 'Off'; // Disable footer links from the easyComment script for Buzzy Demo


                        /* * * DON'T EDIT BELOW THIS LINE * * */
                        var easyComment_Theme = '{{ getenvcong('easyCommentTheme') ? getenvcong('easyCommentTheme') : 'Default'}}';
                        var easyComment_Title = '{{ getenvcong('easyCommentTitle') ? getenvcong('easyCommentTitle') : 'Comments'}}';

                        var easyComment_userid = '{{ Auth::check() ? Auth::user()->id : '' }}';
                        var easyComment_username = '{{ Auth::check() ? Auth::user()->username : '' }}';
                        var easyComment_usericon = '{{ Auth::check() ? url(makepreview(Auth::user()->icon, 's', 'members/avatar')) : url(makepreview('', 's', 'members/avatar')) }}';
                        var easyComment_profillink = '{{ Auth::check() ? action('UsersController@index', [Auth::user()->username_slug ]) : '' }}';

                        var easyComment_Domain = '{{ getenvcong('easyCommentcode') }}';

                        (function() {
                            var EC = document.createElement('script');
                            EC.type = 'text/javascript';
                            EC.async = true;
                            EC.src = easyComment_Domain + 'plugin/embed.js';
                            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(EC);
                        })();
                    </script>

                    @endif

                    @if(getenvcong('p-facebookcomments')=='on')
                        <div class="colheader ">
                            <h1>{{ trans('index.conversations') }}</h1>
                        </div>

                        <div class="fb-comments" ref="{{ makeposturl($post) }}" data-numposts="5" data-width="100%" style="width: 100%"></div>

                        <style>.fb-comments{  width: 102%;}.fb_iframe_widget iframe{margin:-7px;    width: 102%;}</style>
   <br><br>
                    @endif
                    @if(getenvcong('p-disquscomments')=='on')
                        <div class="colheader ">
                            <h1>{{ trans('index.disqusconversations') }}</h1>
                        </div>
                        <div id="disqus_thread"></div>
                        <script>
                            /**
                             *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
                             *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
                             */
                            /*
                             var disqus_config = function () {
                             this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
                             this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                             };
                             */
                            (function() {  // DON'T EDIT BELOW THIS LINE
                                var d = document, s = d.createElement('script');

                                s.src = '//{!! getenvcong('DisqussCommentcode') !!}.disqus.com/embed.js';

                                s.setAttribute('data-timestamp', +new Date());
                                (d.head || d.body).appendChild(s);
                            })();
                        </script>
                        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>

                        <br><br>
                    @endif

                </div>
                @if($post->approve == 'yes')
                <style> .fb_dialog{z-index:999999999} </style>
                <div id="fb-root"></div>
                <script>(function(d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s); js.id = id;
                        js.src = "//connect.facebook.net/{{  getenvcong('sitelanguage') > "" ? getenvcong('sitelanguage') : 'en_US' }}/sdk.js#xfbml=1{!! getenvcong('facebookapp') > "" ? '&appId='.getenvcong('facebookapp') : '' !!}&version=v2.7";
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));</script>
                @endif
            </div>
            @endif

        </div>

    </div> <div class="clear"></div>
</article>
