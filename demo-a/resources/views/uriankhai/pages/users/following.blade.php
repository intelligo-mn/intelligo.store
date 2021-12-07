@extends("pages.users.userapp")
@section("usercontent")
<h2> {{ trans('updates.following') }} ({{ $userinfo->following()->count() }})</h2>

    <div class="setting-form">
        <br><br>
        @if($follows->count() > 0)
            <div class="profile-section follow-images ">

                @foreach($follows as $follow)

                    <a class="follow-image big" href="/profile/{{ $follow->followed->username_slug }}" title="{{ $follow->followed->username }}">
                        <img src="{{ makepreview($follow->followed->icon, 's', 'members/avatar') }}" width="90" height="90" alt="{{ $follow->followed->username }}">
                        <span>{{ $follow->followed->username }}</span>
                    </a>

                @endforeach
            </div>
        <div class="clear"></div>
            {!! $follows->render() !!}
            @else
            @include('errors.emptycontent')
        @endif

    </div>

@endsection