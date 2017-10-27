<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted'             => 'el :attribute debe ser aceptado.',
    'active_url'           => 'el :attribute no es un url valido.',
    'after'                => 'el :attribute debe ser de despues de :date.',
    'alpha'                => 'el :attribute solo puede contener letras.',
    'alpha_dash'           => 'el :attribute solo puede contener letras, numero y guiones.',
    'alpha_num'            => 'el :attribute solo puede contener letras y numeros.',
    'array'                => 'el :attribute debe de ser de lo mismo.',
    'before'               => 'el :attribute debe ser de antes de :date.',
    'between'              => [
        'numeric' => 'el :attribute debe ser entre :min y :max.',
        'file'    => 'el :attribute debe ser entre :min y :max kilobytes.',
        'string'  => 'el :attribute debe ser entre :min y :max caracteres.',
        'array'   => 'el :attribute debe tener entre :min y :max items.',
    ],
    'boolean'              => 'el :attribute debe ser verdadero o falso.',
    'confirmed'            => 'el :attribute no coincide con la confirmacion.',
    'date'                 => 'el :attribute no tiene fecha valida.',
    'date_format'          => 'el :attribute no coincide con el formato :format.',
    'different'            => 'el :attribute y :other deben ser diferentes.',
    'digits'               => 'el :attribute debe contener :digits digitos.',
    'digits_between'       => 'el :attribute debe contener entre :min y :max digitos.',
    'email'                => 'el :attribute debe contener una direccion de email validad.',
    'exists'               => 'el :attribute seleccionado no es valido.',
    'filled'               => 'el :attribute debe ser completado.',
    'image'                => 'el :attribute debe ser una imagen.',
    'in'                   => 'el :attribute no es valido.',
    'integer'              => 'el :attribute debe ser integrado.',
    'ip'                   => 'el :attribute debe tener na dirección de ip valida.',
    'json'                 => 'el :attribute debe contener una linea json.',
    'max'                  => [
        'numeric' => 'el :attribute no puede ser mas grande de :max.',
        'file'    => 'el :attribute no puede superar los :max kilobytes.',
        'string'  => 'el :attribute no puede contener mas de :max caracteres.',
        'array'   => 'el :attribute no puede contener mas de :max items.',
    ],
    'mimes'                => 'el :attribute debe ser un archivo de tipo: :values.',
    'min'                  => [
        'numeric' => 'el :attribute debe contener al menos :min.',
        'file'    => 'el :attribute debe contener al menos :min kilobytes.',
        'string'  => 'el :attribute debe contener al menos :min caracteres.',
        'array'   => 'el :attribute debe contener al menos :min items.',
    ],
    'not_in'               => 'The selected :attribute is invalid.',
    'numeric'              => 'The :attribute must be a number.',
    'regex'                => 'The :attribute format is invalid.',
    'required'             => 'The :attribute field is required.',
    'required_if'          => 'The :attribute field is required when :other is :value.',
    'required_with'        => 'The :attribute field is required when :values is present.',
    'required_with_all'    => 'The :attribute field is required when :values is present.',
    'required_without'     => 'The :attribute field is required when :values is not present.',
    'required_without_all' => 'The :attribute field is required when none of :values are present.',
    'same'                 => 'The :attribute and :other must match.',
    'size'                 => [
        'numeric' => 'el :attribute debe ser de :size.',
        'file'    => 'el :attribute debe ser de :size kilobytes.',
        'string'  => 'el :attribute debe ser de :size caracteres.',
        'array'   => 'el :attribute debe tener :size items.',
    ],
    'string'               => 'el :attribute debe ser.',
    'timezone'             => 'el :attribute debe tener una zona de horario valida.',
    'unique'               => 'el :attribute ya esta ocupado.',
    'url'                  => 'el :attribute no es un formato valido.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'type' => [
            'required' => 'error.',
        ],
        'title' => [
            'required' => 'el titulo es obligatorio.',
            'unique'  => ' el titulo ya existe en otro post.',
            'min' => 'el titulo debe contener al menos :min caracteres.',
            'max' => 'el titulo no puede ser de mas de :max caracteres.',
        ],
        'body' => 'descripcion obligatoria.',
        'category' => 'category obligatoria.',
        'description' => [
            'required' => 'description obligatoria.',
            'min' => 'la descripcion debe ser de al menos :min caaracteres.',
            'max' => 'la descripcion deber ser de menos de :max caracteres.',
        ],
        'thumb' => [
            'required' => 'imagen previa es obligatoria.',
        ],
        'username' => [
            'unique' => 'el nombre de usuario ya existe.',
            'min' => 'el nombre de usuario es de minimo :min caracteres.',
            'max' => 'el nombre de usuario debe tener un máximo de :max caracteres.',
        ],
        'email' => [
            'required' => 'email obligatorio.',
            'email' => 'el correo debe tener una direccion valida.',
            'max' => 'el correo no debe de exceder de :max caracteres.',
            'unique' => 'dirección ya ocupada.',
        ],
        'password' => [
            'required' => 'contraseña obligatoria.',
            'min' => 'la contraseña debe de tener un minimo de :min caracteres.',
            'max' => 'la contraseña debe de tener un maximo de :max caracteres.',
        ],
        'file' => [
            'required' => 'imagen obligatoria.',
            'image' => 'escoge una imagen.',
            'mimes' => 'archivo no valido.',
            'size' => 'la imagen debe de ser de :size kilobytes.',
        ],
    ],



    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [],

];