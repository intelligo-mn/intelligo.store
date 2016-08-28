<?php

/**
 * Antvel - Seeder
 * Products Detail Table.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
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

        ProductDetail::create([
            'name'             => 'virtual weight',
            'input_type'       => 'text',
             'status'          => 'active',
            'default_values'   => '{}',
            'validation_rules' => '{}',
            'help_message'     => '{}',
            'type_products'    => 'key',
            'max_num_values'   => 1,
        ]);

        ProductDetail::create([
            'name'             => 'OS',
            'input_type'       => 'text',
             'status'          => 'active',
            'default_values'   => '{}',
            'validation_rules' => '{}',
            'help_message'     => '{}',
            'type_products'    => 'key',
            'max_num_values'   => 1,
        ]);

        ProductDetail::create([
            'name'             => trans('globals.product_features.weight'),
            'input_type'       => 'text',
            'default_values'   => '{}',
             'status'          => 'active',
            'validation_rules' => '{}',
            'help_message'     => '{}',
            'type_products'    => 'item',
            'max_num_values'   => 1,
        ]);

        ProductDetail::create([
            'name'             => trans('globals.product_features.dimensions'),
            'input_type'       => 'text',
            'default_values'   => '{}',
            'validation_rules' => '{}',
             'status'          => 'active',
            'help_message'     => '{}',
            'type_products'    => 'item',
            'max_num_values'   => 1,
        ]);

        ProductDetail::create([
            'name'             => trans('globals.product_features.color'),
            'input_type'       => 'text',
            'default_values'   => '{}',
            'validation_rules' => '{}',
             'status'          => 'active',
            'help_message'     => '{}',
            'type_products'    => 'item',
            'max_num_values'   => 1,
        ]);

        ProductDetail::create([
            'name'             => trans('globals.product_features.model'),
            'input_type'       => 'text',
            'default_values'   => '{}',
             'status'          => 'active',
            'validation_rules' => '{}',
            'help_message'     => '{}',
            'type_products'    => 'all',
            'max_num_values'   => 1,
        ]);
    }
}
