<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
class CreateVirtualProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('virtual_products', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->increments('id');
            $table->integer('product_id')->unsigned();
            $table->string('key')->nullable(); 
            $table->string('url')->nullable(); 
            $table->integer('amount')->nullable();
            $table->dateTime('expiration_date')->nullable(); 
            $table->enum('status', array_keys(trans('globals.order_status')));
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
        Schema::drop('virtual_products');
    }
}