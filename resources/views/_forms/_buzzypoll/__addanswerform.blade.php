<div class="answer" data-type="answer" @if(isset($entry->id)) data-entry-id="{{ $entry->id }}" @endif>
<div  class="answer-wrapper">
    <div class="entryactions">
        <button class="button button-white get-button delete-entry" data-block="answer"><i class="fa fa-remove"></i></button>
    </div>
    <span class="drag-handle"> <i class="fa fa-arrows fa-2x"></i></span>
    <div class="inpunting mediaupload" @if(isset($entry->image)) style="display: none;" @endif>
        <div class="item-media-placeholder">
            <i class="fa fa-plus fa-2x"></i><br>
            <form action="">
            <input type="file" accept="image/*" class="uploadaimage" data-target="answer">
            </form>
            <div class="upload-or-url"> {{ trans('updates.or') }} </div>
            <div class="image-upload-actions">
                <a class="button button-white getimageurl" data-action="add" data-target="answer"><i style="margin:0" class="fa fa-download"></i></a>
            </div>
        </div>
    </div>
    {!! Form::hidden(null, isset($entry->image) ? makepreview($entry->image, null, 'answers') : null, ['data-type' => 'image', 'class' => 'cd-input-image ']) !!}
    <div class="inpunting imagearea @if(empty($entry->image)) hide @endif">
        <div class="imagearea_img">
        @if(isset($entry->image)) <img src="{{ makepreview($entry->image, null, 'answers') }}"> @endif
        </div>
        <div class="thumbactions">
            <a class="button button-red deleteimage" data-action="remove" data-target="answer"><i class="fa fa-trash"></i></a>
        </div>
    </div>

    <div class="inpunting " style=" padding:0">
        {!! Form::textarea(null, isset($entry->title) ? $entry->title : null ?: null, ['data-type' => 'title', 'class' => 'cd-input answerinput', 'placeholder' => trans('moduquiz.entry_answertitle')]) !!}
    </div>
</div>
</div>
