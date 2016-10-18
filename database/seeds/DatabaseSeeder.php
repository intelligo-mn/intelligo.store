<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call('AdminTableSeeder');
        $this->call('UsersTableSeeder');
        $this->call('CategoriesTableSeeder');
        $this->call('AddressesTableSeeder');
        $this->call('ProductsTableSeeder');
        $this->call('ProductsDetailTableSeeder');
        $this->call('OrdersTableSeeder');
        $this->call('ProductsRatesSeeder');
        $this->call('LogsTableSeeder');
        $this->call('CommentsTableSeeder');
        $this->call('VirtualProductsSeeder');
        $this->call('CompanyTableSeeder');
        $this->call('CompanyFeaturesSeeder');

        if (config('app.offering_free_products')) {
            $this->call('FreeProductsTableSeeder');
        }
    }
}
