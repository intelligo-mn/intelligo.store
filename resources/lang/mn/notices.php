<?php

return [
    //id of actions that can get notices
    //'actions' => [1,2,3,8,9,11,13],
    //links to the source type of actions
    'links' => [
        'order' => route('orders.show_order', ['source_id']),
    ],
    //templates to the actions types
    'templates' => [
        'order:open'       => 'Шинэ #[source_id] захиалга.',
        'order:pending'    => 'Таны #[source_id] захиалга хүлээгдэж байна',
        'order:comment'    => 'Таны #[source_id] захиалга дээр шинэ сэтгэгдэл',
        'order:closed'     => 'Таны #[source_id] захиалга дууслаа',
        'order:cancelled'  => 'Таны #[source_id] захиалга буцаагдсан байна.',
        'order:sent'       => 'Таны #[source_id] захиалгыг илгээлээ.',
        'order:rate'       => 'Таны #[source_id] захиалга үнэлгээ өглөө.',
        'order:received'   => 'Таны #[source_id] захиалгыг хүлээж авлаа.',
        'order:processing' => 'Таны #[source_id] захиалгыг боловсруулж байна.',
    ],

    'all_title'   => 'Дэлгүүрийн мэдэгдэл',
    'all_summary' => 'Та өнөөг хүртэл таньд ирж байгаа бүх мэдэгдэл харах боломжтой болно. Мөн, та нар тэднийг нарийвчлан үзэх бол дэлгэрэнгүй дарна уу.',
];
