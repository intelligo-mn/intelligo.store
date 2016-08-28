<?php

/**
 * Antvel - Data Base
 * Free Products Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFreeproductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('freeproducts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned()->index();
            $table->string('description');
            $table->date('start_date');
            $table->date('end_date');
            $table->integer('participation_cost');
            $table->integer('min_participants');
            $table->integer('max_participants');
            $table->integer('max_participations_per_user');
            $table->integer('draw_number');
            $table->date('draw_date');
            $table->boolean('status')->default(1);
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::drop('freeproducts');
    }
}
