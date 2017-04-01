<?php
    
    require_once '../app/ProductController.php';
    

    if(isset($_GET['accesskey'])) {
    $access_key_received = $_GET['accesskey'];
    
        if(isset($_GET['keyword'])){
            $keyword = $_GET['keyword'];
        }else{
            $keyword = "";
        }
        
        if($access_key_received == $access_key){
            if($keyword == ""){

                $sql_query = "SELECT * 
                    FROM product 
                    ORDER BY id DESC";
            }else{
                $sql_query = "SELECT *
                    FROM product 
                    WHERE name LIKE '%".$keyword."%'
                    ORDER BY id DESC";
            }
            
            $result = $connect->query($sql_query) or die("Error : ".mysql_error());
            
            $products = array();
            while($product = $result->fetch_assoc()) {
                $products[] = array('product_all'=>$product);
            }
            
            $output = json_encode(array('data' => $products));
        }else{
            die('accesskey is incorrect.');
        }
    } else {
        die('accesskey and category id are required.');
    }
 
    //Output the output.
    echo $output;
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

    if(isset($_GET['accesskey']) && isset($_GET['category_id'])) {
        $access_key_received = $_GET['accesskey'];
        $category_ID = $_GET['category_id'];
        
        if(isset($_GET['keyword'])){
            $keyword = $_GET['keyword'];
        }else{
            $keyword = "";
        }
        
        if($access_key_received == $access_key){
            if($keyword == ""){
                // тухайн ангилалд хамаатай бараанууд хайх
                $sql_query = "SELECT product_id, product_name, price, product_image 
                    FROM product 
                    WHERE category_id = ".$category_ID." 
                    ORDER BY product_id DESC";  
            }else{
                $sql_query = "SELECT product_id, product_name, price, product_image 
                    FROM product 
                    WHERE product_name LIKE '%".$keyword."%' AND category_id = ".$category_ID." 
                    ORDER BY product_id DESC";
            }
            
            $result = $connect->query($sql_query) or die("Error : ".mysql_error());
            
            $products = array();
         
            while($product = $result->fetch_assoc()) {
                $products[] = array('product'=>$product);
            }
            
            $output = json_encode(array('data' => $products));
        }else{

            die('accesskey is incorrect.');
        }
    } else {
        die('accesskey and category id are required.');
    }
 
    //Output the output.
    echo $output;

    // $target_dir = "../upload/images/products/".date("Ymd");
    // $fileUploaded = false;
    
    // if (isset($_POST['isPush']) && $_POST['isPush'] == 1 && ) {
        
    // if(!file_exists($target_dir))
    //     mkdir($target_dir, 0777, true);
        
    
    //     $target_dir = $target_dir . "/" . basename($_FILES["file"]["name"]);
    
    //     if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_dir)){
    //         echo json_encode([
    //         "Message" => "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.",
    //         "Status" => "OK",
    //         "userId" => $_REQUEST["userId"]
    //         ]);
    //         $fileUploaded  = true;
    //     }
    //     else 
    //         echo json_encode([
    //         "Message" => "Sorry, there was an error uploading your file.",
    //         "Status" => "Error",
    //         "userId" => $_REQUEST["userId"]
    //         ]);
        
    // }

?>