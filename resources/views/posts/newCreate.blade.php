@extends("app")
@section('head_title', trans('addpost.create', ['type' => $category->name ]).' | '.getcong('sitename'))
@section('modedefault', 'mode-default')
@section('modeboxed', 'mode-boxed')
@section("header")
    <link rel="stylesheet" href="/assets/plugins/editor/simditor.css">
@endsection
@section("content")

    <div class="content add-form">
        {!!   Form::open(array('action' => 'PostsController@CreateNewPost', 'method' => 'POST', 'onsubmit' => 'return false', 'enctype' => 'multipart/form-data')) !!}
        <div class="container" style="background-color: #f9f9f9">
            <div class="mainside">

                <div class="question-post-form" data-type="{{ $category->type }}">
                    <h1 class="createtitle">
                        {{ trans('addpost.create', ['type' => ucfirst($category->posturl_slug) ]) }}
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
                            <legend>{{ trans('updates.tags') }}</legend>
                            <div class="cd-form">
                                {!! Form::text('tags', null , ['class' => 'cd-input ','id' => 'tags', 'placeholder' => ""]) !!}
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


                        @if($typene=='quiz')
                            <section class="form last" id="addnew"  style="border-bottom: 1px solid #e3e3e3;">


                                <legend>{{ trans('moduquiz.quizresults') }}</legend><br>

                                <div id="results">

                                    @include('_forms._moduquiz.__addresultform')

                                </div>


                                <a class="submit-button button button-rosy button-big button-full postable" style="width:100%;float:none;padding-left:0;padding-right:0;" data-method="Get" data-target="results" data-puttype="append" data-type="resultform" href="{{ action('FormController@addnewform') }}?addnew=result" ><i class="fa fa-check-circle-o"></i>{{ trans('addpost.add', ['type' => trans('moduquiz.result')]) }}</a>
                                <br><br><br><br>
                            </section>
                        @endif

                        <section class="form" >
                            <legend>{{ trans('addpost.entries', ['type' => ucfirst($category->posturl_slug) ]) }}</legend><br>
                            <div id="entries">
                                @if($typene=='video')

                                    @include('_forms.__addvideoform')

                                    @elseif($typene=='list')

                                    @include('_forms.__addimageform')

                                    @elseif($typene=='quiz')

                                    @include('_forms._moduquiz.__addquestionform')

                                    @elseif($typene=='poll')

                                    @include('_forms._modupoll.__addpollform')

                                    @else

                                    @include('_forms.__addtextform')

                                @endif

                            </div>

                            @if($typene=='quiz')
                                <a class="submit-button button button-blue button-full postable"  style="width:100%;float:none;padding-left:0;padding-right:0;" data-method="Get" data-target="entries" data-puttype="append" data-type="questionform" href="{{ action('FormController@addnewform') }}?addnew=question"><i class="fa fa-question-circle"></i>{{ trans('addpost.add', ['type' => trans('moduquiz.question')]) }}</a>


                                <div class="clear"></div>
                                <br><br><br>
                            @endif

                        </section>

                        @unless($typene=='quiz')
                        <section class="form last" id="addnew">
                            @include('posts.add-entry')
                        </section>
                        @endunless
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
    @include('posts.create-footerjs')
@endsection