<?php

namespace app\Helpers;

/**
 * Antvel - User Helper.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
class userHelper
{
    private $preferences = [];

    /**
     * initialize the class properties.
     */
    public function __construct()
    {
        $this->preferences = [
            'product_viewed'     => [],     //Click on products
            'product_purchased'  => [],  //Checkout action
            'product_shared'     => [],     //Click on share a product
            'product_categories' => [], //keep products categories recorded
            'my_searches'        => [],         //products tags related with users searches
        ];
        //die(json_encode($this->preferences));
    }

    /**
     * validate tags into preferences array.
     *
     * @param [string]  $needle, new tag to be added in preferences array
     * @param [array]   $array,  preferences user array.
     * @param [integer] &$pos,   to get the coincidence position, if so
     */
    private function added($needle, $array, &$pos)
    {
        if (count($array) > 0) {
            for ($i = 0; $i < count($array); $i++) {
                if (isset($array[$i])) {
                    foreach ($array[$i] as $value) {
                        if ($needle == $value) {
                            $pos = $i;

                            return false;
                        }
                    }
                }
            }
        }

        return true;
    }

    /**
     * convert the user preferences array to json format.
     *
     * @param [array]  $users_preferences, user table field, which contain the user resume actions
     * @param [string] $index,             it will be the wrapper array, which can be product_viewed, product_purchased, product_shared, my_searches
     * @param [array]  $tags,              it will be the tag list that belong to a product
     */
    public function preferencesToJson($users_preferences, $index = '', $tags = [], $categories = null)
    {
        $users_preferences = $this->preferencesToArray($users_preferences); //building json array
        //dd($users_preferences);
        if (count($tags) > 0 && $index != '') {
            for ($i = 0; $i < count($tags); $i++) {
                //track the array position
                $pos = 0;
                if (trim($tags[$i]) != '' && array_key_exists($index, $this->preferences)) {
                    //if the value has not been added
                    if ($this->added($tags[$i], $users_preferences[$index], $pos)) {
                        $users_preferences[$index][$i]['tag'] = $tags[$i];
                        $users_preferences[$index][$i]['updated_at'] = \Carbon\Carbon::now()->format('Y-m-d H:i:s');
                    } else {
                        //if the value exists, we updated its updated_at
                        $users_preferences[$index][$pos]['updated_at'] = \Carbon\Carbon::now()->format('Y-m-d H:i:s');
                    }
                }
            }
        }
        $this->saveTagsCategories($categories, $users_preferences['product_categories']);

        return json_encode($users_preferences);
    }

    /**
     * Take the tags categories into product_categories array.
     *
     * @param [Collection] $categories       brings all the tags categories
     * @param [Array]      $users_categories has the user preferences [categories]
     */
    private function saveTagsCategories($categories, &$users_categories)
    {
        $categories->each(function ($cate) use (&$users_categories) {
            if (!in_array($cate->category_id, $users_categories)) {
                array_push($users_categories, $cate->category_id);
            }
        });
    }

    /**
     * transform the preferences saved in user table to an array. Also, it validates if that field is empty. if so, it will be
     * initialized with ($this->preferences), which is the base array to track the users history.
     *
     * @param [string] $users_preferences, it will contain the user resume saved in the database
     *
     * @return [array] this method will return an array, either the one made from the database or a clean one
     */
    public function preferencesToArray($users_preferences)
    {
        if (trim($users_preferences) == '') {
            return $this->preferences;
        } else {
            $array = json_decode($users_preferences, true);

            return ($array == null) ? $this->preferences : $array;
        }
    }

    /**
     * Get the preferences tags related with the key that we are receiving, otherwise, we return back all of them.
     *
     * @param [json]   $preferences,     which contain all the user preferences
     * @param [string] $preferences_key, array key where we can get the user preferences from
     *
     * @return [array] $needle, list with all the user preferecen tags
     */
    public function getPreferencesNeedle($preferences, $preferences_key)
    {
        $needle = [
            'tags' => [],
            'date' => [],
        ];

        $preferences = $this->preferencesToArray($preferences);
        $preferences_key = trim($preferences_key) != '' ? $preferences_key : 'all';

        switch ($preferences_key) {

            //open suggestions
            case 'all':
                if (count($preferences) > 0) {
                    foreach ($preferences as $key => $value) {
                        foreach ($value as $val) {
                            if (!empty($val['tag']) && trim($val['tag']) != '') {
                                $needle['tags'][] = $val['tag'];
                                $needle['date'][] = $val['updated_at'];
                            }
                        }
                    }
                }
            break;

            //categories suggestions
            case 'product_categories':
                if (count($preferences['product_categories'] > 0)) {
                    foreach ($preferences['product_categories'] as $value) {
                        if (trim($value) != '') {
                            $needle['tags'][] = $value;
                        }
                    }
                }
            break;

            //product_viewed, product_purchased, product_shared, and my_searches suggestions
            default:
                if (isset($preferences[$preferences_key]) && count($preferences[$preferences_key]) > 0) {
                    foreach ($preferences[$preferences_key] as $value) {
                        if (trim($value['tag']) != '') {
                            $needle['tags'][] = $value['tag'];
                            $needle['date'][] = $value['updated_at'];
                        }
                    }
                }
            break;
        }

        return $needle;
    }
}
