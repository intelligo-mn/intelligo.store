<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTimeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //sdf
        Schema::create('userTime', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->increments('id');
            $table->string('sector');
            $table->string('service');
            $table->timestamp('service_date');
            $table->string('userName',25);
            $table->string('userNumber',8)->nullable();
            $table->string('addition',225);
            $table->string('description',225)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('userTime');
        //
    }
}
