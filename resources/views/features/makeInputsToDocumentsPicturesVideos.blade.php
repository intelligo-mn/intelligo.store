@if(isset($features) && is_array($features))
	@foreach($features as $feature)
		@if($force || $feature['status']=='active')
		@if($feature['input_type']!='image' && $feature['input_type']!='document' && $feature['input_type']!='video')
		<?php     continue; ?>
		@endif
		<div class="form-group" ng-show="(typeItem=='{{ $feature['type_products'] }}'||'{{ $feature['type_products'] }}'=='all')">
            
            <div class="col-sm-12">
            {!! Form::label('feature_'.$feature['indexByName'],$feature['upperName'].':') !!}
			@for($i=1;$i<=$feature['max_num_values'];$i++)
				<?php
                    $file=Input::old('feature_'.$feature['indexByName'].'_'.$i);
                    $file=!$file?($edit?$oldFeatures['feature_'.$feature['indexByName'].'_'.$i]:''):$file;
                ?>
				@if($feature['input_type']=='image')
					<div ng-controller="upload" ng-init="file='{{ $file }}'">

	                    <div class="image thumbnail col-sm-2"  style="background-image:url('[[file || '/img/no-image.jpg']]');background-size: 100%; min-height: 150px; margin-right: 5px;" ng-click="type_file='{{ isset($urlImage)?$urlImage:'' }}'" ng-class="successClass">
	                    <button class="btn btn-danger btn-xs pull-right ng-cloak" ng-click="delete()" type="button" ng-show="file" >
	                    	<span class="glyphicon glyphicon-trash"></span>
	                    </button>
	                     <button class="btn btn-info btn-xs pull-right ng-cloak"
	                     		 ng-file-select ng-model="files" accept=".jpg,.png" type="button" >
	                    	<span class="[[file ? 'glyphicon glyphicon-edit' : 'glyphicon glyphicon-plus']]"></span>
	                    </button>
	                    
		                    <div class="progress ng-cloak" ng-show="progress">
								  <div class="progress-bar progress-bar-striped active"  role="progressbar" aria-valuenow="[[progress]]" aria-valuemin="0" aria-valuemax="100" style="width: [[progress]]%;">
								    [[progress]]%
								  </div>
								</div>
		                    <div class="alert alert-danger ng-cloak" role="alert" ng-show="error">
		                    <small>[[error]]</small></div>
		                    <input type="hidden" value="[[file]]" name="{{ 'feature_'.$feature['indexByName'].'_'.$i }}">
	                    </div>
	                </div>
	            @elseif($feature['input_type']=='document')
					<div ng-controller="upload" ng-init="file='{{ $file }}'">
	                    <div class="image thumbnail col-sm-2 " ng-file-select ng-model="files" accept=".txt,.doc,docx,.pdf" style="background-image:url('[[file]]'); cursor: pointer;" ng-click="type_file='{{ isset($urlDocument)?$urlDocument:'' }}'">
	                    <input type="hidden" value="[[file]]" name="{{ 'feature_'.$feature['indexByName'].'_'.$i }}">
	                    </div>
                    </div>
	            @elseif($feature['input_type']=='video')
					<div ng-controller="upload" ng-init="file='{{ $file }}'">
						<div class="image thumbnail col-sm-2 " ng-file-select ng-model="files" accept=".mp4" style="background-image:url('[[file]]'); cursor: pointer;" ng-click="type_file='{{ isset($urlVideo)?$urlVideo:'' }}'">
						<input type="hidden" value="[[file]]" name="{{ 'feature_'.$feature['indexByName'].'_'.$i }}">
	                    </div>
					</div>
				@endif
			@endfor
	        </div>
            @if(isset($feature['help_message']['general']))
            <label class="col-sm-10 col-sm-offset-2">{{ $feature['help_message']['general'] }}</label>
            @endif
	    </div>
		@endif
	@endforeach
@endif