@extends("_admin.adminapp")
@section('header')
<!-- DataTables -->
<link rel="stylesheet" href="/adminlte/plugins/datatables/dataTables.bootstrap.css">
<link rel="stylesheet" href="https://cdn.datatables.net/responsive/1.0.7/css/responsive.bootstrap.min.css">
@endsection
@section("content")
        <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        @if(Request::query('only')=='unapprove') Unapproved  @elseif(Request::query('only')=='deleted') Trash  @else @endif
        {{ $title }}
    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">{{ $title }}</li>
    </ol>
</section>

<!-- Main content -->
<section class="content">
    <div class="row">
        <div class="col-xs-12">

            <div class="box">
                <div class="box-body">
                    <table id="table" class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th style="width: 6%">Preview</th>
                            <th style="width: 35%">Title</th>
                            <th style="width: 15%">Status</th>
                            @if($type=='features')
                                <th style="width: 20%">Featured Date</th>
                            @else
                                <th style="width: 20%">Dates</th>
                            @endif
                            <th style="width: 15%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>


                        </tbody>
                    </table>
                </div><!-- /.box-body -->
            </div><!-- /.box -->
        </div><!-- /.col -->
    </div><!-- /.row -->
</section><!-- /.content -->


@endsection
@section('footer')
<script src="/adminlte/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="/adminlte/plugins/datatables/dataTables.bootstrap.min.js"></script>
<script src="/adminlte/plugins/datatables/dataTables.responsive.min.js"></script>

<script>
    $( document ).ready(function() {

            $('#table').dataTable({
                "order": [[ 3, 'desc' ]],
                processing: true,
                serverSide: true,
                "ajax": {
                    "url": '/admin/postlist/?type={{ $type }}@if(Request::query("only"))&only={{ Request::query("only") }}@endif',
                    "data": function ( ) {
                        setTimeout(function(){   Buzzy.init(); }, 2000);
                    }
                },

                columns: [
                    {data: 'thumb', name: 'thumb', orderable: false, searchable: false},
                    {data: 'title', name: 'title', orderable: false},
                    {data: 'approve', name: 'approve', orderable: false, searchable: false},
                        @if($type=='features')
                    {data: 'featured_at', name: 'featured_at'},
                        @else
                    {data: 'created_at', name: 'created_at'},
                        @endif
                    {data: 'action', name: 'action', orderable: false, searchable: false}
                ]
            });

    });
</script>
@endsection