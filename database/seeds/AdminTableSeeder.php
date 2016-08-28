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
        //developer (admin)
        $admin = Person::create([
            'first_name' => 'Toroo',
            'last_name'  => 'Developer',
            'birthday'   => $faker->dateTimeBetween('-40 years', '-16 years'),
            'sex'        => 'male',
            'home_phone' => $faker->e164PhoneNumber,
            'user'       => [
                'nickname' => 'toroo',
                'email'    => 'toroo.byamba@gmail.com',
                'role'     => 'admin',
                'type'     => 'trusted',
                'password' => \Hash::make('123456'),
                'pic_url'  => '/img/pt-default/'.$faker->numberBetween(1, 20).'.jpg',
                'twitter'  => '@toroo',
                'facebook' => 'b.tortuvshin',
            ],
        ]);
    }
}
