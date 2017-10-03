@extends("main")

@section('head_title', trans('contact.contact'))

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
    <section class="banner banner-inner parallax" data-stellar-background-ratio="0.5" id="banner-contact">
       <div class="banner-text">
          <div class="center-text">
             <div class="container">
                <h1>{{ trans('contact.contact') }}</h1>
                <strong class="subtitle">{{ trans('contact.contact') }}!</strong>
                <nav class="breadcrumbs">
                   <ul>
                      <li><a href="#">HOME</a></li>
                      <li><span>{{ trans('contact.contact') }}</span></li>
                   </ul>
                </nav>
             </div>
          </div>
       </div>
    </section>
    <main id="main">
      <div class="container">
         
         <div class="contact-info row">
            <div class="col-sm-4">
               <span class="tel has-border">
               <span class="icon-tel-big"></span>
               <a href="tel:02085775771">020 8577 5771</a>
               </span>
            </div>
            <div class="col-sm-4">
               <span class="tel has-border bg-blue">
               <span class="icon-fax-big"></span>
               <a href="tel:02085775771">info@triptomongolian.com</a>
               </span>
            </div>
            <div class="col-sm-4">
               <span class="tel has-border">
               <span class="icon-tel"></span>
               <a href="tel:02085775771">020 8577 5771</a>
               </span>
            </div>
         </div>
         <div class="row">
            <div class="col-md-6 wow fadeInLeft">
                {!!   Form::open(array('action' => 'ContactController@create', 'method' => 'POST','class' => 'form contact-form has-border','name' => 'contactform', 'enctype' => 'multipart/form-data')) !!}

                  <fieldset>
                    <div class="form-group">
                        <div class="col-sm-4">
                           <strong class="form-title"><label for="name">{{ trans('contact.name') }}</label></strong>
                        </div>
                        <div class="col-sm-8">
                           <div class="input-wrap">
                              {!! Form::text('name', isset(Auth::user()->username) ? Auth::user()->username : null, ['id' => 'name', 'class' => 'form-control']) !!}
                           </div>
                        </div>
                     </div>
                     <div class="form-group">
                        <div class="col-sm-4">
                           <strong class="form-title"><label for="email">{{ trans('contact.email') }}</label></strong>
                        </div>
                        <div class="col-sm-8">
                           <div class="input-wrap">
                              {!! Form::text('email', isset(Auth::user()->email) ? Auth::user()->email : null, ['id' => 'email', 'class' => 'form-control']) !!}
                           </div>
                        </div>
                     </div>
                     <div class="form-group">
                        <div class="col-sm-4">
                           <strong class="form-title"><label for="subject">{{ trans('contact.subject') }}</label></strong>
                        </div>
                        <div class="col-sm-8">
                           <div class="input-wrap">
                              {!! Form::text('subject', null, ['id' => 'subject', 'class' => 'form-control']) !!}
                           </div>
                        </div>
                     </div>
                     <div class="form-group">
                        <div class="col-sm-4">
                           <strong class="form-title"><label for="description">{{ trans('contact.description') }}</label></strong>
                        </div>
                        <div class="col-sm-8">
                           <div class="input-wrap">
                              {!! Form::textarea('text', null, ['id' => 'text', 'style' => 'height:125px', 'class' => 'form-control']) !!}
                           </div>
                        </div>
                     </div>
                     
                     <div class="form-group btn-holder">
                        <div class="col-sm-4">&nbsp;</div>
                        <div class="col-sm-8">
                           <div class="input-wrap">
                              {!! Form::submit(isset($post->id) ? trans('addpost.savec') : trans('contact.send'), ['class' => 'btn btn-white']) !!}
                           </div>
                        </div>
                     </div>
                  </fieldset>
              
                {!! Form::close() !!}
            </div>
            <div class="col-md-6 map-col-main wow fadeInRight">
               <div class="map-holder">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d10696.631340509159!2d106.9587067!3d47.9139834!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d47.9154215!2d106.95851359999999!4m0!5e0!3m2!1smn!2smn!4v1507048541684" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
               </div>
            </div>
         </div>
      </div>
       <article class="partner-block">
          <div class="container">
             <header class="content-heading">
                <h2 class="main-heading">Partner</h2>
                <span class="main-subtitle">People who always support and endorse our good work</span>
                <div class="seperator"></div>
             </header>
             <div class="partner-list" id="partner-slide">
                <div class="partner">
                   <a href="#">
                   <img width="141" src="travel/img/logos/logo-travelagancy.svg" alt="image description">
                   <img class="hover" width="141" src="travel/img/logos/logo-travelagancy-hover.svg" alt="image description">
                   </a>
                </div>
                <div class="partner">
                   <a href="#">
                   <img width="101" src="travel/img/logos/logo-around-world.svg" alt="image description">
                   <img class="hover" width="101" src="travel/img/logos/logo-around-world-hover.svg" alt="image description">
                   </a>
                </div>
                <div class="partner">
                   <a href="#">
                   <img width="152" src="travel/img/logos/logo-tourist.svg" alt="image description">
                   <img class="hover" width="152" src="travel/img/logos/logo-tourist-hover.svg" alt="image description">
                   </a>
                </div>
                <div class="partner">
                   <a href="#">
                   <img width="87" src="travel/img/logos/logo-adventure.svg" alt="image description">
                   <img class="hover" width="87" src="travel/img/logos/logo-adventure-hover.svg" alt="image description">
                   </a>
                </div>
                <div class="partner">
                   <a href="#">
                   <img width="101" src="travel/img/logos/logo-around-world.svg" alt="image description">
                   <img class="hover" width="101" src="travel/img/logos/logo-around-world-hover.svg" alt="image description">
                   </a>
                </div>
                <div class="partner">
                   <a href="#">
                   <img width="141" src="travel/img/logos/logo-travelagancy.svg" alt="image description">
                   <img class="hover" width="141" src="travel/img/logos/logo-travelagancy-hover.svg" alt="image description">
                   </a>
                </div>
                <div class="partner">
                   <a href="#">
                   <img width="87" src="travel/img/logos/logo-adventure.svg" alt="image description">
                   <img class="hover" width="87" src="travel/img/logos/logo-adventure-hover.svg" alt="image description">
                   </a>
                </div>
                <div class="partner">
                   <a href="#">
                   <img width="101" src="travel/img/logos/logo-around-world.svg" alt="image description">
                   <img class="hover" width="101" src="travel/img/logos/logo-around-world-hover.svg" alt="image description">
                   </a>
                </div>
                <div class="partner">
                   <a href="#">
                   <img width="141" src="travel/img/logos/logo-travelagancy.svg" alt="image description">
                   <img class="hover" width="141" src="travel/img/logos/logo-travelagancy-hover.svg" alt="image description">
                   </a>
                </div>
             </div>
          </div>
       </article>
    </main>
 
@endsection