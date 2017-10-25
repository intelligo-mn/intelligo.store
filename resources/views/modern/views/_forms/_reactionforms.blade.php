@unless($reactions == false)
    <section class="user-reactions" id="reactions{{ $post->id }}">
        <div class="colheader sea">
            <h1>{{ trans('updates.reaction.yourreaction') }}</h1>
        </div>
<?php
        $totalrec=$reactions->count();
?>
        <div class="clear"></div>
    <div class="percentage-bar">

        @foreach(\App\Reaction::where('display', 'on')->orderBy('ord', 'asc')->get() as $reaction)

            <?php $awesomecount = $reactions->where('reaction_type', $reaction->reaction_type)->count();  ?>
            <div class="reaction-emoji">
                <div class="bar">
            <span class="count f" style="height: {{ $awesomecount ? number_format(($awesomecount / $totalrec) * 100, 8) : 0 }}%;">
                <span class="count-text">{{ $awesomecount }}</span>
            </span>
                </div>

                <a rel="nofollow" {!! reactionvoteuserget($post, $reaction->reaction_type) !!}href="{{ action('PollController@VoteReaction', [$post->type, $post->slug , $post->id , 'reaction' => $reaction->reaction_type] ) }}">
                    <img alt="{{ $reaction->name }}" src="{{ $reaction->icon }} " width="50">
                    <span class="text">{{ $reaction->name }}</span></a>
            </div>

        @endforeach


    </div>

 </section>

@endunless
