<?php

namespace app\Helpers;

/*
 * Antvel - File Manager Helper
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use Symfony\Component\HttpFoundation\File\UploadedFile;

class FileUpload extends UploadedFile
{
    private $path = '';

    private function upload_this_file($path, $ext)
    {
        $code = '/'.\Auth::id().'/';
        // $code='\\'.md5(\Auth::id().'websarrollo_team'.\Auth::id()).'\\';
        $path2 = storage_path().'/files/'.$path.$code;
        if (!is_dir($path2)) {
            mkdir($path2);
        }
        $return = $this->move($path2, md5(time()).$ext);

        return explode('files/'.$path, str_replace('\\', '/', $return))[1];
    }

    public function uploadImage()
    {
        return $this->upload_this_file('img', '.jpg');
    }

    public function uploadKey()
    {
        return $this->upload_this_file('key_code', '.txt');
    }

    public function uploadSoftware()
    {
        return $this->upload_this_file('files_downloadable', '.zip');
    }
}
