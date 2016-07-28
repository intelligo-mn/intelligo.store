@extends("app")
<?php $r=Request::segment(1) ?>

@section('head_title', $title .' | '.getcong('sitename') )

@section("content")

@if($r=='news' or $r=='lists' or $r=='polls' or $r=='videos')

    <div class="content shay">

        <div class="container shay">
            <div class="row homefeatures clearfix">
                <h1 style="margin-left: 5px">{{ $title }}</h1>
                <div class="pull-l">
                    @foreach($lastFeaturestop->slice(0,1) as $item)
                        <div class="tile tile-4">
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
@endif


    <div class="content">

        <div class="container">

            <div class="mainside">

                <div class="colheader   none ">
                    @if(isset($search))
                            <h1>{{ $search }}</h1>
                    @elseif(isset($title))
                        @if($r=='news' or $r=='lists' or $r=='polls' or $r=='videos')
                            <h1>{{ trans('index.latest', ['type' => $title ]) }}</h1>
                        @else
                            <h1>{{ $title }}</h1>
                        @endif
                    @endif
                </div>



                @if($lastItems->total() > 0)
                    <ul class="items_lists res-lists">
                        @foreach($lastItems as $item)
                            @include('._particles._lists.items_list', ['listtype' => 'bolb titb','descof' => 'on','linkcolor' => 'default'])
                        @endforeach
                    </ul>
                    @else
                    @include('errors.emptycontent')
                @endif
                {!! $lastItems->render() !!}
            </div>
            <div class="sidebar">

                @foreach(\App\Widgets::where('type', 'CategoriesPageSidebar')->where('display', 'on')->get() as $widget)
                    {!! $widget->text !!}
                @endforeach

                <div class="colheader" style="margin:0;border:0;text-transform: uppercase">
                    <h1>{{ trans('index.weekly') }} {!! trans('index.top', ['type' => '<span style="color:#d92b2b">'.$title.'</span>' ]) !!}</h1>
                </div>
                @include("_widgets.trendlist_sidebar")

                @include("_widgets/facebooklike")

            </div>
        </div>

    </div>


@if($r=='news' or $r=='lists' or $r=='polls' or $r=='videos')

    <div class="content ">

        <div class="container ">
            <h4 style="margin-bottom:10px">{{ trans('index.todayhit', ['type' => $title ]) }}</h4>
            @if(isset($todayhit))
                <ul class="items_lists  square">
                    @foreach($todayhit as $item)
                        @include('._particles._lists.items_list', ['listtype' => 'big_image big-h bolb titss', 'descof' => 'off','featuredon' => 'on', 'metaof' => 'on','itembodyheight' => '50px','linkcolor' => 'default'])
                    @endforeach
                </ul>
            @endif

        </div>
    </div>

@endif
@endsection