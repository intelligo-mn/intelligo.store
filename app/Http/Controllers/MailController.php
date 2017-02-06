<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

// we will use Mail namespace
use Mail;
use Session;

class MailController extends Controller
{
 

    	public function getContact() {
		return view('time.mail');
	}

	public function postContact(Request $request) {
		

		$data = array(
			'email' => $request->email,
			'subject' => $request->subject,
			'service' => $request->service,
			'service_time' => $request->service_time,
			'userName' => $request->userName,
			'userNumber' => $request->userNumber,
			'bodyMessage' => $request->message
			);

		Mail::send('time.contact', $data, function($message) use ($data){
			$message->from($data['email']);
			$message->to('dambiidark@gmail.com');
			$message->subject($data['subject']);
		});

		Session::flash('success', 'Your Email was Sent!');

		return redirect('/');
	}

   
}