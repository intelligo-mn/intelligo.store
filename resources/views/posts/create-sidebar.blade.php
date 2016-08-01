<div class="sidebar"">
    <div class="question-post-side-bar-form">
        <div class="cd-form" id="previewwrapper">
            <legend style="padding-top:0">{{ trans('addpost.preview') }}</legend>

            <div class="thumbwrapper">
                <div class="previewshow" @if(isset($post->thumb)) style="display: block;" @endif>
                    <div class="imagepr_wrap">
                    @if(isset($post->thumb)) <img src="/upload/media/posts/{{ $post->thumb }}-s.jpg"> @endif
                    </div>
                    <div class="thumbactions">
                        <a class="button button-red deleteimage" data-action="remove" data-target="thumb"><i class="fa fa-trash"></i></a>
                    </div>
                </div>
                <div class="preview-placeholder" @if(isset($post->thumb)) style="display: none;" @endif>
                    <i class="fa fa-plus fa-2x"></i><br>
                    <h4 class="text-muted">{{ trans('addpost.pickpreview') }}</h4>
                    <form action="">
                        <input type="file" accept="image/*" class="uploadaimage preview" data-vtype="preview">
                    </form>
                    <div style="font-size:12px;color:#ccc"> or </div>
                    <div class="image-upload-actions">
                        <a class="button button-white getimageurl" data-action="add" data-target="preview">Get from the Url <i class="fa fa-download"></i></a>
                    </div>
                </div>
                {!! Form::hidden('thumb', isset($post->thumb) ? '/upload/media/posts/'.$post->thumb.'-b.jpg' : null, ['id' => 'upwthumb']) !!}
            </div>
        </div>
        <div class="cd-form" style="margin-top:20px;">
            <legend>{{ trans('addpost.categories') }}</legend>
            <p class="cd-select icon">
                {!! Form::select('category', $categories, isset($post->category_id) ? $post->category_id : null) !!}
            </p>
        </div>
        <div class="sidebar-actions">
            {!! Form::submit(isset($post->id) ? trans('addpost.savec') : trans('addpost.createp'), ['class' => 'button button-orange button-full submit-button ', 'id' => 'PostAction']) !!}
            @if(isset($post->id))
                    <a href="{{ action('PostsController@index', [$post->type, $post->slug ]) }}" class="button button-gray button-full">{{ trans('addpost.cancel') }}</a>
            @endif
        </div>
    </div>
</div>