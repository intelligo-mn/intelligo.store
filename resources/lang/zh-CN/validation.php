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

    'some_problems_input' => '您的输入有误',

    'accepted'             => ':attribute 必须接受通过。',
    'active_url'           => ':attribute 不是一个有效的网址。',
    'after'                => ':attribute 必须在 :date 时间之后。',
    'alpha'                => ':attribute 只能由字母组成。',
    'alpha_dash'           => ':attribute 只能由字母、数字或连接号（-）组成。',
    'alpha_num'            => ':attribute 只能由字母或数字组成。',
    'array'                => ':attribute 必须是一个列表。',
    'before'               => ':attribute 必须在 :date 时间之前。',
    'between'              => [
        'numeric' => ':attribute 必须在 :min 和 :max 之间。',
        'file'    => ':attribute 必须在 :min 和 :max kb之间。',
        'string'  => ':attribute 必须在 :min 和 :max 个字符之间。',
        'array'   => ':attribute 必须在 :min 和 :max 个元素之间。',
    ],
    'boolean'              => ':attribute 项必须为是或否。',
    'confirmed'            => ':attribute 两次输入不相同。',
    'date'                 => ':attribute 不是一个有效的日期。',
    'date_format'          => ':attribute 不符合这个格式 :format 。',
    'different'            => ':attribute 和 :other 不能相同。',
    'digits'               => ':attribute 必须是 :digits 位。',
    'digits_between'       => ':attribute 必须在 :min 和 :max 位之间。',
    'email'                => ':attribute 必须是有效的邮箱。',
    'filled'               => ':attribute 项必填。',
    'exists'               => '选中的 :attribute 不存在。',
    'image'                => ':attribute 必须是图象。',
    'in'                   => '选中的 :attribute 无效。',
    'integer'              => ':attribute 必须是整数。',
    'ip'                   => ':attribute 必须是有效的IP地址。',
    'max'                  => [
        'numeric' => ':attribute 不能大于 :max 。',
        'file'    => ':attribute 不能大于 :max kb。',
        'string'  => ':attribute 不能大于 :max 个字符。',
        'array'   => ':attribute 不能多于 :max 个元素。',
    ],
    'mimes'                => ':attribute 必须是 :values 类型的文件。',
    'min'                  => [
        'numeric' => ':attribute 不能小于 :min 。',
        'file'    => ':attribute 不能小于 :min kb。',
        'string'  => ':attribute 不能小于 :min 个字符。',
        'array'   => ':attribute 不能少于 :min 个元素。',
    ],
    'not_in'               => '选中的 :attribute 无效。',
    'numeric'              => ':attribute 必须是数字。',
    'regex'                => ':attribute 格式无效。',
    'required'             => ':attribute 项必填。',
    'required_if'          => ':attribute 项必填，当 :other 是 :value 时。',
    'required_with'        => ':attribute 项必填，当 :values 存在时。',
    'required_with_all'    => ':attribute 项必填，当 :values 存在时。',
    'required_without'     => ':attribute 项必填，当 :values 不存在时。',
    'required_without_all' => ':attribute 项必填，当 :values 都不存在时。',
    'same'                 => ':attribute 和 :other 必须相同。',
    'size'                 => [
        'numeric' => ':attribute 必须是 :size.',
        'file'    => ':attribute 必须是 :size kb。',
        'string'  => ':attribute 必须是 :size 个字符。',
        'array'   => ':attribute 必须有 :size 个元素。',
    ],
    'unique'               => ':attribute 已被占用。',
    'url'                  => ':attribute 格式无效。',
    'timezone'             => ':attribute 必须是有效的时区。',

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
        'required' => '验证码必填。',
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
        'first_name' => '名',
        'last_name'  => '姓',
        'email'      => '邮箱',
        'password'   => '密码',
        'nickname'   => '用户名（昵称）',
    ],

    'recaptcha' => '验证码不正确。',

];
