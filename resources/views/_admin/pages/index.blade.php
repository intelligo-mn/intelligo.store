@extends("_admin.adminapp")
@section("content")
        <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        {{ trans('admin.dashboard') }}
        <small>{{ trans('admin.controlpanel') }}</small>
    </h1>
    <ol class="breadcrumb">
        <li class="active"><a href="#"><i class="fa fa-dashboard"></i> {{ trans('admin.dashboard') }}</a></li>
    </ol>
</section>

<!-- Main content -->
<section class="content">

@if($updateversion != Config::get('installer.last_version'))
    <div class="callout callout-warning lead">
        <h4>{{ trans('admin.newupdate') }}</h4>
        <p>New update is available. <a href="javascript:;" class="updatedownload" data-auto="on">Click here</a> and get automatically your modu latest version. Or <a href="javascript:;" class="updatedownload" data-auto="off">Click here</a> for download link.</p>
    </div>
@endif

<!-- Small boxes (Stat box) -->
<div class="row">
    <div class="col-lg-3 col-xs-6">
        <!-- small box -->
        <div class="small-box bg-green">
            <div class="inner">
                <h3>{{ $postunapprove }}</h3>
                <p>{{ trans('admin.waitingapprove') }}</p>
            </div>
            <div class="icon">
                <i class="fa fa-check-circle"></i>
            </div>
            <a href="/admin/unapprove?only=unapprove" class="small-box-footer">{{ trans('admin.moreinfo') }} <i class="fa fa-arrow-circle-right"></i></a>
        </div>
    </div><!-- ./col -->
    <div class="col-lg-3 col-xs-6">
        <!-- small box -->
        <div class="small-box bg-aqua">
            <div class="inner">
                <h3>{{ $todaypost }}</h3>
                <p>{{ trans('admin.todaysposts') }}</p>
            </div>
            <div class="icon">
                <i class="fa fa-file-text"></i>
            </div>
            <a href="/admin/all" class="small-box-footer">{{ trans('admin.moreinfo') }} <i class="fa fa-arrow-circle-right"></i></a>
        </div>
    </div><!-- ./col -->
    <div class="col-lg-3 col-xs-6">
        <!-- small box -->
        <div class="small-box bg-yellow">
            <div class="inner">
                <h3>{{ $todayusers }}</h3>
                <p>{{ trans('admin.todaysuserregistrations') }}</p>
            </div>
            <div class="icon">
                <i class="fa fa-user-plus"></i>
            </div>
            <a href="/admin/users" class="small-box-footer">{{ trans('admin.moreinfo') }} <i class="fa fa-arrow-circle-right"></i></a>
        </div>
    </div><!-- ./col -->
    <div class="col-lg-3 col-xs-6">
        <!-- small box -->
        <div class="small-box bg-red">
            <div class="inner">
                <h3>{{ $todaylogins }}</h3>
                <p>{{ trans('admin.todaysuserregistrations') }}</p>
            </div>
            <div class="icon">
                <i class="fa fa-eye"></i>
            </div>
            <a href="/admin/users" class="small-box-footer">{{ trans('admin.moreinfo') }} <i class="fa fa-arrow-circle-right"></i></a>
        </div>
    </div><!-- ./col -->
</div><!-- /.row -->
<!-- Main row -->
<div class="row">
    <!-- Left col -->
    <section class="col-lg-7 connectedSortable">

        <?php $okm = "" ?>
    <div class="row">
        @foreach(\App\Categories::where("main", '1')->where("disabled", '0')->orwhere("main", '2')->where("disabled", '0')->orderBy('order')->get() as $cat)
        <div class="col-md-6">
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title"><i class="fa fa-{{ $cat->icon }}"></i> {{ trans('admin.recentlyadded') }} <b>{{ $cat->name }}</b> </h3>
                    <div class="box-tools pull-right">
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                        <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                    </div>
                </div><!-- /.box-header -->
                <div class="box-body">

                    <ul class="products-list product-list-in-box">
                        @foreach(\App\Posts::approve('yes')->byType($cat->type)->latest("published_at")->take('5')->get() as $item)
                            @include('._admin._particles.items.item_lists')
                            <?php $okm = "true" ?>
                        @endforeach
                    </ul>
                    @if($okm!="true")
                        {{ trans('admin.nothingtoseehere') }}
                    @endif
                </div><!-- /.box-body -->
                <div class="box-footer text-center">
                    <a href="/admin/news" class="uppercase">{{ trans('admin.viewall') }}</a>
                </div><!-- /.box-footer -->
            </div>
        </div>
        @endforeach

    </div>       <!-- USERS LIST -->
            <div class="box box-default">
                <div class="box-header with-border">
                    <h3 class="box-title">{{ trans('admin.latestmembers') }}</h3>
                    <div class="box-tools pull-right">
                        <span class="label label-danger">{{ $todayusers }} {{ trans('admin.newmemberstoday') }}</span>
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                        <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                    </div>
                </div><!-- /.box-header -->
                <div class="box-body no-padding">

                    <ul class="users-list clearfix">
                        @foreach($lastusers as $user)
                            <li style=" width: 20%;">
                                <img src="{{ makepreview($user->icon, 'b', 'members/avatar') }}" width="110" height="110" style="max-height:110px;min-height:110px" alt="User Image">
                                <a class="users-list-name" target="_blank" href="/profile/{{ $user->username_slug }}">{{ $user->username }}</a>
                                <span class="users-list-date">{{ $user->created_at->diffForHumans() }}</span>
                            </li>
                        @endforeach
                    </ul><!-- /.users-list -->
                </div><!-- /.box-body -->
                <div class="box-footer text-center">
                    <a href="/admin/users" class="uppercase">{{ trans('admin.viewall') }}</a>
                </div><!-- /.box-footer -->
            </div><!--/.box -->
    </section><!-- /.Left col -->

    <!-- right col (We are only adding the ID to make the widgets sortable)-->
    <section class="col-lg-5 connectedSortable">

        <div class="box box-info" >
            <div class="box-header with-border">
                <h3 class="box-title">{{ trans('admin.latestunapprovedposts') }}</h3>
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
                            <th width="5%">{{ trans('admin.thumb') }}</th>
                            <th width="65%">{{ trans('admin.posts') }}</th>
                            <th width="15%">{{ trans('admin.type') }}</th>
                            <th width="15%">{{ trans('admin.actions') }}</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($lastunappruves as $item)
                            <tr>
                                <td>
                                    <div class="product-img">
                                        <img src="{{ makepreview($item->thumb, 's', 'posts') }}" width="50">
                                    </div>
                                </td>
                                <td><a target="_blank" href="{{ makeposturl($item) }}">{{ $item->title }}</a></td>
                                <td>
                                    @if($item->type == 'news')
                                        <span class="label  bg-aqua"><i class="fa fa-file-text"></i>&nbsp;{{ trans('admin.news') }}</span>
                                    @elseif($item->type == 'list')
                                        <span class="label bg-green"><i class="fa fa-th-list"></i>&nbsp;{{ trans('admin.lists') }}</span>
                                     @elseif($item->type == 'quiz')
                                        <span class="label bg-purple"><i class="fa fa-th-list"></i>&nbsp;{{ trans('admin.quizzes') }}</span>
                                    @elseif($item->type == 'poll')
                                        <span class="label  bg-yellow"><i class="fa fa-check-square-o"></i>&nbsp;{{ trans('admin.polls') }}</span>
                                    @elseif($item->type == 'video')
                                        <span class="label  bg-red"><i class="fa fa-youtube-play"></i>&nbsp;{{ trans('admin.videos') }}</span>
                                    @else
                                    @endif
                                </td>
                                <td>
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">{{ trans('admin.actions') }} <span class="fa fa-caret-down"></span> </button>
                                        <ul class="dropdown-menu pull-right">
                                            <li><a href="{{ action('Admin\PostsController@approvepost', $item->id) }}">{{ trans('admin.approvepost') }}</a></li>
                                            <li class="divider"></li>
                                            <li><a target=_blank href="/edit/{{ $item->id }}">{{ trans('admin.editpost') }}</a></li>
                                            <li class="divider"></li>
                                            <li><a class="sendtrash" href="{{ action('Admin\PostsController@sendtrashpost', $item->id) }}">{{ trans('admin.sendtrash') }}</a></li>
                                            <li><a class="permanently" href="{{ action('Admin\PostsController@forcetrashpost', $item->id) }}">{{ trans('admin.deletepermanently') }}</a></li>
                                        </ul>

                                    </div>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div><!-- /.table-responsive -->
                    @else
                    {{ trans('admin.nothingtoseehere') }}
                    @endif
            </div><!-- /.box-body -->

        </div>

        <!-- Custom tabs (Charts with tabs)-->
        <!-- solid sales graph -->
        <div class=" nav-tabs-custom box box-solid bg-green-gradient">
            <div class="box-header">
                <i class="fa fa-th"></i>
                <h3 class="box-title">{{ trans('admin.Postsonlast30days') }}</h3>
                <div class="box-tools pull-right">
                    <ul class="nav nav-tabs pull-right" style="border:0">
                        <li class="active"><a href="#news-chart" style="color:#000;border-radius: 5px;" class="btn btn-box-tool box-line-get" data-type="news" data-toggle="tab">{{ trans('admin.news') }}</a></li>
                        <li><a href="#lists-chart" style="color:#000;border-radius: 5px;"  class="btn btn-box-tool box-line-get" data-type="lists" data-toggle="tab">{{ trans('admin.lists') }}</a></li>
                        <li><a href="#quizzes-chart" style="color:#000;border-radius: 5px;"  class="btn btn-box-tool box-line-get" data-type="quizzes" data-toggle="tab">{{ trans('admin.quizzes') }}</a></li>
                        <li><a href="#polls-chart" style="color:#000;border-radius: 5px;"  class="btn btn-box-tool box-line-get" data-type="polls" data-toggle="tab">{{ trans('admin.polls') }}</a></li>
                        <li><a href="#videos-chart" style="color:#000;border-radius: 5px;"  class="btn btn-box-tool box-line-get" data-type="videos" data-toggle="tab">{{ trans('admin.videos') }}</a></li>
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
                <h3 class="box-title">{{ trans('admin.Last30DaysTotalPostsbyTypes') }}</h3>
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
                <h3 class="box-title">{{ trans('admin.Userregistersonlast30days') }}</h3>
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
                    <span class="info-box-text">{{ trans('admin.NumberofNews') }}</span>
                    <span class="info-box-number">{{ $newscount }}</span>
                </div><!-- /.info-box-content -->
            </div><!-- /.info-box -->
        </div><!-- /.col -->
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
                <span class="info-box-icon bg-green"><i class="fa fa-th-list"></i></span>
                <div class="info-box-content">
                    <span class="info-box-text">{{ trans('admin.NumberofLists') }}</span>
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
                    <span class="info-box-text">{{ trans('admin.NumberofPolls') }}</span>
                    <span class="info-box-number">{{ $pollcount }}</span>
                </div><!-- /.info-box-content -->
            </div><!-- /.info-box -->
        </div><!-- /.col -->
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
                <span class="info-box-icon bg-red"><i class="fa fa-youtube-play"></i></span>
                <div class="info-box-content">
                    <span class="info-box-text">{{ trans('admin.NumberofVideos') }}</span>
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