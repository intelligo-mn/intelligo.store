<?php

/*

$factory->define(App\User::class, function (Faker\Generator $faker) {

    $slugnema=$faker->userName;
    return [
        'username' =>$slugnema,
        'username_slug' => $slugnema,
        'email' => $faker->email,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
    ];
});


$factory->define(App\Posts::class, function (Faker\Generator $faker) {
    return [
        'user_id' => '1',
        'category_id' => '1',
        'type' => 'news',
        'slug' => str_slug($faker->sentence, '-'),
        'title' => $faker->sentence,
        'body' => $faker->realText($maxNbChars = 1200, $indexSize = 2),
        'thumb' => $faker->imageUrl($width = 355, $height = 236, $category = null, $randomize = true),
        'published_at' => $faker->date($format = 'Y-m-d H:i:s', $max = 'now'),
        'approve' => 'yes'
    ];
});

*/