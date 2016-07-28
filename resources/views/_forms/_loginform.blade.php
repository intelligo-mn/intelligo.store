<div class="modal-wrapper login-form">

    @include("auth.connect_buttons")

    <div class="login-container steps">

        <div class="signin-form email-form">
            <div class="hdr">{{ trans('index.loginwithemail') }}</div>
            {!! Form::open(array('action' => array('Auth\AuthController@login', 'redirectTo' => Request::query('redirectTo') ), 'method' => 'POST', 'onsubmit' => 'return false')) !!}
                 <div class="emailbox">
                    <input id="email" name="email" class="cd-input" placeholder="{{ trans('index.email') }}" type="email" value="">
                </div>
                <div class="passwordbox">
                    <input id="password" name="password" class="cd-input"  placeholder="{{ trans('index.password') }}" type="password">
                </div>
                <div class="under-email-signin clearfix">
                    <div class="rememberme cd-form ">
                        <input class="left" id="remember" name="remember" type="checkbox" value="true" checked>
                        <label class="show left" for="remember">{{ trans('index.remember') }}</label>
                    </div>
                </div>
                <button type="submit" class="button button-orange button-full" id="PostUserLogin">{{ trans('index.login') }}</button>

             {!! Form::close() !!}

        </div>
        <div class="signup-terms">
            <div class="show-connect-forms">
                {{ trans('index.youdonthaveanaccount') }} <a href="/register" @if(!isset($link)) rel="get:Signupform" @endif>{{ trans('index.register') }}</a>
            </div>
        </div>
    </div>
</div>
