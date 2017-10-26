@extends("app")
@section('head_title',  $post->title.' | '.getcong('sitename'))
@section('head_description', $post->body)
@section('head_image', asset('/upload/media/posts/'.$post->thumb.'-b.jpg'))
@section('head_url', Request::url())
@section('modedefault', 'mode-default')
@section("content")

@foreach($entrys as $key => $entry)

  <div class="inner-page-header">
        <div class="banner">
            <img src="images/banner/3.jpg" alt="Banner">
        </div>
        <div class="banner-text">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="header-page-locator">
                            <ul>
                                <li><a href="index.html">Home <i class="fa fa-compress" aria-hidden="true"></i> </a> Single Post</li>
                            </ul>
                        </div>
                        <div class="header-page-title">
                            <h1>Blog Single</h1>
                        </div>
                        <div class="header-page-subtitle">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                <br>alteration in some form, by injected humou</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Inner Page Header serction end here -->
 
   <!-- Blog Single Start Here -->
    <div class="single-blog-page-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div class="single-image">
                        <img src="images/single/1.jpg" alt="Blog single photo">
                    </div>
                    <h3><a href="#">Two Loser Idaho Pot Smugglers Freak Out, Call 911 on Themselves</a></h3>
                    <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is has been the try’s stasn ndard dummy text ever since the 1500s, when an unknown printer took a galley of it to make. Lorem Ipsum is the simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus try’s standard they dummy text ever since the 1500s, when an unknown printer took a galley of type and scram bled it to make a type specimen book.</p>
                    <blockquote>
                        <i class="fa fa-quote-right" aria-hidden="true"></i>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus try’s standard.</p>
                    </blockquote>
                    <h2>Lorem Ipsum Dolor</h2>
                    <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is has been the industry’s stasn ndard dummy text ever since the 1500s, when an unknown printer took a galley of it to make. Lorem Ipsum is the simply dummy text of the printing and typesetting industry. </p> 
                    <ul class="cercle">
                        <li><i class="fa fa-check-circle" aria-hidden="true"></i>  List one is awesome. Adding list item is very easily.</li>
                        <li><i class="fa fa-check-circle" aria-hidden="true"></i> List one is awesome. Adding list item is very easily.</li>
                        <li><i class="fa fa-check-circle" aria-hidden="true"></i> List one is awesome. Adding list item is very easily.</li>
                    </ul> 
                    <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is has been the industry’s stasn ndard dummy text ever since the 1500s, when an unknown printer took a galley of it to make. Lorem Ipsum is the simply dummy text of the printing and typesetting industry. </p>
                    <div class="share-section">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 life-style">
                                <span class="author"> 
                                    <a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> Admin </a>
                                </span> 
                                <span class="comment"> 
                                <a href="#"> 
                                    <i class="fa fa-comment-o" aria-hidden="true"></i> 12</a>
                                </span>
                                <span class="date">
                                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i> Sep 13, 2017 
                                </span>
                                <span class="cat">
                                    <a href="#"><i class="fa fa-folder-o" aria-hidden="true"></i> Life Style </a>
                                </span>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <ul class="share-link">
                                    <li class="hvr-bounce-to-right"><a href="#"> Tags:</a></li>
                                    <li class="hvr-bounce-to-right"><a href="#"> Food</a></li>
                                    <li class="hvr-bounce-to-right"><a href="#"> Fashion</a></li>
                                    <li class="hvr-bounce-to-right"><a href="#"> Travel</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="share-section share-section2">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <span> You Can Share It : </span>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <ul class="share-link">
                                    <li class="hvr-bounce-to-right"><a href="#"> <i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                                    <li class="hvr-bounce-to-right"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                                    <li class="hvr-bounce-to-right"><a href="#"><i class="fa fa-google" aria-hidden="true"></i> Google</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <ul class="next-pre-section">
                                <li class="left-arrow"><a href="#"><i class="fa fa-angle-left" aria-hidden="true"></i> Previous Post</a></li>
                                <li class="right-arrow"><a href="#">Next Post <i class="fa fa-angle-right" aria-hidden="true"></i> </a></li>
                            </ul>
                        </div>
                    </div>    
                    <div class="like-section">
                        <h3 class="title-bg">YOU MIGHT ALSO LIKE</h3>
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div class="popular-post-img">
                                    <a href="#"><img src="images/single/2.jpg" alt="Blog single photo"></a>                                   
                                </div>                                
                                <h3>
                                    <a href="#">Easy to Use Your Gallery</a>
                                </h3>
                                <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Sep 13, 2017</span>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div class="popular-post-img">
                                    <a href="#"><img src="images/single/4.jpg" alt="Blog single photo"></a>                                   
                                </div>                                
                                <h3>
                                    <a href="#">Easy to Use Your Gallery</a>
                                </h3>
                                <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Sep 13, 2017</span>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div class="popular-post-img">
                                    <a href="#"><img src="images/single/5.jpg" alt="Blog single photo"></a>                                  
                                </div>                                
                                <h3>
                                    <a href="#">Easy to Use Your Gallery</a>
                                </h3>
                                <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Sep 13, 2017</span>
                            </div>
                        </div>
                    </div>  
                    <div class="author-comment">
                        <h3 class="title-bg">Recent Comments</h3>
                        <ul>
                            <li>
                                <div class="row">
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                        <div class="image-comments"><img src="images/single/3.jpg" alt="Blog single photo"></div>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                                        <span class="reply"> <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Sep 13, 2017</span></span>
                                        <div class="dsc-comments">
                                            <h4>Thesera Minton</h4>                                            
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do they eiusmod tempor incidi dunt ut labore et dolore magna aliquat enim ad minim veniam ad minim veniam.</p>
                                            <a href="#"> Reply</a>
                                        </div>    
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="row">
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                        <div class="image-comments"><img src="images/single/3.jpg" alt="Blog single photo"></div>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                                        <span class="reply"> <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Sep 13, 2017</span></span>
                                        <div class="dsc-comments">
                                            <h4>Thesera Minton</h4>                                            
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do they eiusmod tempor.</p>
                                            <a href="#"> Reply</a>
                                        </div>    
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="row">
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                        <div class="image-comments"><img src="images/single/3.jpg" alt="Blog single photo"></div>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                                        <span class="reply"><span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Sep 13, 2017</span></span>
                                        <div class="dsc-comments">
                                            <h4>Thesera Minton</h4>                                            
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do they eiusmod tempor incidi dunt ut labore et dolore magna aliquat enim ad minim veniam ad minim veniam.</p>
                                            <a href="#"> Reply</a>
                                        </div>    
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                       <div class="leave-comments-area">
                            <h4 class="title-bg">Leave Comments</h4>
                            <form>
                                <fieldset>
                                    <div class="form-group">
                                        <label>Name*</label>
                                        <input type="text" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label>Email*</label>
                                        <input type="email" class="form-control">
                                    </div>

                                    <div class="form-group">
                                        <label>Website</label>
                                        <input type="website" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label>Your comment here...</label>
                                        <textarea cols="40" rows="10" class="textarea form-control"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <button class="btn-send" type="submit">Post Comment</button>
                                    </div>
                            </fieldset>
                        </form>
                    </div>                                 
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <!-- Blog Single Sidebar Start Here -->
                    <div class="sidebar-area">
                        <div class="like-box-area">
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> <span class="like-page">like our facebook page <br/>210,956 likes</span> <span class="like"><i class="fa fa-plus" aria-hidden="true"></i></span></a></li>
                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> <span class="like-page">Follow us on twitter<br/>2109 followers</span> <span class="like">
                                <i class="fa fa-plus" aria-hidden="true"></i></span></a></li>
                                <li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i> <span class="like-page">Subscribe to our rss <br/>210,956 likes</span> <span class="like"><i class="fa fa-plus" aria-hidden="true"></i></span></a></li>
                            </ul>
                        </div>
                        <div class="recent-post-area hot-news">
                            <h3 class="title-bg">Recent Post</h3>
                            <ul class="news-post">
                                <li>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 content">
                                            <div class="item-post">
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-right-none">
                                                        <a href="blog-single.html"><img src="images/popular/1.jpg" alt="" title="News image" /></a>
                                                    </div>
                                                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                        <h4><a href="blog-single.html"> US should prepare for<br/> Russian election</a></h4>
                                                        <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> June 28, 2017</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                  <li>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 content">
                                            <div class="item-post">
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-right-none">
                                                        <a href="blog-single.html"><img src="images/popular/2.jpg" alt="" title="News image" /></a>
                                                    </div>
                                                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                        <h4><a href="blog-single.html">Pellentesque Odio Nisi <br/>Euismod In Pharet</a></h4>
                                                        <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i>June 28, 2017</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                  <li>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 content">
                                            <div class="item-post">
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-right-none">
                                                        <a href="blog-single.html"><img src="images/popular/3.jpg" alt="" title="News image" /></a>
                                                    </div>
                                                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                        <h4><a href="blog-single.html"> Erant Aeque Neius No <br/>Numes Electram</a></h4>
                                                        <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> June 28, 2017</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                  <li>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 content">
                                            <div class="item-post">
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-right-none">
                                                        <a href="blog-single.html"><img src="images/popular/4.jpg" alt="" title="News image" /></a>
                                                    </div>
                                                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                        <h4><a href="blog-single.html">Erant Aeque Neius No <br/>Numes Electram</a></h4>
                                                        <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i>June 28, 2017</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="trending-post-area">
                            <h3 class="title-bg">Trending Post</h3>
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <ul>
                                        <li>
                                            <a href="category.html" class="hvr-bounce-to-right team-btn">The team</a><br/>
                                            <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> June 28, 2017</span>
                                            <h4><a href="category.html"> Jake Dribbler Announced The <br />Reting Next Month </a></h4>
                                            <p>Lorem ipsum dolor sit amet, consectet dipis cing elit. Vivamus tincidunt quam eget trisp  nunc sed mattis phasellus.</p>
                                        </li>
                                        <li>
                                            <a href="category.html" class="hvr-bounce-to-right team-btn">The team</a><br/>
                                            <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> June 28, 2017</span>
                                            <h4><a href="category.html"> Jake Dribbler Announced The <br />Reting Next Month </a></h4>
                                            <p>Lorem ipsum dolor sit amet, consectet dipis cing elit. Vivamus tincidunt quam eget trisp  nunc sed mattis phasellus.</p>
                                        </li>
                                        <li>
                                            <a href="category.html" class="hvr-bounce-to-right team-btn">The team</a><br/>
                                            <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> June 28, 2017</span>
                                            <h4><a href="category.html"> Jake Dribbler Announced The <br />Reting Next Month </a></h4>
                                            <p>Lorem ipsum dolor sit amet, consectet dipis cing elit. Vivamus tincidunt quam eget trisp  nunc sed mattis phasellus.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="add">
                            <img src="images/add/4.jpg" alt="Add">
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>

@endforeach

@endsection

@section('footer')
    <script async defer src="//platform.instagram.com/{{  getcong('sitelanguage') > "" ? getcong('sitelanguage') : 'en_US' }}/embeds.js"></script>
    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
    <style> .fb_dialog{z-index:999999999} </style>
    <div id="fb-root"></div>
    <script>(function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/{{  getcong('sitelanguage') > "" ? getcong('sitelanguage') : 'en_US' }}/sdk.js#xfbml=1{!! getcong('facebookapp') > "" ? '&appId='.getcong('facebookapp') : '' !!}&version=v2.4";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
    <script>
        $( document ).ready(function() {
            $('body').addClass('default-page js-ready');
        });
    </script>
@endsection