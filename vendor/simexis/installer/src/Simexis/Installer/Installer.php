<?php 

namespace Simexis\Installer;

class Installer {
	
    /**
     * The application instance.
     *
     * @var \Illuminate\Contracts\Foundation\Application
     */
    protected $app;
	
    /**
     * @var \Simexis\Installer\Helper\FileManager
     */
    protected $file_manager;

    /**
     * Create a new service provider instance.
     *
     * @param  \Illuminate\Contracts\Foundation\Application  $app
     * @return void
     */
    public function __construct($app)
    {
        $this->app = $app;
    }
	
    /**
     * @return \Simexis\Installer\Helper\FileManager
     */
    public function getFileManager()
    {
        if(!$this->file_manager)
			$this->file_manager = new \Simexis\Installer\Helpers\FileManager($this);
		return $this->file_manager;
    }
	
    /**
     * @param  string $key
     * @return mixed
     */
    public function config($key)
    {
        return $this->app['config']->get('installer.' . $key);
    }

}
