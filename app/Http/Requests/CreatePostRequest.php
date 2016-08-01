<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class CreatePostRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'forwho' => 'required',
            'title' => 'required|min:15|max:200',
            'category' => 'required',
            'text'  => 'required|min:25|max:5000'
        ];
    }
}
