<?php

namespace app;

/*
 * Antvel - Company Model
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Eloquent\Model;

class Company extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'company';

    public $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'website_name',
        'slogan',
        'logo',
        'css_file',
        'phone_number',
        'cell_phone',
        'address',
        'theme',
        'state',
        'city',
        'zip_code',
        'email',
        'contact_email',
        'sales_email',
        'support_email',
        'status',
        'twitter',
        'facebook',
        'facebook_app_id',
        'description',
        'keywords',
        'about_us',
        'refund_policy',
        'privacy_policy',
        'terms_of_service',

    ];

    public function features()
    {
        return $this->hasMany('App\CompanyFeatures');
    }
}
