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
        'order:open'       => 'Um novo pedido #[source_id] foi processado.',
        'order:pending'    => 'Seu pedido #[source_id] está pendente',
        'order:comment'    => 'O pedido #[source_id] possui um novo comentário',
        'order:closed'     => 'O pedido #[source_id] foi fechado',
        'order:cancelled'  => 'O pedido #[source_id] foi cancelado.',
        'order:sent'       => 'O pedido #[source_id] foi enviado.',
        'order:rate'       => 'O pedido #[source_id] foi avaliado.',
        'order:received'   => 'O pedido #[source_id] foi recebido.',
        'order:processing' => 'O pedido #[source_id] foi processado.',
    ],

    'all_title'   => 'Avisos da Loja',
    'all_summary' => 'Aqui você será capaz de ver todos os seus avisos até agora. Além disso, você pode clicar para ver seus detalhes.',
];
