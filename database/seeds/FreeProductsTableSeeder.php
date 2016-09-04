<?php

/**
 * Antvel - Seeder
 * Free Products Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use App\Address;
use App\FreeProduct;
use App\FreeProductOrder;
use App\Order;
use App\OrderDetail;
use App\Product;
use App\User;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class FreeProductsTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();
        $users = Address::get();
        $status_list = array_keys(trans('globals.order_status'));
        for ($i = 0; $i < 40; $i++) {
            $user = $users->random(1);
            $products = Product::where('id', '!=', $user->user_id)->where('type', '!=', 'freeproduct')->get();
            $type = 'freeproduct';
            $status = 'paid';
            $order = Order::create([
                'user_id'     => $user->user_id,
                'seller_id'   => '3',
                'address_id'  => $user->address_id,
                'status'      => 'paid',
                'type'        => $type,
                'description' => '',
                'end_date'    => null,
            ]);
            //Productos a insertar a la orden. Se haran copias de los productos que esten en las ordenes y se le asignara el tipo freeproduct
            $num = $faker->numberBetween(2, 5);
            $list = [];
            if ($num > 1 && (count($products) - 1) < $num) {
                $num = count($products) - 1;
            }
            for ($j = 0; $j < $num; $j++) {
                do {
                    $a = true;
                    $product = $products->random(1);
                    $quantity = $faker->numberBetween(1, 5);
                    if (in_array($product->id, $list)) {
                        $a = false;
                    } else {
                        //duplico el producto
                        $productactual = $product->toArray();
                        unset($productactual['id']);
                        unset($productactual['num_of_reviews']);
                        $productactual['user_id'] = '3'; //$user->user_id;
                        $productactual['type'] = 'freeproduct';
                        $productactual['parent_id'] = $product->id;
                        $newproduct = Product::create($productactual);
                        $list[] = $product->id;
                    }
                } while ($a == false);
                //el nuevo producto lo asocio al detalle de la orden
                OrderDetail::create([
                    'order_id'      => $order->id,
                    'product_id'    => $newproduct->id,
                    'price'         => $product->price,
                    'quantity'      => $quantity,
                    'delivery_date' => null,
                ]);
                //Actualizo el stock
                $product->stock = $product->stock - $quantity;
                $product->save();
            }

            $order->sendNotice();
        }

        $orders = Order::where('type', '=', 'freeproduct')->get();
        $users = User::where('type', 'trusted')->get();
        $list_orders = [];
        for ($i = 0; $i < 15; $i++) {
            //Se crea el free product y se asocia las ordenes
            $user = $users->random(1);
            $end_date = \Carbon\Carbon::now()->addDays($faker->numberBetween(5, 30));
            $freeproduct = FreeProduct::create([
                'user_id'                     => '3', //$user->id,
                'description'                 => $faker->unique()->catchPhrase,
                'start_date'                  => \Carbon\Carbon::now(),
                'end_date'                    => $end_date,
                'participation_cost'          => $faker->numberBetween(10000, 50000),
                'min_participants'            => $min_participants = $faker->numberBetween(1, 15),
                'max_participants'            => $faker->numberBetween($min_participants, $min_participants * 2),
                'max_participations_per_user' => $faker->numberBetween(1, 5),
                'draw_number'                 => $faker->numberBetween(1, 3),
                'draw_date'                   => $end_date->addDays($faker->numberBetween(1, 5)),
                'status'                      => $faker->randomElement([0, 1]),
            ]);

            //asocio una o mas ordenes a un free product
            $num = $faker->numberBetween(1, 3);
            if ($num > 1 && (count($orders) - 1) < $num) {
                $num = count($orders) - 1;
            }
            for ($j = 0; $j < $num; $j++) {
                do {
                    $a = true;
                    $order = $orders->random(1);
                    if (in_array($order->id, $list_orders)) {
                        $a = false;
                    } else {
                        $list_orders[] = $order->id;
                    }
                } while ($a == false);

                FreeProductOrder::create([
                    'order_id'       => $order->id,
                    'freeproduct_id' => $freeproduct->id,
                ]);
            }
        }
    }
}
