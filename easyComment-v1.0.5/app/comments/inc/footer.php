<script>var lang_1='<?php echo $lang["JS_1"];?>', lang_3='<?php echo $lang["JS_3"];?>';</script>
<script type="text/javascript">var url = "<?php echo $db_siteadres ?>", request_url = url + 'app/comments/request/', POSTid = '<?php echo $C_id;?>', POSTurl = '<?php echo $C_url;?>', AccessToken = '<?php echo $domainaccess;?>',  facebookAPP = '<?php echo $db_faceapcode;?>', commentapp = <?php  if($db_commentsappow=='0' ){  echo "true";}else{echo "false";} ?>; </script>
<script type="text/javascript" src="<?php echo $db_siteadres ?>app/assets/lib/jquery-min.js"></script>
<script type="text/javascript" src="<?php echo $db_siteadres ?>app/assets/main.71ab7ced045aa89c6dd78b5c360f771.js"></script>
</body>
</html>
<?php
ob_end_flush();
$dbpdo=null;
?>