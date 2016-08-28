<?php

/**
 * Antvel - Seeder
 * Main Company Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use App\Company;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class CompanyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 1; $i++) {
            $companyName = str_replace('-', ' ', $faker->unique()->company);

            $userName = str_replace([' ', ','], '', $companyName);

            $domain = $userName.$faker->randomElement(['.com', '.net', '.org']);

            Company::create([
                'status'               => $faker->randomElement(['active', 'inactive']),
                'name'                 => $companyName,
                'website_name'         => $companyName,
                'slogan'               => $faker->catchPhrase,
                'logo'                 => '/img/pt-default/'.$faker->unique()->numberBetween(1, 330).'.jpg',
                'theme'                => '',
                'phone_number'         => $faker->e164PhoneNumber,
                'cell_phone'           => $faker->e164PhoneNumber,
                'address'              => $faker->streetAddress,
                'state'                => $faker->state,
                'city'                 => $faker->city,
                'zip_code'             => $faker->postcode,
                'facebook'             => $userName,
                'google_plus'          => $userName,
                'facebook_app_id'      => $faker->md5,
                'twitter'              => $userName,
                'email'                => 'info@'.$domain,
                'contact_email'        => 'contact@'.$domain,
                'sales_email'          => 'sales@'.$domain,
                'support_email'        => 'support@'.$domain,
                'website'              => 'http://'.$domain,
                'description'          => $faker->text(200),
                'keywords'             => implode(',', $faker->words(20)),
                'about_us'             => $faker->text(1200),
                'refund_policy'        => trans('law.refund'),
                'privacy_policy'       => trans('law.privacy'),
                'terms_of_service'     => trans('law.terms'),
                'google_maps_key_api'  => 'AIzaSyCutQnEgrqX8W2X-nBCYB7-CbsTC-LlRMw',

            ]);
        }
    }
}
