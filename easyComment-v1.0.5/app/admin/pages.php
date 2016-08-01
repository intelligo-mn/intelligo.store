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

if(isset($_GET['page'])) {

	$page=$_GET['page'];
		
	if($page=="about"){$pagename= 'About Page';
	}elseif($page=="help"){$pagename= 'Help';
	}elseif($page=="terms"){$pagename= 'Terms';
	}elseif($page=="privacy"){$pagename= 'Privacy';
	}

		$rsqaj = $dbpdo->query("select * from pages where iceriktip = '$page'");
	
		if ($yeni = $rsqaj->fetch()) {
		$id=$yeni["id"];
		$text=$yeni["text"];
		$tarih=$yeni["tarih"];
		$iceriktip=$yeni["iceriktip"];
		}else{
		$id="";
		$text="";
		$tarih="";
		$iceriktip="";
		}
		
			?>

<div class="main">
	
	<div class="main-inner">

	    <div class="container">
	
	      <div class="row">
	      	
	      	<div class="span12">      		
	      		     <div class="page-header">
					<h2 class="pull-left">
									  <i class="fa fa-file-text"></i>
									  <span>Edit: <?php echo $pagename ?> </span>
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
										<li class="active">Pages</li>
									  </ul>
									</div>
					</div>
				<div class="clearfix"></div>
	      		<div class="widget ">
	      			
					<div class="widget-content">

						
							<?php
					
						if (isset($_GET['success'])){ 
						
							ECHO '<div class="alert alert-success  alert-block"><button type="button" class="close" data-dismiss="alert">×</button> <strong>Success!</strong> Changes successfully saved.</div>';
						
						}elseif (isset($_GET['error'])){ 
						
							ECHO '<div class="alert alert-error  alert-block"><button type="button" class="close" data-dismiss="alert">×</button> <strong>Error!</strong> '.$_GET["error"].'</div>';
						
						}elseif (isset($_GET['updatepage'])){ 
						
						
							$pagetip = $_POST["pagetip"];
							$uzunaciklama = $_POST["uzunaciklama"];


								if ($pagetip=="") {
								
								header("Location: ?page=$page&error=Empty fields.");exit();
							
								}

								$rsqaj = $dbpdo->query("select * from pages where iceriktip = '$pagetip'")->rowCount();
								
								
								if ($rsqaj=="") {
								
								 $dbpdo->exec("INSERT INTO pages (text,iceriktip,tarih) VALUES ('$uzunaciklama' , '$pagetip' , '$phptarih')");

								header("Location: ?page=$page&success=Created.");exit();
								}else{
									$dbpdo->exec("UpDate pages Set text = '$uzunaciklama', tarih = '$phptarih' where iceriktip = '$pagetip'");
								header("Location: ?page=$page&success=Updated.");exit();
								}

						
						}
						?>
						<form action="?page=<?php echo $page; ?>&updatepage" method="post"  enctype="multipart/form-data">
						<input name="pagetip" id="pagetip" type="hidden" value="<?php echo $page; ?>">
							<fieldset>
						
										<div class="control-group " style="width:100%">
												<b>Last Update:</b> <?php if($tarih==""){echo "This page not created.";}else{echo timeConvert($tarih); }?>
										</div>
										
										<div class="control-group">											
											<label class="control-label" for="companyname">Text</label>
											<div class="controls">
												
												<textarea name="uzunaciklama" id="uzunaciklama" style="width:100%;height:400px"><?php echo $text ?></textarea>
	
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
										
										
									
								<div class="form-actions" style="    background-color: #F9F9F9;margin-bottom: -32px;margin-left: -14px; margin-right: -14px;">
											<button type="submit" class="btn btn-primary">Save</button> 
											<a class="btn" href="index.php" style="float:right">Cancel</a>
								</div> <!-- /form-actions -->
							</fieldset>
						
						  </form>
						  
						
						
						
						
						
					</div> <!-- /widget-content -->
						
				</div> <!-- /widget -->
	      		
		    </div> <!-- /span8 -->
	      	
	      	
	      	
	      	
	      </div> <!-- /row -->
	
	    </div> <!-- /container -->
	    
	</div> <!-- /main-inner -->
    
</div> <!-- /main -->
    

			<?php }else{ ?>
	
			<?php } ?>

	
<?php
 include 'inc/footer.php';
?>