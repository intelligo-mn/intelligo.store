@extends("main")

@section('head_title', $page->title .' | '.getenvcong('sitename') )

@section("content")

<section class="banner banner-inner parallax" data-stellar-background-ratio="0.5" id="gridview-3-col">
   <div class="banner-text">
      <div class="center-text">
         <div class="container">
            <h1>{{ $page->title }}</h1>
         </div>
      </div>
   </div>
</section>
<main id="main">
   <div class="content-block content-sub">
      <div class="container">
         <div class="content-holder content-sub-holder">  
            {!! $page->text  !!}
         </div>
      </div>
   </div>
</main>
@endsection