@if(getcong('facebookpage') or getcong('twitterpage') or getcong('googlepage') or getcong('instagrampage'))
    <div class="external-sign-in" style="margin-bottom:20px">

    <div class="colheader" style="text-align: center;margin-bottom:20px;margin-top:-10px">
        <h1 style="float: none;position:relative;bottom:-15px;padding:0 10px;background-color: #fff;display: inline-block;">{{ trans('index.ccommunity') }}</h1>
    </div>
    @if(getcong('facebookpage'))
    <a class="Facebook do-signup tgec" target=_blank href="{!!  getcong('facebookpage') !!}">{{ trans('index.likeonface') }} </a>
    @endif
    @if(getcong('twitterpage'))
    <a class="Twitter do-signup tgec" target=_blank href="{!!  getcong('twitterpage') !!}">{{ trans('index.followontwitter') }}</a>
    @endif
    @if(getcong('googlepage'))
    <a class="Google do-signup tgec" target=_blank href="{!!  getcong('googlepage') !!}">{{ trans('index.followongoogle') }}</a>
    @endif
    @if(getcong('instagrampage'))
    <a class="Instagram do-signup tgec" target=_blank href="{!!  getcong('instagrampage') !!}">{{ trans('index.followoninstagram') }}</a>
    @endif
</div>
@endif