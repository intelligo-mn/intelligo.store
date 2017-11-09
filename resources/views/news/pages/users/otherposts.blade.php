@extends("pages.users.userapp")
@section("usercontent")

    <h2>{{ $patitle }}</h2>
    @include('errors.adminlook', ['relatedid' => $userinfo->id])
    <br>
    <div class="recent-activity">
        @if($lastPosts->total() > 0)
            <ul class="items_lists res-lists">

                @foreach($lastPosts as $item)
                    @include('._particles._lists.items_list', ['listtype' => 'bolb titb','descof' => 'on','linkcolor' => 'default'])
                @endforeach
            </ul>
        @else
            @include('errors.emptycontent')
        @endif
    </div>

    {!! $lastPosts->render() !!}
@endsection