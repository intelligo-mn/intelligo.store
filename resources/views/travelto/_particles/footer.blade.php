<footer id="footer">
    <div class="container">
       
       <div class="row footer-holder">
           <nav class="col-sm-6 col-lg-5 footer-nav">
             <div class="fb-page" data-href="https://www.facebook.com/tsastsolutionweb/" data-tabs="timeline" data-width="300" data-height="300" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>
          </nav>

          <nav class="col-sm-6 col-lg-3 footer-nav active">
             <h3>{{ trans('index.mainmenus') }}</h3>
             <ul class="slide">
                <li>
                  <a href="{{ action('IndexController@index') }}" data-type="{{ action('IndexController@index') }}">{{ trans('index.home') }}</a>
                     
               </li>

                @foreach(\App\Pages::where('footer', '1')->
                where("lang", \Session::get('locale'))->get() as $page)
                    <li> <a href="{{ action('PagesController@showpage', [$page->slug ]) }}" title="{{ $page->title }}">{{ $page->title }}</a></li>
                @endforeach
            
               @foreach(\App\Categories::where("main", '1')->where("disabled", '0')->orwhere("main", '2')->
               where("lang", \Session::get('locale'))->
               where("disabled", '0')->orderBy('order')->limit(5)->get() as $categorys)
                  <li>
                     <a href="{{ url($categorys->name_slug) }}" data-type="{{ $categorys->id }}">{{ $categorys->name }} </a>
                        
                  </li>
              @endforeach
             </ul>
          </nav>
         

          <nav class="col-sm-6 col-lg-4 footer-nav last">
             <h3>{{ trans('index.contactus') }}</h3>
             <ul class="slide address-block">
                <li class="wrap-text"><span class="icon-tel"></span> <a href="#">{{ trans('travel.mobile_text') }}</a></li>
                <li class="wrap-text"><span class="icon-earth"></span> <a href="#">{{ trans('travel.website_text') }}</a></li>
                <li class="wrap-text"><span class="icon-email"></span> <a href="#">{{ trans('travel.email_text') }}</a></li>
                <li>
                   <span class="icon-home"></span> 
                   <address>Ulaanbaatar, Mongolia</address>
                </li>
             </ul>
          </nav>
       </div>
    </div>
    <div class="footer-bottom">
       <div class="container">
          <div class="row">
             <div class="col-lg-6">
                <strong class="copyright"><i class="fa fa-copyright"></i>
                    Copyright 2017 - Trip to Mongolia
                </strong>
             </div>
             <div class="col-lg-2">
               
             </div>
             <div class="col-lg-4">
               <strong class="copyright"><i class="fa fa-code"></i>
                    <a href="https://www.tsastsolution.com">ВЭБ БҮТЭЭСЭН ЦАСТ СОЛЮШН Утас: 88014334</a>
                </strong>
             </div>
          </div>
       </div>
    </div>
 </footer>