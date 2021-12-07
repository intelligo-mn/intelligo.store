<div class="modal-wrapper login-form">

    <div class="login-container steps">

        <div class="signin-form email-form">
            <div class="hdr">{{ trans('passwords.resetpass') }}</div>
            <form  role="form" method="POST" action="/password/reset">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <input type="hidden" name="token" value="{{ $token }}">

                <div class="emailbox">
                    <label>{{ trans('passwords.passemail') }}</label>
                     <input type="email" class="cd-input" name="email" value="{{ old('email') }}">
                </div>
<br>
                <div class="passwordbox">
                    <label>{{ trans('passwords.passpassword') }}</label>
                      <input type="password" class="cd-input" name="password">
                </div>
                <br>
                <div class="passwordbox">
                    <label>{{ trans('passwords.passpasswordconf') }}</label>
                        <input type="password" class="cd-input" name="password_confirmation">
                </div>

<br><br>
                <button type="submit" class="button button-orange button-full">{{ trans('passwords.resetpass') }}</button>

            </form>

        </div>
    </div>
</div>
