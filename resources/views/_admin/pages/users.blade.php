@extends("_admin.adminapp")
@section('header')
        <!-- DataTables -->
<link rel="stylesheet" href="/adminlte/plugins/datatables/dataTables.bootstrap.css">
@endsection
@section("content")
        <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        Users
        <small></small>
    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Users</li>
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
                            <th style="width: 5%">Tcon</th>
                            <th style="width: 30%">Title</th>
                            <th style="width: 20%">Email</th>
                            <th style="width: 15%">Status</th>
                            <th style="width: 10%">Joined At</th>
                            <th style="width: 10%">Last Seen</th>
                            <th style="width: 10%">Actions</th>
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
    <script>
        $(function() {

            $('#table').dataTable({
                "order": [[ 4, 'asc' ]],
                processing: true,
                serverSide: true,
                @if($type)
                ajax: '/admin/userlist/?only={{ $type }}',
                @else
                ajax: 'userlist',
                @endif
                columns: [
                    {data: 'icon', name: 'icon', orderable: false, searchable: false},
                    {data: 'username', name: 'username', orderable: false},
                    {data: 'email', name: 'email', orderable: false},
                    {data: 'status', name: 'status', orderable: false},
                    {data: 'created_at', name: 'created_at'},
                    {data: 'updated_at', name: 'updated_at'},
                    {data: 'action', name: 'action', orderable: false, searchable: false}
                ]
            });



        });
    </script>
@endsection