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
		}
	}
}