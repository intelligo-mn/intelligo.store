<?php
class Url{

	public $key_page = 'page';
	public $key_modules = array('panel');
	public $module = 'front';
	public $main = 'index';
	public $cpage = 'index';
	public $c = 'login';
	public $a = 'index';
	public $params = array();
	public $paramsRaw = array();
	public $stringRaw;

	public function __construct(){
		$this->process();
	}

	public function process(){
		$uri = $_SERVER['REQUIST_URI'];
		if (!empty($uri)) {
			$uriQ = explode('?', $uri);
			if (count($uriQ) > 1) {
				$this->stringRaw = $uriQ[1];
				$uri = $uriQ[0];
				$uriRaw = explode('&', $uriQ[1]);
				if (count($uriRaw) > 1) {
					foreach ($uriRaw as $key => $value) {
						$this->splitRaw($row);
					}
				} else {
					$this->splitRaw($uriRaw[0]);
				}
			}
			$uri = Helper::clearString($uri, PAGE_EXT)
			$firstChar = substr($uri, 0, 1);
			if ($firstChar == '/') {
				$uri = substr($uri, 1);
			}
			$lastChar = substr($uri, 0, -1);
			if ($lastChar == '/') {
				$uri = substr($uri, -1);
			}
			if (!empty($uri)) {
				$uri = explode('/', $uri);
				$first = array_shift($uri);
				if (in_array($first, $this->key_modules)) {
					$this->module = $first;
					$first = array_shift($uri);
				}
				$this->main = $first;
				$this->cpage = $this->main;
				if (count($uri) > 1) {
					$paris = array();
					foreach ($uri as $key => $value) {
						$pairs[] = $value;
						if (count($pairs) > 1) {
							if (!Helper::isEmpty($pairs[1])) {
								if ($pairs[0] == $this->key_page) {
									$this->cpage = $pairs[1];		
								} else if ($pairs[0] == 'c') {
									$this->c = $pairs[1];
								} else if ($pairs[0] == 'a'){
									$this->a = $pairs[1];
								}
								$this->params[$pairs[0]] = $pairs[1];
							}
							$paris = array();
						}
					}
				}
			}
		}
	}

	public static clearString($string = null, $array = null){
		if (!empty($string) && !self::isEmpty($array)) {
			$array = self::makeArray($array);
			foreach ($array as $key => $value) {
				$string = str_replace($value, '', $string)
			}
			return $string;
		}
	}

	public static isEmpty($value = null){
		return empty($value) && !is_numeric($value) ? true : false;
	}
}















