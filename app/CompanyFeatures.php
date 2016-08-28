<?php

namespace app;

/*
 * Antvel - Company Features Model
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Eloquent\Model;

class CompanyFeatures extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'company_features';

    public $primaryKey = 'id';

    public $company_id = 'company_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'company_id',
        'description',
    ];
}
