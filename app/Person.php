<?php

namespace app;

/*
 * Antvel - Person Model
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Eloquent\Model;
use App\User;

class Person extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'persons';
    public $timestamps = false;
    public $primaryKey = 'user_id';
    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['user_id', 'first_name', 'last_name', 'birthday', 'sex'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['user_id'];

    public static function create(array $attr = [])
    {
        if (!isset($attr['user_id']) && isset($attr['user'])) {
            $attr['user']['role'] = @$attr['user']['role'] ?: 'person';
            $user = User::create($attr['user']);
            unset($attr['user']);
            $attr['user_id'] = $user->id;
        }

        return parent::create($attr);
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function relationsToArray()
    {
        return array_merge($this->attributesToArray(), $this->user->attributesToArray());
    }

    public function getAgeAttribute()
    {
        return \Carbon\Carbon::parse($this->birthday)->age;
    }

    public function getFullNameAttribute()
    {
        return "$this->first_name $this->last_name";
    }

    public function getHasPhoneAttribute()
    {
        return !is_null($this->home_phone);
    }

    public function setUpdatedAtAttribute($value)
    {
        $this->belongsTo('App\User')->updated_at = $value;
    }
}
