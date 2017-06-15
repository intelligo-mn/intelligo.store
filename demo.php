<?php
// Asia/Ulaanbaatar
date_default_timezone_set("Asia/Ulaanbaatar");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: text/plain; charset=utf-8'); 
	$folder = date("Y-m");
	echo "folder : $folder";
        $target_dir = "uploads/user_avatars/".$folder."/";
        if(!file_exists($target_dir))
            mkdir($target_dir, 0777, true);

        echo "dir: $target_dir";
?>