@extends("app")

@section('head_title', $reaction .' | '.getenvcong('sitename') )
@section('head_description', $reaction  )

@section("content")
    <div class="buzz-container">
        <div class="global-container container">



            <div class="content">
                <div class="reaction-emojis" style="float:none;margin:30px auto;text-align:center">

                    @foreach(\App\Reaction::where('display', 'on')->orderBy('ord', 'asc')->get() as $react)
                        <a {{ $reaction==$react->reaction_type ? 'class=selected' : '' }} href="{{ action('PagesController@showReaction', ['reaction' =>$react->reaction_type] ) }}" title="{{ $react->name }}" style="padding:7px;display: inline-block"><img alt="{{ $react->name }}" src="{{ $react->icon }}" width="55"><div class="reaction_name">{{ $react->name }}</div></a>
                    @endforeach
                  </div>


                <div class="content-body clearfix">
                    <div class="content-body__detail">

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
            </div>

            <div class="sidebar info-sidebar hide-mobile">
                <div class="ads">
                    @include('_particles.ads', ['position' => 'CatSide', 'width' => 'auto', 'height' => 'auto'])

                </div>

                    @include('_sidebar.follow')
            </div>

        </div>
    </div>

@endsection