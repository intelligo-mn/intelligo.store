@extends("app")

@section("content")
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding-0">
                <div class="wrapper">
                <!-- News Slider -->
                    <div class="ticker marg-botm">
                        <div class="ticker-wrap">
                            <!-- News Slider Title -->
                            <div class="ticker-head up-case backg-colr col-md-2">Breaking News <i class="fa fa-angle-double-right" aria-hidden="true"></i></div>
                            <div class="tickers col-md-10">
                                <div id="top-news-slider" class="owl-carousel ">
                                    @foreach($lastNews as $item)
                                        <div class="item">
                                            <a href="{{ makeposturl($item) }}"> <img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="{{ $item->title }}"> <span>{{ $item->title }} </span></a>
                                        </div>
                                            
                                    @endforeach
                                                      
                               </div>
                           </div>
                        </div>
                    </div>  
                    <!-- End News Slider -->              
                </div>
            </div>            
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 padding-0">
                <div class="slider-area">
                    <div class="bend niceties preview-2">
                        <div id="ensign-nivoslider" class="slides">
                            
                            @foreach($lastFeaturestop->slice(0,1) as $item)
                            <img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="{{ $item->title }}" title="#slider-direction-1" />
                             @endforeach

                             @foreach($lastFeaturestop->slice(1,1) as $item)
                            <img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="{{ $item->title }}" title="#slider-direction-2" />
                             @endforeach
                        </div>
                        <!-- direction 2 -->

                        @foreach($lastFeaturestop->slice(0,1) as $item)
                        <div id="slider-direction-1" class="slider-direction">
                             <div class="slider-content t-cn s-tb slider-1">
                                <div class="title-container s-tb-c">
                                    <div class="slider-botton">
                                        <ul>
                                            <li>
                                                <a class="cat-link" href="category.html">Business</a> 
                                                <span class="date"> 
                                                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>{{ $item->created_at->diffForHumans() }}
                                                </span>
                                                <span class="comment">
                                                    <a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h1 class="title1"><a href="{{ makeposturl($item) }}">{{ $item->title }}</a></h1>
                                    <div class="title2">{{ str_limit($item->body, 100) }}.</div>
                                </div>
                            </div>
                        </div>
                        @endforeach
                        <!-- direction 2 -->
                         @foreach($lastFeaturestop->slice(1,1) as $item)
                        <div id="slider-direction-2" class="slider-direction">
                             <div class="slider-content t-cn s-tb slider-1">
                                <div class="title-container s-tb-c">
                                    <div class="slider-botton">
                                        <ul>
                                            <li>
                                                <a class="cat-link" href="category.html">Business</a> 
                                                <span class="date"> 
                                                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>{{ $item->created_at->diffForHumans() }}
                                                </span>
                                                <span class="comment">
                                                    <a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h1 class="title1"><a href="{{ makeposturl($item) }}">{{ $item->title }}</a></h1>
                                    <div class="title2">{{ str_limit($item->body, 100) }}.</div>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
            <!-- Slider Area End Here-->
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-left-none">
                <div class="slider-right">
                    <ul>
                        @foreach($lastFeaturestop->slice(1,2) as $item)
                                @include('._particles._lists.top_slider_list', ['metaon' => 'on'])

                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Slider Section end Here -->
    <!-- All News Section Start Here -->
    <div class="all-news-area">
        <div class="container">
            <!-- latest news Start Here -->
            <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 tab-home">
                    <ul class="nav nav-tabs">
                        <li class="title-bg">Latest News</li>
                        <li class="active"><a data-toggle="tab" href="#tab1">Highest Rated</a></li>
                        <li><a data-toggle="tab" href="#tab2">Week</a></li>
                        <li><a data-toggle="tab" href="#tab3">Hot Articals</a></li>
                        <li><a data-toggle="tab" href="#tab4">Previous</a></li>
                    </ul>
                    <div class="tab-content">
                        <div id="tab1" class="tab-pane fade in active">
                            @if($lastNews)
                                <div class="tab-top-content">
                                     @foreach($lastNews->slice(0, 1) as $item)
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 paddimg-right-none">
                                                 <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="sidebar image"></a>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 last-col">
                                                <span class="date"><a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> {{ $item->user->username }} </a></span> <span class="comment"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50</a></span>
                                                <h3><a href="{{ makeposturl($item) }}">{{ $item->title }}</a></h3>
                                                <p>{{ str_limit($item->body, 100) }}</p>
                                                <a href="{{ makeposturl($item) }}" class="read-more hvr-bounce-to-right">Read More</a>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                                <div class="tab-bottom-content">
                                    <div class="row">
                                         @foreach($lastNews->slice(1,4) as $item)
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 tab-area">
                                            <div class="col-sm-12 col-xs-3 img-tab">
                                                <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 's', 'posts') }}" alt="{{ $item->title }}"></a>
                                            </div>
                                            <div class="col-sm-12 col-xs-9 img-content">
                                                <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"> </i>{{ $item->created_at->diffForHumans() }}</span>
                                                <h4><a href="{{ makeposturl($item) }}">{{ str_limit($item->title, 40) }}</a></h4>
                                            </div>
                                        </div>
                                        @endforeach
                                    </div>
                                </div>
                            @endif
                        </div>
                        <div id="tab2" class="tab-pane fade">
                             @if($lastNews)
                                <div class="tab-top-content">
                                     @foreach($lastNews->slice(1, 1) as $item)
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 paddimg-right-none">
                                                 <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="sidebar image"></a>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 last-col">
                                                <span class="date"><a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> {{ $item->user->username }} </a></span> <span class="comment"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50</a></span>
                                                <h3><a href="{{ makeposturl($item) }}">{{ $item->title }}</a></h3>
                                                <p>{{ str_limit($item->body, 100) }}</p>
                                                <a href="{{ makeposturl($item) }}" class="read-more hvr-bounce-to-right">Read More</a>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                                <div class="tab-bottom-content">
                                    <div class="row">
                                         @foreach($lastNews->slice(4,7) as $item)
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 tab-area">
                                            <div class="col-sm-12 col-xs-3 img-tab">
                                                <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 's', 'posts') }}" alt="{{ $item->title }}"></a>
                                            </div>
                                            <div class="col-sm-12 col-xs-9 img-content">
                                                <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"> </i>{{ $item->created_at->diffForHumans() }}</span>
                                                <h4><a href="{{ makeposturl($item) }}">{{ str_limit($item->title, 40) }}</a></h4>
                                            </div>
                                        </div>
                                        @endforeach
                                    </div>
                                </div>
                            @endif
                        </div>
                        <div id="tab3" class="tab-pane fade">
                            @if($lastNews)
                                <div class="tab-top-content">
                                     @foreach($lastNews->slice(2, 1) as $item)
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 paddimg-right-none">
                                                 <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="sidebar image"></a>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 last-col">
                                                <span class="date"><a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> {{ $item->user->username }} </a></span> <span class="comment"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50</a></span>
                                                <h3><a href="{{ makeposturl($item) }}">{{ $item->title }}</a></h3>
                                                <p>{{ str_limit($item->body, 100) }}</p>
                                                <a href="{{ makeposturl($item) }}" class="read-more hvr-bounce-to-right">Read More</a>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                                <div class="tab-bottom-content">
                                    <div class="row">
                                         @foreach($lastNews->slice(5,7) as $item)
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 tab-area">
                                            <div class="col-sm-12 col-xs-3 img-tab">
                                                <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 's', 'posts') }}" alt="{{ $item->title }}"></a>
                                            </div>
                                            <div class="col-sm-12 col-xs-9 img-content">
                                                <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"> </i>{{ $item->created_at->diffForHumans() }}</span>
                                                <h4><a href="{{ makeposturl($item) }}">{{ str_limit($item->title, 40) }}</a></h4>
                                            </div>
                                        </div>
                                        @endforeach
                                    </div>
                                </div>
                            @endif
                        </div>
                        <div id="tab4" class="tab-pane fade">
                            @if($lastNews)
                                <div class="tab-top-content">
                                     @foreach($lastNews->slice(0, 1) as $item)
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 paddimg-right-none">
                                                 <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="sidebar image"></a>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 last-col">
                                                <span class="date"><a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> {{ $item->user->username }} </a></span> <span class="comment"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50</a></span>
                                                <h3><a href="{{ makeposturl($item) }}">{{ $item->title }}</a></h3>
                                                <p>{{ str_limit($item->body, 100) }}</p>
                                                <a href="{{ makeposturl($item) }}" class="read-more hvr-bounce-to-right">Read More</a>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                                <div class="tab-bottom-content">
                                    <div class="row">
                                         @foreach($lastNews->slice(1,4) as $item)
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 tab-area">
                                            <div class="col-sm-12 col-xs-3 img-tab">
                                                <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 's', 'posts') }}" alt="{{ $item->title }}"></a>
                                            </div>
                                            <div class="col-sm-12 col-xs-9 img-content">
                                                <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"> </i>{{ $item->created_at->diffForHumans() }}</span>
                                                <h4><a href="{{ makeposturl($item) }}">{{ str_limit($item->title, 40) }}</a></h4>
                                            </div>
                                        </div>
                                        @endforeach
                                    </div>
                                </div>
                            @endif
                        </div>
                        <div id="tab5" class="tab-pane fade">
                           @if($lastNews)
                                <div class="tab-top-content">
                                     @foreach($lastNews->slice(0, 1) as $item)
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 paddimg-right-none">
                                                 <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="sidebar image"></a>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 last-col">
                                                <span class="date"><a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> {{ $item->user->username }} </a></span> <span class="comment"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50</a></span>
                                                <h3><a href="{{ makeposturl($item) }}">{{ $item->title }}</a></h3>
                                                <p>{{ str_limit($item->body, 100) }}</p>
                                                <a href="{{ makeposturl($item) }}" class="read-more hvr-bounce-to-right">Read More</a>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                                <div class="tab-bottom-content">
                                    <div class="row">
                                         @foreach($lastNews->slice(1,4) as $item)
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 tab-area">
                                            <div class="col-sm-12 col-xs-3 img-tab">
                                                <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 's', 'posts') }}" alt="{{ $item->title }}"></a>
                                            </div>
                                            <div class="col-sm-12 col-xs-9 img-content">
                                                <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"> </i>{{ $item->created_at->diffForHumans() }}</span>
                                                <h4><a href="{{ makeposturl($item) }}">{{ str_limit($item->title, 40) }}</a></h4>
                                            </div>
                                        </div>
                                        @endforeach
                                    </div>
                                </div>
                            @endif
                        </div>
                    </div>
                    <!-- Trending news  here-->
           
                    <!--Start what’s hot now -->
                    <div class="hot-news separator-large">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="view-area">
                                    <div class="row">
                                        <div class="col-sm-8"> 
                                            <h3 class="title-bg">What’s hot now</h3>
                                        </div>
                                        <div class="col-sm-4 text-right">
                                            <a href="#">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="featured">
                                    <div class="blog-img">
                                        <a href="blog-single.html"><img src="cooltheme/images/hot-news/1.jpg" alt="" title="News image" /></a>
                                    </div>
                                    <div class="blog-content">
                                        <a href="category-sports.html" class="cat-link">Sports</a><span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> November 28, 2017</span>
                                        <h4><a href="#">Car racer gives herself a mid-Event haicut</a></h4>
                                    </div>
                                </div>
                                <ul class="news-post news-feature-mb">
                                    <li>
                                        <div class="row">
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-4">
                                                <a href="blog-single.html"><img src="cooltheme/images/hot-news/3.jpg" alt="News image" /></a>
                                            </div>
                                            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-8 content">
                                                <h4><a href="#">Clinton Campaign Jilted & Search Emails</a></h4>
                                                <span class="author"><a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> yeamin</a></span> <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> June 28, 2017</span>
                                                <span class="comment"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50</a></span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib vitae libero vel purus tincidunt aliquet at nec erat. Mauris the diam, ultrices quis leo sed lacinia egestas.The wise man there always holds in these matters.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-4">
                                                <a href="blog-single.html"><img src="cooltheme/images/hot-news/2.jpg" alt="News image" /></a>
                                            </div>
                                            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-8 content">
                                                <h4><a href="#">Aaron Rodgers Criticizes For</a></h4> <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> June 28, 2017</span>
                                                <span class="comment"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50</a></span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib vitae libero vel purus tincidunt aliquet at nec erat. Mauris the diam, ultrices quis leo sed lacinia egestas.The wise man there always holds in these matters.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-4">
                                                <a href="blog-single.html"><img src="cooltheme/images/hot-news/4.jpg" alt="News image" /></a>
                                            </div>
                                            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-8 content">
                                                <h4><a href="#">Detroit Natives Wary & Recovery Threatens</a></h4>
                                                <span class="author"><a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> yeamin</a></span> <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> June 28, 2017</span>
                                                <span class="comment"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50</a></span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib vitae libero vel purus tincidunt aliquet at nec erat. Mauris the diam, ultrices quis leo sed lacinia egestas.The wise man there always holds in these matters.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- End what’s hot now -->
                </div>
                <!--Sidebar Start Here -->
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-left-none sidebar-latest">
                  
                    <div class="like-box add-section">
                        <img src="cooltheme/images/add/2.jpg" alt="add image">
                    </div>

                    <div class="sidebar popular separator-large">
                        <h3 class="title-bg">Popular Now</h3>
                        <ul>
                            <li>
                                <a href="category.html" class="category-btn hvr-bounce-to-right">Business</a>
                                <div class="post-image"><img src="cooltheme/images/sidebar/1.jpg" alt="News image"></div>
                                <div class="content">
                                    <h4>
                                        <a href="#">The exhibition Bankasy doesn’t want you to see</a>
                                    </h4>
                                    <span class="date"> 
                                        <i class="fa fa-calendar-check-o" aria-hidden="true"></i> November 28, 2017 
                                    </span> 
                                    <span class="comment">
                                        <a href="#">
                                            <i class="fa fa-comment-o" aria-hidden="true"></i> 50
                                        </a>
                                    </span>
                                </div>
                            </li>
                        </ul> 
                    </div>
                     

                    <div class="hot-news popular-related">
                        <ul class="news-post">
                            <li>
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 content">
                                        <div class="item-post">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-3 paddimg-right-none">
                                                    <img src="cooltheme/images/popular/1.jpg" alt="" title="News image">
                                                </div>
                                                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-9">
                                                    <h4><a href="#"> US should prepare for <br /> Russian election</a></h4>
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
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-3 paddimg-right-none">
                                                    <img src="cooltheme/images/popular/2.jpg" alt="" title="News image">
                                                </div>
                                                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-9">
                                                    <h4><a href="blog-single.html"> Pellentesque Odio Nisi<br /> Euismod In Pharet</a></h4>
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
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-3 paddimg-right-none">
                                                    <img src="cooltheme/images/popular/3.jpg" alt="" title="News image">
                                                </div>
                                                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-9">
                                                    <h4><a href="blog-single.html"> Erant Aeque Neius No <br />Numes Electram</a></h4>
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
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-3 paddimg-right-none">
                                                    <img src="cooltheme/images/popular/4.jpg" alt="" title="News image">
                                                </div>
                                                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-9">
                                                    <h4><a href="blog-single.html"> Erant Aeque Neius No <br />Numes Electram</a></h4>
                                                    <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> June 28, 2017</span>                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div> 
                    <!--popular Post End Here --> 

                    <!--Recent comments Start Here -->
                        <div class="recent-comments separator-large">
                           
                        </div>  
                    <!--Recent comments Start Here -->
                     <!--Add Start Here -->
                    <div class="add-section add-section2">
                        <img src="cooltheme/images/add/3.jpg" alt="add image">
                    </div>
                    <!--Add Box End Here -->          
                </div>
            </div>
        </div>
    </div>
    <!-- Fetuered videos Start Here -->
            <div class="fetuered-videos">
                <div class="container">
                    <div class="row">
                        <div class="view-area">
                            <div class="col-sm-12"> 
                                <h3 class="title-bg">Fetuered Videos</h3>
                            </div>
                        </div>
                    </div>
                    <div id="featured-videos-section" class="owl-carousel">
                        <div class="item">
                            <div class="single-videos">
                                <div class="images">
                                    <a href="#"><img src="cooltheme/images/fetuered/1.jpg" alt=""></a>
                                    <div class="overley">
                                        <div class="videos-icon">
                                            <a class="popup-videos" href="http://www.youtube.com/watch?v=Cdajfy4voyY"><img src="cooltheme/images/fetuered/video-icon.png" alt=""></a>                           
                                        </div>
                                    </div>
                                </div>                            
                                <div class="videos-text">
                                    <h3><a href="#">Smart Packs Parking Sensor Tech</a></h3>
                                    <span class="date"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> November 28, 2017 </span>
                                    <span class="comment"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50 </a></span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="single-videos">
                                <div class="images">
                                    <a href="#"><img src="cooltheme/images/fetuered/2.jpg" alt=""></a>
                                    <div class="overley">
                                        <div class="videos-icon">
                                            <a class="popup-videos" href="http://www.youtube.com/watch?v=Cdajfy4voyY"><img src="cooltheme/images/fetuered/video-icon.png" alt=""></a>                      
                                        </div>
                                    </div>
                                </div>                            
                                <div class="videos-text">
                                    <h3><a href="#">Woman Endure Five Year Slvery</a></h3>
                                    <span class="date"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> November 28, 2017 </span><span class="comment"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50 </a></span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="single-videos">
                                <div class="images">
                                    <a href="#"><img src="cooltheme/images/fetuered/3.jpg" alt=""></a>
                                    <div class="overley">
                                        <div class="videos-icon">
                                            <a class="popup-videos" href="http://www.youtube.com/watch?v=Cdajfy4voyY"><img src="cooltheme/images/fetuered/video-icon.png" alt=""></a>                      
                                        </div>
                                    </div>
                                </div>                            
                                <div class="videos-text">
                                    <h3><a href="#">Health Benefits of Morning Running</a></h3>
                                    <span class="date"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> November 28, 2017 </span><span class="comment"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50 </a></span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="single-videos">
                                <div class="images">
                                    <a href="#"><img src="cooltheme/images/fetuered/4.jpg" alt=""></a>
                                    <div class="overley">
                                        <div class="videos-icon">
                                            <a class="popup-videos" href="http://www.youtube.com/watch?v=Cdajfy4voyY"><img src="cooltheme/images/fetuered/video-icon.png" alt=""></a>                  
                                        </div>
                                    </div>
                                </div>                            
                                <div class="videos-text">
                                    <h3><a href="#">Smart Packs Parking Sensor Tech</a></h3>
                                    <span class="date"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> November 28, 2017 </span><span class="comment"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50 </a></span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="single-videos">
                                <div class="images">
                                    <a href="#"><img src="cooltheme/images/fetuered/5.jpg" alt=""></a>
                                    <div class="overley">
                                        <div class="videos-icon">
                                            <a class="popup-videos" href="http://www.youtube.com/watch?v=Cdajfy4voyY"><img src="cooltheme/images/fetuered/video-icon.png" alt=""></a>                  
                                        </div>
                                    </div>
                                </div>                            
                                <div class="videos-text">
                                    <h3><a href="#">Smart Packs Parking Sensor Tech</a></h3>
                                    <span class="date"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> November 28, 2017 </span><span class="comment"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50 </a></span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="single-videos">
                                <div class="images">
                                    <a href="#"><img src="cooltheme/images/fetuered/2.jpg" alt=""></a>
                                    <div class="overley">
                                        <div class="videos-icon">
                                            <a class="popup-videos" href="http://www.youtube.com/watch?v=Cdajfy4voyY"><img src="cooltheme/images/fetuered/video-icon.png" alt=""></a>                  
                                        </div>
                                    </div>
                                </div>                            
                                <div class="videos-text">
                                    <h3><a href="#">Smart Packs Parking Sensor Tech</a></h3>
                                    <span class="date"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> November 28, 2017 </span><span class="comment"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50 </a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        
    <div class="add-section separator-large2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <img src="cooltheme/images/footer-top.png" alt="footer">
                </div>
            </div>
        </div>
    </div>

@endsection