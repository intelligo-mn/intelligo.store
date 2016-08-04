<?php

namespace App\Http\Controllers\Admin;

use App\Categories;
use Validator;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class CategoriesController extends MainAdminController
{
    public function __construct()
    {
        // $this->middleware('DemoAdmin', ['only' => ['delete', 'addnew']]);

        parent::__construct();

    }

    public function index(Request $request)
    {

        $categories = Categories::where("main", '1')->orwhere("main", '2')->orderBy('order')->get();

        $category="";

        if($request->query('edit')){
            $category = Categories::findOrFail($request->query('edit'));
        }


        return view('_admin.pages.categories', compact('categories','category'));

    }

    public function delete($id)
    {
        $pages = Categories::findOrFail($id);

        if($pages->main==1 ){
            \Session::flash('success.message', 'You Can not Delete Main Types');

            return redirect()->back();
        }

        $pages->delete();

        \Session::flash('success.message', trans("admin.Deleted"));

        return redirect()->back();

    }

    public function addnew(Request $request)
    {

        $inputs = $request->all();
        $v = Validator::make($inputs, [
            'name' => 'required',
            'name_slug' => 'required',
            'description' => 'max:500'
        ]);

        if ($v->fails()) {
            return \Redirect::back()->withErrors($v);
        }


        if(!empty($inputs['type'])){
            $typo=$inputs['type'];
        }else{
            $typo=$inputs['name_slug'];
        }

        if(!empty($inputs['id'])){



            $cat = Categories::findOrFail($inputs['id']);

            if($cat->main==1 or $cat->main==2){
                $typo=$cat->type;
            }

        }else{


            $cat = new Categories;

            if(empty($inputs['type'])){
                $cat->main = '2';
                $typo = $inputs['name_slug'];
            }else{
                $cat->main = '0';
                $typo = $inputs['type'];
            }


        }



       $cat->order = isset($inputs['order']) ? $inputs['order'] : "";
       $cat->name = $inputs['name'];
       $cat->name_slug = $inputs['name_slug'];
       $cat->posturl_slug = isset($inputs['posturl_slug']) ? $inputs['posturl_slug'] : "";
       $cat->description = isset($inputs['description']) ? $inputs['description'] : "";
       $cat->type = $typo;
       $cat->icon = isset($inputs['icon']) ? $inputs['icon'] : "";
       $cat->disabled = isset($inputs['disabled']) ? $inputs['disabled'] : "0";
       $cat->save();

        if(!empty($inputs['id'])){

            \Session::flash('success.message', trans("admin.ChangesSaved"));

            return redirect('admin/categories');
        }else{

            \Session::flash('success.message', trans("admin.ChangesSaved"));

            return \Redirect::back();

        }

    }



}
