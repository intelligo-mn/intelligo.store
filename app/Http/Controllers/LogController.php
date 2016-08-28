<?php

namespace app\Http\Controllers;

/*
 * Antvel - Logs Controller
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */

use App\Http\Controllers\Controller;
use App\Log;

class LogController extends Controller
{
    public function unauth()
    {
        if (\Auth::check()) {
            return false;
        }
        if (\Request::wantsJson()) {
            return json_encode(['error' => 'need login']);
        } else {
            return redirect('/auth/login');
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        if ($unauth = $this->unauth()) {
            return $unauth;
        }
        $logs = Log::get();
        $this->json_or_dd($logs->toArray());
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
        $logs = Log::find($id);
        if (\Request::wantsJson()) {
            return $logs->toJson();
        }
        dd($logs->toArray());
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
