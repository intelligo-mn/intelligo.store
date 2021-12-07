<?php

use Illuminate\Database\Seeder;

class ReactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('reactions_icons')->insert([
            'ord' => '1',
            'name' => 'AWESOME!',
            'reaction_type' => 'awesome',
            'icon' => '/assets/img/reactions/awesome.gif',
            'display' => 'on',
        ]);

        DB::table('reactions_icons')->insert([
            'ord' => '2',
            'name' => 'NICE',
            'reaction_type' => 'nice',
            'icon' => '/assets/img/reactions/nice.png',
            'display' => 'on',
        ]);

        DB::table('reactions_icons')->insert([
            'ord' => '3',
            'name' => 'LOVED',
            'reaction_type' => 'loved',
            'icon' => '/assets/img/reactions/loved.gif',
            'display' => 'on',
        ]);

        DB::table('reactions_icons')->insert([
            'ord' => '4',
            'name' => 'LOL',
            'reaction_type' => 'loL',
            'icon' => '/assets/img/reactions/lol.gif',
            'display' => 'on',
        ]);
        DB::table('reactions_icons')->insert([
            'ord' => '5',
            'name' => 'FUNNY',
            'reaction_type' => 'funny',
            'icon' => '/assets/img/reactions/funny.gif',
            'display' => 'on',
        ]);
        DB::table('reactions_icons')->insert([
            'ord' => '6',
            'name' => 'FAIL!',
            'reaction_type' => 'fail',
            'icon' => '/assets/img/reactions/fail.gif',
            'display' => 'on',
        ]);
        DB::table('reactions_icons')->insert([
            'ord' => '7',
            'name' => 'OMG!',
            'reaction_type' => 'omg',
            'icon' => '/assets/img/reactions/wow.gif',
            'display' => 'on',
        ]);
        DB::table('reactions_icons')->insert([
            'ord' => '8',
            'name' => 'EW!',
            'reaction_type' => 'ew',
            'icon' => '/assets/img/reactions/cry.gif',
            'display' => 'on',
        ]);

    }
}
