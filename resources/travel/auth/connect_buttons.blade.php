@if(getcong('facebookapp') or getcong('googleapp') or getcong('twitterapp'))
<div class="login-container steps">
    <div class="connect-forms ">
        <div class="hdr">{{ trans('index.connect') }}</div>
        <div class="external-sign-in">
            @if(getcong('facebookapp'))
            <a class="Facebook do-signup" href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'facebook']) }}">{{ trans('index.connectfacebok') }}</a>
            <a class="Facebook mini" href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'facebook']) }}"></a>
            @endif
            @if(getcong('googleapp'))
            <a class="Google do-signup " href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'google']) }}">{{ trans('index.connectgoogle') }}</a>
            <a class="Google mini" href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'google']) }}"></a>
            @endif
            @if(getcong('twitterapp'))
            <a class="Twitter do-signup " href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'twitter']) }}">{{ trans('index.connecttwitter') }}</a>
            <a class="Twitter mini" href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'twitter']) }}"></a>
            @endif
            @if(env('VKONTAKTE_KEY'))
            <a class="Vkontakte do-signup" href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'vkontakte']) }}">{{ trans('updates.connectvkontakte') }}</a>
           <a class="Vkontakte mini" href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'vkontakte']) }}"></a>
            @endif
        </div>
<div class="clear"></div>
    </div>
</div>
@endif