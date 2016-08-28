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
        'order:open'       => '已创建新订单 #[source_id]',
        'order:pending'    => '订单 #[source_id]等待处理中',
        'order:comment'    => '订单 #[source_id]有一条新评论',
        'order:closed'     => '订单 #[source_id]已关闭',
        'order:cancelled'  => '订单 #[source_id]已取消',
        'order:sent'       => '订单 #[source_id]已发送',
        'order:rate'       => '订单 #[source_id]已评价',
        'order:received'   => '订单 #[source_id]已收到',
        'order:processing' => '订单 #[source_id]已处理',
    ],

    'all_title'   => '短消息',
    'all_summary' => '这里是您收到的所有的短消息。点击以查看详情。',
];
