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

<div class="main">
	
	<div class="main-inner">

	    <div class="container">
	
	      <div class="row">
	      	
	      	<div class="span12">      		
	      		     <div class="page-header">
					<h2 class="pull-left">
									  <i class="fa fa-cog "></i>
									  <span>Settings</span>
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
										<li class="active">Settings</li>
									  </ul>
									</div>
					</div>
					<div class="clearfix"></div>
	      		<div class="widget ">
	      			
					<div class="widget-content">

						
						
						<div class="tabbable">
						<ul class="nav nav-tabs" style="  background-color: #eee; margin: -21px -19px 0 -16px;">
						
						  <li class="active">
						    <a href="#core" data-toggle="tab">Core Settings</a>
						  </li>
						  <li ><a href="#allowedsites" data-toggle="tab">Allowed Domains</a></li>
						  <li ><a href="#social" data-toggle="tab">Social App Settings</a></li>
						   <li ><a href="#options" data-toggle="tab">Options</a></li>
						</ul>
						
						<br>
												<?php
						function write_php_ini($array, $file)
{
							$res = array();
							foreach($array as $key => $val)
							{
								if(is_array($val))
								{
									$res[] = "[$key]";
									foreach($val as $skey => $sval) {
										if (is_array($sval)) {
											foreach ($sval as $i=>$v) {
												$res[] = "{$skey}[$i] = $v";
											}
										}
										else {
											$res[] = "$skey = $sval";
										}
									}
								}
								else $res[] = "$key = $val";
							}
							safefilerewrite($file, implode("\r\n", $res));
						}

						//////
						function safefilerewrite($fileName, $dataToSave)
						{    
							 file_put_contents($fileName, $dataToSave, LOCK_EX);    
						}
						
						
						if (isset($_GET['success'])){ 
						
							ECHO '<div class="alert alert-success  alert-block"><button type="button" class="close" data-dismiss="alert">×</button> <strong>Success!</strong> Changes successfully saved.</div>';
						
						}elseif (isset($_GET['error'])){ 
						
							ECHO '<div class="alert alert-error  alert-block"><button type="button" class="close" data-dismiss="alert">×</button> <strong>Error!</strong> '.$_GET["error"].'</div>';
						
						}elseif (isset($_GET['updatesetting'])){ 
						
						
							$companyname=$_POST["companyname"];
							$email=$_POST["email"];
							$domainname=$_POST["domainname"];
							$facebookapi=$_POST["facebookapikey"];
							$twitterapi=$_POST["twitterapikey"];
							$googleapi=$_POST["googleapikey"];
							$commentsappow=$_POST["commentsappow"];
							$populercommentcount=$_POST["populercommentcount"];
							$commentsnumberperpage=$_POST["commentsnumberperpage"];
							$footerlinks=$_POST["footerlinks"];
							$db_guestcomment=$_POST["db_guestcomment"];
							$allowedsites=$_POST["allowedsites"];
							
										$asites="";
										foreach(explode("\r\n", $allowedsites) as $line){
										
											$asites=$asites."$line,";
											
										} 
										
							
							
								if (isset($_FILES['avatar']['tmp_name'])){
									require_once("../comments/inc/upload/uploadfunction.php"); 

									
									if(strlen($_FILES['avatar']['tmp_name']) !== 0){
									$resimdonen=resimgo($_FILES['avatar']['name'], $_FILES['avatar']['type'], $_FILES['avatar']['error'], $_FILES['avatar']['tmp_name'] , 'logo', "logo","","","");
									}
									
									if($resimdonen=="Invalid file"){
										header("Location: ?error=Logo image type must be: Gif,Png,Jpg.");exit();
									}else{
									
										$db_sitelogo=$resimdonen;
								
									}
								}
						
							
							$ini_array["Database"]["DB_SERVER"]=$db_adres;
							$ini_array["Database"]["DB_USER"]=$db_user;
							$ini_array["Database"]["DB_PASS"]=$db_pass;
							$ini_array["Database"]["DB_TABLE"]=$db_table;
							
							$ini_array["App"]["SITE_NAME"]=$companyname;
							$ini_array["App"]["SITE_URL"]=$domainname;
							$ini_array["App"]["SITE_LOGO"]=$db_sitelogo;
							$ini_array["App"]["SITE_EMAIL"]=$email;
							$ini_array["App"]["LANGUAGE"]=$db_lang;
							$ini_array["App"]["THEME"]=$db_theme;
								
							$ini_array["Social"]["FACEBOOK_API"]=$facebookapi;
							$ini_array["Social"]["TWITTER_API"]=$twitterapi;
							$ini_array["Social"]["GOOGLE_API"]=$googleapi;
							
							$ini_array["Options"]["COMMENT_APPROVALS"]=$commentsappow;
							$ini_array["Options"]["COMMENT_POPULERMAXCOUNT"]=$populercommentcount;
							$ini_array["Options"]["COMMENT_PERPAGEMAXCOUNT"]=$commentsnumberperpage;
							$ini_array["Options"]["COMMENT_FOOTERLINKS"]=$footerlinks;
							$ini_array["Options"]["COMMENT_ALLOWGUESTCOMMENT"]=$db_guestcomment;
							
							$ini_array["Sites"]["ALLOWED_DOMAINS"]=$asites;
														
							
							$dsdler = explode("/app", $_SERVER['REQUEST_URI']);
							if(isset($dsdler[0])){
								$urlll=$dsdler[0];
							}else{
								die("Could not start script. Configuration files missing or not configured. You must check /app/install.php "); //or default to a language
								exit();
							}

				
							$congFile = $_SERVER['DOCUMENT_ROOT'] . $urlll .'/app/configuration/cong.ini';
							 write_php_ini($ini_array, $congFile);
						
							header("Location: ?success");
						
						}
						?>
						<form action="?updatesetting" method="post"  enctype="multipart/form-data">
							<fieldset>
							<div class="tab-content">
								<div class="tab-pane active" id="core">
									
										
										<div class="control-group">											
											<label class="control-label" for="companyname">Site Name</label>
											<div class="controls">
												<input type="text" class="span6 " id="companyname" name="companyname" value="<?php echo $db_sitemotto ?>">
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
										
										
										<div class="control-group">											
											<label class="control-label" >Site Logo</label>
											<div class="controls">
												<p class="help-block"><img src="../assets/logo.png"></p> 
												<input type="file" class="span6" name="avatar" value="">
												
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
										
										
										<div class="control-group">											
											<label class="control-label" for="domainname">easyComment installation folder</label>
											<div class="controls">
												<input type="text" class="span6" id="domainname" name="domainname" value="<?php echo $db_siteadres ?>">
												<p class="help-block"><code>http://example.com/</code> or <code>http://comments.example.com/</code> or <code>http://www.example.com/comments/</code> vs</p> 
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
										
										
										<div class="control-group">											
											<label class="control-label" for="email">Contact Email Address</label>
											<div class="controls">
												<input type="text" class="span4" id="email" name="email" value="<?php echo $db_sitemailadres ?>">
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
										
										
										<br /><br />
										
										
									
								
								</div>								
								<div class="tab-pane" id="allowedsites">
									
										<?php
										$sites="";
										foreach(explode(",", $db_allowedsites) as $line){
										
											$sites=$sites."$line\r\n";
											
										} 
										
										?>
										<div class="control-group">											
											<label class="control-label" for="companyname">Allowed Domain Names</label>
											<div class="controls">
												<textarea type="text" class="span6" style="height:200px" id="allowedsites" name="allowedsites" ><?php echo $sites ?></textarea>
												<p>This is important to use! You must allow only your domain names. We don't want to other sites access our comment system. Do you?. <br>Then you have to just type your domain names as <code>http://yourdomainname.com</code> or <code>http://yoursubdomain.yourdomainname.com</code> to per line.</p>
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
										
				
								
								</div>
								
								<div class="tab-pane" id="social">
										<div class="control-group">											
											<label class="control-label" for="facebookapikey">Facebook API Key</label>
											<div class="controls">
												<input type="text" class="span6 " id="facebookapikey" name="facebookapikey" value="<?php echo $db_faceapcode ?>">
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
										<div class="control-group">											
											<label class="control-label" for="twitterapikey"><strike>Twitter API Key</strike> (will be in v2)</label>
											<div class="controls">
												<input type="text" class="span6 disabled" id="twitterapikey" name="twitterapikey" value="" disabled>
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
										<div class="control-group">											
											<label class="control-label" for="googleapikey"><strike>Google API Key</strike> (will be in v2)</label>
											<div class="controls">
												<input type="text" class="span6 disabled" id="googleapikey" name="googleapikey" value="" disabled>
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
										
								</div>
								<div class="tab-pane" id="options">
									<div class="control-group">											
											<label class="control-label" for="commentsappow">Using Comments approval system </label>
											<div class="controls">
											<select name="commentsappow" id="commentsappow" class="span6" style="width: 150px;">
												<option value="<?php echo $db_commentsappow ?>" selected=""> (<?php if($db_commentsappow==1){echo "No";}else{echo "Yes";} ?>)</option>
												<option value="0">Yes</option>
												<option value="1">No</option>
											</select>
											</div> <!-- /controls -->				
									</div> <!-- /control-group -->
									
									<div class="control-group">											
											<label class="control-label" for="populercommentcount">Limit the number of popular comments</label>
											<div class="controls">
												<input type="text" class="span6 " id="populercommentcount" name="populercommentcount" value="<?php echo $db_populercommentcount ?>">
											</div> <!-- /controls -->				
									</div> <!-- /control-group -->
										
									<div class="control-group">											
											<label class="control-label" for="commentsnumberperpage">Limit the number of comments per page</label>
											<div class="controls">
												<input type="text" class="span6 " id="commentsnumberperpage" name="commentsnumberperpage" value="<?php echo $db_commentsnumberperpage ?>">
											</div> <!-- /controls -->				
									</div> <!-- /control-group -->
											
									<div class="control-group">											
											<label class="control-label" for="footerlinks">Show Footer Links (About Page Link, Terms Page Link, Logo etc)</label>
											<div class="controls">
												<select name="footerlinks" id="footerlinks" class="span6" style="width: 150px;">
													<option value="<?php echo $db_footerlinks ?>" selected=""> (<?php if($db_footerlinks=="open"){echo "Open";}else{echo "Close";} ?>)</option>
													<option value="open">Open</option>
													<option value="close">Close</option>
												</select>
											</div> <!-- /controls -->				
									</div> <!-- /control-group -->
									
									<div class="control-group">											
											<label class="control-label" for="db_guestcomment">Guest Comments</label>
											<div class="controls">
												<select name="db_guestcomment" id="db_guestcomment" class="span6" style="width: 150px;">
													<option value="<?php echo $db_guestcomment ?>" selected=""> (<?php if($db_guestcomment=="open"){echo "Open";}else{echo "Close";} ?>)</option>
													<option value="open">Open</option>
													<option value="close">Close</option>
												</select>
												
											</div> <!-- /controls -->				
									</div> <!-- /control-group -->
									
								</div>
								<div class="form-actions" style="    background-color: #F9F9F9;margin-bottom: -32px;margin-left: -14px; margin-right: -14px;">
											<button type="submit" class="btn btn-primary">Save</button> 
											<a class="btn" href="index.php" style="float:right">Cancel</a>
								</div> <!-- /form-actions -->
								</fieldset>
							</div>
						  </form>
						  
						</div>
						
						
						
						
						
					</div> <!-- /widget-content -->
						
				</div> <!-- /widget -->
	      		
		    </div> <!-- /span8 -->
	      	
	      	
	      	
	      	
	      </div> <!-- /row -->
	
	    </div> <!-- /container -->
	    
	</div> <!-- /main-inner -->
    
</div> <!-- /main -->
    




<?php
 include 'inc/footer.php';
 
 $pagegone="?page=yorum";
?><script type="text/javascript" charset="utf-8">
	
			$(document).ready(function() {
					$('#example').dataTable( {
					 "order": [ 1, 'desc' ], 
					"bProcessing": true,
					"bServerSide": true,
					"sAjaxSource": "posts/reports_processing.php<?php echo $pagegone ?>",
					"bPaginate":true, 
					"sPaginationType":"full_numbers",
					
					
					"fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
						
						
					  return nRow;
						
						}
					
					
				});
			
			});
		</script>	