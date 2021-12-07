
        @if($entry->title)
            <h2 class="sub-title" >
                {{ $entry->title }}
            </h2>
        @endif

        <div class="media">
            <div class="sharemedia">
                @include('._particles.others.entrysharebuttons')
            </div>
            <a id="" class="gif-icon-a"><img class="img-responsive" style="display: block;width:100%" alt="{{ $entry->title }}" src="{{ makepreview($entry->image, null, 'entries') }}"></a>
            <small>{!! $entry->source !!}</small>
        </div>

        <p>
            {!! $entry->body !!}
        </p>
        <div class="clear"></div>
        <div class="answer" id="answerpoll{{ $entry->id  }}" style="margin-left:-15px;">
                @include('_particles._lists.polllistanswers')
        </div>
        <div class="clear"></div>
