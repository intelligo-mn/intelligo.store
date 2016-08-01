<?php require_once("inc/config.php"); 

include("inc/header.php"); 
$yorumicerikid=$C_id;
include("request/yorumlarfunc.php"); 
?>
 <!-- comments -->
 <div id="comments">
 <div class="comments" style="position: relative"><div class="form-loader"></div>
 <?php
 $tumyorum=yorumget($yorumicerikid,"new",1,"user");
 if($tumyorum>""){
	 echo $tumyorum;
 }else{
	 echo '<div class="no-comment">No user comment!</div>';
 }

 ?>
 </div>
 </div>
 <?php 

include("inc/footer.php"); 
?>