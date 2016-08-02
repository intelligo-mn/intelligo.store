<?php 

namespace Simexis\Installer\Helpers;

use Simexis\Installer\Helpers\Renderers\Javascript AS JavascriptRenderer;
use Simexis\Installer\Helpers\Renderers\Stylesheet AS StylesheetRenderer;

class Render {
	
	private $js_render;
	private $css_render;
	
	public function getJavascriptRenderer() {
		if(!$this->js_render)
			$this->js_render = new JavascriptRenderer($this);
		return $this->js_render;
	}
	
	public function getStylesheetRenderer() {
		if(!$this->css_render)
			$this->css_render = new StylesheetRenderer($this);
		return $this->css_render;
	}
	
    public function setAssets($asset)
    {
		$ext = strtolower(pathinfo($asset, PATHINFO_EXTENSION));
		if($ext == 'js')
			return $this->getJavascriptRenderer()->setAssets($asset, 'js');
		if($ext == 'css')
			return $this->getStylesheetRenderer()->setAssets($asset, 'css');
    }

    /**
     * Get the last modified time of any assets.
     *
     * @param string $type 'js' or 'css'
     * @return int
     */
    public function getModifiedTime($type)
    {
		if(strtolower($type) == 'js')
			return $this->getJavascriptRenderer()->getModifiedTime($type);

		if(strtolower($type) == 'css')
			return $this->getStylesheetRenderer()->getModifiedTime($type);

        return 0;
    }

}
