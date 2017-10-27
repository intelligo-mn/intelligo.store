<?php

namespace App\Http\Controllers\Admin;

use App\Categories;
use App\Posts;
use App\User;
use App\Http\Requests;
use Carbon\Carbon;
use ZipArchive;
use Illuminate\Http\Request;

class DashboardController extends MainAdminController
{

    protected $verifyapiserver  =  'http://envato.akbilisim.com/api/BA';

    protected $verifythemeapiserver  =  'http://envato.akbilisim.com/api/TE/';

    protected $server  =  'http://envato.akbilisim.com/productbuzzy/buzzyupdates/latestupdate.txt';

    protected $servercore  =  'http://envato.akbilisim.com/productbuzzy/buzzyupdates/latestcore.txt';

    protected $serverrar  =  'http://envato.akbilisim.com/productbuzzy/buzzyupdates/updates/update';

    protected $servertheme  =  'http://envato.akbilisim.com/productbuzzy/buzzythemes/updates/';

    protected $pluginsapi = 'http://envato.akbilisim.com/api/allplugins';

    protected $themesapi = 'http://envato.akbilisim.com/api/allthemes';

    public function __construct()
    {
        parent::__construct();

        $this->middleware('DemoAdmin', ['only' => ['activeplugin','activetheme','downloadtheme','checkupdate','updatepurcahecheck','checkinputcodeforplugin','getr']]);

    }

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

        $lastunappruves =$posts->approve('no')->take('10')->latest("published_at")->get();

        $lastnews =$posts->approve('yes')->byType('news')->latest("published_at")->take('5')->get();
        $lastlists =$posts->approve('yes')->byType('list')->latest("published_at")->take('5')->get();
        $lastvideos =$posts->approve('yes')->byType('video')->latest("published_at")->take('5')->get();
        $lastpolls =$posts->approve('yes')->byType('poll')->latest("published_at")->take('5')->get();
        $lastquizzes =$posts->approve('yes')->byType('quiz')->latest("published_at")->take('5')->get();

        $lastusers = $users->latest("created_at")->take('10')->get();


        $updateversion = $this->checkupdate();


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
            'lastquizzes',
            'lastpolls',
            'lastusers',
            'updateversion'
        ));



    }

    public function plugins()
    {
        $version=\Config::get('installer.last_version');
        $code=file_get_contents(base_path('storage/.buzzy'), true);

        $content = curlit($this->pluginsapi.'?i=buzzy&v='.$version.'&c='.$code.'&u='.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);

        $plugins= json_decode($content, true);


        if (!$plugins){
            \Session::flash('error.message', trans("admin.pluginsnotavailable"));
            return redirect('/admin');
        }

        $typeos=[];
        $categories = Categories::where("main", '1')->where("disabled", '0')->orwhere("main", '2')->where("disabled", '0')->orderBy('order')->get();

            foreach($categories as $cat){
                $typeos[$cat->id]=$cat->name;

                foreach(Categories::where('type', $cat->id)->orderBy('name')->get() as $cata){
                    $typeos[$cata->id]="---- " .$cata->name;
                }

            }


        return view('_admin.pages.plugins', compact(
            'plugins',
           'updateversion',
           'typeos'
        ));
    }

    public function themes()
    {
        $version=\Config::get('installer.last_version');
        $code=file_get_contents(base_path('storage/.buzzy'), true);

        $content = curlit($this->themesapi.'?i=buzzy&v='.$version.'&c='.$code.'&u='.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);

        $themes= json_decode($content, true);


        if (!$themes){
            \Session::flash('error.message', trans("admin.themesnotavailable"));
            return redirect('/admin');
        }

        return view('_admin.pages.themes', compact(
            'themes',
            'updateversion'
        ));
    }

    public function themesetting($theme, Request $request)
    {
        $themeid = $request->query("t");



        $version=\Config::get('installer.last_version');
        $code=file_get_contents(base_path('storage/.buzzy'), true);

        $content = curlit($this->themesapi.'?i=buzzy&v='.$version.'&c='.$code.'&u='.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);

        $themes= json_decode($content, true);

        if (!$themes){
            \Session::flash('error.message', trans("admin.themesnotavailable"));
            return redirect('/admin');
        }

        $theme = $themes[$themeid];


        return view('_admin.pages.themesettings', compact(
            'theme',
            'themes'
        ));
    }

    public function activeplugin(Request $request)
    {
        $plugin = $request->all();

        $pluginiten=$plugin['dataitem'];
        $pluginverify=$plugin['dataverify'];


        if(getenvcong('p-'.$pluginiten)=='on'){
            $type='off';
            $typeq='1';

        }else{
            $type='on';
            $typeq='0';

            if($pluginverify=="on"){
                if(!$this->code($pluginiten)){
                    \Session::flash('error.message', trans("admin.wecaninstallplugin"));
                    $message['type']='success';
                    return $message;
                }
            }
        }

        $actite="";
        if($pluginiten=='buzzynews'){
            $actite="news";
        }else if($pluginiten=='buzzylists'){
            $actite="list";
        }else if($pluginiten=='buzzypolls'){
            $actite="poll";
        }else if($pluginiten=='buzzyvideos'){
            $actite="video";
        }else if($pluginiten=='buzzyquizzes'){
            $actite="quiz";
        }

        if($actite!==""){
            $catees = Categories::where("type", $actite)->first();
            $catees->disabled=$typeq;
            $catees->save();
        }

        writeConfig('p-'.$pluginiten, $type);

        $message['type']='success';
        $message['message']='';
        $message['url']="";
        return $message;
    }

    public function activetheme(Request $request)
    {
        $theme = $request->all();

        $themeiten=$theme['dataitem'];
        $themeverify=$theme['dataverify'];


        if($themeverify=="on"){
            if(!$this->code($themeiten)){
                \Session::flash('error.message', trans("admin.wecaninstallplugin"));
                $message['type']='success';
                return $message;
            }
        }

        writeConfig('CurrentTheme', $themeiten);

        $message['type']='success';
        $message['message']='';
        $message['url']="";
        return $message;
    }

    public function downloadtheme(Request $request)
    {
        $theme = $request->all();

        $themeiten=$theme['dataitem'];
        $themeverify=$theme['dataverify'];

        if($themeverify=="on"){
            if(!$this->code($themeiten)){
                \Session::flash('error.message', trans("admin.wecaninstallplugin"));
                $message['type']='success';
                return $message;
            }
            $code=file_get_contents(base_path('storage/.'.$themeiten), true);
            $content = curlit($this->verifythemeapiserver.$code.'?r=2&t='.$themeiten.'&u='.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
            $contents= json_decode($content, true);
            $this->getr($contents['z']);
        }else{
            $code=file_get_contents(base_path('storage/.buzzy'), true);
            $content = curlit($this->verifythemeapiserver.$code.'?r=1&t='.$themeiten.'&u='.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
            $contents= json_decode($content, true);
            $this->getr($contents['z']);
        }

        $message['type']='success';
        $message['message']='';
        $message['url']="";
        return $message;
    }

     public function checkupdate(){

        $content = curlit($this->server);
        return $content;
   
    }
     public function checkcode(){

        $content = curlit($this->server);
        if ($content){
            return $content;
        }

    }
    public function sickupdate(){

        $content = curlit($this->servercore);
        return $content;
        
    }

    public function checkinputcodeforplugin(Request $request){
        $request=$request->all();
        $code=$request['code'];
        $dataitem=$request['dataitem'];

        $jok=curlit($this->verifyapiserver.$code.'?r=2&t='.$dataitem.'&u='.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
        $jok= json_decode($jok, true);

       
        return response()->json(['type'=>'success', 'message' => trans("admin.accessok")]);
        
    }


    public function getr($zurl)
    {
        $zip_path = base_path().'/tmp.zip';
        try {
            file_put_contents($zip_path, fopen($zurl, 'r'));
        }catch(Exception $e) {
            return false;
        }
        $zip = new ZipArchive;
        if (! $zip) {
            return false;
        }
        $zip->open("$zip_path");
        $zip->extractTo(base_path());
        $zip->close();
        unlink($zip_path);
        return true;
    }
}
