@extends("amp.app")
@section("header")
    <title>{{ getenvcong('sitetitle') }}</title>
    <link rel="canonical" href="{{ url() }}"/>

@endsection
@section("content")
        <div class="amp-featured-slider">

            <amp-carousel height="220"
                          layout="fixed-height"
                          type="carousel">
                @foreach($lastFeaturestop as $item)
                    <a href="{{ url('amp/'.$item->type.'/'.$item->id) }}">
                        <amp-img src="{{ makepreview($item->thumb, 's', 'posts') }}"
                         width="300"
                         height="220"
                         alt=" {!! $item->title  !!}"></amp-img>
                        <h3 class="title">
                                {!! $item->title  !!}
                        </h3>
                    </a>
                @endforeach

            </amp-carousel>


        </div>
        <div class="posts">
            @foreach($lastNews as $k => $item)
            <article class="posts-item clearfix">
                <div class="post-thumbnail">
                   <a href="{{ url('amp/'.$item->type.'/'.$item->id) }}">
                         <amp-img width="150" height="100" src="{{ makepreview($item->thumb, 's', 'posts') }}" class="attachment-amp-small size-amp-small wp-post-image" alt=""></amp-img>
                   </a>
                </div>
                <h3 class="post-title">
                    <a href="{{ url('amp/'.$item->type.'/'.$item->id) }}">
                        {!! $item->title  !!}
                    </a>
                </h3>
                <a class="post-read-more" href="{{ url('amp/'.$item->type.'/'.$item->id) }}">
                    Read more <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
            </article>
             @endforeach
        </div>

        <nav role="navigation">
            {!! $lastNews->render() !!}
        </nav>
@endsection