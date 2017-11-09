<?php 

namespace Simexis\Installer\Helpers;

class FileManager {
	
    /**
     * The application instance.
     *
     * @var \Simexis\Installer\Installer
     */
    protected $installer;

    /**
     * Create a new service provider instance.
     *
     * @param  \Simexis\Installer\Installer  $installer
     * @return void
     */
    public function __construct($installer)
    {
        $this->installer = $installer;
    }
	
    /**
     * Create installed file.
     *
     * @param $message
     * @return int
     */
    public function create($message)
    {
        return @file_put_contents(storage_path('installed'), $message);
    }
	
    /**
     * Update installed file.
     *
     * @param $message
     * @return int
     */
    public function update($message)
    {
        return $this->create($message);
    }
	
    /**
     * Check if the application is installed.
     *
     * @return bool
     */
    public function isInstalled()
    {
        return is_file(storage_path('installed'));
    }
	
    /**
     * getVersion
     *
     * @return false|string
     */
    public function getVersion()
    {
		if(!$this->isInstalled())
			return false;
        return file_get_contents(storage_path('installed'));
    }
	
    /**
     * Check if an update is available.
     *
     * @return bool
     */
    public function isUpdatable()
    {
		if(!$this->isInstalled())
			return false;
		return version_compare($this->getVersion(), $this->installer->config('last_version'), '<');
    }

}
