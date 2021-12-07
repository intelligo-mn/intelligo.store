<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reactions_icons', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('ord');
            $table->string('icon');
            $table->string('name');
            $table->string('reaction_type');
            $table->string('display', 10);
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
        Schema::drop('reactions_icons');
    }
}
