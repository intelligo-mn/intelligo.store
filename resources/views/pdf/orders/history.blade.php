@extends('pdf.template')
@section('content')

<table width = "100%"  rowspan = "0" border = "0">
    
    <thead>
        <tr style="background-color: #F4F4F4; color: #A1A0A0; text-align: center">
            <th>{{ trans('store.order_label') }}</th>
            <th>{{ trans('globals.customer_name') }}</th>
            <th>{{ trans('store.status') }}</th>
            <th>{{ trans('store.created_on') }}</th>
            <th>{{ trans('store.updated_on') }}</th>
            <th>{{ trans('store.items') }}</th>
            <th>{{ trans('globals.total') }}</th>
        </tr>
    </thead>

    <tbody>
        @foreach ($orders as $order)
        <?php $total = \Utility::totalOrder($order->details); ?>
        <tr style="text-align: center">
            <td><a href="{{ route('orders.show_order', $order->id) }}" target="_blank">#{{ \Utility::codeMasked($order->id) }}</a></td>
            <td>{{ $order->user->profile->fullName }}</td>
            <td>{{ $order->status }}</td>
            <td>{{ Carbon\Carbon::parse($order->created_at)->format('F j, Y') }}</td>
            <td>{{ Carbon\Carbon::parse($order->updated_at)->format('F j, Y') }}</td>
            <td>{{ $total['qty'] }}</td>
            <td style="text-align: right">{{ \Utility::showPrice($total['total']) }}</td>
        </tr>
        @endforeach
    </tbody>  
    
</table>

<p>&nbsp;</p>

<h3>{{ trans('store.grand_total') }}:&nbsp;{{ \Utility::showPrice($summary['open']['total'] + $summary['pending']['total'] + $summary['sent']['total'] + $summary['closed']['total'] + $summary['cancelled']['total']) }}</h3>

<table width = "100%" border = "0">

<tr style="background-color: #F4F4F4; color: #A1A0A0; text-align: center">
	<td>{{ trans('store.open') }}&nbsp;({{ $summary['open']['qty'] }})</td>
	<td>{{ trans('store.pending') }}&nbsp;({{ $summary['pending']['qty'] }})</td>
	<td>{{ trans('store.sent') }}&nbsp;({{ $summary['sent']['qty'] }})</td>
	<td>{{ trans('store.closed') }}&nbsp;({{ $summary['closed']['qty'] }})</td>
	<td>{{ trans('store.cancelled') }}&nbsp;({{ $summary['cancelled']['qty'] }})</td>
</tr>

<tr style="text-align: center;">
	<td style = "font-weight: bold;">{{ \Utility::showPrice($summary['open']['total']) }}</td>
	<td style = "font-weight: bold;">{{ \Utility::showPrice($summary['pending']['total']) }}</td>
	<td style = "font-weight: bold;">{{ \Utility::showPrice($summary['sent']['total']) }}</td>
	<td style = "font-weight: bold;">{{ \Utility::showPrice($summary['closed']['total']) }}</td>
	<td style = "font-weight: bold;">{{ \Utility::showPrice($summary['cancelled']['total']) }}</td>
</tr>
</table>
@stop