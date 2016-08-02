<?php

namespace Simexis\Installer\Helpers\Renderers;

use Simexis\Installer\Helpers\Render;

class AbstractRenderers{
	
	private $render;
	private $jsFiles = [];
	private $cssFiles = [];
	
	public function __construct(Render $render) {
		$this->render = $render;
	}
	
	public function getRender() {
		return $this->render;
	}

    /**
     * Get the last modified time of any assets.
     *
     * @param string $type 'js' or 'css'
     * @return int
     */
    public function getModifiedTime($type)
    {
        $files = $this->getAssets($type);

        $latest = 0;
        foreach ($files as $file) {
            $mtime = filemtime($file);
            if ($mtime > $latest) {
                $latest = $mtime;
            }
        }
        return $latest;
    }

    /**
     * Return assets as a string
     *
     * @param string $type 'js' or 'css'
     * @return string
     */
    public function dumpAssetsToString($type)
    {
        $files = $this->getAssets($type);

        $content = '';
        foreach ($files as $file) {
            $content .= file_get_contents($file) . "\n";
        }

        return $content;
    }

    /**
     * Returns the list of asset files
     *
     * @param string $type Only return css or js files
     * @param string $relativeTo The type of path to which filenames must be relative (path, url or null)
     * @return array
     */
    public function getAssets($type)
    {
		if(strtolower($type) == 'js')
			return $this->jsFiles;
		
		if(strtolower($type) == 'css')
			return $this->cssFiles;
		return [];
    }
	
    public function setAssets($asset, $type)
    {
		if($type == 'js')
			$this->jsFiles[$asset] = $asset;
		if($type == 'css')
			$this->cssFiles[$asset] = $asset;
		return $this;
    }
	
}