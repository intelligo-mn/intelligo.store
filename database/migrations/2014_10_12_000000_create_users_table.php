<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('usertype', 20)->nullable();
            $table->string('username', 40)->nullable()->unique();
            $table->string('username_slug', 40)->nullable()->unique();
            $table->string('name', 20)->nullable();
            $table->string('town', 20)->nullable();
            $table->string('genre', 20);
            $table->string('icon', 200)->nullable();
            $table->string('email')->unique();
            $table->string('password', 60);
            $table->integer('facebook_id')->nullable();
            $table->string('about', 500)->nullable();
            $table->string('facebookurl', 250)->nullable();
            $table->string('twitterurl', 250)->nullable();
            $table->string('weburl', 250)->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}
