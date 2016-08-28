<?php

/**
 * Antvel - Data Base
 * Comments Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('action_type_id')->unsigned();
            $table->integer('source_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->string('comment', 500);
            $table->timestamps();

            $table->foreign('action_type_id')->references('id')->on('action_types');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('comments');
    }
}
