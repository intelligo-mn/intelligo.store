@if($lastNews)
    <ul class="items_lists">
        @foreach($lastNews as $item)
            @include('._particles._lists.items_list', ['listtype' => 'big_image titm bolb', 'featuredon' => 'on', 'descof' => 'off','linkcolor' => 'blue'])
        @endforeach
    </ul>
@endif