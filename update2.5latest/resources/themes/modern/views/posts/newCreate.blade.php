@extends("app")
@section('head_title', trans('addpost.create', ['type' => ucfirst($category->posturl_slug) ]).' | '.getenvcong('sitename'))
@section('modedefault', 'mode-add')
@section("header")
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <link rel="stylesheet" href="/assets/plugins/editor/simditor.css">
    <link rel="stylesheet" href="/assets/plugins/selectize.css" data-theme="default">
    <link rel="stylesheet" href="/assets/plugins/selectize.default.css" data-theme="default">
@endsection
@section("content")

    <div class="buzz-container">

        {!!   Form::open(array('action' => 'PostsController@CreateNewPost', 'method' => 'POST', 'onsubmit' => 'return false', 'enctype' => 'multipart/form-data')) !!}
        <div class="global-container container add-container" style="background: #fcfcfc;">

            <div class="content"  style="background: #fff;">
                <section class="form  layout" style="background: #f9f9f9;padding:0!important">
                    <div class="layout-items">
                        <?php $getcats = \App\Categories::where("main", '1')->where("disabled", '0')->orwhere("main", '2')->where("disabled", '0')->orderBy('order')->get() ?>
                        @foreach($getcats as $ko => $categorys)
                            <a class="{{ $typene==$categorys->type ? 'selected' : '' }}" href="{{ action('PostsController@CreateNew', ['new'=>$categorys->posturl_slug]) }}" style="width: calc(99.999999% * 1/{{ count($getcats) }}) !important;">
                                {!! $categorys->icon !!}<strong>{{ trans('index.'.$categorys->posturl_slug) == 'index.'.$categorys->posturl_slug ? ucfirst($categorys->posturl_slug) :  trans('index.'.$categorys->posturl_slug) }}</strong>
                            </a>
                        @endforeach
                    </div>
                </section>


                <div class="question-post-form" data-type="{{ $category->type }}">
                    <fieldset>
                        <div class="clear"></div>

                        <section class="form">

                            <legend>{{ trans('addpost.title') }} & {{ trans('addpost.categories') }}</legend>
                            <div class="cd-form">
                                {!! Form::text('headline', null , ['class' => 'cd-input title-input', 'style' => 'margin-bottom:10px', 'placeholder' => trans('addpost.titleplace')]) !!}

                                <select id="tagcats" class="demo-default" name="category" multiple placeholder="{{ trans('addpost.categories') }}">
                                    @foreach(\App\Categories::where('main', 1)->orwhere('main', 2)->orderBy('order', 'asc')->get() as $ci => $categorys)
                                        <optgroup label="">
                                            <option value="{{ $categorys->id }},">{{ $categorys->name }}</option>
                                            @foreach(\App\Categories::where('type', $categorys->id)->orderBy('name')->get() as  $i => $cat)
                                                <option value="{{ $categorys->id }},{{ $cat->id }},"><b>{{ $categorys->name }}</b> / {{ $cat->name }}</option>
                                                @foreach(\App\Categories::where('type', $cat->id)->orderBy('name')->get() as  $io => $catq)
                                                    <option value="{{ $categorys->id }},{{ $cat->id }},{{ $catq->id }}," ><strong>{{ $categorys->name }}</strong> / <b>{{ $cat->name }}</b> / {{ $catq->name }}</option>
                                                @endforeach
                                            @endforeach
                                        </optgroup>
                                    @endforeach
                                </select>
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


                        @if($typene=='quiz')
                            <section class="form">
                                <legend>{{ trans('buzzyquiz.quiztype') }}</legend>
                                <div class="lists-types">
                                    <a href="{{ action('PostsController@CreateNew', ['new'=> Request::query('new')]) }}" class="button {{ Request::query('qtype')=='trivia' ?  'button-white' : 'button-gray selected' }}"  style="width:48%" data-order="persinalty">
                                        <i class="fa fa-info-circle"></i>
                                        <strong>{!!  trans('buzzyquiz.persinalty')  !!}</strong>
                                    </a>
                                    <a href="{{ action('PostsController@CreateNew', ['new'=> Request::query('new'), 'qtype'=>'trivia']) }}" class=" button {{ Request::query('qtype')=='trivia' ? 'button-gray selected' : 'button-white' }} last" style="width:48%" data-order="trivia">
                                        <i class="fa fa-check-circle"></i>
                                        <strong>{!!  trans('buzzyquiz.trivia')  !!}</strong>
                                    </a>

                                </div>
                            </section>

                            @if(Request::query('qtype')!=='trivia')
                            <section class="form last" id="addnew"  style="border-bottom: 1px solid #e3e3e3;">


                                <legend>{{ trans('buzzyquiz.quizresults') }}</legend><br>

                                <div id="results">

                                    @include('_forms._buzzyquiz.__addresultform')

                                </div>


                                <a class="submit-button button button-rosy button-big button-full postable" style="width:100%;float:none;padding-left:0;padding-right:0;" data-method="Get" data-target="results" data-puttype="append" data-type="resultform" href="{{ action('FormController@addnewform') }}?addnew=result" ><i class="fa fa-check-circle-o"></i>{{ trans('addpost.add', ['type' => trans('buzzyquiz.result')]) }}</a>
                                <br><br><br><br>
                            </section>
                            @endif
                        @endif

                        <section class="form" >
                            <legend>{{ trans('addpost.entries', ['type' => ucfirst($category->posturl_slug) ]) }}</legend>
                            <div id="entries">
                                @if($typene=='video')

                                    @include('_forms.__addvideoform')

                                    @elseif($typene=='list')

                                    @include('_forms.__addimageform')

                                    @elseif($typene=='quiz')

                                    @include('_forms._buzzyquiz.__addquestionform')

                                    @elseif($typene=='poll')

                                    @include('_forms._buzzypoll.__addpollform')

                                    @else

                                    @include('_forms.__addtextform')

                                @endif

                            </div>

                            @if($typene=='quiz')
                                <a class="submit-button button button-blue button-full postable"  style="width:100%;float:none;padding-left:0;padding-right:0;" data-method="Get" data-target="entries" data-puttype="append" data-type="questionform" href="{{ action('FormController@addnewform') }}?addnew=question{{ Request::query('qtype')=='trivia' ? '&qtype=trivia' : '' }}"><i class="fa fa-question-circle"></i>{{ trans('addpost.add', ['type' => trans('buzzyquiz.question')]) }}</a>


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