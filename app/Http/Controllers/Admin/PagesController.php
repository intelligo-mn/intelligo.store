<?php

namespace App\Http\Controllers\Admin;

use App\Pages;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class PagesController extends MainAdminController
{
    public function __construct()
    {
        $this->middleware('DemoAdmin', ['only' => ['delete', 'addnew']]);

        parent::__construct();

    }



    public function index()
    {
        $pages = Pages::all();

        return view('_admin.pages.pages', compact('pages'));
    }

    public function add()
    {
        return view('_admin.pages.pagesadd');
    }

    public function edit($id)
    {
        $page = Pages::findOrFail($id);

        return view('_admin.pages.pagesadd', compact('page'));
    }

    public function delete($id)
    {
        $pages = Pages::findOrFail($id);
        $pages->delete();

        \Session::flash('success.message', 'Амжилттай устгалаа');

        return redirect('admin/pages');

    }


    public function addnew(Request $request)
    {

        $input= $request->all();
        $v = \Validator::make($input, [
            'text' => 'required',
            'slug' => 'required|unique:pages,slug,'.$input['id'],
            'title' => 'required|unique:pages,title,'.$input['id'],
            'description' => 'required',
        ]);

        if ($v->fails()) {
            \Session::flash('error.message', $v->errors()->first());
            return redirect()->back()->withInput($input);
        }

        if(!empty($input['id'])){
            $pages = Pages::findOrFail($input['id']);

            $pages->title = $input['title'];
            $pages->slug = $input['slug'];
            $pages->description = $input['description'];
            $pages->text = $input['text'];
            $pages->footer = $input['footer'];
            $pages->save();

            \Session::flash('success.message', 'Өөрчлөлтийг хадгаллаа.');

            return redirect('admin/pages');
        }

        Pages::create($input);

        \Session::flash('success.message', 'Амжилттай нэмлээ');

        return redirect('admin/pages');
    }


}
