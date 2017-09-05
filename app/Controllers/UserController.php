<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json; charset=utf-8'); 

include_once $_SERVER["DOCUMENT_ROOT"]."/config/db-connect.php";

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
        
        $slug = $username != NULL ? $username : $fb_id;
        
        $query = "insert into ".$this->db_table." (`username`, `password`, `email`, `firstname`, `lastname`, `mobile`, `gender`, `birthday`, `status`, `email_verification_code`, `folder`, `avatar_image`, `ip_address`, `created_at`, `updated_at`, `type`, `person_reg_number`, `person_profession`, `person_biography`, `company_name`, `company_register`, `company_description`, `company_founded_year`, `tel`, `fax`, `location`, `timezone`, `hit_counter`, `website`, `level`, `level_started_date`, `level_expire_date`, `fb_id`, `google_id`, `twitter_id`, `linkedin_id`, `instagram_id`, `is_registered_by_social`, `registered_from_language`, `slug`) 

        values ('$username', '$password', '$email', '', '', '', 1, '', 1, NULL, 
        '".date("Y-m")."', '".($avatar_image == "" ? NULL : $avatar_image)."', '".$_SERVER['REMOTE_ADDR']."',  '".date('Y-m-d H:i:s')."', '".date('Y-m-d H:i:s')."', 'person', '', '', '', '',  '', '', NULL, '', '', '', NULL, 0, '', '0', NULL, NULL, '$fb_id', NULL, NULL, NULL, NULL, ".($fb_id != "" ? 1 : 0).", NULL, '$slug')";

        $inserted = mysqli_query($this->db->getDb(), $query);
    
        if($inserted == 1){
            $json['success'] = 1;
            $json['message'] = "succesfilly registered.";
        } else {
            $json['success'] = 0;
            $json['message'] = "User register error.";   
            
        }
        mysqli_close($this->db->getDb());
        $json['query'] = $query;
        return $json;
        
    }
    public function update($userID, $username, $email, $mobile, $photoPath){
        $json = array();
        $query = "UPDATE ".$this->db_table." SET username='$username', email='$email', mobile='$mobile' ".($photoPath!="" ? ", avatar_image='$photoPath'" : "")." WHERE id=$userID";
        $inserted = mysqli_query($this->db->getDb(), $query);
    
        if($inserted == 1){
            $json['success'] = 1;
            $json['message'] = "succesfilly update.";
        } else {
            $json['success'] = 0;
            $json['message'] = "User update error.";   
            $json['query'] = $query;
        }

        return $json;
    }
    public function login($username, $password){
        $query = "select * from ".$this->db_table." where username = '$username' AND password = '$password' Limit 1";
        $result = mysqli_query($this->db->getDb(), $query);
        $users = array();
        while($user = $result->fetch_assoc()) {
            $users[] = $user;
        }
        return $users;
    }
    public function signin($username, $password){
        $query = "select * from ".$this->db_table." where username = '$username' AND password = '$password'"." Limit 1";
        $result = mysqli_query($this->db->getDb(), $query);

        $users = array();
        while($user = $result->fetch_assoc()) {
            $users['success'] = 1;
            $users['id'] = $user['id'];
            $users['username'] = $user['username'];
            $users['email'] = $user['email'];
            $users['mobile'] = $user['mobile'];
            $users['level'] = $user['level'];
            $users['level_expire_date'] = $user['level_expire_date'] == null ? 0 : $user['level_expire_date'];
            $users['imagePath'] = $user['folder']."/".$user['avatar_image'];
        }
        $json = array();
        $json['success'] = 0;
        $json['query'] = $query;
        return count($users) > 0 ? $users : $json;
    }
    public function signinByFB($fb_id){
        $query = "select * from ".$this->db_table." where fb_id = '$fb_id' Limit 1";
        $result = mysqli_query($this->db->getDb(), $query);

        $users = array();
        while($user = $result->fetch_assoc()) {
            $users['success'] = 1;
            $users['id'] = $user['id'];
            $users['username'] = $user['username'];
            $users['email'] = $user['email'];
            $users['mobile'] = $user['mobile'];
            $users['level'] = $user['level'];
            $users['imagePath'] = $user['folder']."/".$user['avatar_image'];
        }
        $json = array();
        $json['success'] = 0;
        $json['query'] = $query;
        return count($users) > 0 ? $users : $json;
    }
    //өгөгдсөн id тай хэрэглэгч бүртгэгдсэн эсэх
    public function isRegisteredByFB($id){
        $query = "select * from ".$this->db_table." where fb_id=$id";
        var_dump($query);
        return mysqli_num_rows(mysqli_query($this->db->getDb(), $query)) > 0;
    }
    //хэрэглэгчийг facebook id - аар нь авах
    public function getByFbId($fb_id){
        $query = "select * from ".$this->db_table." -where fb_id=$fb_id";
        echo mysqli_num_rows(mysqli_query($this->db->getDb(), $query)) > 0 ? json_encode(mysqli_query($this->db->getDb(), $query)[0]) : json_encode(["result"=>"error"]);
    }
}

?>