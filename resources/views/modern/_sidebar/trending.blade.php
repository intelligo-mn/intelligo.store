@if(count($lastTrending) > 0)
    <div class="sidebar-block clearfix">
        <div class="colheader rosy">
            <h1>{{ trans('index.today') }} {!! trans('index.top', ['type' => '<span style="color:#d92b2b">'.$name.'</span>' ]) !!}</h1>
        </div>
        <br>
        <ol class="sidebar-mosts sidebar-mosts--readed">
            @foreach($lastTrending as $item)
                <li class="sidebar-mosts__item ">
                    <a class="sidebar-mosts__item__link" href="{{ makeposturl($item) }}" title="{{ $item->title }}">
                        <figure class="sidebar-mosts__item__body">
                            <div class="sidebar-mosts__item__image">
                                <img class="sidebar-mosts__item__image__item lazy" data-original="{{ makepreview($item->thumb, 's', 'posts') }}" alt="{{ $item->title }}"  width="300" height="169">
                            </div>
                            <figcaption class="sidebar-mosts__item__caption">
                                <div class="sidebar-mosts__item__view">
                                    <span class="sidebar-mosts__item__view__count">{{ isset($item->popularityStats->one_day_stats) ? number_format($item->popularityStats->one_day_stats) : "0" }}</span>
                                    <span class="sidebar-mosts__item__view__icon"><i class="material-icons">&#xE8E5;</i></span>
                                </div>
                                <h3 class="sidebar-mosts__item__title">{{ $item->title }}</h3>
                            </figcaption>

                        </figure>
                    </a>
                </li>
            @endforeach
        </ol>
    </div>
@endif