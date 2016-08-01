<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Posts extends Model
{
    use SoftDeletes;

    protected $table = 'posts';

    protected $fillable = ['slug', 'title', 'body', 'user_id', 'category_id', 'type','ordertype', 'thumb', 'approve', 'show_in_homepage', 'published_at', 'deleted_at'];

    protected $dates = ['published_at','deleted_at'];

    protected $softDelete = true;

    /**
     * Post belongs to user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    /**
     * Post has many entrys
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function entry()
    {
        return $this->hasMany('App\Entrys', 'post_id');
    }

    /**
     * Post belongs to a category
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo('App\Categories', 'category_id');
    }


    /**
     * Post has many poll options
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function pollvotes()
    {
        return $this->hasMany('App\PollVotes', 'post_id');
    }

    /**
     * Get Post All comments
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comments()
    {
        return $this->morphMany('App\Comments', 'content');
    }

    /**
     * Get post stats
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne
     */
    public function popularityStats()
    {
        return $this->morphOne('App\Stats', 'trackable');
    }



    public function hit()
    {
        //check if a polymorphic relation can be set
        if($this->exists){
            $stats = $this->popularityStats()->first();

            if( empty( $stats ) ){
                //associates a new Stats instance for this instance
                $stats = new Stats();
                $this->popularityStats()->save($stats);
            }

            return $stats->updateStats();
        }
        return false;
    }


    /**
     * Get posts by stats
     *
     */

    public function scopeGetStats($query, $days = 'one_day_stats', $orderType = 'DESC', $limit = 10)
    {
          $query->select('posts.*');

         $query->leftJoin('popularity_stats', 'popularity_stats.trackable_id', '=', 'posts.id');

         $query->where( $days, '!=', 0 );

         $query->take($limit);

         $query->orderBy( $days, $orderType );

         return $query;
    }
    /**
     * Get posts by type
     *
     * @param $type
     * @return mixed
     */

    public function scopeByType($query, $type)
    {
        if($type == 'all'){
            return $query;
        }
        return $query->where('type', $type);
    }


    /**
     * Get approval posts
     *
     * @param $type
     * @return mixed
     */

    public function scopeApprove($query, $type)
    {
        return $query->where('approve', $type);
    }


    /**
     *
     * Get post by category
     * @param $query
     * @param $categoryid
     * @return mixed
     */
    public function scopeByCategory($query, $categoryid)
    {
        return $query->where("category_id", $categoryid);
    }

    /**
     *
     * Get post for home
     * @param $query
     * @param $categoryid
     * @return mixed
     */
    public function scopeForhome($query, $features = null)
    {
        if( $features == null){
                if(getcong('AutoInHomepage') == 'true' ){
                    return;
                }
        }

        return $query->where("show_in_homepage", 'yes');
    }



}
