<?php
use App\Categories;
use App\Posts;
use App\User;
use Terbium\DbConfig\Facade as DbConfig;

if (! function_exists('makepreview')) {

    function makepreview($img, $type = null, $folder)
    {

        if($type !== null){
            $type="-$type.jpg";
        }

        if($img == null or $img == ''){
            $img="default_holder";
        }elseif(substr($img,0,6)=="https:" || substr($img,0,5)=="http:"){

            $pos=strpos($img, "amazon");
            if ($pos !== false)
            {
                return url($img.$type);
            }

            return $img;
        }

        return "/upload/media/".$folder."/".$img.$type;
    }
}

if (! function_exists('getcong')) {

    function getcong($key)
    {
        try {
            $get =  DbConfig::get($key);
        } catch (\Exception $e) {

            return "";
        }

        return $get;
    }
}

if (! function_exists('curlit')) {


    function curlit($site)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $site);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $site = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        if($httpCode == 404) {
            return false;
        }
        return $site;
    }

}


if (! function_exists('reactionvoteuserget')) {

    function reactionvoteuserget($post, $type)
    {

        if(!\Auth::check() and getcong('sitevoting')=="1"){
           return ' href='.url('/login').' rel="get:Loginform"';

        }else{

                if($post->reactions()->currentUserHasVoteOnPost($post->id)->count() <= 2){
                    return 'class="postable" data-method="Post" data-target="reactions" ';
                }else{
                    return 'class=off  href="javascript:" off:';
                }
        }


    }

}


if (! function_exists('makeposturl')) {


    function makeposturl($post)
    {
        $type =  getcong('siteposturl');

        if($type=="" or $type==null or $type==1 or $type==2){

            $postuffl=$post->slug;

            if($type==2){
               $postuffl= $post->id;
            }

            $category = Categories::where("id", $post->category_id)->first();
            if($category){
                $cat = Categories::where("id", $category->type)->first();
                return '/'.$cat->posturl_slug.'/'.$postuffl;
            }else{
                return '/post/'.$postuffl;
            }

        }elseif($type==3){
           return '/'.$post->user->username_slug.'/'.$post->slug;

        }elseif($type==4){
            return '/'.$post->user->username_slug.'/'.$post->id;
        }


    }

}



if (! function_exists('getposturl')) {


    function getposturl($secone, $sectwo)
    {
        $type =  getcong('siteposturl');

        if($type==1){
           return Posts::where('slug', $sectwo)->first();

        }elseif($type==2){
           return Posts::where('id', $sectwo)->first();

        }elseif($type==3){
            $usera=User::findByUsernameOrFail($secone);
            return Posts::where('user_id', $usera->id)->where('slug', $sectwo)->first();

        }elseif($type==4){
            $usera=User::findByUsernameOrFail($secone);
            return Posts::where('user_id', $usera->id)->where('id', $sectwo)->first();
        }


    }

}

if (! function_exists('rop')) {
    function rop($secone)
    {
        if ($secone==$_SERVER['HTTP_HOST']){;
           return true;
        }else{
           return false;
        }
    }
}

if (! function_exists('awsurl')) {
    function awsurl()
    {
        $region="";
        if(env("S3_REGION") != "us-east-1"){
            $region=env("S3_REGION").'.';
        }

        return 'https://s3-'.$region.'amazonaws.com/'.env("S3_BUCKET").'/';;

    }
}
