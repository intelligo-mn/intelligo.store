<?php

namespace app\Console\Commands;

use App\Order;
use App\User;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;

class CloseOrdersByTime extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'antvel:closeorders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '(AntVel) This command is used to close orders that has been marked as SENT, but the receiving user has not marked as closed.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function fire()
    {
        $days_to_wait = Config::get('store.days_to_close');
        //\DB::enableQueryLog();
        $this->info("Checks If there are orders to be closed ($days_to_wait Days Old)");
        //Checks all closed orders that has not been rated nor mail has been sent and where updated 5 days ago
        //and the mails has not been sent yet
        $orders = Order::where('status', 'sent')
            ->where('updated_at', '<', Carbon::now()->subDays($days_to_wait))
            ->get();
        //$this->info(print_r(\DB::getQueryLog()));
        $this->info('Orders That need to be closed: '.$orders->count());
        foreach ($orders as $order) {
            $this->info('Order: '.$order->id.' Needs to be closed');
            $buyer = User::find($order->user_id);

            if ($buyer) {
                $email = $buyer->email;
                $mail_subject = trans('email.cron_emails.order_closed_for_time');
                $data = [
                    'email_message' => $mail_subject,
                    'email'         => $email,
                    'subject'       => $mail_subject,
                    'order_id'      => $order->id,
                ];
                Mail::queue('emails.cron.close_order', $data, function ($message) use ($data) {
                    $message->to($data['email'])->subject($data['subject']);
                });

                $order->status = 'closed';
                $order->end_date = DB::raw('NOW()');
                $seller = User::findOrFail($order->seller_id);
                if ($seller) {
                    $order_content = OrderDetail::where('order_id', $order->id)->get();
                    $total_points = 0;
                    foreach ($order_content as $order_detail) {
                        $total_points += $order_detail->quantity * $order_detail->price;
                        $order_detail->status = 0;
                        $order_detail->delivery_date = DB::raw('NOW()');
                        $order_detail->save();
                        if ($order_detail->product->type != 'item') {
                            switch ($order_detail->product->type) {
                                case 'key':
                                    $virtualProductsId = VirtualProductOrder::select('virtual_product_id')->where('order_id', $order->id)->get()->toArray();
                                    VirtualProduct::where('product_id', $order_detail->product_id)->whereIn('id', $virtualProductsId)->update(['status' => 'closed']);
                                    break;
                            }
                        }
                    }
                    $seller->modifyPoints($total_points, 8, $order->id);
                }
                $order->save();
            }
        }
    }

    /**
     * Get the console command arguments.
     *
     * @return array
     */
    protected function getArguments()
    {
        return [
            //['example', InputArgument::REQUIRED, 'An example argument.'],
        ];
    }

    /**
     * Get the console command options.
     *
     * @return array
     */
    protected function getOptions()
    {
        return [
            ['example', null, InputOption::VALUE_OPTIONAL, 'An example option.', null],
        ];
    }
}
