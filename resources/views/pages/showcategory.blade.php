@extends("main")
@section('head_title', $category->name .' | '.getcong('sitename') )
@section('head_description', $category->description )
@section("content")
<section class="banner banner-inner parallax" data-stellar-background-ratio="0.5" id="gridview-3-col">
   <div class="banner-text">
      <div class="center-text">
         <div class="container">
            <h1>Summer Adventures 2016</h1>
            <strong class="subtitle">Three Column Adventure Grid View Show.</strong>
            <nav class="breadcrumbs">
               <ul>
                  <li><a href="#">HOME</a></li>
                  <li><a href="#">ADVENTURES</a></li>
                  <li><span>ALL</span></li>
               </ul>
            </nav>
         </div>
      </div>
   </div>
</section>
<main id="main">
   <div class="content-block content-sub">
      <div class="container">
         <div class="filter-option">
            <div class="layout-action">
               <a href="#" class="link link-list"><span class="icon-list"></span></a>
               <a href="#" class="link link-grid active"><span class="icon-grid"></span></a>
            </div>
         </div>
         <div class="content-holder content-sub-holder">
               @if($lastNews)
                    <div class="row db-3-col">
                      @foreach($lastNews as $key=>$item)
                         @include('._particles._lists.travel_list', ['listtype' => 'big_image small-h bolb titm','featuredon' => 'on', 'descof' => 'on','linkcolor' => 'default'])

                          @if($key ==0 )
                              @foreach(\App\Widgets::where('type', 'Homencolsec')->where('display', 'on')->get() as $widget)
                                  {!! $widget->text !!}
                              @endforeach
                          @endif
                      @endforeach
                    </div>
                @endif
         </div>
      </div>
   </div>
   <aside class="recent-block recent-list recent-wide-thumbnail">
      <div class="container">
         <h2 class="text-center text-uppercase">RECENTLY VIEWED</h2>
         <div class="row">
            <article class="col-sm-6 col-md-3 article">
               <div class="thumbnail">
                  <h3 class="no-space"><a href="#">Everest Basecamp Trek</a></h3>
                  <strong class="info-title">Everest Region, Nepal</strong>
                  <div class="img-wrap">
                     <img src="img/listing/img-31.jpg" height="210" width="250" alt="image description">
                  </div>
                  <footer>
                     <div class="sub-info">
                        <span>5 Days</span>
                        <span>$299</span>
                     </div>
                     <ul class="ico-list">
                        <li class="pop-opener">
                           <a href="#">
                           <span class="icon-hiking"></span>
                           <span class="popup">
                           Hiking
                           </span>
                           </a>
                        </li>
                        <li class="pop-opener">
                           <a href="#">
                           <span class="icon-mountain"></span>
                           <span class="popup">
                           Mountain
                           </span>
                           </a>
                        </li>
                        <li class="pop-opener">
                           <a href="#">
                           <span class="icon-level5"></span>
                           <span class="popup">
                           Level 5
                           </span>
                           </a>
                        </li>
                     </ul>
                  </footer>
               </div>
            </article>
            <article class="col-sm-6 col-md-3 article">
               <div class="thumbnail">
                  <h3 class="no-space"><a href="#">Everest Basecamp Trek</a></h3>
                  <strong class="info-title">Everest Region, Nepal</strong>
                  <div class="img-wrap">
                     <img src="img/listing/img-32.jpg" height="210" width="250" alt="image description">
                  </div>
                  <footer>
                     <div class="sub-info">
                        <span>5 Days</span>
                        <span>$299</span>
                     </div>
                     <ul class="ico-list">
                        <li class="pop-opener">
                           <a href="#">
                           <span class="icon-hiking"></span>
                           <span class="popup">
                           Hiking
                           </span>
                           </a>
                        </li>
                        <li class="pop-opener">
                           <a href="#">
                           <span class="icon-mountain"></span>
                           <span class="popup">
                           Mountain
                           </span>
                           </a>
                        </li>
                        <li class="pop-opener">
                           <a href="#">
                           <span class="icon-level5"></span>
                           <span class="popup">
                           Level 5
                           </span>
                           </a>
                        </li>
                     </ul>
                  </footer>
               </div>
            </article>
            <article class="col-sm-6 col-md-3 article">
               <div class="thumbnail">
                  <h3 class="no-space"><a href="#">Everest Basecamp Trek</a></h3>
                  <strong class="info-title">Everest Region, Nepal</strong>
                  <div class="img-wrap">
                     <img src="img/listing/img-33.jpg" height="210" width="250" alt="image description">
                  </div>
                  <footer>
                     <div class="sub-info">
                        <span>5 Days</span>
                        <span>$299</span>
                     </div>
                     <ul class="ico-list">
                        <li class="pop-opener">
                           <a href="#">
                           <span class="icon-hiking"></span>
                           <span class="popup">
                           Hiking
                           </span>
                           </a>
                        </li>
                        <li class="pop-opener">
                           <a href="#">
                           <span class="icon-mountain"></span>
                           <span class="popup">
                           Mountain
                           </span>
                           </a>
                        </li>
                        <li class="pop-opener">
                           <a href="#">
                           <span class="icon-level5"></span>
                           <span class="popup">
                           Level 5
                           </span>
                           </a>
                        </li>
                     </ul>
                  </footer>
               </div>
            </article>
            <article class="col-sm-6 col-md-3 article">
               <div class="thumbnail">
                  <h3 class="no-space"><a href="#">Everest Basecamp Trek</a></h3>
                  <strong class="info-title">Everest Region, Nepal</strong>
                  <div class="img-wrap">
                     <img src="img/listing/img-34.jpg" height="210" width="250" alt="image description">
                  </div>
                  <footer>
                     <div class="sub-info">
                        <span>5 Days</span>
                        <span>$299</span>
                     </div>
                     <ul class="ico-list">
                        <li class="pop-opener">
                           <a href="#">
                           <span class="icon-hiking"></span>
                           <span class="popup">
                           Hiking
                           </span>
                           </a>
                        </li>
                        <li class="pop-opener">
                           <a href="#">
                           <span class="icon-mountain"></span>
                           <span class="popup">
                           Mountain
                           </span>
                           </a>
                        </li>
                        <li class="pop-opener">
                           <a href="#">
                           <span class="icon-level5"></span>
                           <span class="popup">
                           Level 5
                           </span>
                           </a>
                        </li>
                     </ul>
                  </footer>
               </div>
            </article>
         </div>
      </div>
   </aside>
</main>
</div>
@endsection