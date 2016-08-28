@if(isset($elements)&&count($elements))
@forelse($elements as $cat)
    <li class="list-group-item" ng-show="(!search||(('{{ strtolower($cat->name) }}').indexOf(search.toLowerCase())>=0))">
        <div class="row">
            <div class="col-md-1"><span class="label label-default visible-xs-inline">#ID:</span> {{ $cat->id }}</div>
            <div class="col-md-3"><span class="label label-default visible-xs-inline">{{ trans('product.inputs_view.name') }}:</span>  <a href="/wpanel/category/{{ $cat->id }}">{{ $cat->name }}</a></div>
            <div class="col-md-2">
                <span class="label label-default visible-xs-inline">{{ trans('globals.status') }}:</span>
                @if($cat->status==1)
                    <span class="label label-success">{{ $cat->status==1?trans('globals.active'):'' }}</span>
                @else
                    <span class="label label-danger">{{ trans('globals.inactive') }}</span>
                @endif
            </div>
            <div class="col-md-2"><span class="label label-default visible-xs-inline">{{ trans('store.father') }}:</span>
                @if($cat->hasParent())
                    <a href="/wpanel/category/{{ $cat->id }}">{{ $cat->parent->name }}</a>
                @endif
             </div>
            <div class="col-md-2"><span class="label label-default visible-xs-inline">{{ trans('globals.type') }}:</span> {{ $cat->type }}</div>
            <div class="col-md-2"><a href="{{ route('wpanel.category.edit',$cat->id) }}">Edit</a></div>
        </div>
    </li>
    @if($cat->hasChildren())
        @include('categories.list_childs', ['elements' => $cat->children])
    @endif
@empty
    <li class="list-group-item">No items</li>
@endforelse
@elseif(isset($categories))
    @if(isset($title))
        <h1>{{ $title }}</h1>
    @endif
    <ul class="list-group">
        <li class="list-group-item list-group-item-info hidden-xs">
            <div class="row">
                <div class="col-md-1">#ID</div>
                <div class="col-md-3">{{ trans('product.inputs_view.name') }}</div>
                <div class="col-md-2">{{ trans('globals.status') }}</div>
                <div class="col-md-2">{{ trans('store.father') }}</div>
                <div class="col-md-2">{{ trans('globals.type') }}</div>
                <div class="col-md-2">{{ trans('globals.action') }}</div>
            </div>
        </li>
        @include('categories.list_childs', ['elements' => $categories])
        {{ $elements=NULL }}
    </ul>
@endif
