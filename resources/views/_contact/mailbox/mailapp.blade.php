@extends("_admin.adminapp")
@section("content")


        <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        {{ trans("moducontact.Mailbox") }}
        <small>{{ $unapproveinbox }} {{ trans("admin.newmessages") }}</small>

    </h1>

    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> {{ trans("admin.dashboard") }}</a></li>
        <li class="active"> {{ trans("moducontact.Mailbox") }}</li>
    </ol>
</section>

<!-- Main content -->
<section class="content">
    <div class="row">
        <div class="col-md-3">
            <a href="/admin/mailbox/new" class="btn btn-primary btn-block margin-bottom"><i class="fa fa-paper-plane" style="margin-right: 5px"></i>  {{ trans("moducontact.SendNewEmail") }}</a>


            <div class="box box-solid">
                <div class="box-header with-border">
                    <h3 class="box-title">{{ trans("moducontact.Folders") }}</h3>
                    <div class="box-tools">
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    </div>
                </div>
                <div class="box-body no-padding">
                    <ul class="nav nav-pills nav-stacked">

                        @if($mailcat!==null)
                            @foreach($mailcat as $i => $category)
                                <li class="{{ Request::segment(3)==$category->name_slug ? 'active' : ""}}">
                                    <a href="/admin/mailbox/{{ $category->name_slug }}"><i class="fa fa-{{ $category->description }}"></i> {{ $category->name }}
                                        @if($unapproveinbox >0 and $category->name_slug=='inbox')
                                            <span class="label label-primary pull-right">{{ $unapproveinbox }}</span>
                                        @endif
                                     </a>
                                </li>
                                @endforeach
                        @endif

                        @if($mailprivatecat!==null)
                            @foreach($mailprivatecat as $i => $category)
                                <li class="{{ Request::segment(3)==$category->name_slug ? 'active' : ""}}"><a href="/admin/mailbox/{{ $category->name_slug }}"><i class="fa fa-folder" style="color: {{ $category->description }} !important;"></i> {{ $category->name }} </a>

                                        <a style="position: absolute;right:5px;top:5px;padding:3px;border:0" class="btn permanently" href="/admin/mailbox/mailcatdelete/{{ $category->id }}"><i class="fa fa-trash"></i></a>

                                </li>
                            @endforeach
                        @endif
                            <ul class="nav nav-pills nav-stacked">

                                <li><a href="javascript:" class="addcat" data-type="mailprivatecat"><i class="fa fa-plus"></i> {{ trans("moducontact.AddFolder") }}</a></li>
                            </ul>
                    </ul>
                </div><!-- /.box-body -->
            </div><!-- /. box -->
            <div class="box box-solid">
                <div class="box-header with-border">
                    <h3 class="box-title">{{ trans("moducontact.Labels") }}</h3>
                    <div class="box-tools">
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    </div>
                </div>
                <div class="box-body no-padding">
                    <ul class="nav nav-pills nav-stacked">
                        @if($mailsections!==null)
                            @foreach($mailsections as $i => $category)
                                <li class="{{ Request::segment(3)==$category->name_slug ? 'active' : ""}}"><a href="/admin/mailbox/{{ $category->name_slug }}"><i class="fa fa-circle-o" style="color: {{ $category->description }} !important;"></i> {{ $category->name }} </a>

                                    <a  style="position: absolute;right:5px;top:5px;padding:3px;border:0" class="btn permanently" href="/admin/mailbox/maillabeldelete/{{ $category->id }}"><i class="fa fa-trash"></i></a>

                                </li>
                            @endforeach

                        @endif

                        <li><a href="javascript:" class="addcat" data-type="maillabel"><i class="fa fa-plus"></i> {{ trans("moducontact.AddLabel") }}</a></li>
                    </ul>

                </div><!-- /.box-body -->
            </div><!-- /.box --><br>
            <a href="javascript:" data-item="moducontact" class="btn btn-block btn-warning  btn-sm " data-toggle="modal" data-target="#modalmoducontact" ><i class="fa fa-cog" style="margin-right:0"></i> {{ trans("moducontact.Settings") }}</a>

        </div><!-- /.col -->
        <div class="col-md-9">
          @yield('mailcontent')
        </div><!-- /.col -->
    </div><!-- /.row -->
</section><!-- /.content -->

<div class="modal modal-info" id="modalmoducontact">
    <div class="modal-dialog">
        <div class="modal-content">
            {!!   Form::open(array('action' => 'Admin\ConfigController@setconfig', 'method' => 'POST', 'enctype' => 'multipart/form-data')) !!}

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="fa fa-remove"></i></button>
                <h4 class="modal-title">{!! trans("admin.moduContactPluginSettings")  !!}</h4>
            </div>


            <div class="modal-body">
                <div class="form-group">
                    <label class="control-label">{!! trans("admin.moduContactName")  !!}</label>
                    <input type="text" class="form-control input-lg" name="moduContactName" value="{{  getcong('moduContactName') }}">
                    <p>{!! trans("admin.moduContactNameDesc")  !!}</p>
                </div>
                <div class="form-group">
                    <label class="control-label">{!! trans("admin.moduContactEmail")  !!}</label>
                    <input type="text" class="form-control input-lg" name="moduContactEmail" value="{{  getcong('moduContactEmail') }}">
                    <p>{!! trans("admin.moduContactEmailDesc")  !!}</p>
                </div>
                <div class="form-group">
                    <label class="control-label">{!! trans("admin.EmailSignature")  !!}</label>
                    <textarea  class="form-control input-lg" name="moduContactSignature">{{  getcong('moduContactSignature') }}</textarea>
                    <p>{!! trans("admin.EmailSignatureDesc")  !!}</p>
                </div>
                <hr>
                <div class="form-group">
                    <label class="control-label">{!! trans("admin.Sendacopytomyemail")  !!}</label>
                    <input type="text" class="form-control input-lg" name="moduContactCopyEmail" value="{{  getcong('moduContactCopyEmail') }}">
                    <p>{!! trans("admin.SendacopytomyemailDesc")  !!}</p>
                </div>
                <div class="form-group">
                    <label class="control-label">{!! trans("admin.Usecaptchaoncontactform")  !!}</label>
                    {!! Form::select('moduContactCaptcha', ['on' => trans("admin.yes"), 'off' => trans("admin.no")], getcong('moduContactCaptcha'), ['class' => 'form-control'])  !!}
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
            <div class="clearfix"></div>
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
@endsection
@section('footer')

    <script src="/adminlte/plugins/iCheck/icheck.min.js"></script>

    <script src="/adminlte/dist/js/modumailbox.js"></script>
    @yield('mailfooter')

@endsection