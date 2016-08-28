<?php

return [
        'dear'          => '亲爱的',
        'end_note'      => '这封邮件只会发给我们的订阅用户。如果您收到的邮件有误，请通知我们进行改进。如果您不是我们的订阅用户，未经许可请不要保存、使用、公开、复制或传播这封邮件。我们采取了防范措施避免传播病毒木马，但我们强烈建议您打开任何附带附件时先进行病毒检测。对于病毒木马造成的损失，我们不承担任何责任。本邮件中的资讯具有保密性，服从当事人特权。如果您不想继续收到此类邮件，可选择取消订阅。',

        ////old////

            //Globals
    'support'                     => '支持',

    // Master
    // template.blade.php
    'master'                      => [
        'click_here'                  => '点击这里',
        'do_not_receive_emails'       => '不再接收此类邮件',
        'message1'                    => '创建标签……制造点数，分享标签……制造点数，获得赞助……制造点数。我们提到了……吗？',
        'message2'                    => '您可以恢复购买商品使用的点数',
        'points'                      => '和恢复购买商品使用的点数',
        'points_redeem'               => '恢复点数',
        'points_collect'              => '收集',
        'redistribute_tags'           => '重新分配标签',
        'sponsor_tags'                => '赞助标签',
        'tags'                        => '分享标签',
        'terms'                       => '条款和条件',
        'for_more_information'        => '获取更多信息',
        ],

    // Cron Emails
    'cron_emails'                 => [
    'remind_rate_order_subject'   => '您最近有一个订单已关闭，来给卖家评价一下吧。',
    'order_closed_for_time'       => '您最近有一个订单被标记为已收到。如果您没有收到您想要的商品，请联系卖家。',
    'click_here'                  => '点击这里，查看订单详情',
    ],

    'order_commented'             => [
    'comment_placed'              => '您的一个订单有了新评论',
    'comment_from_user'           => '您的一个订单有了新评论',
    'comment_from_seller'         => '您的一个订单有了新评论',
    'click_here'                  => '点击这里，查看订单详情',
    ],

    //Mail sent via orders.rate_order
    'order_rated'                 => [
    'subject'                     => '一位买家给订单评价了',
    'click_here'                  => '点击这里，查看订单详情',
    ],

    //Mail sent via orders.rate_order
    'product_rated'               => [
    'subject'                     => '一位买家给商品评价了',
    'click_here'                  => '点击这里，查看被评价的商品',
    ],

    // Mail used when the user resets his/her password
    // password.blade.php
    'reset_password'              => [
    'message1'                    => '忘记密码。',
    'message2'                    => '我们收到了您重置密码的请求。',
    'message3'                    => '想要重置密码，请点击下面的链接（如果不能点击，请复制链接到地址栏访问）',
    'message4'                    => '此链接将打开一个安全页面以供重置密码',
    'message5'                    => '如果您并不想重置密码，请忽略此条消息。如果您有任何疑问，请这样联系我们：',
    ],

    // Mail sent to the user when he/she posts a new order
    // neworder.blade.php
    'new_order_for_user'          => [
    'subject'                     => '您有一个订单已下单',
    'message1'                    => '您的订单已下单，可以去您的订单列表页面查看该订单状态。',
    ],

    // Mail sent to the user when the order changes its status
    // order_status_changed.blade.php
    'status_changed'              => [
    'subject1'                    => '您的订单 #',
    'subject2'                    => '的状态改变为',
    'changed_to_pending'          => '订单状态已改变，卖家已经开始处理您的订单！',
    'changed_to_closed'           => '订单状态已改变，买家已将这个订单标记为已收到！',
    'changed_to_sent'             => '订单状态已改变，卖家已将这个订单标记为已发货。当你收货时，记得通知我们！',
    'click_here'                  => '点击这里，查看订单详情',
    ],

    // Mail sent to the seller when a user posts an order with their item
    // sellerorder.blade.php
    'new_order_for_seller'        => [
    'subject'                     => '您有一个新下的订单',
    'message1'                    => '有新下的订单，请前往订单面板查看。',
    ],

    // Mail Messages for Virtual Products Process
    'delivery_virtuals_products'  => [
    'subject'                     => '您已收到货啦',
    'message1'                    => '已将商品送到您的手里',
    'message2'                    => '感谢您对我们小店的支持',
    'message3'                    => '注册码是',
    ],

    // Messages for emails that are sent when a user is logged into a free product
    'free_products_participation' => [
    'subject'                     => '恭喜！您已参与到免费商品中',
    'message1'                    => '恭喜您。请注册以参与到免费商品中。',
    'click_here'                  => '点击这里，查看您参与的商品详情。',
    ],

    //Messages used when a user is selected as a winner of a freeproduct
    'free_products_winner'        => [
    'subject'                     => '恭喜！您被抽中成为优胜者',
    'message1'                    => '我们很高兴告诉您，您之前参与的免费商品中，您已被抽中成为优胜者！请点击下面的链接，联系商品卖家（所有者）。',
    'message2'                    => '谢谢您的参与。记得顺手评论一下，这对我们来说很重要，让我们能提供更好的服务。',
    'click_here'                  => '点击这里，查看您现有的免费商品',
    ],

        ];
