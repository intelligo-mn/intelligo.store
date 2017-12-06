<?php

namespace Simexis\Installer\Request;

use Illuminate\Foundation\Http\FormRequest;
use Input;
use Lang;

class DatabaseRequest extends FormRequest {

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
			'host' => 'required',
			'database' => 'required',
			'username' => 'required',
		];
	}

	/**
	 * Set custom messages for validator errors.
	 *
	 * @return array
	 */
	public function attributes()
	{
		return [
			'host' => Lang::get('installer::installer.database.host'),
			'database' => Lang::get('installer::installer.database.database'),
			'username' => Lang::get('installer::installer.database.username'),
		];
	}

}