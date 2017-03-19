<?php
    
    require_once '../app/ProductController.php';
    
    $model = "";
    $name = "";
    $description = "";
    $price = "";
    $currency = "";

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
    
    $productObject = new ProductController();
    // Бараа нэмэх
    
    if(!empty($model) && !empty($name) && !empty($description) && !empty($price) && !empty($currency)){
        
        $json_product = $productObject->createProduct($name, $model, $description, $doublePrice, $currency);
        
        echo json_encode($json_product);
        
    }
    ?>