<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{

    protected $toTruncate = ['users'];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Model::unguard();

        $this->call(UsersTableSeeder::class);

        $this->call(CategoriesTableSeeder::class);

       // $this->call(PostsTableSeeder::class);


        Model::reguard();
    }
}
