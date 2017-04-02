<?php
header('Content-Type: text/plain; charset=utf-8');
error_reporting(E_ALL);
ini_set('display_errors', '1');

    require_once 'app/ProductController.php';
    $access_key = 12345;

    if(!isset($_GET['accesskey']) || $_GET['accesskey'] != $access_key) 
        die('accesskey required.')
    if(!isset($_GET["state"]))
        die('request state required.')

    $model = "";
    $name = "";
    $description = "";
    $price = "";
    $currency = "";
    
    if(isset($_GET['model']) && isset($_GET['name']) && isset($_GET['description']) && isset($_GET['price']) && isset($_GET['currency'])){
        $model = $_GET['model'];
        $name = $_GET['name'];
        $description = $_GET['description'];
        $doublePrice = (double)$_GET['price'];
        $currency = $_GET['currency'];
    }

    $productObject = new ProductController();
    
    //state == c -> Бараа нэмэх 
    if($_GET["state"] == "c" && !empty($model) && !empty($name) && !empty($description) && !empty($price) && !empty($currency)){
        
        $json_product = $productObject->create($name, $model, $description, $doublePrice, $currency);
        
        echo json_encode($json_product);
        
    }else if($_GET["state"] == "u" && !empty($model) && !empty($name) && !empty($description) && !empty($price) && !empty($currency)){ //state == u -> update
        //TODO энд upate хийх үйлдэлүүд бичнэ
    }else if($_GET["state"] == "r"){//state == r -> read
        // Сонгосон брэндийн мэдээлэл харуулах
        if(isset($_GET['brand_id']))
            echo json_encode($productObject->getByBrandId($_GET['brand_id']));
        if(isset($_GET['product_id'])) {
            echo json_encode($productObject->getByProductId($_GET['product_id']));
        else
            echo json_encode($productObject->getAll());
    }
?>