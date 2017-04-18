<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Content-Type: text/plain; charset=utf-8');
 
include_once 'config/db-connect.php';

class BrandController{
    
    private $db;
    
    private $db_table = "product_brand";
    
    public function __construct(){
        $this->db = new DbConnect();
    }
    
    public function createBrand($name, $description, $userId){
            
        $query = "INSERT INTO ".$this->db_table." (`name`, `sort_order`, `folder`, `icon_image`, `hit_counter`, `is_active`, `is_featured`, `description`, `project_category_id`, `language`, `ip_address`, `created_user_id`, `updated_user_id`, `created_at`, `updated_at`) 
        VALUES
            ('$name', 0, '".date('Y-m')."', '', 0, 1, NULL, '<p>\r\n$description</p>\r\n', NULL, 'MN', '".$_SERVER['REMOTE_ADDR']."', $userId, $userId, '".date('Y-m-d H:i:s')."', '".date('Y-m-d H:i:s')."')";

        $inserted = mysqli_query($this->db->getDb(), $query);
        
        if($inserted == 1){
            $json['success'] = 1;
            $json['message'] = "Амжилттай бүртгэгдлээ";
        }else{
            $json['success'] = 0;
            $json['message'] = "Брэнд нэмэхэд алдаа гарлаа";
        }
        
        mysqli_close($this->db->getDb());
                
        return $json;
        
    }

    public function getAll () {
        $sql_query = "SELECT * 
             FROM ".$this->db_table;
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());

        $brands = array();
        while($brand = $result->fetch_assoc()) {
            $brands[] = $brand;
        }

        return $brands;
        
    }
    private function savePhoto(){
        $target_dir = "../uploads/product_brand_icons/".date("Y-m");
    $fileUploaded = false;
    
    if(!file_exists($target_dir))
        mkdir($target_dir, 0777, true);
        
    
        $target_dir = $target_dir . "/" . basename($_FILES["file"]["name"]);
    
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_dir)){
            echo json_encode([
            "Message" => "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.",
            "Status" => "OK",
            "userId" => $_REQUEST["userId"]
            ]);
            $fileUploaded  = true;
        }
        else 
            echo json_encode([
            "Message" => "Sorry, there was an error uploading your file.",
            "Status" => "Error",
            "userId" => $_REQUEST["userId"]
            ]);    
    }
}
?>