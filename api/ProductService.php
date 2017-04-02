<?php

    require_once '../app/ProductController.php';
    
    if(isset($_GET['accesskey'])) {
        $access_key_received = $_GET['accesskey'];
       
        if($access_key_received == $access_key){

            $model = "";
            $name = "";
            $description = "";
            $price = "";
            $currency = "";
            $image = "";


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
 
?>