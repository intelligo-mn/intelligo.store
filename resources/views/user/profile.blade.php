@extends('layouts/master')
@section('page_class')user-profile @stop

@section('navigation') @parent @stop

@include('partial.message')

@section('content')
	@parent
	@section('panel_left_content')
		@include('user.partial.menu_dashboard')
	@stop
	@section('center_content')

		<div class="page-header">
			<h5>{{ trans('user.user_account_settings') }}</h5>
		</div>

		{!! Form::model($user, ['url'=>'user/profile/save', 'class'=>'form-horizontal', 'role'=>'form']) !!}
		<div ng-controller="ProfileController" ng-cloak>

			<div ng-show="disabled" class="alert alert-danger" role="alert">
				<p>{{ trans('user.disabled_at') }}: [[ disabled | date:'medium' ]]</p>
				<small>{{ trans('user.account_disabled_description') }}</small>
			</div>

			<div class="row">
				<div class="col-lg-12">
						<tabset>
							{{-- user information --}}
							<tab heading="{{ trans('user.my_profile') }}">
								<div class="row">&nbsp;</div>
								<div class="row">
									<div class="col-lg-12">
										<div class="pull-left" ng-controller="uploadCtrl">
											<div class="progress ng-cloak" ng-show="progress">
											  <div class="progress-bar"  role="progressbar" aria-valuenow="[[progress]]" aria-valuemin="0" aria-valuemax="100" style="width: [[progress]]%;">
											    [[progress]]%
											  </div>
											</div>
											<div class="user-photo">
												<img src="[[picture]]" class="thumbnail" style="width:80px;"  alt="Photo" ng-file-select ng-model="files" ngf-accept="'image/*'" accept="image/*">
												<input type="hidden" value="[[file!=''?file:picture]]" name="pic_url">
											</div>
										</div>
										<h5>
											@if (\Auth::user()->hasRole(['person','admin']))
											 	{{ ucwords($user['first_name'].' '.$user['last_name']) }}
											@else
												{{  ucwords($user['business_name']) }}
											@endif
										</h5>
									</div>
								</div>
								<div class="row">
									<div class="col-lg-12">
										@include('user.partial.user_inputs')
									</div>
								</div>
							</tab>

							{{-- social information --}}
							<tab heading="{{ trans('user.social_information') }}">
								<div class="row">&nbsp;</div>
								<div class="row">
									<div class="col-lg-12">
										@include('user.partial.optional_inputs')
									</div>
								</div>
							</tab>

							{{-- security information --}}
							<tab heading="{{ trans('user.pass_account') }}">
								<div class="row">&nbsp;</div>
								<div class="row">
									<div class="col-lg-12">
										@include('user.partial.security_inputs')
										<div ng-hide="disabled">
											<label>{{ trans('user.disable_account') }}:</label>
											<div class="panel panel-danger">
												<div class="panel-body">
												    <p class="text-warning">{{ trans('user.disable_account_description') }}</p>
												    <button type="button" ng-click="wantDelete = true" class="btn btn-xs btn-danger">{{ trans('user.disable_account') }}</button>
												    <div ng-show="wantDelete">
												    	<strong>{{ trans('user.are_you_sure') }}?</strong>
														<button type="button" class="btn btn-warning" ng-click="disableAccount()">{{ trans('globals.yes') }}</button>
														<button type="button" class="btn btn-success" ng-click="wantDelete = false">{{ trans('globals.no') }}</button>
												    </div>
												</div>
											</div>
										</div>

										<div ng-show="disabled">
											<div class="panel panel-danger">
												<label>{{ trans('user.enable_account') }}:</label>
												<div class="panel-body">
												    <p>{{ trans('user.enable_account_description') }}</p>
												    <button type="button" ng-click="enableAccount()" class="btn btn-xs btn-primary">{{ trans('user.enable_account') }}</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</tab>
						</tabset>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12">
					<hr>
				</div>
			</div>
			<div class="row">
				{{-- Submit Button --}}
				<div class="col-lg-12">
					<button ng-hide="wantDelete" type="submit" class="btn btn-sm btn-success">
						<span class="glyphicon glyphicon-floppy-disk"></span>&nbsp;
						{{ trans('user.update_profile') }}
					</button>
				</div>
			</div>

		</div>

		{!! Form::close() !!}
	@stop

@endsection
{{-- Pie de pagina --}}
@section('footer')
	@parent
@stop
{{-- Javascript --}}
@section('scripts')
	@parent
	{!! Html::script('/js/vendor/file-upload/angular-file-upload-shim.min.js') !!}
    {!! Html::script('/js/vendor/file-upload/angular-file-upload.min.js') !!}
    <script>
        (function(app){
        	//Control del profile de usuario
			app.controller('ProfileController',['$scope','$http','notify',function($scope, $http,notify){
				$scope.wantDelete = false;
				$scope.disabled = false;
				var disabled = '{{ $user['disabled_at'] }}';
				if (disabled !== '') $scope.disabled = new Date(disabled);

				$scope.disableAccount = function(){
					$http.post('/user/profile/disable').
						success(function(data, status) {
							if (data.success) {
								$scope.disabled = new Date(data.date);
								$scope.wantDelete = false;
								notify({message:data.message,classes:'alert-danger'});
							}else{
								console.log(data); //mensajes de error en validacion de form
							}
						}).
						error(function(data, status, headers, config) {
							notify({duration:2000,message:data.message,classes:'alert-error'});
						});
				};

				$scope.enableAccount = function(){
					$http.post('/user/profile/enable').
						success(function(data, status) {
							if (data.success) {
								$scope.wantDelete = false;
								$scope.disabled = false;
								notify({message:data.message,classes:'alert-success'});
							}else{
								console.log(data); //mensajes de error en validacion de form
							}
						}).
						error(function(data, status, headers, config) {
							notify({duration:2000,message:data.message,classes:'alert-error'});
						});
				};

				$scope.checkDisable = function(){
					$http.post('/user/profile/disable').
						success(function(data, status) {
							if (data.success) {
								$scope.disabled = true;
								notify({message:data.message,classes:'alert-success'});
							}else{
								console.log(data); //mensajes de error en validacion de form
							}
						}).
						error(function(data, status, headers, config) {
							notify({duration:2000,message:data.message,classes:'alert-error'});
						});
				};
			}]);

			//Upload
            app.controller('uploadCtrl', ['$scope', '$upload', '$timeout','notify', function ($scope, $upload, $timeout,notify) {
            	$scope.usingFlash = FileAPI && FileAPI.upload != null;
				$scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);
				$scope.picture = '{{ $user['pic_url'] }}';

            	$scope.$watch('files', function () {
                    upload($scope.files);
                });
                $scope.file='';
                $scope.progress='';

                function upload(files) {
                    if (files && files.length) {
                        for (var i = 0; i < files.length; i++) {
                            var file = files[i];
                            var url='/user/upload';
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
									generateThumb(file);
                                    $scope.file=data;
                                    $scope.picture = data;
                                    $timeout(function(){
                                        $scope.progress= '';
                                    }, 1000);
                                }

                            });
                        }
                    }
                }


                function generateThumb(file) {
					if (file !== null) {
						if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
							$timeout(function() {
								var fileReader = new FileReader();
								fileReader.readAsDataURL(file);
								fileReader.onload = function(e) {
									$timeout(function() {
										console.log(e.target.result);
										file.dataUrl = e.target.result;
									});
								};
							});
						}
					}
				}
            }]);

        })(angular.module("AntVel"))
    </script>
@stop
@section('before.angular') ngModules.push('angularFileUpload'); @stop
