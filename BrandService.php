<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

date_default_timezone_set("UTC");
    header('Content-Type: text/plain; charset=utf-8');
 
    require_once 'app/BrandController.php';
    require_once 'config/security.php';
    if(!isset($_GET['accesskey']) && (new DGLSecure())->generateAccessKey($_GET["accesskey"])) 
        die('accesskey required.');
    if(!isset($_GET["state"]))
        die('request state required.');

    $state = $_GET["state"];
    $name = "";
    $description = "";
    $user_id = "";
    $category_id = "";
    $language = "";

    //ui гэдэг нь User_id
    if(isset($_GET['name']) && isset($_GET['ui']) && isset($_GET['description']) && isset($_GET['categoryId']) && isset($_GET['language'])){
        $name = $_GET['name'];
        $description = $_GET['description'];
        $user_id = $_GET["ui"];
        $category_id = $_GET["categoryId"];
        $language = $_GET["language"];
    }

    $brandObject = new BrandController();
    
    if($state == "c" && !empty($name) && !empty($description) && !empty($user_id) && !empty($category_id) && !empty($language) ){
        echo json_encode($brandObject->create($name, $description, $user_id, $category_id, $language, savePhoto()));
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
            
            $target_dir = $target_dir . basename($_FILES["file"]["name"]);
            $result = move_uploaded_file($_FILES["file"]["tmp_name"], $target_dir) ?  $target_dir : "";  
            return basename($_FILES["file"]["name"]);
    }

?>
