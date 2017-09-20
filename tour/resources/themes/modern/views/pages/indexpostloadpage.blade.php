@foreach($lastFeatures as $k => $item)
    <div class="content-timeline__item is-active">


        @if( $item->type=='quiz')
            <div class="badge quiz"><div class="badge-img"></div></div>
        @elseif($item->featured_at !== null)
            <div class="badge featured"><div class="badge-img"></div></div>
        @else
            {{  reaction_icon_get($item) }}
        @endif

        <div class="content-timeline--right">
            <div  class="content-timeline__link clearfix">
                <div class="content-timeline__media">
                    <figure class="content-timeline__media__image">
                        <a class="clearfix" style="display:block" href="{{ makeposturl($item) }}"   title="{!! $item->title  !!}">
                        <img data-original="{{ makepreview($item->thumb, 's', 'posts') }}" class="lazy" alt="{!! $item->title  !!}" width="262" height="147" style="display: inline;">
                        </a>
                    </figure>
                </div>
                <div class="content-timeline__detail">
                    <div class="content-timeline__detail__container">
                        <div class="content-timeline__detail__social-media hide-phone" style="position: absolute;right:10px;top:2px">
                            <span class="has-dropdown" data-target="share-dropdown--{{ $item->id  }}" data-align="right-bottom"><i class="material-icons">&#xE5D4;</i></span>
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
                        <a href="{{ makeposturl($item) }}"   title="{!! $item->title  !!}">
                            <h3 class="content-timeline__detail__title" style="margin-right:10px">{!! $item->title  !!}</h3>
                        </a>

                        <div class="content-timeline__detail--top hide-mobile">
                            <p class="content-timeline__detail__desc">{{ str_limit($item->body, 75) }}</p>
                        </div>

                        <div class="content-timeline__detail--bottom">
                            <div class="content-timeline__detail__date share_counts ">
                                <span class="facebook"><div class="buzz-icon buzz-facebook"></div>{{ isset($item->shared->facebook) ? $item->shared->facebook : '0'}}</span>
                                <span class="twitter"><div class="buzz-icon buzz-twitter"></div>{{ isset($item->shared->twitter) ? $item->shared->twitter : '0'}}</span>
                                <span class="whatsapp"><div class="buzz-icon buzz-whatsapp"></div>{{ isset($item->shared->whatsapp) ? $item->shared->whatsapp : '0'}}</span>
                            </div>

                            <div class="content-timeline__detail__date share_counts " >{{ $DB_USER_LANG=="en" ? $item->created_at->format('j M, h:i A') : $item->created_at->diffForHumans() }}</div>

                        </div>

                    </div>
                </div>
              </div>

        </div>
    </div>
    @if(count($lastvideoscol1)>0 and $k==4  and getenvcong('p-buzzyvideos') == 'on')
        <div class="colheader rosy">
            <h1>{{ trans('index.mostrecent', ['type' => trans('index.videos') ]) }}</h1>
        </div>

        <div class="sidebar-block  clearfix" style="margin-top: 10px;">
            <ol class="sidebar-mosts sidebar-mosts--readed column_list tree_column">
                @foreach($lastvideoscol1->slice(0, 3) as $itema)
                    <li class="sidebar-mosts__item ">
                        <a class="sidebar-mosts__item__link" href="{{ makeposturl($itema) }}" title="{{ $itema->title }}">
                            <figure class="sidebar-mosts__item__body">
                                <div class="sidebar-mosts__item__image">
                                    <img class="sidebar-mosts__item__image__item lazy" data-original="{{ makepreview($itema->thumb, 's', 'posts') }}" alt="{{ $itema->title }}">
                                </div>
                                <figcaption class="sidebar-mosts__item__caption">
                                    <h3 class="sidebar-mosts__item__title">{{ $itema->title }}</h3>
                                </figcaption>
                                <div class="content-timeline__detail--bottom">
                                    <div class="content-timeline__detail__date share_counts hide-phone" style="margin-left: -5px">
                                        <span class="facebook"><i class="buzz-icon buzz-facebook"></i>{{ isset($item->shared->facebook) ? $item->shared->facebook : '0'}}</span>
                                        <span class="twitter"><i class="buzz-icon buzz-twitter"></i>{{ isset($item->shared->twitter) ? $item->shared->twitter : '0'}}</span>
                                        <span class="whatsapp"><i class="buzz-icon buzz-whatsapp"></i>{{ isset($item->shared->whatsapp) ? $item->shared->whatsapp : '0'}}</span>
                                    </div>

                                </div>
                            </figure>
                        </a>
                    </li>
                @endforeach
            </ol>
        </div>

    @endif

    @if(count($lastpoll)>0 and $k==9  and getenvcong('p-buzzypolls') == 'on')
        <div class="colheader trend">
            <h1>{{  trans('index.trend', ['type' => trans('index.polls') ]) }}</h1>
        </div>
        <div class="sidebar-block  clearfix" style="margin-top: 10px;">
            <ol class="sidebar-mosts sidebar-mosts--readed column_list sec_column">
                @foreach($lastpoll->slice(0, 2) as $itema)

                    <li class="sidebar-mosts__item ">
                        <a class="sidebar-mosts__item__link" href="{{ makeposturl($itema) }}" title="{{ $itema->title }}">
                            <figure class="sidebar-mosts__item__body">
                                <div class="sidebar-mosts__item__image">
                                    <img class="sidebar-mosts__item__image__item lazy" data-original="{{ makepreview($itema->thumb, 's', 'posts') }}" alt="{{ $itema->title }}">
                                </div>
                                <figcaption class="sidebar-mosts__item__caption">
                                    <h3 class="sidebar-mosts__item__title">{{ $itema->title }}</h3>
                                </figcaption>
                                <div class="content-timeline__detail__date share_counts hide-phone" style="margin-left: -3px">
                                    <span class="facebook"><i class="buzz-icon buzz-facebook"></i>{{ isset($item->shared->facebook) ? $item->shared->facebook : '0'}}</span>
                                    <span class="twitter"><i class="buzz-icon buzz-twitter"></i>{{ isset($item->shared->twitter) ? $item->shared->twitter : '0'}}</span>
                                    <span class="whatsapp"><i class="buzz-icon buzz-whatsapp"></i>{{ isset($item->shared->whatsapp) ? $item->shared->whatsapp : '0'}}</span>
                                </div>
                            </figure>
                        </a>
                    </li>
                @endforeach
            </ol>
        </div>

    @endif
    @if($k==0)
        @include('_particles.ads', ['position' => 'Homencolfirst', 'width' => 'auto', 'height' => 'auto'])

    @endif

@endforeach
