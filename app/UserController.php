<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Content-Type: text/plain; charset=utf-8');    
include_once 'config/db-connect.php';

class UserController{
    
    private $db;
    
    private $db_table = "user";
    
    public function __construct(){
        $this->db = new DbConnect();
    }
    
    public function isExist($username, $email){
        $query = "select * from ".$this->db_table." where username = '$username' OR email = '$email'";
        return mysqli_num_rows(mysqli_query($this->db->getDb(), $query)) > 0;
    }
    public function create($username, $password, $email, $mobile, $fb_id, $avatar_image){
        if(!isExist($username, $email)){
            $query = "insert into ".$this->db_table." (`username`, `password`, `email`, `firstname`, `lastname`, `mobile`, `gender`, `birthday`, 
              `status`, `email_verification_code`, `folder`, `avatar_image`, `ip_address`, `created_user_id`, `updated_user_id`, 
              `department_id`, `rank_id`, `position_id`, `aimag_id`, `created_at`, `updated_at`, `type`, `person_reg_number`, 
              `person_profession`, `person_biography`, `person_start_year`, `company_name`, `company_register`, `company_description`, 
              `company_founded_year`, `tel`, `fax`, `location`, `timezone`, `hit_counter`, `website`, `level`, `level_started_date`, 
              `level_expire_date`, `fb_id`, `google_id`, `twitter_id`, `linkedin_id`, `instagram_id`, `is_registered_by_social`, 
              `registered_from_language`, `is_creator`, `is_investor`, `is_idea_owner`, `is_idea_buyer`, `slug`)values ('$username', '$password', '$email', '', '', '', 1, '', 1, NULL, '".date("Y-m")."', ".($avatar_image == "" ? NULL : "'".$avatar_image."'").", '".$_SERVER['REMOTE_ADDR']."', NULL, NULL, NULL, NULL, NULL, NULL, '".date('Y-m-d H:i:s')."', '".date('Y-m-d H:i:s')."', 'person', '', '', '', NULL, '', '', '', NULL, '', '', '', NULL, 0, '', '0', NULL, NULL, '$fb_id', NULL, NULL, NULL, NULL, ".($fb_id != "" ? 1 : 0).", NULL, NULL, NULL, NULL, NULL, '".($username != "" ? $username : $fb_id)."')";
            $inserted = mysqli_query($this->db->getDb(), $query);
        
            if($inserted == 1){
                $ajson['id'] = mysqli_insert_id();
                $ajson['success'] = 1;
                $ajson['message'] = "succesfilly registered.";
             return $ajson;   
            }
        }
        $bjson['success'] = 0;
        $bjson['message'] = "user already registered.";
        return $bjson;
        
    }
    
    public function signin($username, $password){
        $query = "select * from ".$this->db_table." where username = '$username' AND password = '$password' Limit 1";
        $result = mysqli_query($this->db->getDb(), $query);

        $users = array();
        while($user = $result->fetch_assoc()) {
            $users[] = $user;
        }
        return $users;
    }
    //хэрэглэгчийг id - аар нь авах
    public function getById($id){
        $query = "select * from ".$this->db_table." where id=$id";
        echo mysqli_num_rows(mysqli_query($this->db->getDb(), $query)) > 0 ? json_encode(mysqli_query($this->db->getDb(), $query)[0]) : json_encode(["result"=>"error"]);
    }
    //хэрэглэгчийг facebook id - аар нь авах
    public function getByFbId($fb_id){
        $query = "select * from ".$this->db_table." -where fb_id=$fb_id";
        echo mysqli_num_rows(mysqli_query($this->db->getDb(), $query)) > 0 ? json_encode(mysqli_query($this->db->getDb(), $query)[0]) : json_encode(["result"=>"error"]);
    }
    
}

?>