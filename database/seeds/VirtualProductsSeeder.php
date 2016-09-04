<?php

/**
 * Antvel - Seeder
 * Virtual Products Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use App\Business as Business;
use App\Product as Product;
use App\VirtualProduct;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class VirtualProductsSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();
        $businesses = Business::get();
        for ($i = 0; $i < 10; $i++) {
            $price = $faker->numberBetween(1, 99);
            $stock = $faker->numberBetween(20, 50);
            $product = Product::create([
                'category_id'  => $faker->numberBetween(1, 9),
                'user_id'      => '3', //$businesses->random(1)->user_id,
                'name'         => 'VIRTUAL '.$faker->unique()->catchPhrase,
                'description'  => $faker->text(500),
                'price'        => $price,
                'stock'        => $stock,
                'sale_counts'  => $faker->randomNumber(9),
                'view_counts'  => $faker->randomNumber(9),
                'brand'        => $faker->randomElement(['Apple', 'Gigabyte', 'Microsoft', 'Google. Inc', 'Samsung', 'Lg']),
                'features'     => json_encode([
                    'images' => [
                    '/img//pt-default/'.$faker->unique()->numberBetween(1, 330).'.jpg',
                    '/img//pt-default/'.$faker->unique()->numberBetween(1, 330).'.jpg',
                    '/img//pt-default/'.$faker->unique()->numberBetween(1, 330).'.jpg',
                    '/img//pt-default/'.$faker->unique()->numberBetween(1, 330).'.jpg',
                    '/img//pt-default/'.$faker->unique()->numberBetween(1, 330).'.jpg',
                    ],
                ]),
                'condition' => $faker->randomElement(['new', 'refurbished', 'used']),
                'tags'      => json_encode($faker->word.','.$faker->word.','.$faker->word),
                'type'      => 'key',
            ]);
            $faker->unique($reset = true);
            $virtual = VirtualProduct::create([
                'product_id' => $product->id,
                'key'        => 'undefined',
                'status'     => 'cancelled',
            ]);
            for ($j = 1; $j < $stock; $j++) {
                $virtual = VirtualProduct::create([
                    'product_id' => $product->id,
                    'key'        => $faker->uuid,
                    'status'     => 'open',
                ]);
            }
        }
    }
}
