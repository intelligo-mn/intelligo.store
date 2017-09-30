<header id="header" class="white-header">
   <div class="container-fluid">
      <div class="logo">
         <a href="{{ action('IndexController@index') }}">
        <!--  <img class="normal" src="{!! asset('travel/img/logos/logo.svg')!!}" alt="Entrada">
         <img class="gray-logo" src="{!! asset('travel/img/logos/logo-gray.svg')!!}" alt="Entrada"> -->
         TripToMongolia
         </a>
      </div>
      <nav class="navbar navbar-default">
         <div class="navbar-header">
            <button type="button" class="navbar-toggle nav-opener" data-toggle="collapse" data-target="#nav">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
         </div>
         <div class="collapse navbar-collapse" id="nav">
            <ul class="nav navbar-nav">
               <li>
                  <a href="{{ action('IndexController@index') }}" data-type="{{ action('IndexController@index') }}">HOME<b class="icon-angle-down"></b></a>
                     
               </li>
                <li> <a href="/tours" title="/tours">TOURS</a></li>
               <li> <a href="/pages/about" title="/pages/about">ABOUT US</a></li>
               <li> <a href="/pages/itinitary" title="/pages/itinitary">ITINERARY</a></li>
               <li> <a href="/pages/stayit" title="/pages/stayit">STAY IT</a></li>
               <li> <a href="/contact" title="/contact">CONTACT US</a></li>
               <!--  @foreach(\App\Pages::where('footer', '1')->get() as $page)
                    <li> <a href="{{ action('PagesController@showpage', [$page->slug ]) }}" title="{{ $page->title }}">{{ $page->title }}</a></li>
                @endforeach -->
              
               <!-- @foreach(\App\Categories::where("main", '1')->where("disabled", '0')->orwhere("main", '2')->where("disabled", '0')->orderBy('order')->limit(5)->get() as $categorys)
                  <li>
                     <a href="{{ url($categorys->name_slug) }}" data-type="{{ $categorys->id }}">{{ $categorys->name }} <b class="icon-angle-down"></b></a>
                        
                  </li>
              @endforeach -->

               
               <li class="dropdown hidden-xs hidden-sm v-divider">
                  <a href="login.html" class="dropdown-toggle" data-toggle="dropdown">
                  <span class="icon icon-user"></span>
                  </a>
                   @if(!Auth::check())
                  <div class="dropdown-menu">
                     <ul>
                        <li>
                            <a href="/login">{{ trans('index.login') }}</a>
                       </li>
                     </ul>
                  </div>
                  
                  @endif
                  @if(Auth::check())
                  <div class="dropdown-menu">
                     <ul>
                        <li>
                           <a style="display:block;font-size:16px;font-weight: 600">{{ Auth::user()->username }}</a>
                       </li>
                       <li>
                           <a href="{{ action('UsersController@index', [ Auth::user()->username_slug ]) }}">{{ trans('index.myprofile') }}</a>
                       </li>
                       <li>
                           <a href="{{ action('UsersController@followfeed', ['id' => Auth::user()->username_slug ]) }}">{{ trans('updates.feedposts') }}</a>
                       </li>
                       <li>
                           <a href="{{ action('UsersController@draftposts', ['id' => Auth::user()->username_slug ]) }}">{{ trans('index.draft') }}</a>
                       </li>
                       <li>
                           <a href="{{ action('UsersController@deletedposts', ['id' => Auth::user()->username_slug ]) }}">{{ trans('index.trash') }}</a>
                       </li>
                       <li>
                           <a href="{{ action('UsersController@updatesettings', ['id' => Auth::user()->username_slug ]) }}">{{ trans('index.settings') }}</a>
                       </li>
                       @if(Auth::user()->usertype=='Admin')
                           <li>
                               <a href="/admin">{{ trans('index.adminp') }}</a>
                           </li>
                       @endif
                       <li>
                           <a href="{{ action('Auth\AuthController@logout') }}">{{ trans('index.logout') }}</a>
                       </li>
                     </ul>
                  </div>
                  @endif
               </li>
             
               <li class="dropdown hidden-xs hidden-sm last-dropdown v-divider">
                  <a href="#"><span class="text">EN</span> <span class="icon-angle-down"></span></a>
                   <div class="dropdown-menu dropdown-sm">
                      <div class="drop-wrap lang-wrap">
                         <div class="lang-row">
                            <div class="lang-col">
                              <a href="/selectlanguge/en">
                               <span class="text">English</span>
                               </a>
                            </div>
                        </div>
                         <div class="lang-row">
                            <div class="lang-col">
                               <a href="/selectlanguge/mn">
                               <span class="text">Монгол</span>
                               </a>
                            </div>
                         </div>
                        <!--  <div class="lang-row">
                            <div class="lang-col">
                               <a href="/selectlanguge/cn">
                               <span class="text">China</span>
                               </a>
                            </div>
                         </div> -->
                         <div class="lang-row">
                            <div class="lang-col">
                               <a href="/selectlanguge/ru">
                               <span class="text">Russia</span>
                               </a>
                            </div>
                         </div>
                         
                      </div>
                   </div>
               </li>
               <li class="visible-md visible-lg nav-visible v-divider"><a href="#" class="search-opener"><span class="icon icon-search"></span></a></li>
            </ul>
         </div>
      </nav>
   </div>
   <form class="search-form" action="#">
      <fieldset>
         <a href="#" class="search-opener hidden-md hidden-lg">
         <span class="icon-search"></span>
         </a>
         <div class="search-wrap">
            <a href="#" class="search-opener close">
            <span class="icon-cross"></span>
            </a>
            <div class="trip-form trip-form-v2 trip-search-main">
              
            </div>
         </div>
      </fieldset>
   </form>
</header>