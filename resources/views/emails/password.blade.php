@extends('emails.template')

@section('content')

    <table width="700" border="0" align="center" cellpadding="2" cellspacing="2" style="font-family:Verdana, Geneva, sans-serif; font-size:12px; text-align:left">
        <tr>
            <td style="text-align:left; font-size:18px; padding:0; color: #ff8a28;"><strong>{{ trans('email.reset_password.message1') }}</strong></td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
            <td style="font-size:11px; color:#000; padding:0; text-align:justify">
                {{ trans('email.reset_password.message2') }}.<br />{{ trans('email.reset_password.message3') }}:<br /><br />
                <a href="{{ url('password/reset/'.$token) }}" target="_blank">{{ url('password/reset/'.$token) }}</a>
            </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td style="font-size:11px; color:#000; padding:0; text-align:justify">{{ trans('email.reset_password.message4') }}. </td></tr>
        <tr><td style="text-align:left; font-size:14px; padding:0">&nbsp;</td></tr>
        <tr><td style="font-size:11px; color:#000; padding:0; text-align:justify">{{ trans('email.reset_password.message5') }} <a href="mailto:{{ trans('email.reset_password.support_for_reset') }}">{{ trans('email.support') }}</a></td></tr>
        <tr><td style="text-align:left; font-size:14px; padding:0">&nbsp;</td></tr>
        <tr><td>{{ trans('email.tag_team') }}</td></tr>
    </table>

@endsection