<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{

    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('category_id')->unsigned();
            $table->string('type',25);
            $table->string('ordertype',25)->nullable();
            $table->string('slug',225);
            $table->string('title',225)->nullable();
            $table->string('body',1000)->nullable();
            $table->string('thumb',255)->nullable();
            $table->string('approve',5)->nullable();
            $table->string('show_in_homepage',5)->nullable();
            $table->string('shared', 1)->default('0');
            $table->text('tags', 1)->nullable();
            $table->timestamps();
            $table->timestamp('featured_at')->nullable();
            $table->timestamp('published_at');
            $table->softDeletes();
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
