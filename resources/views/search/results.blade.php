@extends('templates.default')

@section('content')
    <h3>Таны хайсан утга "{{ Request::input('query') }}"</h3>
    
    
    @if (!$users->count())
    <p>Үр дүн олдсонгүй<p>
    @else
        <div class="row">
            <div class="col-lg-12">
                @foreach ($users as $user)
                    @include('user/partials/userblock')
                @endforeach
            </div>
        </div>
    @endif
@stop
