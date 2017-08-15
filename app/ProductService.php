<?php
header('Content-Type: application/json; charset=utf-8');
    require_once 'Controllers/ProductController.php';
    require_once 'config/security.php';

    // if(!(new AppBaseSecure())->generateAccessKey($_POST['accesskey']))
    //     die('accesskey is wrong!');

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
    if($state == "c" ){
        $resultArray = $productObject->create($name, $model, $description, $doublePrice, $currency, $user_id, $brand_id);
        savePhoto($resultArray['id'], $user_id);//хадгалсан бүтээгдэхүүний id өгөөд зургийг хадгалах

        echo json_encode($resultArray);

    }
    else if($state == "u") //state == u -> update
        //TODO энд upate хийх үйлдэлүүд бичнэ
        echo json_encode(["result"=>"invalid request!!!"]);
    else if($state == "r"){//state == r -> read
        // if(isset($_POST['brand_id']))
        //     echo json_encode($productObject->getByBrandId($_POST['brand_id']));
        // if(isset($_POST['product_id'])) 
        //     echo json_encode($productObject->getByProductId($_POST['product_id']));
        // if(isset($_POST['user_id'])) 
        //     echo json_encode($productObject->getByUserId($_POST['user_id']));
        // else
            echo json_encode($productObject->getAll());
    }else {
        echo json_encode(["result" => "invalid request!!!"]);
    }
function savePhoto($productID, $userId){
    $folder = date("Y-m");
    $target_dir = "../uploads/product_photos/".$folder."/";
    if(!file_exists($target_dir))
        mkdir($target_dir, 0777, true);
        
    $fileName = microtime().basename($_FILES["file"]["name"]);
    $fileName = preg_replace("/.(\d)/", "$1", $fileName);
    $fileName = str_replace(" ", "_", $fileName);
    $target_dir = $target_dir.$fileName;
    $result = move_uploaded_file($_FILES["file"]["tmp_name"], $target_dir) ?  $target_dir : "";  

    $sql = "INSERT INTO `product_photo`(`product_id`, `caption`, `photo_file`, `thumb_file`, `is_default`, `sort_order`, `folder`, `created_user_id`, `created_at`, `updated_at`) VALUES ($productID, '','".$fileName."', NULL, 1, 1,'".$folder."',".$userId.",'".date('Y-m-d H:i:s')."','".date('Y-m-d H:i:s')."')";

    $db = new DbConnect();
    $result = mysqli_query($db->getDb(), $sql);


    if ($result === TRUE){
        $photoID = $db->getDb()->insert_id;
        $productUpdateSQL = "UPDATE `product` SET default_photo_id=".$photoID." WHERE id=".$productID;
        mysqli_query($db->getDb(), $productUpdateSQL);
    }
    else echo ["photo save error!"]["  query: ".$sql];
}

?>