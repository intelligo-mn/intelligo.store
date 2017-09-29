 @if(isset($item))
   
 <article class="col-sm-6 col-md-4 article has-hover-s1 has-hover-s3">
  <div class="thumbnail">
     <div class="img-wrap" @if(isset($setmediamarginbottom))style="margin-bottom: {{ $setmediamarginbottom }};" @endif>
        <img src="{{ makepreview($item->thumb, 's', 'posts') }}" height="228" width="350" alt="{{ $item->title }}">
        <div class="img-caption text-uppercase">{{ str_limit($item->title, 30) }}</div>
        
        @unless(isset($metaof))
        <div class="hover-article">
            <div class="star-rating">
                <span><span class="icon-star"></span></span>
                <span><span class="icon-star"></span></span>
                <span><span class="icon-star"></span></span>
                <span><span class="icon-star"></span></span>
                <span class="disable"><span class="icon-star"></span></span>
            </div>
            <div class="icons">
                <a href="#"><span class="icon-heart"></span></a>
                <a href="#"><span class="icon-reply"></span></a>
            </div>
                <div class="info-footer">
                <span class="price">from <span>{{ str_limit($item->body, 70) }}</span></span>
                <a href="{{ makeposturl($item) }}" class="link-more">Show more</a>
            </div>
        </div>
        @endunless
     </div>
    

     @if($descof=='on')
        <h3 class="small-space"><a href="{{ makeposturl($item) }}">{!! $item->title  !!}</a></h3>
        <!-- <p>{{ str_limit($item->body, 70) }}</p> -->
        <a href="{{ makeposturl($item) }}" class="btn btn-default">Show more</a>

     <footer>
        <ul class="social-networks">
           <li><a href="http://twitter.com/share?url={{ url(makeposturl($item)) }}&amp;text={{ $item->title  }}" data-id="{{ $item->id }}" class="share_social is-twitter popup-action"><span class="icon-twitter"></span></a></li>
           <li><a href="#"><span class="icon-google-plus"></span></a></li>
           <li><a href="http://www.facebook.com/share.php?u={{ url(makeposturl($item)) }}"><span class="icon-facebook" data-id="{{ $item->id }}" class="share_social is-facebook  popup-action"></span></a></li>
           <li><a href="#"><span class="icon-linkedin"></span></a></li>
        </ul>
        <span class="price">from <span>{{ str_limit($item->body, 70) }}</span></span>
     </footer>
     @endif
  </div>
</article>
@endif