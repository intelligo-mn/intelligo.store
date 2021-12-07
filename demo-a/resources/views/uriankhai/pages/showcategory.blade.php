@extends("main")

@section('head_title', $category->name .' | '.getcong('sitename') )
@section('head_description', $category->description )

@section("content")

@include('._particles.headerbottom')

<div class="main-content--section pbottom--30">
    <div class="container">
        @if(!empty($lastFeaturestop))

            <div class="main--content">
                <div class="post--items pd--30-0" data-ajax-content="outer">
                       
                    <ul class="nav row gutter--0" data-ajax-content="inner">
                        @foreach($lastFeaturestop->slice(0,3) as $item)
                            <li class="col-md-4 col-xs-6 col-xxs-12">
                                <div class="post--item post--layout-1">
                                    <div class="post--img">
                                        <a href="{{ makeposturl($item) }}" class="thumb"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="{{ $item->title }}" data-rjs="2"></a>
                                        <div class="post--info">
                                            <ul class="nav meta">
                                                <li><a href="#">{{ $item->user->username }}</a></li>
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
        @endif
        <div class="row" style="transform: none;">
    <div class="main--content col-md-8 col-sm-7" data-sticky-content="true" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">
        <div class="sticky-content-inner" style="padding-top: 0px; padding-bottom: 1px; position: static; transform: none;">
            <div class="post--items post--items-5 pd--30-0">
                <ul class="nav">
                    <li>
                        <div class="post--item post--title-larger">
                            <div class="row">
                                <div class="col-md-4 col-sm-12 col-xs-4 col-xxs-12">
                                    <div class="post--img">
                                        <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/blog-img/post-01.jpg" alt="" data-rjs="2"></a> <a href="#" class="cat">Kids</a> </div>
                                </div>
                                <div class="col-md-8 col-sm-12 col-xs-8 col-xxs-12">
                                    <div class="post--info">
                                        <ul class="nav meta">
                                            <li><a href="#">Bushyasta</a></li>
                                            <li><a href="#">16 April 2016</a></li>
                                        </ul>
                                        <div class="title">
                                            <h3 class="h4"><a href="news-single-v1.html" class="btn-link">Credibly pontificate highly efficient manufactured products and enabled data.</a></h3> </div>
                                    </div>
                                    <div class="post--content">
                                        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
                                    </div>
                                    <div class="post--action"> <a href="news-single-v1.html">Continue Reading...</a> </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="ad--space">
                <a href="#"> <img src="uriankhai/img/ads-img/ad-728x90-02.jpg" alt="" class="center-block" data-rjs="2"> </a>
            </div>
            <div class="post--items post--items-5 pd--30-0">
                <ul class="nav">
                    <li>
                        <div class="post--item post--title-larger">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="post--img">
                                        <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/blog-img/post-05.jpg" alt="" data-rjs="2"></a> <a href="#" class="cat">Old City</a> </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="post--info">
                                        <ul class="nav meta">
                                            <li><a href="#">Bune</a></li>
                                            <li><a href="#">16 April 2016</a></li>
                                        </ul>
                                        <div class="title">
                                            <h3 class="h4"><a href="news-single-v1.html" class="btn-link">Credibly pontificate highly efficient manufactured products and enabled data.</a></h3> </div>
                                    </div>
                                    <div class="post--content">
                                        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
                                    </div>
                                    <div class="post--action"> <a href="news-single-v1.html">Continue Reading...</a> </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="ad--space">
                <a href="#"> <img src="uriankhai/img/ads-img/ad-728x90-03.jpg" alt="" class="center-block" data-rjs="2"> </a>
            </div>
            <div class="post--items post--items-5 pd--30-0">
                <ul class="nav">
                    <li>
                        <div class="post--item post--title-larger">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="post--img">
                                        <a href="news-single-v1.html" class="thumb"><img src="uriankhai/img/blog-img/post-10.jpg" alt="" data-rjs="2"></a> <a href="#" class="cat">World News</a> </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="post--info">
                                        <ul class="nav meta">
                                            <li><a href="#">Onoskelis</a></li>
                                            <li><a href="#">22 May 2016</a></li>
                                        </ul>
                                        <div class="title">
                                            <h3 class="h4"><a href="news-single-v1.html" class="btn-link">What are they doing highly efficient manufactured products and enabled data.</a></h3> </div>
                                    </div>
                                    <div class="post--content">
                                        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
                                    </div>
                                    <div class="post--action"> <a href="news-single-v1.html">Continue Reading...</a> </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="pagination--wrapper clearfix bdtop--1 bd--color-2 ptop--60 pbottom--30">
                <p class="pagination-hint float--left">Page 02 of 03</p>
                <ul class="pagination float--right">
                    <li><a href="#"><i class="fa fa-long-arrow-left"></i></a></li>
                    <li><a href="#">01</a></li>
                    <li class="active"><span>02</span></li>
                    <li><a href="#">03</a></li>
                    <li> <i class="fa fa-angle-double-right"></i> <i class="fa fa-angle-double-right"></i> <i class="fa fa-angle-double-right"></i> </li>
                    <li><a href="#">20</a></li>
                    <li><a href="#"><i class="fa fa-long-arrow-right"></i></a></li>
                </ul>
            </div>
            <div class="resize-sensor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden;">
                <div class="resize-sensor-expand" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                    <div style="position: absolute; left: 0px; top: 0px; transition: 0s; width: 790px; height: 2867px;"></div>
                </div>
                <div class="resize-sensor-shrink" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                    <div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="main--sidebar col-md-4 col-sm-5 ptop--30 pbottom--30" data-sticky-content="true" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">
        <div class="sticky-content-inner" style="padding-top: 0px; padding-bottom: 1px; position: static; transform: none;">
            
            <div class="widget">
                <div class="widget--title">
                    <h2 class="h4">Featured News</h2> <i class="icon fa fa-newspaper-o"></i> </div>
                <div class="list--widget list--widget-1">
                    
                    <div class="post--items post--items-3" data-ajax-content="outer">
                        <ul class="nav" data-ajax-content="inner">
                            <li>
                                <div class="post--item post--layout-3">
                                    <div class="post--img">
                                        <a href="#" class="thumb"><img src="uriankhai/img/widgets-img/news-widget-01.jpg" alt="" data-rjs="2"></a>
                                        <div class="post--info">
                                            <ul class="nav meta">
                                                <li><a href="#">Ninurta</a></li>
                                                <li><a href="#">16 April 2017</a></li>
                                            </ul>
                                            <div class="title">
                                                <h3 class="h4"><a href="#" class="btn-link">Long established fact that a reader will be distracted</a></h3> </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="post--item post--layout-3">
                                    <div class="post--img">
                                        <a href="#" class="thumb"><img src="uriankhai/img/widgets-img/news-widget-02.jpg" alt="" data-rjs="2"></a>
                                        <div class="post--info">
                                            <ul class="nav meta">
                                                <li><a href="#">Orcus</a></li>
                                                <li><a href="#">16 April 2017</a></li>
                                            </ul>
                                            <div class="title">
                                                <h3 class="h4"><a href="#" class="btn-link">Long established fact that a reader will be distracted</a></h3> </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="post--item post--layout-3">
                                    <div class="post--img">
                                        <a href="#" class="thumb"><img src="uriankhai/img/widgets-img/news-widget-03.jpg" alt="" data-rjs="2"></a>
                                        <div class="post--info">
                                            <ul class="nav meta">
                                                <li><a href="#">Rahab</a></li>
                                                <li><a href="#">16 April 2017</a></li>
                                            </ul>
                                            <div class="title">
                                                <h3 class="h4"><a href="#" class="btn-link">Long established fact that a reader will be distracted</a></h3> </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="post--item post--layout-3">
                                    <div class="post--img">
                                        <a href="#" class="thumb"><img src="uriankhai/img/widgets-img/news-widget-04.jpg" alt="" data-rjs="2"></a>
                                        <div class="post--info">
                                            <ul class="nav meta">
                                                <li><a href="#">Tannin</a></li>
                                                <li><a href="#">16 April 2017</a></li>
                                            </ul>
                                            <div class="title">
                                                <h3 class="h4"><a href="#" class="btn-link">Long established fact that a reader will be distracted</a></h3> </div>
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
                <div class="widget--title">
                    <h2 class="h4">Advertisement</h2> <i class="icon fa fa-bullhorn"></i> </div>
                <div class="ad--widget">
                    <a href="#"> <img src="uriankhai/img/ads-img/ad-300x250-2.jpg" alt="" data-rjs="2"> </a>
                </div>
            </div>
            <div class="resize-sensor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden;">
                <div class="resize-sensor-expand" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                    <div style="position: absolute; left: 0px; top: 0px; transition: 0s; width: 400px; height: 3554px;"></div>
                </div>
                <div class="resize-sensor-shrink" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                    <div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"></div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
</div>

@endsection