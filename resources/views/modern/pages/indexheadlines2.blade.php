@unless(count($lastFeaturestop)==0)
    <div class="headline-articles headline-slider headline-articles--wide">
        <div class="headline-articles__container headline-slider__container">
            @foreach($lastFeaturestop as $item)
                <div class="headline-articles__box headline-articles__box--news headline-slider__box">
                    <a href="{{ makeposturl($item) }}" title="{{ $item->title }}" >
                        <figure class="headline-articles__image">
                            <img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="{{ $item->title }}" width="525" height="295">
                        </figure>
                        <div class="headline-articles__content">
                            <div class="headline-articles__content__row">
                                <div class="headline-articles__content__time" style="margin:0">
                                    <time  style="padding:0" datetime="{{ $item->created_at->toW3cString() }}">{{ $item->created_at->diffForHumans() }}</time>
                                </div>
                            </div>
                            <h3 class="headline-articles__content__title">
                                {{ $item->title }}
                            </h3>
                        </div>
                    </a>
                </div>
            @endforeach
        </div>
        <i class="headline-articles__navigation headline-articles__navigation--prev headline-slider__navigation headline-slider__navigation--prev material-icons">&#xE314;</i>
        <i class="headline-articles__navigation headline-articles__navigation--next headline-slider__navigation headline-slider__navigation--next material-icons">&#xE315;</i>
    </div>
@endunless