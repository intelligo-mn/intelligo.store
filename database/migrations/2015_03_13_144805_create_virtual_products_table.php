<?php

/**
 * Antvel - Data Base
 * Virtual Products Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateVirtualProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('virtual_products', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('product_id')->unsigned();
            $table->string('key')->nullable(); /*key de software (esto se recibe por un archivo .txt)*/
            $table->string('url')->nullable(); /*url del archivo al cual le hizo upload (.rar .zip), esto se descarga dentro de antvel*/
            $table->integer('amount')->nullable(); /*puntos a recibir en la venta de puntos y gift card*/
            $table->dateTime('expiration_date')->nullable(); /*fecha de expiracion del producto, despues de esta fecha se coloca inactivo el producto*/
            $table->enum('status', array_keys(trans('globals.order_status')));
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
        Schema::drop('virtual_products');
    }
}
