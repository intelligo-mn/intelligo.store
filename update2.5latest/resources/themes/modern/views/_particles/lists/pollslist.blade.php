
        @if($entry->title)
            <h2 class="sub-title" >
                {{ $entry->title }}
            </h2>
        @endif
        @if($entry->image)
        <div class="media">
            <a id="" class="gif-icon-a"><img class="lazy img-responsive" style="display: block;width:100%" alt="{{ $entry->title }}" data-original="{{ makepreview($entry->image, null, 'entries') }}"></a>
            <small>{!! $entry->source !!}</small>
        </div>
        @endif
        <p>
            {!! $entry->body !!}
        </p>
        <div class="clear"></div>
        <div class="answer" id="answerpoll{{ $entry->id  }}" style="margin-left:-15px;">
                @include('_particles.lists.polllistanswers')
        </div>
        <div class="clear"></div>
