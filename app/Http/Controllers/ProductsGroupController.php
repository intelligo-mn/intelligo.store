<?php

namespace app\Http\Controllers;

/*
 * Antvel - Products Group Controller
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;

class ProductsGroupController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $id = $request->get('id');
        $group = $request->get('group');
        $group_id = false;

        $product = Product::select('id', 'products_group', 'price')
                            ->with(['group' => function ($query) {
                                $query->select('id', 'products_group');
                            }])
                            ->find($id);

        //is necesary re make the actual group before add to new one because is the principal product of the last one
        if ($product->products_group == $id &&
            count($product->group) > 1 &&
            $product->products_group != $group) {
            $newPrincipal = Product::select('id')
                                    ->where('products_group', $id)
                                    ->where('id', '<>', $id)
                                    ->first();

            $group_id = $newPrincipal->id;

            Product::where('products_group', $id)->update(['products_group' => $group_id]);
        } elseif ($product->products_group == $group) {
            return;
        }

        if (!$group_id) {
            $group = Product::select('id', 'products_group')->find($group);

            if (is_null($group->products_group)) {
                $group->products_group = $group->id;
                $group->save();
            }

            $group_id = $group->products_group;
        }

        $product->products_group = $group_id;
        $product->save();

        return json_encode(['price'        => \Utility::showPrice($product->price),
                            'label_delete' => trans('product.delete_from_group'),
                            'message'      => trans('product.product_successfully_grouped'), ]);
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
        $product = Product::select('id', 'products_group', 'name')
                            ->with(['group' => function ($query) {
                                $query->select('id', 'products_group', 'features', 'name', 'price');
                            }])
                            ->find($id);

        return view('products.groups.index', compact('product'));
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
        $group_id = false;
        $id = explode('_', $id);
        $view = $id[1];
        $id = $id[0];
        $deleteAll = $view == $id;
        $product = Product::select('id', 'products_group')
                            ->with(['group' => function ($query) {
                                $query->select('id', 'products_group');
                            }])
                            ->find($id);

        //is necesary re make the actual group before add to new one because is the principal product of the last one
        if ($product->products_group == $id && count($product->group) > 1) {
            $newPrincipal = Product::select('id')
                                    ->where('products_group', $id)
                                    ->where('id', '<>', $id)
                                    ->first();

            $group_id = $newPrincipal->id;

            Product::where('products_group', $id)->update(['products_group' => $group_id]);
        }

        $product->products_group = null;
        $product->save();

        return json_encode(['deleteAll' => ($deleteAll ? true : false),
                            'message'   => trans('product.product_was_deleted_from_this_group'), ]);
    }
}
