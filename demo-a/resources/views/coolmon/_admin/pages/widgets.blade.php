@extends("_admin.adminapp")
@section("content")
        <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        {{ trans('admin.Widgets') }}
    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> {{ trans('admin.dashboard') }}</a></li>
        <li class="active">{{ trans('admin.Widgets') }}</li>
    </ol>
</section>

<section class="content">
    <div class="row">
        <div class="col-md-7">
            @if(count($PostPageSidebar) != 0)
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <h3 class="box-title">{{ trans('admin.PostPageSidebar') }}</h3>
                    </div><!-- /.box-header -->
                    <?php $i=0; ?>
                    <div class="box-body" style="padding:20px">
                        @foreach($PostPageSidebar as $i => $widget)
                            @include('_admin._particles.widget_list')
                        @endforeach
                    </div><!-- /.box-header -->
                </div>
            @endif
            @if(count($CategoriesPageSidebar) != 0)
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <h3 class="box-title">{{ trans('admin.CategoriesPageSidebar') }}</h3>
                    </div><!-- /.box-header -->
                    <?php $i=0; ?>
                    <div class="box-body" style="padding:20px">
                        @foreach($CategoriesPageSidebar as $i => $widget)
                            @include('_admin._particles.widget_list')
                        @endforeach
                    </div><!-- /.box-header -->
                </div>
            @endif

            @if(count($HeaderBelow) != 0)
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <h3 class="box-title">{{ trans('admin.HeaderBelow') }}</h3>
                    </div><!-- /.box-header -->
                    <?php $i=0; ?>
                    <div class="box-body" style="padding:20px">
                        @foreach($HeaderBelow as $i => $widget)
                            @include('_admin._particles.widget_list')
                        @endforeach
                    </div><!-- /.box-header -->
                </div>
            @endif
            @if(count($PostBelow) != 0)
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <h3 class="box-title">{{ trans('admin.PostBelow') }}</h3>
                    </div><!-- /.box-header -->
                    <?php $i=0; ?>
                    <div class="box-body" style="padding:20px">
                        @foreach($PostBelow as $i => $widget)
                            @include('_admin._particles.widget_list')
                        @endforeach
                    </div><!-- /.box-header -->
                </div>
            @endif
            @if(count($PostBetween2nd3rdentry) != 0)
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <h3 class="box-title">{{ trans('admin.PostPageBetween2nd3rdentry') }}</h3>
                    </div><!-- /.box-header -->
                    <?php $i=0; ?>
                    <div class="box-body" style="padding:20px">
                        @foreach($PostBetween2nd3rdentry as $i => $widget)
                            @include('_admin._particles.widget_list')
                        @endforeach
                    </div><!-- /.box-header -->
                </div>
            @endif

                @if(count($Homencolfirst) != 0)
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <h3 class="box-title">{{ trans('admin.HomePageFirst(List)Column') }}</h3>
                    </div><!-- /.box-header -->
                    <?php $i=0; ?>
                    <div class="box-body" style="padding:20px">
                        @foreach($Homencolfirst as $i => $widget)
                            @include('_admin._particles.widget_list')
                        @endforeach
                    </div><!-- /.box-header -->
                </div>
            @endif
                @if(count($Homencolsec) != 0)
                    <div class="box box-primary">
                        <div class="box-header with-border">
                            <h3 class="box-title">{{ trans('admin.HomePageSecond(News)Column') }}</h3>
                        </div><!-- /.box-header -->
                        <?php $i=0; ?>
                        <div class="box-body" style="padding:20px">
                            @foreach($Homencolsec as $i => $widget)
                                @include('_admin._particles.widget_list')
                            @endforeach
                        </div><!-- /.box-header -->
                    </div>
                @endif
                @if(count($PostShareBw) != 0)
                    <div class="box box-primary">
                        <div class="box-header with-border">
                            <h3 class="box-title">{{ trans('admin.PostPagesShareBelow') }}</h3>
                        </div><!-- /.box-header -->
                        <?php $i=0; ?>
                        <div class="box-body" style="padding:20px">
                            @foreach($PostShareBw as $i => $widget)
                                @include('_admin._particles.widget_list')
                            @endforeach
                        </div><!-- /.box-header -->
                    </div>
                @endif

            @if(count($Footer) !== 0)
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <h3 class="box-title">{{ trans('admin.Footer') }}</h3>
                    </div><!-- /.box-header -->
                    <?php $i=0; ?>
                    <div class="box-body" style="padding:20px">
                        @foreach($Footer as $i => $widget)
                            @include('_admin._particles.widget_list')
                        @endforeach
                    </div><!-- /.box-header -->
                </div>
            @endif


        </div><!-- /.col -->
        <div class="col-md-5">
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">{{ isset($widgeta->key) ? trans('admin.Edit').': '.$widgeta->key : trans('admin.AddWidget') }}</h3>
                </div><!-- /.box-header -->
                <!-- form start -->
                {!! Form::open(array('action' => array('Admin\WidgetsController@addnew'), 'method' => 'POST')) !!}
                <div class="box-body" style="padding:20px">
                    <input type="hidden" name="id" value="{{ isset($widgeta->id) ? $widgeta->id : null }}">
                    <div class="form-group">
                        {!! Form::label('key',trans('admin.WidgetName')) !!}
                        {!! Form::text('key',  isset($widgeta->key) ? $widgeta->key : null, ['id' => 'name', 'class' => 'form-control input-lg', 'placeholder' => trans('admin.WidgetName')]) !!}
                    </div>

                    <div class="form-group">
                        {!! Form::label('text',trans('admin.PasteHtml')) !!}
                        {!! Form::textarea('text', isset($widgeta->text) ? $widgeta->text : null, [ 'class' => 'form-control']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('type',trans('admin.Location')) !!}
                        {!! Form::select('type', [
                        'PostPageSidebar' => trans('admin.PostPageSidebar'),
                        'CatSide' => trans('admin.CategoriesPageSidebar'),
                        'HeaderBelow' =>  trans('admin.HeaderBelow'),
                        'PostBelow' => trans('admin.PostBelow'),
                         'PostShareBw' => trans('admin.PostPagesShareBelow'),
                        'Post2nd3rdentry' => trans('admin.PostPageBetween2nd3rdentry'),
                        'Homencolfirst' => trans('admin.HomePageFirst(List)Column'),
                        'Homencolsec' => trans('admin.HomePageSecond(News)Column'),
                        'Footer' => trans('admin.Footer'),
                        ], isset($widgeta->type) ? $widgeta->type : null , ['class' => 'form-control'])  !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('display',trans('admin.Display')) !!}
                        {!! Form::select('display', ['on' => trans('admin.on'),'off' => trans('admin.off')], isset($widgeta->display) ? $widgeta->display : null , ['class' => 'form-control'])  !!}
                    </div>

                </div><!-- /.box-body -->

                <div class="box-footer">
                    <button type="submit" class="btn btn-primary">{{ trans('admin.Submit') }}</button>
                    <a href="/admin/widgets" class="btn btn-default pull-right">{{ trans('admin.Cancel') }}</a>
                </div>
                {!! Form::close() !!}

            </div>

        </div><!-- /.col -->

    </div><!-- /.row -->

</section>
@endsection
@section("footer")
        <!-- CK Editor -->
<script src="https://cdn.ckeditor.com/4.4.3/standard/ckeditor.js"></script>
<script>
    $(function () {
        // Replace the <textarea id="editor1"> with a CKEditor
        // instance, using default configuration.
      // CKEDITOR.replace( 'text', {
      //      fullPage: true,
      //     allowedContent: true
      //  });
    });
</script>
@endsection