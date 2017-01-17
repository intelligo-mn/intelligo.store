<?php

use App\ProductDetail;
use Illuminate\Database\Seeder;

class ProductsDetailTableSeeder extends Seeder
{
    public function run()
    {
        ProductDetail::create([
            'name'             => 'images',
            'input_type'       => 'image',
            'status'           => 'active',
            'default_values'   => '{}',
            'validation_rules' => '{"images_1":"required_without_all:feature_images_2,feature_images_3,feature_images_4,feature_images_5,|","images_2":"required_without_all:feature_images_1,feature_images_3,feature_images_4,feature_images_5,|","images_3":"required_without_all:feature_images_1,feature_images_2,feature_images_4,feature_images_5,|","images_4":"required_without_all:feature_images_1,feature_images_2,feature_images_3,feature_images_5,|","images_5":"required_without_all:feature_images_1,feature_images_2,feature_images_3,feature_images_4,|"}',
            'help_message'     => '{}',
            'type_products'    => 'all',
            'max_num_values'   => 5,
        ]);
    }
}
