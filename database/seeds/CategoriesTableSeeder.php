<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('categories')->insert([
            'order' => '1',
            'name' => 'Аялал',
            'name_slug' => 'travel',
            'posturl_slug' => 'travel',
            'icon' => 'file-text',
            'description' => '',
            'type' => 'news',
            'disabled' => '0',
            'main' => '1',
        ]);
        DB::table('categories')->insert([
            'order' => '5',
            'name' => 'Бичлэг',
            'name_slug' => 'videos',
            'posturl_slug' => 'video',
            'icon' => 'youtube-play',
            'description' => '',
            'type' => 'video',
            'disabled' => '0',
            'main' => '1',
        ]);

    }
}
