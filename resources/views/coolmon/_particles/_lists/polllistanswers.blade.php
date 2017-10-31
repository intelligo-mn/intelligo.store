<?php $sitep = $post->entry()->where('type', 'answer')->where('source', $entry->id)->get(); ?>

<ol class="option-selection  @if($entry->video == '1')thdefault @else {{  $entry->video == "2" ?  'thlarge' : 'thlist' }}@endif">
    @foreach($sitep as $keya => $answers)
        <?php  $keya=$keya+1;?>

        <li>
            @if(!Auth::check() and getcong('sitevoting')=="1")
                <a class=""  href="{{ url('/login') }}" rel="get:Loginform">
                    @else
                        @if($answers->vote()->VoteOnPost()->first())
                            <a class="active"  href="#ok">
                                @else

                                    @if($entry->pollvotes()->currentUserHasVoteOnPost($entry->id)->get()->first())

                                        <a class="off" href="#ok">

                                            @else

                                                <a class="postable"  data-method="Post" data-target="answerpoll{{ $entry->id  }}" href="{{ action('PollController@VoteANewPoll', [$entry->id, $post->slug , 'vote' => $answers->id] ) }}" rel="nofollow">

                                                    @endif
                                                    @endif
                                                    @endif
                                                    <div class="answer-cover">
                                                        @if($entry->video!='3')
                                                            <img class="responsive-img" alt="{{ $answers->title }}" src="{{ makepreview($answers->image, null, 'answers') }}">
                                                        @endif
                                                        <h4 class="option-sel" >
                                                            <i class="fa fa-square-o answer-check"></i>
                                                                    <span  class="option-text">
                                                                    {!!   $answers->title > "" ? $answers->title : '<br>' !!}
                                                                    </span>
                                                        </h4>
                                                    </div>

                                                    @if($entry->pollvotes()->currentUserHasVoteOnPost($entry->id)->get()->first())
                                                        <div class="meta" style=" @if($entry->video!='3') position:relative;text-align:right;   @endif font-size:26px;margin-top:-5px;font-weight: 700;  ">
                                                            <small style="font-size:14px;line-height:12px;top:-4px;margin-right:6px;position:relative;font-weight: 400;vertical-align: middle; @if($entry->video!='3') float:left; top:11px; left:15px;@endif">  {{ trans('updates.vote', ['count' => $answers->vote()->count()]) }} - </small>
                                                            {{$answers->vote()->count() ?  intval(($answers->vote()->count() / $entry->pollvotes()->count()) * 100, 2) : 0 }} %

                                                        </div>
                                                        <div class="result_bar" style="height: 3px;background-color: #e4e4e4;margin: 10px 7px 4px  7px;">
                                                            <div class="poll_main_color result_bar_inner"  data-percent="{{$answers->vote()->count() ?  intval(($answers->vote()->count() / $entry->pollvotes()->count()) * 100, 2) : 0 }}" style="width: 0%;background-color: #d0250e; height: inherit; transition: width .4s ease-in;-webkit-transition: width .4s ease-in;"></div>
                                                        </div>

                                                    @endif
                                                </a>
                                                <div class="clear"></div>
        </li>
        @if(($keya%3)==0 and $entry->video=='1'  or ($keya%2)==0 and $entry->video=='2' )
</ol><div class="clear"></div> <ol class="option-selection  @if($entry->video == '1')thdefault @else {{  $entry->video == "2" ?  'thlarge' : 'thlist' }}@endif">
    @endif
    @endforeach
</ol>