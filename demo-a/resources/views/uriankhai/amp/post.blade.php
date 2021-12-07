@extends("amp.app")
@section("header")
    <title>{{ $post->title }}</title>
    <link rel="canonical" href="{{ makeposturl($post) }}" />
    <meta property="fb:app_id" content="{{  getenvcong('facebookapp') }}" />
    <meta property="og:type"   content="website" />
    <meta property="og:site_name" content="{{  getenvcong('sitename') }}">
    <meta property="og:title" content="{{ $post->title }}">
    <meta property="og:description" content="{{ str_limit(str_replace('"', '', $post->body), 150) }}">
    <meta property="og:url" content="{{ makeposturl($post) }}">
    <meta property="og:locale" content="{{  getenvcong('sitelanguage') }}">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="{{ $post->title }}">
    <meta name="twitter:url" content="{{ makeposturl($post) }}">
    <meta name="twitter:description" content="{{ str_limit(str_replace('"', '', $post->body), 150) }}">
    <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>
    <script async custom-element="amp-twitter" src="https://cdn.ampproject.org/v0/amp-twitter-0.1.js"></script>
    <script async custom-element="amp-instagram" src="https://cdn.ampproject.org/v0/amp-instagram-0.1.js"></script>
    <script async custom-element="amp-dailymotion" src="https://cdn.ampproject.org/v0/amp-dailymotion-0.1.js"></script>
    <script async custom-element="amp-vimeo" src="https://cdn.ampproject.org/v0/amp-vimeo-0.1.js"></script>
    <script custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js" async></script>
    <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
    <script async custom-element="amp-sticky-ad" src="https://cdn.ampproject.org/v0/amp-sticky-ad-1.0.js"></script>


@endsection
@section("content")
    <div itemscope itemtype="http://schema.org/NewsArticle">
        <meta itemprop="mainEntityOfPage" content="{{ makeposturl($post) }}">
        <h1 itemprop="headline" class="headline">{{ $post->title }}</h1>
        <meta itemprop="inLanguage" content="{{  getenvcong('sitelanguage') }}" />
        <meta itemprop="genre" content="news" name="medium" />

        <div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
            <div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">
                <meta itemprop="url" content="{{ url(makepreview($post->user->icon , 's', 'members/avatar')) }}">
                <meta itemprop="width" content="80">
                <meta itemprop="height" content="80">
            </div>
            <meta itemprop="name" content="{{ $post->user->username }}">
        </div>

        <div class="title-bottom">
            <div class="author-container" itemprop="author" itemscope itemtype="http://schema.org/Person">
                <span class="author-name" itemprop="name">{{ $post->user->username }}</span>
            </div>
            <div class="timestamp-container">
                <time itemprop="datePublished" class="timestamp" datetime="{{ $post->published_at->toW3cString() }}"> / {{ $post->published_at->diffForHumans() }}</time>
                <meta itemprop="dateModified" content="{{ $post->updated_at->toW3cString() }}"/>
            </div>
        </div>

        <div itemprop="image" itemscope itemtype="https://schema.org/ImageObject" class="news-img">
            <amp-img src="{{ url(makepreview($post->thumb, 'b', 'posts')) }}" alt="{{ $post->title }}" width="728" height="410" layout="responsive"></amp-img>
            <meta itemprop="url" content="{{ url(makepreview($post->thumb, 'b', 'posts')) }}" />
            <meta itemprop="width" content="728" />
            <meta itemprop="height" content="410" />
        </div>

        <div itemprop="description" class="content-description">{!! nl2br($post->body) !!}</div>

        <div class="social-box">
            <amp-social-share type="facebook"
                              data-param-text="{{ $post->title }}"
                              data-param-href="{{ makeposturl($post) }}"
                              data-param-app_id="{{  getenvcong('facebookapp') }}"></amp-social-share>

            <amp-social-share type="twitter"></amp-social-share>

            <amp-social-share type="gplus"></amp-social-share>


            <amp-social-share type="whatsapp"
                              layout="container"
                              data-share-endpoint="whatsapp://send"
                              data-param-text="{{ $post->title }}">
            </amp-social-share>
        </div>

        @include('amp.ads', ['position' => 'PostShareBwAmp', 'width' => '300', 'height' => 'auto'])

        <div itemprop="articleBody" class="content-body">
            @include("amp.entryslists")
        </div>

        @include('amp.ads', ['position' => 'PostBelowAmp', 'width' => '300', 'height' => 'auto'])

    </div>


    <div class="social-box">
        <amp-social-share type="facebook"
                          data-param-text="{{ $post->title }}"
                          data-param-href="{{ makeposturl($post) }}"
                          data-param-app_id="{{  getenvcong('facebookapp') }}"></amp-social-share>

        <amp-social-share type="twitter"></amp-social-share>

        <amp-social-share type="gplus"></amp-social-share>


        <amp-social-share type="whatsapp"
                          layout="container"
                          data-share-endpoint="whatsapp://send"
                          data-param-text="{{ $post->title }}">
        </amp-social-share>
    </div>
    @if(isset($lastFeatures))
    <div class="related-news">
        <h3>{{ trans('index.maylike') }}</h3>
        <div class="related-news__inner clearfix">

            @foreach($lastFeatures as $item)
            <div class="content-card material-shadow--1dp clearfix">
                <a href="{{ url('amp/'.$item->type.'/'.$item->id) }}" title="{{ $item->title }}">
                    <div class="content-card__image">
                        <div class="content-card__image__transparent"></div>
                        <amp-img src="{{ url(makepreview($item->thumb, 'b', 'posts')) }}" alt="{{ $item->title }}" width="728" height="410" layout="responsive">
                            <meta itemprop="url" content="{{ url(makepreview($post->thumb, 'b', 'posts')) }}" />
                            <meta itemprop="width" content="728" />
                            <meta itemprop="height" content="410" />

                        </amp-img>
                    </div>
                    <div class="content-card__detail">
                        <?php $postacatpe = getfirstcat($item->categories); ?>
                        {!! isset($item->categories) && isset($postacatpe) ? '<div class="content-card__category">'.$postacatpe->name. '</div>' : '' !!}
                        <div class="content-card__title">{{ str_limit($item->title, 75) }}</div>
                    </div>
                </a>
            </div>
            @endforeach

        </div>
    </div>
    @endif
@endsection