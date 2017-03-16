<?php
    
include_once '../config/db-connect.php';

class ProductController{
    
    private $db;
    
    private $db_table = "dproduct";
    
    public function __construct(){
        $this->db = new DbConnect();
    }
    
    public function createProduct($name, $model, $description, $price, $currency){
            

        $query = "insert into ".$this->db_table." (`code`, `model`, `name`, `default_photo_id`, `description`, `folder`, `price`, 
                        `currency`, `is_sale`, `is_active`, `brand_id`, `company_id`, `info_url`, `attr`, 
                        `in_stock`, `is_top`, `is_fearured`, `hitcounter`, `ip_address`, `sort_order`, 
                        `created_user_id`, `updated_user_id`, `created_at`, `updated_at`)
                    VALUES(, '$model', '$model', 1, '$description', NULL, '$price',
                        '$currency', NULL, NULL, NULL, NULL, '', '',
                        NULL, NULL, NULL, 1, '', 1,
                        NULL, NULL, $dateTime, $dateTime
                    )";

        $inserted = mysqli_query($this->db->getDb(), $query);
        
        if($inserted == 1){
            
            $json['success'] = 1;
            $json['message'] = "Амжилттай бүртгэгдлээ";
            
        }else{
            
            $json['success'] = 0;
            $json['message'] = "Бүтээгдэхүүн нэмэхэд алдаа гарлаа";
            
        }
        
        mysqli_close($this->db->getDb());
                
        return $json;
        
    }
   
}
?>