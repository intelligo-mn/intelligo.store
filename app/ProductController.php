<?php    
header('Content-Type: text/plain; charset=utf-8');
 
include_once '../config/db-connect.php';

class ProductController{
    
    private $db;
    
    private $db_table = "product";
    
    public function __construct(){
        $this->db = new DbConnect();
    }
    
    public function create($name, $model, $description, $price, $currency, $userId){
            

        $query = "insert into ".$this->db_table." (`code`, `model`, `name`, `default_photo_id`, `description`, `folder`, `price`, 
                        `currency`, `is_sale`, `is_active`, `brand_id`, `company_id`, `info_url`, `attr`, 
                        `in_stock`, `is_top`, `is_fearured`, `hitcounter`, `ip_address`, `sort_order`, 
                        `created_user_id`, `updated_user_id`, `created_at`, `updated_at`)

                    VALUES('$model', '$model', '$name', 'image', '$description', '".date('Y-m')."', '$price', '$currency', NULL, NULL, NULL, NULL, 'asdsad', 'asd', NULL, NULL, NULL, 1, '".$_SERVER['REMOTE_ADDR']."', 1, ".$userId.", ".$userId.", '".date('Y-m-d H:i:s')."', '".date('Y-m-d H:i:s')."'
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

    public function getAll () {
        
       $sql_query = "SELECT * FROM ".$this->db_table;
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());

        $products = array();
        while($product = $result->fetch_assoc()) {
            $products[] = $product;
        }
        return $products;
    }

    public function getByBrandId ($brand_id) {
        $sql_query = "SELECT * 
             FROM ".$this->db_table."
             WHERE brand_id = ".$brand_id;
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());

        $products = array();
        while($product = $result->fetch_assoc()) {
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
            $products[] = $product;
        }

        return $products;
    }
    private function savePhoto(){
        $target_dir = "../uploads/product_photos/".date("Y-m");
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