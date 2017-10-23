@extends("app")

@section('head_title', $search .' | '.getcong('sitename') )
@section('head_description', $search )



@section("content")

    <div class="content">

        <div class="container">

            <div class="mainside ">

                <div class="colheader   none " style="padding:15px 0;font-size:16px;font-weight: 600;text-transform: uppercase">
                   {{ $search }}

                </div>


                @if(count($lastItems) > 0)
                    <div class="jscroll" data-auto="{!!  getcong('AutoLoadLists') ?: 'false' !!}">
                    @include('pages.catpostloadpage')
                    </div>
                    @else
                    @include('errors.emptycontent')

                @endif

            </div>
            <div class="sidebar">

                @foreach(\App\Widgets::where('type', 'CatSide')->where('display', 'on')->get() as $widget)
                    {!! $widget->text !!}
                @endforeach

                @include("_widgets/facebooklike")

            </div>
        </div>

    </div>


@endsection