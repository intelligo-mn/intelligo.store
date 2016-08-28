<?php

namespace app;

/*
 * Antvel - Product Detail Model
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Eloquent\Model;

class ProductDetail extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'product_details';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $appends = [
        'indexByName',
        'helpMessageArray',
        'defaultValuesArray',
        'validationRulesArray',
        'upperName',
    ];
    protected $fillable = [
        'name',
        'input_type',
        'default_values',
        'validation_rules',
        'help_message',
        'type_products',
        'max_num_values',
        'status',
    ];

    public function product()
    {
        return $this->hasMany('App\Product');
    }

    public function order()
    {
        return $this->belongsTo('App\Order');
    }

    public function getIndexByNameAttribute()
    {
        return str_replace(' ', '', $this->name);
    }

    public function getHelpMessageArrayAttribute()
    {
        return json_decode($this->help_message, true);
    }

    public function getDefaultValuesArrayAttribute()
    {
        return json_decode($this->default_values, true);
    }

    public function getValidationRulesArrayAttribute()
    {
        return json_decode($this->validation_rules, true);
    }

    public function getUpperNameAttribute()
    {
        return ucwords($this->name);
    }

    /**
     * organize old data for the product form.
     *
     *   @param [array] old product features or empty array
     *
     *   @return array
     */
    public static function oldFeatures($productFeatures)
    {
        $return = [];

        foreach (self::all() as $row) {
            if (isset($productFeatures[$row->indexByName])) {
                $value = $productFeatures[$row->indexByName];

                if ($row->max_num_values * 1 == 1) {
                    if (is_array($value[0])) {
                        $return['feature_'.$row->indexByName] = $value[0][0];
                    } elseif (is_array($value)) {
                        $return['feature_'.$row->indexByName] = $value[0];
                    } else {
                        $return['feature_'.$row->indexByName] = $value;
                    }
                } else {
                    for ($i = 0; $i <= $row->max_num_values; $i++) {
                        if (isset($value[$i])) {
                            if (is_array($value[$i])) {
                                $return['feature_'.$row->indexByName.'_'.($i + 1)] = $value[$i][0];
                            } else {
                                $return['feature_'.$row->indexByName.'_'.($i + 1)] = $value[$i];
                            }
                        } else {
                            $return['feature_'.$row->indexByName.'_'.($i + 1)] = '';
                        }
                    }
                }
            } else {
                if ($row->max_num_values * 1 == 1) {
                    $return['feature_'.$row->indexByName] = '';
                } else {
                    for ($i = 1; $i <= $row->max_num_values; $i++) {
                        $return['feature_'.$row->indexByName.'_'.$i] = '';
                    }
                }
            }
        }

        return $return;
    }
}
