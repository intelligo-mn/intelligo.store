<?php ob_start(); ?><!DOCTYPE html><html lang="en">
<head>
    <meta charset="utf-8">
    <title>easyComment - Php Comment Script</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes"> 
    
<link href="assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="assets/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />

<link href="assets/fontawesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
    
<link href="assets/bootstrap/css/style.css" rel="stylesheet" type="text/css">

</head>

<body id="js-content">
<?php 			
function dbcontrol(){

						$dsdler = explode("/app", $_SERVER['REQUEST_URI']);
									if(isset($dsdler[0])){
										$urlll=$dsdler[0];
									}else{
										die("Could not start script. Configuration files missing or not configured. You must check /app/install.php "); //or default to a language
										exit();
									}
									
			$langFile = $_SERVER['DOCUMENT_ROOT'] . $urlll .'/app/configuration/cong.ini';
			if(!file_exists($langFile)){
					
				   die("Could not start script. Configuration files missing or not configured. You must check /app/install.php "); //or default to a language
			}

			$cong = parse_ini_file($langFile);
			
	
			$db_adres="";$db_user="";$db_pass="";$db_table="";
			if(isset($cong["DB_SERVER"])){ $db_adres = $cong["DB_SERVER"]; }
			if(isset($cong["DB_USER"])){ $db_user = $cong["DB_USER"]; }
			if(isset($cong["DB_PASS"])){ $db_pass = $cong["DB_PASS"]; }
			if(isset($cong["DB_TABLE"])){ $db_table = $cong["DB_TABLE"]; }
			if($db_adres==""){$db_adres="localhost";}
			if($db_table==""){$db_table="some";}
		
			try {
			  $dbpdo = new PDO('mysql:host='.$db_adres.';dbname='.$db_table, $db_user, $db_pass);
			  $dbpdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING );
			  
			  
					if($dbpdo->query("select id from uyeler")->fetch()){
					header("Location: ?success=ok");exit();				
					}
			} catch (PDOException $e) {
				 
			}
							
			}		
				
?>
	<div class="navbar navbar-fixed-top">
	
	<div class="navbar-inner">
		
		<div class="container">

			
			<a class="brand" href="install.php">
			<img alt="easyComment" style="max-height:20px" src="assets/logo.png"> <span style="color:rgba(255,255,255,0.3);">|</span> Installation Wizard
			</a>		
			

	
		</div> <!-- /container -->
		
	</div> <!-- /navbar-inner -->
	
	</div> <!-- /navbar -->


<div class="main" style="margin-top:20px;border:0">
   <div class="main-inner">
     <div class="container">
	   <div class="row">
		<div class="span2">&nbsp;

        </div>
        <!-- /span4 --> 
		<div class="span8">
	
		<?php
				if (isset($_GET['cancel'])){ 
						
							ECHO '<div class="alert alert-error  alert-block"><button type="button" class="close" data-dismiss="alert">×</button> <strong>Canceled!</strong> Please feedback us.</code><bR>Email: info[at]akbilisim.com</div>';
							
							exit();
							
						}elseif (isset($_GET['success'])){ 
						
							ECHO '<div class="alert alert-success  alert-block"><button type="button" class="close" data-dismiss="alert">×</button> <strong>Success!</strong><bR> Database successfully create and configure. You can reach admin panel in <a href="admin">app/admin</a><bR>Please don\'t forget to delete install.php</div>';
							
							exit();
							
						}elseif (isset($_GET['error'])){ 
						
							ECHO '<div class="alert alert-error  alert-block"><button type="button" class="close" data-dismiss="alert">×</button> <strong>Error!</strong> '.$_GET["error"].'</div>';
						
						}elseif (isset($_GET['refresh'])){ 
						
							ECHO '<div class="alert alert-error  alert-block"><button type="button" class="close" data-dismiss="alert">×</button> <strong>Warning!</strong> Your database connection will reset?</div><a  href="?resetconnection" style="float:right;" class="btn btn-primary">OK GO!</a> <a class="btn" href="?cancel">Cancel</a>';
						
						exit();
						}
				
					
	
			
			
				
								$dsdler = explode("/app", $_SERVER['REQUEST_URI']);
									if(isset($dsdler[0])){
										$urlll=$dsdler[0];
									}else{
										die("Could not start script. Configuration files missing or not configured. You must check /app/install.php "); //or default to a language
										exit();
									}
							

			
			if (isset($_GET['resetconnection'])){ 
			
								$filepath = $_SERVER['DOCUMENT_ROOT'] .$urlll.'/app/configuration/cong.ini';
								$txt = file($filepath); 
								
								$content = file_get_contents($filepath);
							
								$rem='DB_SERVER =';
								$rem2='DB_USER =';
								$rem3='DB_PASS =';
								$rem4='DB_TABLE =';

								$remsiteurl='SITE_URL =http://'.$_SERVER['HTTP_HOST'].$urlll.'/';
	
								$newcontent = str_replace($txt[1], $rem . "\r\n", $content);
								$newcontent = str_replace($txt[2], $rem2 . "\r\n", $newcontent);
								$newcontent = str_replace($txt[3], $rem3 . "\r\n", $newcontent);
								$newcontent = str_replace($txt[4], $rem4 . "\r\n", $newcontent);
								$newcontent = str_replace($txt[7], $remsiteurl . "\r\n", $newcontent);
								
								file_put_contents($filepath, $newcontent);
								
								header("Location: ?ok=Reset is success. You can new database connection.");exit();
			
			}
			
			
			
					dbcontrol();
			
			
			
			if (isset($_GET['createdatabase'])){ 
					
							$dbhost=$_POST["dbhost"];
							$dbport=$_POST["dbport"];
							$dbname=$_POST["dbname"];
							$dbusername=$_POST["dbusername"];
							$dbpassword=$_POST["dbpassword"];
							$adminusername=$_POST["adminusername"];
							$adminpass=$_POST["adminpass"];
							$adminpassagain=$_POST["adminpassagain"];
							
							if ($adminpass!=$adminpassagain){
								 header("Location: ?error=Password not match");
							 
							exit();
							}
							
						if($dbhost=="" or $dbport=="" or $dbname=="" or $dbusername=="" or $adminusername=="" or $adminpass=="" or $adminpassagain==""){
										header("Location: ?information&error=Fields cant be empty.");exit();
						}else{
									
			
								
							try {
								$dbpdo = new PDO("mysql:host=$dbhost", $dbusername, $dbpassword);

								$dbpdo->exec("CREATE DATABASE IF NOT EXISTS `$dbname`;
										CREATE USER '$dbusername'@'localhost' IDENTIFIED BY '$dbpassword';
										GRANT ALL ON `$dbname`.* TO '$dbusername'@'localhost';
										FLUSH PRIVILEGES;") 
								or header("Location: ?information&error=Database Connection Error Details:". $dbpdo->errorInfo());

							} catch (PDOException $e) {
									header("Location: ?information&error=Database Connection Error Details:". $e->getMessage());
									die();
							}
								
								
							try {
							  $dbpdo = new PDO('mysql:host='.$dbhost.';dbname='.$dbname, $dbusername, $dbpassword);
							  $dbpdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING );
							} catch (PDOException $e) {
								  header("Location: ?information&error=Database Connection Error Details:". $e->getMessage());
								  die();
							}
	
					
							$return1 = $dbpdo->prepare("
							CREATE TABLE IF NOT EXISTS `begen` (
							  `id` int(11) NOT NULL AUTO_INCREMENT,
							  `icerikid` int(11) DEFAULT NULL,
							  `begenitip` varchar(11) DEFAULT NULL,
							  `kulladi` int(11) DEFAULT NULL,
							  `tarih` text,
							  `tiplike` varchar(15) NOT NULL,
							  PRIMARY KEY (`id`),
							  KEY `id` (`id`),
							  KEY `icerikid` (`icerikid`),
							  KEY `begenitip` (`begenitip`),
							  KEY `tiplike` (`tiplike`)
							) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=32 ;

							CREATE TABLE IF NOT EXISTS `pages` (
							  `id` int(11) NOT NULL AUTO_INCREMENT,
							  `tarih` text,
							  `pagetitle` varchar(255) NOT NULL,
							  `text` text,
							  `iceriktip` varchar(20) NOT NULL,
							  UNIQUE KEY `id_2` (`id`),
							  KEY `id` (`id`)
							) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

							CREATE TABLE IF NOT EXISTS `sikayet` (
							  `gonderen` varchar(50) DEFAULT NULL,
							  `id` int(11) NOT NULL AUTO_INCREMENT,
							  `icerikid` int(11) DEFAULT NULL,
							  `tarih` text,
							  PRIMARY KEY (`id`),
							  KEY `id` (`id`)
							) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

							CREATE TABLE IF NOT EXISTS `yorumlar` (
							  `id` int(11) NOT NULL AUTO_INCREMENT,
							  `yorum` text NOT NULL,
							  `ekleyen` int(11) DEFAULT NULL,
							  `tarih` varchar(15) DEFAULT NULL,
							  `tip` varchar(255) NOT NULL,
							  `domainaccess` varchar(100) NOT NULL,
							  `icerikid` varchar(255) DEFAULT NULL,
							  `spoiler` int(1) NOT NULL DEFAULT '0',
							  `onay` int(2) NOT NULL DEFAULT '0',
							  `u_name` varchar(100) DEFAULT NULL,
							  `u_email` varchar(100) DEFAULT NULL,
							  PRIMARY KEY (`id`),
							  KEY `id` (`id`),
							  KEY `icerikid` (`icerikid`),
							  KEY `ekleyen` (`ekleyen`)
							) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=31 ;

							
							CREATE TABLE IF NOT EXISTS `uyeler` (
									  `id` int(11) NOT NULL AUTO_INCREMENT,
									  `kulladi` varchar(50) DEFAULT NULL,
									  `sifre` varchar(50) DEFAULT NULL,
									  `email` varchar(50) DEFAULT NULL,
									  `yasne` varchar(15) DEFAULT NULL,
									  `kayittarih` varchar(15) DEFAULT NULL,
									  `cinsiyet` varchar(50) DEFAULT NULL,
									  `isim` varchar(50) DEFAULT NULL,
									  `soyisim` varchar(50) DEFAULT NULL,
									  `icon` text,
									  `sehir` varchar(50) DEFAULT NULL,
									  `son_tarih` varchar(15) DEFAULT NULL,
									  `unvan` int(11) DEFAULT NULL,
									  `ipno` varchar(50) DEFAULT NULL,
									  `ban` int(11) DEFAULT NULL,
									  `social` varchar(250) DEFAULT NULL,
									  `socialtip` varchar(15) DEFAULT NULL,
									  `seolinki` varchar(250) DEFAULT NULL,
									  `hakkinda` varchar(255) DEFAULT NULL,
									  PRIMARY KEY (`id`),
									  KEY `id` (`id`)
									) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=84031 ;
							");
							$return1 = $return1->execute();
								
							$return1 = $dbpdo->prepare("TRUNCATE TABLE `begen`");
							$return1 = $return1->execute();	
							$return1 = $dbpdo->prepare("TRUNCATE TABLE `pages`");
							$return1 = $return1->execute();	
							$return1 = $dbpdo->prepare("TRUNCATE TABLE `sikayet`");
							$return1 = $return1->execute();	
							$return1 = $dbpdo->prepare("TRUNCATE TABLE `yorumlar`");
							$return1 = $return1->execute();	
							$return1 = $dbpdo->prepare("TRUNCATE TABLE `uyeler`");
							$return1 = $return1->execute();	
									
								
								
							$phptarih=date("YmdHis");
							$adminpass=md5($adminpass);
									
							$return = $dbpdo->prepare("INSERT INTO uyeler (kulladi,sifre,kayittarih,son_tarih,unvan,ban,seolinki) VALUES ('$adminusername' , '$adminpass' ,'$phptarih' , '$phptarih', '1', '0', '$adminusername')");
							$return->bindParam(":kulladi",$kulladi);
							$return = $return->execute();
							
								
								$filepath = $_SERVER['DOCUMENT_ROOT'] .$urlll.'/app/configuration/cong.ini';
								$txt = file($filepath); 
								
								$content = file_get_contents($filepath);
							
								$rem='DB_SERVER ='.$dbhost;
								$rem2='DB_USER ='.$dbusername;
								$rem3='DB_PASS ='.$dbpassword;
								$rem4='DB_TABLE ='.$dbname;

								$remsiteurl='SITE_URL =http://'.$_SERVER['HTTP_HOST'].$urlll.'/';
	
								$newcontent = str_replace($txt[1], $rem . "\r\n", $content);
								$newcontent = str_replace($txt[2], $rem2 . "\r\n", $newcontent);
								$newcontent = str_replace($txt[3], $rem3 . "\r\n", $newcontent);
								$newcontent = str_replace($txt[4], $rem4 . "\r\n", $newcontent);
								$newcontent = str_replace($txt[7], $remsiteurl . "\r\n", $newcontent);
								
								file_put_contents($filepath, $newcontent);
							
						
							header("Location: ?success=ok");exit();		
										
						}
			}
			
			
				if (isset($_GET['information'])){ 
						
					?>
			   <!-- /widget -->
          <div class="widget">
            <div class="widget-header"> <i class="icon-cong"></i>
              <h3>Databese Setting</h3>
            </div>
            <!-- /widget-header -->
            <div class="widget-content">
      
				<p><b>If the given database doesn't exist yet. Wizard will try to create it for you. But some server doesn't allow that. Dont worry, you can just create database using phpMyAdmin or other database admin tools than you can install with database you create. </b></p>
				
				<br><br>
				<form action="?createdatabase" method="post"  enctype="multipart/form-data">
							<fieldset>
							
										<div class="control-group">											
											<label class="control-label" for="dbhost">Database Host (Usually server ip or localhost)</label>
											<div class="controls">
												<input type="text" class="span6 " id="dbhost" name="dbhost" value="">
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
										<div class="control-group">											
											<label class="control-label" for="dbport">Database Port (Default 3306)</label>
											<div class="controls">
												<input type="text" class="span6 " id="dbport" name="dbport" value="3306">
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
										<div class="control-group">											
											<label class="control-label" for="dbname">Database Name</label>
											<div class="controls">
												<input type="text" class="span6 " id="dbname" name="dbname" value="">
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
										<div class="control-group">											
											<label class="control-label" for="dbusername">Database Username</label>
											<div class="controls">
												<input type="text" class="span6 " id="dbusername" name="dbusername" value="">
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
										<div class="control-group">											
											<label class="control-label" for="dbpassword">Database Password</label>
											<div class="controls">
												<input type="text" class="span6 " id="dbpassword" name="dbpassword" value="">
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
									<hr>
									<div class="control-group">											
											<label class="control-label" for="adminusername">Admin Username (Default admin)</label>
											<div class="controls">
												<input type="text" class="span6 " id="adminusername" name="adminusername" value="admin">
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
										<div class="control-group">											
											<label class="control-label" for="adminpass">Admin Password (Please select strong password)</label>
											<div class="controls">
												<input type="password" class="span6 " id="adminpass" name="adminpass" value="">
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
										<div class="control-group">											
											<label class="control-label" for="adminpassagain">Admin Password Repeat</label>
											<div class="controls">
												<input type="password" class="span6 " id="adminpassagain" name="adminpassagain" value="">
											</div> <!-- /controls -->				
									</div> <!-- /control-group -->
	
	
									<button type="submit" style="float:right;" class="btn btn-primary">Save</button> 
									<a class="btn" href="?cancel">Cancel</a>
						
								</fieldset>
						  </form>
						  
            </div>
            <!-- /widget-content --> 
          </div>
          <!-- /widget --> 		
					
		<?php }else{ ?>
							
						
		  
          <!-- /widget -->
          <div class="widget">
            <div class="widget-header"> <i class="icon-cong"></i>
              <h3>Installing easyComment</h3>
            </div>
            <!-- /widget-header -->
            <div class="widget-content">
      
				<p>Before getting started, application needs to be configured. You will need the following information to installation. If you don't know those infos, you can get from your hosting company. So what we need: </p>
				
				
				<ol>
				<li>Database host</li>
				
				<li>Datebase name</li>
				
				<li>Datebase username</li>
				
				<li>Datebase password</li>

				<li>and if not the default one than we need Datebase port number too</li>

				</ol>	
					
				<p><b>If the given database doesn't exist yet. Wizard will try to create it for you. But some server doesn't allow that. Dont worry, you can just create database using phpMyAdmin or other database admin tools than you can install with database name you create. </b></p>
				
				<a href="?cancel" class="btn">Cancel</a><a href="?information" style="float:right;" class="btn btn-primary">Let's Install</a>
            </div>
            <!-- /widget-content --> 
          </div>
          <!-- /widget --> 
	
		<?php } ?>
		  
       
	
        </div>
        <!-- /span4 --> 
		<div class="span2">&nbsp;
			

        </div>
        <!-- /span4 --> 
      </div>
      <!-- /row --> 
    </div>
    <!-- /container --> 
  </div>
  <!-- /main-inner --> 
</div>
<!-- /main -->


</body>
</html>
<?php
ob_end_flush();
$dbpdo=null;
?>