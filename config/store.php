<?php

return [

/*
|--------------------------------------------------------------------------
| Days to wait to do actions on the Cron Jobs
|--------------------------------------------------------------------------
|
| This options control the day to wait for each cron job action, ep.
| How many days would the store wait to close an order marked as
| SENT by the seller, but not RECEIVED by the user
|
*/
    'days_to_remind' => 5,
    'days_to_close'  => 10,
];
