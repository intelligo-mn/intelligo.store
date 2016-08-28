<?php

namespace App\Repositories;

use App\Order;
use App\User;

class OrderRepository
{
    /**
     * The types of orders allowed for deleting.
     *
     * @var array
     */
    private $deletingAllowed = ['wishlist'];

    /**
     * Make sure order belong to user given.
     *
     * @param User  $user
     * @param Order $order
     *
     * @return bool
     */
    public function belongToUser(User $user, $order_id, &$order = null)
    {
        $query = Order::with('details')->where([
            'id'      => $order_id,
            'user_id' => $user->id,
        ])->first();

        if (func_num_args() > 1) {
            $order = $query;
        }

        return $query ? true : false;
    }

    public function canBeDeleted($type)
    {
        return in_array($type, $this->deletingAllowed);
    }
}
