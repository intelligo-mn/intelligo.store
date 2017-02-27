<?php

return [
        'dear'          => 'Хүндэт',
        'end_note'      => 'This email is for the user of the intended recipient(s) only. if you have received this email in error, please notify the sender immediately and them delete it. 
        if you are not the intended recipient, you must not keep, use, disclose, copy or distribute this email without the author&#x00b4;s prior permission. We have taken precautions to minimize the risk of transmitting sofware viruses, 
        but we advise you to carry out your own virus checks on any attachment to this message. We cannot accept liability for any loss or damage caused by software viruses. 
        The information contained in this communication may be confidential and may be subject to the attorney-client privilege.
         if you are the intended recipient and you do not wish to receive similar electronic messages from us in future then please respond to the sender to this effect.',

        ////old////

            //Globals
    'support'                     => 'Support',

    // Master
    // template.blade.php
    'master'                      => [
        'click_here'                  => 'Энд дарна уу.',
        'do_not_receive_emails'       => 'Таны и-мэйлыг хүлээн авах боломжгүй байна.',
        'message1'                    => 'Өөрийн холбоосыг үүсгэх.',
        'message2'                    => 'бараа бүтээгдэхүүн буцаах',
        'points'                      => 'бүтээгдэхүүнээ буцаах болсон шалтгаан',
        'points_redeem'               => 'Буцаах үндэслэл',
        'points_collect'              => 'Цуглуулга',
        'redistribute_tags'           => 'Холбоосыг дахин хувиарлах',
        'sponsor_tags'                => 'Ивээн тэтгэгчийн холбоос',
        'tags'                        => 'Холбоосыг хуваалцах',
        'terms'                       => 'Ангилал болон нөхцөлүүд',
        'for_more_information'        => 'Нэмэлт мэдээлэл',
        ],

    // Cron Emails
    'cron_emails'                 => [
    'remind_rate_order_subject'   => 'Та саяхан өөрийн захиалгыг хаасан байна.',
    'order_closed_for_time'       => 'Та дөнгөж саяхан өөрийн захиалгыг хүлээн авсан байна. Хэрэв та өөрийн захиалсан бараагаа хүлээн авч чадаагүй бол манай худалдааны ажилтантай холбогдоно уу.',
    'click_here'                  => 'Энд дарж өөрийн захиалгын дэлгэрэнгүй зүйлсийг харна уу.',
    ],

    'order_commented'             => [
    'comment_placed'              => 'Таны бүтээгдэхүүний сэтгэгдэл нийглэгдсэн.',
    'comment_from_user'           => 'Бүтээгдэхүүний тухай шинэ мэдээлэл',
    'comment_from_seller'         => 'Бүтээгдэхүүний тухай сэтгэгдэл',
    'click_here'                  => 'Энд дарж бүтээгдэхүүний дэлгэрэнгүй мэдээллийн талаар харна уу.',
    ],

    //Mail sent via orders.rate_order
    'order_rated'                 => [
    'subject'                     => 'Хэрэглэгч таны бүтээгдэхүүнүүнийг үнэлсэн байна.',
    'click_here'                  => 'Энд дарж бүтээгдэхүүний дэлгэрэнгүй мэдээллийн талаар харна уу.',
    ],

    //Mail sent via orders.rate_order
    'product_rated'               => [
    'subject'                     => 'Хэрэглэгч таны бүтээгдэхүүнүүнийг үнэлсэн байна.',
    'click_here'                  => 'Энд дарж бүтээгдэхүүний дэлгэрэнгүй мэдээллийн талаар харна уу.',
    ],

    // Mail used when the user resets his/her password
    // password.blade.php
    'reset_password'              => [
    'message1'                    => 'Нууц үгээ мартсан.',
    'message2'                    => 'Таны дансны нууц үгийг шинэчлэх хүсэлтийг хүлээн авлаа.',
    'message3'                    => 'Хэрэв та нууц үгээ шинэчлэхийг хүсвэл, Доорх холбоосон дээр дарна уу.',
    'message4'                    => 'Энэ холбоос таньд нууц үгээ дахин сэргээх боломжыг олгоно.',
    'message5'                    => 'Хэрэв та нууц үгээ шинэчлэхийг хүсэхгүй байгаа бол энэхүү мессежийг цуцлана уу. Хэрэв таньд ямар нэгэн асуудал гарвал бидэнтэй холбогдоно уу.',
    ],

    // Mail sent to the user when he/she posts a new order
    // neworder.blade.php
    'new_order_for_user'          => [
    'subject'                     => 'Таны захиалгыг хүлээн авлаа',
    'message1'                    => 'Таны захиалгыг хүлээн авлаа',
    ],

    // Mail sent to the user when the order changes its status
    // order_status_changed.blade.php
    'status_changed'              => [
    'subject1'                    => 'Таны захиалга #',
    'subject2'                    => 'Таны захиалгын мэдээлэл өөрчлөгдлөө.',
    'changed_to_pending'          => 'Таны захиалгын мэдээлэл өөрчлөгдлөө,',
    'changed_to_closed'           => 'Таны захиалгын мэдээлэл өөрчлөгдлөө!',
    'changed_to_sent'             => 'Та бүтээгдэхүүнээ хүлээн аваад, бидэн хүлээн авсан мэдээллээ илгээн үү!',
    'click_here'                  => 'Энд дарж бүтээгдэхүүний дэлгэрэнгүй мэдээллийн талаар харна уу.',
    ],

    // Mail sent to the seller when a user posts an order with their item
    // sellerorder.blade.php
    'new_order_for_seller'        => [
    'subject'                     => 'Таны захиалгыг хүлээн авлаа',
    'message1'                    => 'Та бараагаа захиалсан байна, бид таны мэдээллийг шалгаж байна.',
    ],

    // Mail Messages for Virtual Products Process
    'delivery_virtuals_products'  => [
    'subject'                     => 'Таны бүтээгдэхүүнийг хүлээн авлаа',
    'message1'                    => 'Энэхүү бүтээгдэхүүн илгээгдсэн',
    'message2'                    => 'Манай дэлгүүрийн бүтээгдэхүүнээс худалдан авсанд баярлалаа.',
    'message3'                    => 'Түлхүүр',
    ],

    // Messages for emails that are sent when a user is logged into a free product
    'free_products_participation' => [
    'subject'                     => 'Баяр хүргэе. Үнэгүй бараа авах боломжтой боллоо.',
    'message1'                    => 'Баяр хүргэе. Та үнэгүй бараа авах боломжинд бүртгэгдлээ.',
    'click_here'                  => 'Энд дарж бүтээгдэхүүний дэлгэрэнгүй мэдээллийн талаар харна уу.',
    ],

    //Messages used when a user is selected as a winner of a freeproduct
    'free_products_winner'        => [
    'subject'                     => 'Баяр хүргэе. Та бүтээгдэхүүний ялагч боллоо.',
    'message1'                    => 'Манай үнэгүй бараа, бүтээгдэхүүний үйлчилгээнд оролцсонд баярлалаа.',

    'message2'                    => 'Бидэнд и-мэйл илгээсэнд маш их баярлалаа. Таны илгээсэн хүсэлтын дагуу бид цаашдын үйл ажиллагаагаа сайжруулах болно.',

    'click_here'                  => 'Энд дарж бүтээгдэхүүний дэлгэрэнгүй мэдээллийн талаар харна уу.',
    ],
];
