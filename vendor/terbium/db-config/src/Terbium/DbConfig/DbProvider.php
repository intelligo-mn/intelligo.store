<?php namespace Terbium\DbConfig;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\NamespacedItemResolver;
use Terbium\DbConfig\Exceptions\SaveException;

class DbProvider extends NamespacedItemResolver implements Interfaces\DbProviderInterface
{

    /**
     * The database table.
     */
    protected $table;


    /**
     * Create a new database configuration loader.
     * @param $table database table
     */
    public function __construct($table)
    {

        $this->table = $table;
    }

    /**
     * Load the given configuration collection.
     *
     * @param  string $collection
     *
     * @return array
     */
    public function load($collection = null)
    {

        $items = array();

        $list = DB::table($this->table);

        if ($collection !== null) {
            $list = $list->where('key', 'LIKE', $collection . '%');
        }

        $list = $list->lists('value', 'key');


        // convert dotted list back to multidimensional array
        foreach ($list as $key => $value) {
            $value = json_decode($value);
            array_set($items, $key, $value);
        }

        return $items;
    }

    /**
     * Save item to the database or update the existing one
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

        if (!is_array($value)) {
            $value = array($key => $value);
        } else {
            $value = array_dot($value);

            foreach ($value as $k => $v) {
                $value[$key . '.' . $k] = $v;
                unset($value[$k]);
            }
        }

        foreach ($value as $k => $v) {
            $this->_store($k, $v);
        }

    }


    /**
     * @param string $key
     * @param string $value
     * @throws Exceptions\SaveException
     */
    private function _store($key, $value)
    {

        $provider = $this;
        $table = $this->table;

        DB::transaction(
                function () use (&$provider, $table, $key, $value) {

                    // remove old keys
                    // set 1.2.3.4
                    // set 1.2.3.4.5
                    // set 1 - will keep previous 2 records in database, and that's bad =)
                    $provider->forget($key);


                    // Try to insert a pair of key => value to DB.
                    // In case of exception - update them.
                    // This code should be replaced with insert_with_update method after its being implemented
                    // See http://laravel.uservoice.com/forums/175973-laravel-4/suggestions/3535821-provide-support-for-bulk-insert-with-update-such-


                    $value = json_encode($value);

                    try {

                        DB::table($table)->insert(array('key' => $key, 'value' => $value));

                    } catch (\Exception $e) {

                        try {

                            DB::table($table)->where('key', $key)->update(array('value' => $value));

                        } catch (\Exception $e) {

                            throw new SaveException("Cannot save to database: " . $e->getMessage());

                        }

                    }
                }
        );
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

        try {

            DB::table($this->table)->where('key', 'LIKE', $key . '.%')->delete();

            DB::table($this->table)->where('key', 'LIKE', $key)->delete();

        } catch (\Exception $e) {

            throw new SaveException("Cannot remove item from database: " . $e->getMessage());

        }
    }

    /**
     * Clear the table with settings
     *
     * @return void
     *
     * @throws Exceptions\SaveException
     */
    public function clear()
    {

        try {

            DB::table($this->table)->truncate();

        } catch (\Exception $e) {

            throw new SaveException("Cannot clear database: " . $e->getMessage());

        }

    }


    /**
     * Return query builder with list of settings from database
     *
     * @param string $wildcard
     *
     * @return Illuminate\Database\Query\Builder
     */
    public function listDb($wildcard = null)
    {

        $query = DB::table($this->table);
        if (!empty($wildcard)) {
            $query = $query->where('key', 'LIKE', $wildcard . '%');
        }

        return $query;

    }


}
