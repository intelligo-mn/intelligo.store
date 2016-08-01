@extends("_admin.adminapp")
@section('header')
@endsection
@section("content")
        <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        Pages
    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Pages</li>
    </ol>
</section>

<section class="content">


    <div class="row">
        <div class="col-md-6">
            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title">All Pages ({{ count($pages) }})</h3>
                </div><!-- /.box-header -->
                <div class="box-body">
                    <table class="table table-bordered">
                        <tbody><tr>
                            <th style="width: 10px">#</th>
                            <th>Page Title</th>
                            <th style="width: 100px">Actions</th>
                        </tr>
                        @foreach($pages as $key => $page)
                        <tr>
                            <td>{{ $key+1 }}.</td>
                            <td>{{ $page->title }} <a href="{{ url('/pages/'.$page->slug) }}" target="_blank" style="margin-left:15px"><i class="fa fa-external-link"></i></a></td>
                            <td>
                                <a href="pages/edit/{{ $page->id }}" class="btn btn-sm btn-success" role="button" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-edit"></i></a>

                                <a class="btn btn-sm btn-danger permanently" href="{{ url('admin/pages/delete/'.$page->id) }}" role="button" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-times"></i></a>
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