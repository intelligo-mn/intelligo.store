<?php

/**
 * Antvel - Data Base
 * Orders Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('address_id')->unsigned()->nullable();
            $table->integer('seller_id')->unsigned()->nullable();
            $table->enum('status', array_keys(trans('globals.order_status')));
            $table->enum('type', ['cart', 'wishlist', 'order', 'later', 'freeproduct']);
            $table->string('description')->nullable();
            $table->dateTime('end_date')->nullable(); //cancelled or paid
            $table->integer('rate')->nullable();
            $table->string('rate_comment')->nullable();
            $table->boolean('rate_mail_sent')->default(false);
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('address_id')->references('id')->on('addresses');
            $table->foreign('seller_id')->references('id')->on('users');
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
        Schema::drop('orders');
    }
}
