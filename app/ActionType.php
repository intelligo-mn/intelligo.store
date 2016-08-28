<?php

namespace app;

/*
 * Antvel - Action Type Model
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Eloquent\Model;

class ActionType extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'action_types';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'source_type',
        'action',
    ];

    protected $appends = [];

    public function useAs($type)
    {
        switch ($type) {
            case 'notice': $this->appends = $this->appends + ['notice_template', 'link']; break;
        }

        return $this;
    }

    public function getNoticeTemplateAttribute()
    {
        return trans("notices.templates.$this->source_type:$this->action");
    }

    public function getLinkAttribute()
    {
        return trans("notices.links.$this->source_type");
    }

    public function scopeUnique($query, $input)
    {
        $query->whereIn('id', array_unique($input));
    }
}
