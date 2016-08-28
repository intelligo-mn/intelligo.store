@extends('layouts.wpanel')
@section('page_class') category-panel @stop
@section('center_content')
	@include('partial.message')
	<div ng-controller="CategoryController" class="panel panel-default">
		<div class="panel-heading"><h6><span class="glyphicon glyphicon-tasks"></span> {{ trans('categories.registration_category') }}</h6>	</div>
		<div class="panel-body">
			{!! Form::model(Request::all(),['route'=>'wpanel.category.store', 'class'=>'form-horizontal', 'role'=>'form']) !!}
				<div class="form-group">
					<label class="col-md-4 control-label">{{ trans('globals.name') }}</label>
					<div class="col-md-6">
						{!! Form::text('name',null,['class'=>'form-control']) !!}
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-4 control-label">{{ trans('globals.description') }}</label>
					<div class="col-md-6">
						{!! Form::text('description',null,['class'=>'form-control']) !!}
					</div>
				</div>
				<div class="row form-group">
					<label class="col-md-4 control-label">{{ trans('globals.image') }}</label>
					<div class="col-md-2">
						<div class="progress ng-cloak" ng-show="progress">
						  <div class="progress-bar progress-bar-striped active"  role="progressbar" aria-valuenow="[[progress]]" aria-valuemin="0" aria-valuemax="100" style="width: [[progress]]%;">
						    [[progress]]%
						  </div>
						</div>
						<div class="thumbnail" ng-file-select ng-model="image_upload" accept=".jpg,.png" style="height:120px; background-image:url('[[image || '/img/no-image.jpg']]'); background-size: 100%;"></div>
						<input type="hidden" value="[[image]]" name="image" />
					</div>
				</div>
				<div id="iconSelect" class="form-group">
					<label class="col-md-4 control-label">{{ trans('categories.select_icon') }}</label>
					<div class="col-md-6 demo-icons">
						<div class="demo-content">
							@foreach(trans('categories.class_icons') as $row)
								<span class="{{ $row }}" ng-click="icon='{{ $row }}'"></span>
							@endforeach
						</div>
					</div>
				</div>
				<div id="icon" class="form-group">
					<label class="col-md-4 control-label"></label>
					<div class="col-md-6 demo-icons">
						<div class="demo-content">
							<span class="[[icon]]"></span>
							<input type="hidden" name="icon" ng-model="icon" value="[[icon]]" />
						</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-4 control-label">{{ trans('globals.status') }}</label>
					<div class="col-md-6">
						{!! Form::select('status',[1=>trans('globals.active'),0=>trans('globals.inactive')],null,['class'=>'form-control']) !!}
					</div>
				</div>
				<div class="form-group" ng-init="type=1">
					<label class="col-md-4 control-label">{{ trans('globals.type') }}</label>
					<div class="col-md-6">
						{!! Form::select('type',[1=>trans('globals.type_categories.group'),2=>trans('globals.type_categories.store')],null,['class'=>'form-control','ng-model'=>'type']) !!}
					</div>
				</div>
				@if(count($categories['group'])>0)
					<div class="form-group" ng-show="type==1">
						<label class="col-md-4 control-label">{{ trans('categories.parent_category').' ('.trans('globals.type_categories.group').')' }}</label>
						<div class="col-md-6">
							{!! Form::select('parentg',$groupCategories,null,['class'=>'form-control']) !!}
						</div>
					</div>
				@endif
				@if(count($categories['store'])>0)
					<div class="form-group" id="parents" ng-show="type==2">
						<label class="col-md-4 control-label">{{ trans('categories.parent_category').' ('.trans('globals.type_categories.store').')' }}</label>
						<div class="col-md-6">
							{!! Form::select('parents',$storeCategories,null,['class'=>'form-control']) !!}
						</div>
					</div>
				@endif
				<div class="form-group">
					<div class="col-md-6 col-md-offset-4">
						<button type="submit" class="btn btn-primary">
							{{ trans('globals.save') }}
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
@stop
@section('scripts')
    @parent
    {!! Html::script('/js/vendor/file-upload/angular-file-upload-shim.min.js') !!}
    {!! Html::script('/js/vendor/file-upload/angular-file-upload.min.js') !!}
	<script>
		(function(app){
            app.controller('CategoryController', ['$scope', '$upload','$timeout','notify',
            	function ($scope, $upload, $timeout, notify) {
            	//upload
				$scope.image='';
				$scope.image_upload='';
				$scope.successClass='';
				$scope.progress='';
				$scope.$watch('image_upload', function () {
					$scope.upload($scope.image_upload);
				});
				$scope.upload = function (files) {
					if (files && files.length) {
						for (var i = 0; i < files.length; i++) {
							var file = files[i];
							var url='/wpanel/category/upload';
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
                                    notify({duration:4000,message:data,classes:'alert alert-danger'});

                                }else{
									$scope.image=data;
									$scope.successClass="success";
                                    $timeout(function(){
                                        $scope.progress= '';
                                    }, 1000);
                                }
							});

						}
					}
				};
			}]);
		})(angular.module("AntVel"))
	</script>
@stop
@section('before.angular') ngModules.push('angularFileUpload'); @stop
