@extends("_admin.adminapp")
@section('header')
@endsection
@section("content")
        <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        {{ trans('admin.Pages') }}
    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> {{ trans('admin.dashboard') }}</a></li>
        <li class="active">{{ trans('admin.Pages') }}</li>
    </ol>
</section>

<section class="content">
    <div class="row">
        <div class="col-md-6">
            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title">{{ trans('admin.AllPages') }} ({{ count($pages) }})</h3>
                </div><!-- /.box-header -->
                <div class="box-body">
                    <table class="table table-bordered">
                        <tbody><tr>
                            <th style="width: 10px">#</th>
                            <th>{{ trans('admin.PageTitle') }}</th>
                            <th style="width: 100px">{{ trans('admin.actions') }}</th>
                        </tr>
                        @foreach($pages as $key => $page)
                        <tr>
                            <td>{{ $key+1 }}.</td>
                            <td>{{ $page->title }} <a href="{{ url('/pages/'.$page->slug) }}" target="_blank" style="margin-left:15px"><i class="fa fa-external-link"></i></a></td>
                            <td>
                                <a href="pages/edit/{{ $page->id }}" class="btn btn-sm btn-success" role="button" data-toggle="tooltip" data-original-title="{{ trans('admin.edit') }}"><i class="fa fa-edit"></i></a>

                                <a class="btn btn-sm btn-danger permanently" href="{{ url('admin/pages/delete/'.$page->id) }}" role="button" data-toggle="tooltip" data-original-title="{{ trans('admin.delete') }}"><i class="fa fa-times"></i></a>
                            </td>
                        </tr>
                        @endforeach
                        </tbody></table>
                </div><!-- /.box-body -->

            </div>

        </div><!-- /.col -->
    </div><!-- /.row -->

</section>
@endsection
@section("footer")

@endsection