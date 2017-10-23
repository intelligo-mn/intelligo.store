@foreach($entrysquizquest as $key => $entry)

    <section class="entry quizquestion selectableQuest" id="section_{{ $entry->order }}" data-entry="{{ $entry->id }}">

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
        <div class="answer" style="margin-left:-15px;">
            <?php $sitep = $post->entry()->where('type', 'answer')->where('source', $entry->id)->get(); ?>

            <ol class="option-selection  @if($entry->video == '1')thdefault @else {{  $entry->video == "2" ?  'thlarge' : 'thlist' }}@endif">
                @foreach($sitep as $keya => $answers)
                    <?php  $keya=$keya+1;?>

                    <li>
                        <a class="" href="javascript:"  data-answer="{{ $answers->id }}" data-result="{{ $answers->video }}" >
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



<section class="entry results" id="quiz_result" data-popup="{{ getcong('BuzzyQuizzesPopup') }}">
    <div class="quiz_result_area">
        <h2 class="post-title">{{ $post->title }}</h2>
        <ol>
            @foreach($entrysquizresults as $keyp => $entry)

                <li class="quiz_result" data-order="{{ $keyp }}" data-result="{{ $entry->id }}" data-link="{{ Request::url() }}" data-name="{{ trans('buzzyquiz.yougot', ['title'=> $entry->title]) }}"  data-iname="{{ trans('buzzyquiz.igot', ['title'=> $entry->title, 'posttitle'=> $post->title]) }}"  data-itname="{{ trans('buzzyquiz.igotfortweet', ['title'=> $entry->title]) }}" data-description="{{ strip_tags($entry->body) }}" data-picture="{{ $entry->image > "" ? makepreview($entry->image, null, 'entries') : makepreview($post->thumb, 'b', 'posts')  }}">

                    <h2 class="quiz_headline">
                        {{ trans('buzzyquiz.yougot', ['title'=> $entry->title]) }}
                    </h2>
                    <div class="clear"></div>
                    <div  class="quiz_text"  {{ $entry->image == '' ? 'style=width:100%' :'' }}>{!! $entry->body !!}</div>

                    <div class="quiz_img {{ $entry->image == '' ? 'hide' :'' }}" >
                        <img class="responsive_img" style=" float: right;"  src="data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
                    </div>

                </li>

            @endforeach
        </ol>

    </div>
<div class="clear"></div>
    <div class="quiz_result_share">
    <h2 class="bold share_title">{{trans('buzzyquiz.shareresult') }}</h2>
    <div class="external-sign-in">
        <a href="javascript:" class="Facebook postToResultFeed">{{trans('index.sharefacebook') }}</a>
        <a href="javascript:" class="Twitter postToResultFeed">{{trans('index.sharetweet') }}</a>
        <a href="javascript:" class="Pinterest postToResultFeed">{{trans('index.sharepinterest') }}</a>
        <a href="https://plus.google.com/share?url={{ Request::url() }}" class="Google popup-action">{{trans('index.sharegoogle') }}</a>
    </div>
    <div class="clear"></div>
    </div>
</section>
