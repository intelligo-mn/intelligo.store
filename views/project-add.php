   <?php
    include_once('config/database.php'); 
    include_once('app/Controllers/MainController.php'); 
    include_once('app/Controllers/ProjectController.php'); 

    $sql_query = "SELECT org_id, org_name 
        FROM organization 
        ORDER BY org_id ASC";
            
    $stmt_type = $connect->stmt_init();
    if($stmt_type->prepare($sql_query)) {   
        $stmt_type->execute();
        $stmt_type->store_result();
        $stmt_type->bind_result($type_data['org_id'], 
            $type_data['org_name']
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
        $project_name = $_POST['project_name'];
        $org_id = $_POST['org_id'];
        $project_about = $_POST['project_about'];
        $project_email = $_POST['project_email'];
        $project_phone = $_POST['project_phone'];
        $project_fb = $_POST['project_fb'];
        $project_web = $_POST['project_web'];
        $project_image = $_FILES['project_image']['name'];
        $image_error = $_FILES['project_image']['error'];
        $image_type = $_FILES['project_image']['type'];
        $error = array();
        
        if(empty($project_name)){
            $project_name = "";
            $error['project_name'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }
            
        if(empty($org_id)){
            $org_id = "";
            $error['$org_id'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }                

        if(empty($project_about)){
            $project_about = "";
            $error['project_about'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }
        
        if(empty($project_image)){
            $project_image = "";
            $error['project_image'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }
        
        if(empty($project_email)){
            $project_email = "";
            $error['project_email'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }
        
        
        if(empty($project_phone)){
            $project_phone = "";
            $error['project_phone'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }
        
        if(empty($project_fb)){
            $project_fb = "";
            $error['project_fb'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }
        
        
        if(empty($project_web)){
            $project_web = "";
            $error['project_web'] = " <span class='label label-danger'>Хоосон байна!</span>";
        }
        
        
        $allowedExts = array("gif", "jpeg", "jpg", "png");
        
        error_reporting(E_ERROR | E_PARSE);
        $extension = end(explode(".", $_FILES["project_image"]["name"]));
                
        if($image_error > 0){
            $error['project_image'] = " <span class='label label-danger'>Хуулах боломгүй байна!</span>";
        }else if(!(($image_type == "image/gif") || 
            ($image_type == "image/jpeg") || 
            ($image_type == "image/jpg") || 
            ($image_type == "image/x-png") ||
            ($image_type == "image/png") || 
            ($image_type == "image/pjpeg")) &&
            !(in_array($extension, $allowedExts))){
        
            $error['project_image'] = " <span class='label label-danger'>Зургын өргөтгөл зөвхөн jpg, jpeg, gif, png!</span>";
        }
        
        if(!empty($project_name) && !empty($org_id) && !empty($project_about) && empty($error['project_image']) ){
            
            $string = '0123456789';
            $file = preg_replace("/\s+/", "_", $_FILES['project_image']['name']);
            $function = new MainController();
            $project_image = $function->get_random_string($string, 4)."-".date("Y-m-d").".".$extension;
                
            $upload = move_uploaded_file($_FILES['project_image']['tmp_name'], 'upload/images/'.$project_image);
    
            $upload_image = 'upload/images/'.$project_image;
    
            $project = new ProjectController();
            
            $project->create($project_name,$org_id,$project_about, $upload_image,$project_email,$project_phone, $project_fb,$project_web);
            
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
                            <h2>Хүүхдийн төлөө үйл ажиллагаа нэмэх
                                  <small><?php echo isset($error['add_project']) ? $error['add_project'] : '';?></small>
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
                                        <input type="text" class="form-control" name="project_name" required>
                                        <label class="form-label">Нэр</label>
                                    </div>
                                </div>

                                <div class="form-group form-float">
                                    <div class="form-line">
                                        <textarea name="project_about" cols="30" rows="5" class="form-control no-resize" required></textarea>
                                        <label class="form-label">Үйл ажиллагааны тухай</label>
                                    </div>
                                </div>
                              
                             
                                <div class="form-group form-float">
                                    <select name="org_id" class="form-control show-tick">
                                        <?php while($stmt_type->fetch()){ ?>
                                            <option value="<?php echo $type_data['org_id']; ?>"><?php echo $type_data['org_name']; ?></option>
                                        <?php } ?>
                                    </select>    
                                </div>
                                
                                <div class="form-group form-float">
                                    <div class="form-line">
                                        <input type="text" class="form-control" name="project_email" required>
                                        <label class="form-label">Мэйл хаяг</label>
                                    </div>
                                </div>
                                
                                <div class="form-group form-float">
                                    <div class="form-line">
                                        <input type="phone" class="form-control" name="project_phone" required>
                                        <label class="form-label">Утас</label>
                                    </div>
                                </div>
                                
                                <div class="form-group form-float">
                                    <div class="form-line">
                                        <input type="text" class="form-control" name="project_fb" required>
                                        <label class="form-label">Facebook</label>
                                    </div>
                                </div>
                                <div class="form-group form-float">
                                    <div class="form-line">
                                        <input type="text" class="form-control" name="project_web" required>
                                        <label class="form-label">Вэб</label>
                                    </div>
                                </div>
                                <div class="form-group form-float">
                                    <div class="form-line">
                                        <input type="text" class="form-control" name="project_location" required>
                                        <label class="form-label">Байршил</label>
                                    </div>
                                </div>
                                
                                
                                <div class="form-group form-float">
                                    <input type="file" name="project_image" id="project_image"/>
                                </div>
                                <button name="btnAdd" class="btn btn-primary waves-effect" type="submit">НЭМЭХ</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
