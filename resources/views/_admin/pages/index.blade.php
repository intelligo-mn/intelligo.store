@extends("_admin.adminapp")
@section("content")
        <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        Dashboard
        <small>Control panel</small>
    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
    </ol>
</section>

<!-- Main content -->
<section class="content">

        <!-- Small boxes (Stat box) -->
<div class="row">
    <div class="col-lg-3 col-xs-6">
        <!-- small box -->
        <div class="small-box bg-green">
            <div class="inner">
                <h3>{{ $postunapprove }}</h3>
                <p>Waiting approve</p>
            </div>
            <div class="icon">
                <i class="fa fa-check-circle"></i>
            </div>
            <a href="/admin/unapprove?only=unapprove" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
        </div>
    </div><!-- ./col -->
    <div class="col-lg-3 col-xs-6">
        <!-- small box -->
        <div class="small-box bg-aqua">
            <div class="inner">
                <h3>{{ $todaypost }}</h3>
                <p>Todays Posts</p>
            </div>
            <div class="icon">
                <i class="fa fa-file-text"></i>
            </div>
            <a href="/admin/all" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
        </div>
    </div><!-- ./col -->
    <div class="col-lg-3 col-xs-6">
        <!-- small box -->
        <div class="small-box bg-yellow">
            <div class="inner">
                <h3>{{ $todayusers }}</h3>
                <p>Todays User Registrations</p>
            </div>
            <div class="icon">
                <i class="fa fa-user-plus"></i>
            </div>
            <a href="/admin/users" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
        </div>
    </div><!-- ./col -->
    <div class="col-lg-3 col-xs-6">
        <!-- small box -->
        <div class="small-box bg-red">
            <div class="inner">
                <h3>{{ $todaylogins }}</h3>
                <p>Today User Logins</p>
            </div>
            <div class="icon">
                <i class="fa fa-eye"></i>
            </div>
            <a href="/admin/users" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
        </div>
    </div><!-- ./col -->
</div><!-- /.row -->
<!-- Main row -->
<div class="row">
    <!-- Left col -->
    <section class="col-lg-7 connectedSortable">


    <div class="row">
        <div class="col-md-6">
            <div class="box box-success">
                <div class="box-header with-border">
                    <h3 class="box-title">Recently Added News</h3>
                    <div class="box-tools pull-right">
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                        <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                    </div>
                </div><!-- /.box-header -->
                <div class="box-body">
                    <ul class="products-list product-list-in-box">
                        @foreach($lastnews as $item)
                        @include('._admin._particles.items.item_lists')
                        @endforeach
                    </ul>
                </div><!-- /.box-body -->
                <div class="box-footer text-center">
                    <a href="/admin/news" class="uppercase">View All News</a>
                </div><!-- /.box-footer -->
            </div>
        </div>


        <div class="col-md-6">
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Recently Added Lists</h3>
                    <div class="box-tools pull-right">
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                        <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                    </div>
                </div><!-- /.box-header -->
                <div class="box-body">
                    <ul class="products-list product-list-in-box">
                        @foreach($lastlists as $item)
                            @include('._admin._particles.items.item_lists')
                        @endforeach
                    </ul>
                </div><!-- /.box-body -->
                <div class="box-footer text-center">
                    <a href="/admin/lists" class="uppercase">View All Lists</a>
                </div><!-- /.box-footer -->
            </div>

        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="box box-warning">
                <div class="box-header with-border">
                    <h3 class="box-title">Recently Added Polls</h3>
                    <div class="box-tools pull-right">
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                        <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                    </div>
                </div><!-- /.box-header -->
                <div class="box-body">
                    <ul class="products-list product-list-in-box">
                        @foreach($lastpolls as $item)
                            @include('._admin._particles.items.item_lists')
                        @endforeach
                    </ul>
                </div><!-- /.box-body -->
                <div class="box-footer text-center">
                    <a href="/admin/polls" class="uppercase">View All Polls</a>
                </div><!-- /.box-footer -->
            </div>
        </div>


        <div class="col-md-6">
            <div class="box box-danger">
                <div class="box-header with-border">
                    <h3 class="box-title">Recently Added Videos</h3>
                    <div class="box-tools pull-right">
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                        <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                    </div>
                </div><!-- /.box-header -->
                <div class="box-body">
                    <ul class="products-list product-list-in-box">
                        @foreach($lastvideos as $item)
                            @include('._admin._particles.items.item_lists')
                        @endforeach
                    </ul>
                </div><!-- /.box-body -->
                <div class="box-footer text-center">
                    <a href="/admin/videos" class="uppercase">View All Videos</a>
                </div><!-- /.box-footer -->
            </div>

        </div>
    </div>

        <!-- USERS LIST -->
        <div class="box box-default">
            <div class="box-header with-border">
                <h3 class="box-title">Latest Members</h3>
                <div class="box-tools pull-right">
                    <span class="label label-danger">{{ $todayusers }} New Members Today</span>
                    <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                </div>
            </div><!-- /.box-header -->
            <div class="box-body no-padding">

                <ul class="users-list clearfix">
                    @foreach($lastusers as $user)
                        <li style=" width: 20%;">
                            <img src="{{ makepreview($user->icon, 'b', 'members/avatar') }}" width="110" height="110" alt="User Image">
                            <a class="users-list-name" target="_blank" href="/profile/{{ $user->username_slug }}">{{ $user->username }}</a>
                            <span class="users-list-date">{{ $user->created_at->diffForHumans() }}</span>
                        </li>
                    @endforeach
                </ul><!-- /.users-list -->
            </div><!-- /.box-body -->
            <div class="box-footer text-center">
                <a href="/admin/users" class="uppercase">View All Users</a>
            </div><!-- /.box-footer -->
        </div><!--/.box -->
    </section><!-- /.Left col -->

    <!-- right col (We are only adding the ID to make the widgets sortable)-->
    <section class="col-lg-5 connectedSortable">

        <div class="box box-info" >
            <div class="box-header with-border">
                <h3 class="box-title">Latest Unapproved Posts</h3>
                <div class="box-tools pull-right">
                    <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                </div>
            </div><!-- /.box-header -->
            <div class="box-body" >
                @if(count($lastunappruves) !== 0)
                <div class="table-responsive" style="overflow: auto;">
                    <table class="table no-margin" style="overflow: auto;">
                        <thead>
                        <tr>
                            <th width="5%">Thumb</th>
                            <th width="65%">Posts</th>
                            <th width="15%">Type</th>
                            <th width="15%">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($lastunappruves as $item)
                            <tr>
                                <td>
                                    <div class="product-img">
                                        <img src="/upload/media/posts/{{ $item->thumb }}-s.jpg" width="50">
                                    </div>
                                </td>
                                <td><a target="_blank" href="/{{ $item->type}}/{{$item->slug }}">{{ $item->title }}</a></td>
                                <td>
                                    @if($item->type == 'news')
                                        <span class="label  bg-aqua"><i class="fa fa-file-text"></i>&nbsp;News</span>
                                    @elseif($item->type == 'list')
                                        <span class="label bg-green"><i class="fa fa-th-list"></i>&nbsp;List</span>
                                    @elseif($item->type == 'poll')
                                        <span class="label  bg-yellow"><i class="fa fa-check-square-o"></i>&nbsp;Polls</span>
                                    @elseif($item->type == 'video')
                                        <span class="label  bg-red"><i class="fa fa-youtube-play"></i>&nbsp;Videos</span>
                                    @endif
                                </td>
                                <td>
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Actions <span class="fa fa-caret-down"></span> </button>
                                        <ul class="dropdown-menu pull-right">
                                            <li><a href="{{ action('Admin\PostsController@approvepost', $item->id) }}">Approve Post</a></li>
                                            <li class="divider"></li>
                                            <li><a target=_blank href="/edit/{{ $item->id }}">Edit Post</a></li>
                                            <li class="divider"></li>
                                            <li><a class="sendtrash" href="{{ action('Admin\PostsController@sendtrashpost', $item->id) }}">Send Trash</a></li>
                                            <li><a class="permanently" href="{{ action('Admin\PostsController@forcetrashpost', $item->id) }}">Delete permanently</a></li>
                                        </ul>

                                    </div>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div><!-- /.table-responsive -->
                    @else
                    Nothing to see here
                    @endif
            </div><!-- /.box-body -->

        </div>

        <!-- Custom tabs (Charts with tabs)-->
        <!-- solid sales graph -->
        <div class=" nav-tabs-custom box box-solid bg-green-gradient">
            <div class="box-header">
                <i class="fa fa-th"></i>
                <h3 class="box-title">Posts on last 30 days</h3>
                <div class="box-tools pull-right">
                    <ul class="nav nav-tabs pull-right" style="border:0">
                        <li class="active"><a href="#news-chart" style="color:#000;border-radius: 5px;" class="btn btn-box-tool box-line-get" data-type="news" data-toggle="tab">News</a></li>
                        <li><a href="#lists-chart" style="color:#000;border-radius: 5px;"  class="btn btn-box-tool box-line-get" data-type="lists" data-toggle="tab">Lists</a></li>
                        <li><a href="#polls-chart" style="color:#000;border-radius: 5px;"  class="btn btn-box-tool box-line-get" data-type="polls" data-toggle="tab">Polls</a></li>
                        <li><a href="#videos-chart" style="color:#000;border-radius: 5px;"  class="btn btn-box-tool box-line-get" data-type="videos" data-toggle="tab">Videos</a></li>
                    </ul>
                </div>
            </div>
            <div class="tab-content box-body border-radius-none" style="background-color: transparent">
                <!-- Morris chart - Sales -->
                <div class="chart tab-pane active" id="news-chart"  style="position: relative;height: 250px;"></div>

                <div class="overlay lineloader">
                    <i class="fa fa-refresh fa-spin" style="color:#fff"></i>
                </div>
            </div><!-- /.box-body -->
        </div><!-- /.box -->
<style>

    #sales-chart path{
        stroke: rgba(255, 255, 255, 0.4);
        stroke-width: 3px;
    }
</style>
        <div class="box box-info box-solid"  style="background: #00c0ef;">
            <div class="box-header">
                <i class="fa fa-th"></i>
                <h3 class="box-title">Last 30 Days Total Posts by Types</h3>
                <div class="box-tools pull-right">
                    <button class="btn btn-box-tool box-donut-get" data-widget="collapse"><i class="fa fa-plus"></i></button>
                    <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                </div>
            </div><!-- /.box-header -->
            <div class="box-body" style="background-color: transparent">
                <div class="chart tab-pane" id="sales-chart"  style="width: 100%;height: 300px;"></div>
            </div><!-- /.box-body -->

        </div>




        <!-- solid sales graph -->
        <div class="box box-solid bg-light-blue-gradient">
            <div class="box-header">
                <i class="fa fa-th"></i>
                <h3 class="box-title">User registers on last 30 days</h3>
                <div class="box-tools pull-right">
                    <button class="btn bg-light-blue btn-sm" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    <button class="btn bg-light-blue btn-sm" data-widget="remove"><i class="fa fa-times"></i></button>
                </div>
            </div>
            <div class="box-body border-radius-none">
                <div class="chart" id="user-chart" style="height: 250px;"></div>
            </div><!-- /.box-body -->

        </div><!-- /.box -->

    </section><!-- right col -->
</div><!-- /.row (main row) -->
<div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
                <span class="info-box-icon bg-aqua"><i class="fa fa-file-text"></i></span>
                <div class="info-box-content">
                    <span class="info-box-text">Number of News</span>
                    <span class="info-box-number">{{ $newscount }}</span>
                </div><!-- /.info-box-content -->
            </div><!-- /.info-box -->
        </div><!-- /.col -->
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
                <span class="info-box-icon bg-green"><i class="fa fa-th-list"></i></span>
                <div class="info-box-content">
                    <span class="info-box-text">Number of Lists</span>
                    <span class="info-box-number">{{ $listcount }}</span>
                </div><!-- /.info-box-content -->
            </div><!-- /.info-box -->
        </div><!-- /.col -->

        <!-- fix for small devices only -->
        <div class="clearfix visible-sm-block"></div>

        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
                <span class="info-box-icon bg-yellow"><i class="fa fa-check-square-o"></i></span>
                <div class="info-box-content">
                    <span class="info-box-text">Number of Polls</span>
                    <span class="info-box-number">{{ $pollcount }}</span>
                </div><!-- /.info-box-content -->
            </div><!-- /.info-box -->
        </div><!-- /.col -->
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
                <span class="info-box-icon bg-red"><i class="fa fa-youtube-play"></i></span>
                <div class="info-box-content">
                    <span class="info-box-text">Number of Videos</span>
                    <span class="info-box-number">{{ $videocount }}</span>
                </div><!-- /.info-box-content -->
            </div><!-- /.info-box -->
        </div><!-- /.col -->
    </div>
</section><!-- /.content -->
@endsection
@section('footer')
        <!-- Morris.js charts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
<script src="../adminlte/plugins/morris/morris.min.js"></script>

<!-- Bootstrap WYSIHTML5 -->
<script src="../adminlte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"></script>

<script src="./adminlte/dist/js/pages/dashboard.js"></script>
@endsection