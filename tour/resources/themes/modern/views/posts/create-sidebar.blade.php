<div class="sidebar visiblesidebar-onmobile">
    <div class="sidebar--fixed">
    <div class="question-post-side-bar-form">
        <div class="cd-form" id="previewwrapper">
            <legend style="padding-top:0">{{ trans('addpost.preview') }}</legend>

            <div class="thumbwrapper">
                <div class="previewshow" @if(isset($post->thumb)) style="display: block;" @endif>
                    <div class="imagepr_wrap">
                    @if(isset($post->thumb)) <img src="{{ makepreview($post->thumb, 's', 'posts') }}"> @endif
                    </div>
                    <div class="thumbactions">
                        <a class="button button-red deleteimage" data-action="remove" data-target="thumb"><i class="fa fa-trash"></i></a>
                    </div>
                </div>
                <div class="preview-placeholder" @if(isset($post->thumb)) style="display: none;" @endif>
                    <i class="fa fa-plus fa-2x" style="font-size: 2em;"></i><br>
                    <div class="text-muted">{{ trans('addpost.pickpreview') }}</div>
                    <form action="">
                        <input type="file" accept="image/*" class="uploadaimage preview" data-vtype="preview">
                    </form>
                    <div style="font-size:12px;color:#ccc"> {{ trans('updates.or') }} </div>
                    <div class="image-upload-actions">
                        <a class="button button-white getimageurl" data-action="add" data-target="preview">{{ trans('updates.getfromurl') }} <i class="fa fa-download"></i></a>
                    </div>
                </div>
                {!! Form::hidden('thumb', isset($post->thumb) ? makepreview($post->thumb, 'b', 'posts') : null, ['id' => 'upwthumb']) !!}
            </div>
        </div>
        <div class="cd-form" style="margin-top:20px;">
        <legend>{{ trans('updates.tags') }}</legend>
            <p class="cd-select icon" style="margin:  0;">
            {!! Form::text('tags', isset($post->tags) ? $post->tags : null, ['class' => ' ','id' => 'tags', 'placeholder' => trans('updates.addatag')]) !!}
            </p>
        </div>

        @unless($typene=='quiz' or $typene=='poll')
        <div class="cd-form" style="margin-top:20px;">
            <legend>{{ trans('updates.pagination') }}</legend>
            <p class="cd-select icon" style="margin:  0;">
                {!! Form::select('pagination', ['0'=>trans('updates.all') ,'1'=>'1','2'=>'2','3'=>'3','4'=>'4','5'=>'5','6'=>'6','7'=>'7','8'=>'8','9'=>'9','10'=>'10'], isset($post->pagination) ? $post->pagination : null) !!}
            </p>
        </div>
        @endunless
        <div class="sidebar-actions">
            {!! Form::submit(isset($post->id) ? trans('addpost.savec') : trans('addpost.createp'), ['class' => 'button button-orange button-full submit-button PostAction', 'data-post-t' => 'post']) !!}
            {!! Form::submit(trans('updates.saveasdraft'), ['class' => 'button button-rosy button-full submit-button PostAction', 'data-post-t' => 'draft']) !!}
            @if(isset($post->id))
                    <a href="{{ makeposturl($post) }}" class="button button-gray button-full">{{ trans('addpost.cancel') }}</a>
            @endif
        </div>
    </div>
    </div>
</div>