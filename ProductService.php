<?php
header('Content-Type: text/plain; charset=utf-8');
<<<<<<< HEAD

error_reporting(E_ALL);
ini_set('display_errors', '1');

require_once 'app/ProductController.php';

$access_key = 12345;

if(isset($_GET['accesskey'])) {
    $access_key_received = $_GET['accesskey'];
   
    if($access_key_received == $access_key){

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

        $products = $productObject->getProducts();

        echo json_encode($products);

        // Сонгосон брэндийн мэдээлэл харуулах

        if(isset($_GET['brand_id'])) {
            $brand_ID = $_GET['brand_id'];
            
            $brandProduct = $productObject->getProductsBrand($brand_ID);
        
            echo json_encode($brandProduct);

        } else {
            die('brand id are required.');
        }

        //Сонгосон бүтээгдэхүүний дэлгэрэнгүй харуулах

        if(isset($_GET['product_id'])) {
            $product_ID = $_GET['product_id'];
            
            $product = $productObject->getProductDetail($product_ID);

            echo json_encode($product);

        } else {
            die('brand id are required.');
        }
    }else{
        die('accesskey is incorrect.');
    }
} else {
    die('accesskey required.');
}

=======
    require_once 'app/ProductController.php';
    require_once 'config/security.php';
    $access_key = (new DGLSecure())->generateAccessKey();
    if(!isset($_GET['accesskey']) || $_GET['accesskey'] != $access_key) 
        die('accesskey required.');
    if(!isset($_GET["state"]))
        die('request state required.');
    $state = $_GET["state"];
    $model = "";
    $name = "";
    $description = "";
    $price = "";
    $currency = "";
    $user_id = 1;
    if(isset($_GET['model']) && isset($_GET['name']) && isset($_GET['description']) && isset($_GET['price']) && isset($_GET['currency']) && isset($_GET["ui"])){
        $model = $_GET['model'];
        $name = $_GET['name'];
        $description = $_GET['description'];
        $doublePrice = (double)$_GET['price'];
        $currency = $_GET['currency'];
        $user_id = $_GET["ui"];
    }
    $productObject = new ProductController();
    echo json_encode($productObject->getAll());
    //state == c -> Бараа нэмэх 
    if($state == "c" && !empty($model) && !empty($name) && !empty($description) && !empty($price) && !empty($currency))
        echo json_encode($productObject->create($name, $model, $description, $doublePrice, $currency, $user_id));
    if($state == "u" && !empty($model) && !empty($name) && !empty($description) && !empty($price) && !empty($currency)) //state == u -> update
        //TODO энд upate хийх үйлдэлүүд бичнэ
        echo json_encode(["result"=>"invalid request!!!"]);
    if($state == "r"){//state == r -> read
        if(isset($_GET['brand_id']))
            echo json_encode($productObject->getByBrandId($_GET['brand_id']));
        
        if(isset($_GET['product_id'])) 
            echo json_encode($productObject->getByProductId($_GET['product_id']));
        else
            echo json_encode($productObject->getAll());
    }else {
        echo json_encode(["result" => "invalid request!!!"]);
    }
>>>>>>> 903cc9fd86d5d951363cb78ece0a8c9c0d588aab
?>