<?php

/**
 * Antvel - Data Base
 * Main Company Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCompanyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company', function (Blueprint $table) {
            $table->increments('id');
            $table->string('email')->unique();
            $table->string('contact_email');
            $table->string('sales_email');
            $table->string('support_email');
            $table->enum('status', array_keys(trans('globals.company_status')))->default('active');
            $table->string('name');
            $table->string('website_name');
            $table->string('slogan')->nullable();
            $table->string('logo')->nullable();
            $table->string('theme')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('cell_phone')->nullable();
            $table->string('address')->nullable();
            $table->string('state')->nullable();
            $table->string('city')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('website')->nullable();
            $table->string('twitter')->nullable();
            $table->string('facebook')->nullable();
            $table->string('google_plus')->nullable();
            $table->string('facebook_app_id')->nullable();
            $table->longText('description');
            $table->longText('keywords');
            $table->longText('about_us');
            $table->longText('refund_policy');
            $table->longText('privacy_policy');
            $table->longText('terms_of_service');
            $table->string('google_maps_key_api')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('company');
    }
}
