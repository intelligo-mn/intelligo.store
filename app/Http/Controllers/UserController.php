<?php

namespace app\Http\Controllers;

/*
 * Antvel - Users Controller
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Business;
use App\Helpers\File;
use App\Helpers\userHelper;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ProductsController;
use App\Order;
use App\Person;
use App\Product;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class UserController extends Controller
{
    private $form_rules = [
        'email'                 => 'required|email|unique:users,email,',
        'nickname'              => 'required|max:255|unique:users,nickname,',
        'old_password'          => 'required_with:password,password_confirmation',
        'password'              => 'required_with:old_password,password_confirmation|confirmed|different:old_password',
        'password_confirmation' => 'required_with:old_password,password|different:old_password|same:password',
    ];

    /**
     * Inicializa variables para la validacion de perfil.
     */
    public function __construct()
    {
        $user = \Auth::user();

        if ($user) {
            // Validacion de campos unique
            $this->form_rules['email'] .= $user->id;
            $this->form_rules['nickname'] .= $user->id;

            // Validaciones segun tipo de user
            if ($user->hasRole(['admin', 'person'])) {
                $form_rules['first_name'] = 'required|min:3|max:20|string';
                $form_rules['last_name'] = 'required|min:3|max:20|string';
            } else {
                $form_rules['business_name'] = 'required|min:5|max:30|string';
            }
        }
    }

    //Paneles por defecto Usuarios
    private $view_panel = [
        'left'   => ['width' => '2', 'class' => 'user-panel'],
        'center' => ['width' => '10'],
    ];

    /**
     * Sube imagen de perfil y background de usuario.
     *
     * @param Request $request [description]
     *
     * @return [String] [Url de la imagen]
     */
    public function upload(Request $request)
    {
        $v = \Validator::make($request->all(), ['file' => 'image']);
        if ($v->fails()) {
            return $v->errors()->toJson();
        }

        return File::section('profile_img')->upload($request->file('file'));
    }

    /**
     * Vista de dashboard de usuario.
     *
     * @return Illuminate\Contracts\View [Vista de dashboard]
     */
    public function dashBoard()
    {
        $panel = $this->view_panel;
        $query = Product::where('user_id', \Auth::id())->Free()->get();
        $products = ['active' => 0, 'inactive' => 0, 'lowStock' => 0, 'all' => $query->count()];
        foreach ($query as $row) {
            if ($row->status) {
                $products['active']++;
            } else {
                $products['inactive']++;
            }
            if ($row->stock <= $row->low_stock) {
                $products['lowStock']++;
            }
        }
        unset($query);
        $query = Order::auth()->ofType('order')->get();
        $orders = ['closed' => 0, 'open' => 0, 'cancelled' => 0, 'all' => $query->count(), 'total' => 0, 'nopRate' => 0];
        foreach ($query as $row) {
            if ($row->status == 'cancelled') {
                $orders['cancelled']++;
            } elseif ($row->status == 'closed') {
                $orders['closed']++;
            } else {
                $orders['open']++;
            }
            foreach ($row->details as $deta) {
                $orders['total'] += ($deta->quantity * $deta->price);
                if ($row->status == 'closed' && !$deta->rate) {
                    $orders['nopRate']++;
                }
            }
        }
        unset($query);
        $sales = null;
        if (\Auth::check() && \Auth::user()->hasRole(['business', 'admin'])) {
            $orders = Order::where('seller_id', \Auth::user()->id)->ofType('order')->get();
            $sales = ['closed' => 0, 'open' => 0, 'cancelled' => 0, 'all' => $orders->count(), 'total' => 0, 'rate' => 0, 'numRate' => 0, 'totalRate' => 0, 'nopRate' => 0];
            foreach ($orders as $row) {
                if ($row->status == 'cancelled') {
                    $sales['cancelled']++;
                } elseif ($row->status == 'closed') {
                    $sales['closed']++;
                } else {
                    $sales['open']++;
                }
                foreach ($row->details as $deta) {
                    $sales['total'] += ($deta->quantity * $deta->price);
                    if ($row->status == 'closed' && $deta->rate) {
                        $sales['numRate']++;
                        $sales['totalRate'] = $sales['totalRate'] + $deta->rate;
                    }
                    if ($row->status == 'closed' && !$deta->rate) {
                        $sales['nopRate']++;
                    }
                }
            }
            if ($sales['numRate']) {
                $sales['rate'] = $sales['totalRate'] / $sales['numRate'];
            }
        }

        return view('user.dashboard', compact('panel', 'products', 'orders', 'sales'));
    }

    /**
     * MUestra el perfil del usuario.
     *
     * @return Illuminate\Contracts\View Vista de perfil
     */
    public function profile()
    {
        $user = User::findOrFail(\Auth::id())->relationsToArray();
        $panel = $this->view_panel;

        return view('user.profile', compact('panel', 'user'));
    }

    /**
     * Elimina el perfil del usuario(SOFT DELETE).
     *
     * @return string json
     */
    public function deleteAccount(Request $request)
    {
        $user = User::findOrFail(\Auth::id());
        $user->delete();

        if ($request->wantsJson()) {
            return \Response::json(['success' => true, 'message' => trans('user.profile_disabled')]);
        }

        \Session::flash('message', trans('user.profile_disabled'));

        return redirect()->back();
    }

    /**
     * Desactiva el perfil del usuario.
     *
     * @return string json
     */
    public function disableProfile(Request $request)
    {
        $user = \Auth::user();
        $date = \Carbon\Carbon::now();
        $user->update(['disabled_at' => $date]);

        if ($request->wantsJson()) {
            return \Response::json(['success' => true, 'message' => trans('user.profile_disabled'), 'date' => $date->toDateTimeString()]);
        }

        \Session::flash('message', trans('user.profile_disabled'));

        return redirect()->back();
    }

    /**
     * Activa el perfil del usuario.
     *
     * @return string json
     */
    public function activeProfile(Request $request)
    {
        $user = \Auth::user();
        $user->update(['disabled_at' => null]);

        if ($request->wantsJson()) {
            return \Response::json(['success' => true, 'message' => trans('user.profile_enabled')]);
        }

        \Session::flash('message', trans('user.profile_enabled'));

        return redirect()->back();
    }

    /**
     * Guarda los cambio del usuario.
     *
     * @param Request $request peticion
     *
     * @return Laravel Redirect
     */
    public function saveProfile(Request $request)
    {
        $user = \Auth::user();
        $v = \Validator::make($request->all(), $this->form_rules);

        if ($v->fails()) {
            return redirect()->back()->withErrors($v->errors())->withInput();
        }

        //user update
        \Session::flash('message', trans('user.saved'));
        $user->fill($request->all());
        $user->pic_url = $request->get('pic_url');
        $user->password = bcrypt($request->get('password'));
        $user->save();

        //bussiness update
        if ($request->get('business_name') !== null && trim($request->get('business_name')) != '') {
            $business = Business::find($user->id);
            $business->business_name = $request->get('business_name');
            $business->save();
        }

        //person update
        if ($request->get('first_name') !== null && trim($request->get('first_name')) != '') {
            $person = Person::find($user->id);
            $person->first_name = $request->get('first_name');
            $person->last_name = $request->get('last_name');
            $person->birthday = $request->get('birthday');
            $person->sex = $request->get('sex');
            $person->save();
        }

        return redirect()->back();
    }

    /**
     * Save the user preferences.
     *
     * @param [String] $index user preference key array
     * @param [Array]  $tags  products tags
     */
    public static function setPreferences($index = '', $tags = [])
    {
        $user = \Auth::user();
        if ($user) {
            $userHelper = new UserHelper();
            $categories = ProductsController::getTagsCategories($tags);
            $user->preferences = $userHelper->preferencesToJson($user->preferences, $index, $tags, $categories);
            $user->save();
        }
    }

    /**
     * Return the users preferences taking in account the key requered.
     *
     * @param [interger] $user_id         user id
     * @param [string]   $preferences_key user preferences array key
     *
     * @return [Array] info to evaluate user products suggestion
     */
    public static function getPreferences($preferences_key = '')
    {
        $preferences = (\Auth::user()) ? \Auth::user()->preferences : '';

        //getting the needle
        $userHelper = new UserHelper();

        return $userHelper->getPreferencesNeedle($preferences, $preferences_key);
    }

    public function getPoints()
    {
        $points = ['points' => '0'];
        $user = \Auth::user();
        if ($user) {
            $points = ['points' => $user->current_points];
        }

        return \Response::json($points);
    }

    /**
     * accountVerification allows users account verification.
     *
     * @param [string] $token is the var sent to users email to validate if the account belongs to him or not.
     */
    public function accountVerification($token)
    {
        //validating if the token retrieved is valid
        $user = User::select(['id'])
            ->where(\DB::raw('md5(concat(email, "_", "'.csrf_token().'", "_", email))'), 'LIKE', $token)
            ->first();

        if ($user) {
            $name = $user->name.' '.$user->last_name;
            Session::put('message', str_replace('[name]', $name, trans('user.account_verified_ok_message')));
        } else {
            Session::put('messageClass', 'alert alert-danger');
            Session::put('message', trans('user.account_verified_error_message'));
        }

        Session::save();

        return redirect('/');
    }
}
