@if(getenvcong('facebookpage') or getenvcong('twitterpage') or getenvcong('googlepage') or getenvcong('instagrampage'))
    <div class="external-sign-in" style="margin-bottom:20px">

    <div class="colheader" style="text-align: center;margin-bottom:20px;margin-top:-10px">
        <h1 style="float: none;position:relative;bottom:-15px;padding:0 10px;background-color: #fff;display: inline-block;">{{ trans('index.ccommunity') }}</h1>
    </div>
    @if(getenvcong('facebookpage'))
    <a class="Facebook do-signup tgec" target=_blank href="{!!  getenvcong('facebookpage') !!}">{{ trans('index.likeonface') }} </a>
    @endif
    @if(getenvcong('twitterpage'))
    <a class="Twitter do-signup tgec" target=_blank href="{!!  getenvcong('twitterpage') !!}">{{ trans('index.followontwitter') }}</a>
    @endif
    @if(getenvcong('googlepage'))
    <a class="Google do-signup tgec" target=_blank href="{!!  getenvcong('googlepage') !!}">{{ trans('index.followongoogle') }}</a>
    @endif
    @if(getenvcong('instagrampage'))
    <a class="Instagram do-signup tgec" target=_blank href="{!!  getenvcong('instagrampage') !!}">{{ trans('index.followoninstagram') }}</a>
    @endif
</div>
@endif