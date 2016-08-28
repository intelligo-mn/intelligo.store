<?php

/**
 * Antvel - Seeder
 * Main Company Features Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use App\Company;
use App\CompanyFeatures;
use Illuminate\Database\Seeder;

class CompanyFeaturesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $company = Company::find('1');
        CompanyFeatures::create([
            'company_id'  => $company->id,
            'description' => trans('globals.freeproducts'),
        ]);
    }
}
