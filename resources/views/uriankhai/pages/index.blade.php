@extends("main")
@section("content")

@include('._particles.headerbottom')

<div class="main-content--section pbottom--30">
    <div class="container">
        <div class="main--content">
            <div class="post--items post--items-1 pd--30-0">
                <div class="row gutter--15">
                    
                    @foreach($lastFeaturestop->slice(0,1) as $item)
                        
                        <div class="col-md-7">
                            <div class="post--item post--layout-1 featured-big post--title-larger">
                                <div class="post--img">
                                    <a href="{{ makeposturl($item) }}" class="thumb"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="{{ $item->title }}"></a> <a href="#" class="cat">Politics</a> <a href="#" class="icon"><i class="fa fa-flash"></i></a>
                                    <div class="post--map">
                                        <p class="btn-link"><i class="fa fa-map-o"></i>Location in Google Map</p>
                                        <div class="map--wrapper">
                                            <div data-map-latitude="23.790546" data-map-longitude="90.375583" data-map-zoom="6" data-map-marker="[[23.790546, 90.375583]]"></div>
                                        </div>
                                    </div>
                                    <div class="post--info">
                                        <ul class="nav meta">
                                            <li><a href="#">Norma R. Hogan</a></li>
                                            <li><a href="#">{{ $item->created_at->diffForHumans() }}</a></li>
                                        </ul>
                                        <div class="title">
                                            <h2 class="h4"><a href="{{ makeposturl($item) }}" class="btn-link">{{ $item->title }}</a></h2> </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    @endforeach
                    <div class="col-md-5">
                        <div class="row gutter--15">
                            
                            @foreach($lastFeaturestop->slice(1,2) as $item)
                                <div class="col-xs-6 col-xss-12">
                                    <div class="post--item post--layout-1 post--title-large">
                                        <div class="post--img">
                                            <a href="{{ makeposturl($item) }}" class="thumb"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt=""></a> <a href="#" class="cat">Travel</a> <a href="#" class="icon"><i class="fa fa-flash"></i></a>
                                            <div class="post--info">
                                                <ul class="nav meta">
                                                    <li><a href="#">Corey I. Dean</a></li>
                                                    <li>
                                                        <a href="#">{{ $item->created_at->diffForHumans() }}</a>
                                                    </li>
                                                </ul>
                                                <div class="title">
                                                    <h2 class="h4"><a href="{{ makeposturl($item) }}" class="btn-link">{{ $item->title }}</a></h2> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach

                            @foreach($lastFeaturestop->slice(2,1) as $item)
                                <div class="col-sm-12 hidden-sm hidden-xs">
                                    <div class="post--item post--layout-1 post--title-larger">
                                        <div class="post--img">
                                            <a href="{{ makeposturl($item) }}" class="thumb"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt=""></a> <a href="#" class="cat">Politics</a> <a href="#" class="icon"><i class="fa fa-fire"></i></a>
                                            <div class="post--info">
                                                <ul class="nav meta">
                                                    <li><a href="#">Balam</a></li>
                                                    <li><a href="#">{{ $item->created_at->diffForHumans() }}</a></li>
                                                </ul>
                                                <div class="title">
                                                    <h2 class="h4"><a href="{{ makeposturl($item) }}" class="btn-link">{{ $item->title }}</a></h2> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="main--content col-md-8 col-sm-7" data-sticky-content="true">
                <div class="sticky-content-inner">
                    <div class="row">
                        <div class="col-md-6 ptop--30 pbottom--30">
                            <div class="post--items-title" data-ajax="tab">
                                <h2 class="h4">СОЁЛ</h2>
                                <div class="nav">
                                    <a href="#" class="prev btn-link" data-ajax-action="load_prev_world_news_posts"> <i class="fa fa-long-arrow-left"></i> </a> <span class="divider">/</span>
                                    <a href="#" class="next btn-link" data-ajax-action="load_next_world_news_posts"> <i class="fa fa-long-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div class="post--items post--items-2" data-ajax-content="outer">
                                <ul class="nav row gutter--15" data-ajax-content="inner">
                                    
                                    @foreach($lastNews->slice(6, 1) as $item)
                                        <li class="col-xs-12">
                                            <div class="post--item post--layout-1">
                                                <div class="post--img">
                                                    <a href="{{ makeposturl($item) }}" class="thumb"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt=""></a> <a href="#" class="cat">War</a> <a href="#" class="icon"><i class="fa fa-flash"></i></a>
                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li><a href="#">{{ $item->created_at->diffForHumans() }}</a></li>
                                                        </ul>
                                                        <div class="title">
                                                            <h3 class="h4"><a href="{{ makeposturl($item) }}" class="btn-link">{{ $item->title }}</a></h3> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    @endforeach
                                
                                    <li class="col-xs-12">
                                        <hr class="divider"> </li>
                                     @foreach($lastNews->slice(1, 2) as $item)
                                        <li class="col-xs-6">
                                            <div class="post--item post--layout-2">
                                                <div class="post--img">
                                                    <a href="{{ makeposturl($item) }}" class="thumb"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt=""></a> 
                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li><a href="#">{{ $item->created_at->diffForHumans() }}</a></li>
                                                        </ul>
                                                        <div class="title">
                                                            <h3 class="h4"><a href="{{ makeposturl($item) }}" class="btn-link">{{ $item->title }}</a></h3> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    @endforeach
                                    
                                    <li class="col-xs-12">
                                        <hr class="divider"> </li>
                                     @foreach($lastNews->slice(2, 2) as $item)
                                        <li class="col-xs-6">
                                            <div class="post--item post--layout-2">
                                                <div class="post--img">
                                                    <a href="{{ makeposturl($item) }}" class="thumb"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt=""></a> 
                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li><a href="#">{{ $item->created_at->diffForHumans() }}</a></li>
                                                        </ul>
                                                        <div class="title">
                                                            <h3 class="h4"><a href="{{ makeposturl($item) }}" class="btn-link">{{ $item->title }}</a></h3> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    @endforeach
                                </ul>
                                <div class="preloader bg--color-0--b" data-preloader="1">
                                    <div class="preloader--inner"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 ptop--30 pbottom--30">
                            <div class="post--items-title" data-ajax="tab">
                                <h2 class="h4">СҮҮЛД НЭМЭГДСЭН</h2>
                                <div class="nav">
                                    <a href="#" class="prev btn-link" data-ajax-action="load_prev_technology_posts"> <i class="fa fa-long-arrow-left"></i> </a> <span class="divider">/</span>
                                    <a href="#" class="next btn-link" data-ajax-action="load_next_technology_posts"> <i class="fa fa-long-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div class="post--items post--items-3" data-ajax-content="outer">
                                <ul class="nav" data-ajax-content="inner">
                                    @foreach($lastNews->slice(0,1) as $item)
                                        <li>
                                            <div class="post--item post--layout-1">
                                                <div class="post--img">
                                                    <a href="{{ makeposturl($item) }}" class="thumb"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="{{ $item->title }}"></a> <a href="#" class="cat">Computer</a> <a href="#" class="icon"><i class="fa fa-heart-o"></i></a>
                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Bathin</a></li>
                                                            <li><a href="#">{{ $item->created_at->diffForHumans() }}</a></li>
                                                        </ul>
                                                        <div class="title">
                                                            <h3 class="h4"><a href="{{ makeposturl($item) }}" class="btn-link">{{ $item->title }}</a></h3> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    @endforeach
                                    
                                    @foreach($lastNews->slice(1,4) as $item)
                                        <li>
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="{{ makeposturl($item) }}" class="thumb"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="{{ $item->title }}"></a>
                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Bathin</a></li>
                                                            <li><a href="#">{{ $item->created_at->diffForHumans() }}</a></li>
                                                        </ul>
                                                        <div class="title">
                                                            <h3 class="h4"><a href="{{ makeposturl($item) }}" class="btn-link">{{ $item->title }}</a></h3> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    @endforeach
                                </ul>
                                <div class="preloader bg--color-0--b" data-preloader="1">
                                    <div class="preloader--inner"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 ptop--30 pbottom--30">
                            <div class="ad--space">
                                <a href="#"> <img src="uriankhai/img/ads-img/ad-728x90-01.jpg" alt="" class="center-block"> </a>
                            </div>
                        </div>
                        <div class="col-md-12 ptop--30 pbottom--30">
                            <div class="post--items-title" data-ajax="tab">
                                <h2 class="h4">ТҮҮХ</h2>
                                <div class="nav">
                                    <a href="#" class="prev btn-link" data-ajax-action="load_prev_finance_posts"> <i class="fa fa-long-arrow-left"></i> </a> <span class="divider">/</span>
                                    <a href="#" class="next btn-link" data-ajax-action="load_next_finance_posts"> <i class="fa fa-long-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div class="post--items post--items-2" data-ajax-content="outer">
                                <ul class="nav row" data-ajax-content="inner">
                                    <li class="col-md-6">
                                        <div class="post--item post--layout-2">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/finance-01.jpg" alt=""></a> <a href="#" class="cat">Business</a> <a href="#" class="icon"><i class="fa fa-star-o"></i></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Vassago</a></li>
                                                        <li><a href="#">Today 03:30 am</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-6">
                                        <ul class="nav row">
                                            <li class="col-xs-12 hidden-md hidden-lg">
                                                <hr class="divider"> </li>
                                            <li class="col-xs-6">
                                                <div class="post--item post--layout-2">
                                                    <div class="post--img">
                                                        <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/finance-02.jpg" alt=""></a>
                                                        <div class="post--info">
                                                            <ul class="nav meta">
                                                                <li><a href="#">Zepar</a></li>
                                                                <li><a href="#">Today 03:52 pm</a></li>
                                                            </ul>
                                                            <div class="title">
                                                                <h3 class="h4"><a href="news-single-v1.html" class="btn-link">It is a long established fact that a reader will be</a></h3> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="col-xs-6">
                                                <div class="post--item post--layout-2">
                                                    <div class="post--img">
                                                        <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/finance-03.jpg" alt=""></a>
                                                        <div class="post--info">
                                                            <ul class="nav meta">
                                                                <li><a href="#">Demiurge</a></li>
                                                                <li><a href="#">Today 03:02 pm</a></li>
                                                            </ul>
                                                            <div class="title">
                                                                <h3 class="h4"><a href="news-single-v1.html" class="btn-link">It is a long established fact that a reader will be</a></h3> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="col-xs-12">
                                                <hr class="divider"> </li>
                                            <li class="col-xs-6">
                                                <div class="post--item post--layout-2">
                                                    <div class="post--img">
                                                        <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/finance-04.jpg" alt=""></a>
                                                        <div class="post--info">
                                                            <ul class="nav meta">
                                                                <li><a href="#">Demiurge</a></li>
                                                                <li><a href="#">Today 02:05 am</a></li>
                                                            </ul>
                                                            <div class="title">
                                                                <h3 class="h4"><a href="news-single-v1.html" class="btn-link">It is a long established fact that a reader will be</a></h3> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="col-xs-6">
                                                <div class="post--item post--layout-2">
                                                    <div class="post--img">
                                                        <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/finance-05.jpg" alt=""></a>
                                                        <div class="post--info">
                                                            <ul class="nav meta">
                                                                <li><a href="#">Zepar</a></li>
                                                                <li><a href="#">Today 12:35 am</a></li>
                                                            </ul>
                                                            <div class="title">
                                                                <h3 class="h4"><a href="news-single-v1.html" class="btn-link">It is a long established fact that a reader will be</a></h3> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div class="preloader bg--color-0--b" data-preloader="1">
                                    <div class="preloader--inner"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 ptop--30 pbottom--30">
                            <div class="post--items-title" data-ajax="tab">
                                <h2 class="h4">УРЛАГ</h2>
                                <div class="nav">
                                    <a href="#" class="prev btn-link" data-ajax-action="load_prev_politics_posts"> <i class="fa fa-long-arrow-left"></i> </a> <span class="divider">/</span>
                                    <a href="#" class="next btn-link" data-ajax-action="load_next_politics_posts"> <i class="fa fa-long-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div class="post--items post--items-2" data-ajax-content="outer">
                                <ul class="nav row gutter--15" data-ajax-content="inner">
                                    <li class="col-xs-12">
                                        <div class="post--item post--layout-1">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/politics-01.jpg" alt=""></a> <a href="#" class="cat">Election</a> <a href="#" class="icon"><i class="fa fa-fire"></i></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Astaroth</a></li>
                                                        <li><a href="#">Yeasterday 03:52 pm</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">It is a long established fact that a reader will be distracted by</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-xs-12">
                                        <hr class="divider"> </li>
                                    <li class="col-xs-6">
                                        <div class="post--item post--layout-2">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/politics-02.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Hantu Raya</a></li>
                                                        <li><a href="#">17 April 2017</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">It is a long established fact that a reader will done</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-xs-6">
                                        <div class="post--item post--layout-2">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/politics-03.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Astaroth</a></li>
                                                        <li><a href="#">17 April 2017</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">It is a long established fact that a reader will done</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-xs-12">
                                        <hr class="divider"> </li>
                                    <li class="col-xs-6">
                                        <div class="post--item post--layout-2">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/politics-04.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Astaroth</a></li>
                                                        <li><a href="#">17 April 2017</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">It is a long established fact that a reader will done</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-xs-6">
                                        <div class="post--item post--layout-2">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/politics-05.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Hantu Raya</a></li>
                                                        <li><a href="#">17 April 2017</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">It is a long established fact that a reader will done</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="preloader bg--color-0--b" data-preloader="1">
                                    <div class="preloader--inner"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 ptop--30 pbottom--30">
                            <div class="post--items-title" data-ajax="tab">
                                <h2 class="h4">Sports</h2>
                                <div class="nav">
                                    <a href="#" class="prev btn-link" data-ajax-action="load_prev_sports_posts"> <i class="fa fa-long-arrow-left"></i> </a> <span class="divider">/</span>
                                    <a href="#" class="next btn-link" data-ajax-action="load_next_sports_posts"> <i class="fa fa-long-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div class="post--items post--items-3" data-ajax-content="outer">
                                <ul class="nav" data-ajax-content="inner">
                                    <li>
                                        <div class="post--item post--layout-1">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/sports-01.jpg" alt=""></a> <a href="#" class="cat">Basketball</a> <a href="#" class="icon"><i class="fa fa-eye"></i></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Bathin</a></li>
                                                        <li><a href="#">Yeasterday 03:52 pm</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">It is a long established fact that a reader will be distracted by</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="post--item post--layout-3">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/sports-02.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Bune</a></li>
                                                        <li><a href="#">16 April 2017</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">Long established fact that a reader will be distracted by the readable</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="post--item post--layout-3">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/sports-03.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Bune</a></li>
                                                        <li><a href="#">16 April 2017</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">Long established fact that a reader will be distracted by the readable</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="post--item post--layout-3">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/sports-04.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Bune</a></li>
                                                        <li><a href="#">16 April 2017</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">Long established fact that a reader will be distracted by the readable</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="post--item post--layout-3">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/sports-05.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Bune</a></li>
                                                        <li><a href="#">16 April 2017</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">Long established fact that a reader will be distracted by the readable</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="preloader bg--color-0--b" data-preloader="1">
                                    <div class="preloader--inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main--sidebar col-md-4 col-sm-5 ptop--30 pbottom--30" data-sticky-content="true">
                <div class="sticky-content-inner">
                    <div class="widget">
                        <div class="ad--widget">
                            <a href="#"> <img src="uriankhai/img/ads-img/ad-300x250-1.jpg" alt=""> </a>
                        </div>
                    </div>
                    <div class="widget">
                        <div class="widget--title">
                            <h2 class="h4">Stay Connected</h2> <i class="icon fa fa-share-alt"></i> </div>
                        <div class="social--widget style--1">
                            <ul class="nav">
                                <li class="facebook">
                                    <a href="#"> <span class="icon"><i class="fa fa-facebook-f"></i></span> <span class="count">521</span> <span class="title">Likes</span> </a>
                                </li>
                                <li class="twitter">
                                    <a href="#"> <span class="icon"><i class="fa fa-twitter"></i></span> <span class="count">3297</span> <span class="title">Followers</span> </a>
                                </li>
                                <li class="google-plus">
                                    <a href="#"> <span class="icon"><i class="fa fa-google-plus"></i></span> <span class="count">596282</span> <span class="title">Followers</span> </a>
                                </li>
                                <li class="rss">
                                    <a href="#"> <span class="icon"><i class="fa fa-rss"></i></span> <span class="count">521</span> <span class="title">Subscriber</span> </a>
                                </li>
                                <li class="vimeo">
                                    <a href="#"> <span class="icon"><i class="fa fa-vimeo"></i></span> <span class="count">3297</span> <span class="title">Followers</span> </a>
                                </li>
                                <li class="youtube">
                                    <a href="#"> <span class="icon"><i class="fa fa-youtube-square"></i></span> <span class="count">596282</span> <span class="title">Subscriber</span> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="widget">
                        <div class="widget--title">
                            <h2 class="h4">Get Newsletter</h2> <i class="icon fa fa-envelope-open-o"></i> </div>
                        <div class="subscribe--widget">
                            <div class="content">
                                <p>Subscribe to our newsletter to get latest news, popular news and exclusive updates.</p>
                            </div>
                            <form action="../../../../external.html?link=https://themelooks.us13.list-manage.com/subscribe/post?u=79f0b132ec25ee223bb41835f&amp;id=f4e0e93d1d" method="post" name="mc-embedded-subscribe-form" target="_blank" data-form="mailchimpAjax">
                                <div class="input-group">
                                    <input type="email" name="EMAIL" placeholder="E-mail address" class="form-control" autocomplete="off" required>
                                    <div class="input-group-btn">
                                        <button type="submit" class="btn btn-lg btn-default active"><i class="fa fa-paper-plane-o"></i></button>
                                    </div>
                                </div>
                                <div class="status"></div>
                            </form>
                        </div>
                    </div>
                    <div class="widget">
                        <div class="widget--title">
                            <h2 class="h4">TREND</h2> <i class="icon fa fa-newspaper-o"></i> </div>
                        <div class="list--widget list--widget-1">
                            <div class="post--items post--items-3" data-ajax-content="outer">
                                <ul class="nav" data-ajax-content="inner">
                                    @foreach($lastNews->slice(1, 4) as $item)
                                        <li class="col-xs-12">
                                            <div class="post--item post--layout-3">
                                                <div class="post--img">
                                                    <a href="{{ makeposturl($item) }}" class="thumb"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt=""></a>
                                                    <div class="post--info">
                                                        <ul class="nav meta">
                                                            <li><a href="#">Astaroth</a></li>
                                                            <li><a href="#">{{ $item->created_at->diffForHumans() }}</a></li>
                                                        </ul>
                                                        <div class="title">
                                                            <h3 class="h4"><a href="{{ makeposturl($item) }}" class="btn-link">{{ $item->title }}</a></h3> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    @endforeach
                                </ul>
                                <div class="preloader bg--color-0--b" data-preloader="1">
                                    <div class="preloader--inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="widget">
                        <div class="widget--title">
                            <h2 class="h4">Advertisement</h2> <i class="icon fa fa-bullhorn"></i> </div>
                        <div class="ad--widget">
                            <a href="#"> <img src="uriankhai/img/ads-img/ad-300x250-2.jpg" alt=""> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main--content pd--30-0">
            <div class="post--items-title" data-ajax="tab">
                <h2 class="h4">Audio &amp; Videos</h2>
                <div class="nav">
                    <a href="#" class="prev btn-link" data-ajax-action="load_prev_audio_video_posts"> <i class="fa fa-long-arrow-left"></i> </a> <span class="divider">/</span>
                    <a href="#" class="next btn-link" data-ajax-action="load_next_audio_video_posts"> <i class="fa fa-long-arrow-right"></i> </a>
                </div>
            </div>
            <div class="post--items post--items-4" data-ajax-content="outer">
                <ul class="nav row" data-ajax-content="inner">
                    <li class="col-md-8">
                        <div class="post--item post--layout-1 post--type-video post--title-large">
                            <div class="post--img">
                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/audio-video-01.jpg" alt=""></a> <a href="#" class="cat">Wave</a> <a href="#" class="icon"><i class="fa fa-eye"></i></a>
                                <div class="post--info">
                                    <ul class="nav meta">
                                        <li><a href="#">Succubus</a></li>
                                        <li><a href="#">Today 03:52 pm</a></li>
                                    </ul>
                                    <div class="title">
                                        <h2 class="h4"><a href="news-single-v1.html" class="btn-link">Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum</a></h2> </div>
                                </div>
                            </div>
                        </div>
                        <hr class="divider hidden-md hidden-lg"> </li>
                    <li class="col-md-4">
                        <ul class="nav">
                            <li>
                                <div class="post--item post--type-audio post--layout-3">
                                    <div class="post--img">
                                        <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/audio-video-02.jpg" alt=""></a>
                                        <div class="post--info">
                                            <ul class="nav meta">
                                                <li><a href="#">Maclaan John</a></li>
                                                <li><a href="#">16 April 2017</a></li>
                                            </ul>
                                            <div class="title">
                                                <h3 class="h4"><a href="news-single-v1.html" class="btn-link">Long established fact that a reader will be distracted by the readable</a></h3> </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="post--item post--type-video post--layout-3">
                                    <div class="post--img">
                                        <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/audio-video-03.jpg" alt=""></a>
                                        <div class="post--info">
                                            <ul class="nav meta">
                                                <li><a href="#">Maclaan John</a></li>
                                                <li><a href="#">16 April 2017</a></li>
                                            </ul>
                                            <div class="title">
                                                <h3 class="h4"><a href="news-single-v1.html" class="btn-link">Long established fact that a reader will be distracted by the readable</a></h3> </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="post--item post--type-video post--layout-3">
                                    <div class="post--img">
                                        <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/audio-video-04.jpg" alt=""></a>
                                        <div class="post--info">
                                            <ul class="nav meta">
                                                <li><a href="#">Maclaan John</a></li>
                                                <li><a href="#">16 April 2017</a></li>
                                            </ul>
                                            <div class="title">
                                                <h3 class="h4"><a href="news-single-v1.html" class="btn-link">Long established fact that a reader will be distracted by the readable</a></h3> </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="post--item post--type-audio post--layout-3">
                                    <div class="post--img">
                                        <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/audio-video-05.jpg" alt=""></a>
                                        <div class="post--info">
                                            <ul class="nav meta">
                                                <li><a href="#">Maclaan John</a></li>
                                                <li><a href="#">16 April 2017</a></li>
                                            </ul>
                                            <div class="title">
                                                <h3 class="h4"><a href="news-single-v1.html" class="btn-link">Long established fact that a reader will be distracted by the readable</a></h3> </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="preloader bg--color-0--b" data-preloader="1">
                    <div class="preloader--inner"></div>
                </div>
            </div>
        </div>
        <div class="ad--space pd--30-0">
            <a href="#"> <img src="uriankhai/img/ads-img/ad-970x90.jpg" alt="" class="center-block" style="height: 120px;"> </a>
        </div>
        <div class="row">
            <div class="main--content col-md-8 col-sm-7" data-sticky-content="true">
                <div class="sticky-content-inner">
                    <div class="row">
                        
                        <div class="col-md-12 ptop--30 pbottom--30">
                            <div class="post--items-title" data-ajax="tab">
                                <h2 class="h4">БАХАРХАЛ</h2>
                                <div class="nav">
                                    <a href="#" class="prev btn-link" data-ajax-action="load_prev_food_resturent_posts"> <i class="fa fa-long-arrow-left"></i> </a> <span class="divider">/</span>
                                    <a href="#" class="next btn-link" data-ajax-action="load_next_food_resturent_posts"> <i class="fa fa-long-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div class="post--items" data-ajax-content="outer">
                                <ul class="nav row gutter--15" data-ajax-content="inner">
                                    <li class="col-md-4 col-xs-6 col-xxs-12">
                                        <div class="post--item post--layout-1">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/food-and-resturent-01.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Astaroth</a></li>
                                                        <li><a href="#">Yeasterday 03:52 pm</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">It is a long established fact that a reader will be distracted by</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-xs-12 hidden shown-xxs">
                                        <hr class="divider"> </li>
                                    <li class="col-md-4 col-xs-6 col-xxs-12">
                                        <div class="post--item post--layout-1">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/food-and-resturent-02.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Astaroth</a></li>
                                                        <li><a href="#">Yeasterday 03:52 pm</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">It is a long established fact that a reader will be distracted by</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4 hidden-sm hidden-xs">
                                        <div class="post--item post--layout-1">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/food-and-resturent-03.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Astaroth</a></li>
                                                        <li><a href="#">Yeasterday 03:52 pm</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">It is a long established fact that a reader will be distracted by</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="preloader bg--color-0--b" data-preloader="1">
                                    <div class="preloader--inner"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 ptop--30 pbottom--30">
                            <div class="post--items-title" data-ajax="tab">
                                <h2 class="h4">ЗУРГИЙН ЦОМОГ</h2>
                                <div class="nav">
                                    <a href="#" class="prev btn-link" data-ajax-action="load_prev_photo_gallery_posts"> <i class="fa fa-long-arrow-left"></i> </a> <span class="divider">/</span>
                                    <a href="#" class="next btn-link" data-ajax-action="load_next_photo_gallery_posts"> <i class="fa fa-long-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div class="post--items post--items-1" data-ajax-content="outer">
                                <ul class="nav row gutter--15" data-ajax-content="inner">
                                    <li class="col-md-6 col-xs-6 col-xxs-12">
                                        <div class="post--item post--layout-1">
                                            <div class="post--img">
                                                 <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/photo-gallery-02.jpg" alt=""></a><a href="#" class="cat">Serfer</a> <a href="#" class="icon"><i class="fa fa-eye"></i></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Astaroth</a></li>
                                                        <li><a href="#">Today 05:52 pm</a></li>
                                                    </ul>
                                                    <div class="title text-xxs-ellipsis">
                                                        <h2 class="h4"><a href="news-single-v1.html" class="btn-link">Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum</a></h2> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-6 col-xs-6 col-xxs-12">
                                        <div class="post--item post--layout-1">
                                            <div class="post--img">
                                                 <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/photo-gallery-02.jpg" alt=""></a><a href="#" class="cat">Serfer</a> <a href="#" class="icon"><i class="fa fa-eye"></i></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Astaroth</a></li>
                                                        <li><a href="#">Today 05:52 pm</a></li>
                                                    </ul>
                                                    <div class="title text-xxs-ellipsis">
                                                        <h2 class="h4"><a href="news-single-v1.html" class="btn-link">Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum</a></h2> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4 col-xs-6 col-xxs-12">
                                        <div class="post--item post--layout-1">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/photo-gallery-02.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Astaroth</a></li>
                                                        <li><a href="#">Today 03:52 pm</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h2 class="h4"><a href="news-single-v1.html" class="btn-link">It is a long established fact that a reader will be distracted by</a></h2> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4 col-xs-6 col-xxs-12">
                                        <div class="post--item post--layout-1">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/photo-gallery-03.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Astaroth</a></li>
                                                        <li><a href="#">Today 03:52 pm</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h2 class="h4"><a href="news-single-v1.html" class="btn-link">It is a long established fact that a reader will be distracted by</a></h2> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4 hidden-sm hidden-xs">
                                        <div class="post--item post--layout-1">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/home-img/photo-gallery-04.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Astaroth</a></li>
                                                        <li><a href="#">Today 03:52 pm</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h2 class="h4"><a href="news-single-v1.html" class="btn-link">It is a long established fact that a reader will be distracted by</a></h2> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="preloader bg--color-0--b" data-preloader="1">
                                    <div class="preloader--inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main--sidebar col-md-4 col-sm-5 ptop--30 pbottom--30" data-sticky-content="true">
                <div class="sticky-content-inner">
                    <div class="widget">
                        <div class="widget--title" data-ajax="tab">
                            <h2 class="h4">Voting Poll (Checkbox)</h2>
                            <div class="nav">
                                <a href="#" class="prev btn-link" data-ajax-action="load_prev_poll_widget"> <i class="fa fa-long-arrow-left"></i> </a> <span class="divider">/</span>
                                <a href="#" class="next btn-link" data-ajax-action="load_next_poll_widget"> <i class="fa fa-long-arrow-right"></i> </a>
                            </div>
                        </div>
                        <div class="poll--widget" data-ajax-content="outer">
                            <ul class="nav" data-ajax-content="inner">
                                <li class="title">
                                    <h3 class="h4">Which was the best Football World Cup ever in your opinion?</h3> </li>
                                <li class="options">
                                    <form action="#">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" name="option-1"> <span>Brazil 2014</span> </label>
                                            <p>65%<span style="width: 65%;"></span></p>
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" name="option-2"> <span>South Africa 2010</span> </label>
                                            <p>28%<span style="width: 28%;"></span></p>
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" name="option-2"> <span>Germany 2006</span> </label>
                                            <p>07%<span style="width: 07%;"></span></p>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Vote Now</button>
                                    </form>
                                </li>
                            </ul>
                            <div class="preloader bg--color-0--b" data-preloader="1">
                                <div class="preloader--inner"></div>
                            </div>
                        </div>
                    </div>
                    <div class="widget">
                        <div class="widget--title" data-ajax="tab">
                            <h2 class="h4">Readers Opinion</h2>
                            <div class="nav">
                                <a href="#" class="prev btn-link" data-ajax-action="load_prev_readers_opinion_widget"> <i class="fa fa-long-arrow-left"></i> </a> <span class="divider">/</span>
                                <a href="#" class="next btn-link" data-ajax-action="load_next_readers_opinion_widget"> <i class="fa fa-long-arrow-right"></i> </a>
                            </div>
                        </div>
                        <div class="list--widget list--widget-2" data-ajax-content="outer">
                            <div class="post--items post--items-3">
                                <ul class="nav" data-ajax-content="inner">
                                    <li>
                                        <div class="post--item post--layout-3">
                                            <div class="post--img"> <span class="thumb"><img src="uriankhai/img/widgets-img/readers-opinion-01.png" alt=""></span>
                                                <div class="post--info">
                                                    <div class="title">
                                                        <h3 class="h4">Long established fact that a reader will be distracted</h3> </div>
                                                    <ul class="nav meta">
                                                        <li><span>by Ninurta</span></li>
                                                        <li><span>16 April 2017</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="post--item post--layout-3">
                                            <div class="post--img"> <span class="thumb"><img src="uriankhai/img/widgets-img/readers-opinion-02.png" alt=""></span>
                                                <div class="post--info">
                                                    <div class="title">
                                                        <h3 class="h4">Long established fact that a reader will be distracted</h3> </div>
                                                    <ul class="nav meta">
                                                        <li><span>by Ninurta</span></li>
                                                        <li><span>16 April 2017</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="post--item post--layout-3">
                                            <div class="post--img"> <span class="thumb"><img src="uriankhai/img/widgets-img/readers-opinion-03.png" alt=""></span>
                                                <div class="post--info">
                                                    <div class="title">
                                                        <h3 class="h4">Long established fact that a reader will be distracted</h3> </div>
                                                    <ul class="nav meta">
                                                        <li><span>by Ninurta</span></li>
                                                        <li><span>16 April 2017</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="preloader bg--color-0--b" data-preloader="1">
                                    <div class="preloader--inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="widget">
                        <div class="widget--title" data-ajax="tab">
                            <h2 class="h4">Editors Choice</h2>
                            <div class="nav">
                                <a href="#" class="prev btn-link" data-ajax-action="load_prev_editors_choice_widget"> <i class="fa fa-long-arrow-left"></i> </a> <span class="divider">/</span>
                                <a href="#" class="next btn-link" data-ajax-action="load_next_editors_choice_widget"> <i class="fa fa-long-arrow-right"></i> </a>
                            </div>
                        </div>
                        <div class="list--widget list--widget-1" data-ajax-content="outer">
                            <div class="post--items post--items-3">
                                <ul class="nav" data-ajax-content="inner">
                                    <li>
                                        <div class="post--item post--layout-3">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/widgets-img/editors-choice-01.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Ninurta</a></li>
                                                        <li><a href="#">16 April 2017</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">Long established fact that a reader will be distracted</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="post--item post--layout-3">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/widgets-img/editors-choice-02.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Orcus</a></li>
                                                        <li><a href="#">16 April 2017</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">Long established fact that a reader will be distracted</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="post--item post--layout-3">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/widgets-img/editors-choice-03.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Rahab</a></li>
                                                        <li><a href="#">16 April 2017</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">Long established fact that a reader will be distracted</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="post--item post--layout-3">
                                            <div class="post--img">
                                                <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/widgets-img/editors-choice-04.jpg" alt=""></a>
                                                <div class="post--info">
                                                    <ul class="nav meta">
                                                        <li><a href="#">Tannin</a></li>
                                                        <li><a href="#">16 April 2017</a></li>
                                                    </ul>
                                                    <div class="title">
                                                        <h3 class="h4"><a href="news-single-v1.html" class="btn-link">Long established fact that a reader will be distracted</a></h3> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="preloader bg--color-0--b" data-preloader="1">
                                    <div class="preloader--inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
