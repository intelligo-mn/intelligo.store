@extends("main")

@section("content")
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding-0">
                <div class="wrapper">
                <!-- News Slider -->
                    <div class="ticker marg-botm">
                        <div class="ticker-wrap">
                            <!-- News Slider Title -->
                            <div class="ticker-head up-case backg-colr col-md-2">Шуурхай<i class="fa fa-angle-double-right" aria-hidden="true"></i></div>
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
                        <li class="title-bg">Шинэ мэдээ</li>
                        <li class="active"><a data-toggle="tab" href="#tab1">Их уншсан</a></li>
                        <li><a data-toggle="tab" href="#tab2">Соёл</a></li>
                        <li><a data-toggle="tab" href="#tab3">Түүх</a></li>
                        <li><a data-toggle="tab" href="#tab4">Шинэ</a></li>
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
                                                <a href="{{ makeposturl($item) }}" class="read-more hvr-bounce-to-right">Дэлгэрэнгүй</a>
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
                                                <a href="{{ makeposturl($item) }}" class="read-more hvr-bounce-to-right">Дэлгэрэнгүй</a>
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
                                                <a href="{{ makeposturl($item) }}" class="read-more hvr-bounce-to-right">Дэлгэрэнгүй</a>
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
                                                <a href="{{ makeposturl($item) }}" class="read-more hvr-bounce-to-right">Дэлгэрэнгүй</a>
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
                                                <a href="{{ makeposturl($item) }}" class="read-more hvr-bounce-to-right">Дэлгэрэнгүй</a>
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
                    <div class="gallery" style="padding-top: 20px">
                        <div class="row">
                            <div class="view-area">
                                <div class="col-sm-12"> 
                                    <h3 class="title-bg">ЗУРГИЙН ЦОМОГ</h3>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="slider-right">
                                    <ul>
                                        @if(isset($lastFeaturestop))
                                            @foreach($lastFeaturestop->slice(0, 4) as $item)
                                                <li class="col-md-4 col-sm-4 col-sm-12" style="padding: 0 !important">
                                                    <div class="right-content">
                                                        <span class="category"><a href="category-politics.html">ЗУРГИЙН ЦОМОГ</a></span>
                                                        <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"> </i> {{ $item->created_at->diffForHumans() }}</span>
                                                        <!-- <h3><a href="{{ makeposturl($item) }}">{{ $item->title }}.</a></h3> -->
                                                    </div>
                                                    <div class="right-image"><a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="sidebar image"></a></div>
                                                </li>
                                            @endforeach
                                        @endif
                                      
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Start what’s hot now -->
                    <div class="hot-news" style="padding-top: 20px">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="view-area">
                                    <div class="row">
                                        <div class="col-sm-8"> 
                                            <h3 class="title-bg">EVENT</h3>
                                        </div>
                                        <div class="col-sm-4 text-right">
                                            <a href="#">Дэлгэрэнгүй <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="featured">
                                   
                                    @if(isset($lastTrending))
                                        
                                        
                                        @foreach($lastTrending->slice(0,1) as $item)
                                     
                                        <div class="blog-img">
                                            <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="{{ $item->title }}" title="{{ $item->title }}" /></a>
                                        </div>
                                        <div class="blog-content">
                                            <a href="{{ makeposturl($item) }}" class="cat-link">EVENT</a><span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{ $item->created_at->diffForHumans() }}
                                            </span>
                                            <h4><a href="#">{{ $item->title }}</a></h4>
                                        </div>
                                        @endforeach
                                    
                                    @endif
                                </div>
                                <!-- <ul class="news-post news-feature-mb">
                                    @if(isset($lastTrending))
                                        
                                        
                                        @foreach($lastTrending->slice(2,3) as $item)
                                        <li>
                                            <div class="row">
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-4">
                                                    <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 's', 'posts') }}" alt="{{ $item->title }}" /></a>
                                                </div>
                                                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-8 content">
                                                    <h4><a href="#">{{ $item->title }}</a></h4>
                                                    <span class="author"><a href=""><i class="fa fa-user-o" aria-hidden="true"></i> {{ $item->user->username }}</a></span> <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i>{{ $item->created_at->diffForHumans() }}</span>
                                                    <p>{{ str_limit($item->body, 150) }}</p>
                                                </div>
                                            </div>
                                        </li>
                                        @endforeach
                                    
                                    @endif
                                    
                                </ul> -->
                            </div>
                        </div>
                    </div>
                    <!-- End what’s hot now -->
                </div>

                <!--Sidebar Start Here -->
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-left-none sidebar-latest">
                    @if(isset($lastTrending))
                        @foreach($lastTrending->slice(0,1) as $item)

                        <div class="sidebar popular separator-large">
                            <h3 class="title-bg">ОНЦЛОХ БИЗНЕС</h3>
                            <ul>
                                <li>
                                    <a href="{{ makeposturl($item) }}" class="category-btn hvr-bounce-to-right">Business</a>
                                    <div class="post-image"><img src="{{ makepreview($item->thumb, 's', 'posts') }}" alt="{{ $item->title }}"></div>
                                    <div class="content">
                                        <h4>
                                            <a href="{{ makeposturl($item) }}">{{ $item->title }}</a>
                                        </h4>
                                        <span class="date"> 
                                            <i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{ $item->created_at->diffForHumans() }} 
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
                        @endforeach
                    @endif                  
                   
                     

                    <div class="hot-news popular-related">
                        <ul class="news-post">
                            @if(isset($lastTrending))
                                @foreach($lastTrending->slice(1, 5) as $item)

                                <li>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 content">
                                            <div class="item-post">
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-3 paddimg-right-none">
                                                        <img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="" title="News image">
                                                    </div>
                                                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-9">
                                                        <h4><a href="{{ makeposturl($item) }}"> {{ $item->title }}</a></h4>
                                                        <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i>{{ $item->created_at->diffForHumans() }}</span>                                                
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                @endforeach
                            @endif                  
                   
                
                        </ul>
                    </div> 
                    <div class="add-section add-section2" style="padding-top: 60px">
                        <img src="cooltheme/images/3.jpg" alt="add image">
                    </div>

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
                        <h3 class="title-bg">БИЧЛЭГ</h3>
                    </div>
                </div>
            </div>
            <div id="featured-videos-section" class="owl-carousel">
                @if(isset($lastNews))
                    @foreach($lastNews->slice(1, 3) as $item)
                       <div class="item">
                            <div class="single-videos">
                                <div class="images">
                                    <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt=""></a>
                                    <div class="overley">
                                        <div class="videos-icon">
                                            <a class="popup-videos" href="{{ makeposturl($item) }}"><img src="cooltheme/images/video-icon.png" alt=""></a>                           
                                        </div>
                                    </div>
                                </div>                            
                                <div class="videos-text">
                                    <h3><a href="#">{{ $item->title }}</a></h3>
                                    <span class="date"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{ $item->created_at->diffForHumans() }}</span>
                                    <span class="comment"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 50 </a></span>
                                </div>
                            </div>
                        </div>
                    @endforeach
                @endif
            </div>
        </div>    
    </div>

    <div class="hot-news">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div id="news-Carousel" class="carousel carousel-news slide" data-ride="carousel">
                                <!-- Wrapper for slides -->
                                <!-- Left and right controls -->
                                <div class="next-prev-top">
                                    <div class="row">
                                        <div class="col-sm-9 col-xs-9">
                                            <div class="view-area">
                                                <h3 class="title-bg">БАХАРХАЛ</h3>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 next-prev col-xs-3">
                                            <a class="left news-control" href="#news-Carousel" data-slide="prev">
                                                <span class="news-arrow-left"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
                                            </a>
                                            <a class="right news-control" href="#news-Carousel" data-slide="next">
                                                <span class="news-arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                                            </a>
                                        </div>
                                    </div>    
                                </div>
                                <div class="carousel-inner">
                                    @if(isset($lastNews))
                                        @foreach($lastNews->slice(0, 1) as $item)

                                        <div class="item active">
                                            <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="" title="#slider-direction-1" /></a>
                                            <div class="dsc">
                                                <span class="date">
                                                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                                                    {{ $item->created_at->diffForHumans() }}
                                                </span>
                                                <span class="comment">
                                                    <a href="{{ makeposturl($item) }}"> <i class="fa fa-comment-o" aria-hidden="true"></i> 50
                                                    </a>
                                                </span>
                                                <h4><a href="{{ makeposturl($item) }}">{{ str_limit($item->title, 30) }}.</a></h4>
                                                <p>{{ str_limit($item->title, 30) }}</p>
                                            </div>
                                        </div>
                                        @endforeach
                                    @endif
                                    @if(isset($lastNews))
                                        @foreach($lastNews->slice(1, 2) as $item)

                                        <div class="item">
                                            <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="" title="#slider-direction-1" /></a>
                                            <div class="dsc">
                                                <span class="date">
                                                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                                                   {{ $item->created_at->diffForHumans() }}
                                                </span>
                                                <span class="comment">
                                                    <a href="{{ makeposturl($item) }}"> <i class="fa fa-comment-o" aria-hidden="true"></i> 50
                                                    </a>
                                                </span>
                                                <h4><a href="{{ makeposturl($item) }}"> {{ str_limit($item->title, 30) }}.</a></h4>
                                                <p>{{ str_limit($item->title, 30) }}</p>
                                            </div>
                                        </div>
                                        @endforeach
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div id="news-Carousel2" class="carousel carousel-news slide" data-ride="carousel">
                                <!-- Wrapper for slides -->
                                <!-- Left and right controls -->
                                <div class="next-prev-top">
                                    <div class="row">
                                        <div class="col-sm-9 col-xs-9">
                                            <div class="view-area">
                                                <h3 class="title-bg">БРЭНД</h3>
                                            </div>
                                        </div>

                                        <div class="col-sm-3 col-xs-3 next-prev">
                                            <a class="left news-control" href="#news-Carousel2" data-slide="prev">
                                                <span class="news-arrow-left"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
                                            </a>
                                            <a class="right news-control" href="#news-Carousel2" data-slide="next">
                                                <span class="news-arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                                            </a>
                                        </div>
                                    </div>    
                                </div>
                                <div class="carousel-inner">
                                    @if(isset($lastNews))
                                        @foreach($lastNews->slice(1, 1) as $item)

                                        <div class="item active">
                                            <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="" title="#slider-direction-1" /></a>
                                            <div class="dsc">
                                                <span class="date">
                                                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                                                    {{ $item->created_at->diffForHumans() }}
                                                </span>
                                                <span class="comment">
                                                    <a href="{{ makeposturl($item) }}"> <i class="fa fa-comment-o" aria-hidden="true"></i> 50
                                                    </a>
                                                </span>
                                                <h4><a href="{{ makeposturl($item) }}"> {{ str_limit($item->title, 30) }}.</a></h4>
                                                <p>{{ str_limit($item->title, 30) }}</p>
                                            </div>
                                        </div>
                                        @endforeach
                                    @endif
                                    @if(isset($lastNews))
                                        @foreach($lastNews->slice(3, 5) as $item)

                                        <div class="item">
                                            <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="" title="#slider-direction-1" /></a>
                                            <div class="dsc">
                                                <span class="date">
                                                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                                                    {{ $item->created_at->diffForHumans() }}
                                                </span>
                                                <span class="comment">
                                                    <a href="{{ makeposturl($item) }}"> <i class="fa fa-comment-o" aria-hidden="true"></i> 50
                                                    </a>
                                                </span>
                                                <h4><a href="{{ makeposturl($item) }}"> {{ str_limit($item->title, 30) }}.</a></h4>
                                                <p>{{ str_limit($item->title, 30) }}</p>
                                            </div>
                                        </div>
                                        @endforeach
                                    @endif
                                </div>

                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div id="news-Carousel2" class="carousel carousel-news slide" data-ride="carousel">
                                
                                <div class="carousel-inner">
                                    @if(isset($lastNews))
                                        @foreach($lastNews->slice(3, 1) as $item)

                                        <div class="item active">
                                            <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="" title="#slider-direction-1" /></a>
                                            <div class="dsc">
                                                <span class="date">
                                                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                                                    {{ $item->created_at->diffForHumans() }}
                                                </span>
                                                <span class="comment">
                                                    <a href="{{ makeposturl($item) }}"> <i class="fa fa-comment-o" aria-hidden="true"></i> 50
                                                    </a>
                                                </span>
                                                <h4><a href="{{ makeposturl($item) }}"> {{ str_limit($item->title, 30) }}.</a></h4>
                                                <p>{{ str_limit($item->title, 30) }}</p>
                                            </div>
                                        </div>
                                        @endforeach
                                    @endif
                                    @if(isset($lastNews))
                                        @foreach($lastNews->slice(3, 5) as $item)

                                        <div class="item">
                                            <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="" title="#slider-direction-1" /></a>
                                            <div class="dsc">
                                                <span class="date">
                                                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                                                    {{ $item->created_at->diffForHumans() }}
                                                </span>
                                                <span class="comment">
                                                    <a href="{{ makeposturl($item) }}"> <i class="fa fa-comment-o" aria-hidden="true"></i> 50
                                                    </a>
                                                </span>
                                                <h4><a href="{{ makeposturl($item) }}"> {{ str_limit($item->title, 30) }}.</a></h4>
                                                <p>{{ str_limit($item->title, 30) }}</p>
                                            </div>
                                        </div>
                                        @endforeach
                                    @endif
                                </div>
                                
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div id="news-Carousel2" class="carousel carousel-news slide" data-ride="carousel">
                               
                                <div class="carousel-inner">
                                    @if(isset($lastNews))
                                        @foreach($lastNews->slice(2, 1) as $item)

                                        <div class="item active">
                                            <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="" title="#slider-direction-1" /></a>
                                            <div class="dsc">
                                                <span class="date">
                                                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                                                    {{ $item->created_at->diffForHumans() }}
                                                </span>
                                                <span class="comment">
                                                    <a href="{{ makeposturl($item) }}"> <i class="fa fa-comment-o" aria-hidden="true"></i> 50
                                                    </a>
                                                </span>
                                                <h4><a href="{{ makeposturl($item) }}"> {{ str_limit($item->title, 30) }}.</a></h4>
                                                <p>{{ str_limit($item->title, 30) }}</p>
                                            </div>
                                        </div>
                                        @endforeach
                                    @endif
                                    @if(isset($lastNews))
                                        @foreach($lastNews->slice(3, 5) as $item)

                                        <div class="item">
                                            <a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="" title="#slider-direction-1" /></a>
                                            <div class="dsc">
                                                <span class="date">
                                                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                                                    {{ $item->created_at->diffForHumans() }}
                                                </span>
                                                <span class="comment">
                                                    <a href="{{ makeposturl($item) }}"> <i class="fa fa-comment-o" aria-hidden="true"></i> 50
                                                    </a>
                                                </span>
                                                <h4><a href="{{ makeposturl($item) }}"> {{ str_limit($item->title, 30) }}.</a></h4>
                                                <p>{{ str_limit($item->title, 30) }}</p>
                                            </div>
                                        </div>
                                        @endforeach
                                    @endif
                                </div>
                                
                            </div>
                        </div>
                    </div>
                 
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-left-none">
                    <h3 class="title-bg featured-title">ТАНИН МЭДЭХҮЙ</h3>
                    <div class="sidebar">
                        <ul>
                            @foreach($lastFeaturestop->slice(0,3) as $item)
                            <li>
                                <a href="#" class="category-btn hvr-bounce-to-right">ТАНИН МЭДЭХҮЙ</a>
                                <div class="post-image"><a href="{{ makeposturl($item) }}"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="News image" /></a></div>
                                <div class="content">
                                    <h4><a href="{{ makeposturl($item) }}">{{ $item->title }}</a></h4>
                                    <span class="date"> 
                                        <i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{ $item->created_at->diffForHumans() }}
                                    </span> 
                                    <span class="comment">
                                        <a href="#">
                                            <i class="fa fa-comment-o" aria-hidden="true"></i> 50
                                        </a>
                                    </span>
                                   
                                </div>
                            </li>

                             @endforeach
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="add-section separator-large2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <img src="cooltheme/images/banner.png" alt="footer">
                </div>
            </div>
        </div>
    </div>

@endsection