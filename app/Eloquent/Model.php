<?php

namespace app\Eloquent;

use App\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model as BaseModel;

class Model extends BaseModel
{
    public function newCollection(array $models = [])
    {
        return new Collection($models);
    }

    /**
     * Create a collection of model objects and return the instance.
     *
     * @param array $elements
     *
     * @return Collection
     */
    public static function createMany(array $elements)
    {
        if (!count($elements)) {
            return new Collection();
        }
        $models = [];
        foreach ($elements as $attributes) {
            $models[] = static::create($attributes);
        }

        return new Collection($models);
    }

    /**
     * Create a new basic model object and return the instance.
     *
     * @param array $attributes
     *
     * @return Model
     */
    public static function createModel(array $attributes)
    {
        return new static($attributes);
    }

    /**
     * Create a new basic model object and return the instance.
     *
     * @param array $attributes
     *
     * @return Model
     */
    public static function createModels(array $elements)
    {
        $models = [];
        foreach ($elements as $attributes) {
            $models[] = new static($attributes);
        }

        return $models;
    }

    public function scopeOfUser($query, $type)
    {
        return $query->whereUserId($type);
    }

    public function scopeAuth($query)
    {
        return $query->whereUserId(\Auth::user()->id);
    }
}
