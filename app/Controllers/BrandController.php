<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json; charset=utf-8');
 
include_once '../config/db-connect.php';

class BrandController{
    
    private $db;
    
    private $db_table = "product_brand";
    
    public function __construct(){
        $this->db = new DbConnect();
    }
    // Ижил нэртэй брэнд байгаа эсэх
    public function isExist($name){
        $query = "select * from ".$this->db_table." where name = '$name'";
        return mysqli_num_rows(mysqli_query($this->db->getDb(), $query)) > 0;
    }
    // Брэнд нэмэх
    public function create($name, $description, $userId, $catID, $language, $mobile, $email, $address, $icon){
            
        $query = "INSERT INTO ".$this->db_table." (`name`, `email`, `phone`, `address`, `sort_order`, `folder`, `icon_image`, `hit_counter`, `is_active`, `is_featured`, `description`, `project_category_id`, `language`, `ip_address`, `created_user_id`, `updated_user_id`, `created_at`, `updated_at`) 
        VALUES
            ('$name','$email', '$mobile' ,'$address', 0, '".date('Y-m')."', '".($icon == "" ? NULL : $icon)."', 0, 1, NULL, '<p>\r\n$description</p>\r\n', $catID, '".$language."', '".$_SERVER['REMOTE_ADDR']."', $userId, $userId, '".date('Y-m-d H:i:s')."', '".date('Y-m-d H:i:s')."')";

        $inserted = mysqli_query($this->db->getDb(), $query);
        
        if($inserted == 1){
            $json['success'] = 1;
            $json['message'] = "success";
        }else{
            $json['success'] = 0;
            $json['message'] = $query;
        }
        
        mysqli_close($this->db->getDb());
         
        $json['message'] = $query;       
        return $json;
        
    }
    // Бүх брэнд буцаах
    public function getAll () {
        $sql_query = "SELECT * 
             FROM ".$this->db_table." 
             ORDER BY created_at DESC";
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());

        $brands = array();
        while($brand = $result->fetch_assoc()) {
            $brands[] = $brand;
        }
        return $brands;   
    }

    public function getByUserId ($created_user_id) {
        $sql_query = "SELECT * 
             FROM ".$this->db_table."
             WHERE created_user_id = ".$created_user_id;
       
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());

        $brands = array();
        while($brand = $result->fetch_assoc()) {
            $brands[] = $brand;
        }
        return $brands;  
    }
}
?>