<?php
class Helper
{
	public static function makeArray($array = null){
		return is_array($array) ? $array : array($array);
	}

	public static function getPlug($file = null, $data = null){
		if (!empty($file)) {
			$file = ROOT_PATH.DS.'plugs'.DS.$file.'.php';
			if (is_file($file)) {
				ob_start();
				require_once($file);
				return ob_get_clean();
			}
		}
	}
}