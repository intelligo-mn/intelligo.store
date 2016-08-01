@extends("pages.users.userapp")
@section("usercontent")
<h2>{{ trans('index.settings') }}</h2>
@include('errors.adminlook', ['relatedid' => $userinfo->id, 'relatedtext' => trans('index.adminnote')])
    <div class="setting-form">

        {!! Form::open(array('action' => array('UsersController@updatesettings', $userinfo->username_slug), 'method' => 'POST', 'enctype' => 'multipart/form-data')) !!}
                <div class="diviner">
                    <i class="fa fa-cogs"></i> {{ trans('index.account') }}
                </div>
        @if(getcong('UserEditUsername')=='true' or Auth::user()->usertype=='Admin')
                <div class="form-group">
                    {!! Form::label('username', trans('index.username')) !!}
                    {!! Form::text('username', $userinfo->username, ['class' => 'cd-input','id' => 'username']) !!}
                </div>
        @endif
        @if(getcong('UserEditEmail')=='true' or Auth::user()->usertype=='Admin')
                <div class="form-group">
                    {!! Form::label('email', trans('index.email')) !!}
                    {!! Form::text('email', Auth::user()->email == 'demo@admin.com' ? 'HIDDEN ON DEMO' : $userinfo->email, ['class' => 'cd-input','id' => 'email']) !!}
                </div>
        @endif
                <div class="form-group">
                    {!! Form::label('password', trans('index.password')) !!}
                    {!! Form::text('password', null, ['class' => 'cd-input','id' => 'password', 'placeholder' => trans('index.onlycgange')]) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('icon', 'User Avatar') !!}
                    <div class="clear"></div>
                    <img src="{{ makepreview($userinfo->icon, 'b', 'members/avatar') }}" width="200" height="200" class="profile-image">
                    <img src="{{ makepreview($userinfo->icon, 's', 'members/avatar') }}" width="90" height="90" class="profile-image">
                    <div class="clear"></div>
                    <br>
                    <input type="file" accept="image/*" id="icon" name="icon">

                </div>
                <div class="diviner">
                    <i class="fa fa-user"></i> {{ trans('index.details') }}

                </div>
                <div class="form-group">
                    {!! Form::label('name', trans('index.fullname')) !!}
                    {!! Form::text('name', $userinfo->name, ['class' => 'cd-input','id' => 'name']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('town', trans('index.location')) !!}
                    {!! Form::text('town', $userinfo->town, ['class' => 'cd-input','id' => 'town', 'placeholder' => 'Where you live in?']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('gender', trans('index.gender')) !!}
                    {!! Form::select('gender', ['Male'=>'Male', 'Female'=>'Female', 'Other'=>'Other'], isset($userinfo->genre) ? $userinfo->genre : null, ['id' => 'gender']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('aboutyou', trans('index.about')) !!}
                    {!! Form::textarea('about', $userinfo->about, ['id' => 'aboutyou', 'placeholder' => 'Add some text about you.']) !!}
                </div>

        @if(getcong('UserAddSocial')=='true' or Auth::user()->usertype=='Admin')
                <div class="diviner">
                    <i class="fa fa-link"></i>  {{ trans('index.links') }}
                </div>
               <div class="form-group">
                    {!! Form::label('facebook', 'Facebook') !!}
                    {!! Form::text('facebook', $userinfo->facebookurl, ['class' => 'cd-input','id' => 'facebook']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('twitter', 'Twitter') !!}
                    {!! Form::text('twitter', $userinfo->twitterurl, ['class' => 'cd-input','id' => 'twitter']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('web', 'Website') !!}
                    {!! Form::text('web', $userinfo->weburl, ['class' => 'cd-input','id' => 'web']) !!}
                </div>
        @endif

                <div class="clear"></div>

                <div>
                    <input  class="button button-orange button-full" type="submit" value="{{ trans('index.savesettings') }}" >
                </div>
<br><br>
        {!! Form::close() !!}

    </div>

@endsection