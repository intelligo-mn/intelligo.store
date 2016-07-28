<?php

namespace App\Listeners;

use App\Events\PostUpdated;
use Illuminate\Contracts\Mail\Mailer;
use Illuminate\Queue\InteractsWithQueue;

class PostUpdatedListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(Mailer $mailer)
    {
        $this->mailer = $mailer;
    }

    /**
     * Handle the event.
     *
     * @param  PostUpdated  $event
     * @return void
     */
    public function handle(PostUpdated $event)
    {

        $this->useremail = $event->useremail;

        $username = $event->username;
        $PostTitle = $event->PostTitle;
        $Postlink = $event->Postlink;

        $action = $event->action;

        if($action == 'Approved'){

            $view = 'emails.approved';
            $this->subject= trans('emails.approvedsubject');

        }elseif($action == 'Trash'){

            $view = 'emails.trashed';
            $this->subject= trans('emails.trashsubject');

        }

        $this->mailer->send($view, compact('username', 'PostTitle', 'Postlink'), function($message)
        {
            $message->subject($this->subject);
            $message->from(getcong('siteemail'), getcong('sitename'));
            $message->to($this->useremail);
            $message->getSwiftMessage();
        });

    }
}
