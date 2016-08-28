<?php

namespace app\Http\Controllers;

/*
 * Antvel - Addresses Controller
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Address;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class AddressesController extends Controller
{
    private $form_rules = [
        'name_contact' => 'required|string|max:60',
        'line1'        => 'required|max:100',
        'line2'        => 'max:100',
        'phone'        => 'required|max:20',
        'zipcode'      => 'required|numeric|min:3',
        'city'         => 'required|string',
        'country'      => 'required',
        'state'        => 'required|string',
    ];

    //Paneles por defecto Usuarios
    private $view_panel = [
        'left'   => ['width' => '2', 'class' => 'user-panel'],
        'center' => ['width' => '10'],
    ];

    /**
     * Pasa todas las direcciones a default 0.
     *
     * @return [type] [description]
     */
    private function resetDefault()
    {
        Address::where('user_id', \Auth::id())->where('default', 1)->update(['default' => 0]);
    }

    /**
     * Establece una direccion por defecto para el usuario.
     *
     * @param Request $request [description]
     * @param int     $id      ID del usuario
     */
    public function setDefault(Request $request)
    {
        $this->resetDefault();

        $default = Address::where('user_id', \Auth::id())
            ->where('id', $request->get('id'))
            ->update(['default' => 1]);

        return \Response::json(['success' => true, 'url' => '/user/address'], 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $addresses = \Auth::user()
            ->addresses
            ->sortByDesc('default');

        $panel = $this->view_panel;

        return view('address.list', compact('addresses', 'panel'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('address.form_create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $user = \Auth::user();

        $v = \Validator::make($request->all(), $this->form_rules);

        if ($v->fails()) {
            return \Response::json(['success' => false, 'message' => trans('address.error_validation'), 'class' => 'alert alert-danger']);
        }

        $this->resetDefault();

        $address = new Address();
        $address->name_contact = $request->get('name_contact');
        $address->line1 = $request->get('line1');
        $address->line2 = $request->get('line2');
        $address->city = $request->get('city');
        $address->state = $request->get('state');
        $address->zipcode = $request->get('zipcode');
        $address->country = $request->get('country');
        $address->phone = $request->get('phone');
        $address->user_id = $user->id;
        $address->default = '1';
        $address->save();

        if ($address) {
            \Session::put('message', trans('address.success_save'));
            \Session::save();

            return \Response::json(['success' => true, 'callback' => '/user/address']);
        } else {
            return \Response::json(['success' => false, 'message' => trans('address.error_updating'), 'class' => 'alert alert-danger']);
        }
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
        //
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
        try {
            $address = Address::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            throw new NotFoundHttpException();
        }

        return view('address.form_edit', compact('address'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $v = \Validator::make($request->all(), $this->form_rules);

        if ($v->fails()) {
            return \Response::json(['success' => false, 'message' => trans('address.error_validation'), 'class' => 'alert alert-danger']);
        }

        $address = Address::find($id);
        $address->fill($request->all());
        $address->save();

        if ($address) {
            \Session::put('message', trans('address.success_update'));
            \Session::save();

            return \Response::json(['success' => true, 'callback' => '/user/address']);
        } else {
            return \Response::json(['success' => false, 'message' => trans('address.error_updating'), 'class' => 'alert alert-danger']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function destroy(Request $request)
    {
        Address::destroy($request->get('id'));

        return \Response::json(['success' => true, 'url' => '/user/address'], 200);
    }
}
