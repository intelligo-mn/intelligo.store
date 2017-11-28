<div class="box box-widget widget-user" style="margin-bottom: 30px">
    <div class="overlay hide">
        <i class="fa fa-refresh fa-spin"></i>
    </div>
    <!-- Add the bg color to the header using any of the bg-* classes -->
    <div class="widget-user-header  bg-default" style=" height: auto;background: #FBFBFB;padding: 10px;">
        @if($t_price!='soon')<span class="pull-right badge bg-red" style="float:none;position:absolute;right:20px;top:20px;  box-shadow: 0 2px 3px rgba(0,0,0,.5);margin:0">v.{{ $t_version }}</span>@endif
        <img style="width:100%;height:auto" src="{{ $t_icon }}" alt="{{ $t_name }}">
    </div>

    <?php
    $t_activethis=false;
    if (file_exists(base_path('storage/.'.$t_code))) {
        $t_activethis=true;
    }
    $t_actfilescont=false;
    if (!empty(config('buzzytheme_'.$t_code.'.t_version'))) {
        $t_actfilescont=true;
    }
    ?>

    <div class="box-footer" style="height: 60px;max-height: 60px; padding: 15px 10px 10px 15px;">
        <div class="row">
            <div class="col-sm-8 border-right">
                <h3 class="widget-user-username" style="font-weight: 500;text-shadow: none">
                    {{ $t_name }}

                    @if($t_price=='soon')
                        <span class="badge bg-white" style="margin-left: 10px">{!! trans("admin.Notavailabeyet") !!}</span>
                    @elseif($t_price=='FREE')
                        <span class="badge bg-white" style="margin-left: 10px;font-weight:400;color: #969696;background-color: #F0F0F0;">{!! trans("admin.FREE") !!}</span>
                    @else
                        <span class="badge bg-green" style="margin-left: 10px">{{ $t_price }}</span>
                    @endif

                </h3>
                <div class="info">
                    {!!  $t_weblink == null ? '' : '<a href="'.$t_weblink.'" target="_blank" style="margin-right:10px"><i class="fa fa-globe" style="margin-right:3px"></i> Web site</a>'  !!}
                </div>


                               <!-- /.description-block -->
            </div>
    @unless($t_price=='soon')


                <div class="col-sm-4" style="text-align: center">

                    @if($t_actfilescont==false )

                        @if($t_price!='FREE' and $t_status!='actived' and $t_activethis==false)

                            <button type="button" data-item="{{ $t_code }}"  data-img="{{ $t_icon }}" data-verify="{{ $t_price!='FREE' ? 'on' : 'off' }}" class="btn btn-block btn-warning btn-sm checkcodeforplugin" style="float:right;text-align: left;width: auto;text-align: left;width:auto"><i class="fa fa-unlock" style="margin-right:10px"></i> {{ trans('admin.ActivateCode') }}</button>

                        @else

                            <button type="button" data-item="{{ $t_code }}" data-verify="{{ $t_price!='FREE' ? 'on' : 'off' }}" class="btn btn-block btn-success btn-sm downloadtheme" style="float:right;text-align: left;width: auto;"><i class="fa fa-download" style="margin-right:10px"></i> {{ trans('admin.download') }}</button>

                        @endif

                    @else

                        @if($t_version!=config('buzzytheme_'.$t_code.'.t_version'))
                            <button type="button" data-item="{{ $t_code }}" data-verify="{{ $t_price!='FREE' ? 'on' : 'off' }}" class="btn btn-block btn-success btn-sm downloadtheme" style="float:right;text-align: left;width: auto;"><i class="fa fa-download" style="margin-right:10px"></i> {{ trans('admin.download') }} v.{{$t_version}}</button>
                        @else

                            @if($t_status=='notactived')
                                <button type="button" data-item="{{ $t_code }}" data-verify="{{ $t_price!='FREE' ? 'on' : 'off' }}" class="btn btn-block btn-info btn-sm activebuttheme" style="float:right;text-align: left;width: auto;"><i class="fa fa-check" style="margin-right:10px"></i> {{ trans('admin.Install') }}</button>
                            @else
                                <button type="button"  class="btn btn-block btn-default btn-sm disabled" style="float:right;text-align: left;width: auto"><i class="fa fa-check"></i> {!! trans("admin.Activated") !!}</button>

                                @if($t_price!='FREE' and $t_status!='actived' and $t_activethis==false)
                                    {!!  $t_buylink == null ? '' : '<a href="'.$t_buylink.'" class="btn btn-block btn-success btn-sm"  target="_blank"><i class="fa fa-cart-plus" style="margin-right:10px"></i> '.trans("admin.BuyNow").'</a>'  !!}
                                @else
                                    @if($t_settingon)
                                        <a href="{{  action('Admin\DashboardController@themesetting', [$t_code]) }}?t={{ $key }}"  class="btn btn-block btn-warning  btn-sm" style="float:right;text-align: left;width: auto;margin: 0 10px 0 0;"><i class="fa fa-cog" style="margin-right:0"></i></a>
                                    @endif
                                @endif

                            @endif

                        @endif




                @endif

                </div>

    @endunless
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </div>
    <style> .acthover:hover .current{display:none!important} .acthover:hover .hover{display:block!important}</style>
   @if($t_settingon)

        <div class="modal modal-info" id="modal{{$t_code}}" @if($t_code == "translationmanager")style="width:100%; overflow:hidden;height:100%" @endif>
            <div class="modal-dialog" @if($t_code == "homepagebuilder")style="width:80%" @elseif($t_code == "translationmanager")style="width:98%; height:100%" @endif>
                <div class="modal-content" @if($t_code == "translationmanager")style="width:100%; height:95%" @endif>
                    {!!   Form::open(array('action' => 'Admin\ConfigController@setconfig', 'method' => 'POST','style' => 'height:100%;', 'enctype' => 'multipart/form-data')) !!}
                    @if($t_code == "easycomment")
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <i class="fa fa-remove"></i></button>
                        <h4 class="modal-title">{!! trans("admin.easyCommentPluginSettings") !!}</h4>
                    </div>
                    <div class="modal-body">

                        <div class="form-group">
                            <label class="control-label">{{ trans("admin.easyCommentTheme") }}</label>
                            {!! Form::select('easyCommentTheme', ['Default' => 'Default','Dark' => 'Dark','Boxed' => 'Boxed','Envato' => 'Envato', 'Blog' => 'Blog'], getenvcong('easyCommentTheme'), ['class' => 'form-control'])  !!}
                            <p >{!! trans("admin.easyCommentThemeDesc")  !!}</p>
                        </div>
                        <div class="form-group">
                            <label class="control-label">{!! trans("admin.easyCommentTitle")  !!}</label>
                            <input type="text" class="form-control input-lg" name="easyCommentTitle" value="{{  getenvcong('easyCommentTitle') }}">
                            <p >{!! trans("admin.easyCommentTitleDesc")  !!}</p>
                        </div>
                        <div class="form-group">
                            <label class="control-label">{!! trans("admin.easyCommentInitiationUrl")  !!}</label>
                            <input type="text" class="form-control input-lg" name="easyCommentcode" value="{{  getenvcong('easyCommentcode') }}">
                        </div>
                    </div>

                    @endif<div class="clearfix"></div>

                    <div class="modal-footer">

                        <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">{!! trans("admin.close")  !!}</button>
                        <input type="submit" value="{!! trans("admin.SaveSettings")  !!}" class="btn btn-info btn-outline">

                    </div>

                    {!! Form::close() !!}
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>

   @endif
</div>
