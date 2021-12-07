@if($lastFeatures)
    <ul class="items_lists res-lists">
        @foreach($lastFeatures as $key => $item)

            @include('._particles._lists.items_list', ['listtype' => 'bolb titb','descof' => 'on', 'featuredon' => 'on', 'linkcolor' => 'default'])

            @if($key==0)
                @foreach(\App\Widgets::where('type', 'Homencolfirst')->where('display', 'on')->get() as $widget)
                    {!! $widget->text !!}
                @endforeach
            @endif

            @if($key ==4 and $DB_PLUGIN_VIDEOS == 'on')
    </ul>
    <div class="col-video">
        <div class="colheader rosy">
            <h1>{{ trans('index.mostrecent', ['type' => trans('index.videos') ]) }}</h1>
        </div>
        <div class="featured-videos">
            <ul class="items_lists square">

                @foreach($lastvideoscol1->slice(0, 3) as $item)
                    @include('._particles._lists.items_list', ['listtype' => 'big_image tits','descof' => 'off', 'featuredon' => 'on', 'metaof' => 'off','video' => 'on', 'linkcolor' => 'default'])
                @endforeach
            </ul>

        </div>
    </div>
    <ul class="items_lists res-lists">
        @endif


        @if($key ==9  and $DB_PLUGIN_POLLS == 'on')
    </ul>
    <div class="col-poll">
        <div class="colheader trend">
            <h1>{{  trans('index.trend', ['type' => trans('index.polls') ]) }}</h1>
        </div>
        <ul class="items_lists square s-two">

            @foreach($lastpoll->slice(0, 2) as $item)
                @include('._particles._lists.items_list', ['listtype' => 'big_image bolb titb','featuredon' => 'on', 'metaof' => 'off', 'descof' => 'off', 'linkcolor' => 'default'])
            @endforeach
        </ul>

    </div>
    <ul class="items_lists res-lists">
        @endif
        @endforeach
    </ul>


        @if($lastFeatures->nextPageUrl())
            <a href="{{ $lastFeatures->nextPageUrl() }}" class="page-next btn-more"> {{ trans('updates.loadmore') }} </a>
        @endif

@endif