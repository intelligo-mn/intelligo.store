<legend>{{ trans('addpost.addnew') }}</legend>


    <a class="button button-gray button-big submit-button postable" data-method="Get" data-target="entries" data-puttype="append" data-type="textform" href="{{ action('FormController@addnewform') }}?addnew=text" ><i class="fa fa-file-text"></i>{{ trans('addpost.add', ['type' => trans('addpost.text')]) }}</a>
    <a class="button button-orange button-big submit-button postable" data-method="Get" data-target="entries" data-puttype="append" data-type="imageform" href="{{ action('FormController@addnewform') }}?addnew=image" ><i class="fa fa-picture-o"></i>{{ trans('addpost.add', ['type' => trans('addpost.image')]) }}</a>
    <a class="button button-red button-big submit-button postable" data-method="Get" data-target="entries" data-puttype="append" data-type="videoform" href="{{ action('FormController@addnewform') }}?addnew=video"><i class="fa fa-youtube-play"></i>{{ trans('addpost.add', ['type' => trans('addpost.video')]) }}</a>

    <a class="button button-blue button-big submit-button postable" data-method="Get" data-target="entries" data-puttype="append" data-type="pollform" href="{{ action('FormController@addnewform') }}?addnew=poll" ><i class="fa fa-check-circle-o"></i>{{ trans('addpost.add', ['type' => trans('addpost.option')]) }}</a>

    <a class="button button-black button-big submit-button moreentry" href="javascript:;" >{{ trans('updates.more') }} <i class="fa fa-caret-down" style="margin:0 0 0 10px"></i></a>


    <div class="moreentrywidget" style="display: none">
    <a class="button button-blue button-big submit-button postable" data-method="Get" data-target="entries" data-puttype="append" data-type="tweetform" href="{{ action('FormController@addnewform') }}?addnew=tweet"><i class="fa fa-twitter"></i>{{ trans('addpost.add', ['type' => trans('updates.tweet')]) }}</a>

    <a class="button button-blue button-big submit-button postable" data-method="Get" data-target="entries" data-puttype="append" data-type="facebookpostform" href="{{ action('FormController@addnewform') }}?addnew=facebookpost"><i class="fa fa-facebook"></i>{{ trans('addpost.add', ['type' => trans('updates.facebookpost')]) }}</a>

    <a class="button button-instagram button-big submit-button postable" data-method="Get" data-target="entries" data-puttype="append" data-type="instagramform" href="{{ action('FormController@addnewform') }}?addnew=instagram"><i class="fa fa-instagram"></i>{{ trans('addpost.add', ['type' => trans('updates.instagram')]) }}</a>

    <a class="button button-soundcloud button-big  submit-button postable" data-method="Get" data-target="entries" data-puttype="append" data-type="soundcloudform" href="{{ action('FormController@addnewform') }}?addnew=soundcloud"><i class="fa fa-soundcloud"></i>{{ trans('addpost.add', ['type' => trans('updates.soundcloud')]) }}</a>

    <a class="button button-black button-big submit-button postable" data-method="Get" data-target="entries" data-puttype="append" data-type="embedform" href="{{ action('FormController@addnewform') }}?addnew=embed" ><i class="fa fa-code"></i>{{ trans('addpost.add', ['type' => trans('addpost.embed')]) }}</a>
    </div>
