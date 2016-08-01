<?php
if (isset($_SESSION['kimdir'])){
	if ($_SESSION['kimdir']=="1" or $_SESSION['kimdir']=="5"){
		
	}else{
		?><script>
		   
			(function () {
						alert("You must be logged in as an administrator.. Redirecting to you home page...");

						setTimeout(function () {
						
								window.location.href="/";
							
						}, 250);
			   
			 
			}());
		</script>
		<?php

	exit();
	}
}else{
		?><script>
		   
			(function () {
						alert("You must be logged in as an administrator.. Redirecting to you login page...");

						setTimeout(function () {
						
								window.location.href="../auth/login.php";
							
						}, 250);
			   
			 
			}());
		</script>
		<?php

	exit();
	}
?>