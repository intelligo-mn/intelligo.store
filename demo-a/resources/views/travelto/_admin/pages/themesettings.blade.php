@extends("_admin.adminapp")
@section('header')
    <link rel="stylesheet" href="/adminlte/plugins/colorpicker/bootstrap-colorpicker.min.css">
    @endsection
@section("content")
        <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        {{ trans('themes.themes') }}  > {{ $theme['t_name'] }} > {{ trans('admin.Settings') }}
    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> {{ trans('admin.dashboard') }}</a></li>
        <li><a href="/admin/themes"> {{ trans('themes.themes') }}</a></li>
        <li class="active">{{ $theme['t_name'] }}</li>
    </ol>
</section>

<!-- Main content -->
<section class="content">

{!!   Form::open(array('action' => 'Admin\ConfigController@setconfig', 'method' => 'POST', 'enctype' => 'multipart/form-data')) !!}


 @if($theme['t_code'] == 'default')
    <div class="row">
        <div class="col-md-6 col-lg-6">
            <div class="panel panel-primary">
                <div class="panel-heading">{{ trans('admin.MainConfiguration') }}</div>
                <div class="panel-body">
                    <div class="form-group">
                        <label class="control-label">{{ trans('admin.GoogleFontConfig') }}</label>
                        <div class="controls">
                            <input type="text" class="form-control input-lg" name="googlefont" value="{{  getenvcong('googlefont') }}">
                        </div>
                        <span class="help-block">{!!   trans('admin.GoogleFontConfighelp') !!} </span>
                    </div>
                    <hr>
                    <div class="form-group">
                        <label class="control-label">{{ trans('admin.SiteFont') }} </label>
                        <div class="controls">
                            <input type="text" class="form-control input-lg" name="sitefontfamily" value="{{  getenvcong('sitefontfamily') }}">
                        </div>
                        <span class="help-block">{{ trans('admin.SiteFonthelp') }} </span>
                    </div>
                    <hr>
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
                    <div class="form-group">
                        <H3>
                            {{ trans('admin.UseRight-to-LeftLanguageSupport') }}
                        </H3>
                        {!! Form::select('languagetype', ['rtl' => trans('admin.yes'), '' => trans('admin.no')], getenvcong('languagetype'), ['class' => 'form-control'])  !!}

                    </div>
                </div>
            </div>

        </div><!-- /.col -->

    </div><!-- /.row -->

  @elseif($theme['t_code'] == 'modern' or $theme['t_code'] == 'viralmag' or $theme['t_code'] == 'boxed' or $theme['t_code'] == 'buzzyfeed' )
        <div class="row">
            <div class="col-md-6 col-lg-6">
                <div class="panel panel-primary">
                    <div class="panel-heading">{{ trans('admin.MainConfiguration') }}</div>
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="control-label">{{ trans('admin.GoogleFontConfig') }}</label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="T_1_googlefont" value="{{  getenvcong('T_1_googlefont') }}">
                            </div>
                            <span class="help-block">{!!   trans('admin.GoogleFontConfighelp') !!} </span>
                        </div>
                        <hr>
                        <div class="form-group">
                            <label class="control-label">{{ trans('admin.SiteFont') }} </label>
                            <div class="controls">
                                <input type="text" class="form-control input-lg" name="T_1_sitefontfamily" value="{{  getenvcong('T_1_sitefontfamily') }}">
                            </div>
                            <span class="help-block">{{ trans('admin.SiteFonthelp') }} </span>
                        </div>
                        <hr>
                        <div class="form-group">
                            <label class="control-label">Homepage Headline Style</label>
                            <div class="controls">
                                {!! Form::select('T_1_SiteHeadlineStyle', ['1' => 'Style 1 - Boxes', '3' => 'Style 2 - Boxes', '4' => 'Style 3 - Tall Boxes', '5' => 'Style 4 - Two Big Boxes', '2' => 'Style 5 - Slider Type', 'off' => 'No Headline Post'], getenvcong('T_1_SiteHeadlineStyle'), ['class' => 'form-control'])  !!}

                            </div>
                        </div>
                        <hr>
                        <div class="form-group">
                            <label class="control-label">Category Pages Headline Style</label>
                            <div class="controls">
                                {!! Form::select('T_1_CatHeadlineStyle', ['1' => 'Style 1 - Boxes', '3' => 'Style 2 - Boxes', '4' => 'Style 3 - Tall Boxes', '5' => 'Style 4 - Two Big Boxes', '2' => 'Style 5 - Slider Type', 'off' => 'No Headline Post'], getenvcong('T_1_CatHeadlineStyle'), ['class' => 'form-control'])  !!}

                            </div>
                        </div>
                        <hr>
                        <div class="form-group">
                            <label class="control-label">Post Page AutoLoad Style</label>
                            <div class="controls">
                                {!! Form::select('PostPageAutoload', ['autoload' => 'Autoload Next Post', 'related' => 'Show only "You may also like" section'], getenvcong('PostPageAutoload'), ['class' => 'form-control'])  !!}

                            </div>
                        </div>
                        <hr>
                        <div class="form-group">
                            <label>{{ trans('admin.SiteBackgroundColor') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="T_1_BodyBC" class="form-control" value="{{  getenvcong('T_1_BodyBC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('T_1_BodyBC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <hr>

                        <div class="form-group">
                            <label>{{ trans('admin.NavbarBackgroundColor') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="T_1_NavbarBC" class="form-control" value="{{  getenvcong('T_1_NavbarBC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('NavbarBC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <hr>
                        @if($theme['t_code'] == 'viralmag' or $theme['t_code'] == 'boxed')
                        <div class="form-group">
                            <label>Menu {{ trans('admin.NavbarBackgroundColor') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="T_1_NavbarMenuBC" class="form-control" value="{{  getenvcong('T_1_NavbarMenuBC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('T_1_NavbarMenuBC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                            <div class="form-group">
                            <label>Menu Mobile Toogle Icon Color</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="T_1_NavbarMenuToogleC" class="form-control" value="{{  getenvcong('T_1_NavbarMenuToogleC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('T_1_NavbarMenuToogleC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        @endif
                        <div class="form-group">
                            <label>{{ trans('admin.NavbarTop3PixelBorderLineColor') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="T_1_NavbarTBLC" class="form-control" value="{{  getenvcong('T_1_NavbarTBLC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('NavbarTBLC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{{ trans('admin.NavbarLinkColor') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="T_1_NavbarLC" class="form-control" value="{{  getenvcong('T_1_NavbarLC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('NavbarLC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{{ trans('admin.NavbarLinkHoverColor') }}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="T_1_NavbarLHC" class="form-control" value="{{  getenvcong('T_1_NavbarLHC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('NavbarLHC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{!! trans('admin.NavbarCreateButtonBackgroundColor') !!}<</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="T_1_NavbarCBBC" class="form-control" value="{{  getenvcong('T_1_NavbarCBBC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('NavbarCBBC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{!! trans('admin.NavbarCreateButtonFontColor') !!}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="T_1_NavbarCBFC" class="form-control" value="{{  getenvcong('T_1_NavbarCBFC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('NavbarCBFC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{!! trans('admin.NavbarCreateButtonHoverBackgroundColor') !!}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="T_1_NavbarCBHBC" class="form-control" value="{{  getenvcong('T_1_NavbarCBHBC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('NavbarCBHBC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>
                        <div class="form-group">
                            <label>{!! trans('admin.NavbarCreateButtonHoverFontColor') !!}</label>
                            <div class="input-group my-colorpicker2 colorpicker-element">
                                <input type="text" name="T_1_NavbarCBHFC" class="form-control" value="{{  getenvcong('T_1_NavbarCBHFC') }}">
                                <div class="input-group-addon">
                                    <i style="background-color: {{  getenvcong('NavbarCBHFC') }};"></i>
                                </div>
                            </div><!-- /.input group -->
                        </div>

                        <hr>
                        <div class="form-group">
                            <H3>
                                {{ trans('admin.UseRight-to-LeftLanguageSupport') }}
                            </H3>
                            {!! Form::select('languagetype', ['rtl' => trans('admin.yes'), '' => trans('admin.no')], getenvcong('languagetype'), ['class' => 'form-control'])  !!}

                        </div>
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

</section><!-- /.content -->
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