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

    'some_problems_input' => 'Таны оруулсан өгөгдөл буруу байна.',

    'accepted'             => ':attribute баталсан байх шаардлагатай.',
    'active_url'           => ':attribute талбарт зөв URL хаяг оруулна уу.',
    'after'                => ':attribute талбарт :date-с хойш огноо оруулна уу.',
    'alpha'                => ':attribute талбарт латин үсэг оруулна уу.',
    'alpha_dash'           => ':attribute талбарт латин үсэг, тоо болон зураас оруулах боломжтой.',
    'alpha_num'            => ':attribute талбарт латин үсэг болон тоо оруулах боломжтой.',
    'array'                => ':attribute талбар массив байх шаардлагатай.',
    'before'               => ':attribute талбарт :date-с өмнөх огноо оруулна уу.',
    'between'              => [
        'numeric' => ':attribute талбарт :min-:max хооронд тоо оруулна уу.',
        'file'    => ':attribute талбарт :min-:max килобайт хэмжээтэй файл оруулна уу.',
        'string'  => ':attribute талбарт :min-:max урттай текст оруулна уу.',
        'array'   => ':attribute массивт :min-:max элемэнт байх шаардлагатай.',
    ],
    'boolean'              => ':attribute талбарын утга үнэн эсвэл худал байх шаардлагатай.',
    'confirmed'            => ':attribute талбарын баталагажуулалт тохирохгүй байна.',
    'date'                 => ':attribute талбарт оруулсан огноо буруу байна.',
    'date_format'          => ':attribute талбарт :format хэлбэртэй огноо оруулна уу.',
    'different'            => ':attribute талбарт :other -с өөр утга оруулах шаардлагатай.',
    'digits'               => ':attribute талбарт дараах цифрүүдээс оруулах боломжтой. :digits.',
    'digits_between'       => ':attribute талбарт :min-:max хоорондох цифр оруулах боломжтой.',
    'dimensions'           => ':attribute талбарийн зургийн хэмжээс буруу байна.',
    'distinct'             => ':attribute талбарт ялгаатай утга оруулах шаардлагатай.',
    'email'                => ':attribute талбарт зөв и-мэйл хаяг оруулах шаардлагатай.',
    'exists'               => 'Сонгогдсон :attribute буруу байна.',
    'file'                 => ':attribute талбарт файл оруулах шаардлагатай.',
    'filled'               => ':attribute талбар шаардлагатай.',
    'image'                => ':attribute талбарт зураг оруулна уу.',
    'in'                   => 'Сонгогдсон :attribute буруу байна.',
    'in_array'             => ':attribute талбарт оруулсан утга :other -д байхгүй байна.',
    'integer'              => ':attribute талбарт бүхэл тоо оруулах шаардлагатай.',
    'ip'                   => ':attribute талбарт зөв IP хаяг оруулах шаардлагатай.',
    'json'                 => ':attribute талбарт зөв JSON тэмдэгт мөр оруулах шаардлагатай.',
    'max'                  => [
        'numeric' => ':attribute талбарт :max буюу түүнээс бага утга оруулна уу.',
        'file'    => ':attribute талбарт :max килобайтаас бага хэмжээтэй файл оруулна уу.',
        'string'  => ':attribute талбарт :max-с бага урттай текст оруулна уу.',
        'array'   => ':attribute талбарт хамгийн ихдээ :max элемэнт оруулах боломжтой.',
    ],

    'mimes'                => ':attribute талбарт дараах төрлийн файл оруулах боломжтой: :values.',
    'mimetypes'            => ':attribute талбарт дараах төрлийн файл оруулах боломжтой: :values.',
    'min'                  => [
        'numeric' => ':attribute талбарт :min буюу түүнээс их тоо оруулна уу.',
        'file'    => ':attribute талбарт :min килобайтаас их хэмжээтэй файл оруулна уу.',
        'string'  => ':attribute талбарт :min буюу түүнээс их үсэг бүхий текст оруулна уу.',
        'array'   => ':attribute талбарт хамгийн багадаа :min элемэнт оруулах боломжтой.',
    ],
    'not_in'               => 'Буруу :attribute сонгогдсон байна.',
    'numeric'              => ':attribute талбарт тоон утга оруулна уу.',
    'present'              => ':attribute талбар байх шаардлагатай.',
    'regex'                => ':attribute талбарт оруулсан утга буруу байна.',
    'required'             => ':attribute талбар шаардлагатай.',
    'required_if'          => 'Хэрэв :other :value бол :attribute табларт утга оруулах шаардлагатай.',
    'required_unless'      => ':other :values дотор байхгүй бол :attribute талбарт утга оруулах шаардлагатай.',
    'required_with'        => ':values утгуудийн аль нэг байвал :attribute талбар шаардлагатай.',
    'required_with_all'    => ':values утгууд байвал :attribute талбар шаардлагатай.',
    'required_without'     => ':attribute талбарт :values өгөгдөл байхгүй байна.',
    'required_without_all' => ':attribute талбарын шаардагдсан :values байна.',
    'same'                 => ':attribute and :other must match.',
    'size'                 => [
        'numeric' => ':attribute :size хэмжээтэй байх шаардлагатай.',
        'file'    => ':attribute :size килобайт хэмжээтэй байх шаардлагатай.',
        'string'  => ':attribute :size тэмдэгтийн урттай байх шаардлагатай.',
        'array'   => ':attribute :size элемэнттэй байх шаардлагатай.',
    ],
    'string'               => ':attribute талбарт текст оруулна уу.',
    'timezone'             => ':attribute талбарт зөв цагийн бүс оруулна уу.',
    'unique'               => 'Оруулсан :attribute аль хэдий нь бүртгэгдсэн байна.',
    'uploaded'             => ':attribute талбарт оруулсан файлыг хуулхад алдаа гарлаа.',
    'url'                  => ':attribute зөв url хаяг оруулна уу.',
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
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
        'g-recaptcha-response' => [
        'required' => 'Recaptcha талбарыг бөглөх шаардлагатай.',
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

    'attributes' => [
        'first_name' => 'Нэр',
        'last_name' => 'Овог',
        'email' => 'И-мэйл',
        'start' => 'Эхлэх',
        'end' => 'Дуусах',
        'price' => 'Үнэ',
        'amount' => 'Дүн',
        'gender' => 'Хүйс',
        'photo' => 'Зураг',
        'address1' => 'Хаяг 1',
        'address2' => 'Хаяг 2',
        'category_id' => 'Төрөл',
    ],

    'recaptcha' => 'Recaptcha алдаатай байна.',

];
