<div class="answer" data-type="answer" @if(isset($answer->id)) data-entry-id="{{ $answer->id }}" @endif>
<div  class="answer-wrapper">
    <div class="entryactions" style="left:auto;right:0;border-right: 0;box-shadow: 0;background: transparent;">
        <button class="button button-white get-button delete-entry" data-block="answer"><i class="fa fa-remove"></i></button>
    </div>
    <span class="drag-handle"> <i class="fa fa-arrows fa-2x"></i></span>
    <div class="inpunting mediaupload" @if(isset($answer->image)) style="display: none;" @endif>
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
    {!! Form::hidden(null, isset($answer->image) ? makepreview($answer->image, null, 'answers') : null, ['data-type' => 'image', 'class' => 'cd-input-image ']) !!}
    <div class="inpunting imagearea @if(empty($answer->image)) hide @endif">
        <div class="imagearea_img">
        @if(isset($answer->image)) <img src="{{ makepreview($answer->image, null, 'answers') }}"> @endif
        </div>
        <div class="thumbactions">
            <a class="button button-red deleteimage" data-action="remove" data-target="answer"><i class="fa fa-trash"></i></a>
        </div>
    </div>

    <div class="inpunting " style=" padding:0">
        {!! Form::textarea(null, isset($answer->title) ? $answer->title : null ?: null, ['data-type' => 'title', 'class' => 'cd-input answerinput', 'placeholder' => trans('buzzyquiz.entry_answertitle')]) !!}
    </div>
    @if(Request::query('qtype')=='trivia')
        <div class="inpunting " style=" padding:10px 5px;font-size:12px:font-weight:bold">

            <?php
            $idoa=substr( md5(rand()), 0, 7); ?>
            <input  name="assign" type="radio" {{  isset($answer->video) ? $answer->video == 'on' ? 'checked="checked"' : '' : '' }} value="on" data-type="assign" id="correct-{{$idoa}}" style="margin-right: 6px;margin-left: 5px;margin-top: 4px;width: auto;cursor:pointer"> <label for="correct-{{$idoa}}" style="display:inline-block;cursor:pointer">{!!  trans('buzzyquiz.correctanswer')  !!}</label>
        </div>
    @else
        <div class="inpunting " style="background:#ccc; padding:0">
            <?php $idoa=time(); ?>
            {!! Form::select(null, ['' => trans('buzzyquiz.assign')] , null, [ 'class' => 'getassignres', 'data-identy' => $idoa, 'data-acst' =>  isset($answer->video) ? (int)$answer->video : null, 'data-type' => 'assign' ]) !!}
        </div>
    @endif
</div>
</div>
