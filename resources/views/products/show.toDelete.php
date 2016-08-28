@extends('layouts.master')
@section('title')@parent- {{ $product->name }} @stop

@section('metaLabels')
    @parent
    @include('partial.social_tags', [
        'title' => $product->name,
        'image' => isset($product->features['images'][0]) ? URL::to('/').$product->features['images'][0] : '/img/no-image.jpg',
        'description' => substr($product->description, 0, 197).'...',
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

@section('content')
    @parent
        @if (Auth::id()===$product->user_id)
            @section('panel_left_content')
                @include('user.partial.menu_dashboard')
            @stop
        @endif

    @section('center_content')

    <div class="panel panel-default" ng-controller="StoreProducts" >

        <div class="panel-body" >
            <div class="row">
                @include('partial.message')
                @if($product->status==0)
                    <div class="alert alert-danger" role="alert">
                        {{ trans('product.show_view.status_inactive') }}
                    </div>
                @endif

                <div class="col-xs-12 visible-xs-block">
                    <strong>{{$product->name}}</strong>
                </div>
                <div class="col-xs-12 visible-xs-block" ng-show="product.rate_count > 0">
                    <rating max="5" state-on="'fui-heart'" state-off="'fui-cross'" readonly="true" ng-model="product.rate_val" ></rating>
                    <small class="pull-right" ng-show="product.rate_count > 0"> {{$product->num_of_reviews}} </small>
                </div>

                <div>
                    {{-- Despliega el carousel solo cuando el producto tiene mas una imagen cargada --}}
                    @if(isset($product->features['images']) && count($product->features['images']) > 1)
                    <div class="col-xs-12 col-sm-4 " >

                        <carousel interval="myInterval" class="ng-cloak thumbnail">
                            @foreach($product->features['images'] as $image )
                            <slide >
                                <img src="{{$image}}?h=350" alt="{{$product->name}}" >
                            </slide>
                            @endforeach
                        </carousel>

                    </div>
                    {{-- Se muestra solamente cuando el producto tiene una sola imagen cargada --}}
                    @else
                    <div class="col-xs-12 col-sm-4 thumbnail" >
                        @if (isset($product["features"]["images"][0]))
                            <img  src="{{$product->features['images'][0]}}?h=350" alt="{{$product->name}}"  >
                        @else
                            <img  src="/img/no-image.jpg" alt="{{$product->name}}"  >
                        @endif
                    </div>
                    @endif
                    <div class="col-xs-12 col-sm-5 {{(Auth::id()===$product->user_id?'pull-right':'')}}">
                        <div class="text-small hidden-xs"><strong><h6>{{$product->name}}</h6></strong></div>
                        <div class="text-small hidden-xs" ng-show="[[ product.rate_count > 0 ]]">
                            <rating max="5" state-on="'fui-heart'" state-off="'fui-cross'" readonly="true" ng-model="product.rate_val" ></rating>
                            <small  ng-show="product.rate_count > 0"> {{$product->num_of_reviews}} </small>
                        </div>
                        <div class="text-small hidden-xs">{{$product->description}}</div>
                        <div class="text-small"><strong>{{ trans('product.globals.price') }}: </strong> {{\Utility::showPrice($product->price)}} </div>
                        <div class="text-small"><strong>{{ trans('globals.status') }}: </strong> {{ $product->status ? trans('globals.active'):trans('globals.inactive') }}</div>

                        @if (trim($product->brand)!='')
                            <div class="text-small"><strong>{{ trans('globals.brand') }}: </strong> {{ $product->brand }}</div>
                        @endif

                        <div class="text-small"><strong>{{ trans('store.condition') }}</strong>: {{$product->condition}} <span ng-attr-class="[[product.stock<= product.low_stock && 'label label-warning'|| 'label label-success' ]]"><span ng-show="product.stock <= product.low_stock">{{ trans('store.just') }} {{$product->stock}}</span> {{ trans('store.inStock') }}</span></div>
                        @if(!count($product->group))
                            <div class="text-small hidden-xs">
                                @if (isset($product->features))
                                    @include('features.makeToShow',['globalFeatures'=>$features,'features'=>$product->features])
                                @endif
                            </div>
                        @else
                                @include('products.group')
                        @endif

                    </div>

                    <div class="col-xs-12 col-sm-{{(Auth::id()===$product->user_id?12:3)}} well">
                        @if ($product->type!='freeproduct')
                            {{-- Si el usuario es dueno del producto que visualiza, no puede comprar, pero si editarlo --}}
                            @if (Auth::id()===$product->user_id)
                                {!! Form::open(['route' => ['products.change_status', $product->id], 'method' => 'post', 'class' => 'form-inline pull-right']) !!}
                                    <a href="{{ route('products.edit',[$product->id]) }}" class="btn btn-danger"> {{ trans('globals.edit') }}</a>
                                    <button type="submit" class="btn btn-primary">{{ ($product->status) ? trans('globals.disable') : trans('globals.enable') }}</button>
                                    @if($product->type=='key')
                                        <button type="button" ng-controller="ModalCtrl" ng-init="data={'data':{{ $product->id }}}" ng-click="modalOpen({templateUrl:'/modalAllKeys',controller:'getKeysVirtualProducts',resolve:'data'})" class="btn btn-warning">{{ trans('product.globals.see_keys') }}</button>
                                    @endif
                                {!! Form::close() !!}
                            @elseif($product->status!=0)
                                {{-- Acciones para cualquier usuario que desee comprar en AntVel, siempre y cuando el producto no este inactivo --}}

                                {!! Form::open(array('url' => route('orders.add_to_order',['cart',$product->id]), 'method' => 'put')) !!}
                                <div class="col-sm-12">
                                    <div class="col-sm-2">
                                        {{ trans('store.quantity') }}:
                                    </div>
                                    <div class="col-sm-10">
                                        {!! Form::selectRange('quantity', 1, $product->stock, 1,
                                                             ['class' => 'form-control ']) !!}
                                    </div>
                                </div>
                                @if($product->type=='key')
                                    <br/>{{ trans('globals.send_to') }}: {!! Form::email('email',(Auth::check()?Auth::user()->email:null), ['class'=>'form-control',(Auth::check()?'':'disabled')=>(Auth::check()?'':'disabled')]) !!}
                                @endif

                                <div class="col-sm-12"><hr>
                                {!! Form::submit(trans('store.add_to_cart'), array('class' => 'btn btn-default btn-md')) !!}
                                </div>
                                <!-- BUTTON WISHLIST-->
                                <div class="col-sm-12"><hr>
                                 @if(Auth::check())

                                <div class="dropdown">
                                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        {{ trans('store.addToWishList') }}
                                        <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenu1">
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
                                    <a  href="/auth/login" class="btn btn-info ">{{ trans('store.addToWishList') }}</a>
                                @endif
                                </div>

                                {!! Form::close() !!}

                            @endif
                        @else
                            @if($product->type=='freeproduct')
                                {!! Form::open(['route' => ['freeproducts.show', $freeproductId], 'method' => 'get', 'class' => 'form-inline']) !!}
                                    <a href="{{ route('products.show',[$product->parent_id]) }}" type="button" class="btn btn-default btn-md">{{ trans('freeproduct.purchase_this_item') }}</a>
                                    {!! Form::submit(trans('freeproduct.go_to_package'), array('class' => 'btn btn-success btn-md')) !!}
                                {!! Form::close() !!}
                            @endif
                        @endif
                    </div>
                </div>

                @if($product->type=='key')
                    <div class="col-xs-12 visible-sm-block visible-md-block visible-lg-block">
                        <p>{!! trans('product.show_view.key_info_show') !!}</p>
                    </div>
                @endif
                {{-- Descripcion del producto --}}
                <div class="col-xs-12 visible-xs-block">
                    <div class="btn-group btn-group-justified" role="group">
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-primary btn-lg" btn-checkbox ng-model="checkButtonDescription" ng-click="isCollapsedDescription = !isCollapsedDescription" btn-checkbox-true="1" btn-checkbox-false="0">{{ trans('product.globals.description') }}</button>
                        </div>
                    </div>
                    <div collapse="isCollapsedDescription">
                        <div class="well well-xs">
                            <h6>{{ trans('product.globals.product_information') }}</h6>
                            <div>{{$product->description}}</div>
                            @include('features.makeToShow',['globalFeatures'=>$features,'features'=>$product->features,'force'=>false])
                            @if($product->type=='key')
                                <p>{!! trans('product.show_view.key_info_show') !!}</p>
                            @endif
                        </div>
                    </div>
                </div>

                {{-- Comentarios --}}
                <div class="col-xs-12 visible-xs ng-hide" ng-show="detailComments.length > 0">
                    <div class="btn-group btn-group-justified" role="group">
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-primary btn-lg" btn-checkbox ng-model="checkButtonComments" ng-click="isCollapseComments = !isCollapseComments" btn-checkbox-true="1" btn-checkbox-false="0">{{ trans('product.globals.comments') }}</button>
                        </div>
                    </div>
                    <div collapse="isCollapseComments">
                        <div class="well well-xs">
                             <hr>
                            <h4>{{ trans('product.show_view.recent_reviews') }}</h4>
                            <hr>
                            <div ng-repeat="comment in detailComments" ng-show="comment.rate_comment">
                               <rating max="5"
                                state-on="'fui-heart'"
                                state-off="'fui-cross'"
                                readonly="true"
                                ng-model="comment.rate" ></rating>
                                <small>[[ comment.updated_at | dateToISO | date:'MM-dd-yyyy' ]]</small>
                                <p>[[ comment.rate_comment ]]</p>
                                <hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 hidden-xs ng-hide" ng-show="detailComments.length > 0">
                    <hr>
                    <h4>{{ trans('product.show_view.recent_reviews') }}</h4>
                    <hr>
                    <div ng-repeat="comment in detailComments" ng-show="comment.rate_comment">
                        <rating max="5"
                                state-on="'fui-heart'"
                                state-off="'fui-cross'"
                                readonly="true"
                                ng-model="comment.rate" ></rating>
                        <small>[[ comment.updated_at | dateToISO | date:'MM-dd-yyyy' ]]</small>
                        <p>[[ comment.rate_comment ]]</p>
                        <hr>
                    </div>
                </div>
            </div>

        </div>
    </div>
        @if(isset($suggestions) && is_array($suggestions))
            <h4 >{{ trans('store.suggestions.product') }}</h4>
            <hr>
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

    @stop
@stop

@section('scripts')
    @parent
    <script>
        (function(app){
            app.controller('StoreProducts', ['$scope', function($scope){
                $scope.isCollapsedDescription = true;
                $scope.isCollapseComments = true;
                $scope.myInterval = 3000;
                $scope.checkButtonDescription = 1;
                $scope.checkButtonComments = 1;
                $scope.product=({!! $product->toJson() !!});
                $scope.detailComments=({!! $jsonDetails !!});

            }]);

            app.filter('dateToISO', function() {
                return function(input) {
                    input = new Date(input).toISOString();
                    return input;
                };
            });

            app.config(
                ['$animateProvider',
                    function ($animateProvider) {
                        $animateProvider.classNameFilter(/carousel/);
                    }]);
        })(angular.module("AntVel"));
    </script>
@stop