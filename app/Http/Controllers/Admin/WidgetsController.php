<?php

namespace App\Http\Controllers\Admin;

use App\Widgets;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class WidgetsController extends MainAdminController
{

    public function __construct()
    {

        $this->middleware('DemoAdmin', ['only' => ['delete', 'addnew']]);

        parent::__construct();

    }

    public function index(Request $request)
    {

        $widgets = Widgets::all();

        $widgeta="";

        if($request->query('edit')){
            $widgeta = Widgets::findOrFail($request->query('edit'));
        }

        return view('_admin.pages.widgets', compact('widgets','widgeta'));

    }


    public function delete($id)
    {
        $pages = Widgets::findOrFail($id);
        $pages->delete();

        \Session::flash('success.message', 'Deleted');
        return redirect('admin/widgets');

    }

    public function addnew(Request $request)
    {

        $inputs = $request->all();
        $v = \Validator::make($inputs, [
            'key' => 'required',
            'text' => 'required',
            'type' => 'required',
            'display' => 'required',
        ]);

        if ($v->fails()) {
            return \Redirect::back()->withErrors($v)->withInput($inputs);
        }

        if(!empty($inputs['id'])){
            $cat = Widgets::findOrFail($inputs['id']);

        }else{

            $cat = new Widgets;

        }

        $cat->key = $inputs['key'];
        $cat->text = $inputs['text'];
        $cat->type = $inputs['type'];
        $cat->display = $inputs['display'];
        $cat->save();

        if(!empty($inputs['id'])){

            \Session::flash('success.message', 'Changes Saved');

        }else{

            \Session::flash('success.message', 'Added');

        }
        return redirect('admin/widgets');
    }

}
