<?php

/**
 * Antvel - Data Base
 * Users Points Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUserPointsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_points', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('action_type_id')->unsigned();
            $table->integer('source_id')->unsigned();
            $table->integer('points');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('action_type_id')->references('id')->on('action_types');
            $table->index('user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('user_points');
    }
}
