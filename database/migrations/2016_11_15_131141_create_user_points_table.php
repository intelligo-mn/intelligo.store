<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserPointsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('user_points', function (Blueprint $table) {
            $table->engine = "InnoDB";
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
        //
        Schema::dropIfExists('user_points');
    }
}
