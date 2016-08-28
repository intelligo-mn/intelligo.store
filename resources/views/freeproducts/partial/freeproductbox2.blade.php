<div class="product-box col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="panel panel-default">
        <div class="free-products-box-sign">
            <span>{{ trans('globals.free') }}</span>
        </div>
        
        <div class="panel-heading">
           {{ trans('globals.due_date') }}&nbsp;{{ Carbon\Carbon::parse($freeproduct['start_date'])->format('F j, Y') }}
        </div>

        <ul class="list-group">
            <li class="list-group-item" style="font-size: 12px;"><span class="fui-user icon-color"></span>&nbsp;{{ trans('freeproduct.min_participants') }}:&nbsp;<strong>{{ \Utility::thousandSuffix($freeproduct['min_participants']) }}</strong></li>
            <li class="list-group-item" style="font-size: 12px;"><span class="fui-user icon-color"></span>&nbsp;{{ trans('freeproduct.max_participants') }}:&nbsp;<strong>{{ \Utility::thousandSuffix($freeproduct['max_participants']) }}</strong></li>
            <li class="list-group-item" style="font-size: 12px;"><span class="fui-radio-unchecked icon-color"></span>&nbsp;{{ trans('freeproduct.participation_cost') }}:&nbsp;<strong>{{ \Utility::thousandSuffix($freeproduct['participation_cost']) }}</strong></li>
            <li class="list-group-item panel-default">Package</li>
            <li class="list-group-item clearfix" style="font-size: 12px;">
                {{-- Products in freeproduct --}}
                @foreach ($freeproduct['products'] as $product)
                    <a href="{{ route('products.show',[$product['id']]) }}" class="thumbnail col-xs-3 col-md-4 col-lg-2">
                        <img src='{{ $product["features"]["images"][0] }}' class="img-rounded" alt="{{ $product['name'] }}">
                    </a>
                @endforeach
            </li>
            <li class="list-group-item  panel-default">Description</li>
            <li class="list-group-item">
                {{ $freeproduct['description'] }}
                <hr>
                <div class="clearfix">
                    <small>
                        <a href="{{ route('freeproducts.show',[$freeproduct['id']]) }}" class="pull-right">
                            <span class="fui-search icon-color"></span>&nbsp;{{ trans('globals.see_more') }}
                        </a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</div>
