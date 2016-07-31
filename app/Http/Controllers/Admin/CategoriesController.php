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
        $this->middleware('DemoAdmin', ['only' => ['delete', 'addnew']]);

        parent::__construct();

    }

    public function index(Request $request)
    {

        $newscategories = Categories::byType('news')->orderBy('name')->get();
        $listcategories = Categories::byType('list')->orderBy('name')->get();
        $pollcategories = Categories::byType('poll')->orderBy('name')->get();
        $videocategories = Categories::byType('video')->orderBy('name')->get();

        $category="";

        if($request->query('edit')){
            $category = Categories::findOrFail($request->query('edit'));
        }


        return view('_admin.pages.categories', compact('newscategories','listcategories','pollcategories','videocategories','category'));

    }

    public function delete($id)
    {
        $pages = Categories::findOrFail($id);
        $pages->delete();

        \Session::flash('success.message', 'Устлаа');

        return redirect()->back();

    }

    public function addnew(Request $request)
    {

        $inputs = $request->all();
        $v = Validator::make($inputs, [
            'name' => 'required',
            'description' => 'min:5|max:500',
            'type' => 'required',
        ]);

        if ($v->fails()) {
            return \Redirect::back()->withErrors($v);
        }




        if(!empty($inputs['id'])){
            $cat = Categories::findOrFail($inputs['id']);

        }else{

            $cat = new Categories;

        }


       $slug= str_slug($inputs['name'], '-');

       $cat->name = $inputs['name'];
       $cat->name_slug = $slug;
       $cat->description = $inputs['description'];
       $cat->type = $inputs['type'];
       $cat->save();

        if(!empty($inputs['id'])){

            \Session::flash('success.message', 'Өөрчлөлтийг хадгаллаа');

            return redirect('admin/categories');
        }else{

            \Session::flash('success.message', 'Амжилттай нэмэгдлээ');

            return \Redirect::back();

        }
    }
}
