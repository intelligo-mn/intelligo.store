<?php

namespace app\Helpers;

/**
 * Antvel - Categories Validation Helper.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
class categoriesHelper
{
    public static function separateTypesCategories($data)
    {
        $array = ['group' => [], 'store' => []];
        foreach ($data as $row) {
            if ($row['type'] == 'group') {
                $array['group'][] = $row;
            } elseif ($row['type'] == 'store') {
                $array['store'][] = $row;
            }
        }

        return $array;
    }

    public static function orderByParents($data, $posible = [])
    {
        $total = count($data);
        $num = 0;
        $list = '';
        $array = [];
        if (count($posible)) {
            foreach ($data as $row) {
                $row['sub'] = [];
                if (!$row['category_id'] && array_key_exists($row['id'], $posible)) {
                    $row['numProducts'] = $posible[$row['id']];
                    $array[] = $row;
                    $num++;
                    $list .= $row['id'].'-';
                }
            }
        } else {
            foreach ($data as $row) {
                $row['sub'] = [];
                if (!$row['category_id']) {
                    $array[] = $row;
                    $num++;
                    $list .= $row['id'].'-';
                }
            }
        }
        if ($num < $total) {
            for ($i = 0; $i < count($array); $i++) {
                self::findChildren($array[$i], $data, $list, false, $posible);
            }
        }

        return $array;
    }

    public static function findChildren(&$father, $array, $list, $noSub = false, $posible = [])
    {
        foreach ($array as $row) {
            if (strpos($row['id'], $list) === false) {
                if ($noSub) {
                    if ($row['category_id'] == $noSub) {
                        $list = self::findChildren($father, $array, $list, $row['id']);
                        $father[] = $row['id'];
                        $list .= $row['id'].'-';
                    }
                } elseif (count($posible) && array_key_exists($row['id'], $posible) && $row['category_id'] == $father['id']) {
                    $list = self::findChildren($row, $array, $list);
                    $row['numProducts'] = $posible[$row['id']];
                    $father['sub'][] = $row;
                    $list .= $row['id'].'-';
                } elseif ($row['category_id'] == $father['id']) {
                    $list = self::findChildren($row, $array, $list);
                    $father['sub'][] = $row;
                    $list .= $row['id'].'-';
                } else {
                    continue;
                }
            }
        }

        return $list;
    }

    public static function findfather(&$son, $array, $id)
    {
        foreach ($array as $row) {
            if ($row['id'] == $id) {
                array_unshift($son, $row);
                if ($row['category_id'] !== null) {
                    self::findfather($son, $array, $row['category_id']);
                }

                return;
            }
        }
    }

    public static function searchCategories($categories, $products)
    {
        $productsByCate = [];
        $array = [];
        $result = [];
        foreach ($products as $row) {
            if (isset($productsByCate[$row['category_id']])) {
                $productsByCate[$row['category_id']]++;
            } else {
                $productsByCate[$row['category_id']] = 1;
            }
        }
        $list = 'categories-';
        foreach ($productsByCate as $key => $value) {
            if (strpos($key, $list) === false) {
                $i = count($array);
                $array[$i] = [];
                self::findfather($array[$i], $categories, $key);
                foreach ($array[$i] as $row) {
                    if (isset($result[$row['id']])) {
                        $result[$row['id']] = $result[$row['id']] + $value;
                    } else {
                        $result[$row['id']] = $value;
                    }
                }
            }
        }

        return self::orderByParents($categories, $result);
    }

        /**
         *	return function that return html to the list of categories in wpanel.
         *
         *	@param array|collection $categories All Categories
         *
         *	@return function
         */
        public static function printCategory($categories = [])
        {
            $url = \Request::fullUrl();
            $printCategory = function ($row) use (&$printCategory, $categories, $url) {
                if (count($categories) > 0 && $row['category_id']) {
                    foreach ($categories as $category) {
                        if ($row['category_id'] == $category['id']) {
                            $father = '<a href="'.$url.'#category'.$category['id'].'">'.$category['name'].'</a>';
                            break;
                        }
                    }
                } else {
                    $father = ''; //trans('globals.action')
                }
                echo '<li class="list-group-item" ng-init="str'.$row['id'].'=\''.$row['name'].'\'" ng-show="(search==\'\'||(str'.$row['id'].'.toLowerCase().indexOf(search.toLowerCase())>-1))?true:false">
						<div class="row">
							<div class="col-md-1"><span class="label label-default visible-xs-inline">#ID:</span>  '.$row['id'].'</div>
		                    <div class="col-md-3"><span class="label label-default visible-xs-inline">'.trans('product.inputs_view.name').':</span>  <a name="category'.$row['id'].'">'.$row['name'].'</a></div>
		                    <div class="col-md-2"><span class="label label-default visible-xs-inline">'.trans('globals.status').':</span>  '.($row['status'] == 1 ? '<span class="label label-success">'.trans('globals.active').'</span>' :
                            '<span class="label label-danger">'.trans('globals.inactive').'</span>').'</div>
		                    <div class="col-md-2"><span class="label label-default visible-xs-inline">'.trans('store.father').':</span>  '.$father.'</div>
		                    <div class="col-md-2"><span class="label label-default visible-xs-inline">'.trans('globals.type').':</span>  '.$row['type'].'</div>
		                    <div class="col-md-2"><a href="'.route('wpanel.category.edit', $row['id']).'">Edit</a></div>
		                </div>
					</li>';
                if (isset($row['sub']) && (count($row['sub']) > 0)) {
                    foreach ($row['sub'] as $subRow) {
                        $printCategory($subRow);
                    }
                }
            };

            return $printCategory;
        }

    public static function level($categories, $category_id)
    {
        $cont = 0;
        foreach ($categories as $value) {
            if ($value['id'] == $category_id) {
                return 1 + self::level($categories, $value['category_id']);
            }
        }

        return 0;
    }
}
