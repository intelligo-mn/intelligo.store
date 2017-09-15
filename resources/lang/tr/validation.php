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

    'accepted'             => 'The :attribute must be accepted.',
    'active_url'           => ':attribute geçerli bir url olmalıdır.',
    'after'                => 'The :attribute must be a date after :date.',
    'alpha'                => 'The :attribute may only contain letters.',
    'alpha_dash'           => 'The :attribute may only contain letters, numbers, and dashes.',
    'alpha_num'            => 'The :attribute may only contain letters and numbers.',
    'array'                => 'The :attribute must be an array.',
    'before'               => 'The :attribute must be a date before :date.',
    'between'              => [
        'numeric' => ' :attribute, minimum :min, maksimum  :max karakter olmalıdır.',
        'file'    => 'The :attribute must be between :min and :max kilobytes.',
        'string'  => 'The :attribute must be between :min and :max characters.',
        'array'   => 'The :attribute must have between :min and :max items.',
    ],
    'boolean'              => 'The :attribute field must be true or false.',
    'confirmed'            => ' :attribute kayıtlarımızla uğuşmamaktadır.',
    'date'                 => ' :attribute geçerli bir tarih değildir.',
    'date_format'          => 'The :attribute does not match the format :format.',
    'different'            => 'The :attribute and :other must be different.',
    'digits'               => 'The :attribute must be :digits digits.',
    'digits_between'       => 'The :attribute must be between :min and :max digits.',
    'email'                => 'Geçerli bir mail adresi girmeniz gerekmektedir.',
    'exists'               => 'Seçili :attribute geçerli değildir.',
    'filled'               => 'The :attribute field is required.',
    'image'                => 'Geçerli bir resim tipi seçiniz',
    'in'                   => 'The selected :attribute is invalid.',
    'integer'              => 'The :attribute must be an integer.',
    'ip'                   => 'The :attribute must be a valid IP address.',
    'json'                 => 'The :attribute must be a valid JSON string.',
    'max'                  => [
        'numeric' => ' :attribute, maksimum :max karakter olmalıdır.',
        'file'    => ' :attribute,  :max kilobaytdan büyük olamaz.',
        'string'  => 'The :attribute may not be greater than :max characters.',
        'array'   => 'The :attribute may not have more than :max items.',
    ],
    'mimes'                => 'Lütfen geçerli bir dosya türü seçiniz.',
    'min'                  => [
        'numeric' => ' :attribute, minumum :min karakter olmalıdır.',
        'file'    => 'The :attribute must be at least :min kilobytes.',
        'string'  => 'The :attribute must be at least :min characters.',
        'array'   => 'The :attribute must have at least :min items.',
    ],
    'not_in'               => 'The selected :attribute is invalid.',
    'numeric'              => ' :attribute, bir sayı olmalıdır.',
    'regex'                => 'The :attribute format is invalid.',
    'required'             => ' :attribute alanı doldurulması zorunludur.',
    'required_if'          => 'The :attribute field is required when :other is :value.',
    'required_with'        => 'The :attribute field is required when :values is present.',
    'required_with_all'    => 'The :attribute field is required when :values is present.',
    'required_without'     => 'The :attribute field is required when :values is not present.',
    'required_without_all' => 'The :attribute field is required when none of :values are present.',
    'same'                 => ' :attribute ile :other aynı olmalıdır.',
    'size'                 => [
        'numeric' => ' :attribute, boyutları :size olmalıdır.',
        'file'    => 'The :attribute must be :size kilobytes.',
        'string'  => 'The :attribute must be :size characters.',
        'array'   => 'The :attribute must contain :size items.',
    ],
    'string'               => 'The :attribute must be a string.',
    'timezone'             => 'The :attribute must be a valid zone.',
    'unique'               => ' :attribute, zaten kullanılmaktadır.',
    'url'                  => ' :attribute geçerli bir adres değildir.',

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
            'required' => 'Zorunlu alanları doldurunuz.',
        ],
        'title' => [
            'required' => 'Başlık Boş Kalamaz.',
            'unique'  => 'Başlık Boş Kalamaz.',
            'min' => 'Başlık minimum :min karakter olmalıdır.',
            'max' => 'Başlık maxsimum :max karakter olmalıdır.',
        ],
        'body' => 'Yazı alanı doldurulmalıdır',
        'category' => 'Lütfen bir kategori seçin',
        'description' => [
            'required' => 'Detay alanı',
            'min' => 'Detay alanı  minimum :min karakter olmalıdır.',
            'max' => 'Detay alanı  maxsimum :max karakter olmalıdır.',
        ],
        'thumb' => [
            'required' => 'Önizleme resim alanı doldurulmalıdır.',
        ],
        'username' => [
            'unique' => 'Bu kullanıcı adı alınmış',
            'min' => 'Kullanıcı adı minumum 6 karakter olmalıdır..',
            'max' => 'Kullanıcı adı maksimum 15 karakter olmalıdır',
        ],
        'email' => [
            'required' => 'Email gereklidir',
            'email' => 'Geçerli bir email girin',
            'max' => 'bu email çok uzun',
            'unique' => 'Bu email ile bir kullanıcı mevcut',
        ],
        'password' => [
            'required' => 'Şifre gereklidir',
            'min' => 'Şifre alanı minimum 6 karakter olmalıdır',
            'max' => 'Şifre maksimum 15 karakter olmalıdır',
        ],
        'file' => [
            'required' => 'Resim alanı seçilmedir.',
            'image' => 'Yüklemek için bir resim seçin.',
            'mimes' => 'Resim formatı geçerli bir format olmalıdır.',
            'size' => 'Resim boyutları istenenden yüksektir.',
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
