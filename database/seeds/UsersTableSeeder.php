<?php

use App\Events\Inst;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();

        // Create admin account
        DB::table('users')->insert([
            'usertype' => 'Admin',
            'username' => 'admin',
            'username_slug' => 'admin',
            'icon' => null,
            'email' => 'admin@admin.com',
            'password' => bcrypt('TorooProgrammer1'),
            'remember_token' => str_random(10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('settings')->insert([
            'key' => 'p-buzzynews',
            'value' => '"on"'
        ]);
        DB::table('settings')->insert([
            'key' => 'p-buzzylists',
            'value' => '"on"'
        ]);
        DB::table('settings')->insert([
            'key' => 'p-buzzyvideos',
            'value' => '"on"'
        ]);
        DB::table('settings')->insert([
            'key' => 'p-buzzypolls',
            'value' => '"on"'
        ]);
        DB::table('settings')->insert([
            'key' => 'siteposturl',
            'value' => '"1"'
        ]);
        DB::table('settings')->insert([
            'key' => 'AutoInHomepage',
            'value' => '"true"'
        ]);
        DB::table('settings')->insert([
            'key' => 'languagetype',
            'value' => '"en_US"'
        ]);
        DB::table('settings')->insert([
            'key' => 'sitefontfamily',
            'value' => '"\'Lato\', Helvetica, Arial, sans-serif"'
        ]);
        DB::table('settings')->insert([
            'key' => 'googlefont',
            'value' => '"Lato:400,500,500italic,600,700&amp;subset=latin,latin-ext"'
        ]);


       // factory('App\User', 20)->create();
    }
}
