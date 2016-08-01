<?php

namespace App\Http\Controllers;

use App\PollVotes;
use App\Posts;
use Auth;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class PollController extends Controller
{
    public function __construct(){

        $this->middleware('auth');
    }


    public function VoteAPoll($catname, $slug,  Request $request){

        $post = Posts::where('type', $catname)->where('slug', $slug)->first();

        $entrys = $post->entry;

        $voteid = $request->query('vote');

        if(PollVotes::currentUserHasVoteOnPost($post->id)->get()->isEmpty()){

            $vote = new PollVotes;
            $vote->post_id = $post->id;
            $vote->option_id = $voteid;
            $vote->user_id = Auth::user()->id;
            $vote->save();


            if($request->ajax()){

                return view('_particles._lists.entryslists', compact("post", "entrys"));

            }

        };


        return true;

    }

}
