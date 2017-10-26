@extends("app")
@section('head_title', $category->name .' | '.getcong('sitename') )
@section('head_description', $category->description )
@section("content")
<section class="banner banner-inner parallax" data-stellar-background-ratio="0.5" id="gridview-3-col">
   <div class="banner-text">
      <div class="center-text">
         <div class="container">
            <h1>{{ $category->name }}</h1>
            <strong class="subtitle">{{ $category->name }}</strong>
            <nav class="breadcrumbs">
               <ul>
                  <li><a href="#">{{ $category->name }}</a></li>
                  
                    @foreach(\App\Categories::where('type', $category->id)->orderBy('name')->groupBy('name')->get() as $cat)

                        <li><a data-type="{{ $cat->name_slug }}" href="/{{ $cat->name_slug }}">{{ $cat->name }}</a></li>
                    @endforeach
                  
               </ul>
            </nav>
         </div>
      </div>
   </div>
</section>
<main id="main">
   <div class="content-block content-sub">
      <div class="container">
         
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
</main>
@endsection