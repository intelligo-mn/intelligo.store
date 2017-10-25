@if(isset($lastTrendingVideos))
    <div class="sidebar-block">
        <div class="colheader trend">
            <h1>{{ $HomeColSec3Tit1 > "" ? $HomeColSec3Tit1 : trans('index.latest', ['type' => trans('index.videos') ]) }}</h1>
        </div>
        <ol class="sidebar-trend">
            @foreach($lastTrendingVideos as $item)
                <li class="sidebar-trend__item">
                    <a class="sidebar-trend__item__link" href="{{ makeposturl($item) }}" title="{{ $item->title }}" >
                        <figure class="sidebar-trend__item__body">
                            <img class="sidebar-trend__item__image lazy" data-original="{{ makepreview($item->thumb, 's', 'posts') }}" alt="{{ $item->title }}" width="300" height="169">
                            <figcaption class="sidebar-trend__item__caption">
                                <div class="sidebar-trend__item--bottom">
                                    <span class="sidebar-trend__item__icon"><i class="material-icons">&#xE037;</i></span>
                                    <h3 class="sidebar-trend__item__title">{{ $item->title }}</h3>
                                </div>
                            </figcaption>
                        </figure>
                    </a>
                </li>
            @endforeach
        </ol>
    </div>
@endif