@extends('emails.template')
@section('content')
<div style="padding-bottom: 10px;  margin: 20px 0 23px;">
	<div style="margin-bottom: 23px; font-size: 19.5px; line-height: inherit; color: #212121; border: 0; border-bottom: 1px solid #e5e5e5;">
		{{ $thanks }}
	</div>
</div>
<div>
	<p><a style="color: #2196f3; text-decoration: none;" href="mailto:{{ $email }}"></a>{{ $email }}</p>
	<p>{{ $message_ }}</p>
</div>
@endsection