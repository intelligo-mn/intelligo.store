<?php
if (!empty($data['objLanguage'])) {
	$languages = $data['objLanguage']->getAll();
	if (!empty($languages)) {
?>
<form method="post">
	<select name="language" id="language">
		<?php foreach ($languages as $row) {?>
			<option value="<?php echo $row['id'];?>"
				<?php echo $row['id'] == $data['objLanguage']->language ? 'selected="selected"' : null;?>>
				<?php echo $row['Label'];?>
			</option>
		<?php }?>
	</select>
	
</form>
	
<?php } } ?>