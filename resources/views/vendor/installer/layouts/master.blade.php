<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@lang('installer::installer.title')</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">

    <!-- Main Style -->
    <link href="{{ route('installer::assets.css') }}" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->


    <style>



        .title{
            padding:70px 0 0 0;
            text-align: center;
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
            text-align: center;
            font-size: 20px;
            line-height: 70px;
            font-weight:400;
            color:#ccc;
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
		<div class="login-body">
            <h1 class="title">modu <span>Initialization Wizard</span></h1>
            <h5 class="thanks">Thanks for Buying and Using modu Script.</h5>
            <div class="clear"></div>


            <article class="container-login center-block">
				<section>
					@yield('container')
				</section>
			</article>

            <div class="clear"></div>
            <div class="copyright">

                <strong>Copyright &copy; 2015 <a href="http://akbilisim.com" target="_blank"><b>akbilisim</b></a>.</strong> All rights reserved.

                &nbsp;&nbsp;&nbsp;

                <b><a href="http://modu.akbilisim.com" target="_blank">modu</a></b> Version : {{ Config::get('installer.last_version') }}
            </div>
		</div>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<script src="{{ route('installer::assets.js') }}"></script>

</body>
</html>