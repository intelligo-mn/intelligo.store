<?php

return [
        'dear'          => 'Dear',
        'end_note'      => 'This email is for the user of the intended recipient(s) only. if you have received this email in error, please notify the sender immediately and them delete it. if you are not the intended recipient, you must not keep, use, disclose, copy or distribute this email without the author&#x00b4;s prior permission. We have taken precautions to minimize the risk of transmitting sofware viruses, but we advise you to carry out your own virus checks on any attachment to this message. We cannot accept liability for any loss or damage caused by software viruses. The information contained in this communication may be confidential and may be subject to the attorney-client privilege. if you are the intended recipient and you do not wish to receive similar electronic messages from us in future then please respond to the sender to this effect.',

        ////old////

            //Globals
    'support'                     => 'Support',

    // Master
    // template.blade.php
    'master'                      => [
        'click_here'                  => 'Click Here',
        'do_not_receive_emails'       => 'do not want to receive these emails',
        'message1'                    => 'Create your tag... make points, Share your tag... make points, Get Sponsored... make points. Did we mention...',
        'message2'                    => 'you can redeem your points for merchandise',
        'points'                      => 'and Redeem your points for merchandise',
        'points_redeem'               => 'Redeem Points',
        'points_collect'              => 'Collect',
        'redistribute_tags'           => 'Redistribute Tags',
        'sponsor_tags'                => 'Sponsor Tags',
        'tags'                        => 'Share Tags',
        'terms'                       => 'Terms and Conditions',
        'for_more_information'        => 'For more information',
        ],

    // Cron Emails
    'cron_emails'                 => [
    'remind_rate_order_subject'   => 'You have recently closed an order, Please consider rating the seller',
    'order_closed_for_time'       => 'You have recently received an order, now marked as received. If you have not receive the purchased items that you expected, Please contact the seller.',
    'click_here'                  => 'Click here to view your order detail',
    ],

    'order_commented'             => [
    'comment_placed'              => 'A new comment has been posted on one of your orders',
    'comment_from_user'           => 'You have a new comment on one of your orders',
    'comment_from_seller'         => 'You have a new comment on one of your orders',
    'click_here'                  => 'Click here to view your order detail',
    ],

    //Mail sent via orders.rate_order
    'order_rated'                 => [
    'subject'                     => 'The user has rated one of your orders',
    'click_here'                  => 'Click Here to view your order detail',
    ],

    //Mail sent via orders.rate_order
    'product_rated'               => [
    'subject'                     => 'The user has rated one of your products',
    'click_here'                  => 'Click here to view your the rated product',
    ],

    // Mail used when the user resets his/her password
    // password.blade.php
    'reset_password'              => [
    'message1'                    => 'Forgot your password.',
    'message2'                    => 'We received a request to reset the your password account.',
    'message3'                    => 'If you want to reset your password, please click on the link below (if it does not work, please copy and paste the URL into your browser)',
    'message4'                    => 'This link takes you to a secure page where you will be able to reset your password',
    'message5'                    => 'If you do not want to reset your password, please ignore this message. Your password will not be changed. If you have any doubt, please contact us at ',
    ],

    // Mail sent to the user when he/she posts a new order
    // neworder.blade.php
    'new_order_for_user'          => [
    'subject'                     => 'Your order has been placed',
    'message1'                    => 'Your order has been placed, be sure to check its status in your current open orders view',
    ],

    // Mail sent to the user when the order changes its status
    // order_status_changed.blade.php
    'status_changed'              => [
    'subject1'                    => 'Your Order #',
    'subject2'                    => 'Has changed its status to',
    'changed_to_pending'          => 'Your order has changed its status, The seller started processing it!',
    'changed_to_closed'           => 'Your order has changed its status, The buyer marked it as received!',
    'changed_to_sent'             => 'Your order has changed its status, The seller marked it as sent. Now, you might notify us when you receive your purchase!',
    'click_here'                  => ' Click here to view your order detail',
    ],

    // Mail sent to the seller when a user posts an order with their item
    // sellerorder.blade.php
    'new_order_for_seller'        => [
    'subject'                     => 'You have a new order placed',
    'message1'                    => 'An order has been placed, be sure to check its status at your orders dashboard',
    ],

    // Mail Messages for Virtual Products Process
    'delivery_virtuals_products'  => [
    'subject'                     => 'You have received a product',
    'message1'                    => 'has sent this product to you ',
    'message2'                    => 'Thank you for making your a purchase in our store',
    'message3'                    => 'The key is',
    ],

    // Messages for emails that are sent when a user is logged into a free product
    'free_products_participation' => [
    'subject'                     => 'CONGRATULATIONS. You are participating for freeproduct',
    'message1'                    => 'Congratulations. Just register to participate for a free product',
    'click_here'                  => 'Click here to learn more details of the product for which you are involved.',
    ],

    //Messages used when a user is selected as a winner of a freeproduct
    'free_products_winner'        => [
    'subject'                     => 'CONGRATULATIONS. You have been selected as a winner of a product',
    'message1'                    => 'We are pleased to tell you that thanks to your participation in our free product, you turned WINNER selected. We invite you to check out the following link to be able to contact the owner of this product and thus be able to request delivery of the same.',
    'message2'                    => 'Thank you for your participation. Remember to leave your comments about your participation. For us it is very important. It will help us serve you better.',
    'click_here'                  => 'Click here to view your holdings in freeproducts',
    ],

        ];
