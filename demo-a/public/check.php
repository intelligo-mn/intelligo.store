<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Checking minimum requirements</title>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"/>
    <style>
        body {
            background: #eeeeee;
        }
        #mainColumn {
            background: #ffffff;
            padding: 30px;
        }
    </style>
</head>
<body>

<div class="text-center" style="margin: 40px 0px;"><h1>Checking Minimum requirements</h1></div>

<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1" id="mainColumn">

            <?php

            /*
             * Check if everything is ok to run laravel
             */

            class Errors {
                public static $errors = array();
            }
            $checks = array();
            define('MIN_PHP_VERSION', 5.5);

            function check($name, $callback) {
                global $checks;
                $checks[] = $name;
                call_user_func($callback);
            }

            check("Need PHP version >=" . MIN_PHP_VERSION, function() {
                if(!version_compare(phpversion(), MIN_PHP_VERSION, '>=')) {
                    Errors::$errors[] = array(
                        'title' => 'PHP version error',
                        'message' => "Laravel requires a minimum PHP version of " . MIN_PHP_VERSION . '<br>' . "You current PHP version is " . phpversion() . " which is not supported"
                    );
                }
            });
    

            check("PDO_MYSQL Extension is required", function(){
                if(!extension_loaded('pdo_mysql')){
                    Errors::$errors[] = array(
                        'title' => "pdo_mysql Extension not loaded",
                        'message' => "Techstar CMS requires pdo_mysql PHP Extension "
                    );
                }
            });

            check("OpenSSL Extension is required", function(){
                if(!extension_loaded('openssl')){
                    Errors::$errors[] = array(
                        'title' => "OpenSSL Extension not loaded",
                        'message' => "Techstar CMS requires OpenSSL PHP Extension"
                    );
                }
            });
            check("MbString Extension is required", function(){
                if(!extension_loaded('mbstring')){
                    Errors::$errors[] = array(
                        'title' => "MbString Extension not loaded",
                        'message' => "Techstar CMS requires MbString PHP Extension "
                    );
                }
            });
            check("GD Extension is required", function(){
                if(!extension_loaded('gd')){
                    Errors::$errors[] = array(
                        'title' => "GD Extension not loaded",
                        'message' => "Techstar CMS requires GD PHP Extension "
                    );
                }
            });
            check("Fileinfo Extension is required", function(){
                if(!extension_loaded('fileinfo')){
                    Errors::$errors[] = array(
                        'title' => "Fileinfo Extension not loaded",
                        'message' => "Techstar CMS requires Fileinfo PHP Extension "
                    );
                }
            });
            check("Zip Extension is required", function(){
                if(!extension_loaded('zip')){
                    Errors::$errors[] = array(
                        'title' => "Zip Extension not loaded",
                        'message' => "Techstar CMS requires Zip PHP Extension "
                    );
                }
            });

            check("JSON module required", function(){
                if(!function_exists( 'json_encode' )) {
                    Errors::$errors[] = array(
                        'title' => "PHP JSON not available",
                        'message' => "PHP JSON should be enabled as we require json_encode and similar functions."
                    );
                }
            });

			if( ! ini_get('allow_url_fopen') ) {
					Errors::$errors[] = array(
						'title' => "allow_url_fopen must be ON",
						'message' => "allow_url_fopen should be enabled "
					);
			 } 

            ?>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <div class="panel-title">Checking requirements</div>
                </div>
                <div class="panel-body">
                    <ol>
                        <?php
                        foreach ($checks as $check) {
                        ?>
                            <li><?php echo $check; ?></li>
                        <?php
                        }
                        ?>
                    </ol>
                </div>
            </div>


            <?php
            if(empty(Errors::$errors)) {
                ?>
                <h2>Success! You are ready to Install</h2>
          
                <?php
            } else {
                ?>
                    <h2>Sorry! You are missing some requirements</h2><br/>
                <?php
                foreach (Errors::$errors as $error) {
                    ?>
                    <div class="panel panel-danger">
                        <div class="panel-heading">
                            <div class="panel-title">
                                <?php echo $error['title'] ?>
                            </div>
                        </div>
                        <div class="panel-body">
                            <?php echo $error['message'] ?>
                        </div>
                    </div>
                    <?php
                }
                ?>
                    <div class="text-center alert alert-warning">
                        <h3>Get them fixed</h3>
                        <p>Contact your hosting provider to fix them if possible or move to a different host that meets all the requirements stated above/</p>
                        <br/>
                    </div>
                <?php
            }

            ?>
        </div>
    </div>
</div>

<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

</body>
</html>