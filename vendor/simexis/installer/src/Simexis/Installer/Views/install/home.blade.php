@extends('installer::layouts.master')

@section('container')
    <link rel="stylesheet" href="/assets/css/plugins.css">
    <div class="panel panel-success">
       <div class="panel-body">
            @if(null == Session::get('ok'))
               <h3 style="text-align: center;">Verify Buzzy Access </h3>
               <p style="text-align: center;">Please click "GET  Buzzy Code" button and add your purchase code and domain name and take the Buzzy access code</p>

               <div class="bs-component" style="text-align: center;padding:80px;">
                <a href="http://envato.akbilisim.com/auth/social/envato" class="btn btn-info  btn-lg popup-action">GET  Buzzy Code</a>
            </div>

            <hr>
            <div class="bs-component" style="text-align: center;padding:30px 80px;">
                <h3>Check Buzzy Access Code</h3>
                    <form method="post" action="{{ route('installer::checkedcode') }}">
                        <div class="row">
                            <div class="form-group col-md-12">

                                <div class="col-md-10">
                                    <input class="input-lg form-control" style="height: 46px;padding: 10px 16px; font-size: 18px; line-height: 1.3333333; border-radius: 6px;" placeholder="Enter your Buzzy Code here" name="code" type="text" >
                                </div>
                                    <div class="col-md-2">
                                    <button class="btn btn-success" type="submit">
                                        Check
                                    </button>


                                </div>
                            </div>
                        </div>
                        {!! csrf_field() !!}

                    </form>
            </div>
            @endif
            @if(null !== Session::get('ok'))
                <center>
            <a class="btn btn-success" href="{{ route('installer::permissions') }}">
                @lang('installer::installer.next')
            </a>
                </center>
            @endif
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="/assets/js/plugins.js"></script>
    @include('errors.swalerror')
    <script>
        $(".popup-action").on("click", function (e) {


            var href=$(this).attr('href');
            if(href > ''){
                var winWidth= 1000;
                var winHeight= 900;
                var winTop = (screen.height / 2) - (winHeight / 2);
                var winLeft = (screen.width / 2) - (winWidth / 2);
                window.open(href, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
                return false;

            }

            return false;
        });

    </script>
@stop
