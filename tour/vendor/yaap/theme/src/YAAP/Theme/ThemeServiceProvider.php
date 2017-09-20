<?php namespace YAAP\Theme;

use Illuminate\Support\ServiceProvider;

/**
 * Class ThemeServiceProvider
 * @package YAAP\Theme
 */
class ThemeServiceProvider extends ServiceProvider {

	/**
	 * Indicates if loading of the provider is deferred.
	 *
	 * @var bool
	 */
	protected $defer = false;

    /**
     * Bootstrap the application events.
     *
     * @return void
     */
    public function boot()
    {
        $this->publishes([
            __DIR__.'/../../config/config.php' => config_path('theme.php'),
        ], 'config');
    }

    /**
	 * Register the service provider.
	 *
	 * @return void
	 */
	public function register()
	{

        // init theme with default finder
        $this->app['theme'] = $this->app->share(function($app) {
            $theme = new Theme($app, $this->app['view']->getFinder());
            return $theme;
        });


        // merge & publihs config
        $configPath = __DIR__ . '/../../config/config.php';
        $this->mergeConfigFrom($configPath, 'theme');
        $this->publishes([$configPath => config_path('theme.php')]);


        // commands
        $this->app['theme.create'] = $this->app->share(function($app)
        {
            return new Commands\ThemeGeneratorCommand($app['config'], $app['files']);
        });

        $this->app['theme.destroy'] = $this->app->share(function($app)
        {
            return new Commands\ThemeDestroyCommand($app['config'], $app['files']);
        });

        // Assign commands.
        $this->commands(
            'theme.create',
            'theme.destroy'
        );

	}



	/**
	 * Get the services provided by the provider.
	 *
	 * @return array
	 */
	public function provides()
	{
		return array();
	}

}
