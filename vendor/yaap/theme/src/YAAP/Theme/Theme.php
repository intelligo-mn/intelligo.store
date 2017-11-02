<?php namespace YAAP\Theme;

use Illuminate\Container\Container;
use Illuminate\View\ViewFinderInterface;
use YAAP\Theme\Exceptions\ThemeException;

/**
 * Class Theme
 * @package YAAP\Theme
 */
class Theme
{

    /**
     * The IoC Container
     *
     * @var Container
     */
    protected $app;

    /**
     * Default view finder
     *
     */

    protected $finder;

    /**
     * theme config
     *
     */
    protected $config;

    /**
     * parent themes
     *
     */
    protected $parents;

    /**
     *  cache for paths
     */
    protected $cache;

    /**
     *  current theme
     */
    protected $theme;

    /**
     * Build a new Theme manager
     *
     * @param Container $app
     * @param ViewFinderInterface $finder
     */
    public function __construct(Container $app, ViewFinderInterface $finder)
    {

        $this->app = $app;

        $this->finder = $finder;
    }


    /**
     *
     * Initialize a theme by name
     * @param $theme
     * @throws ThemeException
     */
    public function init($theme)
    {
        if (empty($theme)) throw new ThemeException('Theme name should not be empty');

        $this->theme = $theme;

        // read theme path
        $path = $this->app['config']->get('theme.path', base_path('resources/themes'));

        //init config
        $this->config = $this->_readConfig( $path . '/' . $theme . '/config.php');

        // theme parents
        $this->parents = array();

        while (!empty($theme)) {

            if (!is_dir($path . '/' . $theme)) throw new ThemeException('Theme '.$theme.' not found.');

            // add theme's root folder
            $this->finder->addLocation($path . '/' . $theme);

            // add folder with views
            $this->finder->addLocation($path . '/' . $theme . '/views');

            // read theme config
            $current_theme_config = $this->_readConfig($path . '/' . $theme . '/config.php');

            $theme = array_get($current_theme_config, 'inherit');

            if (!empty($theme)) {
                $this->parents[] = $theme;
            }
        }


    }

    /**
     * Returns the list of available themes names in an array.
     *
     * @return array
     */
    public function getList()
    {
        // read theme path
        $path = $this->app['config']->get('theme.path', base_path('resources/themes'));

        if (file_exists($path))
        {
            $dir_list = dir($path);
            while (false !== ($entry = $dir_list->read())) {
                if (file_exists($path . '/' . $entry . '/' . 'config.php'))
                    $list[] = $entry;
            }
        }

        return $list;

    }

    /**
     * Generate an asset path for current theme.
     *
     * @param $path
     * @param null $secure
     * @param bool $version
     * @throws Exceptions\ThemeException
     * @return mixed
     */
    public function asset($path, $secure = null, $version = false)
    {

        if (!$this->theme) throw new ThemeException('Theme should be init first');

        $full_path = $this->_assetFullpath($path);

        $asset = $this->app['url']->asset($full_path, $secure);

        if ($version) {

            if (is_bool($version)) {
                $asset .= '?v=' . $this->_assetVersion($path);
            } else {
                $asset .= '?v=' . $version;
            }
        }

        return $asset;

    }

    /**
     * Return filemtime of given asset or null if asset doesn't exists
     *
     * @param $path
     * @return int|null
     */
    private function _assetVersion($path)
    {

        $full_path = $this->_assetFullpath($path);

        $file_path = public_path($full_path);

        if (file_exists($file_path)) {
            return filemtime($file_path);
        }

        return null;
    }

    /**
     *
     * Try to find asset file in current theme or in parents
     *
     * @param $path
     * @return string
     */
    private function _assetFullpath($path)
    {

        $path = trim($path, '/');

        // alredy processed
        if (isset($this->cache[$path])) {
            return $this->cache[$path];
        }

        $assets_path = trim($this->app['config']->get('theme.assets_path', 'assets/themes'), '/');

        $full_path = $assets_path . '/' . $this->theme . '/' . $path;

        // theme has this asset
        if (!file_exists(public_path($full_path))) {

            $found = false;

            // loop over parents
            foreach ($this->parents as $parent) {

                $full_path = $assets_path . '/' . $parent . '/' . $path;

                if (file_exists(public_path($full_path))) {
                    $found = true;
                    break;
                }
            }

            // in case of failure to find asset - return default theme asset
            // (404 error will be signal of promlems)
            if (!$found) {
                $full_path = $assets_path . '/' . $this->theme . '/' . $path;
            }

        }

        $this->cache[$path] = $full_path;

        return $full_path;
    }

    /**
     * @param $path
     * @return array|mixed
     */
    private function _readConfig($path){
        if (file_exists($path))
                return include($path);

        return array();
    }

}
 