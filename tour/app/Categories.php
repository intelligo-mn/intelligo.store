<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $table = 'categories';

    protected $fillable = ['name', 'name_slug', 'posturl_slug',  'icon', 'description', 'type'];


    public function post()
    {
        return $this->hasMany('App\Posts', 'category_id');
    }


    public function mailcontact()
    {
        return $this->hasMany('App\Contacts', 'category_id');
    }

    public function maillabel()
    {
        return $this->hasMany('App\Contacts', 'label_id');
    }



    public function scopeByType($query, $type)
    {
        return $query->where("type", $type);
    }


}
