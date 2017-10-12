<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('order',2)->nullable();
            $table->string('name',50);
            $table->string('name_slug',70);
            $table->string('posturl_slug', 25)->nullable();
            $table->string('description',550)->nullable();
            $table->string('type');
            $table->string('icon', 25)->nullable();
            $table->string('disabled', 1)->default('0');
            $table->string('main', 1)->default('0');
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
        Schema::drop('categories');
    }
}
