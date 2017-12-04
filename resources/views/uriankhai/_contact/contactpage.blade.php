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
    <div class="map--fluid mtop--30" data-trigger="map" data-map-latitude="23.790546" data-map-longitude="90.375583" data-map-zoom="16" data-map-marker="[[23.790546, 90.375583]]"></div>
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
                <form action="../../../../external.html?link=http://themelooks.us/demo/usnews/html/forms/contact-form.php" data-form="ajax">
                  <div class="status"></div>
                  <div class="row">
                    <div class="col-xs-6 col-xxs-12">
                      <label> <span>Name *</span> 
                        <input type="text" name="name" class="form-control" required>
                      </label>
                      <label> <span>Email Address *</span> 
                        <input type="email" name="email" class="form-control" required>
                      </label>
                      <label> <span>Website</span> 
                        <input type="text" name="website" class="form-control">
                      </label>
                    </div>
                    <div class="col-xs-6 col-xxs-12">
                      <label> <span>Comment *</span> 
                        <textarea name="message" class="form-control" required></textarea>
                      </label>
                    </div>
                    <div class="col-md-12 text-right">
                      <button type="submit" class="btn btn-primary">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
@endsection