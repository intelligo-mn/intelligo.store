@extends("_admin.adminapp")
@section("content")
        <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        Categories
        <small>Magane your categories</small>
    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Categories</li>
    </ol>
</section>

<section class="content">
    <div class="row">
        <div class="col-md-8">

            <div class="nav-tabs-custom">
                <ul class="nav nav-tabs pull-right">
                    <li><a href="#tab_4-2" data-toggle="tab">Videos </a></li>
                    <li><a href="#tab_3-2" data-toggle="tab">Poll</a></li>
                    <li class=""><a href="#tab_2-2" data-toggle="tab" >List</a></li>
                    <li class="active"><a href="#tab_1-1" data-toggle="tab">News</a></li>


                    <li class="pull-left header"><i class="fa fa-th"></i> Categories</li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="tab_1-1">

                        @include('_admin._particles.categories._categorylist', ['categories' => $newscategories])

                    </div><!-- /.tab-pane -->
                    <div class="tab-pane " id="tab_2-2">

                        @include('_admin._particles.categories._categorylist', ['categories' => $listcategories])

                    </div><!-- /.tab-pane -->
                    <div class="tab-pane" id="tab_3-2">

                        @include('_admin._particles.categories._categorylist', ['categories' => $pollcategories])

                    </div><!-- /.tab-pane -->
                    <div class="tab-pane" id="tab_4-2">

                        @include('_admin._particles.categories._categorylist', ['categories' => $videocategories])
                    </div><!-- /.tab-pane -->
                </div><!-- /.tab-content -->
            </div>


        </div><!-- /.col -->
        <div class="col-md-4">
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">{{ isset($category->name) ? 'Edit: '.$category->name : 'Add Category' }}</h3>
                </div><!-- /.box-header -->
                <!-- form start -->
                {!! Form::open(array('action' => array('Admin\CategoriesController@addnew'), 'method' => 'POST')) !!}
                <div class="box-body" style="padding:20px">
                    <input type="hidden" name="id" value="{{ isset($category->id) ? $category->id : null }}">
                        <div class="form-group">
                            {!! Form::label('name','Category name') !!}
                            {!! Form::text('name',  isset($category->name) ? $category->name : null, ['id' => 'name', 'class' => 'form-control input-lg', 'placeholder' => 'Enter category name']) !!}
                        </div>
                        <div class="form-group">
                            {!! Form::label('description','Category Description (optional)') !!}
                            {!! Form::textarea('description', isset($category->description) ? $category->description : null, ['id' => 'description', 'class' => 'form-control']) !!}
                        </div>
                        <div class="form-group">
                            {!! Form::label('type','Content Type') !!}
                            {!! Form::select('type', ['news' => 'News','list' => 'Lists','poll' => 'Polls','video' => 'Videos'], isset($category->type) ? $category->type : null , ['class' => 'form-control'])  !!}
                        </div>

                    </div><!-- /.box-body -->

                    <div class="box-footer">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                {!! Form::close() !!}

            </div>

        </div><!-- /.col -->

    </div><!-- /.row -->

</section>
@endsection
@section("footer")

@endsection