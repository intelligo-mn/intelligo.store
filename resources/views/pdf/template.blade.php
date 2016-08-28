<style>
	.report-font-style
	{
		font-size: 11px; 
		font-family: 'Lato', sans-serif; 
		font-style: normal; 
		font-weight: normal;
	}

	h3
	{
		font-family: 'Lato', sans-serif; 
		color: #299CC2;
	}

	ul
	{
		color: #A1A0A0; 
		list-style: none; 
		padding: 0
	}

	li
	{
		padding: 0 0 5px 0
	}

	span
	{
		color: #299CC2
	}

    th, td
    {
        padding: 5px;
        font-weight: normal;
    }

    hr
    {
        border:1px solid #F4F4F4
    }

    tr
    {
        font-weight: bold;
    }
</style>

<table border="0" width="100%" cellpadding="0" cellspacing="0" class="report-font-style">
    <tr>
        <td>
            <a href="{{ url() }}"><img src="{{ $main_company['logo'] }}" alt="antvel"></a>
        </td>
        <td>
        	<span>{{ $main_company['name'] }}</span><br>
        	<ul>
        		<li>{{ trans('company.contact_email') }}:&nbsp;{{ $main_company['email'] }}</li>
        		<li>{{ trans('company.cell_phone') }}:&nbsp;{{ $main_company['cell_phone'] }}</li>
        		<li>{{ trans('company.phone') }}:&nbsp;{{ $main_company['phone_number'] }}</li>
        		<li>
        			@if ($dateFrom != '' && $dateTo == '')
        				<strong>{{ trans('globals.filtered') }}:</strong>&nbsp;{{ $dateFrom }}
        			@elseif ($dateFrom == '' && $dateTo != '')
        				<strong>{{ trans('globals.filtered') }}:</strong>&nbsp;{{ $dateTo }}
        			@elseif ($dateFrom != '' && $dateTo != '')
        				<strong>{{ trans('globals.filtered') }}:</strong>&nbsp;{{ $dateFrom }}&nbsp;/&nbsp;{{ $dateTo }}
        			@else
        				&nbsp;
        			@endif
        		</li>
        	</ul>
        </td>
        <td>
        	<span>{{ trans('globals.location') }}</span><br>
        	<ul>
        		<li>{{ $main_company['address'] }}</li>
        		<li>{{ $main_company['city'] }},&nbsp;{{ strtoupper($main_company['state']) }}</li>
        		<li>{{ trans('company.zip') }}:&nbsp;{{ $main_company['zip_code'] }}</li>
        		<li>&nbsp;</li>
        	</ul>
        </td>
    </tr>
</table>

<h3>{{ $title }}</h3>
<div class="report-font-style">
	@yield('content')
</div>