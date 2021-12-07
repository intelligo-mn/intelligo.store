@extends("_admin.adminapp")
@section('header')
<!-- bootstrap wysihtml5 - text editor -->
<link rel="stylesheet" href="/adminlte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css">
@endsection
@section("content")
 <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        {{ isset($page->title) ? trans('admin.edit').': '. $page->title : trans('admin.CreatePage') }}

    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> {{ trans('admin.dashboard') }}</a></li>
        <li class="active"> {{ trans('admin.CreatePage') }}</li>
    </ol>
</section>

<section class="content">
        {!!   Form::open(array('action' => 'Admin\PagesController@addnew', 'method' => 'POST', 'enctype' => 'multipart/form-data')) !!}
        <div class="row">
            <div class="col-md-6">
                <input type="hidden" name="id" value="{{ isset($page->id) ? $page->id : null }}">
                <div class="panel panel-info">
                    <div class="panel-heading">{{ trans('admin.PageForm') }}</div>
                    <div class="panel-body">

                        <div class="form-group">
                            <label>{{ trans('admin.Title') }}</label>
                            <input type="text" name="title" class="form-control input-lg" placeholder="{{ trans('admin.Title') }}" value="{{ isset($page->title) ? $page->title : null }}">
                        </div>

                        <div class="form-group">
                            <label>{{ trans('admin.TitleSlug') }}</label>
                            <input type="text" name="slug" class="form-control input-lg" placeholder="{{ trans('admin.TitleSlug') }}" value="{{ isset($page->slug) ? $page->slug : null }}">
                        </div>

                        <div class="form-group">
                            <label>{{ trans('admin.Descriptiontag') }}</label>
                            <input type="text" name="description" class="form-control input-lg" placeholder="" value="{{ isset($page->description) ? $page->description : null }}">
                        </div>
                        <hr>
                        <div class="form-group">
                            <label>{{ trans('admin.text') }}</label>
                           <textarea name="text" class="textarea" id="textarea" placeholder="{{ trans('admin.Placesometexthere') }}" style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">{{ isset($page->text) ? $page->text : null }}</textarea>
                        </div>
                        <hr>
                        <div class="form-group">
                            <label>Footer Link?</label>
                            {!! Form::select('footer', ['1' => trans('admin.yes'),'0' => trans('admin.no')], isset($page->footer) ? $page->footer : null, ['class' => 'form-control'])  !!}
                        </div>

                    </div>
                </div>

                <input type="submit" value="{{ isset($page->title) ? trans('admin.SaveChanges') : trans('admin.CreatePage') }}" class="btn btn-block btn-info btn-lg">

            </div><!-- /.col -->

        </div><!-- /.row -->
        {!! Form::close() !!}

</section>
@endsection
@section("footer")

    <!-- Bootstrap WYSIHTML5 -->
<script src="https://cdn.ckeditor.com/4.5.7/standard/ckeditor.js"></script>
    <script>
        $(function () {
            CKEDITOR.replace('textarea');
        });
    </script>
@endsection