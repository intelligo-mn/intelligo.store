<?php

class ProfileController {

    private $db;

    private $db_table = "user";

    function __construct() {
        $this->db = new DbConnect();
    }

    public function create($name, $email, $password) {
        $uuid = uniqid('', true);
        $hash = $this->hashSSHA($password);
        $encrypted_password = $hash["encrypted"];
        $salt = $hash["salt"]; // salt
        $stmt = $this->db->prepare("INSERT INTO ".$this->$db_table."(`username`, `password`, `email`, `firstname`, `lastname`, `mobile`, `gender`, `birthday`, `status`, `email_verification_code`, `folder`, `avatar_image`, `ip_address`, `created_at`, `updated_at`, `type`, `person_reg_number`, `person_profession`, `person_biography`, `company_name`, `company_register`, `company_description`, `company_founded_year`, `tel`, `fax`, `location`, `timezone`, `hit_counter`, `website`, `level`, `level_started_date`, `level_expire_date`, `fb_id`, `google_id`, `twitter_id`, `linkedin_id`, `instagram_id`, `is_registered_by_social`, `registered_from_language`, `slug`)");
        $stmt->bind_param("sssss", $uuid, $name, $email, $encrypted_password, $salt);
        $stmt->bind_param($username, $password, $email, '', '', '', 1, '', 1, NULL, date("Y-m"), $avatar_image == "" ? NULL : $avatar_image, $_SERVER['REMOTE_ADDR'],  date('Y-m-d H:i:s'), date('Y-m-d H:i:s'), 'person', '', '', '', '',  '', '', NULL, '', '', '', NULL, 0, '', '0', NULL, NULL, $fb_id, NULL, NULL, NULL, NULL, $fb_id != "" ? 1 : 0, NULL, $username != "" ? $username : $fb_id)

        $result = $stmt->execute();
        $stmt->close();
        if ($result) {
            $stmt = $this->db->prepare("SELECT * FROM users WHERE email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $user = $stmt->get_result()->fetch_assoc();
            $stmt->close();
            return $user;
        } else {
            return false;
        }
    }

    public function login($email, $password) {
        $stmt = $this->db->prepare("SELECT * FROM ".$this->$db_table." WHERE email = ?");
        $stmt->bind_param("s", $email);
        if ($stmt->execute()) {
            $user = $stmt->get_result()->fetch_assoc();
            $stmt->close();
            $salt = $user['salt'];
            $encrypted_password = $user['encrypted_password'];
            $hash = $this->checkhashSSHA($salt, $password);
            if ($encrypted_password == $hash) {
                return $user;
            }
        } else {
            return NULL;
        }
    }

    public function isExists($email) {
        $stmt = $this->db->prepare("SELECT email from users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();
        if ($stmt->num_rows > 0) {
            $stmt->close();
            return true;
        } else {
            $stmt->close();
            return false;
        }
    }

    public function hashSSHA($password) {
        $salt = sha1(rand());
        $salt = substr($salt, 0, 10);
        $encrypted = base64_encode(sha1($password . $salt, true) . $salt);
        $hash = array("salt" => $salt, "encrypted" => $encrypted);
        return $hash;
    }
    
    public function checkhashSSHA($salt, $password) {
        $hash = base64_encode(sha1($password . $salt, true) . $salt);
        return $hash;
    }
}

?>
