<?php echo '<'.'?xml version="1.0" encoding="UTF-8"?>'; ?>

<rss version="2.0"
     xmlns:blogChannel="http://backend.userland.com/blogChannelModule"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom">

    <channel>
        <title><![CDATA[  {!! getenvcong('sitetitle') !!}   ]]> Rss</title>
        <link>{{ url('/') }}</link>
        <description><![CDATA[  {!! getenvcong('sitedesc') !!}   ]]></description>
        <language>{{ \Config::get('app.locale') }}</language>
        <lastBuildDate>{{ $posts->slice(0,1)->first()->published_at->toRfc2822String() }}</lastBuildDate>
        <atom:link href="{{ url(Request::segment(1)) }}" rel="self" />

        <image>
            <title><![CDATA[  {!! getenvcong('sitetitle') !!}   ]]></title>
            <url>{{ url('/assets/img/logo.png') }}</url>
            <link>{{ url('/') }}</link>
        </image>

        @foreach($posts as $post)
            <item>
                <title><![CDATA[  {!!  $post->title !!}   ]]></title>
                <link>{{ url(makeposturl($post)) }}</link>
                <description><![CDATA[ {!! $post->body!!}  ]]></description>
                <media:thumbnail url='{{ url(makepreview($post->thumb, 'b', 'posts')) }}'  data-url='{{ url(makepreview($post->thumb, 'b', 'posts')) }}'  height='650' width='370' />
                <guid isPermaLink="false">{{ url(makeposturl($post)) }}</guid>
                <pubDate>{{ $post->published_at->toRfc2822String() }}</pubDate>
            </item>
        @endforeach
    </channel>
</rss>