<?php

/**
 * Antvel - Seeder
 * Orders Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use App\Address;
use App\Order;
use App\OrderDetail;
use App\Product;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class OrdersTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        $addresses = Address::get();

        $status_list = array_keys(trans('globals.order_status'));

        $products = Product::select('id', 'price')->get();

        for ($i = 0; $i < 20; $i++) {
            $address = $addresses->random(1);
            $type = $faker->randomElement(['cart', 'wishlist', 'order']);
            $status = 'open';

            switch ($type) {
                case 'order':
                    $status = $faker->randomElement($status_list);
                break;
            }

            $stock = $faker->numberBetween(1, 20);

            $order = Order::create([
                'user_id'     => $address->user_id,
                'seller_id'   => '3',
                'address_id'  => $address->id, //address id
                'status'      => $status,
                'type'        => $type,
                'description' => $type == 'wishlist' ? $faker->companySuffix : '',
                'end_date'    => $status == 'closed' || $status == 'cancelled' ? $faker->dateTime() : null,
            ]);

            $num = $faker->numberBetween(2, 5);

            $list = [];
            if ($num > 1 && (count($products) - 1) < $num) {
                $num = count($products) - 1;
            }

            for ($j = 0; $j < $num; $j++) {
                do {
                    $a = true;
                    $product = $products->random(1);
                    if (in_array($product->id, $list)) {
                        $a = false;
                    } else {
                        $list[] = $product->id;
                    }
                } while ($a == false);

                if ($status == 'closed') {
                    $delivery = $faker->dateTime();
                } else {
                    $delivery = $faker->numberBetween(0, 1) ? $faker->dateTime() : null;
                }

                OrderDetail::create([
                    'order_id'      => $order->id,
                    'product_id'    => $product->id,
                    'price'         => $product->price,
                    'quantity'      => $stock,
                    'delivery_date' => $delivery,
                ]);
            }
            $order->sendNotice();
        }
    }
}
