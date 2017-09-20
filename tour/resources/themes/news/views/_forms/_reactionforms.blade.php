@unless($reactions == false)
    <section class="user-reactions" id="reactions">
    <div class="colheader">
        <h1>{{ trans('updates.reaction.yourreaction') }}</h1>
    </div>
<?php
        $awesomecount = $reactions->where('reaction_type', 'awesome')->count();
        $nicecount = $reactions->where('reaction_type', 'nice')->count();
        $lovedcount = $reactions->where('reaction_type', 'loved')->count();
        $lolcount = $reactions->where('reaction_type', 'lol')->count();
        $funnycount = $reactions->where('reaction_type', 'funny')->count();
        $failcount = $reactions->where('reaction_type', 'fail')->count();
        $omgcount = $reactions->where('reaction_type', 'omg')->count();
        $ewcount = $reactions->where('reaction_type', 'ew')->count();
        $totalrec=$reactions->count();
?>
        <div class="clear"></div>
    <div class="percentage-bar">










        <div class="reaction-emoji">
            <div class="bar">
            <span class="count f" style="height:{{ $awesomecount ? number_format(($awesomecount / $totalrec) * 100, 8) : 0 }}%;">
                <span class="count-text">{{ $awesomecount }}</span>
            </span>
            </div>

            <a {!! reactionvoteuserget($post, 'awesome') !!}href="{{ action('PollController@VoteReaction', [$post->type, $post->slug , $post->id , 'reaction' => 'awesome'] ) }}">
                <img alt="{{ trans('updates.reaction.awesome') }}" src="{{ url('assets/img/reactions/awesome.gif') }}" width="50">
                <span class="text">{{ trans('updates.reaction.awesome') }}</span></a></div>
        <div class="reaction-emoji">
            <div class="bar">
            <span class="count f" style="height: {{$nicecount ?  number_format(($nicecount / $totalrec) * 100, 8) : 0 }}%;">
                <span class="count-text">{{ $nicecount }}</span>
            </span>
            </div>

            <a {!! reactionvoteuserget($post, 'nice') !!}href="{{ action('PollController@VoteReaction', [$post->type, $post->slug , $post->id , 'reaction' => 'nice'] ) }}">
                <img alt="{{ trans('updates.reaction.nice') }}" src="https://abs.twimg.com/emoji/v1/72x72/1f60f.png" width="50">
                <span class="text">{{ trans('updates.reaction.nice') }}</span></a></div>
        <div class="reaction-emoji">
            <div class="bar">
            <span class="count f" style="height: {{ $lovedcount ? number_format(($lovedcount / $totalrec) * 100, 8) : 0 }}%;">
                <span class="count-text">{{ $lovedcount }} </span>
            </span>
            </div>

            <a {!! reactionvoteuserget($post, 'loved') !!}href="{{ action('PollController@VoteReaction', [$post->type, $post->slug , $post->id, 'reaction' => 'loved'] ) }}">
                <img alt="{{ trans('updates.reaction.loved') }}" src="{{ url('assets/img/reactions/loved.gif') }}" width="50">
                <span class="text">{{ trans('updates.reaction.loved') }}</span></a></div>
        <div class="reaction-emoji">
            <div class="bar">
            <span class="count f" style="height: {{ $lolcount ? number_format(($lolcount / $totalrec) * 100, 8) : 0 }}%;">
                <span class="count-text">{{ $lolcount }}</span>
            </span>
            </div>
            <a {!! reactionvoteuserget($post, 'lol') !!}href="{{ action('PollController@VoteReaction', [$post->type, $post->slug , $post->id , 'reaction' => 'lol'] ) }}" >
                <img alt="{{ trans('updates.reaction.lol') }}" src="{{ url('assets/img/reactions/lol.gif') }}" width="50">
                <span class="text">{{ trans('updates.reaction.lol') }}</span></a></div>
        <div class="reaction-emoji">
            <div class="bar">
            <span class="count f" style="height: {{ $funnycount ? number_format(($funnycount / $totalrec) * 100, 8) : 0 }}%;">
                <span class="count-text">{{ $funnycount }}</span>
            </span>
            </div>
            <a {!! reactionvoteuserget($post, 'funny') !!}href="{{ action('PollController@VoteReaction', [$post->type, $post->slug , $post->id , 'reaction' => 'funny'] ) }}">
                <img alt="{{ trans('updates.reaction.funny') }}" src="{{ url('assets/img/reactions/funny.gif') }}" width="50">
                <span class="text">{{ trans('updates.reaction.funny') }}</span></a></div>
        <div class="reaction-emoji">
            <div class="bar">
            <span class="count f" style="height: {{ $failcount ? number_format(($failcount / $totalrec) * 100, 8) : 0 }}%;">
                <span class="count-text">{{ $failcount }}</span>
            </span>
            </div>
            <a {!! reactionvoteuserget($post, 'fail') !!}href="{{ action('PollController@VoteReaction', [$post->type, $post->slug , $post->id , 'reaction' => 'fail'] ) }}">
                <img alt="{{ trans('updates.reaction.fail') }}" src="{{ url('assets/img/reactions/fail.gif') }}" width="50">
                <span class="text">{{ trans('updates.reaction.fail') }}</span></a></div>
        <div class="reaction-emoji">
            <div class="bar">
            <span class="count f" style="height: {{ $omgcount ? number_format(($omgcount / $totalrec) * 100, 8) : 0 }}%;">
                <span class="count-text">{{ $omgcount }}</span>
            </span>
            </div>
            <a {!! reactionvoteuserget($post, 'omg') !!}href="{{ action('PollController@VoteReaction', [$post->type, $post->slug , $post->id , 'reaction' => 'omg'] ) }}">
                <img alt="{{ trans('updates.reaction.omg') }}" src="{{ url('assets/img/reactions/wow.gif') }}" width="50">
                <span class="text">{{ trans('updates.reaction.omg') }}</span></a></div>
        <div class="reaction-emoji">
            <div class="bar">
             <span class="count f" style="height: {{ $ewcount ? number_format(($ewcount / $totalrec) * 100, 8) : 0 }}%;">
                <span class="count-text">{{ $ewcount }}</span>
             </span>
            </div>
            <a {!! reactionvoteuserget($post, 'ew') !!}href="{{ action('PollController@VoteReaction', [$post->type, $post->slug , $post->id , 'reaction' => 'ew'] ) }}">
                <img alt="{{ trans('updates.reaction.ew') }}" src="{{ url('assets/img/reactions/cry.gif') }}" width="50">
                <span class="text">{{ trans('updates.reaction.ew') }}</span></a></div>

    </div>

 </section>
    <br>  <br>  <br> <br>
@endunless
