<?php
    
    require_once '../app/ProductController.php';
    
    $model = "";
    $name = "";
    $description = "";
    $price = "";
    $currency = "";

    if(isset($_POST['model'])){
        $model = $_POST['model'];
    }
    
    if(isset($_POST['name'])){
        
        $name = $_POST['name'];
        
    }
    
    if(isset($_POST['description'])){
        
        $description = $_POST['description'];
        
    }
    if(isset($_POST['price'])){
        
        $price = $_POST['price'];
        
    }
    if(isset($_POST['currency'])){
        
        $currency = $_POST['currency'];
        
    }
    
    
    
    $productObject = new ProductController();
    
    // Бараа нэмэх
    
    if(!empty($model) && !empty($name) && !empty($description) && !empty($price) && !empty($currency)){
        
        $json_product = $productObject->createProduct($name, $model, $description, $price, $currency);
        
        echo json_encode($json_product);
        
    }
    
    ?>