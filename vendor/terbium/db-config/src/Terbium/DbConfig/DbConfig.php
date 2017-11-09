<?php namespace Terbium\DbConfig;

use ArrayAccess;
use Terbium\DbConfig\Interfaces\DbProviderInterface;
use Illuminate\Contracts\Config\Repository as ConfigContract;

/**
 * Class DbConfig
 * @package Terbium\DbConfig
 */
class DbConfig implements ConfigContract, ArrayAccess
{

    /**
     * The database provider.
     *
     * @var \Terbium\DbConfig\Interfaces\DbProviderInterface
     */
    protected $dbProvider;

    /**
     * All of the configuration items from DB.
     *
     * @var array
     */
    protected $items = array();


    /**
     * @var
     */
    private $origConfig;


    /**
     * The after load callbacks for namespaces.
     *
     * @var array
     */
    protected $afterLoad = array();


    /**
     * @param $origConfig
     * @param DbProviderInterface $dbProvider
     */
    public function __construct($origConfig, DbProviderInterface $dbProvider)
    {

        $this->dbProvider = $dbProvider;

        $this->origConfig = $origConfig;

        $this->items = $this->dbProvider->load();
    }


    /**
     * Save item into database and set to current config
     *
     * @param string $key
     * @param mixed $value
     *
     * @return void
     *
     * @throws Exceptions\SaveException
     */
    public function store($key, $value)
    {

        // save key => value into DB
        $this->dbProvider->store($key, $value);

        //set value to config
        $this->origConfig->set($key, $value);


    }

    /**
     * Remove item from the database
     *
     * @param string $key
     *
     * @return void
     *
     * @throws Exceptions\SaveException
     */
    public function forget($key)
    {

        // remove item from DB
        $this->dbProvider->forget($key);

        // remove item from original config
        $this->origConfig->offsetUnset($key);

    }

    /**
     * clear all current items (they will be reloaded on next usage)
     */
    public function clear()
    {

        $this->items = array();
    }

    /**
     * Clear the table with settings
     */
    public function clearDb()
    {

        $this->dbProvider->clear();

    }

    /**
     * Return query builder with list of settings from database
     *
     * @param string $wildcard
     *
     * @return \Illuminate\Database\Query\Builder
     */

    public function listDb($wildcard = null)
    {
        return $this->dbProvider->listDb($wildcard);
    }


    /*
    |
    | ConfigContract methods
    |
    */


    /**
     * Determine if the given configuration value exists.
     *
     * @param  string $key
     * @param bool $fallback
     * @return bool
     */
    public function has($key, $fallback = true)
    {


        $exist = array_has($this->items, $key);

        if (!$exist && $fallback) {
            $exist = $this->origConfig->has($key);
        }

        return $exist;
    }

    /**
     * Get the specified configuration value.
     *
     * @param  string $key
     * @param  mixed $default
     * @param bool $fallback
     * @return mixed
     */
    public function get($key, $default = null, $fallback = true)
    {
        $d = microtime(true);

        $result =  array_get($this->items, $key, $d);


        // found one in DB or
        if ($result !== $d) {
            return $result;
        }

        // not set in DB and needn't to fallback
        if (!$fallback) {
            return $default;
        }

        return $this->origConfig->get($key, $default);
    }

    /**
     * Set a given configuration value.
     *
     * @param  array|string $key
     * @param  mixed $value
     * @return void
     */
    public function set($key, $value = null)
    {
        $this->origConfig->set($key, $value);
    }

    /**
     * Prepend a value onto an array configuration value.
     *
     * @param  string $key
     * @param  mixed $value
     * @return void
     */
    public function prepend($key, $value)
    {
        $this->origConfig->prepend($key, $value);
    }

    /**
     * Push a value onto an array configuration value.
     *
     * @param  string $key
     * @param  mixed $value
     * @return void
     */
    public function push($key, $value)
    {
        $this->origConfig->push($key, $value);
    }

    /**
     * Get all of the configuration items for the application.
     *
     * @return array
     */
    public function all()
    {
        return array_merge($this->items, $this->origConfig->all());
    }

    /*
    |
    | ArrayAccess methods
    |
    */

    /**
     * Determine if the given configuration option exists.
     *
     * @param  string  $key
     * @return bool
     */
    public function offsetExists($key)
    {
        return $this->has($key);
    }

    /**
     * Get a configuration option.
     *
     * @param  string  $key
     * @return mixed
     */
    public function offsetGet($key)
    {
        return $this->get($key);
    }

    /**
     * Set a configuration option.
     *
     * @param  string  $key
     * @param  mixed  $value
     * @return void
     */
    public function offsetSet($key, $value)
    {
        $this->set($key, $value);
    }

    /**
     * Unset a configuration option.
     *
     * @param  string  $key
     * @return void
     */
    public function offsetUnset($key)
    {
        $this->set($key, null);
    }


}
