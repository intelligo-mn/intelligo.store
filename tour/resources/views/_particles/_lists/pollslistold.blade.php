<div class="option-selection">
    @if(!Auth::check())
        <a class=""  style="margin:0;padding:0" href="{{ url('/login') }}" rel="get:Loginform">
            @else
                @if($entry->vote()->VoteOnPost()->first())
                    <a class="active" style="margin:0;padding:0" href="#ok">
                        @else

                            @if($post->pollvotes()->currentUserHasVoteOnPost($post->id)->get()->first())

                                <a class="off" style="margin:0;padding:0" href="#ok">

                                    @else

                                        <a class="postable" style="margin:0;padding:0" data-method="Post" data-target="post-body" href="{{ action('PollController@VoteAPoll', [$post->type, $post->slug , 'vote' => $entry->id] ) }}" rel="nofollow">

                                            @endif
                                            @endif
                                            @endif
                                            <div class="answer-cover">

                                                <h4 class="option-sel">
                                                    <i class="fa fa-square-o" style="margin-top:2px"></i>
                                                    <span  class="option-text">
                                                          {{ $entry->title }}
                                                    </span>
                                                </h4>


                                                @if(Auth::check() and $post->pollvotes()->currentUserHasVoteOnPost($post->id)->get()->first())
                                                    <div class="meta" style="font-size:26px;margin-top:-5px;font-weight: 700">
                                                        <small style="font-size:14px;top:-4px;margin-right:6px;position:relative;font-weight: 400">  {{ trans('updates.vote', ['count' => $entry->vote()->count()]) }} - </small>
                                                        {{$entry->vote()->count() ?  intval(($entry->vote()->count() / $post->pollvotes()->count()) * 100, 2) : 0 }} %

                                                    </div>
                                                    <div class="result_bar" style="width: 50%;height: 3px;width: 100%;background-color: #e4e4e4;margin-top: 10px;margin-bottom: 4px;">
                                                        <div class="poll_main_color result_bar_inner"  data-percent="{{$entry->vote()->count() ?  intval(($entry->vote()->count() / $post->pollvotes()->count()) * 100, 2) : 0 }}" style="width: 0%;background-color: #d0250e; height: inherit; transition: width .4s ease-in;-webkit-transition: width .4s ease-in;"></div>
                                                    </div>

                                                @endif
                                            </div>
                                        </a>
</div>
