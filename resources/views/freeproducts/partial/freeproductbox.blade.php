<div class="container-fluid marketing">
   	<div class="row">
        <div class="product-box col-lg-3 col-md-4 col-sm-6 col-xs-12 ng-hide" ng-repeat="freeproduct in freeproducts" ng-show="freeproducts">
            <div class="thumbnail clearfix" >
                
                <div>
                    <span class="label label-success" ng-show="freeproduct.status==1">{{ trans('globals.active') }}</span>
                    <span class="label label-warning" ng-show="freeproduct.status==0">{{ trans('globals.inactive') }}</span>
                </div>
                
                <carousel interval="myInterval">
                    <slide ng-repeat="detail in freeproduct.details[0]">
                        <img class="product-img" src="[[ detail.product.features.images[0] ]]" alt="[[ product.name ]]">
                        <div class="carousel-caption">
                            <h6><a href="[[ toUrlShowProduct(detail.product.id) ]]">[[ detail.product.name ]]</a></h6>
                            <p>{{ trans('freeproduct.price_original') }} [[ detail.product.price | thousandSuffix ]] {{ trans('store.price') }}</p>
                        </div>
                    </slide>
                </carousel>
                
                <a href="[[ urlShow.replace('freeproductId', freeproduct.id) ]]">
                    <h6 class="product-name">[[ freeproduct.description | limitTo:150]]</h6>
                </a>
                <p>
                    <strong>[[ freeproduct.participation_cost | thousandSuffix ]] <small>{{trans('store.price')}}</small></strong>
                    <a class="btn-xs btn-default pull-right" href="[[ urlShow.replace('freeproductId', freeproduct.id) ]]" role="button">{{ trans('product.globals.view_details') }} &raquo;</a>
                </p>
            </div>
        </div>
   	</div>
    
	@if (isset($freeproducts))
		{!! $freeproducts->appends(Request::only(['filter']))->render() !!}
	@endif

</div>