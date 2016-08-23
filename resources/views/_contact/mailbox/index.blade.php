@extends("_contact.mailbox.mailapp")
@section('header')
<link rel="stylesheet" href="/adminlte/plugins/iCheck/flat/blue.css">

    <style>

        .contactlist{

        }
        .contactlist td{
            vertical-align: middle!important;
            padding: 12px 20px!important;
            background: #fff!important;
        }
        .cho{
            float:left;
            margin-right: 10px;
            vertical-align: middle!important;
            padding: 8px 15px!important;
            background: #fff!important;
        }
        .contactlist tr:hover td{

            background: #f9f9f9!important;
        }
        .contactlist .taba{
            font-size:16px;font-weight:600;
            color: #5c90d2;
            -webkit-transition: color .12s ease-out;
            transition: color .12s ease-out;
            max-width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .push-5-t {
            margin-top: 2px !important;
        }

        .unread td{
            background: #EFF6DB!important;
        }

        .paginate{
        position: absolute;right:3px;top:3px;padding:0
        }
        .paginate ul{
            margin:0
        }

        .bottombuttons .dropdown-menu{
            left:0px;top:auto;bottom:40px;

        }
    </style>
@endsection

@section("mailcontent")

    <div class="box box-primary">
        <div class="overlay hide">
            <i class="fa fa-refresh fa-spin"></i>
        </div>
        <div class="box-header with-border">
            <h3 class="box-title"><i class="fa fa-{{ $caticon }}"></i> {{ $catname }}</h3>
            <div class="box-tools pull-right">
                <div class="has-feedback">
                    <form method="get" action="/admin/mailbox/inbox">
                        <input type="text" name="qemail" class="form-control input-sm" placeholder="{{ trans("moducontact.Searchemailaddress") }}">
                    </form>
                    <span class="glyphicon glyphicon-search form-control-feedback"></span>
                </div>
            </div><!-- /.box-tools -->
        </div><!-- /.box-header -->
        <div class="box-body no-padding">
            @if(count($lastmails) > 0)
            @include('_contact.mailbox._buttons')
            @endif
            <div class="clear"></div>

            <div class="table-responsive mailbox-messages" style="min-height:600px">
                <form id="contacts" name="contacts">
                    {{ csrf_field() }}
                    <table class="table table-hover table-striped contactlist">
                    <tbody>
                    @if(count($lastmails) > 0)
                        @foreach($lastmails as $i => $mail)
                            <tr class=" {{ $mail->read==1 ?: 'unread' }}">
                                <td style="width:1%">
                                    <input type="checkbox" name="contacts[]" value="{{ $mail->id }}">
                                </td>
                                <td  style="width:15% ; padding: 12px 0px!important;">
                                    <div class="mailbox-read-info" style="border: 0">
                                        <a href="/admin/mailbox/read/{{ $mail->id }}" class="taba" style="color:#333">
                                           <h3 style="font-weight: 700">{{ $mail->name > "" ? $mail->name :  trans("moducontact.NoName") }}</h3>
                                            <h5>{{ $mail->email }}</h5>
                                        </a>
                                    </div>

                                </td>
                                <td style="width:59%;">
                                    <a class="font-w600 taba"  href="/admin/mailbox/read/{{ $mail->id }}">{{ $mail->subject }}</a>
                                    <div class="text-muted push-5-t">{{ str_limit(strip_tags($mail->text), 120) }}..</div>
                                </td>
                                <td style="width:10%;">
                                    @if($mail->label_id > 0)
                                    <div class="label label-info" style="background-color: {{ $mail->label->description }} !important;">{{ $mail->label->name }}</div>
                                        @endif
                                </td>
                                <td style="width:15%;text-align: right">
                                    <a href="javascript:" class="mailbox-star" data-id="{{ $mail->id }}">@if($mail->stared==1) <i class="fa fa-star text-yellow"></i> @else <i class="fa fa-star"></i>  @endif</a>
                                    <a href="javascript:"  style="margin-left:10px" class="mailbox-important"  data-id="{{ $mail->id }}">@if($mail->important==1) <i class="fa fa-flag text-red"></i> @else <i class="fa fa-flag"></i>  @endif</a>
                                    <div class="clear"></div>
                                    {{ $mail->created_at->diffForHumans() }}</td>
                            </tr>
                        @endforeach
                    @else
                        <div class="alert alert-default alert-dismissible" style="text-align: center;padding:170px 50px">

                            <h4><i class="icon fa fa-{{ $caticon }}" style="font-size:80px;margin-bottom:20px;opacity: 0.5"></i> <br> <b>{{ $catname }}</b> {{  trans("moducontact.folderisempty") }}.!</h4>

                        </div>

                    @endif


                    </tbody>
                </table><!-- /.table -->
                </form>
            </div><!-- /.mail-box-messages -->
                <div class="clear"></div>
                <div class="bottombuttons">
                @if(count($lastmails) > 0)
                    @include('_contact.mailbox._buttons')
                @endif
                </div>
                <div class="clear"></div>
        </div><!-- /.box-body -->

    </div><!-- /. box -->



@endsection
@section("mailfooter")


@endsection
