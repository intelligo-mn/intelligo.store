@extends('emails.template')

@section('content')
    <table width="700" border="0" align="center" cellpadding="2" cellspacing="2" style="font-family:Verdana, Geneva, sans-serif; font-size:12px; text-align:left">
        <tr>
            <td style="text-align:left; font-size:18px; padding:0; color: #ff8a28;"><strong>{{ trans('email.delivery_virtuals_products.subject') }}</strong></td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr>
            <td style="font-size:11px; color:#000; padding:0; text-align:justify">
                {{-- @if(true) --}}
                @if($order['email']==$user['email'])
                    <h2>{{ trans('email.delivery_virtuals_products.message2') }}.</h2>
                @else
                    <h2>{{ $user['nickname'].' '.trans('email.delivery_virtuals_products.message1') }}.</h2>
                @endif
                <br/><br/>
                <h3>
                    {{-- <img src="/img{{ $product['features']['images'][0] }}" width="140" height="140"/> --}}
                    {{ $product['name'] }}</h3>
                <p>{{ $product['description'] }}</p><br/>
                @if($product['type']=='key')
                    <strong>{{  trans('email.delivery_virtuals_products.message3').': '.$row['key']  }}</strong>
                @endif
                <br/>
                <span>{{ trans('email.master.for_more_information') }}</span>
                {{-- @if(true) --}}
                @if($order['email']==$user['email'])
                    <a href="{{ route('orders.show_seller_order',$order['order_id']) }}" target="_blank">{{ trans('email.master.click_here') }}</a>
                @else
                    <a href="{{ route('products.show',$product['id']) }}" target="_blank">{{ trans('email.master.click_here') }}</a>
                @endif
            </td>
        </tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td>{{ trans('email.tag_team') }}</td></tr>
    </table>
@endsection