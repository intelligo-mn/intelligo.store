<?php namespace Terbium\DbConfig\Interfaces;

interface DbProviderInterface {

	/**
	 * Load the given configuration collection.
	 *
	 * @param  string  $collection
	 * @return array
	 */
	public function load($collection = null);

	/**
	 * Save item to the database or update the existing one
	 *
	 * @param string $key
	 * @param mixed $value
	 */
	public function store($key, $value);

	/**
	 * Remove item from the database
	 *
	 * @param string $key
	 */
	public function forget($key);

	/**
	 * Clear the table with settings
	 */
	public function clear();


}
