@extends('emails.template')
@section('content')
<table width="100%" border="0" align="center" cellpadding="2" cellspacing="2" style="font-family:Verdana, Geneva, sans-serif; font-size:12px; text-align:left">
    <tr><td>&nbsp;</td></tr>
    <tr>
        <td align="center">
            <table border="0" width="100%">
                <thead>
                    <tr style="text-align:left; font-size:18px; padding:0; color: #065fa3;">
                        <th colspan="2" align="left">{{ trans('store.products') }}</th>
                        <th align="right">{{ trans('store.quantity') }}</th>
                        <th align="right">{{ trans('store.price') }}</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($data['order']['details'] as $detail)
                    <tr style="text-align:left; font-size:14px; padding:0; color: #000000;">
                        <td>
                            <img class="thumbnail" height="50" width="50"  src="{{ env('MAIN_SERVER').$detail['product']['features']['images'][0]}}">
                        </td>
                        <td width="65%">
                            <small>
                                <a href="{{ route('products.show',$detail['product']['id']) }}">{{$detail['product']['name']}}</a>
                            </small>
                        </td>
                        <td align="right">{{$detail['quantity']}}</td>
                        <td align="right">{!! \Utility::showPrice($detail['price']) !!}</td>
                    </tr>
                    @endforeach
            {{--
                @foreach ($data['order']->details as $detail)
                    <tr style="text-align:left; font-size:14px; padding:0; color: #000000;">
                        <td>
                            <img class="thumbnail" height="50" width="50"  src="{{ url().$detail->product->firstImage}}">
                        </td>
                        <td width="65%">
                            <small>
                                <a href="{{ route('products.show',$detail->product->id) }}">{{$detail->product->name}}</a>
                            </small>
                        </td>
                        <td align="right">{{$detail->quantity}}</td>
                        <td align="right">{!! \Utility::showPrice($detail->price) !!}</td>
                    </tr>
                    @endforeach
             --}}
                </tbody>
            </table>

        </td>
    </tr>
    <tr><td>&nbsp;</td></tr>
    <tr>
        <td style="font-size:11px; color:#000; padding:0; text-align:justify">
            {{ trans('email.new_order_for_user.message1') }}.<br /><br /><br />
            <a href="{{ route('orders.show_orders') }}" target="_blank">{{ route('orders.show_orders') }}</a>
        </td>
    </tr>
    <tr><td>&nbsp;</td></tr>
    <tr><td>&nbsp;</td></tr>
</table>
@endsection