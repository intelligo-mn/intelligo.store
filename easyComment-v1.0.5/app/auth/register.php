<?php
require_once("../comments/inc/config.php"); 

$type ="";
if(isset($_GET["type"])){
$type = $_GET["type"]; 
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

<link href="../assets/fontawesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet">
    
<link href="../assets/bootstrap/css/style.css" rel="stylesheet" type="text/css">
<link href="../assets/bootstrap/css/pages/signin.css" rel="stylesheet" type="text/css">

</head>

<body>
<?php
if (isset($_SESSION['oturumid'])){ 

?>
  <script>
   
    (function () {
			alert("You are already logged in. Redirecting...");
           
                setTimeout(function () {
                    var content = document.getElementById('js-content'),
                        width = content.width;

                    if(<?php  if($type=='popup' ){  echo "true"; }else{ echo "false"; } ?>) {
                        window.close();
                    }else{
						window.location.href=url+"app/admin";
					}
                }, 250);
       
     
    }());
</script>
<?php
exit();
}	
?>
	<div class="navbar navbar-fixed-top">
	
	<div class="navbar-inner">
		
		<div class="container">
			
			<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
				<span class="fa fa-list-ul"></span>
			</a>
				
			<a class="brand" href="javascript:;">
			<img alt="<?php echo $db_sitemotto; ?>" style="max-height:20px" src="<?php echo $db_siteadres ?>app/assets/logo.png"> <span style="color:rgba(255,255,255,0.3);">|</span> Register				
			</a>	
			
			<div class="nav-collapse">
				<ul class="nav pull-right">
					<li class="">						
						<a href="login.php" class="">
							Already have an account? Login now
						</a>
						
					</li>
				</ul>
				
			</div><!--/.nav-collapse -->	
	
		</div> <!-- /container -->
		
	</div> <!-- /navbar-inner -->
	
</div> <!-- /navbar -->


<div class="account-container register">
	
	<div class="content clearfix">
	
		<form action="#" method="post" onsubmit="return false;">
		
			<div class="login-fields">
				
				<p>Create your free account:</p>
				
				<div class="field">
					<label for="firstname">Username:</label>
					<input type="text" id="username" name="username" value="<?php if (isset($_SESSION['social_username'])){ echo $_SESSION['social_username']; }?>" placeholder="Username" class="login" />
				</div> <!-- /field -->
				
				<div class="field">
					<label for="email">Email Address:</label>
					<input type="text" id="email" name="email" value="<?php if (isset($_SESSION['social_email'])){ echo $_SESSION['social_email']; }?>" placeholder="Email" class="login"/>
				</div> <!-- /field -->
				
				<div class="field">
					<label for="password">Password:</label>
					<input type="password" id="password" name="password" value="" placeholder="Password" class="login"/>
				</div> <!-- /field -->

				
			</div> <!-- /login-fields -->
			
			<div class="login-actions">
				
				<span class="login-checkbox">
					<input id="Field" name="Field" type="checkbox" class="field login-checkbox" value="First Choice" tabindex="4" />
					<label class="choice" for="Field">Agree with the Terms & Conditions.</label>
				</span>					
				<button class="button btn btn-primary btn-large" onclick="PostRegister(this);">Register</button>
				
			</div> <!-- .actions -->
			
		</form>
		
	</div> <!-- /content -->
	
</div> <!-- /account-container -->


<!-- Text Under Box -->
<div class="login-extra">
	Already have an account? <a href="login.php">Login to your account</a>
</div> <!-- /login-extra -->
<script type="text/javascript">var url = "<?php echo $db_siteadres ?>", type = <?php  if($type=='popup' ){  echo "true";}else{echo "false";} ?>; </script>

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