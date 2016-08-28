<div class="modal-content">
	<div class="modal-header">
        <button ng-click="$close(false)" type="button" class="close"><span aria-hidden="true">&times;</span></button>
        {{ trans('product.showDetailsProductInCart_view.product_details') }}
    </div>
	<div class="modal-body product-details" ng-init="thisShow=true">
		<div class="container-fluid">
			<div class="row"  ng-show="show">
                <div class="col-lg-12 alert [[class]]">[[message]]</div>
            </div>
			<div class="row" ng-show="per">
                <div class="col-md-3">
                	<img class="thumbnail" ng-src="[[ product.features.images[0] ]]" alt="[[ product.name ]]" >
                </div>
                <div class="col-md-9">
                    <a href="{{ action('ProductsController@index') }}/[[ product.id ]]">
                	   <h6>[[product.name]]</h6>
                    </a>
                	<div>{{ trans('product.showDetailsProductInCart_view.sold_by') }}: <span>[[product.seller]]</span></div>
                	<div>
                		<ul>
                			<li>{{ trans('product.globals.price') }}: <strong>[[product.price | number:0 ]]</strong></li>
                            <li>
                                {{ trans('store.condition') }}: <strong>[[ product.condition ]]</strong> <span ng-attr-class="[[product.stock<= product.low_stock && 'label label-warning'|| 'label label-success' ]]"><span ng-show="product.stock <= product.low_stock">{{ trans('store.just') }} [[ product.stock ]]</span> {{ trans('store.inStock') }}</span>
                            </li>
                			<li>{{ trans('product.showDetailsProductInCart_view.quantity') }}: <strong>[[order.quantity]]</strong></li>
                			<li>{{ trans('globals.sub').' '.trans('globals.total') }}: <strong>[[order.quantity * product.price | number:0]]</strong></li>
                            <li>{{ trans('product.globals.description') }}: <small>[[product.description]]</small></li>
                		</ul>
                	</div>
                </div>
            </div>
            <div ng-show="virtual" ng-class="virtual.type" class="virtuals">
            	<ul class="key">
            		<li>[[virtual.title]]</li>
            		<li ng-repeat="key in virtual.data" id="[[key.email]]">
            			<div class="col-md-9"><strong class="num">[[key.num]]</strong> {{ trans('product.showDetailsProductInCart_view.keys').' '.trans('globals.to').' ' }}[[key.email]]</div>
            			<div class="col-md-3">
            				<span class="glyphicon glyphicon-plus" ng-click="increaseKey(key.email)"></span>
            				<span class="glyphicon glyphicon-minus" ng-click="decrementKey(key.email)"></span>
            				<span class="glyphicon fui-cross" ng-click="removeKey(key.email)"></span>
            			</div>
            		</li>
            	</ul>
            </div>
		</div>
	</div>
</div>