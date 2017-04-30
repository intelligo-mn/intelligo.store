<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

date_default_timezone_set("UTC");
header('Content-Type: text/plain; charset=utf-8');

require_once 'app/BrandController.php';
require_once 'config/security.php';
 if(!isset($_POST['accesskey'])) 
        die('accesskey required!');
    if(!(new DGLSecure())->generateAccessKey($_POST['accesskey']))
        die('accesskey is wrong!');
if(!isset($_POST["state"]))
    die('request state required.');

$state = $_POST["state"];
$name = "";
$description = "";
$user_id = "";
$category_id = "";
$language = "";

//ui гэдэг нь User_id
if(isset($_POST['name']) && isset($_POST['ui']) && isset($_POST['description']) && isset($_POST['categoryId']) && isset($_POST['language'])){
    $name = $_POST['name'];
    $description = $_POST['description'];
    $user_id = $_POST["ui"];
    $category_id = $_POST["categoryId"];
    $language = $_POST["language"];
}

$brandObject = new BrandController();

if($state == "c" && !empty($name) && !empty($description) && !empty($user_id) && !empty($category_id) && !empty($language) ){

    if($brandObject->isExist($name)){
        $json = array();
        $json['success'] = 0;
        $json['message'] = "brand already.";       
        echo json_encode($json); 
    } else {
        echo json_encode($brandObject->create($name, $description, $user_id, $category_id, $language, savePhoto()));
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
        
        $target_dir = $target_dir.basename($_FILES["file"]["name"]);
        $result = move_uploaded_file($_FILES["file"]["tmp_name"], $target_dir) ?  $target_dir : "";  
        return basename($_FILES["file"]["name"]);
}

?>
