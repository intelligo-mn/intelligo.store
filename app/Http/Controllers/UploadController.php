<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;


class UploadController extends Controller
{

    public function __construct(){

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

            if($type!=='preview' and $imgmj=='image/gif'){

                $file->move(public_path() . '/'. $tmpFilePath. $hardPath, $tmpUserName.$tmpFileName);

                $path = '/'.$tmpFilePath .$hardPath . $tmpUserName. $tmpFileName;

            }else{

                    if($type=='entry'){

                        $img->resize(640, null, function ($constraint) {
                         $constraint->aspectRatio();
                         $constraint->upsize();
                        });

                    }else if($type=='preview'){

                        $img->fit(650, 370);

                    }


                $path = $tmpFilePath .$hardPath . $tmpUserName. md5($tmpFileName). '.jpg';

                $img->save($path);

                $path='/'.$path;
            }





            return response()->json(array('path'=> $path), 200);
        } else {
            return response()->json(array('error'=> 'Pick a image'),  200);
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
