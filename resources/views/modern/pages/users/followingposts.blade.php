@extends("pages.users.userapp")
@section("usercontent")
<h2> {{ trans('updates.followingposts') }}</h2>

    <div class="recent-activity">

        @if($lastPosts->total() > 0)

        <ul class="items_lists res-lists" style="padding:0">

            @foreach($lastPosts as $item)
                @include('pages.catpostloadpage')
            @endforeach
        </ul>
        <div class="clear"></div>
            {!! $lastPosts->render() !!}
        @else
            @include('errors.emptycontent')
        @endif

    </div>

@endsection