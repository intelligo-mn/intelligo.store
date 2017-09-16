<body>
   <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','../../../../www.google-analytics.com/analytics.js','ga');
      
      ga('create', 'UA-3904246-26', 'auto');
      ga('send', 'pageview');
      
   </script>
   <div class="preloader" id="pageLoad">
      <div class="holder">
         <div class="coffee_cup"></div>
      </div>
   </div>
   <div id="wrapper">
      <div class="page-wrapper">
         <header id="header" class="white-header">
            <div class="container-fluid">
               <div class="logo">
                  <a href="index-2.html">
                  <img class="normal" src="img/logos/logo.svg" alt="Entrada">
                  <img class="gray-logo" src="img/logos/logo-gray.svg" alt="Entrada">
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
                        <li class="dropdown" ><a href="{{ url($categorys->name_slug) }}" class="biga firsg" data-type="{{ $categorys->id }}"><i class="fa fa-{{ $categorys->icon }}"></i> {{ $categorys->name }} <i class="fa fa-caret-right"></i></a></li>
                    @endforeach
                        <li class="visible-xs visible-sm">
                           <a href="login.html">
                           <span class="icon icon-user"></span>
                           <span class="text">Login</span>
                           </a>
                        </li>
                       
                     </ul>
                  </div>
               </nav>
            </div>
           
         </header>