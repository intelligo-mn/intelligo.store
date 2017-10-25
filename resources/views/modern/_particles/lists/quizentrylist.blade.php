@foreach($entrysquizquest as $key => $entry)

    <section class="entry quizquestion selectableQuest" id="section_{{ $entry->order }}" data-entry="{{ $entry->id }}">

        @if($entry->title)
            <h2 class="sub-title" >
                {{ $entry->title }}
            </h2>
        @endif
@if($entry->image)
        <div class="media">

            <a id="" class="gif-icon-a"><img class="lazy img-responsive" style="display: block;width:100%" alt="{{ $entry->title }}" data-original="{{ url(makepreview($entry->image, null, 'entries')) }}"></a>
            <small>{!! $entry->source !!}</small>
        </div>
@endif
        <p>
            {!! $entry->body !!}
        </p>
        <div class="clear"></div>
        <div class="answer"  style="margin-left:-15px;">
            <?php $sitep = $post->entry()->where('type', 'answer')->where('source', $entry->id)->get(); ?>

            <ol class="option-selection  @if($entry->video == '1')thdefault @else {{  $entry->video == "2" ?  'thlarge' : 'thlist' }}@endif">
                @foreach($sitep as $keya => $answers)
                    <?php  $keya=$keya+1;?>

                    <li>
                        <a class="" href="javascript:"  data-answer="{{ $answers->id }}" data-result="{{ $answers->video }}" >
                            <div class="answer-cover">
                                @if($entry->video!='3')
                                    <img class="lazy responsive-img" alt="{{ $answers->title }}" data-original="{{ url(makepreview($answers->image, null, 'answers')) }}">

                                @endif
                                <div class="option-sel" >
                                    <div class="buzz-icon buzz-answer-circle"></div>
                                    <span  class="option-text">
                                    {!!   $answers->title > "" ? $answers->title : '<br>' !!}
                                    </span>
                                </div>
                            </div>
                        </a>
                        <div class="clear"></div>
                    </li>
                    @if(($keya%3)==0 and $entry->video=='1'  or ($keya%2)==0 and $entry->video=='2' )
                        </ol><div class="clear"></div> <ol class="option-selection  @if($entry->video == '1')thdefault @else {{  $entry->video == "2" ?  'thlarge' : 'thlist' }}@endif">
                    @endif
                @endforeach
              </ol>
        </div>
        <div class="clear"></div>
    </section>

@endforeach



<section class="entry results" id="quiz_result" data-popup="{{ getenvcong('BuzzyQuizzesPopup') }}" data-qtype="{{ $post->ordertype }}" >
    <div class="quiz_result_area">
        <h2 class="post-title">{{ $post->title }}</h2>
        @if($post->ordertype=='trivia' )

                <div  id="triviaresult" class="quiz_result active" data-link="{{ Request::url() }}" data-name="" data-iname="" data-itname="" data-description="{{ strip_tags($entry->body) }}" data-picture="{{ url(makepreview($post->thumb, 'b', 'posts')) }}" style="display: none;">

                    <h2 class="quiz_headline">{!!  trans('buzzyquiz.triviaresult')  !!}</h2>

                </div>
        @endif
        <ol style="list-style: none;margin: 0;padding: 0;">
            @foreach($entrysquizresults as $keyp => $entry)

                <li class="quiz_result" data-order="{{ $keyp }}" data-result="{{ $entry->id }}" data-link="{{ Request::url() }}" data-name="{{ trans('buzzyquiz.yougot', ['title'=> $entry->title]) }}"  data-iname="{{ trans('buzzyquiz.igot', ['title'=> $entry->title, 'posttitle'=> $post->title]) }}"  data-itname="{{ trans('buzzyquiz.igotfortweet', ['title'=> $entry->title]) }}" data-description="{{ strip_tags($entry->body) }}" data-picture="{{ $entry->image > "" ? url(makepreview($entry->image, null, 'entries')) : url(makepreview($post->thumb, 'b', 'posts'))  }}">

                    <div class="quiz_headline">
                        {{ trans('buzzyquiz.yougot', ['title'=> $entry->title]) }}
                    </div>
                    <div class="clear"></div>
                    <div  class="quiz_text"  {{ $entry->image == '' ? 'style=width:100%' :'' }}>{!! $entry->body !!}</div>

                    <div class="quiz_img {{ $entry->image == '' ? 'hide' :'' }}" >
                        <img class="lazy responsive_img" style=" float: right;"  src="data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
                    </div>

                </li>

            @endforeach
        </ol>

    </div>
<div class="clear"></div>
    <div class="quiz_result_share">
    <h2 class="bold share_title">{{trans('buzzyquiz.shareresult') }}</h2>
    <div class="external-sign-in">
        <a href="javascript:" class="Facebook do-signup postToResultFeed" style="float: left;margin-right:10px;width: 140px;padding: 5px 10px;"><div class="buzz-icon buzz-facebook-big"></div> {{trans('index.sharefacebook') }}</a>
        <a href="javascript:" class="Twitter do-signup postToResultFeed" style="float: left;margin-right:10px;width: 140px;padding: 5px 10px;"><div class="buzz-icon buzz-twitter-big"></div>{{trans('index.sharetweet') }}</a>
        <a href="https://plus.google.com/share?url={{ Request::url() }}" class="Google do-signup popup-action" style="float: left;margin-right:10px;width: 140px;padding: 5px 10px;"><div class="buzz-icon buzz-google-big"></div>{{trans('index.sharegoogle') }}</a>
        <a href="javascript:" class="Pinterest do-signup postToResultFeed" style="float: left;margin-right:10px;width: 140px;padding: 5px 10px;"><div class="buzz-icon buzz-pinterest-big"></div>{{trans('index.sharepinterest') }}</a>
    </div>
    <div class="clearfix"></div>
    </div>
</section>