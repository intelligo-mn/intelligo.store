<div class="entry" data-type="poll" @if(isset($entry->id)) data-entry-id="{{ $entry->id }}" @endif>
    <div class="entryactions"> <button class="button button-red get-button delete-entry"><i class="fa fa-trash"></i></button>  <button class="button button-white get-button up-down-trigger up-entry"><i class="fa fa-arrow-up"></i></button>  <button class="button button-white get-button up-down-trigger down-entry"><i class="fa fa-arrow-down"></i></button> </div>
    <h3><i class="fa fa-check-circle-o"></i> {{ trans('addpost.option') }}</h3>
    <div class="inpunting ordering pushpoll">
        <button class="order-number button button-gray">1</button>
        {!! Form::text(null, isset($entry->title) ? $entry->title : null, ['data-type' => 'title', 'class' => 'cd-input', 'placeholder' =>  trans('addpost.option') ]) !!}
    </div>

</div>
