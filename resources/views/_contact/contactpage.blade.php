@extends("app")

@section('head_title', Contact.' | '.getcong('sitename') )

@section("header")
    <style>
        .form {
            background: #f6f6f6;
            background: rgba(0, 0, 0, 0.02);
            border: 1px solid #ECECEC;
            border: 1px solid rgba(0, 0, 0, 0.07);
            border-radius: 3px;
            overflow: hidden;
            padding: 35px 35px;
        }

        .form-field{

            margin-bottom: 25px;
        }
       .form-field label{
           display: block;
           font-weight: 600;
           margin-bottom: 6px;
        }
       .form-field p{
              color: #4d4d4d;
              font-size: 11px;
        }

        .inpt input, .inpt textarea{

            background: #fff;
            border-radius: 5px;
            font-size: 20px;
            padding: 10px 15px;
            -webkit-appearance: none;
            display: block;
            width: 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -ms-box-sizing: border-box;
            -o-box-sizing: border-box;
            box-sizing: border-box;
            border: 1px solid #DDDDDD;
            border: 1px solid rgba(0, 0, 0, 0.13);
            box-shadow: inset 0 1px #E3E3E3;
            box-shadow: inset 0 1px rgba(0, 0, 0, 0.11);
        }

        #recaptcha_challenge_image, #recaptcha_image {
            width: 100%!important;
            height: auto!important;
            -webkit-border-radius: .5em;
            -moz-border-radius: .5em;
            border-radius: .5em;
            -moz-background-clip: padding;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
            margin-bottom: 5px;
        }
        #recaptcha_widget .options {
            margin-bottom: 10px;
            width: 100%;
            display: inline-block;
        }
        #recaptcha_widget .solution span {
            color: #999;
            display: inline-block;
            margin-bottom: 5px;
        }
        #recaptcha_widget .options a {
            display: block;
            float: left;
            margin-right: 10px;
            font-size: 11px;
            color: #999;
        }
    </style>
@endsection
@section("content")


        <div class="content">

    </div>
  </div>


@endsection