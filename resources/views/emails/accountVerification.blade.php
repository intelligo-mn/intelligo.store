@extends('emails.template')
@section('content')
<table width="100%" border="0" align="center" cellpadding="2" cellspacing="2" style="font-family:Verdana, Geneva, sans-serif; font-size:12px; text-align:left">
    <tr><td>&nbsp;</td></tr>
    <tr>
        <td align="left">
            {{ trans('user.emails.verification_account.msg_01') }}
        </td>
    </tr>
    <tr><td>&nbsp;</td></tr>
    <tr>
        <td align="left">
            <a href="{{ url('verification', ['token' => md5($data['email'].'_'.$data['_token'].'_'.$data['email'])]) }}">
                {{ url('/verification/') }}
            </a>
        </td>
    </tr>
    <tr><td>&nbsp;</td></tr>
    <tr>
        <td align="left">
            {{ trans('user.emails.verification_account.msg_02') }}
        </td>
    </tr>
    <tr><td>&nbsp;</td></tr>
    <tr>
        <td align="left">
            {{ trans('user.emails.verification_account.msg_03') }}
                <a href="mailto:{{ $main_company['support_email'] }}">{{ $main_company['support_email'] }}</a>
            {{ trans('user.emails.verification_account.msg_04') }}
        </td>
    </tr>
    <tr><td>&nbsp;</td></tr>
    <tr>
        <td align="left">
           {{ trans('user.emails.verification_account.msg_05') }}
        </td>
    </tr>
</table>
@endsection