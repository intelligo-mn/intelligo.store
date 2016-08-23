@extends("_contact.mailbox.mailapp")
@section("mailcontent")
    <form id="contacts" name="contacts">
        {{ csrf_field() }}
        <input type="hidden" name="contacts[]" value="{{ $lastmail->id }}">
    </form>
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">  <h3 class="box-title"><i class="fa fa-{{ $lastmail->category->description }}"></i> {{ $lastmail->category->name }}</h3> - Read Mail</h3>
            <div class="box-tools pull-right">

                @if($lastmail->label_id > 0)
                    <div class="label label-info" style="background-color: {{ $lastmail->label->description }} !important;">{{ $lastmail->label->name }}</div>
                @endif
            </div>
        </div><!-- /.box-header -->
        <div class="box-body no-padding">
            <div class="mailbox-read-info">
                <span class="mailbox-read-time pull-right" style="text-align: right">

                        <a href="javascript:" class="mailbox-star" data-id="{{ $lastmail->id }}">@if($lastmail->stared==1) <i class="fa fa-star text-yellow"></i> @else <i class="fa fa-star"></i>  @endif</a>
                        <a href="javascript:"  style="margin-left:10px" class="mailbox-important"  data-id="{{ $lastmail->id }}">@if($lastmail->important==1) <i class="fa fa-flag text-red"></i> @else <i class="fa fa-flag"></i>  @endif</a>

                          <div class="clear"></div>
                    {{ $lastmail->created_at }}
                    </span>

                <h3 style="font-weight: 700">{{ $lastmail->name > "" ? $lastmail->name : '<No Name>' }}</h3>
                <h5>{{ trans("moducontact.From") }} {{ $lastmail->email }}
                    </h5>
            </div><!-- /.mailbox-read-info -->

                <div class="mailbox-controls">

                    <!-- /.pull-right -->
                </div>
            <div class="mailbox-read-message" style="font-size:16px;min-height:300px;padding:20px 20px">
                {!!  nl2br($lastmail->text)  !!}

            </div><!-- /.mailbox-read-message -->
        </div><!-- /.box-body -->

        <div class="box-footer">
            <div class="pull-right">
                <a href="/admin/mailbox/new?t=reply&mail={{ $lastmail->id }}" class="btn btn-info"><i class="fa fa-reply"></i> {{ trans("moducontact.Reply") }} </a>
            </div>


            <div class="btn-group">
                <button type="button" class="btn btn-danger dropdown-toggle doaction" data-type="move"   data-action="trash" data-toggle="dropdown" aria-expanded="true"><span class="fa fa-trash" style="margin-right:5px"></span> {{ trans("moducontact.Trash") }} </button>
            </div>
            <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true">{{ trans("moducontact.Actions") }} <span class="fa fa-caret-up" style="margin-left:5px"></span></button>
                <ul class="dropdown-menu pull-left" style="left:0px;top:auto;bottom:40px;  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);">
                    <li><a href="javascript:" class="doaction"  data-type="do" data-action="read"><i class="fa fa-check text-green"></i> {{ trans("moducontact.Read") }}</a></li>
                    <li><a href="javascript:" class="doaction" data-type="do" data-action="unread"><i class="fa fa-check"></i> {{ trans("moducontact.Unread") }}</a></li>
                    <li><a href="javascript:" class="doaction" data-type="do" data-action="stared"><i class="fa fa-star text-yellow"></i> {{ trans("moducontact.Stared") }}</a></li>
                    <li><a href="javascript:" class="doaction" data-type="do" data-action="unstared"><i class="fa fa-star"></i> {{ trans("moducontact.Unstared") }}</a></li>
                    <li><a href="javascript:" class="doaction" data-type="do" data-action="important"><i class="fa fa-flag text-red"></i> {{ trans("moducontact.Important") }}</a></li>
                    <li><a href="javascript:" class="doaction" data-type="do" data-action="unimportant"><i class="fa fa-flag"></i> {{ trans("moducontact.Unimportant") }}</a></li>
                    <li class="divider"></li>
                    <li><a href="javascript:" class="doaction" data-type="deleteperma" data-action="deleteperma"><i class="fa fa-remove"></i> {{ trans("moducontact.Deletepermanently") }}</a></li>
                </ul>
            </div>
            <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true">{{ trans("moducontact.Move") }} <span class="fa fa-caret-up" style="margin-left:5px"></span></button>
                <ul class="dropdown-menu pull-left" style="left:0px;top:auto;bottom:40px;  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);">
                    @foreach($mailcat as $i => $category)
                        <li class="{{ Request::segment(3)==$category->name_slug ? 'hide' : ""}}"><a href="javascript:" class="doaction" data-type="move" data-action="{{ $category->name_slug  }}" ><i class="fa fa-{{ $category->description }}"></i> {{ trans("moducontact.towhere") }} {{ $category->name }}</a></li>
                    @endforeach
                        @foreach($mailprivatecat as $i => $category)
                            <li class="{{ Request::segment(3)==$category->name_slug ? 'hide' : ""}}">
                                <a href="javascript:" class="doaction" data-type="move" data-action="{{ $category->name_slug  }}" ><i  class="fa fa-folder" style="color: {{ $category->description }} !important;"></i> {{ trans("moducontact.towhere") }} {{ $category->name }}</a></li>
                        @endforeach
                </ul>
            </div>

        </div><!-- /.box-footer -->
    </div><!-- /. box -->

@endsection
