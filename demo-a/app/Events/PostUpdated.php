<?php

namespace App\Events;

use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class PostUpdated extends Event
{
    use SerializesModels;

    public $post;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($post, $actiontype)
    {

        $this->action = $actiontype;

        $this->username = $post->user->username;
        $this->useremail = $post->user->email;
        $this->PostTitle = $post->title;
        $this->Postlink = url('/'.$post->type.'/'.$post->slug);

    }


    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [];
    }
}
