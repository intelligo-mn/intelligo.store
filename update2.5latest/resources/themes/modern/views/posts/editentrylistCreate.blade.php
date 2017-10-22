
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
