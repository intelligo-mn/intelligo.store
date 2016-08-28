<div class="modal-content">
	<div class="modal-header">
		<button ng-click="$close(false)" type="button" class="close"><span aria-hidden="true">&times;</span></button>
		{{ trans('product.showKeysVirtuals_view.list_keys') }}
	</div>
	<div class="modal-body list-keys" ng-init="thisShow=true">
		<div class="container-fluid">
			<div class="row"  ng-show="show">
                <div class="col-lg-12 alert [[class]]">[[message]]</div>
            </div>
			<ul ng-repeat="key in keys" class="s[[key.status]] clearfix" ng-show="thisShow">
				<li>&nbsp;</li>
				<li>[[key.key]]</li>
				<li>&nbsp;<span class="glyphicon fui-cross" title="{{ trans('globals.delete') }}" ng-click="change([[key.id]]);thisShow=false"></span></li>
			</ul>
		</div>
	</div>
</div>