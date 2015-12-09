<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title><?php echo $this->meta_title; ?></title>
	<meta name="description" content="<?php echo $this->meta_description; ?>" />
	<meta name="keywords" content="<?php echo $this->meta_keywords; ?>" />
	<link href="/css/core.css" rel="stylesheet" type="text/css" />
	<!--[if lt IE 9]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>
<body>
<div id="pre-header">
	<div id="pre-header-container">
		<div id="logo">
			<a href="/">My Business</a>
		</div>
		<?php echo $this->lang_menu; ?>
	</div>
</div>
<div id="wrapper">
<header>
	<div id="header" style="background-image:url(/images/headers/<?php echo $this->objLanguage->labels[3]; ?>)">
		
	</div>
	<?php echo $this->navigation_1; ?>
</header>
<div id="container">
	<section>
		<div id="left">
			
			<div class="column-item">
				<?php echo $this->navigation_2; ?>			
			</div>
			
			<?php echo $this->column; ?>
			
		</div>
	</section>
	<section>
		<div id="right">