@extends("app")
@section('header')
        <link rel="amphtml" href="{{ url('amp') }}">
@endsection
@section("content")
    <div class="buzz-container">
            {{ show_headline_posts($lastFeaturestop) }}
           @include('_particles.ads', ['position' => 'HeaderBelow', 'width' => '728', 'height' => 'auto'])

           <div class="global-container container">
            <div class="content">

                <div class="content-timeline">
                    <div class="colheader sea">
                        <h1>{{ $HomeColSec1Tit1 > "" ? $HomeColSec1Tit1 :  trans('index.latest', ['type' => trans('index.lists') ]) }}</h1>
                    </div>

                    @if($lastFeatures)
                    <div class="content-timeline__list">
                        @include('pages.indexpostloadpage')
                    </div>
                    @endif
                    <div class="content-timeline__more">
                        <i class="content-timeline__more__icon material-icons">&#xE5D5;</i>
                        <span class="content-timeline__more__text">{{ trans('updates.loadmore') }}</span>
                    </div>
                    <div class="content-spinner">
                        <svg class="spinner-container" width="45px" height="45px" viewBox="0 0 52 52">
                            <circle class="path" cx="26px" cy="26px" r="20px" fill="none" stroke-width="4px"></circle>
                        </svg>
                    </div>
                </div>
                <div class="content-timeline_right">
                    <div class="colheader formula">
                        <h1>{{ $HomeColSec2Tit1 > "" ? $HomeColSec2Tit1 : trans('index.latest', ['type' => trans('index.news') ]) }}</h1>
                    </div>
                        @if(isset($lastNews))
                            <div class="sidebar-block  clearfix" style=" margin-top: 0">
                                <ol class="sidebar-mosts sidebar-mosts--readed content-timeline_right__list timeline_right">
                                        @include('pages.indexrightpostloadpage')
                                </ol>
                            </div>
                        @endif
                        <div class="clear"></div>
                        <div class="content-timeline_right__more">
                            <i class="content-timeline__more__icon material-icons">&#xE5D5;</i>
                            <span class="content-timeline__more__text">{{ trans('updates.loadmore') }}</span>
                        </div>
                        <div class="content-spinner_right clearfix">
                            <svg class="spinner-container" width="45px" height="45px" viewBox="0 0 52 52">
                                <circle class="path" cx="26px" cy="26px" r="20px" fill="none" stroke-width="4px"></circle>
                            </svg>
                        </div>
                </div>
            </div>

            <div class="sidebar visiblesidebar-onmobile">
                <div class="sidebar--fixed">

                    @include('_sidebar.videos')

                    @include('_sidebar.trending', ['name'=> trans('index.posts')])

                    @include('_sidebar.follow')

                    @include('_particles.ads', ['position' => 'Footer', 'width' => '300', 'height' => 'auto'])

                </div>
            </div>
        </div>
    </div>
@endsection
@section('footer')
    <script src="{{ Theme::asset('js/timeline.min.js', null, false) }}"></script>
    <script>
        $('.content-timeline__item').wtTimeline({
            header: '.header',
            container: '.content-timeline__list',
            spinner: '.content-spinner',
            loadMore: '.content-timeline__more',
            path: '/',
            limit: 3,
            filterType: 'right'
        });

        $('.content-timeline_right').wtTimeline({
            header: '.header',
            container: '.content-timeline_right__list',
            spinner: '.content-spinner_right',
            loadMore: '.content-timeline_right__more',
            path: '/?timeline=right',
            limit: 3
        });
    </script>
@endsection