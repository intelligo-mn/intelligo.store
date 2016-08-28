
<div class="panel-body">
    <div class="form-group">
        {!! Form::hidden('order_id',$orderId) !!}</button>
        {!! Form::label('description',trans('freeproduct.description'), ['class'=>'col-md-3 control-label']) !!}
        <div class="col-md-9">
            {!! Form::text('description', null, ['class'=>'form-control']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('start_date',trans('freeproduct.start_date'), ['class'=>'col-md-3 control-label']) !!}
        <div class="col-md-9">
            {!! Form::date('start_date', \Carbon\Carbon::now(), ['class'=>'form-control']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('end_date',trans('freeproduct.end_date'), ['class'=>'col-md-3 control-label']) !!}
        <div class="col-md-9">
            {!! Form::date('end_date', \Carbon\Carbon::now()->addDay(), ['class'=>'form-control']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('participation_cost',trans('freeproduct.participation_cost'), ['class'=>'col-md-3 control-label']) !!}
        <div class="col-md-9">
            {!! Form::number('participation_cost', null, ['class'=>'form-control']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('min_participants',trans('freeproduct.min_participants'), ['class'=>'col-md-3 control-label']) !!}
        <div class="col-md-9">
            {!! Form::number('min_participants', 1, ['class'=>'form-control']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('max_participants',trans('freeproduct.max_participants'), ['class'=>'col-md-3 control-label']) !!}
        <div class="col-md-9">
            {!! Form::number('max_participants', null, ['class'=>'form-control']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('max_participations_per_user',trans('freeproduct.max_participations_per_user'), ['class'=>'col-md-3 control-label']) !!}
        <div class="col-md-9">
            {!! Form::number('max_participations_per_user', 1, ['class'=>'form-control']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('draw_number',trans('freeproduct.draw_number'), ['class'=>'col-md-3 control-label']) !!}
        <div class="col-md-9">
            {!! Form::number('draw_number', null, ['class'=>'form-control']) !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('draw_date',trans('freeproduct.draw_date'), ['class'=>'col-md-3 control-label']) !!}
        <div class="col-md-9">
            {!! Form::date('draw_date', \Carbon\Carbon::now()->addDay(2) , ['class'=>'form-control']) !!}
        </div>
    </div>
</div>

