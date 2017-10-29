<?php

use App\Category as Category;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
         $faker = Faker::create();
        $temptype = $faker->randomElement(['group', 'store']);
        $icons = ['fui-info-circle', 'fui-alert-circle',
                'fui-question-circle', 'fui-check-circle',
                'fui-cross-circle', 'fui-plus-circle',
                'fui-window', 'fui-windows',
                'fui-upload', 'fui-arrow-right',
                'fui-arrow-left', 'fui-loop',
                'fui-cmd', 'fui-mic',
                'fui-export', 'fui-heart',
                'fui-location', 'fui-plus',
                'fui-check', 'fui-cross',
                'fui-list', 'fui-new',
                'fui-video', 'fui-photo',
                'fui-time', 'fui-eye',
                'fui-chat', 'fui-home',
                'fui-search', 'fui-user', 'fui-mail', ];
        $categorias = ['Clothing'        => ['Эрэгтэй хувцас', 'Эмэгтэй хувцас', 'Гутал', 'Майлгай ороолт бээлий', 'Үндэсний хувцас',],
                    'Phones, Tablets'           => ['Нярайн хэрэгсэл', 'Тоглоом', 'Туслах хэрэгсэл', 'Хүүхдийн хувцас', 'Живх ариун цэвэр', 'Хоол, сүү, витамин', 'Жирэмсэний бүтээгдэхүүн',],
                    'Computers'     => ['Тэлээ бүс', 'Гоёл чимэглэл', 'Цүнх, түрийвч', 'Цаг, нүдний шил'],
                    'Electromic' => ['Эрэгтэй гоо сайхан', 'Эмэгтэй гоо сайхан', 'Эрүүл мэнд', ],
                    'Tools'   => ['Фитнес, иог', 'Аялал зугаалга', 'Дугуй ролик', 'Спортийн хэрэгсэл', ],
                    'Fashion Accessories' => ['Ахуйн цахилгаан бараа', 'Утас, камер', 'Оффис цахилгаан бараа', 'Компьютер, Таблет','Тоглоом','Машины хэрэгсэл', ],
                    'Shoes & Bags'       => ['Гурил будаа', 'Өдөр тутам', 'Хүнсний нэмэлт', 'Цай кофе', ],
                    'Baby & Kids'       => ['Ахуйн хэрэгсэл', 'Гал зуух', 'Угаалгын өрөө', 'Интерьер','Гар урлал', ],
                    'Beauty & Hair'       => ['Ном', 'CD, DVD', 'Хичээлийн хэрэгсэл', 'Оффис хэрэгсэл', ],
                    'Other'       => ['Бусад хэрэгсэл', ], ];

        foreach ($categorias as $categoria => $subCategorias) {
            if ($temptype == 'group') {
                $temptype = 'store';
            } else {
                $temptype = 'group';
            }
            
            $inserted = Category::create([
                'name'        => $categoria,
                'description' => $faker->text(90),
                'icon'        => $faker->randomElement($icons),
                'status'      => 1,
                'image'       => 'test',
                'type'        => $temptype,
            ]);
            
        }
    }
}
