<footer>
   <div class="footer-top-area">
        <div class="container">
            <div class="row">
                <!-- Footer About Section Start Here -->
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="single-footer footer-one">
                        <h3>About</h3>
                        <div class="footer-logo"><img src="images/footer-logo.png" alt="footer-logo"></div>
                        <p>Your source for the lifestyle news. This demo is crafted specifically to exhibit the use of the theme as a lifestyle site. Visit our main page for more </p>
                        <p>We're social, connect with us:</p>
                        <div class="footer-social-media-area">
                            <nav>
                                <ul>
                                    <!-- Facebook Icon Here -->
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <!-- Google Icon Here -->
                                    <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                    <!-- Twitter Icon Here -->
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <!-- Vimeo Icon Here -->
                                    <li><a href="#"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
                                    <!-- Pinterest Icon Here -->
                                    <li><a href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <!-- Footer About Section End Here -->

                <!-- Footer Popular Post Section Start Here -->
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="single-footer footer-two">
                        <h3>Popular Posts</h3>
                        <nav>
                            <ul>
                                @foreach($lastFeaturestop->slice(0,3) as $item)
                                    <li>
                                        <div class="col-lg-5 col-md-5 col-sm-5 col-xs-4">
                                            <a href="blog-single.html"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="post photo"></a>
                                        </div>
                                        <div class="col-lg-7 col-md-7 col-sm-7 col-xs-8">
                                            <p><a href="blog-single.html">{{ str_limit($item->title, 30) }}</a></p>
                                            <span><i class="fa fa-calendar-check-o" aria-hidden="true"> </i> {{ $item->created_at->diffForHumans() }}</span>
                                        </div>
                                    </li>
                                @endforeach
                            </ul>
                        </nav>
                    </div>
                </div>
                <!-- Footer Popular Post Section End Here -->

                <!-- Footer From Flickr Section Start Here -->
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="single-footer footer-three">
                        <h3>From Flickr</h3>
                        <ul>
                            @foreach($lastNews->slice(0,12) as $item)
                                    
                                <li>
                                    <a href="#"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="flicker photo"></a>
                                </li>
                                
                            @endforeach
                        </ul>
                    </div>
                </div>
                <!-- Footer From Flickr Section End Here -->
            </div>
        </div>
    </div>
    <div class="footer-bottom-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <div class="footer-bottom">
                        <p> &copy; Copyrights 2017. All rights reserved.</p>
                    </div>
                </div>
                <div class="col-lg-6  col-md-6 col-sm-6 col-xs-6">
                   <strong class="copyright"><i style="color: white;" class="fa fa-code"></i>
                        <a style="color: white;" href="https://www.tsastsolution.com">ВЭБ БҮТЭЭСЭН ЦАСТ СОЛЮШН Утас: 88014334</a>
                    </strong>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer Copyright Area End Here -->
</footer>