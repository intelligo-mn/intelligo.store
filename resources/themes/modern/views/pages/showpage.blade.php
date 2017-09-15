@extends("app")

@section('head_title', $page->title .' | '.getenvcong('sitename') )


@section("content")
    <style>

        .content-body {
            width: 100%;
            position: relative;
            display: block;
            color: #222;
            padding-right: 26px;
        }
        .content-body__detail {
            font-family: inherit;
            font-size: 1.125em;
            line-height: 1.75em;
            font-weight: 400;
            text-decoration: none;
        }

        .info-sidebar ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .info-sidebar__item {
             padding: 14px 20px;
             position: relative;
             cursor: pointer;
         }
        .info-sidebar__item a {
            color: #999;
            display: block;
            font-size: .9375em;
            font-family: inherit;
            line-height: normal;
            font-weight: 700;
            font-style: normal;
            text-decoration: none;
        }
        .info-sidebar__item.is-active {
            background: #EEE;
        }
        .info-sidebar__item.is-active:after, .info-sidebar__item:hover:after {
            background: #00558A;
        }
        .info-sidebar__item:after {
            content: " ";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 3px;
            height: 100%;
            background: 0 0;
            z-index: 9;
        }
    </style>

    <div class="buzz-container">
        <div class="global-container container">
            <br>
            <div class="content">
                <div class="content-title"><h1>{{ $page->title }}</h1></div>
                <div class="content-body clearfix">
                    <div class="content-body__detail">
                        {!! $page->text  !!}
                    </div>
                </div>
            </div>

            <div class="sidebar info-sidebar hide-mobile">
                    <ul>
                        @foreach(\App\Pages::where('footer', '1')->get() as $q)
                            <li class="info-sidebar__item {{ $page->title==$q->title ? 'is-active' :''  }} ">
                                <a href="{{ action('PagesController@showpage', [$q->slug ]) }}" title="{{ $q->title }}">{{ $q->title }}</a>
                            </li>
                        @endforeach
                        @if(getenvcong('p-buzzycontact') == 'on')
                            <li class="info-sidebar__item "> <a href="{{ action('ContactController@index') }}">{{ trans('buzzycontact.contact') }}</a></li>
                        @endif
                    </ul>
                </div>

        </div>
    </div>



@endsection