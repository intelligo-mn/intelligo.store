<?php

//-------- For enums in Seeders --------
return [
    // 'roles'					=>[
    // 	'admin'					=>'Administrator',
    // 	'business'				=>'Business',
    // 	'nonprofit'				=>'Non Profit',
    // 	'person'				=>'Person',
    // ],
    // 'type_user'				=>[
    // 	'normal'				=>'Normal',
    // 	'trusted'				=>'Trusted',
    // ],
    // 'type_preferences'		=>[
    // 	'string'				=>'String',
    // 	'date'					=>'Date',
    // 	'json'					=>'Json',
    // 	'number'				=>'Number',
    // ],
    // 'person_sex'			=>[
    // 	'female'				=>'Female',
    // 	'male'					=>'Male',
    // ],
    // 'type_categories'		=>[
    // 	'group'					=>'Group',
    // 	'store'					=>'Store',
    // ],
    // 'product_conditions'	=>[
    // 	'new'					=>'New',
    // 	'refurbished'			=>'Refurbished',
    // 	'used'					=>'Used',
    // ],
    // 'order_status'			=>[
    // 	'cancelled'				=>'Cancelled', /*orden eliminada por el usuario*/
    // 	'closed'				=>'Closed', /**/
    // 	'open'					=>'Open', /*orden abienta, en carrito, order,wish list*/
    // 	'paid'					=>'Paid', /**/
    // 	'pending'				=>'Pending', /**/
 //        'received'				=>'Received', /**/
 //        'sent'				    =>'Sent', /**/
    // ],
    // 'participant_status'	=>[
    // 	'cancelled'				=>'Cancelled',
    // 	'registered'			=>'Registered',
    // 	'winner'				=>'Winner',
    // ],
    // 'source_types'			=>[
    // 	'tag'					=>'tag',
    // 	'order'					=>'order',
    // 	'free_product'			=>'free product',
    // 	'order_detail'			=>'order_detail',
    // ],
    // 'product_features'		=>[
    // 	'color'					=>'color',
    // 	'weight'				=>'weight',
    // 	'dimensions'			=>'dimensions',
    // 	'volume'				=>'volume',
    // 	'video'					=>'video',
    // 	'brand'					=>'brand',
    // 	'model'					=>'model',
    // 	'size'					=>'size',
    // ],
    // 'filters'=>[
    // 	"categories"  => "Categories",
    // 	'brand'       =>'Brand',
    // 	'color'       =>'Color',
    // 	'conditions'  =>'Conditions',
    // 	'model'       =>'Model',
    // 	'price'       =>'price',
    // 	'price_range' =>'Price Range',
    // 	'size'        =>'size',
    // ],
    // 'action_types'			=>[
    // 	//Orders
    // 	[ 'id'=> 1, 'source_type'=>'order', 'action'=>'open' ],
    // 	[ 'id'=> 2, 'source_type'=>'order', 'action'=>'pending' ],
    // 	[ 'id'=> 3, 'source_type'=>'order', 'action'=>'comment' ],
    // 	[ 'id'=> 8, 'source_type'=>'order', 'action'=>'closed' ],
    // 	[ 'id'=> 9, 'source_type'=>'order', 'action'=>'cancelled' ],
 //        [ 'id'=>10, 'source_type'=>'order', 'action'=>'received' ],
 //        [ 'id'=>11, 'source_type'=>'order', 'action'=>'sent' ],
    // 	//Checkout
    // 	[ 'id'=> 6, 'source_type'=>'order', 'action'=>'reload points' ],
    // 	[ 'id'=> 7, 'source_type'=>'order', 'action'=>'check out' ],
    // 	//Order Details
    // 	[ 'id'=> 4, 'source_type'=>'order_detail', 'action'=>'create' ],
    // 	[ 'id'=> 5, 'source_type'=>'order_detail', 'action'=>'update' ],
 //        //Free Products
 //        [ 'id'=> 12, 'source_type'=>'free_product', 'action'=>'check out' ],
 //        //PayPal
 //        [ 'id'=> 13, 'source_type'=>'paypal', 'action'=>'buy points' ],
    // ],
    // //------------ Globals Traductions----------------
    // 'product_features'		=>[
    // 	'brand'					=>'brand',
    // 	'color'					=>'color',
    // 	'dimensions'			=>'dimensions',
    // 	'model'					=>'model',
    // 	'size'					=>'size',
    // 	'video'					=>'video',
    // 	'volume'				=>'volume',
    // 	'weight'				=>'weight',
    // ],
    // // --- contain the field to increase (product table) and the constant value, which will be sum to the actual value.
    // 'product_value_counters' => [
    // 	'view' => '1',
    // 	'sale' => '1'
    // ],
    '404_error' => [
        'title'      => 'página no encontrada',
        'message_01' => 'La página web que estas buscando fue removida, editada o no existe. Puedes volver a la página',
        'link_01'    => 'donde estabas',
        'message_02' => 'o ir a nuestra',
        'link_02'    => 'página principal',
    ],
    // ,
    // 'about'               =>'About',
    // 'all'                 =>'All',
    // 'cancel'              =>'Cancel',
    // 'contact'             =>'Contact',
    // 'file'                =>'File',
    // 'help'                =>'Help',
    // 'home'                =>'Home',
    // 'notices'             =>'Notices',
    // 'products'            =>'Products',
    // 'free'                =>'Free',
    // 'freeproducts'        =>'Free Products',
    // 'privacy'             =>'Privacy',
    // 'refine'              =>'Refine',
    // 'refine_by'           =>'Refine By',
    // 'search'              =>'Search',
    // 'terms'               =>'Terms',
    // 'type'                =>'Type',
    // //Navigation
    // 'back_top'            =>'Back Top',
    // 'next'                =>'Next',
    // 'previous'            =>'Previous',
    // //Actions
    // 'click_here'          =>'Click here',
    // 'delete'              =>'Delete',
    // 'edit'                =>'Edit',
    // 'new'                 =>'New',
    // 'save'                =>'Save',
    // 'search'              =>'Search',
    // 'search_suggestion'   =>'Search Suggestions',
    // 'disable'             =>'Disable',
    // 'enable'              =>'Enable',
    // //Status
    // 'active'              =>'Active',
    // 'inactive'            =>'Inactive',
    // 'status'              =>'Status',
    // //Validations
    // 'integerValidate'     =>'must be a number integer',
    // 'numberValidate'      =>'must be a number',
    // 'required'            =>'Required',
    // 'required_image'      =>'Required image',
    // 'urlValidate'         =>'must be a url valid',
    // //Errors
    // 'error'           	  =>'Sorry, an error has occurred.',
    // 'fileErrorFormat'     =>'The file format is invalid',
    // 'not_access'          =>'You do not have permission to enter here.',
    // //Messages
    // "in"                  => "in",
    // "no"                  => "No",
    // "sub"                 => "Sub",
    // "to"                  => "to",
    // "total"               => "Total",
    // "yes"                 => "Yes",
    // 'action'              =>'Action',
    // 'error_not_available' =>'This content is not available.',
    // 'filter'              =>'Filter',
    // 'induced_error'       =>'To better serve you follow the instructions properly.',
    // 'personalize'         =>'Personalize',
    // 'points_earned'       =>'Points Earned',
    // 'search_for'          =>'Search for',
    // 'searchResults'       =>'search results',
    // 'send_to'             =>'Send to',
    // 'with'                =>'with',
    // 'worn_points'         =>'Expended points',
];
