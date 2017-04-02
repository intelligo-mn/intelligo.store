<?php
    
include_once '../config/db-connect.php';

class ProductController{
    
    private $db;
    
    private $db_table = "product";
    
    public function __construct(){
        $this->db = new DbConnect();
    }
    
    public function createProduct($name, $model, $description, $price, $currency){
            

        $query = "insert into ".$this->db_table." (`code`, `model`, `name`, `default_photo_id`, `description`, `folder`, `price`, 
                        `currency`, `is_sale`, `is_active`, `brand_id`, `company_id`, `info_url`, `attr`, 
                        `in_stock`, `is_top`, `is_fearured`, `hitcounter`, `ip_address`, `sort_order`, 
                        `created_user_id`, `updated_user_id`, `created_at`, `updated_at`)

                    VALUES('$model', '$model', '$name', 'image', '$description', '', '$price', '$currency', NULL, NULL, NULL, NULL, 'asdsad', 'asd', NULL, NULL, NULL, 1, 'dsadas', 1, NULL, NULL, '2017-03-01 00:00:00', '2017-03-01 00:00:00'
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

    public function getProducts () {
        
       $sql_query = "SELECT * 
             FROM ".$this->db_table;
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());

        $products = array();
        while($product = $result->fetch_assoc()) {
            $products[] = $product;
        }

        return $products;
    }

    public function getProductsBrand ($brand_id) {
        $sql_query = "SELECT * 
             FROM ".$this->db_table."
             WHERE brand_id = ".$brand_id."";
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());

        $products = array();
        while($product = $result->fetch_assoc()) {
            $products[] = $product;
        }

        return $products;
    }

    public function productDetail($id) {
        $sql_query = "SELECT * 
             FROM ".$this->db_table."
             WHERE id = ".$id."";
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());

        $products = array();
        while($product = $result->fetch_assoc()) {
            $products[] = $product;
        }

        return $products;
    }
   
}
?>