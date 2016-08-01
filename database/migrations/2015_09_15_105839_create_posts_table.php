<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('category_id')->unsigned();
            $table->string('type',25);
            $table->string('ordertype',25);
            $table->string('slug',225);
            $table->string('title',225)->nullable();
            $table->string('body')->nullable();
            $table->string('thumb',255)->nullable();
            $table->string('approve',5)->nullable();
            $table->string('show_in_homepage',5)->nullable();
            $table->timestamps();
            $table->timestamp('featured_at');
            $table->timestamp('published_at');
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('posts');
    }
}
