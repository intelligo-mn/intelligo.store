@extends("app")
@section('head_title', 'Create '.ucfirst($typene).' | Buzzy')
@section("header")
    <link rel="stylesheet" href="/assets/plugins/editor/simditor.css">
@endsection
@section("content")

    <div class="content add-form">
        {!!   Form::open(array('action' => 'PostsController@CreateNewPost', 'method' => 'POST', 'onsubmit' => 'return false', 'enctype' => 'multipart/form-data')) !!}
        <div class="container" style="background-color: #f9f9f9">
            <div class="mainside">

                <div class="question-post-form" data-type="{{ $typene }}">
                    <h1 class="createtitle">
                        {{ trans('addpost.create', ['type' => ucfirst($typene) ]) }}
                    </h1>
                    <fieldset>
                        <div class="clear"></div>

                        <section class="form">

                            <legend>{{ trans('addpost.title') }}</legend>
                            <div class="cd-form">
                                {!! Form::text('headline', null , ['class' => 'cd-input ', 'placeholder' => trans('addpost.titleplace')]) !!}
                            </div>
                             <legend>{{ trans('addpost.desc') }}</legend>
                            <div class="cd-form">
                                {!! Form::textarea('description', null , ['class' => 'cd-input ','style' => 'height:80px', 'placeholder' => trans('addpost.descplace')]) !!}
                            </div>
                        </section>
                        @if($typene=='list')
                        <section class="form">
                            <legend>{{ trans('addpost.listtype') }}</legend>
                            <div class="lists-types">
                                <a class="button button-gray selected" data-order="asc">
                                    <i class="fa fa-sort-numeric-asc"></i>
                                    <strong>{{ trans('addpost.listasc') }}</strong>
                                </a>
                                <a class=" button button-white" data-order="desc">
                                    <i class="fa fa-sort-numeric-desc"></i>
                                    <strong>{{ trans('addpost.listdesc') }}</strong>
                                </a>
                                <a class=" button button-white last" data-order="none">
                                    <i class="fa fa-list-ul"></i>
                                    <strong>{{ trans('addpost.normallist') }}</strong>
                                </a>

                            </div>
                        </section>
                        @endif
                        <section class="form">
                            <legend>{{ trans('addpost.entries', ['type' => ucfirst($typene) ]) }}</legend>
                            <div id="entries">
                                @if($typene=='video')

                                    @include('_forms.__addvideoform')

                                    @elseif($typene=='list')

                                    @include('_forms.__addtextform')

                                    @elseif($typene=='poll')

                                    @include('_forms.__addpollform')
                                    @include('_forms.__addpollform')

                                    @else

                                    @include('_forms.__addtextform')

                                @endif

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