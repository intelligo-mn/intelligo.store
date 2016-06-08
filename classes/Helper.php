// <?php
// class Helper
// {
// 	public static function makeArray($array = null){
// 		return is_array($array) ? $array : array($array);
// 	}

// 	public static function getPlug($file = null, $data = null){
// 		if (!empty($file)) {
// 			$file = ROOT_PATH.DS.'plugs'.DS.$file.'.php';
// 			if (is_file($file)) {
// 				ob_start();
// 				require_once($file);
// 				return ob_get_clean();
// 			}
// 		}
// 	}
// 	public static function clearString($string = null, $array = null){
// 		if (!empty($string) && !self::isEmpty($array)) {
// 			$array = self::makeArray($array);
// 			foreach ($array as $key => $value) {
// 				$string = str_replace($value, '', $string);
// 			}
// 			return $string;
// 		}
// 	}

// 	public static function isEmpty($value = null)
// 	{
// 		return empty($value) && !is_numeric($value) ? true : false;
// 	}
// }

<?php
class Helper {
	
	public static function encodeHTML($string, $case = 2) {
		switch($case) {
			case 1:
			return htmlentities($string, ENT_NOQUOTES, 'UTF-8', false);
			break;			
			case 2:
			$pattern = '<([a-zA-Z0-9\.\, "\'_\/\-\+~=;:\(\)?&#%![\]@]+)>';

			$textMatches = preg_split('/' . $pattern . '/', $string);

			$textSanitised = array();			

			foreach($textMatches as $key => $value) {
				$textSanitised[$key] = htmlentities(html_entity_decode($value, ENT_QUOTES, 'UTF-8'), ENT_QUOTES, 'UTF-8');
			}			
			foreach($textMatches as $key => $value) {
				$string = str_replace($value, $textSanitised[$key], $string);
			}			
			return $string;			
			break;
		}
	}
	
}