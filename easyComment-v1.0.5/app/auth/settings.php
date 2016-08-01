<?php
require_once("../comments/inc/config.php"); 

if (!isset($_SESSION['oturumid'])){ 
		echo "Error";
	exit();
}
	
		$stmt  = $dbpdo->query("select * from uyeler where id = '$_SESSION[oturumid]' ");
		$yeni = $stmt->fetch();

		$id=$yeni["id"];
		$kulladi=$yeni["kulladi"];
		$yasne=$yeni["yasne"];
		$kayittarih=$yeni["kayittarih"];
		$isim=$yeni["isim"];
		$soyisim=$yeni["soyisim"];
		$seolinki=$yeni["seolinki"];
		$sehir=$yeni["sehir"];
		$cinsiyet=$yeni["cinsiyet"];
		$banlimi=$yeni["ban"];
		$email=$yeni["email"];
		$icon=$yeni["icon"];
		$social=$yeni["social"];
		$socialtip=$yeni["socialtip"];
		$cinsiyet=$yeni["cinsiyet"];
		$son_tarih=$yeni["son_tarih"];
		
		$gun ="";
		$ay ="";
		$yil = "";
		if($yasne>""){
		$gun = substr($yasne,6, 2);
		$ay = substr($yasne,4,2);
		$yil = substr($yasne,0, 4);
		}
?>
<!DOCTYPE html>
<html lang="en" id="js-content">
  
 <head>
    <meta charset="utf-8">
    <title>Signup</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes"> 
    
<link href="../assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="../assets/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />


    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
    
<link href="../assets/bootstrap/css/style.css" rel="stylesheet" type="text/css">
<link href="../assets/bootstrap/css/pages/signin.css" rel="stylesheet" type="text/css">

</head>

<body>

	<div class="navbar navbar-fixed-top">
	
	<div class="navbar-inner">
		
		<div class="container">
	
			
			<a class="brand" href="javascript:;">
			<img alt="<?php echo $db_sitemotto; ?>" style="max-height:20px" src="<?php echo $db_siteadres ?>app/assets/logo.png"> <span style="color:rgba(255,255,255,0.3);">|</span> Settings				
			</a>
	
		</div> <!-- /container -->
		
	</div> <!-- /navbar-inner -->
	
</div> <!-- /navbar -->


<div class="account-container register" style="background: #FFFFFF;">
					<ul class="nav nav-tabs">
						  <li class="active">
						    <a href="#formcontrols" data-toggle="tab">Settings</a>
						  </li>
						  <li class=""><a href="#jscontrols" data-toggle="tab">Info Settings</a></li>
					</ul>
						
	<div class="content clearfix" style="padding-top:0">

		<form action="#" method="post" onsubmit="return false;" >
				<div class="login-fields">
				
						<br>
						
							<div class="tab-content">
								<div class="tab-pane active" id="formcontrols">
											

							<div class="field">
								<label for="username">Username:</label>
								<input type="text" id="username" name="username" value="<?php echo $kulladi;?>" placeholder="Username" class="login" />
							</div> <!-- /field -->
							
							<div class="field">
								<label for="email">Email Address:</label>
								<input type="text" id="email" name="email" value="<?php echo $email;?>" placeholder="Email" class="login"/>
							</div> <!-- /field -->
							
							<div class="field">
								<label for="password">Password:</label>
								<input type="password" id="password" name="password" value="" placeholder="Password (Only if you want to change)" class="login"/>
							</div> <!-- /field -->
							
							</div>
								
							<div class="tab-pane" id="jscontrols">
									
						
				
				<div class="field">
					<label for="name">Name:</label>
					<input type="text" id="name" name="name" value="<?php echo $isim;?>" placeholder="Name" class="login" />
				</div> <!-- /field -->
				
				<div class="field">
					<label for="surname">Surname:</label>
					<input type="text" id="surname" name="surname" value="<?php echo $soyisim;?>" placeholder="Surname" class="login"/>
				</div> <!-- /field -->
				
				<div class="field">
					<label for="hometown">Town:</label>
					<input type="text" id="hometown" name="hometown" value="<?php echo $sehir;?>" placeholder="Hometown" class="login"/>
				</div> <!-- /field -->
					
			<div class="field">
					<label for="birthday">Birthday:</label>
							<select name="birthdayday" class="login" style="width: 50px">
					<?php
																			for ($sayi=1; $sayi<=31; $sayi++){
																				
																			if($gun==$sayi){$gunon="selected";}else{$gunon="";}
																			
																			echo '<option value="'.$sayi.'" '.$gunon.'>'.$sayi.'</option>';
																			$gunon="";
																			 }
																		?>
					</select>
					<select name="birthdaymouth" class="login" style="width: 120px"><option value="01" <?php if($ay=="01"){echo "selected";}?>>January</option><option value="02" <?php if($ay=="02"){echo "selected";}?>>February</option><option value="03" <?php if($ay=="03"){echo "selected";}?>>March</option><option value="04" <?php if($ay=="04"){echo "selected";}?>>April</option><option value="05" <?php if($ay=="05"){echo "selected";}?>>May</option><option value="06" <?php if($ay=="06"){echo "selected";}?>>June</option><option value="07" <?php if($ay=="07"){echo "selected";}?>>July</option><option value="08" <?php if($ay=="08"){echo "selected";}?>>August</option><option value="09" <?php if($ay=="09"){echo "selected";}?>>September</option><option value="10" <?php if($ay=="10"){echo "selected";}?>>October</option><option value="11" <?php if($ay=="11"){echo "selected";}?>>November</option><option value="12" <?php if($ay=="12"){echo "selected";}?>>December</option></select>
					<select name="birthdayyear" class="login" style="width: 96px">

					<?php
																		
																			for ($sayi=1950; $sayi<=2015; $sayi++){
																				
																			if($yil==$sayi){$yilon="selected";}else{$yilon="";}
																			
																			echo '<option value="'.$sayi.'" '.$yilon.'>'.$sayi.'</option>';
																			$yilon="";
																			 }
																		?></select>
				</div> <!-- /field -->

				<div class="field">
					<label for="gender">Gender:</label>
					<select id="gender" name="gender" class="form-control login" style="width: 295px;"><option value="<?php echo $cinsiyet;?>">(<?php echo $cinsiyet;?>)</option><option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option></select>
				</div> <!-- /field -->
				
			
			
					</div>
								
					</div>
						  
			
			
			</div> <!-- /login-fields -->
				<div class="field form-actions" style="margin:10px -28px -38px -28px;background-color:transparent">
					<label for="oldpassword">Current Password:</label>
					<input type="password" id="oldpassword" name="oldpassword" value="" placeholder="Current Password" class="login" style="width: 300px;"/>
							  
					<div class="login-actions">
											
						<button class="button btn btn-primary btn-large" onclick="PostSettings(this);">Save</button>
						
					</div> <!-- .actions -->
					
				</div> <!-- /field -->
			
		</form>
		
	</div> <!-- /content -->
	
</div> <!-- /account-container -->

<script type="text/javascript">var url = "<?php echo $db_siteadres ?>", type = true; </script>

<script src="../assets/bootstrap/js/jquery.min.js"></script>
<script src="../assets/bootstrap/js/bootstrap.js"></script>
<script src="../assets/signin.js"></script>


    <script>

    (function () {
        // https://gist.github.com/3108177
        var supportsGCS = "defaultView" in window.document && "getComputedStyle" in window.document.defaultView;

        function getStyle(element, property) {
            // `element.ownerDocument` returns the used style values relative to the
            // element's parent document (which may be another frame). `defaultView`
            // is required for Safari 2 support and when retrieving framed styles in
            // Firefox 3.6 (https://github.com/jquery/jquery/pull/524#issuecomment-2241183).
            var style = supportsGCS ? element.ownerDocument.defaultView.getComputedStyle(element, null) : element.currentStyle;
            return (style || element.style)[property];
        }

        function getWindowPadding() {
            // Based in part on
            // http://stackoverflow.com/questions/1275849/get-height-of-enter-browser-window-in-ie8

            if (window.outerHeight !== undefined) {
                return {
                    x: window.outerWidth - window.innerWidth,
                    y: window.outerHeight - window.innerHeight
                }
            }

            var docElem = document.documentElement;

            // Old browser (IE8 and below). Need to resize window, observe change in
            // clientWidth/Height in order to determine padding.
            var oldX = docElem.clientWidth;
            var oldY = docElem.clientHeight;

            // clientWidth/Height *will* be smaller than the current window size. But
            // not by much. I figure this is the least jarring size to pick.
            window.resizeTo(oldX, oldY);

            var padding = {
                x: oldX - docElem.clientWidth,
                y: oldY - docElem.clientHeight
            };

            // Restore window to original dimensions
            window.resizeTo(oldX + padding.x, oldY + padding.y);

            return padding;
        }

        function getScrollbarWidth() {
            // credits: http://davidwalsh.name/detect-scrollbar-width
            // Create the measurement node
            var scrollDiv = document.createElement("div");
            scrollDiv.className = "scrollbar-measure";
            document.body.appendChild(scrollDiv);

            // Get the scrollbar width
            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

            // Delete the DIV
            document.body.removeChild(scrollDiv);
            return scrollbarWidth;
        }

        if (window.resizeTo) {
            window.onload = function () {
				
                // Should only calculate document dimensions after page has fully loaded.
                // I've also observed some funky results without using setTimeout to wrap
                // the callback. Other applications seem to resize on a delay, so I suspect
                // this is necessary.
                setTimeout(function () {
                    var content = document.getElementById('js-content'),
                        buffer = 130,
                        width = content.offsetWidth,
                        height = content.offsetHeight,
                        padding = getWindowPadding(),
                        scrollWidth = getScrollbarWidth(),
                        viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                        viewportWidth = window.innerWidth || ((document.documentElement.clientWidth || document.body.clientWidth) + scrollWidth),
                        browser = window.outerHeight || viewportHeight;
				
                    // resize only when content is cropped
                    if(viewportHeight < height + buffer || viewportWidth < width) {
                        window.resizeTo(Math.max(width, viewportWidth), height + (browser - viewportHeight) + buffer);
                    }
                }, 250);
            }
        }
    }());
</script>

</body>

 </html>