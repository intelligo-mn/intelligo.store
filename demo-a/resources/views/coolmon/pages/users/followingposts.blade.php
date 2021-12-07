@extends("pages.users.userapp")
@section("usercontent")
<h2> {{ trans('updates.followingposts') }}</h2>

    <div class="recent-activity">
        <br><br>
        @if($lastPosts->total() > 0)

        <ul class="items_lists res-lists">

            @foreach($lastPosts as $item)
                @include('._particles._lists.items_list', ['listtype' => 'bolb titb','descof' => 'on','linkcolor' => 'default'])
            @endforeach
        </ul>
        <div class="clear"></div>
            {!! $lastPosts->render() !!}
        @else
            @include('errors.emptycontent')
        @endif

    </div>

@endsection