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

            <h1 class="title">Сайн байна уу</h1>
            <div class="clear"></div>



            <div class="modeempty-header green">
                <div class="modeempty_text">

                    @if(Auth::check() && Auth::user()->usertype=='Admin')


                        <h4>Админ хэсэгт нэвтэрч үндсэн тохиргоонуудаа засна уу!</h4>

                        <a href="/admin/config"  style="margin-top:50px" class="button button-big button-orange">Админ хэсэг</a>

                    @else
                    <i class="fa fa-check green"></i>
                    <h4>Вэб хуудас амжилттай суусан</h4>

                    @endif


                </div>
            </div>
            <div class="clear"></div>
            <div class="copyright">


                <b><a href="#" target="_blank"></a></b> Хувилбар : {{ Config::get('installer.last_version') }}
            </div>
@endif


        </div>
    </div>
@endsection
