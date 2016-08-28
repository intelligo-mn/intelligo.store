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

class SendRateMails extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'antvel:mailrates';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '(AntVel) This command is used to check for pending order rates, and mail the clients the reminder.';

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
        $days_to_wait = Config::get('store.days_to_remind');
        //\DB::enableQueryLog();
        $this->info("Checks If there are orders to be rated ($days_to_wait Days Old)");
        //Checks all closed orders that has not been rated nor mail has been sent and where updated 5 days ago
        //and the mails has not been sent yet
        $orders = Order::where('rate', null)
            ->where('status', 'closed')
            ->where('rate_mail_sent', false)
            ->where('updated_at', '<', Carbon::now()->subDays($days_to_wait))
            ->get();
        //$this->info(print_r(\DB::getQueryLog()));
        $this->info('Orders That need mail: '.$orders->count());
        foreach ($orders as $order) {
            $this->info('Order: '.$order->id.' Needs to be rated, and mail has not been sent');
            $buyer = User::find($order->user_id);

            if ($buyer) {
                $email = $buyer->email;
                $mail_subject = trans('email.cron_emails.remind_rate_order_subject');
                $data = [
                    'email_message' => $mail_subject,
                    'email'         => $email,
                    'subject'       => $mail_subject,
                    'order_id'      => $order->id,
                ];
                Mail::queue('emails.cron.rate_order', $data, function ($message) use ($data) {
                    $message->to($data['email'])->subject($data['subject']);
                });
                $order->rate_mail_sent = true;
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
