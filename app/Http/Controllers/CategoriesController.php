<?php

namespace app\Http\Controllers;

/*
 * Antvel - Categories Controller
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Category;
use App\Helpers\categoriesHelper;
use App\Helpers\File;
use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    private $form_rules = [
        'name'        => 'required|max:255',
        'description' => 'required|max:255',
        'status'      => 'required',
        'type'        => 'required',
    ];

    /**
     * Data filtering.
     *
     * @return array
     */
    private function formatData(Request $request)
    {
        $data = [
            'name'        => $request->input('name'),
            'description' => $request->input('description'),
            'status'      => $request->input('status'),
            'image'       => $request->input('image'),
            'icon'        => $request->input('icon'),
            'type'        => $request->input('type'),
        ];
        if ($data['type'] == 1) {
            $data['category_id'] = $request->input('parentg');
        } elseif ($data['type'] == 2) {
            $data['category_id'] = $request->input('parents');
        }
        if (!@$data['category_id']) {
            $data['category_id'] = null;
        }

        return $data;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $categories = \Cache::remember('categories_mothers', 25, function () {
            return Category::select('id', 'name')
                              ->childsOf('mothers')
                              ->actives()
                              ->get()->toArray();
        });

        if ($request->wantsJson()) {
            return json_encode($categories);
        }

        return redirect('wpanel/categories');
    }

    public function showList(Request $request)
    {
        $type = $request->get('show');
        $categories = Category::orderBy('name');
        switch ($type) {
            case 'store':
                $categories->store();
            break;
            case 'group':
                $categories->group();
            break;
        }
        $categories = $categories->get()->buildTree();
        $panel = [
            'left'   => ['width' => '2'],
            'center' => ['width' => '10'],
        ];

        return view('categories.home', compact('categories', 'panel'));
    }

    public function viewMenus($id = '')
    {
        $categories = Category::with('product')->lightSelection()->store()->full()->orderBy('name')->get()->toArray();
        $actualCategory = [];
        findfather($actualCategory, $categories, $id);
        $panel = [
            'left'   => ['width' => '3', 'class' => 'categories-panel'],
            'center' => ['width' => '9'],
        ];

        return view('categories.menus', ['panel' => $panel, 'categories' => orderByParents($categories), 'actualCategory' => $actualCategory]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $panel = [
            'left'   => ['width' => '2'],
            'center' => ['width' => '10'],
        ];

        $categoriesHelper = new categoriesHelper();

        $data = Category::select('name', 'id', 'type')->mothers()->orderBy('type')->get()->toArray();
        $data = $categoriesHelper->separateTypesCategories($data);
        $storeCategories = ['' => trans('categories.no_father')];
        $groupCategories = ['' => trans('categories.no_father')];
        foreach ($data['group'] as $row) {
            $groupCategories[$row['id']] = $row['name'];
        }
        foreach ($data['store'] as $row) {
            $storeCategories[$row['id']] = $row['name'];
        }

        return view('categories.new', ['categories' => $data, 'panel' => $panel, 'groupCategories' => $groupCategories, 'storeCategories' => $storeCategories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $this->validate($request, $this->form_rules);
        $data = $this->formatData($request);
        $category = Category::create($data);
        \Session::flash('message', trans('categories.insert_message'));

        return redirect('wpanel/categories');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $category = Category::find($id)->withFamilyTree()->withParentTree();

        if (\Request::wantsJson()) {
            return $category->toJson();
        }

        $panel = [
            'left'   => ['width' => '2'],
            'center' => ['width' => '10'],
        ];

        return view('categories.show', compact('category', 'panel'));
        //Vista a categoria unica
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $categoriesHelper = new categoriesHelper();
        $data = Category::where('id', '<>', $id)->mothers()->orderBy('type')->get()->toArray();
        $data = $categoriesHelper->separateTypesCategories($data);
        $panel = [
            'left'   => ['width' => '2'],
            'center' => ['width' => '10'],
        ];
        $storeCategories = ['' => trans('categories.no_father')];
        $groupCategories = ['' => trans('categories.no_father')];
        foreach ($data['group'] as $row) {
            $groupCategories[$row['id']] = $row['name'];
        }
        foreach ($data['store'] as $row) {
            $storeCategories[$row['id']] = $row['name'];
        }

        return view('categories.update', ['categories' => $data, 'category' => Category::find($id), 'panel' => $panel, 'groupCategories' => $groupCategories, 'storeCategories' => $storeCategories]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, $this->form_rules);
        $data = $this->formatData($request);
        $category = Category::find($id);
        $category->update($data);
        \Session::flash('message', trans('categories.update_message'));

        return redirect()->route('wpanel.category.show', [$id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        echo "<a href='".url('categories')."'>index</a>";
        $category = Category::find($id);
        $category->status = 0;
        $category->save();
    }

    public static function getRandId()
    {
        $category = Category::
            select(['id'])
            ->orderByRaw('RAND()')
            ->take(1)
            ->first();

        return $category->id;
    }

    /**
     *	upload image file.
     *
     *	@param Resquest 	file to upload
     *
     *	@return string
     */
    public function upload(Request $request)
    {
        $v = \Validator::make($request->all(), ['file' => 'image']);
        if ($v->fails()) {
            return $v->errors()->toJson();
        }

        return File::section('category_img')->upload($request->file('file'));
    }
}
