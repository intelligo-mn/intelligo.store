<?php
    include_once('config/database.php'); 
    include_once('app/Controllers/MainController.php'); 
?>

<?php 
    $mainObject = new MainController();
    
    $data = array();
    
    if(isset($_GET['keyword'])){    
        $keyword = $mainObject->sanitize($_GET['keyword']);
        $bind_keyword = "%".$keyword."%";
    }else{
        $keyword = "";
        $bind_keyword = $keyword;
    }

    $stmt = $connect->stmt_init();
    if($stmt->prepare($sql_query)) {    
        $stmt->execute();
        $stmt->store_result();
        $stmt->fetch();
        $stmt->close();
    }   
    
    if(empty($keyword)){
        $sql_query = "SELECT org_id, org_name, org_type_id, org_about, org_image, org_email, org_phone, org_fb, org_web, org_location 
                FROM organization
                ORDER BY organization.org_id DESC";
    }else{
        $sql_query = "SELECT org_id, org_name, org_type_id, org_about, org_image, org_email, org_phone, org_fb, org_web, org_location 
                FROM organization org, org_type org_t
                WHERE org.org_type_id = org_t.org_type_id AND org_name LIKE ? 
                ORDER BY org.org_id DESC";
    }
    
    $stmt = $connect->stmt_init();
    if($stmt->prepare($sql_query)) {    
        if(!empty($keyword)){
            $stmt->bind_param('s', $bind_keyword);
        }
        $stmt->execute();
        $stmt->store_result();
        $stmt->bind_result($data['org_id'], 
                $data['org_name'], 
                $data['org_type_name'],
                $data['org_about'], 
                $data['org_image'],
                $data['org_email'],
                $data['org_phone'],
                $data['org_fb'],
                $data['org_web'],
                $data['org_location'] 
                );
                
        $total_records = $stmt->num_rows;
    }
?>
<section class="content">
    <div class="container-fluid">
        
        <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="card">
                    <div class="header">
                        <h2>
                            БАЙГУУЛЛАГЫН ЖАГСААЛТ
                        </h2>
                        <ul class="header-dropdown m-r--5">
                            <li class="dropdown">
                                <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <i class="material-icons">more_vert</i>
                                </a>
                                <ul class="dropdown-menu pull-right">
                                    <li><a href="javascript:void(0);">Action</a></li>
                                    <li><a href="javascript:void(0);">Another action</a></li>
                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="body table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <!--<th>#</th>-->
                                    <th>НЭР</th>
                                    <th>ЗУРАГ</th>
                                    <th>УТАС</th>
                                    <th>МЭЙЛ</th>
                                    <th>ТОХИРГОО</th>
                                </tr>
                            </thead>
                            <tbody>
                            <?php while ($stmt->fetch()){ ?>
   
                                <tr>
                                    <!--<th scope="row"><?php echo $data['org_id'];?></th>-->
                                    <td><?php echo $data['org_name'];?></td>
                                    <td><img src="<?php echo $data['org_image']; ?>" width="60" height="40"/></td>
                                    <td><?php echo $data['org_phone'];?></td>
                                    <td><?php echo $data['org_email'];?></td>
                                    <td><a href="organization.php?id=<?php echo $data['org_id'];?>">
                                            <i class="material-icons">visibility</i>
                                        </a>&nbsp;
                        
                                        <a href="organization-edit.php?id=<?php echo $data['org_id'];?>">
                                            <i class="material-icons">edit</i>
                                        </a>&nbsp;
                        
                                        <a href="organization-delete.php?id=<?php echo $data['org_id'];?>">
                                            <i class="material-icons">delete</i>
                                        </a>
                                    </td>
                                </tr>
                                
                            <?php } ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>