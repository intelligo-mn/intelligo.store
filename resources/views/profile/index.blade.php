@extends('templates.default')

@section('content')
    <div class="row">
    <div class="col-lg-5">
        @include('user.partials.userblock')
        <hr>
    </div>
    <div class="col-lg-4 col-lg-offset-3">
        @if (Auth::user()->hasFriendRequestsPending($user))
            <p>{{ $user->getNameOrUsername() }}</p>
        @elseif (Auth::user()->hasFriendRequestsReceived($user))
            <a href="{{ route('friends.accept', ['username' => $user->username]) }}" 
            class="btn btn-primary">Хүсэлт авах</a>
        @elseif (Auth::user()->isFriendsWith($user))
            <p>You and {{ $user->getNameOrUsername() }}</p>
        @elseif (Auth::user()->id !== $user->id)
            <a href="{{ route('friends.add', ['username' => $user->username]) }}" 
            class="btn btn-primary">Найз нэмэх</a>
        @endif
        
        <h4>{{ $user->getFirstNameOrUsername() }} таны найзууд</h4>
        
        @if (!$user->friends()->count())
            <p>{{$user->getFirstNameOrUsername()}} найз байхгүй байна.</p>
        @else
            @foreach($user->friends() as $user)
                @include('user.partials.userblock')
            @endforeach
        @endif
    </div>
</div>
@stop