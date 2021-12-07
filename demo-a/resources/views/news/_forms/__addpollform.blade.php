<div class="entry" data-type="poll" @if(isset($entry->id)) data-entry-id="{{ $entry->id }}" @endif>
    @include('_forms.__entryactions')
    <h3><i class="fa fa-check-circle-o"></i> {{ trans('addpost.option') }}</h3>
    <div class="inpunting ordering pushpoll">
        <button class="order-number button button-gray">1</button>
        {!! Form::text(null, isset($entry->title) ? $entry->title : null, ['data-type' => 'title', 'class' => 'cd-input', 'placeholder' =>  trans('addpost.option') ]) !!}
    </div>

</div>
