@if(isset($lastFeatures))
    <div class="row">

<div class="jscroll">
    <ul class="items_lists square">
        @foreach($lastFeatures as $item)
            @include('._particles._lists.items_list', ['listtype' => 'big_image titm bolb','descof' => 'off','featuredon' => 'on', 'itembodyheight' => '50px', 'metaof' => 'off', 'linkcolor' => 'default'])
        @endforeach

            @if($lastFeatures->nextPageUrl())
                <li class="show-more">
                    <a href="{{ $lastFeatures->nextPageUrl() }}" class="page-next"></a>
                </li>
            @endif
    </ul>
</div>
</div>
@endif