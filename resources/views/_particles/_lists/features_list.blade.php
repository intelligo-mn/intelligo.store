<a href="{{ action('PostsController@index', [$item->type, $item->slug ]) }}">
    <div class="thumb">
        <img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="{{ $item->title }}" >
    </div>
    <div class="desc">
        <div class="descwrap">
            <h4 class="post-title">{{ $item->title }}</h4>
            <div class="details">
                @if(isset($descof))
                <p>{{ str_limit($item->body, 100) }}</p>
                @endif
                @if(isset($metaon))
                <div class="meta">
                    <i class="fa fa-user"></i> {{ $item->user->username }}
                    <time class="timestamp_timeago"><i class="fa fa-clock-o"></i>   {{ $item->created_at->diffForHumans() }}</time>
                </div>
                @endif
            </div>
        </div>
    </div>
</a>