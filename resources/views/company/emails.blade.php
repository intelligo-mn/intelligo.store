<div class="row">&nbsp;</div>
<div class="row">
	<div class="col-md-9">
		<label class="control-label">{{ trans('company.admin_email')}}:</label>
		{!! Form::text('email',null,['class'=>'form-control','required']) !!}
	</div>
	
	<div class="col-md-9">
		<label class="control-label">{{ trans('company.contact_email')}}:</label>
		{!! Form::text('contact_email',null,['class'=>'form-control','required']) !!}
	</div>
	<div class="col-md-9">
		<label class="control-label">{{ trans('company.sales_email')}}:</label>
		{!! Form::text('sales_email',null,['class'=>'form-control','required']) !!}
	</div>
	<div class="col-md-9">
		<label class="control-label">{{ trans('company.support_email')}}:</label>
		{!! Form::text('support_email',null,['class'=>'form-control','required']) !!}
	</div>
</div>
<div class="row">&nbsp;</div>