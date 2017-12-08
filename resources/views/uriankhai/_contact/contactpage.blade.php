@extends("main")

@section('head_title', trans('contact.contact'))

@section("header")

@endsection
@section("content")
<div class="posts--filter-bar style--1 hidden-xs">
      <div class="container">
        <ul class="nav">
          <li>
            <a href="#"> <i class="fa fa-star-o"></i>  <span>Featured News</span> 
            </a>
          </li>
          <li>
            <a href="#"> <i class="fa fa-heart-o"></i>  <span>Most Popular</span> 
            </a>
          </li>
          <li>
            <a href="#"> <i class="fa fa-fire"></i>  <span>Hot News</span> 
            </a>
          </li>
          <li>
            <a href="#"> <i class="fa fa-flash"></i>  <span>Trending News</span> 
            </a>
          </li>
          <li>
            <a href="#"> <i class="fa fa-eye"></i>  <span>Most Watched</span> 
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="news--ticker">
      <div class="container">
        <div class="title">
          <h2>News Updates</h2>  <span>(Update 12 minutes ago)</span> 
        </div>
        <div class="news-updates--list" data-marquee="true">
          <ul class="nav">
            <li>
              <h3 class="h3"><a href="#">Contrary to popular belief Lorem Ipsum is not simply random text.</a></h3> 
            </li>
            <li>
              <h3 class="h3"><a href="#">Education to popular belief Lorem Ipsum is not simply</a></h3> 
            </li>
            <li>
              <h3 class="h3"><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h3> 
            </li>
            <li>
              <h3 class="h3"><a href="#">Corporis repellendus perspiciatis reprehenderit.</a></h3> 
            </li>
            <li>
              <h3 class="h3"><a href="#">Deleniti consequatur laudantium sit aspernatur?</a></h3> 
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main--breadcrumb">
      <div class="container">
        <ul class="breadcrumb">
          <li><a href="home-1.html" class="btn-link"><i class="fa fm fa-home"></i>Home</a>
          </li>
          <li class="active"><span>{{ trans('contact.contact') }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="map--fluid mtop--30">
      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d10696.631340509159!2d106.9587067!3d47.9139834!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d47.9154215!2d106.95851359999999!4m0!5e0!3m2!1smn!2smn!4v1507048541684" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    <div class="contact--section pd--30-0">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-4 ptop--30 pbottom--30">
            <div class="contact--info">
              <ul class="nav">
                <li>
                  <div class="title">
                    <h3 class="h5"><i class="fa fa-phone-square"></i>Telephone</h3> 
                  </div>
                  <div class="content">
                    <p><a href="tel:0055667788991122">0055667788991122</a>
                    </p>
                    <p><a href="tel:0055667788991122">0055667788991122</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="title">
                    <h3 class="h5"><i class="fa fa-envelope-open"></i>E-mail Address</h3> 
                  </div>
                  <div class="content">
                    <p><a href="../../../../external.html?link=http://themelooks.us/cdn-cgi/l/email-protection#6b0e130a061b070e2b0e130a061b070e45080406"><span class="__cf_email__" data-cfemail="a2c7dac3cfd2cec7e2c7dac3cfd2cec78cc1cdcf">[email&#160;protected]</span></a>
                    </p>
                    <p><a href="../../../../external.html?link=http://themelooks.us/cdn-cgi/l/email-protection#cfaab7aea2bfa3aa8faab7aea2bfa3aae1aca0a2"><span class="__cf_email__" data-cfemail="315449505c415d54715449505c415d541f525e5c">[email&#160;protected]</span></a>
                    </p>
                  </div>
                </li>
                <li>
                  <div class="title">
                    <h3 class="h5"><i class="fa fa-map-marker"></i>Address</h3> 
                  </div>
                  <div class="content">
                    <p>House - 896, East Shewrapara</p>
                    <p>Kafrul, Dhaka -1219, Bangladesh</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-9 col-sm-8 ptop--30 pbottom--30">
            <div class="comment--form">
              <div class="comment-respond">
                 {!!   Form::open(array('action' => 'ContactController@create', 'method' => 'POST','name' => 'contactform', 'enctype' => 'multipart/form-data')) !!}

                  <div class="status"></div>
                  <div class="row">
                    <div class="col-xs-6 col-xxs-12">
                      <label> <span>{{ trans('contact.name') }} *</span> 
                        {!! Form::text('name', isset(Auth::user()->username) ? Auth::user()->username : null, ['id' => 'name', 'class' => 'form-control']) !!}
                      </label>
                      <label> <span>{{ trans('contact.email') }} *</span> 
                        {!! Form::text('email', isset(Auth::user()->email) ? Auth::user()->email : null, ['id' => 'email', 'class' => 'form-control']) !!}
                      </label>
                      <label> <span>{{ trans('contact.subject') }}</span> 
                        {!! Form::text('subject', null, ['id' => 'subject', 'class' => 'form-control']) !!}
                      </label>
                    </div>
                    <div class="col-xs-6 col-xxs-12">
                      <label> <span>{{ trans('contact.description') }} *</span> 
                        
                        {!! Form::textarea('text', null, ['id' => 'text', 'style' => 'height:125px', 'class' => 'form-control']) !!}
                      </label>
                    </div>
                    <div class="col-md-12 text-right">
                       {!! Form::submit(isset($post->id) ? trans('addpost.savec') : trans('contact.send'), ['class' => 'btn btn-primary']) !!}
                    </div>
                  </div>
                {!! Form::close() !!}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
@endsection