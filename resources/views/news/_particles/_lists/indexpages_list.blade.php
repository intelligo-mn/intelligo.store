@foreach($lastFeatures as $item)
    <ul class="items_lists res-lists">
        @include('._particles._lists.items_list', ['listtype' => 'bolb titb','featuredon' => 'on', 'descof' => 'on','linkcolor' => 'default'])
   </ul>
@endforeach
