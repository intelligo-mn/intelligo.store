<?php

use App\Category as Category;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
        $this->boxshop();
    }

    public function bella () {
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
        $categorias = ['Арьс арчилгаа'        => ['Нүүр цэвэрлэгч', 'Гуужуулагч', 'Нарын тос', 'Маск', 'Цайруулагч', 'Зовхины тос',],
                    'Нүүр будалт'           => ['Уруулын будаг', 'Хумсны будаг', 'Нүдний тен', 'Нүдний контур', 'Өө дарагч', 'Суурь BB',],
                    'Үс бие арчилгаа'     => ['Үс арчилгаа', 'Бие арчилгаа', 'Гар болон хөлний арчилгаа', 'Амны хөндийн арчилгаа',
                                                'Үс бие арчилгааны хэрэгсэл', ],
                    'Үнэртэй ус' => ['Эрэгтэй ус', 'Эмэгтэй ус', 'Үнэр дарагч', ],
                    'Эрүүл мэнд'   => ['Эм бэлдмэл', 'Тураах бүтээгдэхүүн', ],
                    'Багс'  => ['нүдний тень','хуурай пудр', 'хацар өнгөлөгч', 'сүүдэр', 'гялалзуулагч',]];

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

    public function boxshop () {
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
        $categorias = ['Хувцас'        => ['Эрэгтэй хувцас', 'Эмэгтэй хувцас', 'Гутал', 'Майлгай ороолт бээлий', 'Үндэсний хувцас',],
                    'Эх, Хүүхэд'           => ['Нярайн хэрэгсэл', 'Тоглоом', 'Туслах хэрэгсэл', 'Хүүхдийн хувцас', 'Живх ариун цэвэр', 'Хоол, сүү, витамин', 'Жирэмсэний бүтээгдэхүүн',],
                    'Гоёл'     => ['Тэлээ бүс', 'Гоёл чимэглэл', 'Цүнх, түрийвч', 'Цаг, нүдний шил'],
                    'Гоо сайхан' => ['Эрэгтэй гоо сайхан', 'Эмэгтэй гоо сайхан', 'Эрүүл мэнд', ],
                    'Аялал, Спорт'   => ['Фитнес, иог', 'Аялал зугаалга', 'Дугуй ролик', 'Спортийн хэрэгсэл', ],
                    'Электрон' => ['Ахуйн цахилгаан бараа', 'Утас, камер', 'Оффис цахилгаан бараа', 'Компьютер, Таблет','Тоглоом','Машины хэрэгсэл', ],
                    'Хүнс'       => ['Гурил будаа', 'Өдөр тутам', 'Хүнсний нэмэлт', 'Цай кофе', ],
                    'Гэр ахуй'       => ['Ахуйн хэрэгсэл', 'Гал зуух', 'Угаалгын өрөө', 'Интерьер','Гар урлал', ],
                    'Ном бичиг хэрэг'       => ['Ном', 'CD, DVD', 'Хичээлийн хэрэгсэл', 'Оффис хэрэгсэл', ],
                    'Бусад'       => ['Бусад хэрэгсэл', ], ];

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
