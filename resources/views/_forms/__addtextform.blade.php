<div class="entry" data-type="text" @if(isset($entry->id)) data-entry-id="{{ $entry->id }}" @endif>
    <div class="entryactions"> <button class="button button-red get-button delete-entry"><i class="fa fa-trash"></i></button>  <button class="button button-white get-button up-down-trigger up-entry"><i class="fa fa-arrow-up"></i></button>  <button class="button button-white get-button up-down-trigger down-entry"><i class="fa fa-arrow-down"></i></button> </div>
    <h3><i class="fa fa-file-text"></i> {{ trans('addpost.text') }}</h3>
    <div class="inpunting ordering">
        <button class="order-number button button-gray">1</button>
        {!! Form::text(null, isset($entry->title) ? $entry->title : null, ['data-type' => 'title', 'class' => 'cd-input', 'placeholder' => trans('addpost.entry_titleop')]) !!}
    </div>
    <div class="inpunting">
        {!! Form::textarea(null, isset($entry->body) ? $entry->body : null, ['data-type' => 'body', 'class' => 'message','id' => 'edit', 'placeholder' => trans('addpost.entry_body')]) !!}
    </div>

    <div class="moredetail text">
        <div class="detailhide" style="display:none">
            <div class="inpunting">

            {!! Form::text(null, isset($entry->source) ? $entry->source : null, ['data-type' => 'source', 'class' => 'cd-input ', 'placeholder' => trans('addpost.entry_source')]) !!}

            </div>
         </div>
        <a href="javascript:;" class="trigger"><span class="down">{{ trans('addpost.mored') }} <i class="fa fa-angle-down"></i></span><span class="up">{{ trans('addpost.lessd') }}  <i class="fa fa-angle-up"></i></span></a>
     </div>
</div>
