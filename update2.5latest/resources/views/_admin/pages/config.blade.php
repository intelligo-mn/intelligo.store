@extends("_admin.adminapp")
        @section('header')
             <link rel="stylesheet" href="/adminlte/plugins/colorpicker/bootstrap-colorpicker.min.css">
        @endsection
@section("content")
        <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        {{ trans('admin.Settings') }}
    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i>  {{ trans('admin.dashboard') }}</a></li>
        <li class="active"> {{ trans('admin.Settings') }}</li>
    </ol>
</section>

<section class="content">
    {!!   Form::open(array('action' => 'Admin\ConfigController@setconfig', 'method' => 'POST', 'enctype' => 'multipart/form-data')) !!}
@if(Request::query('q') == 'others')

        <div class="row">
            <div class="col-md-6 col-lg-6">
                <div class="panel panel-primary">
                    <div class="panel-heading">{{ trans('admin.OptionalConfigurations') }}</div>
                    <div class="panel-body">
                        <div class="form-group">
                            <label>
                               {{ trans('admin.SitePostsUrlType') }}
                            </label>
                            {!! Form::select('siteposturl', [
                            '1' => 'yoursite.com/{category}/{slug} (Default)',
                            '2' => 'yoursite.com/{category}/{id}',
                            '3' => 'yoursite.com/{username}/{slug}',
                            '4' => 'yoursite.com/{username}/{id}',
                            '5' => 'yoursite.com/{category}/{slug}-{id}'
                             ], getenvcong('siteposturl'), ['class' => 'form-control'])  !!}

                        </div>
                        <span class="help-block">{{ trans('admin.SitePostsUrlTypehelp') }}</span>

                        <hr>
                        <div class="form-group">
                            <label>
                                {{ trans('admin.Usersregistration') }}
                            </label>
                            {!! Form::select('sitevoting', [
                            '0' => trans('admin.yes'),
                            '1' => trans('admin.no')
                            ], getenvcong('sitevoting'), ['class' => 'form-control'])  !!}

                        </div>
                        <span class="help-block">{{ trans('admin.Usersregistrationhelp') }}</span>

                        <hr>
                        <div class="form-group">
                                <label class="control-label">{{ trans('admin.Auto-listedonHomepage') }}</label>
                                {!! Form::select('AutoInHomepage', ['true' => trans('admin.on'), 'no' => trans('admin.off')], getenvcong('AutoInHomepage'), ['class' => 'form-control'])  !!}

                        </div>
                        <hr>
                        <div class="form-group">
                                <label class="control-label">{{ trans('admin.AutoApprovePosts') }}</label>
                                {!! Form::select('AutoApprove', ['true' => trans('admin.on'),'no' => trans('admin.off')], getenvcong('AutoApprove'), ['class' => 'form-control'])  !!}

                            <span class="help-block">{{ trans('admin.AutoApprovePostshelp') }}</span>
                        </div>

                        <div class="form-group">
                            <label class="control-label">{{ trans('admin.Auto-approveeditedposts') }}</label>
                            {!! Form::select('AutoEdited', ['yes' =>trans('admin.on'),'no' => trans('admin.off')], getenvcong('AutoEdited'), ['class' => 'form-control'])  !!}

                            <span class="help-block">{{ trans('admin.Auto-approveeditedpostshelp') }}</span>
                        </div>
                        <div class="form-group">
                            <label class="control-label">{{ trans('admin.Auto-LoadonLists') }}</label>
                            {!! Form::select('AutoLoadLists', ['yes' => trans('admin.yes'),'no' => trans('admin.nouseload')], getenvcong('AutoLoadLists'), ['class' => 'form-control'])  !!}
                            <span class="help-block">{{ trans('admin.Auto-LoadonListshelp') }}</span>
                        </div>
                        <hr>
                        <div class="form-group">
                            <label class="control-label">Reaction Vote Count </label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="showreactioniconon" value="{{  getenvcong('showreactioniconon') }}">
                            </div>
                            <span class="help-block">Add number of reaction voting count to show icon on posts</span>
                        </div>

                        <div class="form-group">
                            <label class="control-label">Show Preview Image on Post Page</label>
                            <div class="controls">
                                {!! Form::select('PostPreviewShow', ['yes' => trans('admin.yes'),'no' => trans('admin.no')], getenvcong('PostPreviewShow'), ['class' => 'form-control'])  !!}
                            </div>
                        </div>
                        <HR>
                        <H3>{{ trans('admin.UserPermissions') }}</H3>
                        <div class="form-group">
                            <label>
                                {{ trans('admin.Userscanpost') }}
                            </label>
                            {!! Form::select('UserCanPost', ['yes' => trans('admin.yes'),'no' => trans('admin.no')], getenvcong('UserCanPost'), ['class' => 'form-control'])  !!}

                        </div>
                        <div class="form-group">
                            <label>
                                {{ trans('admin.Userscandeleteownposts') }}
                            </label>
                            {!! Form::select('UserDeletePosts', ['yes' => trans('admin.yes'),'no' => trans('admin.no')], getenvcong('UserDeletePosts'), ['class' => 'form-control'])  !!}

                        </div>
                        <div class="form-group">
                            <label>
                                {{ trans('admin.Userscaneditownposts') }}
                            </label>
                            {!! Form::select('UserEditPosts', ['yes' => trans('admin.yes'),'no' => trans('admin.no')], getenvcong('UserEditPosts'), ['class' => 'form-control'])  !!}

                        </div>
                        <div class="form-group">
                            <label>
                                {{ trans('admin.Userscaneditownusernames') }}
                            </label>
                            {!! Form::select('UserEditUsername', ['yes' => trans('admin.yes'),'no' => trans('admin.no')], getenvcong('UserEditUsername'), ['class' => 'form-control'])  !!}

                        </div>
                         <div class="form-group">
                            <label>
                                {{ trans('admin.Userscaneditownemails') }}
                            </label>
                             {!! Form::select('UserEditEmail', ['yes' => trans('admin.yes'),'no' => trans('admin.no')], getenvcong('UserEditEmail'), ['class' => 'form-control'])  !!}

                         </div>
                        <div class="form-group">
                            <label>
                                {{ trans('admin.Userscanaddownsocialmediaaddresses') }}
                            </label>
                            {!! Form::select('UserAddSocial', ['yes' => trans('admin.yes'),'no' => trans('admin.no')], getenvcong('UserAddSocial'), ['class' => 'form-control'])  !!}

                        </div>

                        <hr>

                    </div>
                </div>

            </div><!-- /.col -->

        </div><!-- /.row -->

    @elseif(Request::query('q') == 'mail')

        <div class="row">
            <div class="col-md-6 col-lg-6">
                <div class="panel panel-primary">
                    <div class="panel-heading">{{ trans('admin.MailSettings') }} </div>
                    <div class="panel-body">
                        <a href="http://buzzy.akbilisim.com/admin/docs#mail" target="_blank" style="margin-top:10px;color:#fff!important;" class="btn btn-sm btn-success pull-left"><i class="fa fa-eye"></i> See here for more info</a><br>
                        <div class="clearfix"></div>
                        <div class="form-group">
                            <label class="control-label"> MAIL_DRIVER</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" placeholder="smtp" name="MAIL_DRIVER" value="{{  getenvcong('MAIL_DRIVER') }}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"> MAIL_HOST</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" placeholder="smtp.gmail.com" name="MAIL_HOST" value="{{  getenvcong('MAIL_HOST') }}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"> MAIL_PORT</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" placeholder="587" name="MAIL_PORT" value="{{  getenvcong('MAIL_PORT') }}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"> MAIL_USERNAME</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="MAIL_USERNAME" value="{{   \Auth::user()->email == 'demo@admin.com' ?  "-YOU DON'T HAVE PERMISSION TO SEE THAT-" : getenvcong('MAIL_USERNAME')  }}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"> MAIL_PASSWORD</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="MAIL_PASSWORD" value="{{  \Auth::user()->email == 'demo@admin.com' ?  "-YOU DON'T HAVE PERMISSION TO SEE THAT-" : getenvcong('MAIL_PASSWORD')   }}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"> MAIL_ENCRYPTION</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" placeholder="tls" name="MAIL_ENCRYPTION" value="{{  getenvcong('MAIL_ENCRYPTION') }}">
                            </div>
                        </div>


                    </div>
                </div>

            </div><!-- /.col -->

        </div><!-- /.row -->

    @elseif(Request::query('q') == 'social')

        <div class="row">
            <div class="col-md-6 col-lg-6">
                <div class="panel panel-info">
                    <div class="panel-heading">{{ trans('admin.SocialMedia') }}</div>
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="control-label"><a class="btn btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></a>  {{ trans('admin.PageUrl') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="facebookpage" value="{{  getenvcong('facebookpage') }}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><a class="btn btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></a>  {{ trans('admin.PageUrl') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="twitterpage" value="{{  getenvcong('twitterpage') }}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><a class="btn btn-social-icon btn-google"><i class="fa fa-google-plus"></i></a> {{ trans('admin.PageUrl') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="googlepage" value="{{  getenvcong('googlepage') }}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><a class="btn btn-social-icon btn-instagram"><i class="fa fa-instagram"></i></a> {{ trans('admin.PageUrl') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="instagrampage" value="{{  getenvcong('instagrampage') }}">
                            </div>
                        </div>


                    </div>
                </div>

            </div><!-- /.col -->

        </div><!-- /.row -->

  @elseif(Request::query('q') == 'layout')
        <div class="row">
            <div class="col-md-6 col-lg-6">
                <div class="panel panel-primary">
                    <div class="panel-heading">{{ trans('admin.LayoutConfiguration') }}</div>
                    <div class="panel-body">
                        <div class="form-group">
                            <label>{{ trans('admin.SiteLayoutType') }}</label>
                            {!! Form::select('LayoutType', ['mode-wide' => trans('admin.Wide'),'mode-boxed' => trans('admin.Boxed')], getenvcong('LayoutType'), ['class' => 'form-control'])  !!}

                        </div>
                        <div class="form-group">
                            <label>{{ trans('admin.NavbarType') }}</label>
                            {!! Form::select('NavbarType', ['navbar-fixed' => trans('admin.Fixed'),'mode-relative' => trans('admin.Relative')], getenvcong('NavbarType'), ['class' => 'form-control'])  !!}

                        </div>
                        <hr>
                        <div class="form-group">
                            <label>{{ trans('admin.SiteBackgroundColor') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="BodyBC" class="form-control" value="{{  getenvcong('BodyBC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('BodyBC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{{ trans('admin.SiteBackgroundColorOnBoxedMode') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="BodyBCBM" class="form-control" value="{{  getenvcong('BodyBCBM') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('BodyBCBM') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <hr>
                        <div class="form-group">
                            <label>{{ trans('admin.NavbarBackgroundColor') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="NavbarBC" class="form-control" value="{{  getenvcong('NavbarBC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('NavbarBC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{{ trans('admin.NavbarTop3PixelBorderLineColor') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="NavbarTBLC" class="form-control" value="{{  getenvcong('NavbarTBLC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('NavbarTBLC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{{ trans('admin.NavbarLinkColor') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="NavbarLC" class="form-control" value="{{  getenvcong('NavbarLC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('NavbarLC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{{ trans('admin.NavbarLinkHoverColor') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="NavbarLHC" class="form-control" value="{{  getenvcong('NavbarLHC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('NavbarLHC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{!! trans('admin.NavbarCreateButtonBackgroundColor') !!}<</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="NavbarCBBC" class="form-control" value="{{  getenvcong('NavbarCBBC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('NavbarCBBC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{!! trans('admin.NavbarCreateButtonFontColor') !!}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="NavbarCBFC" class="form-control" value="{{  getenvcong('NavbarCBFC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('NavbarCBFC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{!! trans('admin.NavbarCreateButtonHoverBackgroundColor') !!}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="NavbarCBHBC" class="form-control" value="{{  getenvcong('NavbarCBHBC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('NavbarCBHBC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{!! trans('admin.NavbarCreateButtonHoverFontColor') !!}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="NavbarCBHFC" class="form-control" value="{{  getenvcong('NavbarCBHFC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('NavbarCBHFC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <hr>

                    </div>
                </div>

            </div><!-- /.col -->

        </div><!-- /.row -->
@else
    <div class="row">
        <div class="col-md-6 col-lg-6">
            <div class="panel panel-success">
                <div class="panel-heading">{{ trans('admin.MainConfiguration') }}</div>
                <div class="panel-body">

                    <div class="form-group">
                        <label class="control-label">{{ trans('admin.SiteLanguage') }}</label>
                        <div class="controls">
                            <select name="sitedefaultlanguage" class="form-control">
                            @if(null !== getenvcong('sitename'))
                                   <option value="{{  getenvcong('sitedefaultlanguage') }}" selected>{{  getenvcong('sitedefaultlanguage') }}</option>
                            @endif

                            @foreach(\Config::get('app.language') as $key => $lang)
                                <option value="{{ $key }}">{{ $key }} - {{ $lang['name'] }}</option>
                            @endforeach
                            </select>
                        </div>
                    </div>

                        <div class="form-group">
                            <label class="control-label">{{ trans('admin.SiteName') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="sitename" value="{{  getenvcong('sitename') }}" required="required">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6">
                                <div class="form-group">
                                    <label for="sitelogo">{{ trans('admin.SiteLogo') }}</label>
                                    <input type="file" id="sitelogo" name="sitelogo">
                                    <p class="help-block">{{ trans('admin.SiteLogohelp') }}</p>
                                </div>
                            </div>
                            <div class="col-xs-3">
                                <img class="field-image-preview img-thumbnail " width="150" src="{{ asset('assets/img/logo.png') }}">
                            </div>
                        </div>
                    <hr>
                    <div class="row">
                            <div class="col-xs-6">
                                <div class="form-group">
                                    <label for="footerlogo">{{ trans('admin.FooterSiteLogo') }}</label>
                                    <input type="file" id="footerlogo" name="footerlogo">
                                    <p class="help-block">{{ trans('admin.SiteLogohelp') }}</p>
                                </div>
                            </div>
                            <div class="col-xs-3">
                                <img class="field-image-preview img-thumbnail" src="{{ asset('assets/img/flogo.png') }}">
                            </div>

                        </div>  <hr>
                        <div class="row">
                            <div class="col-xs-6">
                                <div class="form-group">
                                    <label for="favicon">{{ trans('admin.SiteFavicon') }}</label>
                                    <input type="file" id="favicon" name="favicon">
                                    <p class="help-block">{{ trans('admin.SiteFaviconhelp') }}</p>
                                </div>
                            </div>
                            <div class="col-xs-3">
                                <img class="field-image-preview img-thumbnail " width="40" src="{{ asset('assets/img/favicon.png') }}">
                            </div>

                        </div>

                        <div class="form-group">
                            <label class="control-label">{{ trans('admin.SiteDefaultMetaTitle') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control" name="sitetitle" value="{{  getenvcong('sitetitle') }}" required="required">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">{{ trans('admin.SiteDefaultMetaDescription') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control" name="sitemetadesc" value="{{  getenvcong('sitemetadesc') }}" required="required">
                            </div>
                        </div>
                <hr>
                    <div class="form-group">
                        <label class="control-label">{{ trans('admin.TermsofUsePageUrl') }}</label>
                        <div class="controls">
                            <input type="text" class="form-control input-lg" name="termspage" value="{{  getenvcong('termspage') }}">
                        </div>
                        <span class="help-block">{{ trans('admin.TermsofUsePageUrlhelp') }}</span>
                    </div>
                    <hr>
                    <div class="form-group">
                        <label class="control-label">{{ trans('admin.Siteemail') }}</label>
                        <div class="controls">
                            <input type="text" class="form-control input-lg" name="siteemail" value="{{  getenvcong('siteemail') }}">
                        </div>
                    </div>
                    <hr>

                    <div class="form-group">
                        <label class="control-label">{{ trans('admin.SiteLanguageCountryCodes') }}</label>
                        <div class="controls">
                            <input type="text" class="form-control input-lg" name="sitelanguage" value="{{  getenvcong('sitelanguage') }}">
                        </div>
                        <span class="help-block">{!! trans('admin.SiteLanguageCountryCodeshelp') !!}</span>
                    </div>
                    <HR>
                    <div class="form-group">
                        <label>{{ trans('admin.Siteactive') }}</label>
                        {!! Form::select('Siteactive', ['yes' => trans('admin.yes'),'no' => trans('admin.no')], getenvcong('Siteactive'), ['class' => 'form-control'])  !!}

                    </div>
                    <div class="form-group">
                        <label>{{ trans('admin.Siteactivenote') }}</label>
                        <input type="text" class="form-control input-lg" name="Siteactivenote" value="{{  getenvcong('Siteactivenote') }}">

                    </div>

                </div>
            </div>

        </div><!-- /.col -->

    </div><!-- /.row -->
    <div class="row">

        <div class="col-md-6 col-lg-6">

            <div class="panel panel-info">
                <div class="panel-heading">{{ trans('admin.LoginConfiguration') }}</div>
                <div class="panel-body form-horizontal">
                    <legend><a class="btn btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></a> Facebook</legend>
                    <div class="form-group">
                        <label for="facebookapp" class="col-sm-2 control-label">App ID</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="facebookapp" name="facebookapp" value="{{ getenvcong('facebookapp') }}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="facebookappsecret" class="col-sm-2 control-label">App SECRET</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="facebookappsecret" name="facebookappsecret" value="{{  \Auth::user()->email == 'demo@admin.com' ?  "-YOU DON'T HAVE PERMISSION TO SEE THAT-" : getenvcong('facebookappsecret')  }}">
                        </div>
                    </div>
                    <br><br>
                    <legend><a class="btn btn-social-icon btn-google"><i class="fa fa-google-plus"></i></a> Google</legend>
                    <div class="form-group">
                        <label for="googleapp" class="col-sm-2 control-label">App ID</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="googleapp" name="googleapp" value="{{  getenvcong('googleapp') }}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="googleappsecret" class="col-sm-2 control-label">App SECRET</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="googleappsecret" name="googleappsecret" value="{{  \Auth::user()->email == 'demo@admin.com' ?  "-YOU DON'T HAVE PERMISSION TO SEE THAT-" : getenvcong('googleappsecret')  }}">
                        </div>
                    </div>
                    <br><br>
                    <legend><a class="btn btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></a> Twitter</legend>
                    <div class="form-group">
                        <label for="twitterapp" class="col-sm-2 control-label">App ID</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="twitterapp" name="twitterapp" value="{{  getenvcong('twitterapp') }}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="twitterappsecret" class="col-sm-2 control-label">App SECRET</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="twitterappsecret" name="twitterappsecret" value="{{  \Auth::user()->email == 'demo@admin.com' ?  "-YOU DON'T HAVE PERMISSION TO SEE THAT-" : getenvcong('twitterappsecret')  }}">
                        </div>
                    </div>
                    <br><br>
                    <legend><a class="btn btn-social-icon btn-vk"><i class="fa fa-vk"></i></a> Vkontakte</legend>
                    <div class="form-group">
                        <label for="VKONTAKTE_KEY" class="col-sm-2 control-label">App ID</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="VKONTAKTE_KEY" name="VKONTAKTE_KEY" value="{{  getenvcong('VKONTAKTE_KEY') }}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="VKONTAKTE_SECRET" class="col-sm-2 control-label">App SECRET</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="VKONTAKTE_SECRET" name="VKONTAKTE_SECRET" value="{{  \Auth::user()->email == 'demo@admin.com' ?  "-YOU DON'T HAVE PERMISSION TO SEE THAT-" : getenvcong('VKONTAKTE_SECRET')  }}">
                        </div>
                    </div>
                </div>
            </div>

        </div><!-- /.col -->
    </div><!-- /.row -->

    <div class="row">

        <div class="col-md-6 col-lg-6">

            <div class="panel panel-info">
                <div class="panel-heading">Use Google reCaptcha on login, register, contact form</div>
                <div class="panel-body form-horizontal">
                    <div class="form-group">
                        <label for="facebookapp" class="col-sm-2 control-label">{!! trans("admin.Usecaptchaoncontactform")  !!}</label>
                        <div class="col-sm-10">
                            {!! Form::select('BuzzyContactCaptcha', ['on' => trans("admin.yes"), 'off' => trans("admin.no")], getenvcong('BuzzyContactCaptcha'), ['class' => 'form-control'])  !!}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="facebookappsecret" class="col-sm-2 control-label">App ID</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control input-lg" name="reCaptchaKey" value="{{  getenvcong('reCaptchaKey') }}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="facebookappsecret" class="col-sm-2 control-label">App SECRET</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control input-lg" name="reCaptchaSecret" value="{{  \Auth::user()->email == 'demo@admin.com' ?  trans("admin.youPERMISSION") : getenvcong('reCaptchaSecret')  }}">
                        </div>
                    </div>

                </div>
            </div>

        </div><!-- /.col -->
    </div><!-- /.row -->

        <div class="row">

        <div class="col-md-6 col-lg-6">

            <div class="panel panel-danger">
                <div class="panel-heading">{{ trans('admin.AdvancedConfiguration') }}</div>
                <div class="panel-body form-horizontal">
                    <legend>{{ trans('admin.HeadCode') }}</legend>
                    <textarea name="headcode" style="height:120px" class="form-control">{!!   rawurldecode(getenvcong('headcode')) !!}</textarea>
                    <span class="help-block">{{ trans('admin.HeadCodehelp') }}</span>
                    <br>
                    <legend>{{ trans('admin.Footercode') }}</legend>
                    <textarea name="footercode" style="height:120px" class="form-control">{!!    rawurldecode(getenvcong('footercode')) !!}</textarea>
                    <span class="help-block">{{ trans('admin.Footercodehelp') }}</span>

                </div>
            </div>

        </div><!-- /.col -->
    </div><!-- /.row -->

@endif
    <div class="row">
        <div class="col-md-6 col-lg-6">

            <input type="submit" value="{{ trans('admin.SaveSettings') }}" class="btn btn-block btn-info btn-lg">

        </div><!-- /.col -->
    </div><!-- /.row -->
    {!! Form::close() !!}
</section>
@endsection
@section("footer")
    <script src="/adminlte/plugins/colorpicker/bootstrap-colorpicker.min.js"></script>
    <script src="/adminlte/plugins/iCheck/icheck.min.js"></script>
    <script>
        $(function () {
            //iCheck for checkbox and radio inputs
            //Flat red color scheme for iCheck
            $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
                checkboxClass: 'icheckbox_flat-green',
                radioClass: 'iradio_flat-green'
            });

            //Colorpicker
            $(".my-colorpicker1").colorpicker();
            //color picker with addon
            $(".my-colorpicker2").colorpicker();

        });
    </script>
@endsection