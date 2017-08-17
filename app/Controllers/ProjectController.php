<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include_once $_SERVER["DOCUMENT_ROOT"]."/config/db-connect.php";

class ProjectController{
    
    private $db;
    
    private $db_table = "project";
    
    public function __construct(){
        $this->db = new DbConnect();
    }
    
    public function create ($name, $type, $about, $image, $email, $phone, $fb, $web) {
        $query = "INSERT INTO project (`project_name` ,  `org_id` ,  `project_about` ,  `project_image` ,  `project_email` ,  `project_phone` ,  `project_fb` ,  `project_web`)
                    VALUES('$name', $type, '$about', '$image', '$email', $phone, '$fb', '$web')";
            
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

        $projects = array();
        while($project = $result->fetch_assoc()) {
            $projects[] = $project;
        }

        return $projects;
        
    }

}
?>