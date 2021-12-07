<div class="answers-form">
    @if(getcong('p-easycomment')=='on')
            <!-- easyComment Content Div -->
    <div id="easyComment_Content"></div>
    <br><br>
    <!-- easyComment -->
    <script type="text/javascript">
        // CONFIGURATION VARIABLES
        var easyComment_ContentID = 'Post_{{ $post->id }}';
        var easyComment_FooterLinks = 'Off'; // Disable footer links from the easyComment script for Buzzy Demo


        /* * * DON'T EDIT BELOW THIS LINE * * */
        var easyComment_Theme = '{{ getcong('easyCommentTheme') ? getcong('easyCommentTheme') : 'Default' }}'; // Title of easyComment area. Yu can change this if you want.
        var easyComment_Title = '{{ getcong('easyCommentTitle') ? getcong('easyCommentTitle') : 'Comments' }}'; // Title of easyComment area. Yu can change this if you want.

        var easyComment_userid = '{{ Auth::check() ? Auth::user()->id : '' }}';
        var easyComment_username = '{{ Auth::check() ? Auth::user()->username : '' }}';
        var easyComment_usericon = '{{ Auth::check() ? makepreview(Auth::user()->icon, 's', 'members/avatar') : '' }}';
        var easyComment_profillink = '{{ Auth::check() ? action('UsersController@index', [Auth::user()->username_slug ]) : '' }}';

        var easyComment_Domain = '{{ getcong('easyCommentcode') }}';

        (function() {
            var EC = document.createElement('script');
            EC.type = 'text/javascript';
            EC.async = true;
            EC.src = easyComment_Domain + 'plugin/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(EC);
        })();
    </script>

    @endif

    @if(getcong('p-facebookcomments')=='on')
        <div class="colheader">
            <h1>{{ trans('index.conversations') }}</h1>
        </div>
        <div class="fb-comments" data-href="{{  Request::url() }}" data-numposts="5" data-width="100%" style="width: 100%"></div>
        <br><br>
    @endif
    @if(getcong('p-disquscomments')=='on')
        <div class="colheader">
            <h1>{{ trans('index.disqusconversations') }}</h1>
        </div>
        {!! getcong('DisqussCommentcode') !!}
        <br><br>
    @endif

</div>
