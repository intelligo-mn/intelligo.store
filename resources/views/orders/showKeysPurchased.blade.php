<div class="modal-content">
	<div class="modal-header">
        <button ng-click="$close(false)" type="button" class="close"><span aria-hidden="true">&times;</span></button>
         {{ trans('store.keys_purchased') }}
    </div>
    <div class="modal-body show-virtuals-keys" ng-init="thisShow=true">
        <div class="container-fluid panel panel-default">
            <div class="row"  ng-show="show">
                <div class="col-lg-12 alert [[class]]">[[message]]</div>
            </div>
            <div class="panel-heading">
                <strong>{{ trans('product.inputs_view.name').' ' }}</strong>[[info.name]]<br/>
                <strong>{{ trans('product.inputs_view.description').' ' }}</strong>[[info.des]]<br/>
                <strong>{{ trans('product.showDetailsProductInCart_view.quantity').' ' }}</strong>[[info.num]]<br/>
            </div>
            <div ng-class="virtual.type" class="virtuals panel-body">
                <strong>{{ trans('product.globals.view_details') }}</strong>
            </div>
        	<ul class="list-group">
        		<li ng-repeat="row in details" class="list-group-item">
        			<div>[[row.title]]</div>
                    <ul>
                        <li ng-repeat="key in row.keys">[[key]]</li>
                    </ul>
        		</li>
        	</ul>
		</div>
	</div>
</div>