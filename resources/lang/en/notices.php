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
        'order:open'       => 'A new order #[source_id] has been placed.',
        'order:pending'    => 'Your order #[source_id] is pending',
        'order:comment'    => 'The order #[source_id] has a new comment',
        'order:closed'     => 'The order #[source_id] was closed',
        'order:cancelled'  => 'Ther order #[source_id] was cancelled.',
        'order:sent'       => 'The order #[source_id] was sent.',
        'order:rate'       => 'The order #[source_id] was rated.',
        'order:received'   => 'The order #[source_id] has been received.',
        'order:processing' => 'The order #[source_id] has been processed.',
    ],

    'all_title'   => 'Store Notices',
    'all_summary' => 'Here you will be able to see all the notices that have come to you so far. Also, you can click on the to look at their detail.',
];
