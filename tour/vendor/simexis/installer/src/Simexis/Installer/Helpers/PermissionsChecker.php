<?php 

namespace Simexis\Installer\Helpers;

class PermissionsChecker {

    /**
     * @var array
     */
    protected $results = [];
    /**
     * Set the result array permissions and errors.
     *
     * @return mixed
     */
    public function __construct()
    {
        $this->results['permissions'] = [];
        $this->results['errors'] = null;
    }
    /**
     * Check for the folders permissions.
     *
     * @param array $folders
     * @return array
     */
    public function check(array $folders)
    {
        foreach($folders as $folder)
        {
            if(!$this->getPermission($folder))
            {
                $this->addFileAndSetErrors($folder, 'no', false);
            } else {
                $this->addFile($folder, 'yes', true);
            }
        }
        return $this->results;
    }
    /**
     * Get a folder permission.
     *
     * @param $folder
     * @return string
     */
    private function getPermission($folder)
    { 
		$folder = base_path($folder);
		if(!is_dir($folder) && !is_file($folder))
			return false;
		if(is_dir($folder))
			return $this->isWritablePath(base_path(), $folder);
		if(is_file($folder))
			return $this->isFileWritable($folder);
        return substr(sprintf('%o', fileperms($folder)), -4);
    }
	
	private function isFileWritable($filename) { 
		if(is_writable($filename))
			return true;
		if(@chmod($filename, 0666))
			return true;
		return false;
    } 
	
	private function isWritablePath($home, $xpath) {
		$isOK = false;
		$path = trim($xpath);
		if ( ($path!="") && (strpos($path,$home)!==false)  && is_dir($path) && is_writable($path) ) {
			$tmpfile = "mPC_".uniqid(mt_rand()).'.writable';
			$fullpathname = str_replace('//','/',$path."/".$tmpfile);
			$fp = @fopen($fullpathname,"w");
			if ($fp !== false) {
				$isOK = true;
			}
			@fclose($fp);
			@unlink($fullpathname);
		}
		return $isOK;	
	}
	
    /**
     * Add the file to the list of results.
     *
     * @param $folder
     * @param $permission
     * @param $isSet
     */
    private function addFile($folder, $permission, $isSet)
    {
        array_push($this->results['permissions'], [
            'folder' => $folder,
            'permission' => $permission,
            'isSet' => $isSet
        ]);
    }
    /**
     * Add the file and set the errors.
     *
     * @param $folder
     * @param $permission
     * @param $isSet
     */
    private function addFileAndSetErrors($folder, $permission, $isSet)
    {
        $this->addFile($folder, $permission, $isSet);
        $this->results['errors'] = true;
    }
}
