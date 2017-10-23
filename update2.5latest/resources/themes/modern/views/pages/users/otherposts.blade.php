@extends("pages.users.userapp")
@section("usercontent")

    <h2>{{ $patitle }}</h2>
    @include('errors.adminlook', ['relatedid' => $userinfo->id])
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

    {!! $lastPosts->render() !!}
@endsection