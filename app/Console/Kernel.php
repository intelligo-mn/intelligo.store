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
        $schedule->command('antvel:mailrates')
            ->dailyAt('06:00')
            ->sendOutputTo(storage_path().'/logs/antvel.cron.rates.log');
        $schedule->command('antvel:closeorders')
            ->dailyAt('06:00')
            ->sendOutputTo(storage_path().'/logs/antvel.cron.close.log');
        $schedule->command('antvel:selectwinners')
            ->dailyAt('05:00')
            ->sendOutputTo(storage_path().'/logs/antvel.cron.winners.log');
        //$schedule->command('antvel:mailrates')
        //    ->cron('* * * * *')
        //    ->sendOutputTo(storage_path().'/logs/antvel.cron.rates.log');
    }
}
