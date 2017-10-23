@if(getenvcong('facebookapp') or getenvcong('googleapp') or getenvcong('twitterapp'))
<div class="login-container steps">
    <div class="connect-forms ">
        <div class="hdr">{{ trans('index.connect') }}</div>
        <div class="external-sign-in">
            @if(getenvcong('facebookapp'))
            <a class="Facebook do-signup" href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'facebook']) }}"><div class="buzz-icon buzz-facebook-big"></div>{{ trans('index.connectfacebok') }}</a>
            <a class="Facebook mini" href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'facebook']) }}"><div class="buzz-icon buzz-facebook-big"></div></a>
            @endif
            @if(getenvcong('googleapp'))
            <a class="Google do-signup " href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'google']) }}"><div class="buzz-icon buzz-google-big"></div>{{ trans('index.connectgoogle') }}</a>
            <a class="Google mini" href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'google']) }}"><div class="buzz-icon buzz-google-big"></div></a>
            @endif
            @if(getenvcong('twitterapp'))
            <a class="Twitter do-signup " href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'twitter']) }}"><div class="buzz-icon buzz-twitter-big"></div>{{ trans('index.connecttwitter') }}</a>
            <a class="Twitter mini" href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'twitter']) }}"><div class="buzz-icon buzz-twitter-big"></div></a>
            @endif
            @if(env('VKONTAKTE_KEY'))
            <a class="Vkontakte do-signup" href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'vkontakte']) }}"><div class="buzz-icon buzz-vkontakte-big"></div>{{ trans('updates.connectvkontakte') }}</a>
           <a class="Vkontakte mini" href="{{ action('Auth\AuthController@socialConnectRedirect', ['type' => 'vkontakte']) }}"><div class="buzz-icon buzz-vkontakte-big"></div></a>
            @endif
        </div>
<div class="clearfix"></div>
    </div>
</div>
<div class="clearfix"></div>
@endif