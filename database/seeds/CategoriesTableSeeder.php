<?php

/**
 * Antvel - Seeder
 * Categories Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use App\Category as Category;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();
        $temptype = $faker->randomElement(['group', 'store']);
        $icons = ['fui-info-circle', 'fui-alert-circle',
                'fui-question-circle', 'fui-check-circle',
                'fui-cross-circle', 'fui-plus-circle',
                'fui-window', 'fui-windows',
                'fui-upload', 'fui-arrow-right',
                'fui-arrow-left', 'fui-loop',
                'fui-cmd', 'fui-mic',
                'fui-export', 'fui-heart',
                'fui-location', 'fui-plus',
                'fui-check', 'fui-cross',
                'fui-list', 'fui-new',
                'fui-video', 'fui-photo',
                'fui-time', 'fui-eye',
                'fui-chat', 'fui-home',
                'fui-search', 'fui-user', 'fui-mail', ];
        $categorias = ['Digital & Music'        => ['Music', 'New Releases', 'Deals', 'Music Library'],
                    'Books & Audible'           => ['Books', 'Children Books', 'Textbooks', 'Magazines', 'Audible Audiobooks & More'],
                    'Movies, Music & Games'     => ['Movies & TV', 'Blu-ray', 'CDs & Vinyl', 'Digital Music',
                                                'Musical Instruments', 'Video Games', 'Digital Games',
                                                'Entertainment Collectibles', 'Trade In Movies, Music & Games', ],
                    'Electronics & Computers' => ['TV & Video', 'Home Audio & Theater', 'Camera, Photo & Video',
                                                  'Cell Phones & Accessories', 'Video Games', 'Portable Audio & Accessories',
                                                  'Car Electronics & GPS', 'Musical Instruments', 'Electronics Accessories',
                                                  'Wearable Technology', 'Laptops & Tablets', 'Desktops & Monitors',
                                                  'Computer Accessories & Peripherals', 'Computer Parts & Components',
                                                  'Software', 'Printers & Ink', 'Office & School Supplies', 'Trade In Your Electronics', ],
                    'Home, Garden & Tools'   => ['HomeKitchen & Dining', 'Furniture & Décor', 'Bedding & Bath', 'Appliances',
                                                 'Patio, Lawn & Garden', 'Fine Art', 'Arts, Crafts & Sewing', 'Pet Supplies',
                                                 'Wedding Registry', 'Home Improvement', 'Power & Hand Tools', 'Lamps & Light Fixtures',
                                                 'Kitchen & Bath Fixtures', 'HardwareHome Automation', ],
                    'Beauty, Health & Grocery' => ['All Beauty', 'Luxury Beauty', 'Men’s Grooming', 'Health, Household & Baby Care',
                                                 'Grocery & Gourmet Food', 'Specialty Diets', 'Wine', 'Subscribe & Save', ],
                    'Toys, Kids & Baby'       => ['Toys & Games', 'Baby', 'Video Games for Kids', 'Baby Registry', 'Kids’ Birthdays',
                                                  'For Girls', 'For Boys', 'For Baby', ],
                    'Clothing, Shoes & Jewelry' => ['Women', 'Men', 'Girls', 'Boys', 'Baby', 'Luggage'],
                    'Sports & Outdoors'         => ['Athletic Clothing', 'Exercise & Fitness', 'Hunting & Fishing', 'Team Sports', 'Fan Shop',
                                                'Golf', 'Leisure Sports & Game Room', 'Sports Collectibles', 'All Sports & Fitness',
                                                'Camping & Hiking', 'Cycling', 'Outdoor Clothing', 'Scooters, Skateboards & Skates',
                                                'Water Sports', 'Winter Sports', 'Climbing', 'Accessories', 'All Outdoor Recreation', ],
                    'Automotive & Industrial' => ['Automotive Parts & Accessories', 'Automotive Tools & Equipment',
                                                  'Car/Vehicle Electronics & GPS', 'Tires & Wheels', 'Motorcycle & Powersports',
                                                  'Industrial Supplies', 'Lab & Scientific', 'Janitorial', 'Safety', ],
                    'Home Services'           => ['Home Improvement & Repair', 'Lawn & Garden Care', 'Automotive Services',
                                                    'Computer & Electronics', 'Lessons & Tutoring', ], ];

        //create some Categories for every role
        foreach ($categorias as $categoria => $subCategorias) {
            if ($temptype == 'group') {
                $temptype = 'store';
            } else {
                $temptype = 'group';
            }
            //Category
            $inserted = Category::create([
                'name'        => $categoria,
                'description' => $faker->text(90),
                'icon'        => $faker->randomElement($icons),
                'status'      => 1,
                'image'       => 'test',
                'type'        => $temptype,
            ]);

            foreach ($subCategorias as $subCategoria) {
                $subins = Category::create([
                    'category_id' => $inserted->id,
                    'name'        => $subCategoria,
                    'description' => $faker->text(90),
                    'image'       => 'testsub',
                    'icon'        => $faker->randomElement($icons),
                    'status'      => 1,
                    'type'        => $inserted->type,
                ]);

                for ($j = 0; $j < 2; $j++) {
                    Category::create([
                        'category_id' => $subins->id,
                        'name'        => 'another sub',
                        'description' => $faker->text(90),
                        'image'       => 'testsubsub',
                        'icon'        => $faker->randomElement($icons),
                        'status'      => 1,
                        'type'        => $subins->type,
                    ]);
                }
            }
        }
    }
}
