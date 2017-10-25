@foreach($lastNews as $key => $item)
    <li class="sidebar-mosts__item ">
        @if( $item->type=='quiz')
            <div class="badge quiz"><div class="badge-img"></div></div>
        @elseif($item->featured_at !== null)
            <div class="badge featured"><div class="badge-img"></div></div>
        @else
            {{  reaction_icon_get($item) }}
        @endif
        <a class="sidebar-mosts__item__link" href="{{ makeposturl($item) }}" title="{{ $item->title }}">
            <figure class="sidebar-mosts__item__body">
                <div class="sidebar-mosts__item__image">
                    <img class="sidebar-mosts__item__image__item lazy" data-original="{{ makepreview($item->thumb, 's', 'posts') }}" alt="{{ $item->title }}">
                </div>
                <figcaption class="sidebar-mosts__item__caption">
                    <h3 class="sidebar-mosts__item__title">{{ $item->title }}</h3>
                </figcaption>
            </figure>
        </a>
        <div class="content-timeline__detail--bottom">
            <div class="content-timeline__detail__date share_counts hide-phone">
                <span class="facebook"><div class="buzz-icon buzz-facebook"></div>{{ isset($item->shared->facebook) ? $item->shared->facebook : '0'}}</span>
                <span class="twitter"><div class="buzz-icon buzz-twitter"></div>{{ isset($item->shared->twitter) ? $item->shared->twitter : '0'}}</span>
                <span class="whatsapp"><div class="buzz-icon buzz-whatsapp"></div>{{ isset($item->shared->whatsapp) ? $item->shared->whatsapp : '0'}}</span>
            </div>

            <div class="content-timeline__detail__date  hide-phone" >{{ $DB_USER_LANG=="en" ? $item->created_at->format('j M, h:i A') : $item->created_at->diffForHumans() }}</div>

            <div class="content-timeline__detail__social-media">
                <span class="has-dropdown" data-target="share-dropdown--{{ $item->id  }}" data-align="left-bottom"><i class="material-icons"></i></span>
                <div class="share-dropdown share-dropdown--{{ $item->id  }}  dropdown-container">
                    <ul>
                        <li class="dropdown-container__item ripple buzz-share-button has-ripple" data-share-type="facebook" data-type="news" data-id="{{ $item->id  }}" data-post-url="/shared" data-title="{!! $item->title  !!}" data-sef="{{ makeposturl($item) }}">
                            <span class="share-dropdown__icon share-dropdown__icon--facebook"></span>
                            <span class="share-dropdown__title">Facebook</span>
                        </li>
                        <li class="dropdown-container__item ripple buzz-share-button has-ripple" data-share-type="twitter" data-type="news" data-id="{{ $item->id  }}" data-post-url="/shared" data-title="{!! $item->title  !!}" data-sef="{{ makeposturl($item) }}">
                            <span class="share-dropdown__icon share-dropdown__icon--twitter"></span>
                            <span class="share-dropdown__title">Twitter</span>
                        </li>
                        <li class="dropdown-container__item ripple buzz-share-button hide-phone has-ripple" data-share-type="gplus" data-type="news" data-id="{{ $item->id  }}" data-post-url="/shared" data-title="{!! $item->title  !!}" data-sef="{{ makeposturl($item) }}">
                            <span class="share-dropdown__icon share-dropdown__icon--google"></span>
                            <span class="share-dropdown__title">Google +</span>
                        </li>
                        <li class="dropdown-container__item ripple buzz-share-button visible-phone has-ripple" data-share-type="whatsapp" data-type="news" data-id="{{ $item->id  }}" data-post-url="/shared" data-title="{!! $item->title  !!}" data-sef="{{ makeposturl($item) }}">
                            <span class="share-dropdown__icon share-dropdown__icon--whatsapp"></span>
                            <span class="share-dropdown__title">Whatsapp</span>
                        </li>
                        <li class="dropdown-container__item ripple buzz-share-button has-ripple" data-share-type="mail" data-type="news" data-id="{{ $item->id  }}" data-post-url="/shared" data-title="{!! $item->title  !!}" data-sef="{{ makeposturl($item) }}">
                            <span class="share-dropdown__icon share-dropdown__icon--mail"></span>
                            <span class="share-dropdown__title">Email</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </li>
    @if($key ==0 )
        <li class="sidebar-mosts__item ">
            @include('_particles.ads', ['position' => 'Homencolsec', 'width' => 'auto', 'height' => 'auto'])

        </li>
    @endif
@endforeach

