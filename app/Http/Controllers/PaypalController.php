<?php

namespace app\Http\Controllers;

/*
 * Antvel - PayPal Controller
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Http\Controllers\Controller;
use App\PaypalOrder;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\URL;
use PayPal\Api\Amount;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\PaymentExecution;
use PayPal\Api\RedirectUrls;
use PayPal\Api\Transaction;
use PayPal\Auth\OAuthTokenCredential;
use PayPal\Rest\ApiContext;

class PaypalController extends Controller
{
    private $_api_context;

    private $panel = [
        'center' => ['width' => '12'],
    ];

    public function __construct()
    {
        // setup PayPal api context
        $paypal_conf = Config::get('paypal');
        $this->_api_context = new ApiContext(new OAuthTokenCredential($paypal_conf['client_id'], $paypal_conf['secret']));
        $this->_api_context->setConfig($paypal_conf['settings']);
    }

    public function buyPoints()
    {
        $panel = $this->panel;

        return view('paypal.get_points', compact('panel'));
    }

    public function postPayment(Request $request)
    {
        $quantity = $request->get('quantity');
        $payer = new Payer();
        $payer->setPaymentMethod('paypal');
        $item_1 = new Item();
        $item_1->setName(trans('store.paypal.item_name1').env('PAYPAL_POINTS_PER_DOLLAR', 1000).trans('store.paypal.item_name2')) // item name
        ->setCurrency('USD')
            ->setQuantity($quantity)
            ->setPrice('1'); // unit price
        // add item to list
        $item_list = new ItemList();
        $item_list->setItems([$item_1]);
        $amount = new Amount();
        $amount->setCurrency('USD')
            ->setTotal($quantity);
        $transaction = new Transaction();
        $transaction->setAmount($amount)
            ->setItemList($item_list)
            ->setDescription('Your transaction description');
        $redirect_urls = new RedirectUrls();
        $redirect_urls->setReturnUrl(URL::route('payment.status')) // Specify return URL
        ->setCancelUrl(URL::route('payment.status'));
        $payment = new Payment();
        $payment->setIntent('Sale')
            ->setPayer($payer)
            ->setRedirectUrls($redirect_urls)
            ->setTransactions([$transaction]);
        try {
            $payment->create($this->_api_context);
        } catch (\PayPal\Exception\PPConnectionException $ex) {
            if (\Config::get('app.debug')) {
                echo 'Exception: '.$ex->getMessage().PHP_EOL;
                $err_data = json_decode($ex->getData(), true);
                exit;
            } else {
                die('Some error occur, sorry for inconvenient');
            }
        }
        foreach ($payment->getLinks() as $link) {
            if ($link->getRel() == 'approval_url') {
                $redirect_url = $link->getHref();
                break;
            }
        }
        // add payment ID to session
        Session::put('paypal_payment_id', $payment->getId());
        Session::save();
        if (isset($redirect_url)) {
            // redirect to paypal
            return Redirect::away($redirect_url);
        }

        return Redirect::route('original.route')
            ->with('error', 'Unknown error occurred');
    }

    public function getPaymentStatus()
    {
        // Get the payment ID before session clear
        $payment_id = Session::get('paypal_payment_id');
        // clear the session payment ID
        Session::forget('paypal_payment_id');
        if (empty(Input::get('PayerID')) || empty(Input::get('token'))) {
            return Redirect::route('paypal.buy_points')
                ->withErrors(['main_error' => [trans('store.paypal.user_cancelled')]]);
        }
        $payment = Payment::get($payment_id, $this->_api_context);
        // PaymentExecution object includes information necessary
        // to execute a PayPal account payment.
        // The payer_id is added to the request query parameters
        // when the user is redirected from paypal back to antvel
        $execution = new PaymentExecution();
        $execution->setPayerId(Input::get('PayerID'));
        // Execute the payment
        $result = $payment->execute($execution, $this->_api_context);
        //echo '<pre>';print_r($result);echo '</pre>';
        //exit;
        if ($result->getState() == 'approved') {
            $transactions = $result->getTransactions();
            $paypal_id = $result->getId();
            $amount = 0;
            // Checks the amount in USD that the user got, it may come on many transactions
            // Maybe due to spliting the purchase on paypal and credit card, but the
            // result comes in on various transactions
            foreach ($transactions as $data) {
                $amount += $data->getAmount()->total;
            }
            $order_links = $result->getLinks();
            foreach ($order_links as $link) {
                $order_link = $link;
            }

            $user = User::findOrFail(\Auth::id());

            $paypal_order = new PaypalOrder();
            $paypal_order->user_id = $user->id;
            $paypal_order->payment_id = $paypal_id;
            $paypal_order->amount = $amount;
            $paypal_order->save();

            $total_points = env('PAYPAL_POINTS_PER_DOLLAR', 1000) * $amount;

            $user->modifyPoints($total_points, 13, $paypal_order->id);

            Session::flash('message', trans('store.paypal.approved').' '.$amount);

            return Redirect::route('paypal.buy_points')
                ->with('success', 'Payment success');
        }

        return Redirect::route('paypal.buy_points')
            ->withErrors(['main_error' => [trans('store.paypal.error')]]);
    }
}
