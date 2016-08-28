<?php

namespace app\Eloquent;

use Illuminate\Database\Eloquent\Collection as BaseCollection;

class Collection extends BaseCollection
{
    public function sortBy($callback, $options = SORT_REGULAR, $descending = false)
    {
        parent::sortBy($callback, $options, $descending);
        $this->items = array_values($this->items);

        return $this;
    }

    /**
     * Run a filter over each of the items.
     *
     * @param callable|null $callback
     *
     * @return static
     */
    public function filter(callable $callback = null)
    {
        if ($callback) {
            return new static(array_values(array_filter($this->items, $callback)));
        }

        return new static(array_values(array_filter($this->items)));
    }

    private function createIdArray($old)
    {
        if (!is_array($old) || !count($old)) {
            return $old;
        }
        $new = [];
        foreach ($old as $value) {
            $id = $value['id'];
            unset($value['id']);
            foreach ($value as &$repeat) {
                if (is_array($repeat)) {
                    $repeat = $this->createIdArray($repeat);
                }
            }
            $new[$id] = $value;
        }

        return $new;
    }

    public function toIdArray()
    {
        $arr = $this->toArray();

        return $this->createIdArray($arr);
    }

    /**
     * Extending toArray.
     * Passing attribute you can get only an array of that elements from the collection models.
     *
     * @param string $attribute
     *
     * @return array
     */
    public function toArray($attribute = null)
    {
        $elements = parent::toArray();
        if (!$attribute) {
            return $elements;
        }
        $filtered = [];
        foreach ($elements as $element) {
            $filtered[] = $element[$attribute];
        }

        return $filtered;
    }

    /**
     * Take a collection and build a tree.
     *
     * @param string $parent_id [name of the parent id]
     * @param string $children  [name of the children list]
     *
     * @return Collection [Collection Tree]
     */
    public function buildTree($parent_id = 'parent_id', $children = 'children', $list = null)
    {
        //get all ids in the collection
        $all_ids = [];
        foreach ($this as $item) {
            $all_ids[] = $item->id;
        }
        if (!$list) {
            $list = $this;
        }
        $tree = $this->filter(function ($item) use (&$parent_id, &$all_ids) {
            //get all items without parent or their parent is not in the list
            return !$item->$parent_id || !in_array($item->$parent_id, $all_ids);
        });
        $all_ids = [];
        foreach ($this as $item) {
            $all_ids[] = $item->id;
        }
        $list = $list->filter(function ($item) use (&$parent_id, &$all_ids) {
            //the remaining items
            return $item->$parent_id && !in_array($item->id, $all_ids);
        });
        $builder = function (&$childs) use (&$builder, &$list, &$children, &$parent_id) {
            if (!$childs) {
                return;
            }
            // $filtered=[];
            // $remaining=[];
            for ($i = 0; $i < $childs->count(); $i++) {
                $id = $childs[$i]->id;
                $childs[$i]->$children = $list->filter(function ($item) use ($id, $parent_id) {
                    return $item->$parent_id == $id;
                });
                $list = $list->filter(function ($item) use ($id, $parent_id) {
                    return $item->$parent_id != $id;
                });
                // $this->each(function ($item) use (&$id, &$parent_id, &$filtered, &$remaining) {
                //     if($item->$parent_id==$id){
                //         $filtered[]=$item;
                //     }else{
                //         $remaining[]=$item;
                //     }
                // });
                // $childs[$i]->$children=new static($filtered);
                // $list=new static($remaining);
                $builder($childs[$i]->$children);
            }
        };
        $builder($tree);

        return $tree;
    }

    /**
     * Take a collection and build a tree.
     *
     * @param string $parent_id [name of the parent id]
     * @param string $children  [name of the children list]
     *
     * @return Collection [Collection Tree]
     */
    public function mergeTree($children = 'children')
    {
        $tree = $this;
        $list = [];
        $builder = function (&$childs) use (&$builder, &$list, &$children) {
            if (!$childs || !$childs->count()) {
                return;
            }
            for ($i = 0; $i < $childs->count(); $i++) {
                $list[] = $childs[$i];
                if (isset($childs[$i]->$children) && count($childs[$i]->$children)) {
                    $builder($childs[$i]->$children);
                }
            }
        };
        $builder($tree);
        for ($i = 0; $i < count($list); $i++) {
            if (isset($list[$i]->$children)) {
                unset($list[$i]->$children);
            }
        }

        return new static($list);
    }
}
