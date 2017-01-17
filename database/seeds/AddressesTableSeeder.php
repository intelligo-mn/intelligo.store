<?php

use App\Address as Address;
use App\User as User;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class AddressesTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();
        //Category
        for ($i = 0; $i < 1; $i++) {
            $user = User::select(['id'])->where('id', rand(1, User::count()))->first();
            $address = Address::create([
                'user_id'      => ($i <= 2) ? 4 : $user->id,
                'default'      => 0,
                'line1'        => '',
                'line2'        => 'UB',
                'phone'        => $faker->e164PhoneNumber,
                'name_contact' => 'IT Park',
                'zipcode'      => $faker->postcode,
                'city'         => 'Ulaanbaatar',
                'country'      => 'Mongolia',
                'state'        => 'Sukhbaatar',
            ]);
        }
    }
}
