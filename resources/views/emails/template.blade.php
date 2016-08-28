<table cellpadding="0" cellspacing="0" style="margin-top: 20px; font-family: 'Lato', sans-serif; font-style: normal; font-weight: normal; width: 100%; background-color: #E9EAED;height: 100%;border-radius: 3px;">
    <tr>
        <td width="80" style="background-color: #065fa3; height: 60px; padding-left: 20px; border-top-left-radius:3px;">
            <a href="{{ env('MAIN_SERVER') }}"><img src="{{ $main_company->logo }}" style="width:100%; max-width:80px; border-radius: 5px" alt="antvel"></a>
        </td>
        <td style="background-color: #065fa3; border-top-right-radius:3px; padding: 10px 0 0 10px; color: #FFF;">
            <a href="{{ env('MAIN_SERVER') }}" style="color: white; text-decoration: none;transition: .25s;"><h1>{{ $main_company->name }}</h1></a>
            @if (isset($title) && trim($title)!='')
                <p>{{ $title }}</p>
            @endif
        </td>
    </tr>
    <tr>
        <td colspan="2" style=" vertical-align: top; padding: 20px; height: 400px">
            <table align="center" style="width: 90%; background-color: #FFF; border-radius: 3px;">
                @if (isset($name) && trim($name)!='')
                <tr>
                    <td style="padding:10px;">{{ trans('email.dear') }} <strong>{{ $name }}</strong>,</td>
                </tr>
                @endif
                <tr>
                    <td style="padding:10px;">
                        @yield('content')
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                </tr>
            </table>
        </td>
    </tr>
</table>

<div align="center" style="font-family: sans-serif; font-style: normal; font-weight: normal; width: 100%; font-size: 12px; height: 30px; color: #999999; padding-top: 10px;">
    <div><small>{{ trans('email.end_note') }}</small></div><br>
    <div style="float: left">
        <a target="_blank" href="{{ env('MAIN_SERVER') }}about">{{ trans('company.about_us') }}</a>&nbsp;/&nbsp;
        <a target="_blank" href="{{ env('MAIN_SERVER') }}refunds">{{ trans('company.refund_policy') }}</a>&nbsp;/&nbsp;
        <a target="_blank" href="{{ env('MAIN_SERVER') }}privacy">{{ trans('company.privacy_policy') }}</a>&nbsp;/&nbsp;
        <a target="_blank" href="{{ env('MAIN_SERVER') }}terms">{{ trans('company.terms_of_service') }}</a>
        @if ($main_company->twitter!='')
            &nbsp;/&nbsp;<a target="_blank" href="https://twitter.com/{{ str_replace('@','',$main_company->twitter) }}">{{ trans('globals.twitter_label') }}</a>
        @endif
        @if ($main_company->facebook!='')
            &nbsp;/&nbsp;<a target="_blank" href="https://www.facebook.com/{{ $main_company->facebook }}">{{ trans('globals.facebook_label') }}</a>
        @endif
    </div>
    <div style="float: right">
        {{ trans('company.powered_by') }}&nbsp;<a target="_blank" href="{{ trans('company.powered_url') }}">{{ trans('company.powered_brand') }}</a>
    </div>
    <br>
    <div>&nbsp;</div>
</div>