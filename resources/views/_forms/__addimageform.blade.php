<div class="entry" data-type="image" @if(isset($entry->id)) data-entry-id="{{ $entry->id }}" @endif>
    <div class="entryactions"> <button class="button button-red get-button delete-entry"><i class="fa fa-trash"></i></button>  <button class="button button-white get-button up-down-trigger up-entry"><i class="fa fa-arrow-up"></i></button>  <button class="button button-white get-button up-down-trigger down-entry"><i class="fa fa-arrow-down"></i></button> </div>
    <h3><i class="fa fa-picture-o"></i> {{ trans('addpost.image') }}</h3>
    <div class="inpunting ordering ">
         <button class="order-number button button-gray">1</button>
        {!! Form::text(null, isset($entry->title) ? $entry->title : null ?: null, ['data-type' => 'title', 'class' => 'cd-input ', 'placeholder' => trans('addpost.entry_titleop')]) !!}
    </div>
    <div class="inpunting mediaupload" @if(isset($entry->image)) style="display: none;" @endif>
        <div class="item-media-placeholder">
            <i class="fa fa-plus fa-2x"></i><br>
            <small class="text-muted">{{ trans('addpost.entry_addimage') }}</small>
            <form action="">
            <input type="file" accept="image/*" class="uploadaimage" data-vtype="entry">
            </form>
            <div style="font-size:12px;color:#ccc"> or </div>
            <div class="image-upload-actions">
                <a class="button button-white getimageurl" data-action="add" data-target="entry">Get from the Url <i class="fa fa-download"></i></a>
            </div>
        </div>
    </div>
    {!! Form::hidden(null, isset($entry->image) ? '/upload/media/entries/'.$entry->image : null, ['data-type' => 'image', 'class' => 'cd-input-image ']) !!}
    <div class="inpunting imagearea @if(empty($entry->image)) hide @endif">
        <div class="imagearea_img">
        @if(isset($entry->image)) <img src="/upload/media/entries/{{ $entry->image }}"> @endif
        </div>
        <div class="thumbactions">
            <a class="button button-red deleteimage" data-action="remove" data-target="image"><i class="fa fa-trash"></i></a>  <a class="button button-white makepreview"><i class="fa fa-image"></i>&nbsp;{{ trans('addpost.makepreview') ?: 'Make preview image' }}</a>
        </div>
    </div>
    <div class="moredetail text">

        <div class="detailhide" style="display:none">
                <div class="inpunting">
                    {!! Form::text(null, isset($entry->source) ? $entry->source : null, ['data-type' => 'source', 'class' => 'cd-input ', 'placeholder' => trans('addpost.entry_source')]) !!}
                </div>
               <div class="inpunting">
               {!! Form::textarea(null, isset($entry->body) ? $entry->body : null, ['data-type' => 'body', 'class' => 'message','id' => 'edit', 'placeholder' => trans('addpost.entry_body')]) !!}
                </div>
        </div>
        <a href="javascript:;" class="trigger"><span class="down">{{ trans('addpost.mored') }} <i class="fa fa-angle-down"></i></span><span class="up">{{ trans('addpost.lessd') }}  <i class="fa fa-angle-up"></i></span></a>
    </div>

</div>
