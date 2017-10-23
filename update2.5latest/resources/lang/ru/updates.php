<?php
return [
    /*
      |--------------------------------------------------------------------------
      | All update lines
      |--------------------------------------------------------------------------
      */
    // BuzzyEditor

    'BuzzyEditor' => [
        'lang' => [
            'lang_1' => 'Удалить?',
            'lang_2' => 'Вы не сможете восстановить это!',
            'lang_3' => 'Удалить',
            'lang_4' => 'Отмена',
            'lang_5' => "Ссылка на изображение:",
            'lang_6' => 'URL изображения',
            'lang_7' => 'Нужно что-нибудь написать!',
            'lang_8' => 'Не действительный url!',
            'lang_9' => 'Попробуйте полный URL',
            'lang_10' => 'Добавить еще',
            'lang_11' => 'Неверный Url',
            'lang_12' => 'Слишком длинный текст.',
        ],
        'TextEditor' => [
            'normalText' => 'Текст',
            'title' => 'Заголовок',
            'blockquote' => 'Цитата',
            'bold' => 'Жирный',
            'italic' => 'Курсив',
            'link' => 'Ссылка',
            'text' => 'Текст',
            'linkText' => 'Текст ссылки',
            'linkUrl' => 'URL',
            'removeLink' => 'Удалить',
            'ol' => 'Нумерованный Список',
            'ul' => 'Список',
            'strikethrough' => 'Зачеркнутый',
            'underline' => 'Подчеркнутый',
        ],
    ],

    // general
    'loadmore'        => 'Загрузить еще',
    'more'            => 'Еще',

    // user pages
    'live-in'         => 'Где Вы живете?',
    'abouttext'       => 'Пару слов о себе.',
    'useravatar'      => 'Аватар',
    'male'            => 'Парень',
    'female'          => 'Девушка',
    'other'           => 'Аноним',

    // create pages
    'urltovideo'      => 'Ссылка на видео',
    'get'             => 'ОК',
    'tweet'           => 'Tweet',
    'urltotweet'      => 'Ссылка на твит',
    'admininfo'       => 'Администраторы могут редактировать эту запись',
    'instagram'       => 'Instagram',
    'urltoinstagram'  => 'Ссылка на Instagram',
    'soundcloud'      => 'SoundCloud',
    'urltosoundcloud' => 'Ссылка на SoundCloud',

    //new v1.1.1
    'getfromurl'      => 'Загрузить по Url',
    'or'              => 'или',
    'searchfor'       => 'Результаты поиска для ":word"',
    'facebookurl'     => 'Facebook Url',
    'twitterurl'      => 'Twitter Url',
    'weburl'          => 'Web Url',


    //new lines on v1.1.3
    'usertypeadmin'     => 'админ',
    'usertypestaff'     => 'автор',
    'usertypebanned'    => 'забанен',

    //new lines on v1.2
    'entryerrors'    => 'Элемент #:numberofentry  Ошибка: :error',
    'error'          => 'Ошибка',
    'movedtotrash'   => 'В корзину',
    'pagination'     => 'Элементов на странице',
    'usersplash'      => 'Фон под аватаром',

    'reaction' => [
        'yourreaction'  => 'Ваша реакция?',
        'awesome'       => 'ПРЕКРАСНО!',
        'nice'          => 'КРУТО!',
        'loved'         => 'ВЛЮБЛЕН!',
        'lol'           => 'ХАХ!',
        'funny'         => "ПОРЖАЛ",
        'fail'          => 'УЖАС!',
        'omg'           => 'ОГО',
        'ew'            => 'ХМ'
    ],

    'connectvkontakte'        => 'Войти через Вконтакте',

    'all'    => 'Все',
    'vote'   => 'Голосов: :count',


    //new lines on v1.3
    'facebookpost'           => 'Запись Facebook',
    'urltofacebookpost'      => 'Ссылка на запись Facebook',

    'registermail'          => 'Привет, :UserName!<br>
                                Спасибо за регистрацию на нашем сайте. Активируй свой аккаунт по ссылке:<br> <b>:ActivateLink</b>',

    'registermailsubject'   => 'Активировать аккаунт',

    'registerloginreqired'  => 'Пожалуйста, войтите на сайт перед активацией',
    'registeractivate'      => 'Ваш аккаунт подтвержден!',

    'saveasdraft'           => 'Сохранить в черновики',
    'thisdraftpost'         => 'Это черновик',

    'followers'    => 'Читатели',
    'following'    => 'Читает',
    'allfollow'    => 'Все (:count)',

    'followingposts'    => 'Отслеживаемые записи',
    'feedposts'    => 'Подписки',

    'followinguser'    => 'Отслеживают',
    'follow'    => 'отслеживать',

    // new lines on v2

    'views'    => 'просмотров',
    'tags'    => 'Теги',
    'addatag'    => 'добавьте тег',
    'tag'    => 'тег',
    'success'    => 'Успешно',
    'copyright'    => '© '.date("Y").' '.getenvcong("sitetitle").'. Все права защищены.',
    'shared'    => 'Поделиться',

    'home'    => 'Главная',
	
	'heycommunity'    => getenvcong("sitename"),
    'heycommunitydesc'    => '<a href="/login">Войди</a> или <a href="/register">зарегистрируйся</a> для публикации на сайте',
    'heycommunitydesc2'    => '<a href="/create">Создай</a> свою запись',
    'nodata'    => 'Ничего не найдено по ссылке',
];