<?php

namespace App\Listeners;

use App\Events\PostUpdated;
use Psy\Exception\Exception;
use Illuminate\Contracts\Mail\Mailer;

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
        try {

            $this->mailer->send($view, compact('username', 'PostTitle', 'Postlink'), function($message)
            {
                $message->sender(getcong('siteemail'), getcong('sitename'));
                $message->subject($this->subject);
                $message->from(getcong('siteemail'), getcong('sitename'));
                $message->to($this->useremail);
                $message->getSwiftMessage();
            });

        } catch (Exception $e) {

        }


    }
}
