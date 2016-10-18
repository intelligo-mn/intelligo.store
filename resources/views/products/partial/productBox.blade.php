{{-- col beging   --}}
<?php
if (isset($productSuggestion)) {
    $auxProduct=isset($product) ? $product : '';
    $product=$productSuggestion;
}
 ?>
<div class="col-xs-6 col-sm-6 col-md-3 clearfix product-overflow">

    {{-- product box begin --}}
    <div class="thumbnail clearfix product-overflow" ng-controller = "ProductBox">

        <div class="product-price">
            {!! \Utility::showPrice($product['price']) !!}
        </div>

        <div class="product-reviews @if (!$product['rate_val']) hide @endif">
            {!! \Utility::thousandSuffix($product['rate_val']) !!}
            <small>
                {{ trans_choice('store.review', $product['rate_val']) }}
            </small>
        </div>

        @if ($product['type'] == 'freeproduct')
            <div class="free-products-box-sign"><span>{{ trans('globals.free') }}</span></div>
        @endif

        <div class="product-img-box" ng-click = "goTo('{{ route('products.show',[$product['id']]) }}')">
            @if (isset($product["features"]["images"][0]))
                <img  src='{{ $product["features"]["images"][0] }}?h=250' alt="{{ $product['name'] }}">
            @else
                <img  src='/img/no-image.jpg'  alt="{{ $product['name'] }}">
            @endif
        </div>

        <h6 class="product-name">
            <a href = "{{ route('products.show',[$product['id']]) }}">
                {{ $product['name'] }}
            </a>
        </h6>

        <p class="product-description">{{ str_limit($product['description'], 100,'...') }}</p>

        {{-- actions begin --}}
        <div class="product-actions">

            {{-- add to cart (only products not free)  --}}
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 wrapper" ng-click="submit('#add-{{ $product['id'] }}')">
                <div class = "glyphicon glyphicon-shopping-cart option" >
                    @if ($product['type'] != 'freeproduct')
                        {!! Form::open(['method' => 'put', 'route' => ['orders.add_to_order','cart', $product['id']], 'id' => 'add-'.$product['id'] ]) !!}
                        {!! Form::close() !!}
                    @endif
                </div>
            </div>

            {{-- wish list (only products not free) --}}
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 wrapper"  ng-click = "goTo('{{ route('orders.add_to_order',['wishlist', $product[($product['type']=='freeproduct')?'parent_id':'id']]) }}')">
                <div class="glyphicon glyphicon-heart option"></div>
            </div>

            {{-- view --}}
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 wrapper" ng-click = "goTo('{{ route('products.show',[$product['id']]) }}')">
                <div class="glyphicon glyphicon-eye-open option"></div>
            </div>

        </div>
        {{-- actions end --}}

    </div>
    {{-- product box end --}}

</div>
{{-- col end   --}}
<?php
if (isset($productSuggestion)) {
    $product=$auxProduct;
}
 ?>