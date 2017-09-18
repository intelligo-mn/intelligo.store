<header id="header" class="white-header">
   <div class="container-fluid">
      <div class="logo">
         <a href="index-2.html">
         <img class="normal" src="travel/img/logos/logo.svg" alt="Entrada">
         <img class="gray-logo" src="travel/img/logos/logo-gray.svg" alt="Entrada">
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
               
               @foreach(\App\Categories::where("main", '1')->where("disabled", '0')->orwhere("main", '2')->where("disabled", '0')->orderBy('order')->limit(9)->get() as $categorys)
                  <li class="dropdown">
                     <a href="{{ url($categorys->name_slug) }}" class="dropdown-toggle" data-type="{{ $categorys->id }}" data-toggle="dropdown">{{ $categorys->name }} <b class="icon-angle-down"></b></a>
                        
                  </li>
              @endforeach
               <li class="visible-xs visible-sm">
                  <a href="login.html">
                  <span class="icon icon-user"></span>
                  <span class="text">Login</span>
                  </a>
               </li>
               <li class="hidden-xs hidden-sm v-divider">
                  <a href="login.html">
                  <span class="icon icon-user"></span>
                  </a>
               </li>
             
               <li class="dropdown hidden-xs hidden-sm last-dropdown v-divider">
                  <a href="#"><span class="text">EN</span> <span class="icon-angle-down"></span></a>
                  <div class="dropdown-menu dropdown-sm">
                     <div class="drop-wrap lang-wrap">
                        <div class="lang-row">
                           <div class="lang-col">
                              <a href="#">
                              <span class="text">English</span>
                              </a>
                           </div>
                        </div>
                        <div class="lang-row">
                           <div class="lang-col">
                              <a href="#">
                              <span class="text">Монгол</span>
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