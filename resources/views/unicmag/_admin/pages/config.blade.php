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
                            '1' => 'yoursite.com/{type}/{slug} (Default)',
                            '2' => 'yoursite.com/{type}/{id}',
                            '3' => 'yoursite.com/{username}/{slug}',
                            '4' => 'yoursite.com/{username}/{id}'
                             ], getcong('siteposturl'), ['class' => 'form-control'])  !!}

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
                            ], getcong('sitevoting'), ['class' => 'form-control'])  !!}

                        </div>
                        <span class="help-block">{{ trans('admin.Usersregistrationhelp') }}</span>

                        <hr>
                        <div class="form-group">
                                <label class="control-label">{{ trans('admin.Auto-listedonHomepage') }}</label>
                                {!! Form::select('AutoInHomepage', ['true' => trans('admin.on'),'false' => trans('admin.off')], getcong('AutoInHomepage'), ['class' => 'form-control'])  !!}

                            <span class="help-block">{{ trans('admin.Auto-listedonHomepagehelp') }}</span>
                        </div>
                        <hr>
                        <div class="form-group">
                                <label class="control-label">{{ trans('admin.AutoApprovePosts') }}</label>
                                {!! Form::select('AutoApprove', ['true' => trans('admin.on'),'false' => trans('admin.off')], getcong('AutoApprove'), ['class' => 'form-control'])  !!}

                            <span class="help-block">{{ trans('admin.AutoApprovePostshelp') }}</span>
                        </div>

                        <div class="form-group">
                            <label class="control-label">{{ trans('admin.Auto-approveeditedposts') }}</label>
                            {!! Form::select('AutoEdited', ['true' =>trans('admin.on'),'false' => trans('admin.off')], getcong('AutoEdited'), ['class' => 'form-control'])  !!}

                            <span class="help-block">{{ trans('admin.Auto-approveeditedpostshelp') }}</span>
                        </div>
                        <div class="form-group">
                            <label class="control-label">{{ trans('admin.Auto-LoadonLists') }}</label>
                            {!! Form::select('AutoLoadLists', ['true' => trans('admin.yes'),'false' => trans('admin.nouseload')], getcong('AutoLoadLists'), ['class' => 'form-control'])  !!}
                            <span class="help-block">{{ trans('admin.Auto-LoadonListshelp') }}</span>
                        </div>
                        <hr>

                        <H3>{{ trans('admin.UserPermissions') }}</H3>
                        <div class="form-group">
                            <label>
                                {{ trans('admin.Userscanpost') }}
                            </label>
                            {!! Form::select('UserCanPost', ['true' => trans('admin.yes'),'false' => trans('admin.no')], getcong('UserCanPost'), ['class' => 'form-control'])  !!}

                        </div>
                        <div class="form-group">
                            <label>
                                {{ trans('admin.Userscandeleteownposts') }}
                            </label>
                            {!! Form::select('UserDeletePosts', ['true' => trans('admin.yes'),'false' => trans('admin.no')], getcong('UserDeletePosts'), ['class' => 'form-control'])  !!}

                        </div>
                        <div class="form-group">
                            <label>
                                {{ trans('admin.Userscaneditownposts') }}
                            </label>
                            {!! Form::select('UserEditPosts', ['true' => trans('admin.yes'),'false' => trans('admin.no')], getcong('UserEditPosts'), ['class' => 'form-control'])  !!}

                        </div>
                        <div class="form-group">
                            <label>
                                {{ trans('admin.Userscaneditownusernames') }}
                            </label>
                            {!! Form::select('UserEditUsername', ['true' => trans('admin.yes'),'false' => trans('admin.no')], getcong('UserEditUsername'), ['class' => 'form-control'])  !!}

                        </div>
                         <div class="form-group">
                            <label>
                                {{ trans('admin.Userscaneditownemails') }}
                            </label>
                             {!! Form::select('UserEditEmail', ['true' => trans('admin.yes'),'false' => trans('admin.no')], getcong('UserEditEmail'), ['class' => 'form-control'])  !!}

                         </div>
                        <div class="form-group">
                            <label>
                                {{ trans('admin.Userscanaddownsocialmediaaddresses') }}
                            </label>
                            {!! Form::select('UserAddSocial', ['true' => trans('admin.yes'),'false' => trans('admin.no')], getcong('UserAddSocial'), ['class' => 'form-control'])  !!}

                        </div>
                        <hr>
                        <div class="form-group">
                            <H3>
                                 {{ trans('admin.UseRight-to-LeftLanguageSupport') }}
                            </H3>
                            {!! Form::select('languagetype', ['rtl' => trans('admin.yes'), '' => trans('admin.no')], getcong('languagetype'), ['class' => 'form-control'])  !!}

                        </div>
                        <hr>

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
                                <input type="text" class="form-control input-lg" name="facebookpage" value="{{  getcong('facebookpage') }}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><a class="btn btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></a>  {{ trans('admin.PageUrl') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="twitterpage" value="{{  getcong('twitterpage') }}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><a class="btn btn-social-icon btn-google"><i class="fa fa-google-plus"></i></a> {{ trans('admin.PageUrl') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="googlepage" value="{{  getcong('googlepage') }}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><a class="btn btn-social-icon btn-instagram"><i class="fa fa-instagram"></i></a> {{ trans('admin.PageUrl') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="instagrampage" value="{{  getcong('instagrampage') }}">
                            </div>
                        </div>


                        <hr>

                    </div>
                </div>

            </div><!-- /.col -->

        </div><!-- /.row -->

  @elseif(Request::query('q') == 'email')

        <div class="row">
            <div class="col-md-6 col-lg-6">
                <div class="panel panel-info">
                    <div class="panel-heading">{{ trans('admin.EmailSettings') }}</div>
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="control-label">{{ trans('admin.Siteemail') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="siteemail" value="{{  getcong('siteemail') }}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><a class="btn btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></a>  {{ trans('admin.PageUrl') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="twitterpage" value="{{  getcong('twitterpage') }}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><a class="btn btn-social-icon btn-google"><i class="fa fa-google-plus"></i></a> {{ trans('admin.PageUrl') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="googlepage" value="{{  getcong('googlepage') }}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><a class="btn btn-social-icon btn-instagram"><i class="fa fa-instagram"></i></a> {{ trans('admin.PageUrl') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="instagrampage" value="{{  getcong('instagrampage') }}">
                            </div>
                        </div>


                        <hr>

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
                            {!! Form::select('LayoutType', ['mode-wide' => trans('admin.Wide'),'mode-boxed' => trans('admin.Boxed')], getcong('LayoutType'), ['class' => 'form-control'])  !!}

                        </div>
                        <div class="form-group">
                            <label>{{ trans('admin.NavbarType') }}</label>
                            {!! Form::select('NavbarType', ['navbar-fixed' => trans('admin.Fixed'),'mode-relative' => trans('admin.Relative')], getcong('NavbarType'), ['class' => 'form-control'])  !!}

                        </div>
                        <hr>
                        <div class="form-group">
                            <label>{{ trans('admin.SiteBackgroundColor') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="BodyBC" class="form-control" value="{{  getcong('BodyBC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getcong('BodyBC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{{ trans('admin.SiteBackgroundColorOnBoxedMode') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="BodyBCBM" class="form-control" value="{{  getcong('BodyBCBM') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getcong('BodyBCBM') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <hr>
                        <div class="form-group">
                            <label>{{ trans('admin.NavbarBackgroundColor') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="NavbarBC" class="form-control" value="{{  getcong('NavbarBC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getcong('NavbarBC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{{ trans('admin.NavbarTop3PixelBorderLineColor') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="NavbarTBLC" class="form-control" value="{{  getcong('NavbarTBLC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getcong('NavbarTBLC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{{ trans('admin.NavbarLinkColor') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="NavbarLC" class="form-control" value="{{  getcong('NavbarLC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getcong('NavbarLC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{{ trans('admin.NavbarLinkHoverColor') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="NavbarLHC" class="form-control" value="{{  getcong('NavbarLHC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getcong('NavbarLHC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{!! trans('admin.NavbarCreateButtonBackgroundColor') !!}<</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="NavbarCBBC" class="form-control" value="{{  getcong('NavbarCBBC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getcong('NavbarCBBC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{!! trans('admin.NavbarCreateButtonFontColor') !!}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="NavbarCBFC" class="form-control" value="{{  getcong('NavbarCBFC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getcong('NavbarCBFC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{!! trans('admin.NavbarCreateButtonHoverBackgroundColor') !!}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="NavbarCBHBC" class="form-control" value="{{  getcong('NavbarCBHBC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getcong('NavbarCBHBC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{!! trans('admin.NavbarCreateButtonHoverFontColor') !!}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="NavbarCBHFC" class="form-control" value="{{  getcong('NavbarCBHFC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getcong('NavbarCBHFC') }};"></i>
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
                            <label class="control-label">{{ trans('admin.SiteName') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="sitename" value="{{  getcong('sitename') }}" required="required">
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
                                <input type="text" class="form-control" name="sitetitle" value="{{  getcong('sitetitle') }}" required="required">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">{{ trans('admin.SiteDefaultMetaDescription') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control" name="sitemetadesc" value="{{  getcong('sitemetadesc') }}" required="required">
                            </div>
                        </div>
                <hr>
                    <div class="form-group">
                        <label class="control-label">{{ trans('admin.TermsofUsePageUrl') }}</label>
                        <div class="controls">
                            <input type="text" class="form-control input-lg" name="termspage" value="{{  getcong('termspage') }}">
                        </div>
                        <span class="help-block">{{ trans('admin.TermsofUsePageUrlhelp') }}</span>
                    </div>
                    <hr>
                    <div class="form-group">
                        <label class="control-label">{{ trans('admin.Siteemail') }}</label>
                        <div class="controls">
                            <input type="text" class="form-control input-lg" name="siteemail" value="{{  getcong('siteemail') }}">
                        </div>
                    </div>
                    <hr>
                    <div class="form-group">
                        <label class="control-label">{{ trans('admin.SiteLanguageCountryCodes') }}</label>
                        <div class="controls">
                            <input type="text" class="form-control input-lg" name="sitelanguage" value="{{  getcong('sitelanguage') }}">
                        </div>
                        <span class="help-block">{!! trans('admin.SiteLanguageCountryCodeshelp') !!}</span>
                    </div>
                    <hr>
                    <div class="form-group">
                        <label class="control-label">{{ trans('admin.GoogleFontConfig') }}</label>
                        <div class="controls">
                            <input type="text" class="form-control input-lg" name="googlefont" value="{{  getcong('googlefont') }}">
                        </div>
                        <span class="help-block">{!!   trans('admin.GoogleFontConfighelp') !!} </span>
                    </div>
                    <hr>
                    <div class="form-group">
                        <label class="control-label">{{ trans('admin.SiteFont') }} </label>
                        <div class="controls">
                            <input type="text" class="form-control input-lg" name="sitefontfamily" value="{{  getcong('sitefontfamily') }}">
                        </div>
                        <span class="help-block">{{ trans('admin.SiteFonthelp') }} </span>
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
                            <input type="text" class="form-control" id="facebookapp" name="facebookapp" value="{{ getcong('facebookapp') }}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="facebookappsecret" class="col-sm-2 control-label">App SECRET</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="facebookappsecret" name="facebookappsecret" value="{{  \Auth::user()->email == 'demo@admin.com' ?  "-YOU DO'NT HAVE PERMISSION TO SEE THAT-" : getcong('facebookappsecret')  }}">
                        </div>
                    </div>
                    <br><br>
                    <legend><a class="btn btn-social-icon btn-google"><i class="fa fa-google-plus"></i></a> Google</legend>
                    <div class="form-group">
                        <label for="googleapp" class="col-sm-2 control-label">App ID</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="googleapp" name="googleapp" value="{{  getcong('googleapp') }}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="googleappsecret" class="col-sm-2 control-label">App SECRET</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="googleappsecret" name="googleappsecret" value="{{  \Auth::user()->email == 'demo@admin.com' ?  "-YOU DO'NT HAVE PERMISSION TO SEE THAT-" : getcong('googleappsecret')  }}">
                        </div>
                    </div>
                    <br><br>
                    <legend><a class="btn btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></a> Twitter</legend>
                    <div class="form-group">
                        <label for="twitterapp" class="col-sm-2 control-label">App ID</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="twitterapp" name="twitterapp" value="{{  getcong('twitterapp') }}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="twitterappsecret" class="col-sm-2 control-label">App SECRET</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="twitterappsecret" name="twitterappsecret" value="{{  \Auth::user()->email == 'demo@admin.com' ?  "-YOU DO'NT HAVE PERMISSION TO SEE THAT-" : getcong('twitterappsecret')  }}">
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
                    <textarea name="headcode" style="height:120px" class="form-control">{{  getcong('headcode') }}</textarea>
                    <span class="help-block">{{ trans('admin.HeadCodehelp') }}</span>
                    <br>
                    <legend>{{ trans('admin.Footercode') }}</legend>
                    <textarea name="footercode" style="height:120px" class="form-control">{{  getcong('footercode') }}</textarea>
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