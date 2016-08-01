<?php
use Terbium\DbConfig\Facade as DbConfig;

if (! function_exists('makepreview')) {

    function makepreview($img, $type = null, $folder)
    {

        if($img == null or $img == ''){
            $img="default_holder";
        }elseif(substr($img,0,6)=="https:" || substr($img,0,5)=="http:"){
            return $img;
        }

        if($type !== null){
            $type="-$type.jpg";
        }

        return url("/upload/media/".$folder."/".$img.$type);
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

