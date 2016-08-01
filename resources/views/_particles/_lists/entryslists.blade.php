@if($post->ordertype == 'desc')
    <?php $ik=count($entrys) ?>
@elseif($post->ordertype == 'asc')
    <?php $ik=1 ?>
@endif
@foreach($entrys as $key => $entry)
    <section class="entry" id="section_{{ $entry->order }}" entry="{{ $entry->id }}">

        @if($entry->type=='poll')

            <div class="option-selection">
                @if(!Auth::check())
                    <a class=""  href="{{ url('/login') }}" rel="get:Loginform">
                  @else
                       @if($entry->vote()->VoteOnPost()->first())
                             <a class="active" href="#ok">
                       @else

                            @if($post->pollvotes()->currentUserHasVoteOnPost($post->id)->get()->first())

                                <a class="off" href="#ok">

                                @else

                                <a class="postable" data-method="Post" data-target="post-body" href="{{ action('PollController@VoteAPoll', [$post->type, $post->slug , $post->id , 'vote' => $entry->id] ) }}" rel="nofollow">

                            @endif
                       @endif
                    @endif
                    <h4 class="option-sel">
                        <i class="fa fa-square-o"></i>
                        {{ $entry->title }}
                    </h4>
                    @if(Auth::check() and $post->pollvotes()->currentUserHasVoteOnPost($post->id)->get()->first())
                    <div class="meta">
                        Vote: {{ $entry->vote()->count() }}
                    </div>
                    @endif
                </a>
            </div>

        @else
            @if($entry->title)
                <h2 class="sub-title" >
                    @if($post->ordertype == 'desc')
                        {{ $ik }}.
                        <?php $ik=$ik-1 ?>
                    @elseif($post->ordertype == 'asc')
                        {{ $ik }}.
                        <?php $ik=$ik+1 ?>
                    @endif
                    {{ $entry->title }}
                </h2>
            @endif
        @endif
        @if($entry->type=='image')
            <div class="media">
                <div class="sharemedia">

                    <div class="external-sign-in">
                        <a href="http://pinterest.com/pin/create/link/?url={{ Request::url() }}&media={{ makepreview($entry->image, null, 'entries') }}&description={{ isset($entry->title) ? $entry->title : $post->title }}" class="Pinterest popup-action mini"></a>
                        <a href="https://facebook.com/sharer.php?u={{ Request::url() }}&s=100"  class="Facebook popup-action mini"></a>
                        <a href="https://twitter.com/intent/tweet?url={{ Request::url() }}"  class="Twitter popup-action mini"></a>
                    </div>
                </div>
                <a id="" class="gif-icon-a"><img class="img-responsive" style="display: block;@if($entry->type=='image')width:100%@endif" alt="{{ $entry->title }}" src="{{ makepreview($entry->image, null, 'entries') }}"></a>
                <small>{!! $entry->source !!}</small>
            </div>
        @endif

        @if($entry->type=='video' or $entry->type=='embed')
            {!! $entry->video !!}
        @endif

        <p>
            {!! $entry->body !!}
        </p>
    </section>
@endforeach

<p></p>
<