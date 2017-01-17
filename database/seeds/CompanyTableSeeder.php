<?php

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
        $this->boxshop();
    }

    public function bella()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 1; $i++) {
            $companyName = 'Bella';

            $userName = str_replace([' ', ','], '', $companyName);

            $domain = 'bella.mn';

            Company::create([
                'status'               => 'active',
                'name'                 => $companyName,
                'website_name'         => $companyName,
                'slogan'               => 'bella',
                'logo'                 => '/img/pt-default/logo.png',
                'theme'                => '',
                'phone_number'         => $faker->e164PhoneNumber,
                'cell_phone'           => $faker->e164PhoneNumber,
                'address'              => 'MGl',
                'state'                => 'Mongolia',
                'city'                 => 'Ulaanbaatar',
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
                'description'          => 'Bella salon',
                'keywords'             => 'Salon, makeup',
                'about_us'             => 'Бидний тухай',
                'refund_policy'        => trans('law.refund'),
                'privacy_policy'       => trans('law.privacy'),
                'terms_of_service'     => trans('law.terms'),
                'google_maps_key_api'  => 'AIzaSyCutQnEgrqX8W2X-nBCYB7-CbsTC-LlRMw',

            ]);
        }
    }

    public function boxshop()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 1; $i++) {
            $companyName = 'BoxShop';

            $userName = str_replace([' ', ','], '', $companyName);

            $domain = 'boxshop.mn';

            Company::create([
                'status'               => 'active',
                'name'                 => $companyName,
                'website_name'         => $companyName,
                'slogan'               => 'bella',
                'logo'                 => '/img/boxshop/logo.png',
                'theme'                => '',
                'phone_number'         => $faker->e164PhoneNumber,
                'cell_phone'           => $faker->e164PhoneNumber,
                'address'              => 'MGl',
                'state'                => 'Mongolia',
                'city'                 => 'Ulaanbaatar',
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
                'description'          => 'BoxShop',
                'keywords'             => 'BoxShop, Ecommerce',
                'about_us'             => 'Бидний тухай',
                'refund_policy'        => trans('law.refund'),
                'privacy_policy'       => trans('law.privacy'),
                'terms_of_service'     => trans('law.terms'),
                'google_maps_key_api'  => 'AIzaSyCutQnEgrqX8W2X-nBCYB7-CbsTC-LlRMw',

            ]);
        }
    }
}
