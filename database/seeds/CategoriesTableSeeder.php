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
            'name' => 'Мэдээ',
            'name_slug' => 'news',
            'posturl_slug' => 'news',
            'icon' => 'file-text',
            'description' => '',
            'type' => 'news',
            'disabled' => '0',
            'main' => '1',
        ]);
        DB::table('categories')->insert([
            'order' => '2',
            'name' => 'Санал асуулга',
            'name_slug' => 'lists',
            'posturl_slug' => 'list',
            'icon' => 'th-list',
            'description' => '',
            'type' => 'list',
            'disabled' => '0',
            'main' => '1',
        ]);
        DB::table('categories')->insert([
            'order' => '3',
            'name' => 'Таавар',
            'name_slug' => 'quizzes',
            'posturl_slug' => 'quiz',
            'icon' => 'check-square-o',
            'description' => '!',
            'type' => 'quiz',
            'disabled' => '1',
            'main' => '1',
        ]);
        DB::table('categories')->insert([
            'order' => '4',
            'name' => 'Polls',
            'name_slug' => 'polls',
            'posturl_slug' => 'poll',
            'icon' => 'question-circle',
            'description' => '',
            'type' => 'poll',
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
