<?php

namespace app\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        'App\Console\Commands\Inspire',
        'App\Console\Commands\SendRateMails',
        'App\Console\Commands\CloseOrdersByTime',
        'App\Console\Commands\SelectWinnersFreeProducts',
    ];

    /**
     * Define the application's command schedule.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
     *
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        //$schedule->command('inspire')->hourly();
        $schedule->command('techstar:mailrates')
            ->dailyAt('06:00')
            ->sendOutputTo(storage_path().'/logs/techstar.cron.rates.log');
        $schedule->command('techstar:closeorders')
            ->dailyAt('06:00')
            ->sendOutputTo(storage_path().'/logs/techstar.cron.close.log');
        $schedule->command('techstar:selectwinners')
            ->dailyAt('05:00')
            ->sendOutputTo(storage_path().'/logs/techstar.cron.winners.log');
        //$schedule->command('techstar:mailrates')
        //    ->cron('* * * * *')
        //    ->sendOutputTo(storage_path().'/logs/techstar.cron.rates.log');
    }
}
