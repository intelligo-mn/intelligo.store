<?php

/**
 * Antvel - Data Base
 * Free Products Orders Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFreeproductOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('freeproduct_order', function (Blueprint $table) {
            $table->integer('freeproduct_id')->unsigned()->index();
            $table->integer('order_id')->unsigned()->index();

            $table->foreign('order_id')->references('id')->on('orders');
            $table->foreign('freeproduct_id')->references('id')->on('freeproducts');

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
        Schema::drop('freeproduct_order');
    }
}
