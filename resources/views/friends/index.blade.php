@extends('templates.default')

@section('content')
<div class="row">
    <div class="col-lg-6">
        <h3>Таны найзууд</h3>
        @if (!$friends->count())
            <p>Таньд найз байхгүй байна.</p>
        @else
            @foreach($friends as $user)
                @include('user/partials/userblock')
            @endforeach
        @endif
    </div>
    <div class="col-lg-6">
        <h4>Найзын хүсэлт</h4>
        @if (!$requests->count())
            <p>Таньд найзын хүсэлт ирээгүй байна.</p>
        @else
            @foreach($requests as $user)
                @include('user/partials/userblock')
            @endforeach
        @endif
    </div>
</div>
@stop