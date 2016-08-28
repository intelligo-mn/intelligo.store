<?php

namespace app\Helpers;

/*
 * Antvel - Products Features Helper
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Helpers\colorsHelper;
use App\ProductDetail;
use Illuminate\Support\Facades\Validator;

class featuresHelper
{
    private $features = [];
    private $called = '';

    public function __construct()
    {
        $this->features = ProductDetail::get();
    }

    /**
     * get all features.
     *
     *   @param [boolean] $array returns features array or collection
     *
     *	@return array|collection
     */
    public function getFeatures($array = true)
    {
        if ($array) {
            return $this->features->toArray();
        } else {
            return $this->features;
        }
    }

    /**
     * set all features.
     *
     *   @param [collection] $features all features
     *
     *	@return void
     */
    public function setFeatures($features)
    {
        return $this->features = $features;
    }

    /**
     * organize old data for the product form.
     *
     *   @param [array] $productFeatures	old product features or empty array
     *
     *	@return array
     */
    public function oldFeatures($productFeatures)
    {
        $return = [];
        foreach ($this->features->toArray() as $row) {
            if (isset($productFeatures[$row['indexByName']])) {
                if ($row['max_num_values'] * 1 == 1) {
                    if (is_array($productFeatures[$row['indexByName']][0])) {
                        $return['feature_'.$row['indexByName']] = $productFeatures[$row['indexByName']][0][0];
                    } else {
                        $return['feature_'.$row['indexByName']] = $productFeatures[$row['indexByName']][0];
                    }
                } else {
                    for ($i = 0; $i <= $row['max_num_values']; $i++) {
                        if (isset($productFeatures[$row['indexByName']][$i])) {
                            if (is_array($productFeatures[$row['indexByName']][$i])) {
                                $return['feature_'.$row['indexByName'].'_'.($i + 1)] = $productFeatures[$row['indexByName']][$i][0];
                            } else {
                                $return['feature_'.$row['indexByName'].'_'.($i + 1)] = $productFeatures[$row['indexByName']][$i];
                            }
                        } else {
                            $return['feature_'.$row['indexByName'].'_'.($i + 1)] = '';
                        }
                    }
                }
            } else {
                if ($row['max_num_values'] * 1 == 1) {
                    $return['feature_'.$row['indexByName']] = '';
                } else {
                    for ($i = 1; $i <= $row['max_num_values']; $i++) {
                        $return['feature_'.$row['indexByName'].'_'.$i] = '';
                    }
                }
            }
        }

        return $return;
    }

    /**
     * create the error message by taking the name feature, and validation rules.
     *
     * @param [string] $rules Validation rules
     * @param [string] $index name feature without spaces
     * @param [string] $name  name feature
     *
     * @return [array] $return
     */
    private function validationMessagesFeatures($rules, $index, $name)
    {
        $return = [];
        if (strpos($rules, '|in') !== false) {
            $return[$index.'.in'] = $name.' '.trans('features.is_invalid');
        }
        if (strpos($rules, '|numeric') !== false) {
            $return[$index.'.numeric'] = $name.' '.trans('features.only_allows_numbers');
            if (strpos($rules, '|min') !== false) {
                $num = explode('min:', $rules);
                $num = explode('|', $num[1]);
                $return[$index.'.min'] = $name.' '.str_replace('*N*', $num[0], trans('features.minimum_number'));
            } elseif (strpos($rules, '|max') !== false) {
                $num = explode('max:', $rules);
                $num = explode('|', $num[1]);
                $return[$index.'.max'] = $name.' '.str_replace('*N*', $num[0], trans('features.maximum_number_2'));
            } elseif (strpos($rules, '|between') !== false) {
                $num = explode('between:', $rules);
                $num = explode('|', $num[1]);
                $num = explode(',', $num[0]);
                $return[$index.'.between'] = $name.' '.str_replace(['*N1*', '*N2*'], $num, trans('features.between_n_and_n'));
            }
        } else {
            if (strpos($rules, '|alpha') !== false) {
                $return[$index.'.alpha'] = $name.' '.trans('features.only_allows_letters');
            }
            if (strpos($rules, '|min') !== false) {
                $num = explode('min:', $rules);
                $num = explode('|', $num[1]);
                $return[$index.'.min'] = $name.' '.str_replace('*N*', $num[0], trans('features.minimum_characters'));
            } elseif (strpos($rules, '|max') !== false) {
                $num = explode('max:', $rules);
                $num = explode('|', $num[1]);
                $return[$index.'.max'] = $name.' '.str_replace('*N*', $num[0], trans('features.maximum_characters'));
            } elseif (strpos($rules, '|between') !== false) {
                $num = explode('between:', $rules);
                $num = explode('|', $num[1]);
                $num = explode(',', $num[0]);
                $return[$index.'.between'] = $name.' '.str_replace(['*N1*', '*N2*'], $num, trans('features.between_n_and_n_characters'));
            }
        }
        if (strpos($rules, 'required_without_all') !== false) {
            $return[$index.'.required_without_all'] = $name.' '.trans('features.one_is_required');
        } elseif (strpos($rules, 'required_with') !== false) {
            $return[$index.'.required_with'] = $name.' '.trans('features.is_required');
        } elseif (strpos($rules, 'required') !== false) {
            $return[$index.'.required'] = $name.' '.trans('features.is_required');
        }

        return $return;
    }

    /**
     *	validate product feature, as specified in the table of product details.
     *
     *	@param [array] $data all inputs
     *
     *	@return [string|array]
     */
    public function validateFeatures($data)
    {
        $features_rules = [];
        $message_rules = [];
        foreach ($this->features as $row) {
            if ($row['status'] == 'active') {
                if ($row['max_num_values'] * 1 == 1) {
                    $features_rules['feature_'.$row['indexByName']] = $row['validationRulesArray'][$row['indexByName'].'_1'] ? $row['validationRulesArray'][$row['indexByName'].'_1'] : '';
                    $message_rules = array_merge($message_rules, $this->validationMessagesFeatures($row['validationRulesArray'][$row['indexByName'].'_1'], 'feature_'.$row['indexByName'], $row['upperName']));
                } else {
                    for ($i = 1; $i <= ($row['max_num_values'] * 1); $i++) {
                        $features_rules['feature_'.$row['indexByName'].'_'.$i] = $row['validationRulesArray'][$row['indexByName'].'_'.$i] ? $row['validationRulesArray'][$row['indexByName'].'_'.$i] : '';
                        $message_rules = array_merge($message_rules, $this->validationMessagesFeatures($row['validationRulesArray'][$row['indexByName'].'_'.$i], 'feature_'.$row['indexByName'].'_'.$i, $row['upperName']));
                    }
                }
            }
        }
        // dd([$data, $features_rules,$message_rules]);
        $v = Validator::make($data, $features_rules, $message_rules);
        if ($v->fails()) {
            $array = [];
            $errors = $v->errors()->toArray();
            foreach ($errors as $error) {
                foreach ($error as $row) {
                    $array[] = $row;
                }
            }

            return array_unique($array);
        }
        $array = [];
        foreach ($this->features as $row) {
            $values = [];
            if (($row['max_num_values'] * 1) !== 1) {
                for ($i = 1; $i <= ($row['max_num_values'] * 1); $i++) {
                    if (!$data['feature_'.$row['indexByName'].'_'.$i]) {
                        continue;
                    }
                    if ($row['help_message'] != '' && (strpos('video image document', $row['input_type']) === false)) {
                        $message = '';
                        if (isset($row['helpMessageArray']['general'])) {
                            $message = $row['helpMessageArray']['general'];
                        } elseif (isset($row['helpMessageArray']['specific'])) {
                            $message = $row['helpMessageArray']['specific'][$row['indexByName'].'_'.$i];
                        } elseif (isset($row['helpMessageArray']['general_selection'])) {
                            $message = $data['help_msg_'.$row['indexByName']];
                        } elseif (isset($row['helpMessageArray']['specific_selection'])) {
                            $message = $data['help_msg_'.$row['indexByName'].'_'.$i];
                        }
                        $values[] = [$data['feature_'.$row['indexByName'].'_'.$i], $message];
                    } else {
                        $values[] = $data['feature_'.$row['indexByName'].'_'.$i];
                    }
                }
            } else {
                if (!$data['feature_'.$row['indexByName']]) {
                    continue;
                }
                if ($row['help_message'] != '' && (strpos('video image document', $row['input_type']) === false)) {
                    $message = '';
                    if (isset($row['helpMessageArray']['general'])) {
                        $message = $row['helpMessageArray']['general'];
                    } elseif (isset($row['helpMessageArray']['general_selection'])) {
                        $message = $data['help_msg_'.$row['indexByName']];
                    }
                    $values = [$data['feature_'.$row['indexByName']], $message];
                } else {
                    $values = $data['feature_'.$row['indexByName']];
                }
            }
            if ($values) {
                $array[$row['indexByName']] = $values;
            }
        }

        return json_encode($array);
    }

    public function callFunctions($name)
    {
        if (method_exists($this, $name)) {
            $this->called = $name;
            echo $this->{$this->called}();
        } else {
            echo 'undefined';
        }
    }

    public function makeSelectColor()
    {
        $colors = new ColorsHelper();
        $return = '<select class="form-control" name="feature_color">';
        foreach ($colors->getArrayCodeAsKey() as $key => $value) {
            $return .= '<option value="'.$value.'">'.$value.'</option>';
        }
        $return .= '</select>';

        return $return;
    }

    public function group($group)
    {
        $groups = [];

        $features = $this->getFeatures();

        foreach ($features as $feature) {
            foreach ($group as $item) {
                if (isset($item->features[$feature['indexByName']])) {
                    if ($feature['indexByName'] == 'images') {
                        $groups[$feature['indexByName']][] = [$item->id, $item->features[$feature['indexByName']][0]];
                    } else {
                        $groups[$feature['indexByName']][] = [$item->id, $item->features[$feature['indexByName']]];
                    }
                }
            }
        }

        return $groups;
    }
}
