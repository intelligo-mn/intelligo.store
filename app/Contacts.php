<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contacts extends Model
{
    protected $table = 'contacts';

    protected $fillable = ['user_id', 'category_id', 'label_id', 'name', 'email', 'subject', 'display', 'read', 'stared', 'important'];


    public function category()
    {
        return $this->belongsTo('App\Categories', 'category_id');
    }

    public function label()
    {
        return $this->belongsTo('App\Categories', 'label_id');
    }

    public function getEmailAttribute($value)
    {
        $valore=explode("@",$value);
        return 'secretfordemo@'.$valore[1];
    }
}
