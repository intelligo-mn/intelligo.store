<?php    
header('Content-Type: text/plain; charset=utf-8');
 
include_once 'config/db-connect.php';

class ProductController{
    
    private $db;
    
    private $db_table = "product";
    
    public function __construct(){
        $this->db = new DbConnect();
    }
    // Бүтээгдэхүүн нэмэх
    public function create($name, $model, $description, $price, $currency, $userId, $brandId){
        
        $photoId = $this->savePhoto($userId) ? mysqli_insert_id() : NULL;
        $query = "insert into ".$this->db_table." (`code`, `model`, `name`, `default_photo_id`, `description`, `folder`, `price`, 
                        `currency`, `is_sale`, `is_active`, `brand_id`, `company_id`, `info_url`, `attr`, 
                        `in_stock`, `is_top`, `is_fearured`, `hitcounter`, `ip_address`, `sort_order`, 
                        `created_user_id`, `updated_user_id`, `created_at`, `updated_at`)

                    VALUES('".$model.date("Y-m-d")."', '$model', '$name', $photoId, '$description', '".date('Y-m')."', '$price', '$currency', NULL, NULL, '$brandId', NULL, 'asdsad', 'asd', NULL, NULL, NULL, 1, '".$_SERVER['REMOTE_ADDR']."', 1, ".$userId.", ".$userId.", '".date('Y-m-d H:i:s')."', '".date('Y-m-d H:i:s')."'
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
    // Бүх бүтээгдэхүүний мэдээлэл авах
    public function getAll () {
        
       $sql_query = "SELECT * FROM ".$this->db_table;
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());

        $products = array();
        $ps = array();
        while($product = $result->fetch_assoc()) {
            $product["folder"] = $product["folder"]."/".$this->getPhotoPath($product["default_photo_id"]);
            $products[] = $product;
        }
        return $products;
    }
    public function getPhotoPath($photoId){
        $photo_result = mysqli_query($this->db->getDb(), "SELECT * FROM product_photo
         WHERE id = ".$photoId) or die ("Error :".mysql_error());
        return mysqli_fetch_assoc($photo_result)["photo_file"];
    }
    // Тухайн брэндэд хамаатай бүтээгдэхүүнүүд авах
    public function getByBrandId ($brand_id) {
        $sql_query = "SELECT * 
             FROM ".$this->db_table."
             WHERE brand_id = ".$brand_id;
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());

        $products = array();
        while($product = $result->fetch_assoc()) {
            $product["folder"] = $product["folder"]."/".$this->getPhotoPath($product["default_photo_id"]);
            $products[] = $product;
        }
        return $products;
    }
    // Тухайн хэрэглэгчийн оруулсан бүтээгдэхүүн авах
    public function getByUserId ($created_user_id) {
        $sql_query = "SELECT * 
             FROM ".$this->db_table."
             WHERE created_user_id = ".$created_user_id;
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());

        $products = array();
        while($product = $result->fetch_assoc()) {
            $product["folder"] = $product["folder"]."/".$this->getPhotoPath($product["default_photo_id"]);
            $products[] = $product;
        }
        return $products;
    }

    public function getByProductId($id) {
        $sql_query = "SELECT * 
             FROM ".$this->db_table."
             WHERE id = ".$id;
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());

        $products = array();
        while($product = $result->fetch_assoc()) {
            $product["folder"] = $product["folder"]."/".$this->getPhotoPath($product["default_photo_id"]);
            $products[] = $product;
        }
        return $products;
    }
}
?>