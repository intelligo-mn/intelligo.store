@extends("others")
@section('head_title',  $post->title.' | '.getcong('sitename'))
@section('head_description', $post->body)
@section('head_image', asset('/upload/media/posts/'.$post->thumb.'-b.jpg'))
@section('head_url', Request::url())
@section('modedefault', 'mode-default')
@section("content")

@foreach($entrys as $key => $entry)

<main id="main">
   <section class="container-fluid trip-info">
      <div class="same-height two-columns row">
         <div class="height col-md-6">
            <div id="tour-slide">
                 <div class="slide">
                    <div class="bg-stretch">
                       <img src="{{ makepreview($post->thumb, 'b', 'posts') }}" alt="{{ $post->title }}" height="1104" width="966">
                    </div>
                 </div>
                 <div class="slide">
                    <div class="bg-stretch">
                       <img src="{{ makepreview($post->thumb, 'b', 'posts') }}" alt="{{ $post->title }}" height="1104" width="966">
                    </div>
                 </div>
              </div>
         </div>
         <div class="height col-md-6 text-col">
            <div class="holder">
               <h1 class="small-size">{{ $post->title }}</h1>
               <div class="price">
                  from <strong>{{ $post->body }}</strong>
               </div>
               <!-- <div class="description">
                  <p>{{ $post->body }}</p>
               </div>
                -->
               <div class="btn-holder">
                  <a href="#" class="btn btn-lg btn-info">Purchase</a>
               </div>
               <ul class="social-networks social-share">
                  <li>
                     <a href="#" class="facebook">
                     <span class="ico">
                     <span class="icon-facebook"></span>
                     </span>
                     <span class="text">Share</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" class="twitter">
                     <span class="ico">
                     <span class="icon-twitter"></span>
                     </span>
                     <span class="text">Tweet</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" class="google">
                     <span class="ico">
                     <span class="icon-google-plus"></span>
                     </span>
                     <span class="text">+1</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" class="pin">
                     <span class="ico">
                     <span class="icon-pin"></span>
                     </span>
                     <span class="text">Pin it</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </section>
   <div class="tab-container">
      <nav class="nav-wrap" id="sticky-tab">
         <div class="container">
            <ul class="nav nav-tabs text-center" role="tablist">
               <li role="presentation" class="active"><a href="#tab01" aria-controls="tab01" role="tab" data-toggle="tab">Overview</a></li>
               <li role="presentation"><a href="#tab02" aria-controls="tab02" role="tab" data-toggle="tab">Itinerary</a></li>
               <li role="presentation"><a href="#tab03" aria-controls="tab03" role="tab" data-toggle="tab">Gallery</a></li>
            </ul>
         </div>
      </nav>
      <div class="container tab-content trip-detail">
         <div role="tabpanel" class="tab-pane active" id="tab01">
            <div class="row">
               <div class="col-md-6">
                  @if($entry->title)
                    <h2 class="sub-title" >

                            @if($post->ordertype != '')
                                {{ $entry->order+1 }}.
                             @endif

                        {{ $entry->title }}
                    </h2>
                @endif

                @if($entry->type=='image')
                    <div class="media">
                        <div class="sharemedia">
                            @include('._particles.others.entrysharebuttons')
                        </div>
                        <a id="" class="gif-icon-a"><img class="img-responsive" style="display: block;@if($entry->type=='image')width:100%@endif" alt="{{ $entry->title }}" src="{{ makepreview($entry->image, null, 'entries') }}"></a>
                        <small>{!! $entry->source !!}</small>
                    </div>
                @endif

                @if($entry->type=='video' or $entry->type=='tweet' or $entry->type=='facebookpost' or $entry->type=='embed' or $entry->type=='soundcloud')

                        @if($entry->type=='facebookpost')
                            <div class="fb-post" data-href="{!!   $entry->video !!}" data-width="100%"></div>

                        @elseif (strpos($entry->video, 'facebook'))
                       <div id="{!! $entry->id !!}" class="fb-video" data-href="{!! $entry->video !!}" style="max-height: 360px;"><div class="fb-xfbml-parse-ignore"></div></div>

                        @else
                            {!! $entry->video !!}
                        @endif
                @endif
                @if( $entry->type=='instagram')

                    <div class='embed-containera'>
                          <iframe id="instagram-embed-{{ $entry->order }}" src="{!! $entry->video !!}embed/captioned/?v=5" allowtransparency="true" frameborder="0" data-instgrm-payload-id="instagram-media-payload-{{ $entry->order }}" scrolling="no" style="border: 0; margin: 1px; max-width: 658px; width: calc(100% - 2px); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.498039) 0px 0px 1px 0px, rgba(0, 0, 0, 0.14902) 0px 1px 10px 0px; display: block; padding: 0px; background: rgb(255, 255, 255);"></iframe>
                          <script src="//platform.instagram.com/en_US/embeds.js"></script>
                    </div>

                @endif


                 <p>
                    {!! $entry->body !!}
                </p>
                 @if( $entry->type=='text')
                <small>{!! $entry->source !!}</small>
                 @endif
               </div>
               <div class="col-md-6">
                  <strong class="header-box">The tour package inclusions and exclusions at a glance</strong>
                  <div class="text-box">
                     <div class="holder">
                        <strong class="title">Whats included in this tour</strong>
                        <span class="sub-title">Items that are covered in the cost of tour price.</span>
                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </p>
                        <ul class="content-list tick-list">
                           <li>All breakfasts, lunches and dinners &amp; dining</li>
                           <li>All accommodation including tea houses en route</li>
                           <li>All transportation including taxis and coaches</li>
                           <li>Flights from Heathrow if booked inc. of flight</li>
                           <li>Tour and trekking guide for entire journey</li>
                        </ul>
                     </div>
                  </div>
                  <div class="text-box not-included">
                     <div class="holder">
                        <strong class="title">Whats not included in this tour</strong>
                        <span class="sub-title">Items that are covered in the cost of tour price.</span>
                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </p>
                        <ul class="content-list cross-list">
                           <li>Travel insurance and other emergencies</li>
                           <li>Visa fees and entry clearing fees</li>
                           <li>Single room accommodations</li>
                           <li>Liquors, beeers and bootled beverages</li>
                           <li>Photography ccessories like cameras etc.</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div role="tabpanel" class="tab-pane" id="tab02">
            <!-- <div class="row">
               <div class="col-md-6">
                  <ol class="detail-accordion">
                     <li>
                        <a href="#">
                        <strong class="title">Day 1</strong>
                        <span>Depart London</span>
                        </a>
                        <div class="slide">
                           <div class="slide-holder">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ctetur, adipisci velit, sed quia non numquam eius modi.</p>
                           </div>
                        </div>
                     </li>
                     <li>
                        <a href="#">
                        <strong class="title">Day 2</strong>
                        <span>Arrive in Kathmandu</span>
                        </a>
                        <div class="slide">
                           <div class="slide-holder">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ctetur, adipisci velit, sed quia non numquam eius modi.</p>
                           </div>
                        </div>
                     </li>
                     <li>
                        <a href="#">
                        <strong class="title">Day 3</strong>
                        <span>Leave for Pokhara</span>
                        </a>
                        <div class="slide">
                           <div class="slide-holder">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ctetur, adipisci velit, sed quia non numquam eius modi.</p>
                           </div>
                        </div>
                     </li>
                     <li>
                        <a href="#">
                        <strong class="title">Day 4</strong>
                        <span>Start Trekking at Besi</span>
                        </a>
                        <div class="slide">
                           <div class="slide-holder">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ctetur, adipisci velit, sed quia non numquam eius modi.</p>
                           </div>
                        </div>
                     </li>
                     <li>
                        <a href="#">
                        <strong class="title">Day 5</strong>
                        <span>Day subtitle message</span>
                        </a>
                        <div class="slide">
                           <div class="slide-holder">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ctetur, adipisci velit, sed quia non numquam eius modi.</p>
                           </div>
                        </div>
                     </li>
                     <li>
                        <a href="#">
                        <strong class="title">Day 6</strong>
                        <span>Day subtitle message</span>
                        </a>
                        <div class="slide">
                           <div class="slide-holder">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ctetur, adipisci velit, sed quia non numquam eius modi.</p>
                           </div>
                        </div>
                     </li>
                     <li>
                        <a href="#">
                        <strong class="title">Day 7</strong>
                        <span>Depart London</span>
                        </a>
                        <div class="slide">
                           <div class="slide-holder">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ctetur, adipisci velit, sed quia non numquam eius modi.</p>
                           </div>
                        </div>
                     </li>
                     <li class="active">
                        <a href="#">
                        <strong class="title">Day 8</strong>
                        <span>Return to London</span>
                        </a>
                        <div class="slide">
                           <div class="slide-holder">
                              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                              <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. </p>
                           </div>
                        </div>
                     </li>
                  </ol>
               </div>
               <div class="col-md-6">
                  <article class="img-article article-light">
                     <div class="img-wrap">
                        <img src="travel/img/generic/img-08.jpg" height="319" width="570" alt="image description">
                     </div>
                     <div class="text-block">
                        <h3><a href="#">Member taking a short break</a></h3>
                        <p>Consider packing your bag with folloing daily essentials.</p>
                     </div>
                  </article>
                  <article class="img-article article-light">
                     <div class="img-wrap">
                        <img src="travel/img/generic/img-09.jpg" height="319" width="570" alt="image description">
                     </div>
                     <div class="text-block">
                        <h3><a href="#">Couple enjoying the spectacular view</a></h3>
                        <p>Consider packing your bag with folloing daily essentials.</p>
                     </div>
                  </article>
               </div>
            </div> -->
         </div>
         <div role="tabpanel" class="tab-pane" id="tab03">
            <ul class="row gallery-list has-center">
                @if($entry->type=='image')
                    <li class="col-sm-6">
                      <a class="fancybox" data-fancybox-group="group" href="img/gallery/img-10-2.jpg" title="Caption Goes Here">
                      <span class="img-holder">
                      <img src="{ makepreview($entry->image, null, 'entries') }}" height="750" width="450" alt="image description">
                      </span>
                      <span class="caption">
                      <span class="centered">
                      <strong class="title">{{ $entry->title }}</strong>
                      </span>
                      </span>
                      </a>
                   </li>
                @endif
            </ul>
         </div>
      </div>
   </div>
   <aside class="recent-block recent-gray recent-wide-thumbnail">
      <div class="container">
         <h2 class="text-center text-uppercase">RECENTLY VIEWED</h2>
         <div class="row">
            @foreach($lastFeatures as $item)
                @include('._particles._lists.travel_list', ['listtype' => 'big_image titm bolb','descof' => 'on', 'setbadgeof' => 'off', 'itembodyheight' => '50px', 'metaof' => 'off', 'linkcolor' => 'default'])
            @endforeach
        <!--     <article class="col-sm-6 col-md-3 article">
               <div class="thumbnail">
                  <h3 class="no-space"><a href="#">Everest Basecamp Trek</a></h3>
                  <strong class="info-title">Everest Region, Nepal</strong>
                  <div class="img-wrap">
                     <img src="travel/img/listing/img-31.jpg" height="210" width="250" alt="image description">
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
                     <img src="travel/img/listing/img-32.jpg" height="210" width="250" alt="image description">
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
                     <img src="travel/img/listing/img-33.jpg" height="210" width="250" alt="image description">
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
                     <img src="travel/img/listing/img-34.jpg" height="210" width="250" alt="image description">
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
            </article> -->
         </div>
      </div>
   </aside>
</main>

@endforeach

   @if($key==1 and count($entrys) > 3)
        @foreach(\App\Widgets::where('type', 'Post2nd3rdentry')->where('display', 'on')->get() as $widget)
            {!! $widget->text !!}
        @endforeach
    @endif
@endsection

@section('footer')
    @if($post->type=="quiz")
    <script>
         BuzzyQuizzes = {
            'lang_1': '{{ trans('buzzyquiz.shareonface') }}',
            'lang_2': '{{ trans('buzzyquiz.shareontwitter') }}',
            'lang_3': '{{ trans('buzzyquiz.shareface') }}',
            'lang_4': '{{ trans('buzzyquiz.sharetweet') }}',
            'lang_5': '{{ trans('buzzyquiz.sharedone') }}',
            'lang_6': '{{ trans('buzzyquiz.sharedonedesc') }}'
        };


        $( document ).ready(function() {

            App.initQuizzesClicks();
        });
    </script>
    @endif
    @if($post->type=="poll")
    <script>
        $( document ).ready(function() {
            $('.poll_main_color').each(function(i){
                $(this).css('width', $(this).attr('data-percent')+'%');
            });
            $('body').addClass('default-page');
        });
    </script>
    @endif
    <!-- <script async defer src="//platform.instagram.com/{{  getcong('sitelanguage') > "" ? getcong('sitelanguage') : 'en_US' }}/embeds.js"></script>
    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
 -->


    <style> .fb_dialog{z-index:999999999} </style>
    <div id="fb-root"></div>
   <!--  <script>(function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/{{  getcong('sitelanguage') > "" ? getcong('sitelanguage') : 'en_US' }}/sdk.js#xfbml=1{!! getcong('facebookapp') > "" ? '&appId='.getcong('facebookapp') : '' !!}&version=v2.4";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script> -->
    <script>
        $( document ).ready(function() {
           
            $('#header').css('background', '#252525');
        });
    </script>
@endsection