<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stats extends Model
{

    protected $table = 'popularity_stats';

    protected $fillable = ['trackable_id', 'trackable_type', 'one_day_stats', 'seven_days_stats', 'thirty_days_stats', 'all_time_stats','raw_stats'];


    public function setRawStatsAttribute($value)
    {
        $this->attributes['raw_stats'] = serialize($value);
    }

    public function getRawStatsAttribute($value)
    {
        return unserialize($value);
    }

    /**
     * Polymorphic relation
     */
    public function trackable()
    {
        return $this->morphTo();
    }

    /**
     * Increments hits for a certain date and its previous days.
     *
     * @param String $date expects a date with format Y-m-d or uses current date if null
     * @return boolean updated stats success or not
     */
    public function updateStats($date = null)
    {
        //checks for a valid date format
        if( !empty($date) && !self::validDateFormat($date)) {
            return false;
        }
        $date = empty($date) ? gmdate('Y-m-d') : $date;

        $raw_stats = $this->raw_stats;


        // Update model with new stats
        $this->one_day_stats = $this->_calculate_days_stats( 1 , $raw_stats, $date );
        $this->seven_days_stats = $this->_calculate_days_stats( 7 , $raw_stats, $date );
        $this->thirty_days_stats = $this->_calculate_days_stats( 30, $raw_stats, $date );
        $this->all_time_stats = $this->all_time_stats + 1;


        // Update raw_stats for date
        if ( isset( $raw_stats ) && count( $raw_stats ) >= 30 ) {
            // remove older than 30 days stats
            array_shift( $raw_stats );
            // add new date
            $raw_stats[$date] = 1;
        } else {
            if ( ! isset( $raw_stats[$date] ) ) {
                $raw_stats[$date] = 1;
            } else {
                $raw_stats[$date] = $raw_stats[$date]+1;
            }
        }
        $this->raw_stats = $raw_stats;
        return $this->save();
    }

    /**
     * Calculates hits for each date in a range of $days from $date
     *
     * @param integer $days           number of days to increment hits
     * @param array   $existing_stats array of date => hits paired values
     * @param string  $date           base date
     * @return integer                number of hits
     */
    private function _calculate_days_stats( $days, $existing_stats, $date ) {
        if ( $existing_stats  && $days == 1 ){
            if ( isset( $existing_stats[$date] ) ) {
                return (int)$existing_stats[$date] + 1;
            }
        }else if ( $existing_stats ) {
            $extra_to_add = 0;
            if ( isset( $existing_stats[$date] ) ) {
                $extra_to_add = (int)$existing_stats[$date];
            }
            $total = 0;
            for ( $i = 1; $i < $days; $i++ ) {
                $timestampDate = strtotime($date);
                // calculate relative date to provided $date
                $old_date = date('Y-m-d', strtotime( "-{$i} days" , $timestampDate ) );
                if ( isset( $existing_stats[$old_date] ) ) {
                    $total += (int)$existing_stats[$old_date];
                }
            }
            return $total + $extra_to_add + 1;
        }
        return 1;
    }

    /**
     * Checks for a string with a date format Y-m-d
     *
     * @param string $date
     * @return boolean is valid or not
     */
    private function validDateFormat($date)
    {
        $result = \DateTime::createFromFormat('Y-m-d', $date) !== FALSE;
        return $result;
    }


    /**
     * Get the query builder object for the Stats model's table prepared with the requested items,
     * ordered by one of the stats column.
     *
     * @param $days String one_day_stats|seven_days_stats|thirty_days_stats|all_time_stats
     * @param $orderType String ASC|DESC
     * @param $modelType String Filter by this Eloquent Model type
     * @param $limit int Number of items to return
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeGetStats($query, $days = 'one_day_stats', $orderType = 'DESC', $modelType = '', $limit = null)
    {

        if( !empty( $modelType )){
            $query->where( 'trackable_type', '=', $modelType );
        }
        // Only retrieve elements with at least 1 hit in the requested period
        if( !empty( $days )){
            $query->where( $days, '!=', 0 );
        }
        if( !empty( $limit )){
            $query->take($limit);
        }
        $query->orderBy( $days, $orderType );
        return $query;
    }
}
