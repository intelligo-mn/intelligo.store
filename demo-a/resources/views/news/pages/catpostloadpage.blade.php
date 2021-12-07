<ul class="items_lists res-lists">
    @foreach($lastItems as $item)
        @include('._particles._lists.items_list', ['listtype' => 'bolb titb','descof' => 'on', 'setbadgeof' => 'off', 'linkcolor' => 'default'])
    @endforeach
        @if($lastItems->nextPageUrl())
    <li>
        <a href="{{ $lastItems->nextPageUrl() }}" class="page-next btn-more"> {{ trans('updates.loadmore') }} </a>

    </li>
        @endif
</ul>

