<?php

/**
 * Antvel - Data Base
 * Free Products Participants Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFreeproductParticipantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('freeproduct_participants', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('freeproduct_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->enum('status', array_keys(trans('globals.participant_status')));

            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::drop('freeproduct_participants');
    }
}
