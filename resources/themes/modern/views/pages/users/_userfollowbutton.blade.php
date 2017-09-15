@if(Auth::check())
@if($userinfo->followers()->currentUserFollow()->count() > 0)
    <a class="button button-white button-small postable" data-method="Post" data-target="following_area" href="{{ action('UsersController@follow', [$userinfo->username_slug] ) }}" rel="nofollow">
        <i class="fa fa-user-times" style="margin-right:5px;"></i>  {{ trans('updates.followinguser') }}
    </a>
@else

    @if(Auth::user()->id!=$userinfo->id)
    <a class="button button-white button-small postable" data-method="Post" data-target="following_area" href="{{ action('UsersController@follow', [$userinfo->username_slug] ) }}" rel="nofollow">
      <i class="fa fa-user-plus" style="margin-right:5px;"></i>  {{ trans('updates.follow') }}
    </a>
    @endif
@endif
@endif