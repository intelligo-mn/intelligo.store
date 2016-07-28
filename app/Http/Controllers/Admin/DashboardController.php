<?php

namespace App\Http\Controllers\Admin;

use App\Posts;
use App\User;
use App\Http\Requests;
use Carbon\Carbon;

class DashboardController extends MainAdminController
{

    public function index(Posts $posts, User $users)
    {


        $rangetoday = Carbon::now()->subDays(1);

        $postunapprove = $posts->approve('no')->count();

        $todaypost = $posts->where('created_at', '>=', $rangetoday)->count();

        $todayusers = $users->where('created_at', '>=', $rangetoday)->count();

        $todaylogins = $users->where('updated_at', '>=', $rangetoday)->count();

        $listcount = $posts->byType('list')->count();

        $videocount = $posts->byType('video')->count();

        $pollcount = $posts->byType('poll')->count();

        $newscount = $posts->byType('news')->count();

        $lastunappruves =$posts->approve('no')->take('7')->latest("published_at")->get();

        $lastnews =$posts->approve('yes')->byType('news')->latest("published_at")->take('5')->get();
        $lastlists =$posts->approve('yes')->byType('list')->latest("published_at")->take('5')->get();
        $lastvideos =$posts->approve('yes')->byType('video')->latest("published_at")->take('5')->get();
        $lastpolls =$posts->approve('yes')->byType('poll')->latest("published_at")->take('5')->get();

        $lastusers = $users->take('10')->get();


        return view('_admin.pages.index', compact(
            'todaypost',
            'todaypost',
            'postunapprove',
            'todayusers',
            'todaylogins',
            'listcount',
            'videocount',
            'pollcount',
            'newscount',
            'lastunappruves',
            'lastnews',
            'lastlists',
            'lastvideos',
            'lastpolls',
            'lastusers'
        ));

    }

}
