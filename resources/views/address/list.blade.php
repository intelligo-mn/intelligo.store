@extends('layouts/master')

@section('navigation') @parent @stop

@include('partial.message')

@section('breadcrumbs')
	@parent
    {!! Breadcrumbs::render('shippingAddresses') !!}
@stop

@section('content')
	@parent

	@section('panel_left_content')
		@include('user.partial.menu_dashboard')
	@stop

	@section('center_content')

		<div class="page-header">
            <h5>{{ trans('address.my_addresses') }}</h5>
        </div>

        <div class="row">
            <div class="col-md-12 text-right">

        		<button ng-controller="ModalCtrl" ng-click="modalOpen({templateUrl:'/user/address/create',controller:'AddressesControllerModal', size: 'md'})" class="btn  btn-sm btn-info"><span class="glyphicon glyphicon-plus"></span>&nbsp;{{ trans('address.add') }}</button>

				@if(isset($defaultId) && $defaultId != '')
                	<a class="btn btn-success btn-sm" href="/user/orders/checkOut/address/{{ $defaultId }}">
						<span class="glyphicon glyphicon-ok"></span>&nbsp;
                		{{ trans('address.use_selected') }}
                	</a>
                @endif

            </div>
        </div>

        <div class="row">&nbsp;</div>

		{{-- addresses list --}}
		<div class="row">

			@if (count($addresses) == 0)
				<div class="col-lg-12">
					<div class="alert alert-warning">
						<strong> <span class="fui-location"></span> {{ trans('address.no_registered') }}.</strong>
						<div class="row">&nbsp;</div>
						<div class="row">
							<div class="col-lg-12">
								{{ trans('address.no_registered_instructions') }}
								<a href="javascript:void(0)" ng-controller="ModalCtrl" ng-click="modalOpen({templateUrl:'/user/address/create',controller:'AddressesControllerModal',resolve:'address', size: 'md'})">{{ trans('globals.click_here') }}</a>
							</div>
						</div>
					</div>
				</div>
			@else

				@foreach ($addresses as $address)

					<div class="col-lg-4">

						<div class="panel @if ($address->default == '1') panel-success @else panel-primary @endif">

							<div class="panel-heading">
								<strong>
									{{ $address->name_contact }}&nbsp;
									@if ($address->default == '1')
										<span class="fui-check text-success"></span>
									@endif
								</strong>
							</div>

							<div class="panel-body">
								<address>
									{{ $address->line1 }}<br>
									@if (trim($address->line2) != '')
										<span>{{ $address->line2 }}<br></span>
									@endif
									{{ $address->city.', '.$address->state }}<br>
									{{ $address->country }}<br>
									<hr>
									<span class ="glyphicon glyphicon-phone-alt"></span>&nbsp;
									{{ $address->phone }}
									<br>
								</address>
							</div>

							<div class="panel-footer" ng-controller = "AddressesController">

								@if ($address->default == 0)
									<button ng-click="deleteAddress('{{ $address->id }}')" class="btn btn-danger btn-sm">
										<span class="glyphicon glyphicon-trash"></span>&nbsp;
										{{ trans('globals.delete') }}
									</button>
									<button ng-click="setDefaultAddress('{{ $address->id }}')" class="btn btn-info btn-sm">
										<span class="glyphicon glyphicon-pushpin"></span>&nbsp;
										{{ trans('address.make_default_1') }}
									</button>
								@endif

								<button ng-controller="ModalCtrl" ng-click="modalOpen({templateUrl:'/user/address/{{ $address->id }}/edit', size: 'md', controller:'AddressesControllerModal' })" class="btn btn-success btn-sm">
									<span class="glyphicon glyphicon-edit"></span>&nbsp;
									{{ trans('globals.edit') }}
								</button>

								@if(isset($defaultId) && $defaultId != '')
                                    <a class="btn btn-primary btn-sm" href="/user/orders/checkOut/address/{{ $address->id  }}">
										<span class="glyphicon glyphicon-pushpin"></span>&nbsp;
                                    	{{ trans('address.use_this') }}
                                    </a>
                                @endif

							</div>

						</div>

					</div>

				@endforeach

			@endif

		</div>

	@stop

@stop

@section('scripts')
    @parent
    <script>
         (function(app){

			app.controller('AddressesController',['$scope','$http', '$window', 'PassInfo', function($scope, $http, $window, PassInfo){

				$scope.setDefaultAddress = function(id)
				{
					$http.post('/user/address/default/', { 'id': id }).
					success(function(data, status) {
						@if (isset($callBackUrl))
							$window.location.href = '{{ $callBackUrl }}';
						@else
							$window.location.href = data['url'];
						@endif
					});
				};

				$scope.deleteAddress = function(id)
				{
		  			$http.post('/user/address/delete', { 'id': id }).
					success(function(data, status, headers, config) {
						@if (isset($callBackUrl))
							$window.location.href = '{{ $callBackUrl }}';
						@else
							$window.location.href = data['url'];
						@endif
					});
				};

				PassInfo.setProperty('{{ isset($callBackUrl) ? $callBackUrl : '' }}');

			}]);

        })(angular.module("AntVel"));

    </script>
@stop
