<?php
require_once("../comments/inc/config.php"); 
include 'inc/header.php';

	if ($_SESSION['kimdir']=="1"){
		
	}else{
		?><script>
		   
			(function () {
						alert("You must be logged in as an administrator.. Modaretors can not access settings.");

						setTimeout(function () {
						
								window.location.href="index.php";
							
						}, 250);
			   
			 
			}());
		</script>
		<?php

	exit();
	}



?>
<link href="../assets/bootstrap/css/pages/themes.css" rel="stylesheet">
<div class="main">
	
	<div class="main-inner">

	    <div class="container">

		
	      <div class="row">
		  	<div class="span12">
	      			<div class="page-header">
					<h2 class="pull-left">
									  <i class="fa fa-eye red"></i>
									  <span>Themes</span>
					</h2> 
					  <div class="pull-right">
									  <ul class="breadcrumb">
										<li>
										  <a href="index.php">
											<i class="fa fa-home"></i>
										  </a>
										</li>
								 
										<li class="separator">
										  <i class="fa fa-angle-right"></i>
										</li>
										<li class="active">Themes</li>
									  </ul>
									</div>
					</div>
					<div class="clearfix"></div>
			
	      		
	     			
						<ul id="styleList" class="list-unstyled styles-list">
											<?php
										$dsdler = explode("/app", $_SERVER['REQUEST_URI']);
									if(isset($dsdler[0])){
										$urlll=$dsdler[0];
									}else{
										die("Could not start script. Configuration files missing or not configured. You must check /app/install.php "); //or default to a language
										exit();
									}				
											
											
									if (isset($_GET['success'])){ 
						
							ECHO '<div class="alert alert-success  alert-block"><button type="button" class="close" data-dismiss="alert">×</button> <strong>Success!</strong> Changes successfully saved.</div>';
						
						}elseif (isset($_GET['error'])){ 
						
							ECHO '<div class="alert alert-error  alert-block"><button type="button" class="close" data-dismiss="alert">×</button> <strong>Error!</strong> '.$_GET["error"].'</div>';
						
						}elseif (isset($_GET['changetheme'])){ 
						
							$re='11';
							$rem='THEME ='.$_GET["changetheme"];

							
						

								// Get text file contents as array of lines
								$filepath = $_SERVER['DOCUMENT_ROOT'] . $urlll .'/app/configuration/cong.ini';
								$txt = file($filepath); 
								// Get file contents as string
								$content = file_get_contents($filepath);
								//check post
								if (isset($re) && isset($rem)) {
								
									// Replace initial string (from $txt array) with $update in $content
									$newcontent = str_replace($txt[$re], $rem . "\n", $content);
									 file_put_contents($filepath, $newcontent);
									//success code
										header("Location: ?success");
								} else {
										header("Location: ?error");
								}
						
					
						
						}

			
						
				
								// themes folder
								$klasor = $_SERVER['DOCUMENT_ROOT'] . $urlll .'/app/assets/themes';
								
									
								// open the folder
								$klasor_ac = opendir($klasor) or die("$path doesnt exits");
								// list of inside the folder
								while ($file = readdir($klasor_ac)) 
								{
									if(!is_dir($file))
									{
									
								
										
										
									if($db_theme==""){
									 die("$db_theme theme doesnt exits");
									}if($db_theme==$file){$themecur="";
										$themestil="panel-primary";
										$themeset='<span id="basicCurrent" class="badge">
														Current
													</span>';
									}else{
									$themestil="panel-default";
										$themeset='<button id="retroApply" type="button" class="btn btn-primary btn-xs" onclick="location.href=\'?changetheme='.$file.'\'">
												<span class="fa fa-ok-sign fa fa-lg"></span>
												Select This
											</button>';
									}
									
										if(file_exists($klasor."/".$file."/preview.png"))
													{
													$preview= '<img id="basicPreview" src="../assets/themes/'.$file.'/preview.png" width="100%">';
													}
													else
													{
													$preview= 'No Previews images for this theme.';
													}
													
									if(file_exists($klasor."/".$file."/styles/main.css")){}else{$themeset= 'Missing style file';}	
										
									echo '
										<li class="style">
										
										<div class="panel '.$themestil.'">
										
											<div class="panel-heading">
												<span id="basicName" class="style-name">
													
													'.$file.'
												</span>
												<span class="pull-right">
													
													'.$themeset.'
													
												</span>
											</div>
											<div class="panel-body style-body">
												<div class="style-preview">
														
													'.$preview.'
														
												</div>
												
											</div>
										</div>
									</li>
										';		
									}
						
							
								}
								// close folder
								closedir($klasor_ac);
								

							?>
							
							
						
							
						</ul>
						
				
		    </div> <!-- /span12 -->     	
	      	
	      	
	      </div> <!-- /row -->
	
	    </div> <!-- /container -->
	    
	</div> <!-- /main-inner -->
    
</div>
    




<?php
 include 'inc/footer.php';

?>