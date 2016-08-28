<?php

namespace app\Http\Controllers;

/*
 * Antvel - Comments Controller
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Comment;
use App\Http\Controllers\Controller;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $comments = Comment::get();
        $this->json_or_dd($comments->toArray());
    }

    /**
     * Display a listing of comments from an order.
     *
     * @return Response
     */
    public function orderComments()
    {
        $comments = Comment::where()->get();
        $this->json_or_dd($comments->toArray());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        $data = \Request::all();
        $comment = Comment::create($data);
        $this->json_or_dd($comment->toArray());
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $comment = Comment::find($id);
        $this->json_or_dd($comment->toArray());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function update($id)
    {
        $data = \Request::all();
        $comment = Comment::find($id)->fill($data)->save();
        $this->json_or_dd($comment->toArray());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        //maybe
    }
}
