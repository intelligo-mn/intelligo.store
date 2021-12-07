@extends("main")
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
                  {{ trans('index.price') }} <strong>{{ $post->body }}</strong>
               </div>
               <!-- <div class="description">
                  <p>{{ $post->body }}</p>
               </div>
                -->
               <div class="btn-holder">
                  <a href="/contact" class="btn btn-lg btn-info">{{ trans('index.purchase')}}</a>
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
               <li role="presentation" class="active"><a href="#tab01" aria-controls="tab01" role="tab" data-toggle="tab">{{ trans('index.overview') }}</a></li>
               <li role="presentation"><a href="#tab02" aria-controls="tab02" role="tab" data-toggle="tab">{{ trans('index.itinerary') }}</a></li>
               <li role="presentation"><a href="#tab03" aria-controls="tab03" role="tab" data-toggle="tab">{{ trans('index.gallery') }}</a></li>
            </ul>
         </div>
      </nav>
      <div class="container tab-content trip-detail">
         <div role="tabpanel" class="tab-pane active" id="tab01">
            <div class="row">
               <div class="col-md-8">
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
               
            </div>
         </div>
         <div role="tabpanel" class="tab-pane" id="tab02">
      
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
         <h2 class="text-center text-uppercase">{{ trans('index.related_tour') }}</h2>
         <div class="row">
            @foreach($lastFeatures as $item)
                @include('._particles._lists.travel_list', ['listtype' => 'big_image titm bolb','descof' => 'on', 'setbadgeof' => 'off', 'itembodyheight' => '50px', 'metaof' => 'off', 'linkcolor' => 'default'])
            @endforeach
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
    <script async defer src="//platform.instagram.com/{{  getcong('sitelanguage') > "" ? getcong('sitelanguage') : 'en_US' }}/embeds.js"></script>
    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
    <style> .fb_dialog{z-index:999999999} </style>
    <div id="fb-root"></div>
    <script>(function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/{{  getcong('sitelanguage') > "" ? getcong('sitelanguage') : 'en_US' }}/sdk.js#xfbml=1{!! getcong('facebookapp') > "" ? '&appId='.getcong('facebookapp') : '' !!}&version=v2.4";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
    <script>
        $( document ).ready(function() {
            $('body').addClass('default-page js-ready');
        });
    </script>
@endsection