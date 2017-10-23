<?php

namespace App\Http\Controllers\Admin;

use App\User;
use yajra\Datatables\Datatables;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class UsersController extends MainAdminController
{

    public function __construct(Request $request)
    {

        if(
            null !== $request->query('userlock')
            or null !== $request->query('userunlock')
            or null !== $request->query('useradmin')
            or null !== $request->query('userunadmin')
            or null !== $request->query('staff')
            or null !== $request->query('unstaff')
        ){

            $this->middleware('DemoAdmin', ['only' => ['users']]);
        }

        parent::__construct();

    }

    public function users(Request $request){

        if(null !== $request->query('userlock')){

            $post = User::findOrFail($request->query('userlock'));
            $post->usertype = 'banned';
            $post->save();
            \Session::flash('success.message', trans("admin.Banned"));
            return redirect()->back();

        }elseif(null !== $request->query('userunlock')){

            $post = User::findOrFail($request->query('userunlock'));
            $post->usertype = null;
            $post->save();
            \Session::flash('success.message', trans("admin.Unlocked"));
            return redirect()->back();

        }elseif(null !== $request->query('useradmin')){

            $post = User::findOrFail($request->query('useradmin'));
            $post->usertype = 'Admin';
            $post->save();
            \Session::flash('success.message', trans("admin.ChangesSaved"));
            return redirect()->back();

        }elseif(null !== $request->query('userunadmin')){

            $post = User::findOrFail($request->query('userunadmin'));
            $post->usertype = null;
            $post->save();
            \Session::flash('success.message', trans("admin.Nowuserisnotadmin"));
            return redirect()->back();

        }elseif(null !== $request->query('staff')){

            $post = User::findOrFail($request->query('staff'));
            $post->usertype = 'Staff';
            $post->save();
            \Session::flash('success.message', trans("admin.ChangesSaved"));
            return redirect()->back();

        }elseif(null !== $request->query('unstaff')){

            $post = User::findOrFail($request->query('unstaff'));
            $post->usertype = null;
            $post->save();
            \Session::flash('success.message', trans("admin.ChangesSaved"));
            return redirect()->back();

        }


        $typew = $request->query('only');

        return view('_admin.pages.users')->with(['type' =>$typew]);

    }


    /**
     * Process datatables ajax request.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getdata()
    {

        $type = \Request::query('only');

        $user = DB::table('users');
        $user->select('*');

        if($type=='admins'){
            $user->where('usertype', '=', 'Admin');
        }elseif($type=='staff'){
            $user->where('usertype', '=', 'Staff');
        }elseif($type=='banned'){
            $user->where('usertype','=', 'banned');
        }



        return Datatables::of($user)

            ->editColumn('icon', '<img src=" {{ makepreview($icon, \'s\', \'members/avatar\') }}" width="55" height="55">')

            ->editColumn('username', function ($user) {
                $type2="";$type3="";
                $type= '<a href="/profile/'.$user->username_slug.'"  target="_blank" > '.$user->username.'  </a><div class=clear></div>';

                if($user->facebookurl) {

                    $type2 = '<a href="'.$user->facebookurl.'" target=_blank class="btn btn-social-icon btn-facebook" style="height: 24px;width: 24px;margin-right:5px;margin-top:5px"><i class="fa fa-facebook" style="line-height: 24px;font-size: 1.2em;"></i></a>';

                }

                if($user->twitterurl) {

                    $type3 = '<a href="'.$user->twitterurl.'" target=_blank class="btn btn-social-icon btn-twitter" style="height: 24px;width: 24px;margin-top:5px;"><i class="fa fa-twitter" style="line-height: 24px;font-size: 1.2em;"></i></a>';

                }

                return $type.$type2.$type3;
            })

            ->editColumn('email', function ($user) {

                if (\Auth::user()->email == 'demo@admin.com') {

                    return trans("admin.youPERMISSION");
                }

                return $user->email;
            })



            ->addColumn('status', function ($user) {

                if($user->usertype=='Admin') {

                    return '<div class="label label-default">'.trans("admin.admin").'</div>';

                }elseif($user->usertype=='Staff') {

                    return '<div class="label label-warning">'.trans("admin.StaffEditor").'</div>';

                }elseif($user->usertype=='banned') {

                    return '<div class="label label-danger">'.trans("admin.Banned").'</div>';

                 }else{
                    return '<div class="label label-info">'.trans("admin.Member").'</div>';

                }


            })


            ->addColumn('action', function ($user) {

                $adminbutton=""; $staffbutton="";

               $editbutton=   '  <a href="/profile/'.$user->username_slug.'/settings"  target="_blank" class="btn btn-sm btn-success" role="button" data-toggle="tooltip" data-original-title="'.trans("admin.edit").'"><i class="fa fa-edit"></i></a>';

               if($user->usertype=='banned') {
                   $lockbutton=      ' <a class="btn btn-sm btn-default permanently" href="?userunlock='.$user->id.'" role="button" data-toggle="tooltip" data-original-title="'.trans("admin.UnlockUser").'"><i class="fa fa-unlock"></i></a>';
                   $adminbutton=  $lockbutton;
               }else{
                   $lockbutton=      ' <a class="btn btn-sm btn-danger permanently" href="?userlock='.$user->id.'" role="button" data-toggle="tooltip" data-original-title="'.trans("admin.lockUser").'"><i class="fa fa-lock"></i></a>';



                    if($user->usertype=='Admin') {
                        $adminbutton=     ' <a class="btn btn-sm btn-default " href="?userunadmin='.$user->id.'" role="button" data-toggle="tooltip" data-original-title="'.trans("admin.NotAdmin").'"><i class="fa fa-remove"></i></a>' ;
                    }else{
                        $adminbutton=  $lockbutton.   ' <a class="btn btn-sm btn-info " href="?useradmin='.$user->id.'" role="button" data-toggle="tooltip" data-original-title="'.trans("admin.MakeAdmin").'"><i class="fa fa-user-secret"></i></a>';

                        if($user->usertype=='Staff') {
                            $staffbutton=  ' <a class="btn btn-sm btn-default " href="?unstaff='.$user->id.'" role="button" data-toggle="tooltip" data-original-title="'.trans("admin.NotEditorStaff").'"><i class="fa fa-remove"></i></a>' ;
                        }else{
                            $staffbutton=  ' <a class="btn btn-sm btn-warning" href="?staff='.$user->id.'" role="button" data-toggle="tooltip" data-original-title="'.trans("admin.MakeEditorStaff").'"><i class="fa fa-thumbs-up"></i></a>';
                        }
                    }

               }


                return $editbutton.$adminbutton.$staffbutton;
            })


            ->make(true);

    }
}
