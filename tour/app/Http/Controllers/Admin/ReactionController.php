<?php

namespace App\Http\Controllers\Admin;

use App\Reaction;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use App\Http\Requests;

class ReactionController extends MainAdminController
{


    public function __construct()
    {

        $this->middleware('DemoAdmin', ['only' => ['delete', 'addnew']]);

        parent::__construct();

    }

    public function index(Request $request, Reaction $reactions)
    {

        $reaction="";

        if($request->query('edit')){
            $reaction = Reaction::findOrFail($request->query('edit'));
        }


        $reactions = $reactions::all();

        return view('_admin.pages.reactions', compact('reactions', 'reaction'));

    }


    public function delete($id)
    {
        $pages = Reaction::findOrFail($id);
        $pages->delete();

        \Session::flash('success.message', trans("admin.Deleted"));
        return redirect('admin/reactions');

    }

    public function addnew(Request $request)
    {

        $inputs = $request->all();
        $v = \Validator::make($inputs, [
            'ord' => 'required',
            'name' => 'required',
            'reaction_type' => 'required',
            'display' => 'required',
        ]);

        if ($v->fails()) {
            return \Redirect::back()->withErrors($v)->withInput($inputs);
        }

        if(!empty($inputs['id'])){
            $react = Reaction::findOrFail($inputs['id']);
        }else{

            $retype = Reaction::where('reaction_type', $inputs['reaction_type'])->first();
            if($retype){
                \Session::flash('error.message', 'Slug must be Unique');
                return redirect('/admin/reactions');
            }

            $react = new Reaction;
        }

        if($request->hasFile('icon')) {
            $file = $request->file('icon');

            $icon_name = uniqid().'-'.$file->getClientOriginalName();

            $icon_url =  '/upload/media/' . $icon_name;

            if($file){

                $file->move(public_path() . '/upload/media/', $icon_name);

            }
        }else{
            $icon_url = $react->icon;
        }


        $react->ord = $inputs['ord'];
        $react->name = $inputs['name'];
        $react->reaction_type = $inputs['reaction_type'];
        $react->icon = $icon_url;
        $react->display = $inputs['display'];
        $react->save();

        if(!empty($inputs['id'])){

            \Session::flash('success.message', trans("admin.ChangesSaved"));

        }else{

            \Session::flash('success.message', trans("admin.SuccesfulyCreateted"));

        }
        return redirect('/admin/reactions');
    }
}
