@foreach($lastFeaturestop as $item)
    <a href="{{ makeposturl($item) }}">
        <img src="{{ makepreview($item->thumb, 'b', 'posts') }}" style="width: 100px; height: 64px;">
        <h3>{{ $item->title }}</h3>
    </a>
@endforeach