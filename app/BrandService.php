<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

date_default_timezone_set("UTC");
header('Content-Type: application/json; charset=utf-8');

require_once 'Controllers/BrandController.php';

include_once '../config/security.php';

// if(!(new AppBaseSecure())->generateAccessKey($_POST['accesskey']))
//         die('accesskey is wrong!');

$state = $_POST["state"];
$name = "";
$description = "";
$user_id = "";
$category_id = "";
$language = "";
$mobile = "";
$email = "";
$address = "";

if (isset($_POST['name']) && isset($_POST['description']) && isset($_POST['ui']) && isset($_POST['categoryId'])&& isset($_POST['language']) && isset($_POST['mobile'])&& isset($_POST['email'])&& isset($_POST['address'])){
    $name = $_POST['name'];
    $description = $_POST['description'];
    $user_id = $_POST["ui"];
    $category_id = $_POST["categoryId"];
    $language = $_POST["language"];
    $mobile = $_POST["mobile"];
    $email = $_POST["email"];
    $address = $_POST["address"];
}

$brandObject = new BrandController();

if($state == "c"){

    if($brandObject->isExist($name)){
        $json = array();
        $json['success'] = 0;
        $json['message'] = "brand already.";       
        echo json_encode($json); 
    } else {
        echo json_encode($brandObject->create($name, $description, $user_id, $category_id, $language, $mobile, $email, $address, savePhoto()));
    }
}
else if($state == "u" && !empty($name) && !empty($description) && !empty($user_id)){
    echo json_encode($brandObject->update($name, $description, $user_id));
}
else if ($state == "r"){
    echo json_encode($brandObject->getAll());
}else {
 echo json_encode(["result" => "invalid request!!!"]);
}

function savePhoto(){
    $folder = date("Y-m");
    $target_dir = "../uploads/product_brand_icons/".$folder."/";
    if(!file_exists($target_dir))
        mkdir($target_dir, 0777, true);
        
        $fileName = microtime().basename($_FILES["file"]["name"]);
        $fileName = preg_replace("/.(\d)/", "$1", $fileName);
        $fileName = str_replace(" ", "_", $fileName);

        $target_dir = $target_dir.$fileName;
        $result = move_uploaded_file($_FILES["file"]["tmp_name"], $target_dir) ?  $target_dir : "";  
        return $fileName;
}

?>