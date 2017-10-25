@extends("app")

@section('head_title', trans('buzzycontact.contact').' | '.getcong('sitename') )

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

        <div class="container">
            <div class="mainside" style="min-height: 900px">
<br>
            <h1 style="margin-bottom:10px">{{ trans('buzzycontact.contact') }}</h1>

                {!!   Form::open(array('action' => 'ContactController@create', 'method' => 'POST','class' => 'form','name' => 'contactform', 'enctype' => 'multipart/form-data')) !!}

                    <div class="form-field string  inpt">
                        <label for="subject">{{ trans('buzzycontact.subject') }}</label>
                        {!! Form::text('subject', null, ['id' => 'subject']) !!}
                    </div>
                    <div class="form-field text  inpt">
                        <label for="description">{{ trans('buzzycontact.description') }}</label>
                        {!! Form::textarea('text', null, ['id' => 'text', 'style' => 'height:125px']) !!}
                        <p>{{ trans('buzzycontact.descriptioninfo') }}</p>
                    </div>
                    <div class="form-field string  inpt">
                        <label for="name">{{ trans('buzzycontact.name') }}</label>
                        {!! Form::text('name', isset(Auth::user()->username) ? Auth::user()->username : null, ['id' => 'name']) !!}
                        <p>{{ trans('buzzycontact.nameinfo') }}</p>
                    </div>
                    <div class="form-field inpt">
                        <label for="email">{{ trans('buzzycontact.email') }}</label>
                        {!! Form::text('email', isset(Auth::user()->email) ? Auth::user()->email : null, ['id' => 'email']) !!}
                    </div>

                    <div class="form-field string  inpt">
                        <label for="label">{{ trans('buzzycontact.label') }}</label>
                        {!! Form::select('label', $labels, ['id' => 'label']) !!}
                        <p>{{ trans('buzzycontact.labelinfo') }}</p>
                    </div>
                @if(getcong('BuzzyContactCaptcha')=="on")
                <div class="form-field inpt">
                    <label>{{ trans('buzzycontact.areyouhuman') }}</label>
                    <script src='https://www.google.com/recaptcha/api.js'></script>
                    <div class="g-recaptcha" data-sitekey="{{  getcong('reCaptchaKey') }}"></div>
                </div>
                @endif

                {!! Form::submit(isset($post->id) ? trans('addpost.savec') : trans('buzzycontact.send'), ['class' => 'button button-orange button-full submit-button']) !!}

                {!! Form::close() !!}
            </div>
            <div class="sidebar">

                @include("_widgets.facebooklike")

          </div>
    </div>
  </div>


@endsection