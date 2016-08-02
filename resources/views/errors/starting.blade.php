@extends("app")
@section('header')
<style>
    .starting{
        padding:70px 0 350px 0;
        text-align: center

    }
    .starting a{
      color:#0063dc;
    }
    .starting a:hover{
      color: #dc3144;
    }
    .title{
        font-size: 60px;
        line-height: 50px;
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
    .modeempty-header i{
        font-size:80px!important;
        margin-bottom:20px;
    }
    .modeempty-header i.green{
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
@endsection
@section('content')
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

            <h1 class="title">Welcome to Buzzy</h1>
            <h5 class="thanks">Thanks for Buying and Using Buzzy Script.</h5>
            <div class="clear"></div>



            <div class="modeempty-header green">
                <div class="modeempty_text">

                    @if(Auth::check() && Auth::user()->usertype=='Admin')
                        <h4>Your homepage is not ready yet!</h4>  <P> You must have at least 1 posts.</P>
                        <BR><BR>
                        <b style="margin-top:10px">Go to Admin Panel Settings and Configure the Site!</b>
                        <br>
                        <a href="/admin/config"  style="margin-top:10px" class="button button-big button-orange">Admin Panel Settings</a>

                    @else
                    <i class="fa fa-check green"></i>
                    <h4>Your Buzzy script successfully installed!</h4>

                    <p>
                        <b>Your homepage is not ready yet!</b><br>
                        Let's add some posts using great editor.
                        <br>
                        But before that you may want to check some configuration.
                        For this please connect to admin panel.

                        <div class="loginat">
                            <b>We create an admin account for you.</b>
                        <br>
                            Email: <u>admin@admin.com </u><br>
                            Password: <u>admin</u>
                        <br>
                        <small>You can find login form at top-right on this page or <a href="/login"  style="margin-top:50px" class="">Click to Login</a></small>

                        <div class="modeadmin_header" style="margin-top:20px">
                            <div class="modeadmin_text">
                                <h6>Warning: You must change admin password on user settings when you are login.</h6>
                            </div>
                        </div>

                        </div>

                    </p>
                    @endif


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
@endsection
