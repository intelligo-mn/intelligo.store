<?php
/**
* created by Toroo in 2015-12-3
*/
class Core
{
	public $objLanguage;
	public $lang_menu;

	public $objUrl;
	public $objNavigation;

	public $objAdmin;
	public $admin;

	public $navigation;
	
	public $navigation_1;
	public $navigation_2;
	public $navigation_3;
	
	public $meta_title;
	public $meta_description;
	public $meta_keywords;

	public $content;
	public $column;

	public $script;


	public function run(){

		$this->objLanguage = new language();
		$this->lang_menu = Helper::getPlug(
			'language',
			array('objLanguage' => $this->objLanguage)
		)

		$this->objUrl = new Url();
		$this->objNavigation = new Navigation($this->objUrl,$this->objLanguage);
		
		switch ($this->objUrl->module) {
			case 'panel':
				
				set_include_path(implode(PATH_SEPARATOR, array(
					realpath(TEMPLATE_PATH.DS.'admin'),
					get_include_path()
				)));
				$this_.runAdmin();
				break;
			
			default:
				set_include_path(implode(PATH_SEPARATOR, array(
					realpath(TEMPLATE_PATH.DS.'front'),
					get_include_path()
				)));
				$this->runFront();
				break;
		}
	}
	public function runFront(){
		$this->parseNavigation();
		$this->parseColumn();
	}
	public function parseNavigation(){
		$this->navigation_1 = $this->objNavigation->get(1);
		$this->navigation_2 = $this->objNavigation->get(2);
		$this->navigation_3 = $this->objNavigation->get(3);
	}
	public function parseColumn(){
		$array = array(
			'<img src="/media/images/new-radicals.jpg" alt="New radical"
				width="250" height="166" style="float:left;margin-bottom:17px;" />', 
			'<img src="/media/images/red-hot-chili-peppers.jpg" alt="Red Hot Chili Peppers"
				width="250" height="163" style="float:left;margin-bottom:17px;" />', 
			'<img src="/media/images/blur.jpg" alt="Blur"
				width="250" height="132" style="float:left;margin-bottom:17px;" />', 
			'<img src="/media/images/henry-rollins.jpg" alt="Henry rollins"
				width="250" height="167" style="float:left;margin-bottom:17px;" />', 
		);
		$keys = array_rand($array, 3);
		$this->column = $array[$keys[0]].$array[$keys[1]].$array[$keys[2]];
	}
}


















