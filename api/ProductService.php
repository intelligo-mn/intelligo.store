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

            $sql_query = "SELECT * 
                FROM product 
                ORDER BY id DESC";
        
            
            $result = $connect->query($sql_query) or die("Error : ".mysql_error());
            
            $products = array();
            while($product = $result->fetch_assoc()) {
                $products[] = $product;
            }
            
            echo json_encode($products);

            // Сонгосон брэндийн мэдээлэл харуулах

            if(isset($_GET['brand_id'])) {
                $brand_ID = $_GET['brand_id'];
                
                
                $sql_query = "SELECT * 
                    FROM product 
                    WHERE brand_id = ".$brand_ID." 
                    ORDER BY id DESC";  
            
                $result = $connect->query($sql_query) or die("Error : ".mysql_error());
                
                $products = array();
             
                while($product = $result->fetch_assoc()) {
                    $products[] = $product;
                }
            
                echo json_encode($products);

            } else {
                die('brand id are required.');
            }

            //Сонгосон бүтээгдэхүүний дэлгэрэнгүй харуулах
            
            if(isset($_GET['product_id'])) {
                $product_ID = $_GET['product_id'];
                
                
                $sql_query = "SELECT * 
                    FROM product 
                    WHERE id = ".$product_ID." 
                    ORDER BY id DESC";  
            
                $result = $connect->query($sql_query) or die("Error : ".mysql_error());
                
                $products = array();
             
                while($product = $result->fetch_assoc()) {
                    $products[] = $product;
                }
            
                echo json_encode($products);

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