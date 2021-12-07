<!doctype html>
<html amp lang="{{ Lang::getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1">
    <link rel='stylesheet'  href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?ver=4.7.5' type='text/css' media='all'/>
    <link href='https://fonts.googleapis.com/css?family={{  getenvcong('googlefont') }}' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" href="{{ url('/assets/img/favicon.png') }}" />
    <style amp-custom>
        body.body {
            font-family: {{    getenvcong('T_1_sitefontfamily', 'Arial') }};
            background: #e8e8e8;
            font-weight: 400;
            color: #363636;
            line-height: 1.44;
            font-size: 15px
        }
        .site-header {
            background: {{  getenvcong('T_1_NavbarBC', '#fff') }};
            border-bottom: 1px solid #f3f3f3;
        }

        html {
            line-height: 1.15;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%
        }
        a{color:#0379c4}.amp-wrapper{background:#fff;color:#363636;max-width:780px;margin:0 auto}.amp-image-tag,.wrap img,legend{max-width:100%}.amp-footer{background:#f3f3f3}button,hr,input{overflow:visible}audio,canvas,progress,video{display:inline-block}progress,sub,sup{vertical-align:baseline}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}h1{font-size:2em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects;-webkit-transition:all .4s ease;-moz-transition:all .4s ease;-o-transition:all .4s ease;transition:all .4s ease}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{color:inherit;display:table;white-space:normal}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.clearfix:after,.clearfix:before{display:table;content:' ';clear:both}.clearfix{zoom:1}.wrap{padding:15px 15px 0;height:100%}blockquote,p{margin:0 0 15px}b,strong{font-weight:700}.strong-label,blockquote{color:#000;font-family:inherit;font-weight:500;line-height:1.5}blockquote{border:1px solid #e2e2e2;border-width:1px 0;padding:15px 15px 15px 60px;text-align:left;position:relative;clear:both}blockquote p:last-child{margin-bottom:0}blockquote:before{content:"\f10e";font:normal normal normal 14px/1 FontAwesome;color:#d3d3d3;font-size:28px;position:absolute;left:12px;top:17px}.button,h1,h2,h3,h4,h5,h6{font-family:inherit;font-weight:500}.button{padding:6px 15px;border:1px solid #d7d7d7;background:#faf9f9;color:#494949;font-size:13px;display:inline-block;text-decoration:none;border-radius:33px}h1,h2,h3,h4,h5,h6{margin:15px 0 7px}.amp-copyright,.site-header .branding{font-weight:400;font-family:inherit;text-align:center}.site-header{height:52px;width:100%;position:relative;margin:0;color:#fff}.site-header .branding{display:block;font-size:20px;text-decoration:none;color:#fff;position:absolute;top:0;width:100%;padding:0 55px;z-index:9;height:52px;line-height:52px}.site-header .branding .amp-image-tag{display:inline-block}.amp-footer{margin:0}.amp-copyright{padding:17px 10px;color:#494949;border-top:1px solid rgba(0,0,0,.1);font-size:13px}.amp-main-link{display:block;text-align:center;font-weight:700;margin:6px 0 12px}.amp-main-link a{color:#000;text-decoration:none;padding:0 15px;display:inline-block;border:1px solid rgba(0,0,0,.08);border-radius:33px;line-height:26px;font-size:12px;font-weight:400}.amp-main-link a .fa{margin-right:5px}.pagination{line-height:28px;margin:20px 0;width:100%;height:30px;list-style:none;text-align:center}.pagination li{display:inline-block}.pagination li a,.pagination li span{display:inline-block;text-align:center;font-family:inherit;font-weight:500;margin:0 5px;padding:0 7px;color:#a2a2a2;font-size:14px;border:1px solid #d7d7d7;background:#faf9f9;text-decoration:none;border-radius:33px}.pagination li span{border:1px solid #cecece;background:#e2e2e2}.posts-item{padding:12px 0;border-bottom:1px solid #e6e6e6;min-height:125px}.posts-item:last-child{border-bottom:none;padding-bottom:0}.posts-item .post-thumbnail{display:inline-block;float:left;margin-right:15px;width:150px}.posts-item.have-thumbnail a.post-read-more{position:absolute;bottom:18px}.posts-item .post-title{max-height:55px;overflow:hidden;color:#363636;font-size:15px;line-height:1.3;margin:0 0 10px}.posts-item .post-title,.posts-item a.post-read-more{font-family:inherit;font-weight:500}.posts-item .post-title a,.posts-item a.post-read-more{color:#363636;text-decoration:none}.posts-item{position:relative margin-bottom: 30px}.posts-item .post-meta{margin-top:15px;font-size:12px}.posts-item .post-meta .post-date .fa{margin-right:3px}.posts-item a.post-read-more{font-size:12px;background:#f9f9f9;border:1px solid #d8d8d8;padding:0 13px;border-radius:33px;display:inline-block;line-height:24px}.posts-item a.post-read-more .fa{margin-left:3px}.posts-item a.post-read-more:hover{border-color:transparent;color:#000}.posts-item .post-excerpt{color:inherit;font-family:inherit;font-weight:200;font-size:14px;line-height:1.4}.posts-item .post-excerpt p:last-child{margin-bottom:0}.amp-featured-slider{margin-bottom:15px}.amp-featured-slider a{text-decoration:none;position:relative}.amp-featured-slider .title{background:rgba(0,0,0,.5);color:#fff;padding:10px;position:absolute;bottom:0;left:0;right:0}.social-list-wrapper{margin:15px 0}.social-list-wrapper.share-list{border:1px solid #e2e2e2;padding:10px 10px 6px}.social-list-wrapper .number{font-size:12px;font-weight:700;margin:0 0 0 4px;font-family:inherit;display:inline-block}.social-list-wrapper .post-share-btn{background:#fff;border:1px solid #e2e2e2;line-height:30px;height:30px;display:inline-block;padding:0 10px;border-radius:30px;font-size:12px;color:#4d4d4d;margin-right:8px;margin-bottom:4px;vertical-align:top}.social-list-wrapper .post-share-btn .fa{font-size:14px}.social-list-wrapper .post-share-btn .fa,.social-list-wrapper .post-share-btn .number,.social-list-wrapper .post-share-btn .text{line-height:28px;vertical-align:top}.social-list-wrapper .post-share-btn .text{font-size:12px;margin-left:3px}ul.social-list{list-style:none;margin:0;padding:0;display:inline-block;font-size:0;vertical-align:top}.social-list li{display:inline-block;margin-right:6px;vertical-align:top}.social-list li:last-child{margin-right:0}.social-list .social-item a{color:#fff;min-width:30px;height:30px;overflow:hidden;border-radius:15px;background:#bbb;display:inline-block;text-align:center;vertical-align:middle;font-size:14px;line-height:28px;margin-bottom:5px}.social-list .fa{vertical-align:middle}.social-list .social-item.facebook a{background-color:#2d5f9a}.social-list .social-item.facebook a:hover{background-color:#1b4a82}.social-list .social-item.twitter a{background-color:#53c7ff}.social-list .social-item.twitter a:hover{background-color:#369ed0}.social-list .social-item.google_plus a{background-color:#d93b2b}.social-list .social-item.google_plus a:hover{background-color:#b7291a}.social-list .social-item.instagram a{background-color:#3e5a70}.social-list .social-item.instagram a:hover{background-color:#426283}

        .social-box {
            max-width: 255px;
            margin: 16px auto 0px auto;
        }
        amp-social-share[type=whatsapp] {
            background-color:  #25d366;
            text-align: center;
            color: #0e5829;
            font-size: 18px;
            padding: 10px;
            width: 60px;
            height: 44px;
            position: relative;
            background-size: 60%;
            display:inline-block ;
        }
        .clearfix:after {
            visibility: hidden;
            display: block;
            font-size: 0;
            content: " ";
            clear: both;
            height: 0;
        }
        .clearfix { display: inline-block; }
        /* start commented backslash hack \*/
        * html .clearfix { height: 1%; }
        .clearfix { display: block; }
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            text-decoration: none;
        }

        .material-shadow--1dp {
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.1); }


        .headline {
            color: #1e1e1e;
            font-size: 24px;
            font-weight: bold;
            line-height: 1.125;
            margin-bottom: 0;
        }
        .title-bottom {
            font-size: 12px;
            margin-top: 8px;
        }
        .timestamp-container {
            display: inline-block;
        }
        .author-container {
            display: inline-block;
        }
        .timestamp {
            display: inline-block;
            color: #aaa;
        }
        .author-name {
            display: inline-block;
            color: #999;

        }

        .content-description {
            margin-top: 16px;
            font-weight: bold;
            font-size: 17px;
            line-height: 1.4;
        }
        .content-body {
            margin-top: 16px;
            line-height: 1.6;
            font-size: 15px;
        }
        .content-body a {
            color: #6F2722;
            text-decoration: none;
            font-weight: bold;
        }
        .news-img {
            margin-top: 8px;
            margin-left: -16px;
            margin-right: -16px;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
            padding: 5px 0
        }
        h3 {
            -webkit-margin-before: 1em;
            -webkit-margin-after: 1em;
            -webkit-margin-start: 0px;
            -webkit-margin-end: 0px;
            font-weight: 700;
            padding: 5px 0;
            margin-bottom: 10px;
        }

        .content-body__detail ol, .content-body__detail ul {
            padding: 0 20px;
        }
        .content-card {
            float:left;
            width: 48%;
            margin: 16px 0;
            background: #fff;
        }
        .content-card:nth-child(even){
            float:right;
            margin-left:20px;
        }

        @media only screen and (max-width: 550px) {
            .content-card,.content-card:nth-child(even) {
                float:none;
                width: 100%;
                margin: 10px 0;
            }

        }
        .content-card__image {
            float:left;
            width: 100%;
        }

        .content-card__detail {
            float: left;
            padding: 16px;
            width: 100%;
            min-height:110px
        }

        .content-card__category {
            font-size: 13px;
        }
        .content-card__title {
            color: #333;
            font-weight: bold;
            margin-top: 5px;
            font-size: 15px;
        }
    </style>
    <script type='text/javascript' custom-element=amp-carousel async src='https://cdn.ampproject.org/v0/amp-carousel-0.1.js'></script>
    <script type='text/javascript' async src='https://cdn.ampproject.org/v0.js'></script>
    <script type='text/javascript' custom-element=amp-accordion async src='https://cdn.ampproject.org/v0/amp-accordion-0.1.js'></script>
    <script type='text/javascript' custom-element=amp-analytics async src='https://cdn.ampproject.org/v0/amp-analytics-0.1.js'></script>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
    <noscript>
        <style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style>
    </noscript>

    <script type="application/ld+json">{"@context":"http:\/\/schema.org\/","@type":"organization","@id":"#organization","logo":{"@type":"ImageObject","url":"{{ url('/assets/img/logo.png') }}"},"url":"{{ url() }}","name":"{{ getenvcong('sitename') }}","description":"{{ getenvcong('sitemetadesc') }}"}</script>
    <script type="application/ld+json">{"@context":"http:\/\/schema.org\/","@type":"WebSite","name":"{{ getenvcong('sitename') }}","alternateName":"{{ getenvcong('sitetitle') }}","url":"{{ url() }}"}</script>

    @yield("header")
</head>
<body class="body">

<div class="amp-wrapper">
    <header itemscope itemtype="https://schema.org/WPHeader" class="site-header">
        <a href="{{ url('amp') }}" class="branding image-logo ">
            <amp-img src="{{ url('/assets/img/logo.png') }}" width="110" height="55" alt="{{  getenvcong('sitename') }}" class=" amp-image-tag" sizes="(min-width: 110px) 110px, 100vw"></amp-img>
        </a>
    </header>
    <div class="wrap">

        @yield("content")


    </div>
    <footer class="amp-footer ">
        <div class="amp-copyright">
            <div class="social-list-wrapper">
                <ul class="social-list clearfix">

                    @if(getenvcong('facebookpage'))
                        <li class="social-item facebook">
                            <a href="{!!  getenvcong('facebookpage') !!}" title="{{ trans('index.likeonface') }}" target="_blank">
                                <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                    @endif
                    @if(getenvcong('twitterpage'))
                            <li class="social-item twitter">
                                <a href="{!!  getenvcong('twitterpage') !!}" title="{{ trans('index.followontwitter') }}" target="_blank">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </li>
                    @endif
                    @if(getenvcong('googlepage'))
                            <li class="social-item google_plus">
                                <a href="{!!  getenvcong('googlepage') !!}" title="{{ trans('index.followongoogle') }}" target="_blank">
                                    <i class="fa fa-google-plus"></i>
                                </a>
                            </li>
                    @endif
                    @if(getenvcong('instagrampage'))
                            <li class="social-item instagram">
                                <a href="{!!  getenvcong('instagrampage') !!}" title="{{ trans('index.followoninstagram') }}" target="_blank">
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </li>
                    @endif
                </ul>
            </div>

            {{ trans("updates.copyright") }}

            <div class="amp-main-link">
                <a href="{{ url() }}"><i class="fa fa-external-link"></i> Desktop Version </a>
            </div>
            @if(getenvcong('ampgoogleanalytics'))
            <amp-analytics type="googleanalytics"><script type="application/json">{"vars":{"account":"{{ getenvcong('ampgoogleanalytics') }}"},"triggers":{"trackPageview":{"on":"visible","request":"pageview"}}}</script></amp-analytics>
            @endif
    </footer>
</div>
</body>
</html>