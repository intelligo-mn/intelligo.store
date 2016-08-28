<?php

namespace app;

/*
 * Antvel - Users Model
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Eloquent\Model;
use App\Log;
use App\Order;
use App\UserPoints;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model implements AuthenticatableContract, CanResetPasswordContract
{
    use Authenticatable,CanResetPassword,SoftDeletes;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nickname',
        'email',
        'password',
        'role',
        'pic_url',
        'language',
        'website',
        'twitter',
        'facebook',
        'mobile_phone',
        'work_phone',
        'description',
        'disabled_at',
    ];

    /**
     * The attribute for soft deletes.
     *
     * @var [type]
     */
    protected $dates = ['deleted_at'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    public function relationsToArray()
    {
        return array_merge($this->attributesToArray(), $this->profile->attributesToArray());
    }

    public function profile()
    {
        if (in_array($this->role, ['business', 'nonprofit'])) {
            return $this->hasOne('App\Business');
        }

        return $this->hasOne('App\Person');
    }

    public function addresses()
    {
        return $this->hasMany('App\Address');
    }

    public function Product()
    {
        return $this->hasMany('App\Product');
    }

    public function getHasPhoneAttribute()
    {
        return !is_null($this->mobile_phone) || !is_null($this->work_phone)
            || ($this->profile() && $this->profile()->has_phone);
    }

    public function setPasswordAttribute($value)
    {
        if (!empty($value)) {
            $this->attributes['password'] = $value;
        }
    }

    //Role Manage

    public function hasRole($role)
    {
        if (is_array($role)) {
            return in_array($this->attributes['role'], $role);
        }

        return $this->attributes['role'] == $role;
    }

    public function isAdmin()
    {
        return $this->attributes['role'] == 'admin';
    }

    public function isPerson()
    {
        return $this->attributes['role'] == 'person';
    }

    public function isCompany()
    {
        return $this->attributes['role'] == 'business';
    }

   //Type user Manage

   public function isTrusted()
   {
       return $this->attributes['type'] == 'trusted';
   }

    //Cart Manage

    public function getCartCount()
    {
        $basicCart = Order::ofType('cart')->where('user_id', $this->id)->first();
        if (!($basicCart)) {
            return 0;
        } else {
            $totalItems = 0;
            foreach ($basicCart->details  as $orderDetail) {
                $totalItems += $orderDetail->quantity;
            }

            return $totalItems;
        }
    }

    public function getCartContent()
    {
        $basicCart = Order::ofType('cart')->where('user_id', $this->id)->first();
        if (!($basicCart)) {
            return [];
        } else {
            return $basicCart->details;
        }
    }

    public function modifyPoints($points, $actionTypeId, $sourceId)
    {
        $data = ['action_type_id' => $actionTypeId, 'source_id' => $sourceId, 'details' => $points, 'user_id' => $this->id];
        $log = Log::create($data);

        $userPoints = new UserPoints();
        $userPoints->user_id = $this->id;
        $userPoints->action_type_id = $actionTypeId;
        $userPoints->source_id = $sourceId;
        $userPoints->points = $points;
        if ($userPoints->save()) {
            $this->current_points = $this->current_points + $points;
            //Action type = 9 is for canceled orders, the user should not add to accumulated points
            if (($points > 0) && ($actionTypeId != 9)) {
                $this->accumulated_points = $this->accumulated_points + $points;
            }
            if ($this->save()) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}
