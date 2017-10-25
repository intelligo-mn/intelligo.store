@extends("app")
@section('head_title', $category->name .' | '.getenvcong('sitename') )
@section('head_description', $category->description )

@section("content")
<div class="buzz-container">

    <div class="global-container container">
    <div class="headline-cats clearfix">

        <h1 style="float:left;margin:5px 0">{{ trans('index.'.$category->name_slug) == 'index.'.$category->name_slug ? $category->name :  trans('index.'.$category->name_slug) }} </h1>

        @foreach(\App\Categories::where('type', $category->id)->orderBy('name')->groupBy('name')->get() as $cat)

            <a class="cat_link"  data-type="{{ $cat->name_slug }}" href="/{{ $cat->name_slug }}"> {{ $cat->name }}</a>

        @endforeach

    </div>
    </div>
    {{ show_headline_posts($lastFeaturestop, true) }}

    @include('_particles.ads', ['position' => 'HeaderBelow', 'width' => '728', 'height' => 'auto'])

        <div class="global-container container">
            <div class="content">
                    <div class="content-timeline" style="float: left;width: 100%;">
<br>
                        @if(isset($search))
                            <div class="timeline-title">{{ $search }}</div>
                        @elseif(isset($category->name))
                            <div class="timeline-title"><span style="color:#d92b2b">{{ trans('index.'.$category->name_slug) == 'index.'.$category->name_slug ? $category->name :  trans('index.'.$category->name_slug) }} </span>
                                 <a  target=_blank style="float:right;  background: #f4851f;width:24px;height:24px;margin:2px 0 0 0" href="{{ $category->name_slug }}.xml"><i style="color:#fff" class="material-icons">&#xE0E5;</i></a>
                                <style>.external-sign-in.rss a:after{ font-size:14px!important;  top: 5px!important;left:-7px}</style>
                            </div>

                        @endif

                        @if($lastItems->total() > 0)

                            <div class="content-timeline__list">
                                @foreach($lastItems as $k => $item)
                                    @include('pages.catpostloadpage')

                                @endforeach
                            </div>
                            @else
                                @include('errors.emptycontent')


                        @endif

                        <center>
                            {!! $lastItems->render() !!}
                        </center>
                </div>
            </div>
            <div class="sidebar visiblesidebar-onmobile">
                <div class="sidebar--fixed">
                    <div class="ads">
                                            @include('_particles.ads', ['position' => 'CatSide', 'width' => 'auto', 'height' => 'auto'])

                    </div>

                    @include('_sidebar.trending', ['name'=> $category->name])

                    @include('_sidebar.follow')


                </div>
            </div>
        </div>
    </div>
@endsection
