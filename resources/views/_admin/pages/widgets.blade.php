@extends("_admin.adminapp")
@section("content")
        <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        Widgets
    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Widgets</li>
    </ol>
</section>

<section class="content">
    <div class="row">
        <div class="col-md-7">
            @if(count($widgets->where('type', 'PostPageSidebar')) !== 0)
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Post Page Sidebar</h3>
                </div><!-- /.box-header -->
                <?php $i=0; ?>
                <div class="box-body" style="padding:20px">
                        @foreach($widgets->where('type', 'PostPageSidebar') as $i => $widget)
                            @include('_admin._particles.widget_list')
                         @endforeach
                </div><!-- /.box-header -->
            </div>
            @endif
            @if(count($widgets->where('type', 'CategoriesPageSidebar')) !== 0)
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Categories Page Sidebar</h3>
                </div><!-- /.box-header -->
                <?php $i=0; ?>
                <div class="box-body" style="padding:20px">
                        @foreach($widgets->where('type', 'CategoriesPageSidebar') as $i => $widget)
                            @include('_admin._particles.widget_list')
                         @endforeach
                </div><!-- /.box-header -->
            </div>
            @endif

            @if(count($widgets->where('type', 'HeaderBelow')) !== 0)
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Header Below</h3>
                </div><!-- /.box-header -->
                <?php $i=0; ?>
                <div class="box-body" style="padding:20px">
                        @foreach($widgets->where('type', 'HeaderBelow') as $i => $widget)
                            @include('_admin._particles.widget_list')
                         @endforeach
                </div><!-- /.box-header -->
            </div>
            @endif
            @if(count($widgets->where('type', 'PostBelow')) !== 0)
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Post Below</h3>
                </div><!-- /.box-header -->
                <?php $i=0; ?>
                <div class="box-body" style="padding:20px">
                        @foreach($widgets->where('type', 'PostBelow') as $i => $widget)
                            @include('_admin._particles.widget_list')
                         @endforeach
                </div><!-- /.box-header -->
            </div>
            @endif

            @if(count($widgets->where('type', 'HomePageBelowTopItems')) !== 0)
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">HomePage Below Top Items</h3>
                </div><!-- /.box-header -->
                <?php $i=0; ?>
                <div class="box-body" style="padding:20px">
                        @foreach($widgets->where('type', 'HomePageBelowTopItems') as $i => $widget)
                            @include('_admin._particles.widget_list')
                         @endforeach
                </div><!-- /.box-header -->
            </div>
            @endif
            @if(count($widgets->where('type', 'Footer')) !== 0)
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Footer</h3>
                </div><!-- /.box-header -->
                <?php $i=0; ?>
                <div class="box-body" style="padding:20px">
                        @foreach($widgets->where('type', 'Footer') as $i => $widget)
                            @include('_admin._particles.widget_list')
                         @endforeach
                </div><!-- /.box-header -->
            </div>
            @endif


        </div><!-- /.col -->
        <div class="col-md-5">
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">{{ isset($widgeta->key) ? 'Edit: '.$widgeta->key : 'Add Widget' }}</h3>
                </div><!-- /.box-header -->
                <!-- form start -->
                {!! Form::open(array('action' => array('Admin\WidgetsController@addnew'), 'method' => 'POST')) !!}
                <div class="box-body" style="padding:20px">
                    <input type="hidden" name="id" value="{{ isset($widgeta->id) ? $widgeta->id : null }}">
                        <div class="form-group">
                            {!! Form::label('key','Widget Name') !!}
                            {!! Form::text('key',  isset($widgeta->key) ? $widgeta->key : null, ['id' => 'name', 'class' => 'form-control input-lg', 'placeholder' => 'Widget name']) !!}
                        </div>
                        <div class="form-group">
                            {!! Form::label('text','Content') !!}
                            {!! Form::textarea('text', isset($widgeta->text) ? $widgeta->text : null, ['id' => 'text', 'class' => 'form-control']) !!}
                        </div>
                        <div class="form-group">
                            {!! Form::label('type','Location') !!}
                            {!! Form::select('type', [
                            'PostPageSidebar' => 'Post Page Sidebar',
                            'CategoriesPageSidebar' => 'Categories Page Sidebar',
                            'HeaderBelow' => 'Header Below',
                            'PostBelow' => 'Post Below',
                            'HomePageBelowTopItems' => 'HomePage Below Top Items',
                            'Footer' => 'Footer',
                            ], isset($widgeta->type) ? $widgeta->type : null , ['class' => 'form-control'])  !!}
                        </div>
                          <div class="form-group">
                            {!! Form::label('display','Display') !!}
                            {!! Form::select('display', ['on' => 'On','off' => 'Off'], isset($widgeta->display) ? $widgeta->display : null , ['class' => 'form-control'])  !!}
                        </div>

                    </div><!-- /.box-body -->

                    <div class="box-footer">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <a href="/admin/widgets" class="btn btn-default pull-right">Cancel</a>
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
        CKEDITOR.replace( 'text', {
            fullPage: true,
            allowedContent: true
        });
    });
</script>
@endsection