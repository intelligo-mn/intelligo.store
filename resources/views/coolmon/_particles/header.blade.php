   <header>
        <div class="header-top-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <div class="header-top-left">
                            <ul>
                                <li>{{ date('Y-m-d H:i:s') }}</li>
                                <li><a href="account.html">Sign In / Join</a>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="social-media-area">
                            <nav>
                                <ul>
                                    <li><a href="#" class="active"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-middle-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div class="logo-area">
                            <a href="index.html"><img src="cooltheme/images/logo.png" alt="logo"></a>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div class="right-banner">
                            <img src="cooltheme/images/add/1.png" alt="add image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bottom-area" id="sticky">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                        <div class="navbar-header">
                            <div class="col-sm-8 col-xs-8 padding-null">
                                <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                            <div class="col-sm-4 col-xs-4 hidden-desktop text-right search">
                                <a href="#search-mobile" data-toggle="collapse" class="search-icon"><i class="fa fa-search" aria-hidden="true"></i></a>
                                <div id="search-mobile" class="collapse search-box">
                                    <input type="text" class="form-control" placeholder="Search...">
                                </div>
                            </div>    
                        </div>
                        <div class="main-menu navbar-collapse collapse">
                            <nav>
                                <ul>
                                   <!--  <li><a href="index.html" class="has dropdown-toggle">Home <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
                                        <ul class="sub-menu">
                                            <li><a href="index.html">Home 1</a></li>
                                            <li><a href="index2.html">Home 2</a></li>
                                            <li><a href="index3.html">Home 3</a></li>
                                        </ul>
                                    </li>
                               
                                    <li><a href="category-videos.html">Videos</a></li> -->
                                     <li>
                                          <a href="{{ action('IndexController@index') }}" data-type="{{ action('IndexController@index') }}">{{ trans('index.home') }}<b class="icon-angle-down"></b></a>
                                             
                                       </li>

                                        @foreach(\App\Pages::where('footer', '1')->
                                        where("lang", \Session::get('locale'))->get() as $page)
                                            <li> <a href="{{ action('PagesController@showpage', [$page->slug ]) }}" title="{{ $page->title }}">{{ $page->title }}</a></li>
                                        @endforeach
                                    
                                       @foreach(\App\Categories::where("main", '1')->where("disabled", '0')->orwhere("main", '2')->
                                       where("lang", \Session::get('locale'))->
                                       where("disabled", '0')->orderBy('order')->limit(5)->get() as $categorys)
                                          <li>
                                             <a href="{{ url($categorys->name_slug) }}" data-type="{{ $categorys->id }}">{{ $categorys->name }} <b class="icon-angle-down"></b></a>
                                                
                                          </li>
                                      @endforeach
                                      <li>
                                         <a href="{{ action('ContactController@index') }}">{{ trans('contact.contact') }} <b class="icon-angle-down"></b></a>
                                            
                                      </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-hidden col-xs-hidden text-right search hidden-mobile">
                        <a href="#search" data-toggle="collapse" class="search-icon"><i class="fa fa-search" aria-hidden="true"></i></a>
                        <div id="search" class="collapse search-box">
                            <input type="text" class="form-control" placeholder="Search...">
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </header>