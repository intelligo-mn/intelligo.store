<div class="box box-widget widget-user" style="margin-bottom: 30px">
    <div class="overlay hide">
        <i class="fa fa-refresh fa-spin"></i>
    </div>
    <!-- Add the bg color to the header using any of the bg-* classes -->
    <div class="widget-user-header  bg-default" style=" height: 140px;background: #FBFBFB;padding: 20px 120px 20px 20px;">
        <h3 class="widget-user-username" style="font-weight: 500;text-shadow: none">{{ $p_name }}</h3>
        <h5 class="widget-user-desc" style="line-height:16px;font-weight: 500;color:#777">{!! $p_desc  !!} </h5>
        <div class="info">
            {!!  $p_weblink == null ? '' : '<a href="'.$p_weblink.'" target="_blank" style="margin-right:10px"><i class="fa fa-globe" style="margin-right:3px"></i> Web site</a>'  !!}
            {!!  $p_docslink == null ? '' : '<a href="'.$p_docslink.'" target="_blank"><i class="fa fa-book" style="margin-right:3px"></i> '.trans("admin.Docs").'</a>'  !!}
        </div>
    </div>
    <div class="widget-user-image" style=" top: 15px;left:auto;right: 15px; margin-left:0;">
        <img class="img-circle" src="{{ $p_icon }}" alt="{{ $p_name }}">
    </div>
    <?php
    $p_activetihs=false;
    if (file_exists(base_path('storage/.'.$p_code))) {
        $p_activetihs=true;
    }
    $p_actfilescont=false;
    if (!empty(trans('p-'.$p_code.'.p_version'))) {
        $p_actfilescont=true;
    }
        if($p_code=='easycomment'){
            $p_actfilescont=true;
        }

    ?>
    <div class="box-footer" style="height: 60px;max-height: 60px; padding: 15px 10px 10px 15px;">
        <div class="row">
            <div class="col-sm-4 border-right">
             @unless($p_price=='soon')
                @if($p_price!='FREE' and $p_status!='actived')
                    @if($p_activetihs==false)
                        <button type="button" data-item="{{ $p_code }}"  data-img="{{ $p_icon }}" data-verify="{{ $p_price!='FREE' ? 'on' : 'off' }}" class="btn btn-block btn-warning btn-sm checkcodeforplugin" style="text-align: left;width:auto"><i class="fa fa-unlock" style="margin-right:10px"></i> {{ trans('admin.ActivateCode') }}</button>
                    @elseif($p_actfilescont==false)
                            <span class="badge bg-white">{!! trans("admin.Activateddesc") !!}</span>
                    @else
                        <button type="button" data-item="{{ $p_code }}" data-verify="{{ $p_price!='FREE' ? 'on' : 'off' }}" class="btn btn-block btn-success btn-sm activebut" style="text-align: left"><i class="fa fa-download" style="margin-right:10px"></i> {{ trans('admin.Install') }}</button>
                    @endif

                    @else
                        @if($p_status=='actived')
                            <button type="button" data-item="{{ $p_code }}" data-verify="{{ $p_price!='FREE' ? 'on' : 'off' }}" class="btn btn-block btn-default btn-sm activebut acthover" style="text-align: left"><span class="current show"><i class="fa fa-check" style="margin-right:10px"></i> {{ trans('admin.Activated') }}</span><span class="hover hide"><i class="fa fa-remove" style="margin-right:10px"></i>  {{ trans('admin.Deactivate') }}</span></button>

                        @elseif($p_status=='notactived')
                            <button type="button" data-item="{{ $p_code }}" data-verify="{{ $p_price!='FREE' ? 'on' : 'off' }}" class="btn btn-block btn-info btn-sm activebut" style="text-align: left"><i class="fa fa-download" style="margin-right:10px"></i> {{ trans('admin.Install') }}</button>
                        @else


                         @endif
                    @endif
             @endunless

                               <!-- /.description-block -->
            </div>
            <!-- /.col -->
            @unless($p_actfilescont==false)
            <div class="col-sm-4 border-right">
                @if($p_price!='FREE' and $p_status!='actived' and $p_activetihs==false)
                    {!!  $p_buylink == null ? '' : '<a href="'.$p_buylink.'" class="btn btn-block btn-success btn-sm"  target="_blank"><i class="fa fa-cart-plus" style="margin-right:10px"></i> '.trans("admin.BuyNow").'</a>'  !!}
                 @else
                    @if($p_settingon)
                        <button type="button" data-item="{{ $p_code }}" class="btn btn-block btn-warning  btn-sm " data-toggle="modal" data-target="#modal{{$p_code}}" style="float:left;width:auto;text-align: left"><i class="fa fa-cog" style="margin-right:0"></i> </button>

                    @endif
                @endif

            </div>
            <!-- /.col -->
            <div class="col-sm-4" style="text-align: center">
                @if($p_price=='soon')
                    <span class="badge bg-white">{!! trans("admin.Notavailabeyet") !!}</span>
                @elseif($p_price=='FREE')
                    <span class="badge bg-white" style="font-weight:400;color: #969696;background-color: #F0F0F0;">{!! trans("admin.FREE") !!}</span>
                @else
                    <span class="badge bg-green">{{ $p_price }}</span>
                @endif
                <!-- /.description-block -->
            </div>
            @endunless
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </div>
    <style> .acthover:hover .current{display:none!important} .acthover:hover .hover{display:block!important}</style>
   @if($p_settingon)

        <div class="modal modal-info" id="modal{{$p_code}}" @if($p_code == "translationmanager")style="width:100%; overflow:hidden;height:100%" @endif>
            <div class="modal-dialog" @if($p_code == "homepagebuilder")style="width:80%" @elseif($p_code == "translationmanager")style="width:98%; height:100%" @endif>
                <div class="modal-content" @if($p_code == "translationmanager")style="width:100%; height:95%" @endif>
                    {!!   Form::open(array('action' => 'Admin\ConfigController@setconfig', 'method' => 'POST','style' => 'height:100%;', 'enctype' => 'multipart/form-data')) !!}
                    @if($p_code == "easycomment")
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <i class="fa fa-remove"></i></button>
                        <h4 class="modal-title">{!! trans("admin.easyCommentPluginSettings") !!}</h4>
                    </div>
                    <div class="modal-body">

                        <div class="form-group">
                            <label class="control-label">{{ trans("admin.easyCommentTheme") }}</label>
                            {!! Form::select('easyCommentTheme', ['Default' => 'Default','Dark' => 'Dark','Boxed' => 'Boxed','Envato' => 'Envato', 'Blog' => 'Blog'], getcong('easyCommentTheme'), ['class' => 'form-control'])  !!}
                            <p >{!! trans("admin.easyCommentThemeDesc")  !!}</p>
                        </div>
                        <div class="form-group">
                            <label class="control-label">{!! trans("admin.easyCommentTitle")  !!}</label>
                            <input type="text" class="form-control input-lg" name="easyCommentTitle" value="{{  getcong('easyCommentTitle') }}">
                            <p >{!! trans("admin.easyCommentTitleDesc")  !!}</p>
                        </div>
                        <div class="form-group">
                            <label class="control-label">{!! trans("admin.easyCommentInitiationUrl")  !!}</label>
                            <input type="text" class="form-control input-lg" name="easyCommentcode" value="{{  getcong('easyCommentcode') }}">
                        </div>
                    </div>
            @elseif($p_code == "disquscomments")

                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <i class="fa fa-remove"></i></button>
                            <h4 class="modal-title">{!! trans("admin.DisqusPluginSettings")  !!}</h4>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label class="control-label">{!! trans("admin.DisqusCode")  !!}</label>
                                <textarea name="DisqussCommentcode" style="height:120px" class="form-control">{{  getcong('DisqussCommentcode') }}</textarea>
                            </div>
                        </div>
                    @elseif($p_code == "buzzyquizzes")

                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <i class="fa fa-remove"></i></button>
                            <h4 class="modal-title">{!! trans("admin.BuzzyQuizzesPluginSettings")  !!}</h4>
                        </div>

                        <div class="modal-body">

                            <div class="form-group">
                                <label class="control-label">{!! trans("admin.QuizzesPluginResultType")  !!}</label>
                                {!! Form::select('BuzzyQuizzesPopup', ['on' => trans("admin.BuzzyQuizzesSpecialResultPopup"), 'off' => trans("admin.OnlyBuzzFeedStyleResult")], getcong('BuzzyQuizzesPopup'), ['class' => 'form-control'])  !!}
                                <p>{!! trans("admin.QuizzesPluginResultTypeDesc")  !!}</p>
                            </div>

                        </div>
                    @elseif($p_code == "translationmanager")

                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <i class="fa fa-remove"></i></button>
                            <h4 class="modal-title">{!! trans("admin.BuzzyTranslationManager")  !!}</h4>
                        </div>

                        <div class="modal-body" style="width:100%; height:100%;padding: 0">
                            <iframe src="/admin/translations" width="100%" height="100%"></iframe>


                        </div>
                    @elseif($p_code == "buzzycontact")
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <i class="fa fa-remove"></i></button>
                            <h4 class="modal-title">{!! trans("admin.BuzzyContactPluginSettings")  !!}</h4>
                        </div>


                        <div class="modal-body">
                            <div class="form-group">
                                <label class="control-label">{!! trans("admin.BuzzyContactName")  !!}</label>
                                <input type="text" class="form-control input-lg" name="BuzzyContactName" value="{{  getcong('BuzzyContactName') }}">
                                <p>{!! trans("admin.BuzzyContactNameDesc")  !!}</p>
                            </div>
                            <div class="form-group">
                                <label class="control-label">{!! trans("admin.BuzzyContactEmail")  !!}</label>
                                <input type="text" class="form-control input-lg" name="BuzzyContactEmail" value="{{  getcong('BuzzyContactEmail') }}">
                                <p>{!! trans("admin.BuzzyContactEmailDesc")  !!}</p>
                            </div>
                            <div class="form-group">
                                <label class="control-label">{!! trans("admin.EmailSignature")  !!}</label>
                                <textarea  class="form-control input-lg" name="BuzzyContactSignature">{{  getcong('BuzzyContactSignature') }}</textarea>
                                <p>{!! trans("admin.EmailSignatureDesc")  !!}</p>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label class="control-label">{!! trans("admin.Sendacopytomyemail")  !!}</label>
                                <input type="text" class="form-control input-lg" name="BuzzyContactCopyEmail" value="{{  getcong('BuzzyContactCopyEmail') }}">
                                <p>{!! trans("admin.SendacopytomyemailDesc")  !!}</p>
                            </div>
                            <div class="form-group">
                                <label class="control-label">{!! trans("admin.Usecaptchaoncontactform")  !!}</label>
                                {!! Form::select('BuzzyContactCaptcha', ['on' => trans("admin.yes"), 'off' => trans("admin.no")], getcong('BuzzyContactCaptcha'), ['class' => 'form-control'])  !!}
                            </div>
                            <div class="form-group">
                                <label class="control-label">{!! trans("admin.GooglereCaptchaApiKey")  !!}</label>
                                <input type="text" class="form-control input-lg" name="reCaptchaKey" value="{{  getcong('reCaptchaKey') }}">

                                <p>{!! trans("admin.GooglereCaptchaApiKeyDesc")  !!}</p>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Google reCaptcha Api Secret</label>
                                <input type="text" class="form-control input-lg" name="reCaptchaSecret" value="{{  \Auth::user()->email == 'demo@admin.com' ?  trans("admin.youPERMISSION") : getcong('reCaptchaSecret')  }}">
                            </div>
                            <div class="clearfix"></div>
                        </div>

                    @elseif($p_code == "homepagebuilder")

                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <i class="fa fa-remove"></i></button>
                            <h4 class="modal-title">{!! trans("admin.BuzzyHomepageBuilder")  !!}</h4>
                        </div>
                        <div class="modal-body">
                            <div class="col-lg-6 col-xs-3">
                                <h2 class="control-label"> {!! trans("admin.Column")  !!} 1</h2>
                                <div class="form-group">
                                    <label class="control-label">{!! trans("admin.Section1Title")  !!}</label>
                                    <input type="text" class="form-control input-lg" name="HomeColSec1Tit1" value="{{ getcong('HomeColSec1Tit1') }}">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">{!! trans("admin.SelectedTypesorCategories")  !!}</label>
                                    {!! Form::select('HomeColSec1Type1[]', $typeos, getcong('HomeColSec1Type1'), ['class' => 'form-control','style' => 'height:220px','multiple' => 'multiple'])  !!}
                                </div>

                            </div>
                            <div class="col-lg-4 col-xs-3">
                                <h2 class="control-label">{!! trans("admin.Column")  !!} 2</h2>
                                <div class="form-group">
                                    <label class="control-label">{!! trans("admin.Section2Title")  !!}</label>
                                    <input type="text" class="form-control input-lg" name="HomeColSec2Tit1" value="{{ getcong('HomeColSec2Tit1') }}">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">{!! trans("admin.SelectedTypesorCategories")  !!}</label>
                                    {!! Form::select('HomeColSec2Type1[]', $typeos, getcong('HomeColSec2Type1'), ['class' => 'form-control','style' => 'height:220px','multiple' => 'multiple'])  !!}
                                </div>
                            </div>
                            <div class="col-lg-2 col-xs-3">
                                <h2 class="control-label">{!! trans("admin.Column")  !!} 3</h2>
                                <div class="form-group">
                                    <label class="control-label">{!! trans("admin.TrendingsOnOff")  !!}</label>
                                    {!! Form::select('HomeCol3Trends', ['true' => trans("admin.on"), 'false' => trans("admin.of")], getcong('HomeCol3Trends'), ['class' => 'form-control'])  !!}
                                </div>
                                <div class="form-group">
                                    <label class="control-label">{!! trans("admin.Section3Title")  !!}</label>
                                    <input type="text" class="form-control input-lg" name="HomeColSec3Tit1" value="{{ getcong('HomeColSec3Tit1') }}">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">{!! trans("admin.SelectedTypesorCategories")  !!}</label>

                                    {!! Form::select('HomeColSec3Type1[]', $typeos, getcong('HomeColSec3Type1'), ['class' => 'form-control','style' => 'height:150px','multiple' => 'multiple'])  !!}
                                </div>

                            </div>
<div class="clearfix"></div>
                        </div>
                    @endif<div class="clearfix"></div>
                    @unless($p_code == "translationmanager")
                    <div class="modal-footer">

                        <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">{!! trans("admin.close")  !!}</button>
                        <input type="submit" value="{!! trans("admin.SaveSettings")  !!}" class="btn btn-info btn-outline">

                    </div>
                    @endunless
                    {!! Form::close() !!}
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>

   @endif
</div>
