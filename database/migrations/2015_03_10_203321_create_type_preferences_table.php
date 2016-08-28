<?php

/**
 * Antvel - Data Base
 * Type Preferences Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTypePreferencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('type_preferences', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->enum('type', array_keys(trans('globals.type_preferences')));
            $table->boolean('status')->default(1);
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
        Schema::drop('type_preferences');
    }
}
