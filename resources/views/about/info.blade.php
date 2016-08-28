<address>
  <strong>{{ $main_company['name'] }}</strong><br>
  {{ $main_company['address'] }}<br>
  {{ $main_company['city'] }}, {{ $main_company['state'] }} {{ $main_company['zip_code'] }}<br>
  <abbr title="Phone">{{ trans('address.phone')}}:</abbr> {{ $main_company['phone_number'] }} @if($main_company['cell_phone']!='')/ {{ $main_company['cell_phone'] }} @endif
</address>

<address>
  <strong>{{ trans('company.emails') }}</strong><br>
  <small>
	  @if($main_company['contact_email']!='')
	  <a href="mailto:{{$main_company['contact_email'] }}">{{$main_company['contact_email'] }}</a>
	  @endif
	  @if($main_company['sales_email']!='')
	   / <a href="mailto:{{$main_company['sales_email'] }}">{{$main_company['sales_email'] }}</a>
	  @endif
	  @if($main_company['support_email']!='')
	   / <a href="mailto:{{$main_company['support_email'] }}">{{$main_company['support_email'] }}</a>
	  @endif
  </small>
</address>