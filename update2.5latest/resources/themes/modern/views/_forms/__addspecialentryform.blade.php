<div class="entry" data-type="{{ $typeofwidget }}" @if(isset($entry->id)) data-entry-id="{{ $entry->id }}" @endif>
    @include('_forms.__entryactions')
    <h3><i class="fa {{ $iconofwidget }}"></i> {{ $titleofwidget }}</h3>
    <div class="inpunting"  @if(isset($entry->video)) style="display: none;" @endif>
        <div class="getvideoinput">
        {!! Form::text(null, null, ['class' => 'cd-input', 'placeholder' => $urlto]) !!}
        <button class="button button-blue get-button create{{ $typeofwidget }}">{{ trans('updates.get') }} <i class="fa fa-download"></i></button>
        </div>
    </div>
    <div class="embedarea @if(empty($entry->video)) hide @endif ">
        <div class="inpunting ordering">
            <button class="order-number button button-gray">1</button>
            {!! Form::text(null, isset($entry->title) ? $entry->title : null, ['data-type' => 'title', 'class' => 'cd-input ', 'placeholder' => trans('addpost.entry_titleop')]) !!}
        </div>
     {!! Form::hidden(null, isset($entry->video) ? $entry->video : null, ['data-type' => 'video', 'class' => 'cd-input-video']) !!}
        <div class="inpunting videoembed">

            @if(isset($entry->video))

                @if($typeofwidget=='instagram')
                <iframe class="instagram-media" id="instagram-embed-{{ $entry->id }}" src="{!! $entry->video !!}embed/captioned/?v=5" allowtransparency="true" frameborder="0" data-instgrm-payload-id="instagram-media-payload-{{ $entry->id }}" scrolling="no" style="border: 0; margin: 1px; max-width: 658px; width: 100% ; border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.498039) 0px 0px 1px 0px, rgba(0, 0, 0, 0.14902) 0px 1px 10px 0px; display: block; padding: 0px;background: rgb(255, 255, 255);"></iframe>
                 <script src="//platform.instagram.com/en_US/embeds.js"></script>
                @elseif($typeofwidget=='facebookpost')
                    <div class="fb-post" data-href="{!!   $entry->video !!}" data-width="100%"></div>

                @else
                    {!!   $entry->video !!}
                @endif
            @endif
        </div>

        <div class="moredetail text">
            <div class="detailhide" style="display:none">
                <div class="inpunting">
                    {!! Form::textarea(null, isset($entry->body) ? $entry->body : null, ['data-type' => 'body', 'class' => 'message','id' => 'edit', 'placeholder' => trans('addpost.entry_body')]) !!}
                </div>
            </div>
            <a href="javascript:;" class="trigger"><span class="down">{{ trans('addpost.mored') }} <i class="fa fa-angle-down"></i></span><span class="up">{{ trans('addpost.lessd') }}  <i class="fa fa-angle-up"></i></span></a>
        </div>
    </div>
</div>
