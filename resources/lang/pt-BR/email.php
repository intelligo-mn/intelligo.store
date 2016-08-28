<?php

return [
        'dear'          => 'Caro',
        'end_note'      => 'Este email é exclusivo do destinatário especificado. Se você recebeu este email por engano, por favor notifique o remetente imediatamente e delete este email. Se você não é o destinatário, você não deve manter, usar, divulgar, copiar ou distribuir este e-mail sem que o autor&#x00b4;s forneça tal permissão. Temos tomado precauções para minimizar o risco de transmissão de vírus, mas aconselhamos que realize suas próprias verificações de vírus em qualquer anexo a esta mensagem. Não nos responsabilizamos por qualquer perda ou dano causado por vírus de software . A informação contida nesta mensagem podem ser confidenciais e podem estar sujeitos ao privilégio advogado-cliente . Se você for o destinatário e não deseja receber mensagens eletrônicas semelhantes de nós no futuro , por favor informe o remetente',

        ////old////

            //Globals
    'support'                     => 'Suporte',

    // Master
    // template.blade.php
    'master'                      => [
        'click_here'                  => 'Clique aqui',
        'do_not_receive_emails'       => 'não deseja receber esses e-mails',
        'message1'                    => 'Crie a sua Tag... Marque pontos, Compartilhe a sua tag... Marque pontos, Obtenha patrocínios... Marque pontos. Já mencionamos...',
        'message2'                    => 'você pode resgatar seus pontos por mercadorias',
        'points'                      => 'e resgatar seus pontos por mercadorias',
        'points_redeem'               => 'Resgatar seus pontos',
        'points_collect'              => 'Coletar',
        'redistribute_tags'           => 'Redistribuir Tags',
        'sponsor_tags'                => 'Tags de Patrocínio',
        'tags'                        => 'Tags Compartilhadas',
        'terms'                       => 'Termos e Condições',
        'for_more_information'        => 'Para maiores informações',
        ],

    // Cron Emails
    'cron_emails'                 => [
    'remind_rate_order_subject'   => 'Você fechou recentemente uma ordem , por favor considere a classificar o vendedor',
    'order_closed_for_time'       => 'Você recebeu recentemente um pedido, agora ele está marcado como recebido. Se você ainda não recebeu os itens comprados que você esperava , por favor, entre em contato com o vendedor.',
    'click_here'                  => 'Clique aqui para ver os detalhes de seu pedido',
    ],

    'order_commented'             => [
    'comment_placed'              => 'Um novo comentário foi postado em uma de suas ordens',
    'comment_from_user'           => 'Você tem um novo comentário em uma de suas ordens',
    'comment_from_seller'         => 'Você tem um novo comentário em uma de suas ordens',
    'click_here'                  => 'Clique aqui para ver os detalhes de seu pedido',
    ],

    //Mail sent via orders.rate_order
    'order_rated'                 => [
    'subject'                     => 'O usuário classificou um de seus pedidos',
    'click_here'                  => 'Clique aqui para ver os detalhes de seu pedido',
    ],

    //Mail sent via orders.rate_order
    'product_rated'               => [
    'subject'                     => 'O usuário classificou um de seus produtos',
    'click_here'                  => 'Clique aqui para ver os detalhes de seu pedido',
    ],

    // Mail used when the user resets his/her password
    // password.blade.php
    'reset_password'              => [
    'message1'                    => 'Perdeu suas credenciais.',
    'message2'                    => 'Recebemos uma solicitação para redefinir as suas credenciais.',
    'message3'                    => 'Se você deseja redefinir sua senha, clique no link abaixo (se ele não funcionar , copie e cole a URL no seu navegador)',
    'message4'                    => 'Este link leva a uma página segura, onde você será capaz de redefinir sua senha',
    'message5'                    => 'Se você não deseja redefinir sua senha, por favor, ignore esta mensagem. Sua senha não será alterada. Se você tiver alguma dúvida, entre em contato conosco',
    ],

    // Mail sent to the user when he/she posts a new order
    // neworder.blade.php
    'new_order_for_user'          => [
    'subject'                     => 'Seu pedido foi processado',
    'message1'                    => 'Seu pedido foi processado, certifique-se de checar seu status nos seus pedidos em aberto',
    ],

    // Mail sent to the user when the order changes its status
    // order_status_changed.blade.php
    'status_changed'              => [
    'subject1'                    => 'Seu pedido #',
    'subject2'                    => 'Teve o status alterado para',
    'changed_to_pending'          => 'O status do seu pedido foi alterado. Agora ele está sendo processado!',
    'changed_to_closed'           => 'O status do seu pedido foi alterado. O comprador altrou para recebido!',
    'changed_to_sent'             => 'O status do seu pedido foi alterado. Agora, você pode nos notificar quando receber sua compra!',
    'click_here'                  => ' Clique aqui para ver os detalhes de seu pedido',
    ],

    // Mail sent to the seller when a user posts an order with their item
    // sellerorder.blade.php
    'new_order_for_seller'        => [
    'subject'                     => 'Você tem uma nova ordem processada',
    'message1'                    => 'Uma ordem foi processada, não se esqueça de verificar seu status na sua dashboard',
    ],

    // Mail Messages for Virtual Products Process
    'delivery_virtuals_products'  => [
    'subject'                     => 'Você recebeu um produto',
    'message1'                    => 'enviou este produto para você ',
    'message2'                    => 'Obrigado por comprar conosco!',
    'message3'                    => 'A chave é',
    ],

    // Messages for emails that are sent when a user is logged into a free product
    'free_products_participation' => [
    'subject'                     => 'PARABÉNS. Você está participando de freeproduct',
    'message1'                    => 'Parabéns. Basta registar-se para concorrer a um produto gratuito',
    'click_here'                  => 'Clique aqui para saber mais detalhes sobre o produto para o qual está concorrendo.',
    ],

    //Messages used when a user is selected as a winner of a freeproduct
    'free_products_winner'        => [
    'subject'                     => 'PARABÉNS. Você foi selecionado como um vencedor de um produto',
    'message1'                    => 'Temos o prazer de lhe dizer que, graças a sua participação em nosso produto gratuito, você virou VENCEDOR selecionado. Nós convidamos você a verificar no link a seguir para ser capaz de entrar em contato com o proprietário deste produto e, assim, ser capaz de solicitar a entrega do mesmo.',
    'message2'                    => 'Obrigado pela sua participação. Lembre-se de deixar seu feedback sobre a sua participação. Para nós é muito importante. Ele vai nos ajudar a atende-lo melhor .',
    'click_here'                  => 'Clique aqui para ver as suas participações em freeproducts',
    ],

        ];
