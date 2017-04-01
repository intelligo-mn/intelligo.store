<?php
    header('Content-Type: text/plain; charset=utf-8');
 
    require_once '../app/BrandController.php';
    
    $name = "";
    $description = "";
    $image = "";
    
    if(isset($_GET['name'])){
        $name = $_GET['name'];
    }
    
    if(isset($_GET['description'])){
        $description = $_GET['description'];
    }

    if(isset($_GET['image'])){
        $image = $_GET['image'];
    }
    
    $brandObject = new BrandController();

    $brands = $brandObject->getBrands();
    
    echo json_encode($brands);
    
    if(!empty($name) && !empty($description) && !empty($image)){
        
        $json_brand = $brandObject->createBrand($name, $description, $image);
        
        echo json_encode($json_brand);
    }
?>
