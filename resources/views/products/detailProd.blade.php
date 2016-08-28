@extends('layouts.master')
@section('title')@parent- {{ $product->name }} @stop

@include('partial.message')

@section('metaLabels')
    @parent
    @include('partial.social_tags', [
        'title' => $product->name,
        'image' => isset($product->features['images'][0]) ? URL::to('/').$product->features['images'][0] : URL::to('/').'/img/no-image.jpg',
        'description' => $product->description,
        'id' =>$product->id,
        'brand' => isset($product->features['brand'])?$product->features['brand']:'',
        'rate_val' => $product->rate_val,
        'rate_count' => $product->rate_count
    ])
@stop

@section('breadcrumbs')
    @parent
    {!! Breadcrumbs::render('productDetail', $product) !!}
@stop



@if($product->status==0)
    <div class="alert alert-danger" role="alert">
        {{ trans('product.show_view.status_inactive') }}
    </div>
@endif

@section('content')
    @parent

    @if (Auth::id()===$product->user_id)
        @section('panel_left_content')
            @include('user.partial.menu_dashboard')

			<div class="row hidden-xs">
	            <div class="col-md-12">
	        		{!! Form::open(['route' => ['products.change_status', $product->id], 'method' => 'post', 'class' => 'form-inline']) !!}
	                    <a href="{{ route('products.edit',[$product->id]) }}" class="btn btn-success btn-sm full-width">
							<span class="glyphicon glyphicon-edit"></span>&nbsp;
	                    	{{ trans('globals.edit') }}
	                    </a>

						<div class="row">&nbsp;</div>

	                    <button type="submit" class="btn btn-primary btn-danger btn-sm full-width">
							<span class="glyphicon @if ($product->status) glyphicon-ban-circle @else glyphicon-ok-circle @endif"></span>&nbsp;
	                    	{{ $product->status ? trans('globals.disable') : trans('globals.enable') }}
	                    </button>

						<div class="row">&nbsp;</div>

	                    @if ($product->type=='key')
	                        <button type="button" ng-controller="ModalCtrl" ng-init="data={'data':{{ $product->id }}}" ng-click="modalOpen({templateUrl:'/modalAllKeys',controller:'getKeysVirtualProducts',resolve:'data'})" class="btn btn-primary btn-sm full-width">
								<span class="glyphicon glyphicon-eye-open"></span>&nbsp;
	                        	{{ trans('product.globals.see_keys') }}
	                        </button>
	                    @endif
	                {!! Form::close() !!}
	            </div>
	        </div>

        @stop
    @endif


	@section('center_content')

		<div class="page-header">
            <h5>{{ $product->name }}</h5>
        </div>

		<div class="row">

			{{-- Gallery --}}
			<div class="col-md-6" ng-controller = "ProductsGallery">
				<img src = "img/no-image.jpg" lazy-img = '[[getPortrait()]]' ng-init = "setPortrait('{{ $product->features['images'][0] }}?w=450')" class = "img-responsive img-rounded" >
				<hr>
				{{-- Thumbnails --}}
				<div class="row">
					<div class="col-md-12">
					<ul class="list-inline" ng-controller = "ProductsGallery">
					<?php $selector = 0; $gallery = ''; ?>
					@foreach($product->features['images'] as $image)
						<li>
							<a class="thumbnail">
								<img src = "img/no-image.jpg?h=60" lazy-img = "{{ $image }}?h=60" class="img-responsive img-rounded" ng-click = "setPortrait('{{ $image }}?w=450')">
							</a>
						</li>
						<?php $gallery .= $image.'?w=450,'; ?>
					@endforeach
		        	</ul>
		        	</div>
				</div>
			</div>

			{{-- Product Information --}}
	        <div class="col-md-3">
				<hr class="visible-xs visible-sm">
				<h5 class="black_color">{{ \Utility::showPrice($product->price) }}</h5>
				<hr class="hidden-sm hidden-xs">
				<ul class="list-unstyled">
					<li><label class="black_color">{{ trans('store.condition') }}:</label>&nbsp;{{ ucwords($product->condition) }}</li>
					<li><label class="black_color">{{ trans('globals.brand') }}:</label>&nbsp;{{ ucwords($product->brand) }}</li>
					@foreach ($product->features as $key => $feature)
						@if ($key != 'images')
							<li><label class="black_color">{{ ucwords($key) }}:</label>&nbsp;{{  ucwords( is_array($feature) ? implode(' ', $feature) : $feature ) }}</li>
						@endif
					@endforeach
					<li>
						@if ($product->stock <= $product->low_stock)
							<span class = "label label-warning">{{ trans('store.lowStock') }}</span>
						@else
							<span class = "label label-success">{{ trans('store.inStock') }}</span>
						@endif
					</li>
				</ul>
				<hr class="visible-xs visible-sm">
	        </div>

			{{-- Purchase Box --}}
	        <div class="col-md-3">

	        	<div class="panel panel-default">
		        	<div class="panel-body">

	                    {!! Form::open(array('url' => route('orders.add_to_order',['cart',$product->id]), 'method' => 'put')) !!}
	                    <div class="row">
							<div class="col-lg-12">
								<label for = "quantity">{{ trans('store.quantity_long') }}:</label>
									{!! Form::selectRange(
			                            	'quantity', 1,
			                            	$product->stock, 1,
			                                ['class' => 'form-control input-sm']
			                        ) !!}
		                    </div>
	                    </div>

	                    <hr>

	                    <div class="row">
	                    	<div class="col-lg-12">
								<button type="submit" class="btn btn-warning btn-sm full-width">
									<span class="glyphicon glyphicon-shopping-cart"></span>&nbsp;
									{{ trans('store.add_to_cart') }}
								</button>
							</div>
	                    </div>

						<div class="row">&nbsp;</div>

	                    <div class="row">

	                    	<div class="col-lg-12">

									@if (Auth::check())

		                                <div class="dropdown">

		                                    <button class="btn btn-default dropdown-toggle btn-sm full-width" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
		                                        <span class="glyphicon glyphicon-heart"></span>&nbsp;
		                                        {{ trans('store.addToWishList') }}
		                                        <span class="caret"></span>
		                                    </button>

		                                    <ul class="dropdown-menu dropdown-menu-left btn-sm" aria-labelledby="dropdownMenu1">
		                                        <li>
		                                            <a href="{{ route('orders.add_to_order',['wishlist',$product->id]) }}">
		                                                {{ trans('store.wish_list') }}
		                                            </a>
		                                        </li>
		                                        @if (count($allWishes)>0)
		                                            <li class="dropdown-header">{{ trans('store.your_wish_lists') }}</li>
		                                        @endif
		                                        @foreach($allWishes as $wishList)
		                                            <li><a href="{{ route('orders.add_to_order_by_id',[$wishList->id,$product->id]) }}">{{ $wishList->description }}</a></li>
		                                        @endforeach

		                                    </ul>
		                                </div>

	                                @else
	                                    <a  href="/auth/login btn-sm" class="btn btn-info full-width">
	                                    	<span class="glyphicon glyphicon-heart"></span>&nbsp;
	                                    	{{ trans('store.addToWishList') }}
	                                    </a>
	                                @endif

							</div>
	                    </div>

						<hr>
	                    <div class="row">
	                    	<div class="col-lg-12">
	                    		<button type="button" id="facebook" class="btn btn-primary btn-sm full-width">
									<span class="fa fa-facebook-square"></span>&nbsp;
									{{ trans('globals.share_on_facebook') }}
								</button>
	                    	</div>
	                    </div>
	                    <div class="row">&nbsp;</div>
	                    <div class="row">
	                    	<div class="col-lg-12">
	                    		<a id="twitter" href="https://twitter.com/intent/tweet?hashtags=antvel&text={{ urlencode($product->name) }}&url={{ Request::url() }}&via=_antvel" class="btn btn-success btn-sm full-width">
									<span class="fa fa-twitter-square"></span>&nbsp;
									{{ trans('globals.share_on_twitter') }}
								</a>
	                    	</div>
	                    </div>

						{{-- Virtual Products --}}
	                    @if ($product->type=='key')
	                    	<hr>
	                       	<label for = "email">{{ trans('globals.send_to') }}:</label>
	                       	{!! Form::email('email',(Auth::check()?Auth::user()->email:null), ['class'=>'form-control input-sm',(Auth::check()?'':'disabled')=>(Auth::check()?'':'disabled')]) !!}
	                    @endif

	                    {!! Form::close() !!}

					</div> {{-- panel-body --}}
				</div>
	        </div>
		</div>

		{{-- Product Description --}}
		@if (trim($product->description) != '')
			<div class="row">&nbsp;</div>
			<div class="page-header">
	            <h5>{{ trans('store.description') }}</h5>
	        </div>
	        <div class="row">
	        	<div class="col-md-12">
					{{ $product->description }}
	        	</div>
	        </div>
        @endif

		{{-- Product Description --}}
		@if (count($reviews) > 0)
			<div class="row">&nbsp;</div>
			<div class="page-header">
	            <h5>{{ trans_choice('store.review', 7) }}</h5>
	        </div>
	        @foreach ($reviews as $rev)
		        <div class="row">
		        	<div class="col-lg-12">
			        	<small>
							{{ \Utility::showRate($rev['rate']) }}&nbsp;
							{{ $rev['rate_comment'] }}&nbsp;-&nbsp;
							<em>{{ Carbon\Carbon::parse($rev['updated_at'])->format('F j, Y') }}</em>
						</small>
					</div>
		        </div>
	        @endforeach
        @endif

		<div class="row">&nbsp;</div>

		<div class="page-header">
            <h5>{{ trans('store.suggestions.product') }}</h5>
        </div>
		<div class="row">
			@if (count($product->group))
                @include('products.group')
            @else
	            <section class="products_view">
                    <div class="container-fluid marketing">
                        <div class="row">
                            @foreach ($suggestions as $productSuggestion)
                                @include('products.partial.productBox', $productSuggestion)
                            @endforeach
                        </div>
                    </div>
	            </section>
            @endif
		</div>

	 @stop
@stop


@section('scripts')
    @parent

	{!! Html::script('/antvel-bower/angular-lazy-img/release/angular-lazy-img.min.js') !!}

	<script src = "https://connect.facebook.net/en_US/sdk.js"></script>

    <script>

		(function(app){

			app.requires.push('angularLazyImg');

            /**
             * ProductsGallery
             * Allows changing the product portrait image
             * @param  $scope Angularjs scope object
             * @param  PassInfo is a service that lets passing info among controllers or divs
             */
            app.controller('ProductsGallery', function($scope, PassInfo){

            	$scope.gallery = '{{ $gallery }}'.split(',');

            	$scope.setPortrait = function (pic)
            	{
            		PassInfo.setProperty(pic);
            	}

            	$scope.getPortrait = function ()
            	{
            		return PassInfo.getProperty();
            	}

            });

        })(angular.module("AntVel"));

        //Social Buttons
        $(document).ready(function() {
			$("#facebook").click(function() {

				$.getScript('//connect.facebook.net/en_US/sdk.js', function(){
				    FB.init({
				      appId      : "{{ env('FB_APP_ID') }}",
				      xfbml      : true,
				      version    : 'v2.5',
				      caption    : '{{ $product->name }}',
				    });
					FB.ui(
					{
						method: 'share',
						href: '{{ Request::url() }}'
					},
					function(response) {}
					);
			  	});

			});
		});

		$('#twitter').click(function(event) {
		    var width  = 575,
		        height = 400,
		        left   = ($(window).width()  - width)  / 2,
		        top    = ($(window).height() - height) / 2,
		        url    = this.href,
		        opts   = 'status=1' +
		                 ',width='  + width  +
		                 ',height=' + height +
		                 ',top='    + top    +
		                 ',left='   + left;

		    window.open(url, '{{ $product->name }}', opts);

		    return false;
		});

    </script>
@stop


