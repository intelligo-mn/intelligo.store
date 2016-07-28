<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ trans('messages.title') }}</title>

    <!-- Bootstrap -->
    <link href="http://bootswatch.com/flatly/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <style>
        @import url("http://fonts.googleapis.com/css?family=Open+Sans:300,400italic,700italic,400,300,700");

        body {
            font-family: Open Sans;
            font-size: 14px;
            line-height: 1.42857;
            background: #ECF0F1;
            height: 350px;
            padding: 0;
            margin: 0;
        }
        .container-login {
            min-height: 0;
            width: 480px;
            color: #333333;
            margin-top: 40px;
            padding: 0;
        }
        .center-block {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        .container-login > section {
            margin-left: 0;
            margin-right: 0;
            padding-bottom: 10px;
        }
        #top-bar {
            display: inherit;
        }
        .nav-tabs.nav-justified {
            border-bottom: 0 none;
            width: 100%;
        }
        .nav-tabs.nav-justified > li {
            display: table-cell;
            width: 1%;
            float: none;
        }
        .container-login .nav-tabs.nav-justified > li > a,
        .container-login .nav-tabs.nav-justified > li > a:hover,
        .container-login .nav-tabs.nav-justified > li > a:focus {
            background: #ea533f;
            border: medium none;
            color: #ffffff;
            margin-bottom: 0;
            margin-right: 0;
            border-radius: 0;
        }
        .container-login .nav-tabs.nav-justified > .active > a,
        .container-login .nav-tabs.nav-justified > .active > a:hover,
        .container-login .nav-tabs.nav-justified > .active > a:focus {
            background: #ffffff;
            color: #333333;
        }
        .container-login .nav-tabs.nav-justified > li > a:hover,
        .container-login .nav-tabs.nav-justified > li > a:focus {
            background: #de2f18;
        }
        .tabs-login {
            background: #ECF0F1;
            border: medium none;
            margin-top: -1px;
            padding: 10px 30px;
        }
        .container-login h2 {
            color: #ea533f;
        }
        .form-control {
            border: 1px solid #999999;
            border-radius: 0;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
            color: #333333;
            display: block;
            font-size: 14px;
            height: 34px;
            line-height: 1.42857;
            padding: 6px 12px;
            transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
            width: 100%;
        }
        .container-login .checkbox {
            margin-top: -15px;
        }
        .container-login button {
            background-color: #ea533f;
            border-color: #e73e28;
            color: #ffffff;
            border-radius: 0;
            font-size: 18px;
            line-height: 1.33;
            padding: 10px 16px;
            width: 100%;
        }
        .container-login button:hover,
        .container-login button:focus {
            background: #de2f18;
            border-color: #be2815;
        }

        .badge-success {
            background: #18bc9c;
        }

        .badge-danger {
            background: #e74c3c;
        }

        textarea {
            width: 100%;
        }

        .panel-title{
            text-align: left;
            font-weight: 700;
        }
       .list-group-item{
            text-align: left;
            font-weight: 400;
        }

        .starting{
            padding:70px 0 350px 0;
            text-align: center
        }

        .title{
            font-size: 50px;
            line-height:30px;
            font-weight:400
        }
        .title span{
            font-size: 50px;
            line-height:30px;
            font-weight:300
        }
        .thanks{
            font-size: 20px;
            line-height: 70px;
            font-weight:400;
            color:#ccc;
        }

        .modeempty-header{
            max-width:800px;
            margin:0 auto;

        }
        .modeempty-header.green{

            background-color: #dff0d8;

        }
        .modeempty-header i.gidt{
            font-size:80px!important;
            margin-bottom:20px;
        }
        .modeempty-header i.gidt.green{
            color: #7fbc7b!important;
        }
        .modeempty_text h4{
            margin-bottom:20px;
            font-size:26px;
        }
        .modeempty_text p{
            line-height: 20px!important;
        }
        .loginat{
            max-width:400px;
            margin:0 auto;
            padding:30px;
            text-align:left;
            background-color: #fff;
            border:1px solid #ccc;
            border-radius: 8px;
            color:#555;
            line-height:25px;
        }

        .loginat u{

            color:#222;

        }
        .loginat small{
            margin-top:10px;
            font-size:11px;
            color:#aaa;

        }
        .copyright{

            text-align: center;
            margin-top:10px;
            font-size:11px;
            color:#aaa;

        }
    </style>

</head>
<body>

<div class="container">
    <div class="content" >
        <div class="container starting">
            @if(isset($type))
                <div class="modeempty-header">
                    <div class="modeempty_text">
                        <i class="fa fa-info-circle "></i>
                        <h4> {{ $type }} Are Not Ready Yet!</h4>
                        <p>
                            <b>Must add 5 {{ $type }} at least!</b>
                        </p>
                    </div>
                </div>
            @else

                <h1 class="title">Buzzy <span>Initialization Wizard</span></h1>
                <h5 class="thanks">Thanks for Buying and Using Buzzy Script.</h5>
                <div class="clear"></div>

                <div class="modeempty-header green">
                    <div class="modeempty_text">

                        @yield('container')


                    </div>
                </div>
                <div class="clear"></div>
                <div class="copyright">

                    <strong>Copyright &copy; 2015 <a href="http://akbilisim.com" target="_blank"><b>akbilisim</b></a>.</strong> All rights reserved.

                    &nbsp;&nbsp;&nbsp;

                    <b><a href="http://buzzy.akbilisim.com" target="_blank">Buzzy</a></b> Version : {{ Config::get('installer.last_version') }}
                </div>
            @endif


        </div>
    </div>

</div>

</body>
</html>
