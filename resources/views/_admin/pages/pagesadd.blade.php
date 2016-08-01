@extends("_admin.adminapp")
@section('header')
<!-- bootstrap wysihtml5 - text editor -->
<link rel="stylesheet" href="/adminlte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css">
@endsection
@section("content")
 <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        {{ isset($page->title) ? 'Edit: '. $page->title : 'Create Page' }}

    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active"> Create Page</li>
    </ol>
</section>

<section class="content">
        {!!   Form::open(array('action' => 'Admin\PagesController@addnew', 'method' => 'POST', 'enctype' => 'multipart/form-data')) !!}
        <div class="row">
            <div class="col-md-6">
                <input type="hidden" name="id" value="{{ isset($page->id) ? $page->id : null }}">
                <div class="panel panel-info">
                    <div class="panel-heading">Page Form</div>
                    <div class="panel-body">

                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" name="title" class="form-control input-lg" placeholder="Title" value="{{ isset($page->title) ? $page->title : null }}">
                        </div>

                        <div class="form-group">
                            <label>Title Slug</label>
                            <input type="text" name="slug" class="form-control input-lg" placeholder="Slug" value="{{ isset($page->slug) ? $page->slug : null }}">
                        </div>

                        <div class="form-group">
                            <label>Description (For meta tag)</label>
                            <input type="text" name="description" class="form-control input-lg" placeholder="" value="{{ isset($page->description) ? $page->description : null }}">
                        </div>
                        <hr>
                        <div class="form-group">
                            <label>Text</label>
                           <textarea name="text" class="textarea" placeholder="Place some text here" style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">{{ isset($page->text) ? $page->text : null }}</textarea>
                        </div>
                        <hr>
                        <div class="form-group">
                            {!! Form::hidden('footer', null)  !!}
                        </div>

                    </div>
                </div>

                <input type="submit" value="{{ isset($page->title) ? 'Save Changes': 'Create Page' }}" class="btn btn-block btn-info btn-lg">

            </div><!-- /.col -->

        </div><!-- /.row -->
        {!! Form::close() !!}

</section>
@endsection
@section("footer")

    <!-- Bootstrap WYSIHTML5 -->
    <script src="/adminlte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"></script>
    <script>
        $(function () {
            //bootstrap WYSIHTML5 - text editor
            $(".textarea").wysihtml5();
        });
    </script>
@endsection