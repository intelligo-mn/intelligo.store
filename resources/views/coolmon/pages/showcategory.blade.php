@extends("main")
@section('head_title', $category->name .' | '.getcong('sitename') )
@section('head_description', $category->description )
@section("content")
  <div class="inner-page-header">
        <div class="banner">
            <img src="cooltheme/images/banner/3.jpg" alt="Banner">
        </div>
        <div class="banner-text">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="header-page-locator">
                            <ul>
                                <li><a href="index.html">Home <i class="fa fa-compress" aria-hidden="true"></i> </a> {{ $category->name }}</li>
                            </ul>
                        </div>
                        <div class="header-page-title">
                            <h1>{{ $category->name }}</h1>
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
    
    <div class="blog-page-area">
        <div class="container">
            @if($lastNews)
                  @foreach($lastNews as $key=>$item)
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <ul>
                          <li>
                              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                  <div class="blog-image">
                                      <a href="{{ makeposturl($item) }}">
                                          <i class="fa fa-link" aria-hidden="true"></i>
                                          <img src="{{ makepreview($item->thumb, 's', 'posts') }}" alt="{{ $item->title }}" srcset="{{ makepreview($item->thumb, 's', 'posts') }}">
                                      </a>
                                  </div>
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                  <span class="date"> <i class="fa fa-calendar-check-o" aria-hidden="true"> </i>{{ $item->created_at->diffForHumans() }}</span>
                                  <h3><a href="#">{{ str_limit($item->title, 45) }}</a></h3>
                                  <span class="admin"><a href="#"><i class="fa fa-user-o" aria-hidden="true"></i>  {{ $item->user->username }}</a></span> <span class="like"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i>  12 </a></span>
                                  <p>{{ str_limit($item->body, 100) }}</p>
                                  <a href="{{ makeposturl($item) }}" class="more">{{ trans('index.showmore') }}<i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
                              </div>
                          </li>
                      </ul>                          
                  </div>
              @endforeach
            @endif
        </div>
    </div>
@endsection