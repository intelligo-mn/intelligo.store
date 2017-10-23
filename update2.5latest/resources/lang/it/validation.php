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

    'accepted'             => 'Questo :attribute deve essere accettato.',
    'active_url'           => 'Questo :attribute non è un URL valido.',
    'after'                => 'Questo :attribute deve essere una data successiva :date.',
    'alpha'                => 'Questo :attribute può contenere solo lettere.',
    'alpha_dash'           => 'Questo :attribute può contenere solo lettere, numeri e trattini.',
    'alpha_num'            => 'Questo :attribute può contenere solo lettere numeri.',
    'array'                => 'Questo :attribute deve essere un array.',
    'before'               => 'Questo :attribute deve essere una data prima :date.',
    'between'              => [
        'numeric' => 'Questo :attribute deve essere compreso tra :min e :max.',
        'file'    => 'Questo :attribute deve essere compreso tra :min e :max kilobytes.',
        'string'  => 'Questo :attribute deve essere compreso tra :min e :max caratteri.',
        'array'   => 'Questo :attribute deve avere tra :min e :max elementi.',
    ],
    'boolean'              => 'Questo :attribute campo deve essere vero o falso.',
    'confirmed'            => 'Questo :attribute la conferma non corrisponde.',
    'date'                 => 'Questo :attribute Non è una data valida.',
    'date_format'          => 'Questo :attribute non corrisponde al formato :format.',
    'different'            => 'Questo :attribute e :other devono essere diversi.',
    'digits'               => 'Questo :attribute deve essere :digits cifre.',
    'digits_between'       => 'Questo :attribute deve essere compreso tra :min e :max cifre.',
    'email'                => 'Questo :attribute deve essere un indirizzo e-mail valido.',
    'exists'               => 'Questo selezionato :attribute non è valido.',
    'filled'               => 'Questo :attribute campo è richiesto.',
    'image'                => 'Questo :attribute deve essere una immagine.',
    'in'                   => 'Questo selezionato :attribute non è valido.',
    'integer'              => 'Questo :attribute deve essere un numero intero.',
    'ip'                   => 'Questo :attribute deve essere un indirizzo IP valido.',
    'json'                 => 'Questo :attribute deve essere una stringa JSON valida.',
    'max'                  => [
        'numeric' => 'Questo :attribute non può essere superiore :max.',
        'file'    => 'Questo :attribute non può essere superiore :max kilobytes.',
        'string'  => 'Questo :attribute non può essere superiore :max caratteri.',
        'array'   => 'Questo :attribute non possono avere più di :max cifre.',
    ],
    'mimes'                => 'Questo :attribute deve essere un file di type: :values.',
    'min'                  => [
        'numeric' => 'Questo :attribute deve essere almeno :min.',
        'file'    => 'Questo :attribute deve essere almeno :min kilobytes.',
        'string'  => 'Questo :attribute deve essere almeno :min caratteri.',
        'array'   => 'Questo :attribute deve avere almeno :min cifre.',
    ],
    'not_in'               => 'Questo selezionato :attribute non è valido.',
    'numeric'              => 'Questo :attribute deve essere un numero.',
    'regex'                => 'Questo :attribute formato non valido.',
    'required'             => 'Questo :attribute il campo è obbligatiorio.',
    'required_if'          => 'Questo :attribute è un campo obbligatorio quando :other e :value.',
    'required_with'        => 'Questo :attribute è un campo obbligatorio quando :values è presente.',
    'required_with_all'    => 'Questo :attribute è un campo obbligatorio quando :values è presente.',
    'required_without'     => 'Questo :attribute è un campo obbligatorio quando :values non è presente.',
    'required_without_all' => 'Questo :attribute è un campo obbligatorio quando nessuno dei :values sono presenti.',
    'same'                 => 'Questo :attribute e :other deve combaciare.',
    'size'                 => [
        'numeric' => 'Questo :attribute deve essere :size.',
        'file'    => 'Questo :attribute deve essere :size kilobytes.',
        'string'  => 'Questo :attribute deve essere :size caratteri.',
        'array'   => 'Questo :attribute deve contenere :size cifre.',
    ],
    'string'               => 'Questo :attribute deve essere una stringa.',
    'timezone'             => 'Questo :attribute deve essere una zona valida.',
    'unique'               => 'Questo :attribute è già stata preso.',
    'url'                  => 'Questo :attribute formato non è valido.',

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
            'required' => 'Errore.',
        ],
        'title' => [
            'required' => 'Il Titolo è richiesto.',
            'unique'  => ' Il Titolo è già stato preso da altri post.',
            'min' => 'Il Titolo deve essere almeno :min caratteri.',
            'max' => 'Il Titolo non può essere superiore a :max caratteri.',
        ],
        'body' => 'La Descrizione è richiesta.',
        'category' => 'La Categoria è richiesta.',
        'description' => [
            'required' => 'La Descrizione è richiesta.',
            'min' => 'Descrizione deve essere almeno :min caratteri.',
            'max' => 'Descrizione non può essere maggiore di :max caratteri.',
        ],
        'thumb' => [
            'required' => 'È richiesto Immagine in anteprima.',
        ],
        'username' => [
            'unique' => 'Il Nome utente è già stata preso da un altro utente.',
            'min' => 'Nome utente deve essere almeno :min caratteri.',
            'max' => 'Nome utente non può essere superiore a :max caratteri.',
        ],
        'email' => [
            'required' => 'Email è richiesta.',
            'email' => 'Email deve essere un indirizzo email valido.',
            'max' => 'Email non può essere superiore a :max caratteri.',
            'unique' => 'Email è già in uso.',
        ],
        'password' => [
            'required' => 'Password è richiesta.',
            'min' => 'La password deve essere almeno :min caratteri.',
            'max' => 'Password non può essere superiore a :max caratteri.',
        ],
        'file' => [
            'required' => 'Image è richiesta.',
            'image' => 'Scegli una immagine da caricare.',
            'mimes' => 'Non è un tipo di file valido.',
            'size' => 'Imaggine deve essere :size kilobytes.',
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
