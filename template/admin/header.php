<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title><?php echo $this->meta_title; ?></title>
	<meta name="description" content="<?php echo $this->meta_description; ?>" />
	<meta name="keywords" content="<?php echo $this->meta_keywords; ?>" />
	<meta name="robots" content="noindex, nofollow" />
	<link href="/admin/css/core.css" rel="stylesheet" type="text/css" />
	<!--[if lt IE 9]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>
<body>
<div id="pre-header">
	<div id="pre-header-container">
		<div id="logo">
			<a href="/" target="_blank">My Business</a>
		</div>
		<?php echo $this->lang_menu; ?>
	</div>
</div>
<div id="wrapper">
<?php if (Login::isLogged()) { ?>
<header>
	<div id="navigation-wrapper">
		<ul id="navigation">
			<li<?php echo $this->objNavigation->active('content'); ?>>
				<a href="/panel/content/c/pages/a/index">
					<?php echo $this->objLanguage->labels[8]; ?>
				</a>
				<dl>
					<dd>
						<a href="/panel/content/c/pages/a/index"
							<?php
								echo $this->objNavigation->active(
									'content', 
									array('c' => 'pages', 'a' => 'index')
								); 
							?>>
							<?php echo $this->objLanguage->labels[8]; ?>
						</a>
					</dd>
					<dd>
						<a href="/panel/content/c/pages/a/add"
							<?php 
								echo $this->objNavigation->active(
									'content', 
									array('c' => 'pages', 'a' => 'add')
								); 
							?>>
							<?php echo $this->objLanguage->labels[9]; ?>
						</a>
					</dd>
					<dd>
						<a href="/panel/content/c/pages/a/navigation"
							<?php 
								echo $this->objNavigation->active(
									'content', 
									array('c' => 'pages', 'a' => 'navigation')
								); 
							?>>
							<?php echo $this->objLanguage->labels[10]; ?>
						</a>
					</dd>
				</dl>
			</li>
			<?php if ($this->admin['access'] == 1) { ?>
				<li<?php echo $this->objNavigation->active('languages'); ?>>
					<a href="/panel/languages/c/languages/a/index">
						<?php echo $this->objLanguage->labels[11]; ?>
					</a>
					<dl>
						<dd>
							<a href="/panel/languages/c/languages/a/index"
								<?php 
									echo $this->objNavigation->active(
										'languages', 
										array('c' => 'languages', 'a' => 'index')
									); 
								?>>
								<?php echo $this->objLanguage->labels[62]; ?>
							</a>
						</dd>
						<dd>
							<a href="/panel/languages/c/languages/a/languages"
								<?php 
									echo $this->objNavigation->active(
										'languages', 
										array('c' => 'languages', 'a' => 'languages')
									); 
								?>>
								<?php echo $this->objLanguage->labels[12]; ?>
							</a>
						</dd>
						<dd>
							<a href="/panel/languages/c/languages/a/types"
								<?php 
									echo $this->objNavigation->active(
										'languages', 
										array('c' => 'languages', 'a' => 'types')
									); 
								?>>
								<?php echo $this->objLanguage->labels[81]; ?>
							</a>
						</dd>
					</dl>
				</li>
				<li<?php echo $this->objNavigation->active('admins'); ?>>
					<a href="/panel/admins/c/admins/a/index">
						<?php echo $this->objLanguage->labels[84]; ?>
					</a>
					<dl>
						<dd>
							<a href="/panel/admins/c/admins/a/index"
								<?php 
									echo $this->objNavigation->active(
										'admins', 
										array('c' => 'admins', 'a' => 'index')
									); 
								?>>
								<?php echo $this->objLanguage->labels[85]; ?>
							</a>
						</dd>
						<dd>
							<a href="/panel/admins/c/admins/a/add"
								<?php 
									echo $this->objNavigation->active(
										'admins', 
										array('c' => 'admins', 'a' => 'add')
									); 
								?>>
								<?php echo $this->objLanguage->labels[86]; ?>
							</a>
						</dd>
					</dl>
				</li>
			<?php } ?>
			<li style="float:right;">
				<a href="/panel/logout">
					<?php echo $this->objLanguage->labels[13]; ?>
				</a>
			</li>
		</ul>
	</div>
</header>
<?php } ?>
<div id="container">
	<div id="content">