

<div class="clear"></div>


<footer class="footer">
    <div class="container" style="border:0 ; box-shadow: none;">
        <div class="row">
            <ul>
                @foreach(\App\Pages::where('footer', '1')->get() as $page)
                    <li> <a href="{{ action('PagesController@showpage', [$page->slug ]) }}" title="{{ $page->title }}">{{ $page->title }}</a></li>
                @endforeach
                    @if(getcong('p-buzzycontact') == 'on')
                    <li> <a href="{{ action('ContactController@index') }}">{{ trans('buzzycontact.contact') }}</a></li>
                    @endif
            </ul>
            <div class="col-1">


                <div class="social-side" >

                    @if(getcong('facebookpage'))<a target="_blank" href="{!!  getcong('facebookpage') !!}"><i class="fa fa-facebook-square"></i></a> @endif
                    @if(getcong('twitterpage'))<a target="_blank" href="{!!  getcong('twitterpage') !!}"><i class="fa fa-twitter"></i></a>@endif
                    @if(getcong('googlepage'))<a target="_blank" href="{!!  getcong('googlepage') !!}"><i class="fa fa-google-plus"></i></a>@endif
                    @if(getcong('instagrampage'))<a target="_blank" href="{!!  getcong('instagrampage') !!}"><i class="fa fa-instagram"></i></a>@endif
                    <a href="/index.xml"><i class="fa fa-rss"></i></a>

                </div>

            </div>




                <div class="col-2">


                </div>

                <div class="col-3">

                </div>

        </div>
    </div>
    <div class="clear"></div>
</footer>
<div class="clear"></div>
<footer class="footer" style="margin:0;background:#F9F9F9;border-top:1px solid #f1f1f1">

    <div class="container" style="border:0 ;box-shadow: none;">
      <div class="row">


            <div class="col-1">
                <img class="site-logo" src="/assets/img/flogo.png" alt="">

                @if(\Config::get('app.language')!=null)
                    <div class="language-links hor">
                        <a class="button button-white" href="javascript:">
                            <i class="fa fa-globe"></i> <b>{{ \Config::get('app.language.'.$DB_USER_LANG)['name']  }}</b>
                        </a>
                        <ul class="sub-nav ">
                            @foreach(\Config::get('app.language') as $key => $lang)
                                <li>
                                    <a href="{{ url('/selectlanguge/'.$key) }}" class="sub-item">{{ $lang['name'] }}</a>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                @endif
                <div class="clear"></div>
            </div>


            <div class="col-3" style="padding-top:10px;">
                {{ trans("updates.copyright") }}

            </div>

        </div>
<div class="clear"></div>
    </div>
</footer>
