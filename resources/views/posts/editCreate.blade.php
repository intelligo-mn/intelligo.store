@extends("app")
@section("header")
<link rel="stylesheet" href="/assets/plugins/editor/simditor.css">
@endsection
@section("content")

    <div class="content add-form">
        {!!   Form::open(array('action' => array('PostsController@CreateEditPost', $post->id), 'method' => 'POST', 'onsubmit' => 'return false', 'enctype' => 'multipart/form-data')) !!}
        <div class="container" style="background-color: #f9f9f9">
            <div class="mainside">

                <div class="question-post-form" data-type="{{ $typene }}">
                    <h1 class="createtitle">
                        {{ trans('index.edit') }} {{ $titlem }}
                    </h1>
                    <fieldset>
                        <div class="clear"></div>
                        <section class="form">
                            @include('errors.adminlook', ['relatedid' => $post->user->id, 'relatedtext' => 'You can edit this post beacuse your an admin'])

                            <legend>{{ trans('addpost.title') }}</legend>
                            <div class="cd-form">
                                {!! Form::text('headline', $post->title, ['class' => 'cd-input ', 'placeholder' => 'Headline (max: 255 character)']) !!}
                            </div>
                             <legend>{{ trans('addpost.desc') }}</legend>
                            <div class="cd-form">
                                {!! Form::textarea('description', $post->body , ['class' => 'cd-input ','style' => 'height:80px', 'placeholder' => 'Description  (max: 500 character)']) !!}
                            </div>

                        </section>
                        @if($typene=='list')
                        <section class="form">
                            <legend>{{ trans('addpost.listtype') }}</legend>
                            <div class="lists-types">
                                <a class="button @if($post->ordertype=='asc') button-gray selected @else button-white @endif" data-order="asc">
                                    <i class="fa fa-sort-numeric-asc"></i>
                                    <strong>{{ trans('addpost.listasc') }}</strong>
                                </a>
                                <a class=" button @if($post->ordertype=='desc') button-gray selected @else button-white @endif" data-order="desc">
                                    <i class="fa fa-sort-numeric-desc"></i>
                                    <strong>{{ trans('addpost.listdesc') }}</strong>
                                </a>
                                <a class=" button  @if($post->ordertype==null) button-gray selected @else button-white @endif last" data-order="none">
                                    <i class="fa fa-list-ul"></i>
                                    <strong>{{ trans('addpost.normallist') }}</strong>
                                </a>

                            </div>
                        </section>
                        @endif
                        <section class="form">
                            <legend>{{ trans('addpost.entries', ['type' => ucfirst($typene) ]) }}</legend>
                            <div id="entries">

                                @foreach($entrys as $key => $entry)


                                    @if($entry->type=='video')

                                        @include('_forms.__addvideoform', ['entry' => $entry])

                                    @elseif($entry->type=='embed')

                                        @include('_forms.__addembedform', ['entry' => $entry])

                                    @elseif($entry->type=='text')

                                        @include('_forms.__addtextform', ['entry' => $entry])

                                    @elseif($entry->type=='poll')

                                        @include('_forms.__addpollform', ['entry' => $entry])

                                    @elseif($entry->type=='image')

                                        @include('_forms.__addimageform', ['entry' => $entry])

                                    @else

                                        @include('_forms.__addtextform', ['entry' => $entry])

                                    @endif

                                @endforeach


                            </div>
                        </section>
                        <section class="form last" id="addnew">
                            @include('posts.add-entry')
                        </section>
                        <div class="clear"></div>

                    </fieldset>

                </div>

            </div>
            @include('posts.create-sidebar')


        </div>
        {!! Form::close() !!}
    </div>
@endsection
@section("footer")
    <script src="/assets/plugins/editor/module.min.js"></script>
    <script src="/assets/plugins/editor/hotkeys.min.js"></script>
    <script src="/assets/plugins/editor/simditor.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/3.51/jquery.form.min.js"></script>
    <script src="/assets/js/buzzyeditor.min.js"></script>
    <script>
        $( document ).ready(function() {
            BuzzyEditor.init();
            BuzzyEditor.EditorInit();
        });
    </script>
@endsection