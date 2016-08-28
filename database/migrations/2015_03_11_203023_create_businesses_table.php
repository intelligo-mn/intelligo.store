<?php

/**
 * Antvel - Data Base
 * Businesses Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateBusinessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('businesses', function (Blueprint $table) {
            $table->integer('user_id')->unsigned()->primary();
            $table->string('business_name');
            $table->date('creation_date');
            $table->string('local_phone')->nullable();
            $table->integer('rate_val')->nullable();
            $table->integer('rate_count')->nullable();
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
        Schema::drop('businesses');
    }
}
