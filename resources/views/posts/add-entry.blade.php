<legend>{{ trans('addpost.addnew') }}</legend>
@if($typene=='poll')
    <a class="button button-blue button-big submit-button postable" data-method="Get" data-target="entries" data-puttype="append" data-type="pollform" href="{{ action('FormController@addnewform') }}?addnew=poll" ><i class="fa fa-check-circle-o"></i>{{ trans('addpost.add', ['type' => trans('addpost.option')]) }}</a>
@endif
@unless($typene=='poll')
    <a class="button button-gray button-big submit-button postable" data-method="Get" data-target="entries" data-puttype="append" data-type="textform" href="{{ action('FormController@addnewform') }}?addnew=text" ><i class="fa fa-file-text"></i>{{ trans('addpost.add', ['type' => trans('addpost.text')]) }}</a>
    @unless($typene=='video')
        <a class="button button-orange button-big submit-button postable" data-method="Get" data-target="entries" data-puttype="append" data-type="imageform" href="{{ action('FormController@addnewform') }}?addnew=image" ><i class="fa fa-picture-o"></i>{{ trans('addpost.add', ['type' => trans('addpost.image')]) }}</a>
    @endunless
    <a class="button button-red button-big submit-button postable" data-method="Get" data-target="entries" data-puttype="append" data-type="videoform" href="{{ action('FormController@addnewform') }}?addnew=video"><i class="fa fa-youtube-play"></i>{{ trans('addpost.add', ['type' => trans('addpost.video')]) }}</a>

    <a class="button button-black button-big submit-button postable" data-method="Get" data-target="entries" data-puttype="append" data-type="embedform" href="{{ action('FormController@addnewform') }}?addnew=embed" ><i class="fa fa-code"></i>{{ trans('addpost.add', ['type' => trans('addpost.embed')]) }}</a>
@endunless
