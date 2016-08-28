<?php

namespace app\Console\Commands;

use App\Address;
use App\FreeProduct;
use App\FreeProductParticipant;
use App\Order;
use App\OrderDetail;
use App\Product;
use App\User;
use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;

class SelectWinnersFreeProducts extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'antvel:selectwinners';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '(AntVel) This command is used to select the winners of a freeproduct. If there are products that meet the conditions to select the winner, are chosen at random. And the type associated freeproduct free products are marked as inactive. Email notification is sent to both the winner and participants.';

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
        try {
            //Find all freeproducts that can be processed; that is, they are in the correct date range and are active.
            $this->info('----- STARTING THE PROCESS FOR SELECTION OF WINNERS -----');
            $dateactual = date('Y-m-d');
            $freeproducts = FreeProduct::where('status', 1)
                                ->where('draw_date', $dateactual)
                                ->get();

            if ($freeproducts) {
                $this->info('Free Products to be processed: '.$freeproducts->count());

                foreach ($freeproducts as $freeproduct) {
                    //Check the total participants. Depending on this the freeproduct be processed. Remember that there is a minimum of participation to select the winners. Still it not defined to do if the minimum is not met.

                    $participants = FreeProductParticipant::where('freeproduct_id', $freeproduct->id)
                                        ->where('status', 'registered')
                                        ->get();

                    if ($freeproduct->min_participants <= $participants->count()) {
                        //Select the winners, as defined in the product free draw_number field.
                        $list_winners = [];

                        for ($i = 0; $i < $freeproduct->draw_number; $i++) {
                            $user_winner = $participants->random(1);
                            $list_winners[] = $user_winner->user_id;

                            $user_winner->status = 'winner';
                            $user_winner->save();
                        }

                        $this->info('Total winners -> '.count($list_winners));
                        //We mail to notify the winners and create an order for you to communicate with the seller of the product. The first is to list all the products contained in the orders associated with that freeproduct

                        //Collection Orders with Products in details
                        $orders = FreeProduct::find($freeproduct->id)->orders()->with('products')->get();
                        //Collection Products
                        $list_products_orders = Collection::make();
                        foreach ($orders as $order) {
                            $list_products_orders = $list_products_orders->merge($order->products);
                        }

                        $this->info('Total Products to prize: '.count($list_products_orders));
                        $list_awards = [];
                        foreach ($list_winners as $user_id) {
                            $winner = User::find($user_id);
                            $this->info("Processing user -> ID=$winner->id ");
                            //In this part of the process, we should when creating the freeproduct, indicate how the prizes will be distributed, something like for position, and indicate that many products will be delivered by position. For now, a product be taken at random.
                            do {
                                $product_award = $list_products_orders->random(1);
                                $in_product_award_list = true;
                                if (in_array($product_award->id, $list_awards)) {
                                    $in_product_award_list = false;
                                } else {
                                    $list_awards[] = $product_award->id;
                                    $this->info("Product selected-> ID=$product_award->id ");
                                }
                            } while (!$in_product_award_list);

                            //Creating the order with the product won user
                            $winner_address = Address::where('user_id', $winner->id)->orderBy('default', 'DESC')->first();

                            $newOrder = new Order();
                            $newOrder->user_id = $winner->id;
                            $newOrder->address_id = $winner_address->id;
                            $newOrder->status = 'pending';
                            $newOrder->type = 'freeproduct';
                            $newOrder->seller_id = $freeproduct->user_id;
                            $newOrder->save();
                            $newOrder->sendNotice();
                            $this->info("Creating order: Result -> ID $newOrder->id");
                            //Order detail. Just take the product won
                            $newOrderDetail = new OrderDetail();
                            $newOrderDetail->order_id = $newOrder->id;
                            $newOrderDetail->product_id = $product_award->id;
                            $newOrderDetail->price = $freeproduct->participation_cost;
                            $newOrderDetail->quantity = 1;
                            $newOrderDetail->status = 1;
                            $newOrderDetail->save();

                            //Off product will deliver a prize
                            $product_award->status = 0;
                            $product_award->save();

                            //Notify the user that was selected as winner of that freeproduct
                            $data = ['product' => $product_award];
                            Mail::queue('emails.freeproducts.winner', $data, function ($message) use ($winner) {
                                $message->to($winner->email)->subject(trans('email.free_products_winner.subject'));
                            });
                            $this->info('email sent notice that won');
                            //He also sent an email indicating that a new order was created.(tracking)
                            $data = ['orderId' => $newOrder->id];
                            Mail::queue('emails.neworder', $data, function ($message) use ($winner) {
                                $message->to($winner->email)->subject(trans('email.new_order_for_user.subject'));
                            });
                            $this->info('email I sent notice that an order for the product won');
                        }

                        //Freeproduct inactive, so they do not take into account again for next draw
                        $freeproduct->status = 0;
                        $freeproduct->save();

                        //Se le notifica al dueno del freeproduct que se seleccionaron a los ganadores

                        $this->info("FreeProduct -> ID=$freeproduct->id PROCESSED");
                    } else {
                        $this->info("FreeProduct -> ID=$freeproduct->id The minimum participation condition for the free product does not comply.");
                    }
                }
            }
            $this->info('----- FINISHED THE PROCESS FOR SELECTION OF WINNERS -----');
        } catch (ModelNotFoundException $e) {
            Log::error($e);
            $this->error('They received errors when running the process. View Log File.');
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
            //['example', null, InputOption::VALUE_OPTIONAL, 'An example option.', null],
        ];
    }
}
