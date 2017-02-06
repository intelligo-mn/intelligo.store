<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TimeController extends Controller
{
    //
   	public function index() {
   		return view('time/index');
   	}


   	protected function timeAdded(Request $request)
    {
        $this->validate($request, $this->rules());

        $time = $this->createTime($request->all());

        return redirect($this->index());
    }

    /**
     * Цаг бүртгэлд шаардлагатай мэдээлэл шалгах
     *
     * @return array
     */
    private $form_rules = [
        'sector'       => 'required',
        'service'      => 'required',
        'service_date' => 'required',
        'userName'     => 'required|min:6',
        'userNumber'   => 'required',
        'addition'     => 'required',
        'description'  => 'required',
    ];

    public function store(Request $request)
    {
        $v = \Validator::make($request->all(), $this->form_rules);

        if ($v->fails()) {
            return \Response::json(['success' => false, 'message' => 'Цаг авах боломжгүй', 'class' => 'alert alert-danger']);
        }

        $this->resetDefault();

        $time = new Time();
        $time->sector = $request->get('sector');
        $time->service = $request->get('service');
        $time->service_date = $request->get('service_date');
        $time->userName = $request->get('userName');
        $time->userNumber = $request->get('userNumber');
        $time->addition = $request->get('addition');
        $time->description = $request->get('description');
        $time->save();

        if ($time) {
            \Session::put('message', trans('address.success_save'));
            \Session::save();

            return \Response::json(['success' => true, 'callback' => '/time']);
        } else {
            return \Response::json(['success' => false, 'message' => 'Алдаа', 'class' => 'alert alert-danger']);
        }
    }


}
