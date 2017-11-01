@extends("app")

@section('head_title', trans('contact.contact'))

@section("header")
    
@section("content")
   
    <div class="inner-page-header">
        <div class="banner">
            <img src="cooltheme/images/banner/1.jpg" alt="Banner">
        </div>
        <div class="banner-text">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        
                        <div class="header-page-title">
                            <h1>{{ trans('contact.contact') }}</h1>
                        </div>
                        <div class="header-page-subtitle">
                            <p>{{ trans('contact.contact') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Inner Page Header serction end here -->
 
   <!-- Contact Us Page Start Here -->
    <div class="single-blog-page-area contact-page-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9364273.363926433!2d-12.392661146939734!3d55.03971934808962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited+Kingdom!5e0!3m2!1sen!2sbd!4v1500619264549" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div> 
                                  
                    <div class="leave-comments-area">
                        <h3>Contact Us</h3>
                        <div id="form-messages"></div>
                        {!!   Form::open(array('action' => 'ContactController@create', 'method' => 'POST','id' => 'form contact-form has-border','name' => 'contactform', 'enctype' => 'multipart/form-data')) !!}
                            <fieldset>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                             {!! Form::text('name', isset(Auth::user()->username) ? Auth::user()->username : null, ['id' => 'fname', 'class' => 'form-control']) !!}
                                        </div>
                                    </div>                                    
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                             {!! Form::text('name', isset(Auth::user()->username) ? Auth::user()->username : null, ['id' => 'lname', 'class' => 'form-control']) !!}
                                        </div>
                                    </div>
                                </div> 
                                <div class="row">   
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                           {!! Form::text('email', isset(Auth::user()->email) ? Auth::user()->email : null, ['id' => 'email', 'class' => 'form-control']) !!}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">    
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                           {!! Form::textarea('text', null, ['id' => 'text', 'style' => 'height:125px', 'class' => 'form-control textarea']) !!}
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            {!! Form::submit(isset($post->id) ? trans('addpost.savec') : trans('contact.send'), ['class' => 'btn btn-send']) !!}
                                        </div>
                                    </div>
                                </div>    
                            </fieldset>
                        {!! Form::close() !!}
                    </div>                                 
                </div>         
            </div>
        </div>
    </div>
@endsection