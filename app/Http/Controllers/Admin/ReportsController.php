<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ReportsController extends Controller
{

    public function index($type, Request $request)
    {
        $range = Carbon::now()->subDays(30);

        if($type=='last30dayusers'){

        $stats = DB::table('users')
            ->where('created_at', '>=', $range)
            ->groupBy('date')
            ->orderBy('date', 'ASC')
            ->get([
                DB::raw('Date(created_at) as date'),
                DB::raw('COUNT(*) as value')
            ]);

        }elseif($type=='last30news'){

            $typene = $request->query('type');

            $stats = DB::table('posts')
                ->where('created_at', '>=', $range)
                ->where('type', $typene)
                ->groupBy('date')
                ->orderBy('date', 'ASC')
                ->get([
                    DB::raw('Date(created_at) as date'),
                    DB::raw('COUNT(*) as news'),
                ]);

        }if($type=='last30SPOTStotal'){

            $totalnews = DB::table('posts')->where('type', '=', 'news')->where('created_at', '>=', $range)->count();
            $totallists = DB::table('posts')->where('type', '=', 'list')->where('created_at', '>=', $range)->count();
            $totalpolls = DB::table('posts')->where('type', '=', 'poll')->where('created_at', '>=', $range)->count();
            $totalquizzes = DB::table('posts')->where('type', '=', 'quiz')->where('created_at', '>=', $range)->count();
            $totalvideos = DB::table('posts')->where('type', '=', 'video')->where('created_at', '>=', $range)->count();

            $stats =  array(
                ['label' => trans("admin.Newsin30Days"),  'value' => $totalnews],
                ['label' =>  trans("admin.Listsin30Days"),  'value' => $totallists] ,
                ['label' =>  trans("admin.Quizzesin30Days"),  'value' => $totalquizzes] ,
                ['label' =>  trans("admin.Pollsin30Days"),  'value' => $totalpolls] ,
                ['label' =>  trans("admin.Videosin30Days"),  'value' => $totalvideos]
            );

        }


        return $stats;
    }


}
