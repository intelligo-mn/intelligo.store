<?php
header('Content-Type: text/plain; charset=utf-8');
    require_once 'app/ProductController.php';
    require_once 'config/security.php';
    
    if(!isset($_POST['accesskey'])) 
        die('accesskey required!');
    if(!(new DGLSecure())->generateAccessKey($_POST['accesskey']))
        die('accesskey is wrong!');
    if(!isset($_POST["state"]))
        die('request state required.');

    $state = $_POST["state"];
    $model = "";
    $name = "";
    $description = "";
    $price = "";
    $currency = "";
    $user_id = 1;
    $brand_id = "";

    if(isset($_POST['model']) && isset($_POST['name']) && isset($_POST['description']) && isset($_POST['price']) && isset($_POST['currency']) && isset($_POST["ui"]) && isset($_POST["brand_id"])){
        $model = $_POST['model'];
        $name = $_POST['name'];
        $description = $_POST['description'];
        $doublePrice = (double)$_POST['price'];
        $currency = $_POST['currency'];
        $user_id = $_POST["ui"];
        $brand_id = $_POST["brand_id"];
    }
    $productObject = new ProductController();
    //state == c -> Бараа нэмэх 
    if($state == "c" && !empty($model) && !empty($name) && !empty($description) && !empty($price) && !empty($currency) && !empty($brand_id))
        echo json_encode($productObject->create($name, $model, $description, $doublePrice, $currency, $user_id, $brand_id));
    if($state == "u" && !empty($model) && !empty($name) && !empty($description) && !empty($price) && !empty($currency) && !empty($brand_id)) //state == u -> update
        //TODO энд upate хийх үйлдэлүүд бичнэ
        echo json_encode(["result"=>"invalid request!!!"]);
    if($state == "r"){//state == r -> read
        if(isset($_POST['brand_id']))
            echo json_encode($productObject->getByBrandId($_POST['brand_id']));
        if(isset($_POST['product_id'])) 
            echo json_encode($productObject->getByProductId($_POST['product_id']));
        if(isset($_POST['user_id'])) 
            echo json_encode($productObject->getByUserId($_POST['user_id']));
        else
            echo json_encode($productObject->getAll());
    }else {
        echo json_encode(["result" => "invalid request!!!"]);
    }
?>