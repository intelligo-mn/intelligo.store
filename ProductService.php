<?php
header('Content-Type: text/plain; charset=utf-8');
    require_once 'app/ProductController.php';
    require_once 'config/security.php';
    
    if(!isset($_GET['accesskey'])) 
        die('accesskey required!');
    if(!(new DGLSecure())->generateAccessKey($_GET['accesskey']))
        die('accesskey is wrong!');
    if(!isset($_GET["state"]))
        die('request state required.');

    $state = $_GET["state"];
    $model = "";
    $name = "";
    $description = "";
    $price = "";
    $currency = "";
    $user_id = 1;
    $brand_id = "";

    if(isset($_GET['model']) && isset($_GET['name']) && isset($_GET['description']) && isset($_GET['price']) && isset($_GET['currency']) && isset($_GET["ui"]) && isset($_GET["brand_id"])){
        $model = $_GET['model'];
        $name = $_GET['name'];
        $description = $_GET['description'];
        $doublePrice = (double)$_GET['price'];
        $currency = $_GET['currency'];
        $user_id = $_GET["ui"];
        $brand_id = $_GET["brand_id"];
    }
    $productObject = new ProductController();
    //state == c -> Бараа нэмэх 
    if($state == "c" && !empty($model) && !empty($name) && !empty($description) && !empty($price) && !empty($currency) && !empty($brand_id))
        echo json_encode($productObject->create($name, $model, $description, $doublePrice, $currency, $user_id, $brand_id));
    if($state == "u" && !empty($model) && !empty($name) && !empty($description) && !empty($price) && !empty($currency) && !empty($brand_id)) //state == u -> update
        //TODO энд upate хийх үйлдэлүүд бичнэ
        echo json_encode(["result"=>"invalid request!!!"]);
    if($state == "r"){//state == r -> read
        if(isset($_GET['brand_id']))
            echo json_encode($productObject->getByBrandId($_GET['brand_id']));
        else if (isset($_GET['product_id'])) 
            echo json_encode($productObject->getByProductId($_GET['product_id']));
        else if (isset($_GET['user_id'])) 
            echo json_encode($productObject->getByUserId($_GET['user_id']));
        else
            echo json_encode($productObject->getAll());
    }else {
        echo json_encode(["result" => "invalid request!!!"]);
    }
?>