@if(getcong('facebookapp') or getcong('googleapp') or getcong('twitterapp'))
<div class="login-container steps">
    <div class="connect-forms ">
        <div class="hdr">{{ trans('index.connect') }}</div>
        <div class="external-sign-in">
            @if(getcong('facebookapp'))
            <a class="Facebook" href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'facebook']) }}">{{ trans('index.connectfacebok') }}</a>
            @endif
            @if(getcong('googleapp'))
            <a class="Google" href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'google']) }}">{{ trans('index.connectgoogle') }}</a>
            @endif
            @if(getcong('twitterapp'))
            <a class="Twitter" href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'twitter']) }}">{{ trans('index.connecttwitter') }}</a>
            @endif
        </div>

    </div>
</div>
@endif