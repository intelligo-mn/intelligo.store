<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
 
include_once $_SERVER["DOCUMENT_ROOT"]."/config/db-connect.php";

class OrgController{
    
    private $db;
    
    private $db_table = 'organization';
    
    public function __construct(){
        $this->db = new DbConnect();
    }
    
    public function create ($name, $type, $about, $image, $email, $phone, $fb, $web, $location) {
        $query = "INSERT INTO organization (`org_name` ,  `org_type_id` ,  `org_about` ,  `org_image` ,  `org_email` ,  `org_phone` ,  `org_fb` ,  `org_web` ,  `org_location`)
                    VALUES('$name', $type, '$about', '$image', '$email', $phone, '$fb', '$web', '$location')";
            
        $inserted = mysqli_query($this->db->getDb(), $query);
        
        if($inserted == 1){
            $json['success'] = 1;
            $json['message'] = "success";
        }else{
            $json['success'] = 0;
            $json['message'] = $query;
        }
        mysqli_close($this->db->getDb());
         
    }
    
    public function getAll () {
        $sql_query = "SELECT * 
            FROM ".$this->db_table;
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());
        $organizations = array();
        while($organization = $result->fetch_assoc()) {
            $organizations[] = $organization;
        }
        return $organizations;
        
    }
    public function getOrgId($id) {
        $sql_query = "SELECT * 
             FROM ".$this->db_table."
             WHERE org_id = ".$id;
        
        $result = mysqli_query($this->db->getDb(), $sql_query) or die ("Error :".mysql_error());
        $organizations = array();
        while($organization = $result->fetch_assoc()) {
            $organizations[] = $organization;
        }
        return $organizations;
    }
}
?>