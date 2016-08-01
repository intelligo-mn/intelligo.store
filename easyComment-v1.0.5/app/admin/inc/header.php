<?php 
require_once("cagir.php"); 
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Admin Panel</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<link href="../assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="../assets/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">
<link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600"
        rel="stylesheet">
<link href="../assets/fontawesome/css/font-awesome.min.css" rel="stylesheet">
<link href="../assets/bootstrap/css/style.css" rel="stylesheet">
<link href="../assets/bootstrap/css/dataTables.bootstrap.min.css" rel="stylesheet">
<link href="../assets/bootstrap/css/pages/dashboard.css" rel="stylesheet">
<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>
<body>
<?php $seokisim = explode("/", $_SERVER['REQUEST_URI']) ; 
$linksi="";
$seokisimnum=count($seokisim);
$seokisimnum=$seokisimnum-1;
if(isset($seokisim[$seokisimnum])){
$linksi=$seokisim[$seokisimnum];
}
?>
<div class="navbar navbar-fixed-top">
  <div class="navbar-inner">
    <div class="container"> <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"><span
                    class="fa fa-list-ul"></span> </a><a class="brand" href="index.php"><img alt="<?php echo $db_sitemotto; ?>" style="max-height:20px" src="<?php echo $db_siteadres ?>app/assets/logo.png"> <span style="color:rgba(255,255,255,0.3);">|</span> Admin Panel </a>
      <div class="nav-collapse">
        <ul class="nav pull-right">
		<li class="dropdown <?php if ($linksi=="" or $linksi=="index.php"){echo "active";}?>"><a href="index.php" ><i class="fa fa-dashboard"></i> <span>Dashboard</span> </a> </li>
        <li class="dropdown <?php if (substr($linksi,0,12)=="comments.php" or $linksi=="comments.php"){echo "active";}?>"><a href="comments.php" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-comment"></i> <span>Comments</span> <b class="caret"></b></a> 
		 <ul class="dropdown-menu">
              <li><a href="comments.php">All Comments</a></li>
              <li><a href="comments.php?unapproved">Pending Comments</a></li>
            </ul>
		</li>
        <li class="dropdown <?php if (substr($linksi,0,11)=="reports.php" or $linksi=="reports.php"){echo "active";}?>"><a href="reports.php"><i class="fa fa-list-alt"></i> <span>Reports</span> </a> </li>
        <li class="dropdown <?php if (substr($linksi,0,9)=="users.php" or $linksi=="users.php"){echo "active";}?>"><a href="users.php" ><i class="fa fa-user"></i> <span>Users</span> </a> </li>
		<?php 	if ($_SESSION['kimdir']=="1"){ ?>
		<li class="dropdown <?php if (substr($linksi,0,9)=="pages.php" or $linksi=="pages.php"){echo "active";}?>" ><a href="pages.php" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-file-text"></i> <span>Pages</span>  <b class="caret"></b></a> 
		  <ul class="dropdown-menu">
              <li><a href="pages.php?page=about">About Page</a></li>
              <li><a href="pages.php?page=help">Help Page</a></li>
              <li><a href="pages.php?page=terms">Terms Page</a></li>
              <li><a href="pages.php?page=privacy">Privacy Page</a></li>
            </ul>
		</li>
		 <li class="dropdown <?php if (substr($linksi,0,12)=="settings.php" or $linksi=="settings.php"){echo "active";}?>" ><a href="settings.php" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-cog"></i> <span>Settings</span>  <b class="caret"></b></a> 
		  <ul class="dropdown-menu">
              <li><a href="settings.php">General Settings</a></li>
              <li><a href="themes.php">Themes</a></li>
            </ul>
		</li>
		<?php } ?>
		<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> <?php echo $_SESSION["kulladi"]; ?> <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="users.php?user=<?php echo $_SESSION["oturumid"]; ?>">Profile</a></li>
              <li><a href="logout.php">Logout</a></li>
            </ul>
          </li>
        </ul>
      
      </div>
      <!--/.nav-collapse --> 
    </div>
    <!-- /container --> 
  </div>
  <!-- /navbar-inner --> 
</div>
<!-- /navbar -->