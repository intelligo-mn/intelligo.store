@extends('emails.template')

@section('content')

    <table width="700" border="0" align="center" cellpadding="2" cellspacing="2" style="font-family:Verdana, Geneva, sans-serif; font-size:12px; text-align:left">
        <tr>
            <td style="text-align:left; font-size:18px; padding:0; color: #ff8a28;"><strong>{{ trans('email.free_products_participation.subject') }} </strong></td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
            <td style="font-size:11px; color:#000; padding:0; text-align:justify">
                {{ trans('email.free_products_participation.message1') }}.<br /><br /><br />
                <a href="{{ route('freeproducts.show',[$freeproduct_id]) }}" target="_blank">{{ trans('email.free_products_participation.click_here') }}</a>
            </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td>{{ trans('email.tag_team') }}</td></tr>
    </table>
@endsection