<?php

return [
   //globals +2 view or controller
   'globals' => [
      'add'                   => '添加新商品',
      'loading_product_info'  => '正在加载商品信息……',
      'categories'            => '分类列表',
      'digital_item'          => '数字商品',
      'features'              => '特征',
      'key'                   => '注册码',
      'new_product'           => '新商品',
      'price'                 => '价格',
      'product_information'   => '商品信息',
      'description'           => '介绍',
      'comments'              => '评论',
      'save'                  => '提交',
      'see_key'               => '查看注册码',
      'see_keys'              => '查看注册码',
      'software'              => '软件',
      'stock'                 => '库存',
      'view_details'          => '查看详情',
      'my_dashBoard'          => '控制面板',
      'publications'          => '出版物', //？？
       'views'                => '次浏览',
       'content'              => '内容',
       'price_after_discount' => '最终价格为 %i （折扣为 ##%% ）', // i%  and ##%%  are mandatory
   ],
   //inputs
   'inputs_view' => [
      'amount'              => '数量',
      'bar_code'            => '条形码',
      'brand'               => '品牌',
      'condition'           => '状况',
      'description'         => '介绍',
      'download_example'    => '下载样本',
      'gift_card_option'    => '',
      'key_option'          => '此选项提供一个写有注册码列表的文本文件。<br/>注册码均独立出售。<br/>请使用与示例相同的格式。<br/>注册码售完后，此商品将下架。',
      'low_stock'           => '低库存',
      'name'                => '名字',
      'software_key_option' => '此选项提供一个可供下载的档案版本。<br/>我们提供安全的下载路径。<br/>可用的扩展名： .rar .zip<br/>此选项也提供一个写有注册码列表的文本文件。<br/>注册码均独立出售。<br/>请使用与示例相同的格式。<br/>注册码售完后，此商品将下架。', //？？
      'software_option'     => '此选项提供一个可供下载的档案版本。<br/>我们提供安全的下载路径。<br/>可用的扩展名： .rar .zip',
   ],
   'show_view' => [
      'key_info_show'      => '该商品为软件注册码。<br/>注册码将在购买完成后发送给您。',
      'status_inactive'    => '此商品目前不可用。',
       'recent_reviews'    => '最近被浏览最多的',
   ],
   'showKeysVirtuals_view' => [
      'list_keys'          => '注册码列表',
   ],
   'showDetailsProductInCart_view' => [
      'keys'            => '注册码',
      'product_details' => '购物车中的商品详情',
      'quantity'        => '数量',
      'sold_by'         => '卖家：',
   ],
   'controller' => [
      'gift_card'          => '礼品卡',
      'item'               => '商品',
      'may_invalid_keys'   => '有一个或多个注册码无效。',
      'new'                => '崭新',
      'refurbished'        => '翻新',
      'review_keys'        => '请检查您的注册码。',
      'saved_successfully' => '商品已保存。',
      'select_category'    => '选择一个分类',
      'software_key'       => '软件（带注册码）',
      'used'               => '二手',
   ],
   'virtualProductsController_controller' => [
      'key_been_sold'      => '该注册码已被售出。.',
   ],
   'virtualProductOrdersController_controller' => [
      'no_stock'           => '该商品没有库存',
   ],
   //no specific
   'brand'             => '品牌',
   'color'             => '颜色',
   'colors'            => '颜色',
   'dimensions'        => '尺寸',
   'images'            => '图片',
   'model'             => '模型',
   'prices'            => '价格',
   'product_not_exist' => '商品未注册',
   'video'             => '视频',
   'weight'            => '重量',
   'form_create_title' => '创建新商品',
   'form_edit_title'   => '更新“:prod”的信息/参数',
   'barcode_label'     => '条形码',

   //Product Groups
   'product_group'                       => '商品组',
   'products_grouped_with'               => '与以下商品成组：',
   'product_successfully_grouped'        => '商品成组成功',
   'products_already_grouped'            => '商品已成组',
   'products_name'                       => '商品名称',
   'delete_from_group'                   => '从组中删除',
   'product_was_deleted_from_this_group' => '该商品已从组中删除',
   'products_group_for'                  => '为此商品成组：',
   'products_group_list'                 => '商品组列表',
];
