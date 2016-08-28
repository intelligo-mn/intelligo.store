<?php

namespace app\Http\Controllers;

/*
 * Antvel - Products Details Controller
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Helpers\featuresHelper;
use App\Http\Controllers\Controller;
use App\ProductDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductDetailsController extends Controller
{
    private $typeInputs = [
                ''         => '',
                'text'     => 'text',
                'select'   => 'select',
                'radio'    => 'radio',
                'checkbox' => 'checkbox',
                'image'    => 'image',
                'document' => 'document',
                // 'video' =>'video'
            ];
    private $typesProduct = [];
    private $panel = [
            'left'   => ['width' => '2'],
            'center' => ['width' => '10'],
        ];
    private $form_rules = [
        'status'                 => 'in:2,1',
        'name'                   => 'required',
        'input_type'             => 'required',
        'type_products'          => 'required',
        'default'                => 'required_if:input_type,select,condition,select',
        'default2'               => 'required_if:input_type,radio,input_type,checkbox',
        'condition'              => 'in:general,specific_data,custom_General,custom_specific_data',
        'type_data'              => 'in:alphanumeric,letters,numeric,personalized_value',
        'numerical_validation'   => 'in:minimum_value,maximum_value,range_values',
        'number_characters'      => 'in:minimum_characters,maximum_characters,character_range',
        'start_value_number'     => 'numeric',
        'end_value_number'       => 'required_if:start_value_number,range_values|numeric',
        'start_value_characters' => 'numeric',
        'end_value_characters'   => 'required_if:start_value_characters,character_range|numeric',
        'type_message'           => 'in:general,specific,general_selection,specific_selection',
    ];

    /**
     * constructor, initialize attributes.
     */
    public function __construct()
    {
        $this->typesProduct = [
                'all'               => trans('globals.all'),
                'item'              => trans('product.controller.item'),
                'key'               => trans('product.globals.digital_item').' '.trans('product.globals.key'),
                // 'software'       =>trans("product.globals.digital_item").' '.trans("product.globals.software"),
                // 'software_key'   =>trans("product.globals.digital_item").' '.trans("product.controller.software_key"),
                // 'gift_card'      =>trans("product.controller.gift_card")
            ];
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $features = ProductDetail::get();
        $panel = $this->panel;

        return view('features.index', compact('panel', 'features'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $panel = $this->panel;
        $typeInputs = $this->typeInputs;
        $typesProduct = $this->typesProduct;
        $edit = false;

        return view('features.form', compact('panel', 'typeInputs', 'typesProduct', 'edit'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $v = Validator::make($request->all(), $this->form_rules, trans('features.validation_messages'));
        if ($v->fails()) {
            return redirect()->back()
            ->withErrors($v->errors())->withInput(\Input::except('default', 'message'));
        }
        $data = $this->accommodateDataStorage($request->all());
        if (array_key_exists('error', $data)) {
            return redirect()->back()
            ->withErrors($data)->withInput(\Input::except('default', 'message'));
        }
        ProductDetail::create($data);

        \Session::flash('message', trans('features.insert_message'));

        return redirect('wpanel/features');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $feature = ProductDetail::find($id);
        if ($feature) {
            $panel = $this->panel;
            $arrayExample = [];
            if ($feature->max_num_values > 1) {
                for ($i = 0; $i < $feature->max_num_values; $i++) {
                    if (isset($feature->help_message['general'])) {
                        $arrayExample[$i] = ['data example', $feature->help_message['general']];
                    } elseif (isset($feature->help_message['specific'])) {
                        $arrayExample[$i] = ['data example', $feature->help_message['specific'][$feature->indexByName.'_'.$i]];
                    } elseif (isset($feature->help_message['general_selection'])) {
                        $arrayExample[$i] = ['data example', 'help message selected'];
                    } elseif (isset($feature->help_message['specific_selection'])) {
                        $arrayExample[$i] = ['data example', 'help message selected to value'.$i];
                    } else {
                        $arrayExample[$i] = 'data example';
                    }
                }
            } else {
                if (isset($feature->help_message['general'])) {
                    $arrayExample = ['data example', $feature->help_message['general']];
                } elseif (isset($feature->help_message['general_selection'])) {
                    $arrayExample = ['data example', 'help message selected'];
                } else {
                    $arrayExample = 'data example';
                }
            }
            $features = [
                str_replace(' ', '', $feature['name']) => $arrayExample,
            ];
            $productsDetails = new featuresHelper();
            $oldFeatures = $productsDetails->oldFeatures([]);
            $edit = false;

            return view('features.show', compact('panel', 'feature', 'features', 'oldFeatures', 'edit'));
        } else {
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $feature = ProductDetail::find($id);
        if ($feature) {
            $panel = $this->panel;
            $typeInputs = $this->typeInputs;
            $typesProduct = $this->typesProduct;
            $edit = true;
            $feature = $this->orderFormData($feature->toArray());

            return view('features.form', compact('panel', 'typeInputs', 'typesProduct', 'edit', 'feature'));
        } else {
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function update($id, Request $request)
    {
        $v = Validator::make($request->all(), $this->form_rules, trans('features.validation_messages'));
        if ($v->fails()) {
            return redirect()->back()
            ->withErrors($v->errors())->withInput(\Input::except('default', 'message'));
        }
        $data = $this->accommodateDataStorage($request->all());
        if (array_key_exists('error', $data)) {
            return redirect()->back()
            ->withErrors($data)->withInput(\Input::except('default', 'message'));
        }

        ProductDetail::where('id', $id)->update($data);
        \Session::flash('message', trans('features.update_message'));

        return redirect('wpanel/features');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     *   sort and select the data to be saved.
     *
     *   @param $data    array   all data form
     *
     *   @return array   the data to be saved or error
     */
    private function accommodateDataStorage($data)
    {
        //suppress all data that are not part of the "Product details" table
        unset($data['_token']);
        unset($data['_method']);
        //call to validate if the user specifies a helper method
        $helper = new FeaturesHelper();
        //if the attribute has more than one value, separated by name followed by the number of value
        $indexByName = str_replace(' ', '', $data['name']);
        //First data to order: default
        //Defect data are required if the input type is among the select, radio, and checkbox
        //second data order: validation rules (validation by data type)
        //the type of data validation is essential if the input is a text
        $validationByTypes = '';
        switch ($data['input_type']) {
            case 'text':
                $data['default_values'] = '';
                switch ($data['type_data']) {
                    case 'alphanumeric':
                        $validationByTypes = 'alpha_num';
                    break;
                    case 'letters':
                        $validationByTypes = 'alpha';
                    break;
                    case 'numeric':
                        $validationByTypes = 'numeric';
                    break;
                    case 'personalized_value':

                    break;
                }
                if ($data['type_data'] == 'numeric') {
                    switch ($data['numerical_validation']) {
                        case 'minimum_value':
                            $validationByTypes .= '|min:'.$data['start_value_number'];
                        break;
                        case 'maximum_value':
                            $validationByTypes .= '|max:'.$data['start_value_number'];
                        break;
                        case 'range_values':
                            if ($data['start_value_number'] < $data['end_value_number']) {
                                $validationByTypes .= '|between:'.$data['start_value_number'].','.$data['end_value_number'];
                            } elseif ($data['start_value_number'] > $data['end_value_number']) {
                                $validationByTypes .= '|between:'.$data['end_value_number'].','.$data['start_value_number'];
                            } else {
                                $validationByTypes .= '|between:'.$data['start_value_number'].','.($data['end_value_number'] + 1);
                            }
                        break;
                    }
                }
                if ($data['type_data'] != 'numeric') {
                    switch ($data['number_characters']) {
                        case 'minimum_characters':
                            $validationByTypes .= '|min:'.$data['start_value_characters'];
                        break;
                        case 'maximum_characters':
                            $validationByTypes .= '|max:'.$data['start_value_characters'];
                        break;
                        case 'character_range':
                            if ($data['start_value_characters'] < $data['end_value_characters']) {
                                $validationByTypes .= '|between:'.$data['start_value_characters'].','.$data['end_value_characters'];
                            } elseif ($data['start_value_characters'] > $data['end_value_characters']) {
                                $validationByTypes .= '|between:'.$data['end_value_characters'].','.$data['start_value_characters'];
                            } else {
                                $validationByTypes .= '|between:'.$data['start_value_characters'].','.($data['end_value_characters'] + 1);
                            }
                        break;
                    }
                }
            break;
            case 'select':
                switch ($data['condition']) {
                    case 'general':
                        if (isset($data['default']) && !is_array($data['default'])) {
                            $array = [''];
                            foreach (explode('|', $data['default']) as $row) {
                                if (trim($row) != '') {
                                    $array[] = $row;
                                }
                            }
                            if (count($array) > 1) {
                                $data['default_values'] = json_encode([
                                    'general' => $array,
                                    'values'  => true,
                                ]);
                            } else {
                                return ['error' => [trans('features.defaults_required')]];
                            }
                        } else {
                            return ['error' => [trans('features.defaults_required')]];
                        }
                    break;
                    case 'specific_data':
                        if (isset($data['default']) && is_array($data['default'])) {
                            $values = [];
                            $i = 0;
                            foreach ($data['default'] as $row) {
                                $values[++$i] = [];
                                if (trim($row) != '') {
                                    $subsRow = [''];
                                    foreach (explode('|', trim($row)) as $key) {
                                        if ($key && trim($key) != '') {
                                            $subsRow[] = $key;
                                        }
                                    }
                                    if (count($subsRow) > 1) {
                                        $values[$i] = $subsRow;
                                    } else {
                                        return ['error' => [trans('features.defaults_required')]];
                                    }
                                } else {
                                    unset($values[$i]);
                                }
                            }
                            if (count($values) > 1) {
                                $data['default_values'] = json_encode([
                                    'specific' => $values,
                                    'values'   => true,
                                ]);
                            } else {
                                return ['error' => [trans('features.defaults_required')]];
                            }
                        } else {
                            return ['error' => [trans('features.defaults_required')]];
                        }
                    break;
                    case 'custom_General':
                        if (isset($data['default']) && !is_array($data['default'])) {
                            if (method_exists($helper, $data['default'])) {
                                $data['default_values'] = json_encode([
                                    'general' => $data['default'],
                                    'values'  => false,
                                ]);
                            } else {
                                return ['error' => [trans('features.defaults_method_not_exist')]];
                            }
                        } else {
                            return ['error' => [trans('features.defaults_required')]];
                        }
                    break;
                    case 'custom_specific_data':
                        if (isset($data['default']) && is_array($data['default'])) {
                            $values = [];
                            $i = 0;
                            foreach ($data['default'] as $row) {
                                if (trim($row) != '' && method_exists($helper, $row)) {
                                    $values[$i++] = $row;
                                } else {
                                    return ['error' => [trans('features.defaults_method_not_exist')]];
                                }
                            }
                            if ($i > 0) {
                                $data['default_values'] = json_encode([
                                    'specific' => $values,
                                    'values'   => false,
                                ]);
                            } else {
                                return ['error' => [trans('features.defaults_method_not_exist')]];
                            }
                        } else {
                            return ['error' => [trans('features.defaults_required')]];
                        }
                    break;
                }
            break;
            case 'radio': case 'checkbox':
                $data['max_num_values'] = 1; //in case checkbox this value is no defined
                if (method_exists($helper, $data['default2'])) {
                    $data['default_values'] = json_encode([
                        'general' => $data['default2'],
                        'values'  => false,
                    ]);
                } else {
                    $array = [];
                    foreach (explode('|', $data['default2']) as $row) {
                        if (trim($row) != '') {
                            $array[] = $row;
                        }
                    }
                    if (count($array)) {
                        $data['default_values'] = json_encode([
                            'general' => $array,
                            'values'  => true,
                        ]);
                    } else {
                        return ['error' => [trans('features.defaults_required')]];
                    }
                }
            break;
            case 'image': case 'document':
                $data['default_values'] = '';
            break;
        }
        //suppress all data that are not part of the "Product details" table
        unset($data['condition']);
        unset($data['default']);
        unset($data['default2']);
        unset($data['type_data']);
        unset($data['numerical_validation']);
        unset($data['number_characters']);
        unset($data['start_value_number']);
        unset($data['end_value_number']);
        unset($data['start_value_characters']);
        unset($data['end_value_characters']);
        //second data order: validation rules (validation required - nop required)
        $validationRules = [];
        for ($i = 1; $i <= $data['max_num_values']; $i++) {
            $validationRules[$indexByName.'_'.$i] = '';
            switch ($data['validation']) {
                case 'all_required':
                    $validationRules[$indexByName.'_'.$i] = 'required';
                break;
                case 'one_required': //this option required min 2 max_num_values
                    if ($data['max_num_values'] > 1) {
                        $validationRules[$indexByName.'_'.$i] = 'required_without_all:';
                        for ($j = 1; $j <= $data['max_num_values']; $j++) {
                            if ($j != $i) {
                                $validationRules[$indexByName.'_'.$i] .= 'feature_'.$indexByName.'_'.$j.',';
                            }
                        }
                    }
                break;
                case 'required_number': //this option required min 2 max_num_values
                    if ($data['max_num_values'] > 1 && $i < $data['max_num_values']) {
                        $validationRules[$indexByName.'_'.$i] = 'required_with:';
                        for ($j = $i + 1; $j <= $data['max_num_values']; $j++) {
                            $validationRules[$indexByName.'_'.$i] .= 'feature_'.$indexByName.'_'.$j.',';
                        }
                    }
                break;
            }
            $validationRules[$indexByName.'_'.$i] = $validationRules[$indexByName.'_'.$i].'|'.$validationByTypes;
        }
        //add validation_rules to data
        $data['validation_rules'] = json_encode($validationRules);
        //suppress all data that are not part of the "Product details" table
        unset($data['validation']);

        //Third data to order: help message
        //If the message type is selected but not the specific message, the help message is stored empty
        switch ($data['type_message']) {
            case 'general':
                if (isset($data['message']) && !is_array($data['message'])) {
                    $data['help_message'] = json_encode(['general' => $data['message']]);
                } else {
                    $data['help_message'] = '';
                }
            break;
            case 'specific':
                if (isset($data['message']) && is_array($data['message'])) {
                    $existMessage = false;
                    $message = [];
                    $i = 1;
                    foreach ($data['message'] as $row) {
                        if (trim($row) != '') {
                            $message[$indexByName.'_'.$i++] = $row;
                            $existMessage = true;
                        }
                    }
                    if ($existMessage) {
                        $data['help_message'] = json_encode(['specific' => $message]);
                    } else {
                        $data['help_message'] = '';
                    }
                } else {
                    $data['help_message'] = '';
                }
            break;
            case 'general_selection':
                if (isset($data['message']) && !is_array($data['message'])) {
                    $datas = explode('|', trim($data['message']));
                    $array = [];
                    foreach ($datas as $row) {
                        if (trim($row) != '') {
                            $array[] = $row;
                        }
                    }
                    if (count($array) > 0) {
                        $data['help_message'] = json_encode(['general_selection' => $array]);
                    } else {
                        $data['help_message'] = '';
                    }
                } else {
                    $data['help_message'] = '';
                }
            break;
            case 'specific_selection':
                if (isset($data['message']) && is_array($data['message'])) {
                    $existMessage = false;
                    $array = [];
                    $i = 0;
                    foreach ($data['message'] as $row) {
                        $subsRow = explode('|', trim($row));
                        $array[$indexByName.'_'.++$i] = [];
                        foreach ($subsRow as $key) {
                            if (trim($key) != '') {
                                $existMessage = true;
                                $array[$indexByName.'_'.$i][] = $key;
                            }
                        }
                    }
                    if ($existMessage) {
                        $data['help_message'] = json_encode(['specific_selection' => $array]);
                    } else {
                        $data['help_message'] = '';
                    }
                } else {
                    $data['help_message'] = '';
                }
            break;
        }
        //suppress all data that are not part of the "Product details" table
        unset($data['type_message']);
        if (isset($data['message'])) {
            unset($data['message']);
        }

        return $data;
    }

    /**
     *   sort and select the data to be saved.
     *
     *   @param $data    array   all data in the database
     *
     *   @return array   all data that goes to form
     */
    private function orderFormData($data)
    {
        //is number in the form
        $data['status'] = $data['status'] == 'active' ? '1' : '2';
        //inputs condition, default2 and default belong to default_values
        if ($data['default_values']) {
            $array = json_decode($data['default_values'], true);
            //dd($array,$data);
            if (isset($array['general'])) {
                if ($array['values']) {
                    $data['condition'] = 'general';
                } else {
                    $data['condition'] = 'custom_General';
                }
                if ($data['input_type'] == 'radio' || $data['input_type'] == 'checkbox') {
                    $data['default'] = '';
                    $data['default2'] = $array['general'];
                } elseif ($data['input_type'] == 'select' && is_array($array['general'])) {
                    $data['default2'] = '';
                    $data['default'] = implode('|', $array['general']);
                } else {
                    $data['default2'] = '';
                    $data['default'] = $array['general'];
                }
            } else {
                if ($array['values']) {
                    $data['condition'] = 'specific_data';
                } else {
                    $data['condition'] = 'custom_specific_data';
                }
                for ($i = 1; $i <= $data['max_num_values']; $i++) {
                    // $data['default'][$i]=implode('|',$array['specific'][$i]);
                }
            }
        } else {
            $data['condition'] = '';
            $data['default'] = '';
        }
        //inputs validation type_data, numerical_validation and number_characters belong to validation_rules
        if (strpos($data['validation_rules'], 'required')) {
            $data['validation'] = 'all_required';
        } elseif (strpos($data['validation_rules'], 'required_without_all')) {
            $data['validation'] = 'one_required';
        } elseif (strpos($data['validation_rules'], 'required_with')) {
            $data['validation'] = 'required_number';
        } else {
            $data['validation'] = '';
        }
        if (strpos($data['validation_rules'], '|numeric')) {
            $data['type_data'] = 'numeric';
            if (strpos($data['validation_rules'], '|min')) {
                $data['numerical_validation'] = 'minimum_value';
            } elseif (strpos($data['validation_rules'], '|max')) {
                $data['numerical_validation'] = 'maximum_value';
            } elseif (strpos($data['validation_rules'], '|between')) {
                $data['numerical_validation'] = 'range_values';
            } else {
                $data['numerical_validation'] = '';
            }
            $data['number_characters'] = '';
        } else {
            if (strpos($data['validation_rules'], '|alpha_num')) {
                $data['type_data'] = 'alphanumeric';
            } elseif (strpos($data['validation_rules'], '|alpha')) {
                $data['type_data'] = 'letters';
            } else {
                $data['type_data'] = '';
            }
            if (strpos($data['validation_rules'], '|min')) {
                $data['number_characters'] = 'minimum_characters';
            } elseif (strpos($data['validation_rules'], '|max')) {
                $data['number_characters'] = 'maximum_characters';
            } elseif (strpos($data['validation_rules'], '|between')) {
                $data['number_characters'] = 'character_range';
            } else {
                $data['number_characters'] = '';
            }
            $data['numerical_validation'] = '';
        }
        //inputs type_message and message belong to validation_rules
        if ($data['help_message']) {
            $array = json_decode($data['help_message'], true);
            if (isset($array['general'])) {
                $data['type_message'] = 'general';
                $data['message'] = $array['general'];
            } elseif (isset($array['specific'])) {
                $data['type_message'] = 'specific';
                for ($i = 1; $i <= $data['max_num_values']; $i++) {
                    // $data['message'][$i]=$array['specific'][$i];
                }
            } elseif (isset($array['general_selection'])) {
                $data['type_message'] = 'general_selection';
                $data['message'] = implode('|', $array['general_selection']);
            } elseif (isset($array['specific_selection'])) {
                $data['type_message'] = 'specific_selection';
                for ($i = 1; $i <= $data['max_num_values']; $i++) {
                    // $data['message'][$i]=implode('|',$array['specific_selection'][$i]);
                }
            } else {
                $data['type_message'] = '';
                $data['message'] = '';
            }
        } else {
            $data['message'] = '';
            $data['type_message'] = '';
        }

        unset($data['default_values']);
        unset($data['validation_rules']);
        unset($data['help_message']);

        return $data;
    }
}
