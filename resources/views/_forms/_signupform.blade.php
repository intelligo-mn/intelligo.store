<div class="modal-wrapper signup-form">
    @include("auth.connect_buttons")

    <div class="login-container steps">

        <div class="signin-form email-form">
            <div class="hdr">{{ trans('index.registerwithemail') }}</div>
            {!! Form::open(array('action' => array('Auth\AuthController@register', 'redirectTo' => Request::query('redirectTo') ), 'method' => 'POST', 'onsubmit' => 'return false')) !!}
            <div class="usernamebox">
                <input  id="username" class="cd-input" name="username" placeholder="{{ trans('index.username') }}" type="text" value="">
            </div>
            <div class="emailbox">
                <input id="email" name="email" class="cd-input" placeholder="{{ trans('index.email') }}" type="email" value="">
            </div>
            <div class="passwordbox">
                <input id="password" name="password" class="cd-input"  placeholder="{{ trans('index.password') }}" type="password">
            </div>
            <div class="under-email-signin clearfix">
                <div class="forgot-pass">

                    {!!  trans('index.termslink', ['url' => '<a href="'.getcong('termspage').'" target="_blank">'.trans('index.terms').'</a>']) !!}
                </div>
            </div>
            <button type="button" class="button button-orange button-full"  id="PostNewUser">{{ trans('index.register') }}</button>

            {!! Form::close() !!}

        </div>
        <div class="signup-terms">
            <div class="show-connect-forms">
                {{ trans('index.Doyouhaveanaccount') }} <a href="/register" @if(!isset($link)) rel="get:Loginform" @endif>{{ trans('index.login') }}</a>
            </div>
        </div>
    </div>


</div>
