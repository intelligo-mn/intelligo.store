   <?php
    include_once('config/database.php'); 
    include_once('app/Controllers/MainController.php'); 
    include_once('app/Controllers/OrgController.php'); 

    $sql_query = "SELECT org_type_id, org_type_name 
        FROM org_type 
        ORDER BY org_type_id ASC";
            
    $stmt_type = $connect->stmt_init();
    if($stmt_type->prepare($sql_query)) {   
        $stmt_type->execute();
        $stmt_type->store_result();
        $stmt_type->bind_result($type_data['org_type_id'], 
            $type_data['org_type_name']
            );      
    }
    
    $stmt = $connect->stmt_init();
    if($stmt->prepare($sql_query)) {    
        $stmt->execute();
        $stmt->store_result();
        $stmt->fetch();
        $stmt->close();
    }
        
    if(isset($_POST['btnAdd'])){
        $org_name = $_POST['org_name'];
        $org_type_id = $_POST['org_type_id'];
        $org_about = $_POST['org_about'];
        $org_email = $_POST['org_email'];
        $org_phone = $_POST['org_phone'];
        $org_fb = $_POST['org_fb'];
        $org_web = $_POST['org_web'];
        $org_location = $_POST['org_location'];
        $org_image = $_FILES['org_image']['name'];
        $image_error = $_FILES['org_image']['error'];
        $image_type = $_FILES['org_image']['type'];
        $error = array();
        
        if(empty($org_name)){
            $org_name = "";
            $error['org_name'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }
            
        if(empty($org_type_id)){
            $org_type_id = "";
            $error['$org_type_id'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }                

        if(empty($org_about)){
            $org_about = "";
            $error['org_about'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }
        
        if(empty($org_image)){
            $org_image = "";
            $error['org_image'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }
        
        if(empty($org_email)){
            $org_email = "";
            $error['org_email'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }
        
        
        if(empty($org_phone)){
            $org_phone = "";
            $error['org_phone'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }
        
        if(empty($org_fb)){
            $org_fb = "";
            $error['org_fb'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }
        
        
        if(empty($org_web)){
            $org_web = "";
            $error['org_web'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }
        
        if(empty($org_location)){
            $org_location = "";
            $error['org_location'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }
        
        $allowedExts = array("gif", "jpeg", "jpg", "png");
        
        error_reporting(E_ERROR | E_PARSE);
        $extension = end(explode(".", $_FILES["org_image"]["name"]));
                
        if($image_error > 0){
            $error['org_image'] = " <span class='label label-danger'>Хуулах боломгүй байна!</span>";
        }else if(!(($image_type == "image/gif") || 
            ($image_type == "image/jpeg") || 
            ($image_type == "image/jpg") || 
            ($image_type == "image/x-png") ||
            ($image_type == "image/png") || 
            ($image_type == "image/pjpeg")) &&
            !(in_array($extension, $allowedExts))){
        
            $error['org_image'] = " <span class='label label-danger'>Зургын өргөтгөл зөвхөн jpg, jpeg, gif, png!</span>";
        }
        
        if(!empty($org_name) && !empty($org_type_id) && !empty($org_about) && empty($error['org_image']) ){
            
            $string = '0123456789';
            $file = preg_replace("/\s+/", "_", $_FILES['org_image']['name']);
            $function = new MainController();
            $org_image = $function->get_random_string($string, 4)."-".date("Y-m-d").".".$extension;
                
            $upload = move_uploaded_file($_FILES['org_image']['tmp_name'], 'upload/images/'.$org_image);
    
            $upload_image = 'upload/images/'.$org_image;
    
            $org = new OrgController();
            
            $org->create($org_name,$org_type_id,$org_about, $upload_image,$org_email,$org_phone, $org_fb,$org_web, $org_location);
            
        }   
    }
?>
   
    <section class="content">
        <div class="container-fluid">
            
            <!-- Basic Validation -->
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2>Хүүхдийн төлөө байгууллага нэмэх
                                  <small><?php echo isset($error['add_org']) ? $error['add_org'] : '';?></small>
                            </h2>
                            <ul class="header-dropdown m-r--5">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons">more_vert</i>
                                    
                                    </a>
                                    
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <form id="form_validation" method="post" enctype="multipart/form-data">
                                <div class="form-group form-float">
                                    <div class="form-line">
                                        <input type="text" class="form-control" name="org_name" required>
                                        <label class="form-label">Нэр</label>
                                    </div>
                                </div>

                                <div class="form-group form-float">
                                    <div class="form-line">
                                        <textarea name="org_about" cols="30" rows="5" class="form-control no-resize" required></textarea>
                                        <label class="form-label">Байгууллагын тухай</label>
                                    </div>
                                </div>
                              
                             
                                <div class="form-group form-float">
                                    <select name="org_type_id" class="form-control show-tick">
                                        <?php while($stmt_type->fetch()){ ?>
                                            <option value="<?php echo $type_data['org_type_id']; ?>"><?php echo $type_data['org_type_name']; ?></option>
                                        <?php } ?>
                                    </select>    
                                </div> 
                                
                                <div class="form-group form-float">
                                    <div class="form-line">
                                        <input type="text" class="form-control" name="org_email" required>
                                        <label class="form-label">Мэйл хаяг</label>
                                    </div>
                                </div>
                                
                                <div class="form-group form-float">
                                    <div class="form-line">
                                        <input type="phone" class="form-control" name="org_phone" required>
                                        <label class="form-label">Утас</label>
                                    </div>
                                </div>
                                
                                <div class="form-group form-float">
                                    <div class="form-line">
                                        <input type="text" class="form-control" name="org_fb" required>
                                        <label class="form-label">Facebook</label>
                                    </div>
                                </div>
                                <div class="form-group form-float">
                                    <div class="form-line">
                                        <input type="text" class="form-control" name="org_web" required>
                                        <label class="form-label">Вэб</label>
                                    </div>
                                </div>
                                <div class="form-group form-float">
                                    <div class="form-line">
                                        <input type="text" class="form-control" name="org_location" required>
                                        <label class="form-label">Байршил</label>
                                    </div>
                                </div>
                                
                                
                                <div class="form-group form-float">
                                    <input type="file" name="org_image" id="org_image"/>
                                </div>
                                <button name="btnAdd" class="btn btn-primary waves-effect" type="submit">НЭМЭХ</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
