<?php

/**
 * Antvel - Seeder
 * Users Admin.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use App\Business;
use App\Person;
use App\User;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class AdminTableSeeder extends Seeder
{
    public function run()
    {
        //create basic admin user
        $faker = Faker::create();

        Person::create([
            'first_name' => 'Admin',
            'last_name'  => 'root',
            'birthday'   => $faker->dateTimeBetween('-40 years', '-16 years'),
            'sex'        => 'male',
            'home_phone' => $faker->e164PhoneNumber,
            'user'       => [
                'nickname'    => 'admin',
                'email'       => 'admin@admin.com',
                'role'        => 'admin',
                'type'        => 'trusted',
                'password'    => \Hash::make('admin'),
                'pic_url'     => '/img/pt-default/'.$faker->numberBetween(1, 20).'.jpg',
                'twitter'     => '@gocanto',
                'facebook'    => 'gocanto',
                'preferences' => '{"product_viewed":[],"product_purchased":[],"product_shared":[],"product_categories":[],"my_searches":[]}',
            ],
        ]);

        //developer (admin)
        $admin = Person::create([
            'first_name' => 'AntVel',
            'last_name'  => 'Developer',
            'birthday'   => $faker->dateTimeBetween('-40 years', '-16 years'),
            'sex'        => 'male',
            'home_phone' => $faker->e164PhoneNumber,
            'user'       => [
                'nickname' => 'dev',
                'email'    => 'dev@antvel.com',
                'role'     => 'admin',
                'type'     => 'trusted',
                'password' => \Hash::make('123456'),
                'pic_url'  => '/img/pt-default/'.$faker->numberBetween(1, 20).'.jpg',
                'twitter'  => '@_antvel',
                'facebook' => '_antvel',
            ],
        ]);

        //seller
        $company_name = 'antvel seller';
        $seller = Business::create([
            'business_name' => $company_name,
            'creation_date' => $faker->date(),
            'local_phone'   => $faker->e164PhoneNumber,
            'user'          => [
                'nickname' => 'antvelseller',
                'email'    => 'seller@antvel.com',
                'password' => Hash::make('123456'),
                'pic_url'  => '/img/pt-default/'.$faker->numberBetween(1, 20).'.jpg',
                'twitter'  => '@seller',
                'role'     => 'business',
                'facebook' => $company_name,
            ],
        ]);

        //buyer
        $buyer = Person::create([
            'first_name' => $faker->firstName,
            'last_name'  => $faker->lastName,
            'home_phone' => $faker->e164PhoneNumber,
            'birthday'   => $faker->dateTimeBetween('-40 years', '-16 years'),
            'sex'        => 'male',
            'user'       => [
                'nickname' => 'antvelbuyer',
                'email'    => 'buyer@antvel.com',
                'password' => Hash::make('123456'),
                'pic_url'  => '/img/pt-default/'.$faker->numberBetween(1, 20).'.jpg',
                'twitter'  => '@buyer',
                'facebook' => 'buyer',
                'role'     => 'person',
            ],
        ]);
    }
}
