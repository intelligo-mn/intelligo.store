@extends('layouts.master')
@section('title')@parent - @if ($product['id'] == '')

                            {{ trans('product.form_create_title') }}
                            
                            @else

                            {{ str_replace('[prod]', '"'.$product->name.'"', trans('product.form_edit_title')) }}

                            @endif
@stop
@section('page_class') products-create @stop
@section('content')
    @parent
    @section('panel_left_content')
        @include('user.partial.menu_dashboard')
    @stop
    @section('center_content')

        <div class="page-header">
            <h5>
                @if (isset($product['id']))
                    {{ trans('product.form_edit_title', [ 'prod' => $product->name ]) }}
                @else
                    {{ trans('product.form_create_title') }}
                @endif
            </h5>
        </div>
    
        @if(isset($product['id']))
            <div class="row">
                <div class="col-md-12">
                    <div class="btn-group pull-right">
                        <button ng-controller="ModalCtrl"
                                ng-click="modalOpen({templateUrl:'productsGroup/{{$product['id']}}/edit',controller:'ModalCtrl', noCache:true})" class="btn btn-sm btn-info">
                        <span class="glyphicon glyphicon-link"></span>&nbsp;
                        {{ trans('product.product_group') }}
                        </button>
                    </div>
                </div>
            </div>
        @endif
        
        <div class="row">&nbsp;</div>
        <div class="row">
        <div class="col-md-12">
            
            @include('partial.message')

            @if(!$edit)
                
                {!! Form::model(Request::all(),['url'=>'products', 'class'=>'form-horizontal', 'role'=>'form']) !!}
            @else
                    {{-- {{dd($product)}}            --}}
                {!! Form::model($product,['route'=>['products.update',$product],'method'=>'PUT','class'=>'form-horizontal','role'=>'form']) !!}
            @endif
                <div  ng-class="defaultClass">
        
                    <div class="form-group" >
                        <div class="col-sm-3">
                            {!! Form::label('status',trans('globals.status')) !!}:&nbsp;
                            {!! Form::select('status',[1=>trans('globals.active'),0=>trans('globals.inactive')],null,['class'=>'form-control']) !!}
                        </div>
                        <div class="col-sm-3">
                            {!! Form::label('condition',trans('product.inputs_view.condition')) !!}:&nbsp;
                            {!! Form::select('condition',$condition,null,['class'=>'form-control',$disabled=>$disabled]) !!}
                        </div>
                        <div class="col-sm-3">
                            {!! Form::label('category_id',trans('product.globals.categories')) !!}:&nbsp;
                            {!! Form::select('category_id',$categories,null,['class'=>'form-control',$disabled=>$disabled,'required']) !!}
                        </div>
                         @if(!$product)
                        <div class="col-sm-3" ng-init="typeItem='{{ $typeItem }}'">
                            {!! Form::label('type',trans('globals.type')) !!}:&nbsp;
                            {!! Form::select('type',$typesProduct,$typeItem,['class'=>'form-control','ng-model="typeItem"']) !!}
                        </div>
                        @else
                            {!! Form::hidden('type',$typeItem) !!}
                        @endif
                    </div>

                    <div class="form-group">
                        <div class="col-sm-12">
                            {!! Form::label('name',trans('product.inputs_view.name')) !!}:&nbsp;
                            {!! Form::text('name',null,['class'=>'form-control',$disabled=>$disabled,'required']) !!}
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-12">
                            {!! Form::label('description',trans('product.inputs_view.description')) !!}:&nbsp;
                            {!! Form::textarea('description',null,['class'=>'form-control','rows'=>'2','required']) !!}
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-4">
                            {!! Form::label('brand',trans('product.inputs_view.brand')) !!}:&nbsp;
                            {!! Form::text('brand',null,['class'=>'form-control','required']) !!}
                        </div>
                        <div class="col-sm-4">
                            {!! Form::label('bar_code',trans('product.inputs_view.bar_code')) !!}:&nbsp;
                            {!! Form::text('bar_code',null,['class'=>'form-control']) !!}
                        </div>
                        <div class="col-sm-4">
                            {!! Form::label('price',trans('product.globals.price')) !!}:&nbsp;
                            {!! Form::number('price',null,['class'=>'form-control','step'=>'any','required']) !!}
                        </div>
                    </div>

                    <div class="form-group ng-cloak" ng-show="typeItem=='item'">
                        <div class="col-sm-4">
                            {!! Form::label('stock',trans('product.globals.stock')) !!}:&nbsp;
                            {!! Form::number('stock',null,['class'=>'form-control','required']) !!}
                        </div>
                        <div class="col-sm-4">
                            {!! Form::label('low_stock',trans('product.inputs_view.low_stock')) !!}:&nbsp;
                            {!! Form::number('low_stock',null,['class'=>'form-control','required']) !!}
                        </div>
                        <div class="col-sm-4">&nbsp;</div>
                    </div>

                    <div class="form-group ng-cloak" ng-show="typeItem=='key'">
                        <div class="col-sm-2 col-sm-offset-4">
                            <div ng-controller="upload" ng-init="file='{{ (Input::old('key')?Input::old('key'):'') }}'">
                                <button class="form-control col-sm-2" ng-file-select ng-model="files" accept=".txt" type="button" ng-click="type_file='key'" ng-class="successClass">{{ trans('globals.file') }}
                                <input type="hidden" value="[[file]]" name="key">
                                </button>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <a href="/products/downloadExample" class="form-control" target="_blank">{{ trans('product.inputs_view.download_example') }}</a>
                        </div>
                        @if($product)
                        <div class="col-sm-5 col-sm-offset-4">
                            <button ng-controller="ModalCtrl" ng-init="data={'data':{{ $product->id }}}" ng-click="modalOpen({templateUrl:'/modalAllKeys',controller:'getKeysVirtualProducts',resolve:'data'})" class="btn btn-block btn-warning col-sm-12" type="button" style="margin-top:10px;">{{ trans('product.globals.see_keys') }}</button>
                        </div>
                        @endif
                        <div class="col-sm-8 col-sm-offset-4"><small>{!! trans('product.inputs_view.key_option') !!}</small> </div>
                    </div>

                    <div class="form-group ng-cloak" ng-show="typeItem=='software'">
                        <div class="col-sm-4 col-sm-offset-4">
                            <div ng-controller="upload" ng-init="file='{{ (Input::old('software')?Input::old('software'):'') }}'">
                            <button class="form-control col-sm-2" ng-file-select ng-model="files" accept=".rar,.zip" type="button" ng-click="type_file='software'" ng-class="successClass">{{ trans('globals.file') }}
                                <input type="hidden" value="[[file]]" name="software">
                            </button>
                            </div>
                        </div>
                        <div class="col-sm-8 col-sm-offset-4">{!! trans('product.inputs_view.software_option') !!}</div>
                    </div>

                    <div class="form-group ng-cloak" ng-show="typeItem=='software_key'">
                        <div class="col-sm-6 col-sm-offset-4">
                            <div ng-controller="upload" ng-init="file='{{ (Input::old('software_key')?Input::old('software_key'):'') }}'">
                            <button class="form-control col-sm-2" ng-file-select ng-model="files" accept=".rar,.zip" type="button" ng-click="type_file='software'" ng-class="successClass">{{ trans('globals.file').' '.trans('product.globals.software') }}
                                <input type="hidden" value="[[file]]" name="software_key">
                            </button>
                            </div>
                        </div>
                        <div class="col-sm-12"></div>
                        <div class="col-sm-3 col-sm-offset-4">
                            <div ng-controller="upload" ng-init="file='{{ (Input::old('key_software')?Input::old('key_software'):'') }}'">
                                <button class="form-control col-sm-2" ng-file-select ng-model="files" accept=".txt" type="button" ng-click="type_file='key'" ng-class="successClass">{{ trans('globals.file').' '.trans('product.globals.key') }}
                                <input type="hidden" value="[[file]]" name="key_software">
                                </button>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <a href="/products/downloadExample" class="form-control" target="_blank">{{ trans('product.inputs_view.download_example') }}</a>
                        </div>
                        <div class="col-sm-8 col-sm-offset-4">{!! trans('product.inputs_view.software_key_option') !!}</div>
                    </div>

                    <div class="form-group" ng-show="typeItem=='gift_card'">
                        <div class="col-sm-6">
                            {!! Form::label('amount',trans('product.inputs_view.amount')) !!}
                            {!! Form::number('amount',null,['class'=>'form-control']) !!}
                        </div>
                        <div class="col-sm-8 col-sm-offset-4">{!! trans('product.inputs_view.gift_card_option') !!}</div>
                    </div>
                       
                    <h5>{{ trans('product.globals.features') }}</h5>

                    <hr>
               
                    @include('features.makeInputsToDocumentsPicturesVideos',['force'=>false])
                    @include('features.makeInputs',['force'=>false])
                   
                </div>

                <div class="row">
                    <div class="col-sm-12">
                        <hr>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-12">
                        <button type="submit" class="btn btn-sm btn-success"><span class="glyphicon glyphicon-floppy-disk"></span>&nbsp;{{ trans('product.globals.save') }}</button>  
                        <button  type="button" ng-controller="ModalCtrl"
                                ng-click="modalOpen({templateUrl:'productsGroup/{{$product['id']}}/edit',controller:'ModalCtrl', noCache:true})" class="btn btn-sm btn-info">
                        <span class="glyphicon glyphicon-link"></span>&nbsp;
                        {{ trans('product.product_group') }}
                        </button>
                    </div>
                </div>
                {!! Form::close() !!}
        </div>

    </div>

    @stop
@stop
@section('scripts')
    @parent
    {!! Html::script('/js/vendor/file-upload/angular-file-upload-shim.min.js') !!}
    {!! Html::script('/js/vendor/file-upload/angular-file-upload.min.js') !!}
    
    <script>
        (function(app){
            app.controller('upload', ['$scope', '$upload', '$timeout','$http', function ($scope, $upload, $timeout, $http) {
                $scope.$watch('files', function () {
                    $scope.upload($scope.files);
                });

                $scope.file='';
                $scope.type_file='';
                $scope.successClass="";
                $scope.progress='';
                $scope.error='';

                $scope.upload = function (files) {
                    if (files && files.length && ($scope.type_file==''||$scope.type_file=='key'||$scope.type_file=='software')) {
                        for (var i = 0; i < files.length; i++) {
                            var file = files[i];
                            var url='/products/upload'+($scope.type_file!=''?'_'+$scope.type_file:'');
                            $upload.upload({
                                url: url,
                                fields: {"_token":'{{ csrf_token() }}',"_method":"POST"},
                                file: file
                            }).progress(function (evt) {
                                 var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                                 $scope.progress= progressPercentage + '% ';
                            }).success(function (data, status, headers, config) {
                                if(data.indexOf("Error:")> -1){

                                    $scope.progress='';
                                    $scope.error=data;
                                    $timeout(function(){
                                        $scope.error= '';
                                    }, 5000);

                                }else{
                                    old=$scope.file;
                                    $scope.file=data;
                                    $scope.error='';
                                    $timeout(function(){
                                        $scope.progress= '';
                                    }, 1000);

                                    if(old){
                                        $scope.delete(old);
                                    }
                                   
                                }
                                
                            });
                        }
                    }
                };

                $scope.delete = function (old) {
                    file = old || $scope.file;
                    if (file) {

                        $http.post('/products/delete_img',{'file':file}).
                              success( function(data) {
                                    if (parseInt(data)==1 && !old) {
                                        $scope.file='';
                                    }
                                    
                              });
                    }
                };

            }]);
        })(angular.module("AntVel"))
    </script>
@stop
@section('before.angular') ngModules.push('angularFileUpload'); @stop