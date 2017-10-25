
<script src="/assets/plugins/editor/module.min.js"></script>
<script src="/assets/plugins/editor/hotkeys.min.js"></script>
<script src="/assets/plugins/editor/simditor.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/3.51/jquery.form.min.js"></script>
<script src="https://rubaxa.github.io/Sortable/Sortable.js"></script>

<script src="/assets/plugins/selectize.min.js" type="text/javascript" charset="utf-8"></script>


<script>
     BuzzyEditorlang = {
        'lang_1': '{!!  trans('updates.BuzzyEditor.lang.lang_1') !!}',
        'lang_2': '{!! trans('updates.BuzzyEditor.lang.lang_2') !!}',
        'lang_3': '{!! trans('updates.BuzzyEditor.lang.lang_3') !!}',
        'lang_4': '{!! trans('updates.BuzzyEditor.lang.lang_4') !!}',
        'lang_5': '{!! trans('updates.BuzzyEditor.lang.lang_5') !!}',
        'lang_6': '{!! trans('updates.BuzzyEditor.lang.lang_6') !!}',
        'lang_7': '{!! trans('updates.BuzzyEditor.lang.lang_7') !!}',
        'lang_8': '{!! trans('updates.BuzzyEditor.lang.lang_8') !!}',
        'lang_9': '{!! trans('updates.BuzzyEditor.lang.lang_9') !!}',
        'lang_10': '{!! trans('updates.BuzzyEditor.lang.lang_10') !!}',
        'lang_11': '{!! trans('updates.BuzzyEditor.lang.lang_11') !!}',
        'lang_12': '{!! trans('updates.BuzzyEditor.lang.lang_12') !!}',
        'lang_13': '{!! trans('updates.BuzzyEditor.lang.lang_13') !!}',
        'lang_14': '{!! trans('updates.BuzzyEditor.lang.lang_14') !!}',
        'lang_15': '{!! trans('updates.BuzzyEditor.lang.lang_15') !!}',
        'errorl': '{!! trans('updates.error') !!}'
    };

     Simditor.i18n = {
        'en_EN': {
            'normalText': '{!! trans('updates.BuzzyEditor.TextEditor.normalText') !!}',
            'title': '{!! trans('updates.BuzzyEditor.TextEditor.title') !!}',
            'blockquote': '{!! trans('updates.BuzzyEditor.TextEditor.blockquote') !!}',
            'bold': '{!! trans('updates.BuzzyEditor.TextEditor.bold') !!}',
            'italic': '{!! trans('updates.BuzzyEditor.TextEditor.italic') !!}',
            'link': '{!! trans('updates.BuzzyEditor.TextEditor.link') !!}',
            'text': '{!! trans('updates.BuzzyEditor.TextEditor.text') !!}',
            'linkText': '{!! trans('updates.BuzzyEditor.TextEditor.linkText') !!}',
            'linkUrl': '{!! trans('updates.BuzzyEditor.TextEditor.linkUrl') !!}',
            'removeLink': '{!! trans('updates.BuzzyEditor.TextEditor.removeLink') !!}',
            'ol': '{!! trans('updates.BuzzyEditor.TextEditor.ol') !!}',
            'ul': '{!! trans('updates.BuzzyEditor.TextEditor.ul') !!}',
            'strikethrough': '{!! trans('updates.BuzzyEditor.TextEditor.strikethrough') !!}',
            'underline': '{!! trans('updates.BuzzyEditor.TextEditor.underline') !!}',
        }
    };

</script>
<script src="{{ Theme::asset('js/buzzyeditor.min.js', null, false) }}"></script>
<script>
    $( document ).ready(function() {
        BuzzyEditor.init();
        BuzzyEditor.EditorInit();

        $('#tags').selectize({
            plugins: ['restore_on_backspace', 'remove_button'],
            delimiter: ',',
            persist: false,
            create: function(input) {
                return {
                    value: input,
                    text: input
                }
            }
        });
        $('#tagcats').selectize({
            plugins: ['restore_on_backspace', 'remove_button'],
            persist: false,
            maxItems: 3,
            valueField: 'id',
            labelField: 'name',
            searchField: ['id', 'name'],
            sortField: 'text',
            create: function(input) {
                return {
                    value: input,
                    text: input
                }
            }

        });
    });
</script>
<script async defer src="//platform.instagram.com/{{  getenvcong('sitelanguage') > "" ? getenvcong('sitelanguage') : 'en_US' }}/embeds.js"></script>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<div id="fb-root"></div>
<script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/{{  getenvcong('sitelanguage') > "" ? getenvcong('sitelanguage') : 'en_US' }}/sdk.js#xfbml=1&version=v2.5";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>