@extends("app")
@section("content")

<div class="content shay">
    <div class="container shay">
        <div class="row homefeatures clearfix">
            <div class="pull-l">
                @foreach($lastFeaturestop->slice(0,1) as $item)
                    <div class="tile tile-2">
                        @include('._particles._lists.features_list', ['descof' => 'on','metaon' => 'on'])

                    </div>
                @endforeach

            </div>
            <div class="pull-l">
                @foreach($lastFeaturestop->slice(1,1) as $item)
                    <div class="tile tile-1">
                        @include('._particles._lists.features_list', ['descof' => 'on','metaon' => 'on'])

                    </div>
                @endforeach

            </div>

            <div class="pull-l tway">
                @foreach($lastFeaturestop->slice(2,2) as $item)
                    <div class="tile tile-3">
                        @include('._particles._lists.features_list', ['metaon' => 'on'])

                    </div>
                @endforeach

            </div>
        </div>
    </div>
</div>


<div class="content">

    <div class="container">
        <div class="row homecolums">
            <div class="column1 ">
                <div class="colheader sea">
                    <h1>{{ trans('index.latest', ['type' => trans('index.lists') ]) }}</h1>
                </div>
                @if($lastFeatures)
                    <ul class="items_lists res-lists">

                    @foreach($lastFeatures->slice(0, 5) as $item)
                       @include('._particles._lists.items_list', ['listtype' => 'bolb titb','descof' => 'on', 'featuredon' => 'on', 'linkcolor' => 'default'])
                    @endforeach
                    </ul>
                @endif
                <div class="col-video">
                    <div class="colheader rosy">
                        <h1>{{ trans('index.mostrecent', ['type' => trans('index.videos') ]) }}</h1>
                    </div>
                    <div class="featured-videos">
                        <ul class="items_lists square">

                            @foreach($lastvideoscol1->slice(0, 3) as $item)
                                @include('._particles._lists.items_list', ['listtype' => 'big_image tits','descof' => 'off', 'featuredon' => 'on', 'metaof' => 'off','video' => 'on', 'linkcolor' => 'default'])
                            @endforeach
                        </ul>

                    </div>
                </div>
                @if($lastFeatures)
                    <ul class="items_lists res-lists">

                        @foreach($lastFeatures->slice(5,5) as $item)
                            @include('._particles._lists.items_list', ['listtype' => 'bolb titb','descof' => 'on','featuredon' => 'on', 'linkcolor' => 'default'])
                        @endforeach
                    </ul>
                @endif


                <div class="col-poll">
                    <div class="colheader trend">
                        <h1>{{ trans('index.trend', ['type' => trans('index.polls') ]) }}</h1>
                    </div>
                    <ul class="items_lists square s-two">

                        @foreach($lastpoll->slice(0, 2) as $item)
                            @include('._particles._lists.items_list', ['listtype' => 'big_image bolb titb','featuredon' => 'on', 'metaof' => 'off', 'descof' => 'off', 'linkcolor' => 'default'])
                        @endforeach
                    </ul>

                </div>

                @if($lastFeatures)


                    <ul class="items_lists res-lists">

                        @foreach($lastFeatures->slice(10) as $item)
                            @include('._particles._lists.items_list', ['listtype' => 'bolb titb','featuredon' => 'on', 'descof' => 'on','linkcolor' => 'default'])
                        @endforeach

                    </ul>

                @endif
                <div class="jscroll">
                    @if($lastFeatures->nextPageUrl())
                        <a href="{{ $lastFeatures->nextPageUrl() }}" class="page-next"></a>
                    @endif
                </div>
            </div>


            <div class="column2">
                <div class="colheader formula">
                    <h1>{{ trans('index.latest', ['type' => trans('index.news') ]) }}</h1>
                </div>
                @if($lastNews)
                    <ul class="items_lists">
                        @foreach($lastNews as $item)
                           @include('._particles._lists.items_list', ['listtype' => 'big_image small-h bolb titm','featuredon' => 'on', 'descof' => 'off','linkcolor' => 'default'])
                        @endforeach
                    </ul>
                @endif

            </div>


            <div class="column3">
                <div class="coltrend">
                <div class="colheader trend">
                    <h1>{{ trans('index.trendings') }}</h1>
                </div>
                @if(isset($lastTrending))
                    <ul class="items_lists">
                        @foreach($lastTrending as $item)

                            @include('._particles._lists.items_list', ['listtype' => 'captionlist list-count tits', 'descof' => 'off','metaof' => 'off', 'linkcolor' => 'white'])
                        @endforeach
                    </ul>
                @endif
                </div>
                <div class="coltrend">
                <div class="colheader darken">
                    <h1>{{ trans('index.trend', ['type' => trans('index.videos') ]) }}</h1>
                </div>
                @if(isset($lastTrending))
                    <ul class="items_lists">
                        @foreach($lastTrendingVideos as $item)
                            @include('._particles._lists.items_list', ['listtype' => 'big_image small-h bolb tits', 'video' => 'on', 'setmediamarginbottom' => '0', 'descof' => 'off', 'metaof' => 'off', 'linkcolor' => 'default'])
                        @endforeach
                    </ul>
                @endif
                </div>
                <div class="social-side">
                    <div class="colheader rosy">
                        <h1>{{ trans('index.connect') }}</h1>
                    </div>
                    <div class="external-sign-in" style="padding-top:0">
                        @if(getcong('facebookpage'))
                            <a class="Facebook mini" target=_blank href="{!!  getcong('facebookpage') !!}"></a>
                        @endif
                        @if(getcong('twitterpage'))
                            <a class="Twitter mini" target=_blank href="{!!  getcong('twitterpage') !!}"></a>
                        @endif
                        @if(getcong('googlepage'))
                            <a class="Google mini"  target=_blank href="{!!  getcong('googlepage') !!}"></a>
                        @endif
                        @if(getcong('instagrampage'))
                            <a class="Instagram mini"  target=_blank href="{!!  getcong('instagrampage') !!}"></a>
                        @endif

                    </div>
                </div>
            </div>

        </div>
    </div>

</div>

@endsection
