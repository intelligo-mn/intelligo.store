<?php
session_start();

require_once('config.php');

function __autoload($clas_name){
	$class = explode('_', $clas_name);
	$path = implode(DS, $class).'.php';
	@require_once($path);
}