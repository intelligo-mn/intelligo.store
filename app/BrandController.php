<?php

header('Content-Type: text/plain; charset=utf-8');
 
include_once '../config/db-connect.php';

class BrandController{
    
    private $db;
    
    private $db_table = "product_brand";
    
    public function __construct(){
        $this->db = new DbConnect();
    }
    
    public function createBrand($name, $description, $image){
            
        $query = "INSERT INTO ".$this->db_table." (`id`, `name`, `sort_order`, `folder`, `icon_image`, `hit_counter`, `is_active`, `is_featured`, `description`, `project_category_id`, `language`, `ip_address`, `created_user_id`, `updated_user_id`, `created_at`, `updated_at`) 
        VALUES
            (1, '$name', 0, '2017-03', '$image', 0, 1, NULL, '<p>\r\n$description</p>\r\n', NULL, 'MN', '127.0.0.1', 1, 1, '2017-03-06 22:56:59', '2017-03-06 23:03:16')";


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

    public function getBrands () {

        $sql_query = "SELECT * 
             FROM ".$this->db_table;
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());

        $brands = array();
        while($brand = $result->fetch_assoc()) {
            $brands[] = $brand;
        }

        return $brands;
        
    }
}
?>