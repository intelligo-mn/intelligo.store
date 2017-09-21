<header id="header" class="header">

    <div class="container">
        <div class="header__logo">
            <a href="/" title="">
                <img  class="site-logo" src="{{ url('/assets/img/logo.png') }}" alt="">
            </a>
        </div>
        <div class="header__nav">
            <div class="coltrigger pull-l">
                <a href="javascript:" id="menu-toggler">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
            <div id="colnav" class="toggle-nav pull-l" >
                <ul class="navmenu">
                    <li class="cats_link" ><a href="http://www.blog.toroo.info" class="biga firsg" data-type=""><i class="fa "></i> Нүүр хуудас <i class="fa fa-caret-right"></i></a></li>
                    
                    @foreach(\App\Categories::where("main", '1')->where("disabled", '0')->orwhere("main", '2')->where("disabled", '0')->orderBy('order')->limit(9)->get() as $categorys)
                        <li class="cats_link" ><a href="{{ url($categorys->name_slug) }}" class="biga firsg" data-type="{{ $categorys->id }}"><i class="fa fa-{{ $categorys->icon }}"></i> {{ $categorys->name }} <i class="fa fa-caret-right"></i></a></li>
                    @endforeach
                </ul>
            </div>
            <div class="clear"></div>
        </div>
    </div>
    
      <div class="navmenu login-button">
        c

    </div>
</header>

