<?php

namespace App\Http\Controllers\Admin;

use App\Posts;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class MainAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {

        $this->middleware('Admin');

        $unapprovenews = Posts::approve('no')->byType('news')->count();

        $unapprovelists = Posts::approve('no')->byType('list')->count();

        $unapprovepolls = Posts::approve('no')->byType('poll')->count();

        $unapprovevideos = Posts::approve('no')->byType('video')->count();

        $waitapprove = Posts::approve('no')->take(15)->get();


        \View::share(['waitapprove' => $waitapprove,
                       'toplamapprove' => $unapprovenews+$unapprovelists+$unapprovepolls+$unapprovevideos,
                      'napprovenews' => $unapprovenews,
                      'napprovelists' => $unapprovelists,
                      'napprovepolls' => $unapprovepolls,
                      'napprovevideos' => $unapprovevideos
        ]);


    }


}
