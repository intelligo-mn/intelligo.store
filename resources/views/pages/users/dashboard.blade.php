@extends("pages.users.userapp")
@section("usercontent")
    <div class="profile-section-header">
        <a class="profile-section-item @if(Request::segment(3)=='') active @endif" href="/profile/{{ $userinfo->username_slug }}">{{ trans('index.all') }}</a>
        <a class="profile-section-item @if(Request::segment(3)=='news') active @endif" href="/profile/{{ $userinfo->username_slug }}/news">{{ trans('index.news') }}</a>
        <a class="profile-section-item @if(Request::segment(3)=='lists') active @endif" href="/profile/{{ $userinfo->username_slug }}/lists">{{ trans('index.lists') }}</a>
        <a class="profile-section-item @if(Request::segment(3)=='polls') active @endif" href="/profile/{{ $userinfo->username_slug }}/polls">{{ trans('index.polls') }}</a>
        <a class="profile-section-item @if(Request::segment(3)=='videos') active @endif" href="/profile/{{ $userinfo->username_slug }}/videos">{{ trans('index.videos') }}</a>
    </div>
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