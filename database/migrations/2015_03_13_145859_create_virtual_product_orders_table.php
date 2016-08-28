<?php

/**
 * Antvel - Data Base
 * Virtual Products Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateVirtualProductOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('virtual_product_orders', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('order_id')->unsigned();
            $table->integer('virtual_product_id')->unsigned();
            $table->boolean('status')->default(0);
            $table->string('email')->nullable();
            $table->foreign('order_id')->references('id')->on('orders');
            $table->foreign('virtual_product_id')->references('id')->on('virtual_products');
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
        Schema::drop('virtual_product_orders');
    }
}
