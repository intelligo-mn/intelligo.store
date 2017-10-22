@extends("app")
@section('head_title',  $post->title.' | '.getenvcong('sitename'))
@section('og_type', 'article')
@section('head_description', str_limit(str_replace('"', '', $post->body), 150))
@section('head_image', url(makepreview($post->thumb, 'b', 'posts')))
@section('head_url', url(makeposturl($post)))
@section('header')
@if($post->type == 'news' || $post->type == 'list'  || $post->type == 'video' )
<link rel="amphtml" href="{{ url('amp/'.$post->type.'/'.$post->id) }}">
@endif
<meta property="og:image:width" content="780" />
<meta property="og:image:height" content="440" />
@endsection
@section("content")
@if(getenvcong('PostPageAutoload') != 'related')
<div class="content-header hide-mobile">
    <div class="content-header__container">
        <div class="content-header__container__left">
            <div class="content-header__container__left__home">
                <a href="/" title="Anasayfa"><i class="material-icons">&#xE88A;</i></a>
            </div>
            <div class="content-header__container__left__title"></div>
        </div>
        <div class="content-header__container__right">


        </div>
    </div>
    <div class="content-header__progress--container">
        <div class="content-header__progress--container__progress"></div>
    </div>
</div>
@endif
<div class="buzz-container">
    @include('_particles.ads', ['position' => 'HeaderBelow', 'width' => '728', 'height' => 'auto'])


    <div class="global-container container" style="padding-top:0!important">
        <div class="content"  style="padding-top:20px;border-right: 1px solid #e3e3e3;">


            <div class="news content-detail-page">

                @include('pages.postloadpage')

            </div>
            <div class="content-spinner">
                <svg class="spinner-container" width="45px" height="45px" viewBox="0 0 52 52">
                    <circle class="path" cx="26px" cy="26px" r="20px" fill="none" stroke-width="4px"></circle>
                </svg>
            </div>
        </div>

        <div class="sidebar hide-mobile">
            <div class="sidebar--fixed">

                @include('_particles.ads', ['position' => 'PostPageSidebar', 'width' => '300', 'height' => 'auto'])


                @include('_sidebar.trending', ['name'=> trans('index.posts')])

                @include('_sidebar.follow')

                @include('_particles.ads', ['position' => 'Footer', 'width' => '300', 'height' => 'auto'])


            </div>
        </div>
    </div>
</div>


@endsection

@section('footer')
    @if($post->type=="quiz")
        <script>
            BuzzyQuizzes = {
                'lang_1': '{{ trans('buzzyquiz.shareonface') }}',
                'lang_2': '{{ trans('buzzyquiz.shareontwitter') }}',
                'lang_3': '{{ trans('buzzyquiz.shareface') }}',
                'lang_4': '{{ trans('buzzyquiz.sharetweet') }}',
                'lang_5': '{{ trans('buzzyquiz.sharedone') }}',
                'lang_6': '{{ trans('buzzyquiz.sharedonedesc') }}'
            };


            $( document ).ready(function() {

                App.initQuizzesClicks();
            });
        </script>
    @endif

    <script>
        $( document ).ready(function() {
            $('.poll_main_color').each(function(i){
                $(this).css('width', $(this).attr('data-percent')+'%');
            });
        });
    </script>

    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

    <script>
        $(function(){

            if ($('.content-sticky').length > 0) {
                if ($(window).width() >= 768) {
                    $(window).on('scroll', function () {
                        var scrollTop = $(this).scrollTop();
                        $('article').each(function () {
                            if (scrollTop >= ($(this).find('.content-body').offset().top - 76)) {
                                $(this).find('.content-sticky').addClass('sticky');
                                if (scrollTop >= ($(this).find('.content-body').offset().top + $(this).find('.content-body').height() - ($(this).find('.content-sticky').height() + 92))) {
                                    $(this).find('.content-sticky').removeClass('sticky');
                                    $(this).find('.content-sticky').css({'bottom': '0px', 'top': 'auto'});
                                } else {
                                    $(this).find('.content-sticky').addClass('sticky').css({
                                        'bottom': 'initial',
                                        'top': '80px'
                                    });
                                }
                            } else {
                                $(this).find('.content-sticky').removeClass('sticky').css({'bottom': 'auto', 'top': '10px'});
                            }
                        });
                    });
                }
            }

            @if(getenvcong('PostPageAutoload') != 'related')

                $(".news").buzzScroll({item: ".news__item"});

            @endif

        });

    </script>


@endsection