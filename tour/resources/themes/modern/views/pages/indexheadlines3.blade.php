
@unless(count($lastFeaturestop)==0)

<section class="headline hide-phone">
    <div class="global-container container" style="padding-top:0 !important;">
        <div style="margin-left:-4px; margin-right:-3px;">
        @foreach($lastFeaturestop->slice(0,3) as $key => $item)
        <article class="headline__blocks @if( $key == 0 ) headline__blocks--large   @else headline__blocks--small @endif" style=" @if( $key == 0 ) width: 66%;    height: 474px;  @else width: 34%;    height: 237px; @endif ">
            <div class="headline__blocks__image" style="background-image: url({{ makepreview($item->thumb, 'b', 'posts') }})"></div>
            <a class="headline__blocks__link" href="{{ makeposturl($item) }}" title="{{ $item->title }}" ></a>
            <header class="headline__blocks__header">
                <h2 class="headline__blocks__header__title @if( $key == 0 ) headline__blocks__header__title--large  @else headline__blocks__header__title--small @endif">{{ $item->title }}</h2>
                <ul class="headline__blocks__header__other">
                    <li class="headline__blocks__header__other__author">{{ $item->user->username }}</li>
                    <li class="headline__blocks__header__other__date"><i class="material-icons"></i> <time datetime="{{ $item->created_at->toW3cString() }}">{{ $item->created_at->diffForHumans() }}</time></li>
                </ul>
            </header>
        </article>
        @endforeach
         <div class="clear"></div>
        </div>
   </div>
</section>
<section class="headline visible-phone">
    <div class="slider" id="headline-slider" data-pagination="true" data-navigation="false">
        <div class="slider__list">
            @foreach($lastFeaturestop->slice(0,4) as $key => $item)
                <article class="slider__item headline__blocks headline__blocks--phone">
                    <div class="headline__blocks__image" style="background-image: url({{ makepreview($item->thumb, 'b', 'posts') }})"></div>
                    <a class="headline__blocks__link" href="{{ makeposturl($item) }}" title="{{ $item->title }}" ></a>
                    <header class="headline__blocks__header">
                        <h2 class="headline__blocks__header__title headline__blocks__header__title--phone">{{ $item->title }}</h2>
                        <ul class="headline__blocks__header__other">
                            <li class="headline__blocks__header__other__author">{{ $item->user->username }}</li>
                            <li class="headline__blocks__header__other__date"><i class="material-icons">&#xE192;</i> <time datetime="{{ $item->created_at->toAtomString() }}">{{ $item->created_at->diffForHumans() }}</time></li>
                        </ul>
                    </header>
                </article>
            @endforeach
        </div>
    </div>
</section>
@endunless
