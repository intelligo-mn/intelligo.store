<div class="content-comments">
    @if(getenvcong('p-buzzyeasycomment')=='on')
            <!-- easyComment Content Div -->
    <div id="easyComment_Content"></div>
    <br><br>
    <!-- easyComment -->
    <script type="text/javascript">
        // CONFIGURATION VARIABLES
        var easyComment_ContentID = 'Post_{{ $id }}';
        var easyComment_FooterLinks = 'Off'; // Disable footer links from the easyComment script for Buzzy Demo


        /* * * DON'T EDIT BELOW THIS LINE * * */
        var easyComment_Theme = '{{ getenvcong('easyCommentTheme') ? getenvcong('easyCommentTheme') : 'Default' }}'; // Title of easyComment area. Yu can change this if you want.
        var easyComment_Title = '{{ getenvcong('easyCommentTitle') ? getenvcong('easyCommentTitle') : 'Comments' }}'; // Title of easyComment area. Yu can change this if you want.

        var easyComment_userid = '{{ Auth::check() ? Auth::user()->id : '' }}';
        var easyComment_username = '{{ Auth::check() ? Auth::user()->username : '' }}';
        var easyComment_usericon = '{{ Auth::check() ? makepreview(Auth::user()->icon, 's', 'members/avatar') : '' }}';
        var easyComment_profillink = '{{ Auth::check() ? action('UsersController@index', [Auth::user()->username_slug ]) : '' }}';

        var easyComment_Domain = '{{ getenvcong('easyCommentcode') }}';

        (function() {
            var EC = document.createElement('script');
            EC.type = 'text/javascript';
            EC.async = true;
            EC.src = easyComment_Domain + 'plugin/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(EC);
        })();
    </script>

    @endif

    @if(getenvcong('p-facebookcomments')=='on')

        <div class="timeline-title">{{ trans('index.conversations') }}</div>
        <div class="fb-comments" data-href="{{ $url }}" data-numposts="5" data-width="100%" style="width: 100%"></div>
        <br><br>
    @endif
    @if(getenvcong('p-disquscomments')=='on')
        <div class="timeline-title">{{ trans('index.disqusconversations') }}</div>
        <div id="disqus_thread"></div><script>(function() {   var d = document, s = d.createElement('script');s.src = '//{!! getenvcong('DisqussCommentcode') !!}.disqus.com/embed.js';s.setAttribute('data-timestamp', +new Date());(d.head || d.body).appendChild(s);})();</script><noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
        <br><br>
    @endif

</div>

<style> .fb_dialog{z-index:999999999} </style>
<div id="fb-root"></div>
<script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/{{  getenvcong('sitelanguage') > "" ? getenvcong('sitelanguage') : 'en_US' }}/sdk.js#xfbml=1{!! getenvcong('facebookapp') > "" ? '&appId='.getenvcong('facebookapp') : '' !!}&version=v2.7";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>