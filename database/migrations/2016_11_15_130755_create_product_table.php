<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('products', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->increments('id');
            $table->integer('category_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->integer('parent_id')->nullable();    //for combos
            $table->integer('products_group')->unsigned()->nullable();
            $table->boolean('status')->default(1);
            $table->enum('type', array_keys(trans('globals.product_types')));
            $table->string('name', 100);
            $table->string('description', 500);
            $table->double('price', 10, 2);
            $table->string('brand', 30)->nullable();
            $table->enum('condition', array_keys(trans('globals.product_conditions')));
            $table->json('tags')->nullable();
            $table->json('features');
            $table->double('rate_val', 10, 2)->nullable();
            $table->integer('rate_count')->nullable();
            $table->integer('sale_counts')->unsigned();
            $table->integer('view_counts')->unsigned();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('category_id')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('products');
    }
}
