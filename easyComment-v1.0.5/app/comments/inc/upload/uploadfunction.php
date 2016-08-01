<?php
function imageCreateFromAny($filepath) { 
    $type = exif_imagetype($filepath); // [] if you don't have exif you could use getImageSize() 
    $allowedTypes = array( 
        1,  // [] gif 
        2,  // [] jpg 
        3,  // [] png 
        6   // [] bmp 
    ); 
    if (!in_array($type, $allowedTypes)) { 
        return false; 
    } 
    switch ($type) { 
        case 1 : 
            $im = imageCreateFromGif($filepath); 
        break; 
        case 2 : 
            $im = imageCreateFromJpeg($filepath); 
        break; 
        case 3 : 
            $im = imageCreateFromPng($filepath); 
        break; 
        case 6 : 
            $im = imageCreateFromBmp($filepath); 
        break; 
    }    
    return $im;  
} 

function image_resize($yuklenecekdizin, $yuklenecekdizinyeni, $genislik, $yukseklik){

	$type = exif_imagetype($yuklenecekdizin); 

	 switch ($type) { 
        case 1 : 
            $image = imageCreateFromGif($yuklenecekdizin); 
        break; 
        case 2 : 
            $image = imageCreateFromJpeg($yuklenecekdizin); 
        break; 
        case 3 : 
            $image = imageCreateFromPng($yuklenecekdizin); 
        break; 
        case 6 : 
            $image = imageCreateFromBmp($yuklenecekdizin); 
        break; 
    }   

	if($yukseklik == "auto") {
		$ratio = imagesx($image)/imagesy($image); 
		if (imagesx($image)>$genislik){
		if( $ratio > 1) {
					$genislik = $genislik;
					$yukseklik = $genislik/$ratio;
				}else {
					$genislik = $genislik*$ratio;
					$yukseklik = $genislik;
		}
		}else{
			$genislik = imagesx($image);
			$yukseklik = imagesy($image);
		}
	}
	
	$thumb_width = $genislik;
	$thumb_height = $yukseklik;


	$width = imagesx($image);
	$height = imagesy($image);

	$original_aspect = $width / $height;
	$thumb_aspect = $thumb_width / $thumb_height;

	
	if ( $original_aspect >= $thumb_aspect )
	{
	   // If image is wider than thumbnail (in aspect ratio sense)
	   $new_height = $thumb_height;
	   $new_width = $width / ($height / $thumb_height);
	}
	else
	{
	   // If the thumbnail is wider than the image
	   $new_width = $thumb_width;
	   $new_height = $height / ($width / $thumb_width);
	}

	$thumb = imagecreatetruecolor( $thumb_width, $thumb_height );

	// Resize and crop
	imagecopyresampled($thumb,
					   $image,
					   0 - ($new_width - $thumb_width) / 2, // Center the image horizontally
					   0 - ($new_height - $thumb_height) / 2, // Center the image vertically
					   0, 0,
					   $new_width, $new_height,
					   $width, $height);
					   
	@ImageJpeg($thumb, $yuklenecekdizinyeni);
			
 
  return true;
}

function resimgo($name, $type, $error, $tmp_name, $altkat, $haberisim, $haberalreadyisim, $width, $height){
		$dsdler = explode("/app", $_SERVER['REQUEST_URI']);
			if(isset($dsdler[0])){
				$urlll=$dsdler[0];
			}else{
			die();
		}				
										

$path = $_SERVER['DOCUMENT_ROOT'];
$Dizin = $path.$urlll."/app/upload/".$altkat;


if($haberalreadyisim<>""){

$randomsayi = $haberalreadyisim;
}else{

$randomsayim = substr(uniqid(md5(rand())), 0,14);
$randomsayi = $haberisim."-".$randomsayim;


}

$uzanti1 = $randomsayi . ".jpg";

$yuklenecekdizin = $Dizin ."/". $uzanti1;


$allowedExts = array("jpg", "jpeg", "gif", "png");
$extension = pathinfo($name, PATHINFO_EXTENSION);

if ((($type == "image/pjpeg")
|| ($type == "image/gif") 
|| ($type == "image/png")
|| ($type == "image/jpeg"))

//&& ($_FILES["videoInput"]["size"] < 524288000)
//&& in_array($extension, $allowedExts)
)

  {
	if ($error > 0)
    {
    return "Invalid file";
    }
	else
    {															


		if (file_exists($yuklenecekdizin)  )
		{
		return "Invalid file";
		}
		else
		{
		if ($altkat == "logo"){
			$yuklenecekdizin=$path."app/assets/logo.png";
		
		}	
			
		move_uploaded_file($tmp_name,$yuklenecekdizin);
		
			if ($altkat == "member/avatar"){

			image_resize($yuklenecekdizin, $Dizin ."/". $randomsayi."-s.jpg", "50", "50");
			image_resize($yuklenecekdizin, $Dizin ."/". $randomsayi."-m.jpg", "90", "90");
			
			}
			
			
		}
	
			if ($altkat != "logo"){
		
				unlink($yuklenecekdizin);
	
			}
		
		
		return $randomsayi;
	}

		

  }
else
  {
  return "Invalid file";
  }

}
?>