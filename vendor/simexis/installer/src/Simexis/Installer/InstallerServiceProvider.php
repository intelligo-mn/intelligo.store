<?php 

namespace Simexis\Installer;

use Illuminate\Support\Facades\App;
use Simexis\Installer\Helpers\Render;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;

class InstallerServiceProvider extends ServiceProvider {

	/**
	 * Indicates if loading of the provider is deferred.
	 *
	 * @var bool
	 */
	protected $defer = false;

    /**
	 * Register the service provider.
	 *
	 * @return void
	 */
    public function register()
    { 
		$this->registerProvider();
		$filemanager = $this->app['installer']->getFileManager();
		if(($install = $filemanager->isInstalled()) !== false ? $filemanager->isUpdatable() : true) {
			$this->commands('Simexis\Installer\Commands\InstallCommand');
			$this->commands('Simexis\Installer\Commands\UpdateCommand');
		}
    }

	/**
	 * Bootstrap the application events.
	 *
	 * @return void
	 */
    public function boot()
    { 
		
		$this->loadViewsFrom(__DIR__.'/Views', 'installer');
        $this->loadTranslationsFrom(__DIR__.'/Lang', 'installer');
		
        $this->publishes([
            __DIR__.'/config/installer.php' => config_path('installer.php'),
        ], 'config');
		
        $this->publishes([
            __DIR__.'/Views' => base_path('resources/views/vendor/installer'),
        ], 'views');
		
        $this->publishes([
            __DIR__.'/Lang' => base_path('resources/lang'),
        ]);

        $this->mergeConfigFrom(
            __DIR__.'/config/installer.php', 'installer'
        );

		$this->registerMiddleware();
		$this->registerAssets();
		$this->registerIfNotInstalled();
    }

	/**
	 * Get the services provided by the provider.
	 *
	 * @return array
	 */
	public function provides()
	{ 
		return ['installer', 'Simexis\Installer\Helpers\Render', 'Simexis\Installer\Commands\InstallCommand', 'Simexis\Installer\Commands\UpdateCommand'];
	}
	
    /**
	 * Register the service provider.
	 *
	 * @return void
	 */
	private function registerProvider() {
		
		$this->app->singleton('installer', function ($app) {
            return new Installer($app);
        });
		
		$this->app->singleton('Simexis\Installer\Helpers\Render', function ($app) {
            return new Render($app);
        });
	}
	
    /**
	 * Register the service provider.
	 *
	 * @return void
	 */
	private function registerAssets() {
		foreach(app('files')->allFiles(__DIR__ . '/Assets') AS $file)
			app('Simexis\Installer\Helpers\Render')->setAssets($file->getPathname());
	}
	
    /**
	 * Register the service provider.
	 *
	 * @return void
	 */
	private function registerMiddleware() { 
		$this->app['router']->middleware('installerCanInstall', '\Simexis\Installer\Middleware\CanInstall');
		$this->app['router']->middleware('installerCanUpdate', '\Simexis\Installer\Middleware\CanUpdate');
		$this->app['router']->middleware('installerCanAccess', '\Simexis\Installer\Middleware\CanAccess');
	}
	
    /**
	 * Register the service provider.
	 *
	 * @return void
	 */
	private function registerIfNotInstalled() {
		$filemanager = $this->app['installer']->getFileManager();
		include_once __DIR__ . '/Routes/routes.php';
		if(($install = $filemanager->isInstalled()) !== false ? $filemanager->isUpdatable() : true) {
			if(App::runningInConsole()) {
				if($this->allowCommand())
					return;
				exit('You must run command: php artisan ' . (!$install ? 'app:install' : 'app:upgrade'));
			}
			if(!$this->app['request']->is('Installer@*') && !$this->app['request']->is('*/Installer@*')) {
				$this->redirectTo(route(!$install ? 'installer::welcome' : 'installer::upgrade'));
			}
		}
	}
	
	private function allowCommand() {
		$argv = request()->server->get('argv');
		if(!isset($argv[0]) || !isset($argv[1]) || strtolower($argv[0]) != 'artisan')
			return false;
		if(in_array(strtolower($argv[1]), ['list', 'app:install', 'app:upgrade', 'vendor:publish', 'key:generate', 'db:seed', 'migrate', 'clear-compiled', 'cache:clear']))
			return true;
		return false;
	}
	
	/**
	 * Redirect to url.
	 *
	 * @return void
	 */
	private function redirectTo($url) { 
		if (! headers_sent ()) { 
			header ( "HTTP/1.1 301" );
			header ( 'Location: ' . $url );
		} else {
			echo '<script type="text/javascript">';
			echo 'window.location.href="' . $url . '";';
			echo '</script>';
			echo '<noscript>';
			echo '<meta http-equiv="refresh" content="0;url=' . $url . '" />';
			echo '</noscript>';
		}
		exit ();
	}

}
