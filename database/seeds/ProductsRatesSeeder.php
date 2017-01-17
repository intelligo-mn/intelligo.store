<?php

use App\Address;
use App\Category;
use App\Order;
use App\Product;
use App\User;
use App\UserPoints;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class ProductsRatesSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();
        $user = User::select('id')->where('id', 4)->first();

        for ($j = 0; $j < 2; $j++) {
            $userPoints = UserPoints::create([
                'user_id'        => $user->id,
                'action_type_id' => 6,
                'source_id'      => 1,
                'points'         => 100,
            ]);
        }

        $userAddress = Address::create([
            'user_id'      => $user->id,
            'default'      => 1,
            'line1'        => $faker->streetAddress,
            'line2'        => $faker->streetAddress,
            'phone'        => $faker->e164PhoneNumber,
            'name_contact' => $faker->streetName,
            'zipcode'      => $faker->postcode,
            'city'         => $faker->city,
            'country'      => $faker->country,
            'state'        => $faker->state,
        ]);

        $catforseed = Category::where('type', 'store')->first();
        $seededProduct = Product::create([
            'category_id'  => $catforseed->id,
            'user_id'      => '3', //3,
            'name'         => '16 Brand Foundation',
            'description'  => $faker->text(90),
            'price'        => $faker->randomNumber(2),
            'stock'        => 100,
            'type'         => 'beauty',
            'sale_counts'  => $faker->randomNumber(9),
            'view_counts'  => $faker->randomNumber(9),
            'brand'        => $faker->randomElement(['Skin1004', 'DayCell', 'Ottie', '16 Brand', 'Son Park', 'Clinique']),
            'features'     => json_encode([
                    'images' => [
                    '/img/pt-default/'.$faker->numberBetween(1, 330).'.jpg',
                    '/img/pt-default/'.$faker->numberBetween(1, 330).'.jpg',
                    '/img/pt-default/'.$faker->numberBetween(1, 330).'.jpg',
                    '/img/pt-default/'.$faker->numberBetween(1, 330).'.jpg',
                    '/img/pt-default/'.$faker->numberBetween(1, 330).'.jpg',
                    ]),
            'condition' => $faker->randomElement(['new', 'refurbished', 'used']),
            //'currency'=>0,
            'low_stock'  => $faker->randomElement([5, 10, 15]),
            'rate_val'   => '3',
            'rate_count' => '5',
            'tags'       => json_encode($faker->word.','.$faker->word.','.$faker->word),
        ]);

        for ($j = 0; $j < 5; $j++) {
            Order::create([
                'user_id'     => $user->id,
                'seller_id'   => '3',
                'address_id'  => $userAddress->id,
                'status'      => 'closed',
                'type'        => 'order',
                'description' => '',
                'seller_id'   => 3,
                'end_date'    => $faker->dateTime(),
                'detail'      => [
                    'product_id'    => $seededProduct->id,
                    'price'         => $seededProduct->price,
                    'quantity'      => '1',
                    'delivery_date' => $faker->dateTime(),
                    'rate'          => $faker->numberBetween(1, 5),
                    'rate_comment'  => $faker->text(90),
                ],
            ]);
        }

        $seededProduct2 = Product::create([
            'category_id'  => $catforseed->id,
            'user_id'      => '3',
            'name'         => '16 Brand brickit shadow',
            'description'  => $faker->text(90),
            'stock'        => 100,
            'type'         => 'beauty',
            'sale_counts'  => $faker->randomNumber(9),
            'view_counts'  => $faker->randomNumber(9),
            'price'        => $faker->randomNumber(2),
            'brand'        => $faker->randomElement(['Skin1004', 'DayCell', 'Ottie', '16 Brand', 'Son Park', 'Clinique']),
            'stock'        => 100,
            'features'     => json_encode([
                    'images' => [
                    '/img/pt-default/'.$faker->numberBetween(1, 330).'.jpg',
                    '/img/pt-default/'.$faker->numberBetween(1, 330).'.jpg',
                    '/img/pt-default/'.$faker->numberBetween(1, 330).'.jpg',
                    '/img/pt-default/'.$faker->numberBetween(1, 330).'.jpg',
                    '/img/pt-default/'.$faker->numberBetween(1, 330).'.jpg',
                    ]),
            'condition' => $faker->randomElement(['new', 'refurbished', 'used']),
            //'currency'=>0,
            'low_stock'  => $faker->randomElement([5, 10, 15]),
            'rate_val'   => '4',
            'rate_count' => '5',
            'tags'       => json_encode($faker->word.','.$faker->word.','.$faker->word),
        ]);

        $seededProduct3 = Product::create([
            'category_id'  => $catforseed->id,
            'user_id'      => '3', //3,
            'name'         => 'Son park beauty water',
            'description'  => $faker->text(90),
            'stock'        => 100,
            'type'         => 'beauty',
            'sale_counts'  => $faker->randomNumber(9),
            'view_counts'  => $faker->randomNumber(9),
            'price'        => $faker->randomNumber(2),
            'stock'        => 100,
            'brand'        => $faker->randomElement(['Skin1004', 'DayCell', 'Ottie', '16 Brand', 'Son Park', 'Clinique']),
            'features'     => json_encode([
                    'images' => [
                    '/img/pt-default/'.$faker->numberBetween(1, 330).'.jpg',
                    '/img/pt-default/'.$faker->numberBetween(1, 330).'.jpg',
                    '/img/pt-default/'.$faker->numberBetween(1, 330).'.jpg',
                    '/img/pt-default/'.$faker->numberBetween(1, 330).'.jpg',
                    '/img/pt-default/'.$faker->numberBetween(1, 330).'.jpg',
                    ]),
            'condition' => $faker->randomElement(['new', 'refurbished', 'used']),
            //'currency'=>0,
            'low_stock'  => $faker->randomElement([5, 10, 15]),
            'rate_val'   => '4',
            'rate_count' => '5',
            'tags'       => json_encode($faker->word.','.$faker->word.','.$faker->word),
        ]);

        // Creates closed orders for rates and mails
        for ($j = 0; $j < 5; $j++) {
            Order::create([
                'user_id'     => $user->id,
                'seller_id'   => '3',
                'address_id'  => $userAddress->id,
                'status'      => 'closed',
                'type'        => 'order',
                'description' => '',
                'seller_id'   => 3,
                'end_date'    => $faker->dateTime(),
                'details'     => [
                    [
                        'product_id'    => $seededProduct->id,
                        'price'         => $seededProduct->price,
                        'quantity'      => '1',
                        'delivery_date' => $faker->dateTime(),
                    ],
                    [
                        'product_id'    => $seededProduct2->id,
                        'price'         => $seededProduct2->price,
                        'quantity'      => '1',
                        'delivery_date' => $faker->dateTime(),
                    ],
                    [
                        'product_id'    => $seededProduct3->id,
                        'price'         => $seededProduct3->price,
                        'quantity'      => '1',
                        'delivery_date' => $faker->dateTime(),
                    ],
                ],
            ]);
        }

        // Create an open order to test notices
        Order::create([
            'user_id'     => $user->id,
            'seller_id'   => '3',
            'status'      => 'open',
            'type'        => 'order',
            'description' => '',
            'seller_id'   => 3,
            'address_id'  => $userAddress->id,
            'details'     => [
                [
                    'product_id' => $seededProduct->id,
                    'price'      => $seededProduct->price,
                    'quantity'   => '3',
                ],
            ],
        ]);
    }
}
