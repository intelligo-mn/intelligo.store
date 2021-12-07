<div class="box box-primary box-solid direct-chat direct-chat-primary collapsed-box">
    <div class="box-header">
        <h3 class="box-title">{{ $widget->key }} {!! $widget->display == 'off' ? '<span class="badge bg-danger">'.trans('admin.Disabled') .'</span>' : '' !!}</h3>
        <div class="box-tools pull-right">
            <a href="widgets?edit={{ $widget->id }}" data-toggle="tooltip" data-original-title="{{ trans('admin.Edit') }}" class="btn btn-box-tool btn-info"><i class="fa fa-edit"></i></a>
            <a href="{{ url('admin/widgets/delete/'.$widget->id) }}" data-toggle="tooltip" data-original-title="{{ trans('admin.delete') }}" class="btn btn-box-tool btn-danger permanently"><i class="fa fa-times"></i></a>
            <button class="btn btn-box-tool btn-primary" data-widget="collapse"><i class="fa fa-plus"></i></button>
        </div>
    </div><!-- /.box-header -->
    <div class="box-body" style="display: none;padding:10px">
        {!!  $widget->text !!}
    </div><!-- /.box-body -->
    <div class="box-footer" style="display: none;">
        <div class="pull-right"><small>
                {{ $widget->created_at }}</small>
        </div>
    </div><!-- /.box-footer-->
</div>