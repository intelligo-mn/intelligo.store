<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $table = 'categories';

    protected $fillable = ['name', 'name_slug', 'description', 'type'];


    public function post()
    {
        return $this->hasMany('App\Posts', 'category_id');
    }


    public function scopeByType($query, $type)
    {
        return $query->where("type", $type);
    }


}
