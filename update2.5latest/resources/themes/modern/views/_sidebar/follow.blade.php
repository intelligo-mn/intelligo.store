@if(getenvcong('facebookpage') or getenvcong('twitterpage') or getenvcong('googlepage') or getenvcong('instagrampage'))
    <div class="sidebar-block clearfix">
        <div class="colheader sea"  style="margin:0px">
            <h1>{{ trans('index.ccommunity') }}</h1>
        </div>
        <div class="external-sign-in">

            @if(getenvcong('facebookpage'))
                <a class="Facebook do-signup tgec" target=_blank href="{!!  getenvcong('facebookpage') !!}"><div class="buzz-icon buzz-facebook-big"></div> {{ trans('index.likeonface') }} </a>
            @endif
            @if(getenvcong('twitterpage'))
                <a class="Twitter do-signup tgec" target=_blank href="{!!  getenvcong('twitterpage') !!}"><div class="buzz-icon buzz-twitter-big"></div>{{ trans('index.followontwitter') }}</a>
            @endif
            @if(getenvcong('googlepage'))
                <a class="Google do-signup tgec" target=_blank href="{!!  getenvcong('googlepage') !!}"><div class="buzz-icon buzz-google-big"></div>{{ trans('index.followongoogle') }}</a>
            @endif
            @if(getenvcong('instagrampage'))
                <a class="Instagram do-signup tgec" target=_blank href="{!!  getenvcong('instagrampage') !!}"><div class="buzz-icon buzz-ingtagram-big"></div>{{ trans('index.followoninstagram') }}</a>
            @endif
        </div>
      </div>
    @endif
