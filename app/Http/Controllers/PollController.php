<?php

namespace App\Http\Controllers;

use App\Entrys;
use App\PollVotes;
use App\Posts;
use App\Reactions;
use Auth;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cookie;


class PollController extends Controller
{
    public function __construct(){

            parent::__construct();

        if(getcong('sitevoting')=="1"){
            $this->middleware('auth');
        }
    }


    public function VoteANewPoll($entryid, $slug,  Request $request){

        $post = Posts::where('slug', $slug)->first();
        $entry = Entrys::where('id', $entryid)->first();

        $voteid = $request->query('vote');

        if(Auth::check()){
            $auser = Auth::user()->id;
        }else{
            $auser = $request->ip();
        }

           $vote = new PollVotes;
           $vote->post_id = $entry->id;
           $vote->option_id = $voteid;
           $vote->user_id = $auser;
           $vote->save();

            if($request->ajax()){

                       return view('_particles._lists.polllistanswers', compact("post", "entry"));

            }


        return true;

    }

    public function VoteAPoll($catname, $slug,  Request $request){

        $post = Posts::where('type', $catname)->where('slug', $slug)->first();

        $entrys = $post->entry;

        $voteid = $request->query('vote');

        if(Auth::check()){
            $auser = Auth::user()->id;
        }else{
            $auser = $request->ip();
        }

           $vote = new PollVotes;
           $vote->post_id = $post->id;
           $vote->option_id = $voteid;
           $vote->user_id = $auser;
           $vote->save();


            if($request->ajax()){

                       return view('_particles._lists.entryslists', compact("post", "entrys"));

            }



        return true;

    }
    public function VoteReaction($catname, $slug,  Request $request){

        $post = Posts::where('slug', $slug)->first();

        $voteid = $request->query('reaction');

        if(Auth::check()){
            $auser = Auth::user()->id;
        }else{
            $auser = $request->ip();
        }

        if(Reactions::currentUserHasVoteOnPost($post->id)->count() <= 2){

            $reactions = new Reactions;
            $reactions->post_id = $post->id;
            $reactions->reaction_type = $voteid;
            $reactions->user_id = $auser;
            $reactions->save();

            $reactions = $post->reactions;

            if($request->ajax()){

                return view('_forms._reactionforms', compact("reactions", "post"));

            }

        };


        return true;

    }

    public function shared($id){

        $post = Posts::findOrFail($id);

        Cookie::queue('moduPostshared'.$post->id, true, 45000);
        if (Cookie::get('moduPostshared'.$post->id) == true){
            return "ok";
        }

        $post->shared = $post->shared+1;
        $post->save();

        return "ok";

    }

}
