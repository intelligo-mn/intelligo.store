<div class="modal-content">
	<div class="modal-header">
		<button ng-click="$close(false)" type="button" class="close"><span aria-hidden="true">&times;</span></button>
		{{ trans('product.products_group_for') }}:&nbsp;{{ $product->name }}
	</div>
	<div class="modal-body" stop-event="touchend">
		<div class="container-fluid">
			<input type="hidden" id="group_id" value="{{ $product->id }}">

			@include('partial.search_box',['suggest'  => 1,
										   'angularController' => 'AutoCompleteGroupCtrl',
										   'idSearch' => 'searchGroup',
										   'group' => is_null($product->products_group)? $product->id : $product->products_group])
			<div class="row">&nbsp;</div>
			<table class="table">
		      <caption><strong>{{ trans('product.products_group_list') }}</strong></caption>
		      <thead>
		        <tr>
		          <th>#</th>
		          <th>{{ trans('product.products_name') }}</th>
		          <th>{{ trans('product.prices') }}</th>
		          <th></th>
		        </tr>
		      </thead>
		      <tbody class="grouped_list" ng-controller="listGroupCtrl">
		      @foreach($product->group as $group)
		        <tr id="product_{{ $group->id.'_'.$product->id }}">
		          <th scope="row">{{ $group->id }}</th>
		          <td>{{ $group->name }}</td>
		          <td>{{ Utility::showPrice($group->price) }}</td>
		          <td>
		          	<button class="btn btn-danger btn-sm" ng-click="deleteFromGroup('{{ $group->id.'_'.$product->id }}')">
		          		{{ trans('product.delete_from_group') }} <span class="glyphicon glyphicon-trash"></span>
		          	</button>
		          </td>
		        </tr>
			  @endforeach
		      </tbody>
		    </table>
		</div>
	</div>
</div>