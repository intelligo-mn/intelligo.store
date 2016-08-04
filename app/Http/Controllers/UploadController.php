<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;
use Illuminate\Contracts\Filesystem\Filesystem;

class UploadController extends Controller
{

    public function __construct(){

        parent::__construct();

        $this->s3url=awsurl();

        $this->middleware('auth');
    }


    public function newUpload(Request $request) {

        $inputs = $request->all();

        $type = $request->query('type');


        $v = $this->validator($inputs);

        if ($v->fails()) {
            return array('status' => 'Error', 'errors' => $v->errors()->first());
        }

        if($request->hasFile('file')) {
            $file = $request->file('file');

            $tmpUserName = Auth::user()->id .'-' ;

            $tmpTimeToken = time(); //for if same image was uploaded.

            $tmpFileName = $tmpTimeToken.'-'.$file->getClientOriginalName();

            $tmpFilePath = 'upload/tmp/';

            $hardPath =   date('Y-m') .'/'.date('d') .'/';


            if (!file_exists(public_path() .'/'.$tmpFilePath.$hardPath )) {
                $oldmask = umask(0);
                mkdir(public_path() .'/'. $tmpFilePath.$hardPath , 0777, true);
                umask($oldmask);
            }

            $img = Image::make($file);

            $imgmj = $img->mime();

            if($type!=='preview' and $type!=='answer' and $imgmj=='image/gif'){

                $file->move(public_path() . '/'. $tmpFilePath. $hardPath, $tmpUserName.$tmpFileName);

                $patha = '/'.$tmpFilePath .$hardPath . $tmpUserName. $tmpFileName;

            }else{

                    if($type=='entry'){

                        $img->resize(740, null, function ($constraint) {
                         $constraint->aspectRatio();
                         $constraint->upsize();
                        });

                    }else if($type=='preview'){

                        $img->fit(650, 370);

                    }else if($type=='answer'){

                        $img->fit(240, 240);

                    }


                $path = $tmpFilePath .$hardPath . $tmpUserName. md5($tmpFileName). '.jpg';

                $imgo= $img->save($path);

                $patha='/'.$path;


                if(env('APP_FILESYSTEM')=="s3"){

                    \Storage::disk('s3')->put($path, $imgo->stream()->__toString());

                    \File::delete(public_path($path));

                    $patha= $this->s3url.$path;
                }
            }

            return response()->json(array('path'=> $patha), 200);
        } else {
            return response()->json(array('error'=> 'Зураг сонгоно уу'),  200);
        }

    }



    /**
     * Validator of question posts
     *
     * @param $inputs
     * @return array|bool
     */
    protected function validator(array $inputs)
    {

        $rules = [
            'file' => 'required|mimes:jpg,jpeg,gif,png',
        ];


        return \Validator::make($inputs, $rules);
    }


}
