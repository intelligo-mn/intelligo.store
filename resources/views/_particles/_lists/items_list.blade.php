@if(isset($item))
    <li class="item {{ $listtype }}">
    <a class="item_link" href="/{{ $item->type }}/{{ $item->slug }}">
        <div class="item_media"  @if(isset($setmediamarginbottom))style="margin-bottom: {{ $setmediamarginbottom }};" @endif>
            @if(isset($featuredon) ? true : false and $item->featured_at !== null)<span class="featured_icon"></span> @endif
            @if(isset($video) ? true : false or $item->type=='video')<span class="icon-video fa fa-play"></span> @endif
            <img src="{{ makepreview($item->thumb, 's', 'posts') }}" class="item__image"  width="185" height="110">
        </div>
    </a>
    <div class="item_body" @if(isset($itembodyheight))style="height: {{ $itembodyheight }};" @endif>
        <h2 class="item_title">
            <a class="item_link {{ $linkcolor }}" href="{{ action('PostsController@index', [$item->type, $item->slug]) }}">
                {{ $item->title }}
            </a>
        </h2>

            @if($descof=='on')
            <p class="item_desc">{{ str_limit($item->body, 90) }}</p>
            @endif
                @unless(isset($metaof))
            <div class="item_meta">

                <div class="item_meta__item">
                    <a href="{{ action('UsersController@index', [$item->user->username_slug ]) }}"><i class="fa fa-user"></i> {{ $item->user->username }}</a>
                </div>
                <div class="item_meta__item timestamp">
                    <i class="fa fa-clock-o"></i>
                    <time class="timestamp_timeago">{{ $item->created_at->diffForHumans() }}</time>
                </div>

            </div>
                @endunless

    </div>
</li>
@endif