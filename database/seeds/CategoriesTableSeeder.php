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
            'name' => 'News',
            'name_slug' => 'news',
            'posturl_slug' => 'news',
            'icon' => 'file-text',
            'description' => 'News enables you to share the latest breaking news content on the web.',
            'type' => 'news',
            'disabled' => '0',
            'main' => '1',
        ]);
        DB::table('categories')->insert([
            'order' => '2',
            'name' => 'Lists',
            'name_slug' => 'lists',
            'posturl_slug' => 'list',
            'icon' => 'th-list',
            'description' => 'Create most interesting viral lists on your site and share with all your friends.',
            'type' => 'list',
            'disabled' => '0',
            'main' => '1',
        ]);
        DB::table('categories')->insert([
            'order' => '3',
            'name' => 'Quizzes',
            'name_slug' => 'quizzes',
            'posturl_slug' => 'quiz',
            'icon' => 'check-square-o',
            'description' => 'Get start to make great viral quizzes with Buzzy Quizzes Plugin TODAY!',
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
            'description' => 'Polls are awesome! Share all questions in your mind! Learn the other people thoughts.',
            'type' => 'poll',
            'disabled' => '0',
            'main' => '1',
        ]);
        DB::table('categories')->insert([
            'order' => '5',
            'name' => 'Videos',
            'name_slug' => 'videos',
            'posturl_slug' => 'video',
            'icon' => 'youtube-play',
            'description' => 'Share post popular, funny videos.',
            'type' => 'video',
            'disabled' => '0',
            'main' => '1',
        ]);

    }
}
