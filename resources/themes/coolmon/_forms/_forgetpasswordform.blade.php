<div class="modal-wrapper login-form">

    <div class="login-container steps">

        <div class="signin-form email-form">
            <div class="hdr">{{ trans('passwords.resetpass') }}</div>
            <form  role="form" method="POST" action="/password/email">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">

                <div class="emailbox">

                     <input type="email" class="cd-input" name="email" value="{{ old('email') }}" placeholder="{{ trans('passwords.passemail') }}">
                </div>
                <br>
                <button type="submit" class="button button-orange button-full"> {{ trans('passwords.passwordreslink') }}</button>

            </form>

        </div>
    </div>
</div>
