<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>{{ getcong('sitename') }} | Самбар</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.5 -->
    <link rel="stylesheet" href="/adminlte/bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="/adminlte/dist/css/AdminLTE.min.css">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="/adminlte/dist/css/skins/_all-skins.min.css">
    <!-- Morris chart -->
    <link rel="stylesheet" href="/adminlte/plugins/morris/morris.css">
    <!-- bootstrap wysihtml5 - text editor -->
    <link rel="stylesheet" href="/adminlte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css">
    <!-- sweetalert -->
    <link rel="stylesheet" href="/adminlte/plugins/sweetalert/sweetalert.css">
    @yield('header')

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">

    <header class="main-header">
        <!-- Logo -->
        <a href="/admin" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>{{ substr(getcong('sitename'),0,1) }}</b>С</span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>{{ getcong('sitename') }}</b>Самбар</span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top" role="navigation">

            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <div class="navbar-custom-menu">
                <!-- Sidebar toggle button-->

                <a href="{{ url('/') }}" target="_blank"  style="margin-top:10px;color:#fff!important;" class="btn btn-sm btn-success pull-left"><i class="fa fa-eye"></i>  View Site</a>
                <ul class="nav navbar-nav">

                    <li class="dropdown messages-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-bell"></i>
                            <span class="label label-success">{{ $toplamapprove }}</span>
                        </a>
                        <ul class="dropdown-menu">
                            <li class="header">{{ $toplamapprove }} зөвшөөрөл хүлээж байгаа</li>
                            <li>
                                <!-- inner menu: contains the actual data -->
                                <ul class="menu">
                                    @foreach($waitapprove as $qas)
                                    <li><!-- start message -->
                                        <a href="/{{$qas->type}}/{{$qas->slug }}/{{$qas->id }}" target="_blank">
                                            <div class="pull-left">
                                                <img src="{{ makepreview($qas->thumb, 's', 'posts') }}" class="img-circle" alt="User Image">
                                            </div>
                                            <h4>
                                                {{ $qas->title }}
                                            </h4>
                                            <p><i class="fa fa-clock-o"></i> {{ $qas->created_at->diffForHumans() }}</p>
                                        </a>
                                    </li><!-- end message -->
                                 @endforeach
                                </ul>
                            </li>
                            <li class="footer"><a href="/admin/unapprove?only=unapprove">Бүх зөвшөөрөлгүй мэдээг харна уу</a></li>
                        </ul>
                    </li>

                    <!-- User Account: style can be found in dropdown.less -->
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="{{ makepreview(Auth::user()->icon, 's', 'members/avatar') }}" class="user-image" alt="User Image">
                            <span class="hidden-xs">{{  Auth::user()->username }}</span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- User image -->
                            <li class="user-header">
                                <img src="{{ makepreview(Auth::user()->icon, 's', 'members/avatar') }}" class="img-circle" alt="User Image">
                                <p>
                                    {{  Auth::user()->username }} - Админ
                                    <small>Гишүүн болсон {{  Auth::user()->created_at }}</small>
                                </p>
                            </li>
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-left">
                                    <a href="/profile/{{  Auth::user()->username_slug }}" class="btn btn-default btn-flat">Хувийн мэдээлэл</a>
                                </div>
                                <div class="pull-right">
                                    <a href="/logout" class="btn btn-default btn-flat">Гарах</a>
                                </div>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        @include('_admin._particles.sidebar')
        <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        @include('errors.error')
        @yield("content")


    </div><!-- /.content-wrapper -->
    <footer class="main-footer">
        <div class="pull-right hidden-xs">
            <strong>Copyright &copy; 2015 <a href="http://toroo.info" target="_blank">ToRoo</a>.</strong> All rights reserved.
        </div>
        <b><a href="http://toroo.info" target="_blank">Систем</a></b> Хувилбар : {{ Config::get('installer.last_version') }}
    </footer>

</div><!-- ./wrapper -->

<!-- jQuery 2.1.4 -->
<script src="/adminlte/plugins/jQuery/jQuery-2.1.4.min.js"></script>
<!-- jQuery UI 1.11.4 -->
<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
    $.widget.bridge('uibutton', $.ui.button);
</script>
<!-- Bootstrap 3.3.5 -->
<script src="/adminlte/bootstrap/js/bootstrap.min.js"></script>
<!-- Slimscroll -->
<script src="/adminlte/plugins/slimScroll/jquery.slimscroll.min.js"></script>
<!-- sweetalert -->
<script src="/adminlte/plugins/sweetalert/sweetalert.min.js"></script>

<!-- AdminLTE App -->
<script src="/adminlte/dist/js/app.js"></script>


<script src="/adminlte/dist/js/buzzy.js"></script>
<script>
    $( document ).ready(function() {
        Buzzy.init();
    });
</script>
@yield('footer')



@include('.errors.swalerror')



</body>
</html>
