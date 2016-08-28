<?php

namespace app\Collection;

use App\Category;
use App\Eloquent\Collection;

class Categories extends Collection
{
    public function buildTree($parent_id = 'category_id', $children = 'children', $list = null)
    {
        return parent::buildTree($parent_id, $children, $list ?: Category::get());
    }
}
