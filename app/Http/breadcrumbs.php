<?php

//home
Breadcrumbs::register('home', function ($breadcrumbs) {
    $breadcrumbs->push(trans('globals.home'), route('home'));
});

//products list
Breadcrumbs::register('products', function ($breadcrumbs) {
    $breadcrumbs->parent('home');
    $breadcrumbs->push(trans('store.products_list_label'), route('products'));
});

//products detail
Breadcrumbs::register('productDetail', function ($breadcrumbs, $product) {
    $breadcrumbs->parent('products');
    $list = [];
    $catProd = app\Category::find($product->categories->id);
    $categoriesTree = app\Category::parentsTree($catProd->category_id, $list);

    $list = array_reverse($list);

    foreach ($list as $value) {
        $breadcrumbs->push($value['name'], 'products?category='.urlencode($value['id'].'|'.$value['name']));
    }

    $breadcrumbs->push($catProd->name, 'products?category='.urlencode($catProd->id.'|'.$catProd->name));
    $breadcrumbs->push($product->name, route('products', $product->id));
});

//products list
Breadcrumbs::register('dashboard', function ($breadcrumbs) {
    $breadcrumbs->parent('products');
    $breadcrumbs->push('Dashboard');
});

//shopping cart
Breadcrumbs::register('shoppingCart', function ($breadcrumbs) {
    $breadcrumbs->parent('products');
    $breadcrumbs->push(trans('store.cart_view.your_shopping_cart'), route('orders.show_cart'));
});

Breadcrumbs::register('shoppingCartResume', function ($breadcrumbs, $addressId) {
    $breadcrumbs->parent('shippingAddresses');
    $breadcrumbs->push(trans('store.cart_view.your_shopping_cart_resume'), route('orders.check_out_address', ['addressId' => $addressId]));
});

//shipping addresses
Breadcrumbs::register('shippingAddresses', function ($breadcrumbs) {
    $breadcrumbs->parent('shoppingCart');
    $breadcrumbs->push(trans('address.my_addresses'), route('orders.check_out'));
});
