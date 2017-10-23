@extends("pages.users.userapp")
@section("usercontent")

    <div class="recent-activity">

        @if($lastPosts->total() > 0)
            <ul class="items_lists res-lists" style="padding:0">

                @foreach($lastPosts as $item)
                    @include('pages.catpostloadpage')
                @endforeach
            </ul>
            @else
            @include('errors.emptycontent')
        @endif
    </div>
    <center>
        {!! $lastPosts->render() !!}
    </center>
@endsection