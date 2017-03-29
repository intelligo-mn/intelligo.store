<?php
    
    require_once '../app/ProductController.php';
    
    $model = "";
    $name = "";
    $description = "";
    $price = "";
    $currency = "";
    $image = "";

    $target_path = "upload/images/";

    $response = array();

    $file_upload_url = 'http://dgl.toroo.info/'.$target_path;



    if(isset($_GET['model'])){
        $model = $_GET['model'];
    }
    
    if(isset($_GET['name'])){
        
        $name = $_GET['name'];
        
    }
    
    if(isset($_GET['description'])){
        
        $description = $_GET['description'];
        
    }
    if(isset($_GET['price'])){
        
        $price = $_GET['price'];
        $doublePrice = (double)$price;
        
    }
    if(isset($_GET['currency'])){
        
        $currency = $_GET['currency'];
        
    }

    if(isset($_GET['image'])){
        $imgname = $_GET['image'];
        $imsrc = str_replace(' ','+',$_GET['base64']);
        $imsrc = base64_decode($imsrc);
        $fp = fopen($imgname, 'w');
        fwrite($fp, $imsrc);
        if(fclose($fp)){
             echo "Image uploaded";
        } else {
            echo "Error uploading image";
        }
    }

    $productObject = new ProductController();
    // Бараа нэмэх
    
    if(!empty($model) && !empty($name) && !empty($description) && !empty($price) && !empty($currency)){
        
        $json_product = $productObject->createProduct($name, $model, $description, $doublePrice, $currency);
        
        echo json_encode($json_product);
        
    }
?>