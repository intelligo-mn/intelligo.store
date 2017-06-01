<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNoticesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('notices', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('sender_id')->unsigned();
            $table->integer('action_type_id')->unsigned();
            $table->integer('source_id')->unsigned();
            $table->enum('status', ['new', 'unread', 'read']);
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('sender_id')->references('id')->on('users');
            $table->foreign('action_type_id')->references('id')->on('action_types');
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
        Schema::dropIfExists('notices');
    }
}
