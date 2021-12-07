@extends("_admin.adminapp")
@section("content")
        <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        Reactions
    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> {{ trans('admin.dashboard') }}</a></li>
        <li class="active">Reactions</li>
    </ol>
</section>

<section class="content">
    <div class="row">
        <div class="col-md-7">
            <div class="row">


            @foreach(\App\Reaction::where('display', 'on')->orderBy('ord', 'asc')->get() as $react)

                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="info-box">
                            <span class="info-box-icon bg-aqua"> <img alt="{{ $react->name }}" src="{{ $react->icon }} " width="50"></span>

                            <div class="info-box-content">
                                <span class="info-box-text">{{ $react->ord }}.</span>
                                <span class="info-box-number">{{ $react->name }}</span>
                                <span class="info-box-text">
                                     <a href="reactions?edit={{ $react->id }}" data-toggle="tooltip" data-original-title="{{ trans('admin.Edit') }}" class="btn btn-box-tool btn-info" style="  margin-top:4px;  padding: 2px 5px;color:#fff"><i class="fa fa-edit"></i></a>
                                     <a href="{{ url('admin/reactions/delete/'.$react->id) }}" data-toggle="tooltip" data-original-title="{{ trans('admin.delete') }}" class="btn btn-box-tool btn-danger permanently" style="  margin-top:4px;  padding: 2px 5px;color:#fff"><i class="fa fa-times"></i></a>



                                </span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                        <!-- /.info-box -->
                    </div>

            @endforeach

            </div>
            <style>


            </style>

        </div><!-- /.col -->
        <div class="col-md-5">


            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">{{ isset($reaction->id) ? 'Edit Reaction:'.$reaction->name : 'Add Reaction Icon' }}</h3>
                </div><!-- /.box-header -->
                <!-- form start -->
                {!! Form::open(array('action' => array('Admin\ReactionController@addnew'), 'method' => 'POST', 'enctype' => 'multipart/form-data')) !!}
                <div class="box-body" style="padding:20px">
                    <input type="hidden" name="id" value="{{ isset($reaction->id) ? $reaction->id : null }}">
                    <div class="form-group">
                        {!! Form::label('ord', 'Order') !!}
                        {!! Form::text('ord', isset($reaction->ord) ? $reaction->ord : null, ['id' => 'ord', 'class' => 'form-control input-lg']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('name', 'Name') !!}
                        {!! Form::text('name',  isset($reaction->name) ? $reaction->name : null, ['id' => 'name', 'class' => 'form-control input-lg']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('reaction_type', 'Unique Id') !!}
                        {!! Form::text('reaction_type',  isset($reaction->reaction_type) ? $reaction->reaction_type : null, ['id' => 'slug', 'class' => 'form-control input-lg']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('icon', 'Icon') !!}
                        {!! Form::file('icon',   ['id' => 'icon', 'class' => 'form-control input-lg']) !!}
                    </div>

                    <div class="form-group">
                        {!! Form::label('display',trans('admin.Display')) !!}
                        {!! Form::select('display', ['on' => trans('admin.on'),'off' => trans('admin.off')], isset($reaction->display) ? $reaction->display : null , ['class' => 'form-control'])  !!}
                    </div>
                </div><!-- /.box-body -->

                <div class="box-footer">
                    <button type="submit" class="btn btn-primary">{{ trans('admin.Submit') }}</button>
                    <a href="/admin/reactions" class="btn btn-default pull-right">{{ trans('admin.Cancel') }}</a>
                </div>
                {!! Form::close() !!}

            </div>

        </div><!-- /.col -->

    </div><!-- /.row -->

</section>
@endsection
@section("footer")

@endsection