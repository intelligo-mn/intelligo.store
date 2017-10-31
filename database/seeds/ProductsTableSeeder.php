<?php

use App\Business as Business;
use App\Product as Product;
use App\ProductOffer as ProductOffer;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{

    public function run () {
       $faker = Faker::create();
        $businesses = Business::get();
        $numCategories = DB::table('categories')->count();
        for ($i = 0; $i < 500; $i++) {
            $price = $faker->numberBetween(1, 99);
            $tag = $faker->randomElement(['Цаг',
                            'Тоглоом',
                            'FOAM',
                            'Rockbros',
                            'Smart']);
            $id = Product::create([
                'category_id'  => $faker->numberBetween(1, $numCategories),
                'user_id'      => '3',
                'status'       => 1,
                'type'         => 'Product',
                'sale_counts'  => $faker->randomNumber(9),
                'view_counts'  => $faker->randomNumber(9),
                'name'         => $faker->randomElement(['Ухаалаг цаг',
                            'DR.VITA',
                            'CENTELLA MASK',
                            '16 BRAND FINGERPEN',
                            'MINK CREAM',
                            'DARK SPOT',
                            'SNOW PACK',
                            'Dermacol BT Cell',
                            'CENTELLA AMPOULE',
                            'MONSTER PACK',
                            'WHITENING CREAM',
                            'Гэдэс цэвэрлэх чавга',
                            'COCOON',
                            'BB FOUNCOVER',
                            'ZOMBIE PACK',
                            'PINK TONE UP',
                            'Нүүр цэвэрлэгч']),
                'description'  => '',
                'price'        => $price,
                'brand'        => $faker->randomElement(['LESSO', 'Nevalend', 'FOX', 'SPRIT',
                 'Adidas', 'FDAM', 'Timberland', 'Lafuma', 'Celio', 'Alton', 'Hellu Hansen'
                 , 'Epare', 'Remax', 'Mandala', 'Gatsby', 'Pupa', 'Kenzo', 'Loreal'
                 , 'Alton', 'Reebok', 'Attipas', 'NUK', 'PHILIPS', 'Tp-link', 'Ssamsung'
                 , 'Double A', 'Forever 21', 'Libero', 'Maccoffee', 'Puma']),
                'features'     => json_encode([
                    'images' => [
                    '/img/boxshop/'.$faker->numberBetween(1, 9).'.jpg',
                    '/img/boxshop/'.$faker->numberBetween(1, 9).'.jpg',
                    '/img/boxshop/'.$faker->numberBetween(1, 9).'.jpg',
                    '/img/boxshop/'.$faker->numberBetween(1, 9).'.jpg',
                    '/img/boxshop/'.$faker->numberBetween(1, 9).'.jpg',
                    ],
                ]),
                'condition' => $faker->randomElement(['new', 'refurbished', 'used']),
                'tags'      => json_encode($tag.','.$tag.','.$tag),
            ]);
            // if ($faker->numberBetween(0, 1)) {
            //     $percentage = $faker->randomElement([10, 15, 25, 35, 50]);
            //     ProductOffer::create([
            //         'product_id' => $id->id,
            //         'day_start'  => $faker->dateTime(),
            //         'day_end'    => $faker->dateTimeBetween('now', '+1 years'),
            //         'percentage' => $percentage,
            //         'price'      => (($percentage * $price) / 100),
            //         'quantity'   => round($stock / 2),
            //     ]);
            // }
        }
    }
}
