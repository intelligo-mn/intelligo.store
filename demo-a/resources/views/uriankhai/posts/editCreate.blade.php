@extends("app")
@section('head_title', trans('addpost.edit', ['type' => $post->title ]).' | '.getcong('sitename'))
@section('modedefault', 'mode-default')
@section('modeboxed', 'mode-boxed')
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
                        {{ trans('index.edit') }} {{ ucfirst($post->category->posturl_slug) }}
                    </h1>
                    <fieldset>
                        <div class="clear"></div>
                        <section class="form">
                            @include('errors.adminlook', ['relatedid' => $post->user->id, 'relatedtext' => trans('updates.admininfo')])

                            <legend>{{ trans('addpost.title') }}</legend>
                            <div class="cd-form">
                                {!! Form::text('headline', $post->title, ['class' => 'cd-input ', 'placeholder' => trans('addpost.titleplace')]) !!}
                            </div>
                             <legend>{{ trans('addpost.desc') }}</legend>
                            <div class="cd-form">
                                {!! Form::textarea('description', $post->body , ['class' => 'cd-input ','style' => 'height:80px', 'placeholder' =>  trans('addpost.descplace')]) !!}
                            </div>
                            <legend>{{ trans('updates.tags') }}</legend>
                            <div class="cd-form">
                                {!! Form::text('tags', $post->tags , ['class' => 'cd-input ','id' => 'tags', 'placeholder' => ""]) !!}
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

                        @if($typene=='quiz')
                            <section class="form last" id="addnew"  style="border-bottom: 1px solid #e3e3e3;">


                                <legend>{{ trans('buzzyquiz.quizresults') }}</legend><br>

                                <div id="results">
                                    @foreach($entrysquizresults as $key => $entry)

                                    @include('_forms._buzzyquiz.__addresultform', ['entry' => $entry])

                                    @endforeach
                                </div>


                                <a class="submit-button button button-rosy button-big button-full postable" style="width:100%;float:none;padding-left:0;padding-right:0;" data-method="Get" data-target="results" data-puttype="append" data-type="resultform" href="{{ action('FormController@addnewform') }}?addnew=result" ><i class="fa fa-check-circle-o"></i>{{ trans('addpost.add', ['type' => trans('buzzyquiz.result')]) }}</a>
                                <br><br><br><br>
                            </section>
                        @endif

                        <section class="form">
                            <legend>{{ trans('addpost.entries', ['type' => ucfirst($post->category->posturl_slug) ]) }}</legend><br>
                            <div id="entries">
                                @if($typene=='quiz')

                                    @foreach($entrysquizquest as $key => $entry)

                                    @include('_forms._buzzyquiz.__addquestionform', ['entry' => $entry])

                                    @endforeach

                                @else

                                @foreach($entrys as $key => $entry)


                                    @if($entry->type=='video')

                                        @include('_forms.__addvideoform', ['entry' => $entry])

                                    @elseif($entry->type=='embed')

                                        @include('_forms.__addembedform', ['entry' => $entry])

                                    @elseif($entry->type=='tweet')

                                        @include('_forms.__addspecialentryform', ['entry' => $entry ,
                                                                                    'typeofwidget' => 'tweet',
                                                                                    'titleofwidget' => trans('updates.tweet'),
                                                                                    'iconofwidget' => 'fa-twitter',
                                                                                    'urlto' => trans('updates.urltotweet'),
                                                                                ])
                                    @elseif($entry->type=='facebookpost')

                                        @include('_forms.__addspecialentryform', ['entry' => $entry ,
                                                                                'typeofwidget' => 'facebookpost',
                                                                                'titleofwidget' => trans('updates.facebookpost'),
                                                                                'iconofwidget' => 'fa-facebook',
                                                                                'urlto' => trans('updates.urltofacebookpost'),

                                                                            ])

                                    @elseif($entry->type=='instagram')

                                        @include('_forms.__addspecialentryform', ['entry' => $entry,
                                                                                        'typeofwidget' => 'instagram',
                                                                                        'titleofwidget' => trans('updates.instagram'),
                                                                                        'iconofwidget' => 'fa-instagram',
                                                                                        'urlto' => trans('updates.urltoinstagram'),
                                                                                    ])

                                    @elseif($entry->type=='soundcloud')

                                        @include('_forms.__addspecialentryform', ['entry' => $entry,
                                                                                     'typeofwidget' => 'soundcloud',
                                                                                    'titleofwidget' => trans('updates.soundcloud'),
                                                                                    'iconofwidget' => 'fa-soundcloud',
                                                                                    'urlto' => trans('updates.urltosoundcloud'),
                                                                                ])

                                    @elseif($entry->type=='text')

                                        @include('_forms.__addtextform', ['entry' => $entry])

                                    @elseif($entry->type=='poll')

                                        @include('_forms._buzzypoll.__addpollform', ['entry' => $entry])

                                    @elseif($entry->type=='image')

                                        @include('_forms.__addimageform', ['entry' => $entry])

                                    @else

                                        @include('_forms.__addtextform', ['entry' => $entry])

                                    @endif

                                @endforeach
                                @endif
                            </div>
                            @if($typene=='quiz')
                                <a class="submit-button button button-blue button-full postable"  style="width:100%;float:none;padding-left:0;padding-right:0;" data-method="Get" data-target="entries" data-puttype="append" data-type="questionform" href="{{ action('FormController@addnewform') }}?addnew=question"><i class="fa fa-question-circle"></i>{{ trans('addpost.add', ['type' => trans('buzzyquiz.question')]) }}</a>


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