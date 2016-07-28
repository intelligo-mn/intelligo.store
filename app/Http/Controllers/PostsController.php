<?php

namespace App\Http\Controllers;

use App\Categories;
use App\Entrys;
use App\Http\Requests\CreatePostRequest;
use App\Posts;
use Carbon\Carbon;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Stats;
class PostsController extends Controller
{

    public function __construct(){


        $this->middleware('DemoAdmin', ['only' => ['sendtrashpost', 'CreateEditPost']]);

        $this->middleware('auth', ['except' => ['index']]);
    }


    /**
     * Show a Post
     *
     * @return \Illuminate\View\View
     */
    public function index($catname, $slug){

        $post = Posts::where('type', $catname)->where('slug', $slug)->first();

        if(!$post){
            abort('404');
        }

        if($post->approve=='no'){
            if(Auth::check() == false or $post->user_id !== Auth::user()->id){
                if(Auth::user()->usertype !== 'Admin'){
                 abort('404');
                }
            }
        }

        $post->hit();

        $entrys = $post->entry;

        $lastNews = Posts::approve('yes')->getStats('seven_days_stats', 'DESC', 8)->get();


        $lastFeatures = Posts::approve('yes')->where('category_id', $post->category_id)->getStats('one_day_stats', 'DESC', 50)->paginate(6);

        if(\Request::query('page')){

            return view('_widgets.post-between-comments', compact('lastFeatures'));

        }

        return view("pages/post", compact('post','entrys','lastNews','lastFeatures'));
    }



    /**
     *
     * @return \Illuminate\View\View
     */
    public function CreateNew(Request $request){

        $neres = $request->query('new');

        if($neres=='video'){
            $typene="video";

        }elseif($neres=='list'){
            $typene="list";

        }elseif($neres=='poll'){
            $typene="poll";

        }elseif($neres=='embed'){
            $typene="embed";

        }else{
            $typene="news";
        }

        $categories = Categories::byType($typene)->lists('name', 'id');

        return view("posts.newCreate", compact("categories","typene"));
    }


    public function CreateEdit($id)
    {

        $post = Posts::findOrFail($id);

        if (\Gate::denies('update-post', $post)) {

            \Session::flash('error.message',  trans('index.nopermission'));

            return redirect('/');
        }

        if(getcong('UserEditPosts')=='false' or Auth::user()->usertype !== 'Admin'){

            if(getcong('UserEditPosts')=='false' or $post->user_id !== Auth::user()->id){

            \Session::flash('error.message',  trans('index.nopermission'));
            return redirect('/');
            }
        }

        if($post->type == 'poll'){
            \Session::flash('error.message',  'Can\'t edit polls');
            return redirect('/');
        }

        $entrys = $post->entry;


        $typene = $post->type;

        $categories = Categories::byType($typene)->lists('name', 'id');




        if($typene == 'news'){
            $titlem = trans('index.new-s');
        }elseif($typene == 'list'){
            $titlem = trans('index.list');
        }elseif($typene == 'video'){
            $titlem = trans('index.video');
        }elseif($typene == 'poll'){
            $titlem= trans('index.poll');
        }

        return view("posts.editCreate", compact("post", "entrys", "categories", "typene", "titlem"));

    }


    /**
     * Delete posts but not permanently
     *
     * @return \Illuminate\View\View
     */

    public function sendtrashpost($id)
    {

        $post = Posts::findOrFail($id);

        if (\Gate::denies('update-post', $post)) {

            \Session::flash('error.message',  trans('index.nopermission'));

            return redirect('/');
        }

        if(getcong('UserDeletePosts')=='false' or Auth::user()->usertype !== 'Admin'){

            \Session::flash('error.message',  trans('index.nopermission'));
            return redirect('/');
        }

        $post->approve = 'no';
        $post->delete();

        \Session::flash('success.message', 'Moved to Trash');

        return redirect('/');

    }

    /**
     * Adding new post element
     *
     * @return \Illuminate\View\View
     */
    public function CreateNewPost(Request $request){


        $okay = $this->getfailsvalidator($request);

        if($okay!=='pas'){
          return $okay;
        }

        $inputs = $request->all();


        $titleslug = str_slug($inputs['title'], "-");

        $imgWW = $this->resizepostimage($inputs['thumb'], $titleslug);

        $ordertype = $inputs['ordertype'];
        if($ordertype == 'none'){
            $ordertype = null;
        }

        $post = new Posts;
        $post->slug = $titleslug;
        $post->title = $inputs['title'];
        $post->body = $inputs['description'];
        $post->category_id = $inputs['category'];
        $post->type = $inputs['type'];
        $post->ordertype = $ordertype;
        $post->thumb = $imgWW;

        if(getcong('AutoApprove')=='true' or Auth::user()->usertype == 'Admin' and Auth::user()->email !== 'demo@admin.com'){
            $post->approve = 'yes';
        }else{
            $post->approve = 'no';
        }

        $post->published_at = Carbon::now();


        Auth::user()->posts()->save($post);

        $this->createentrys($request, $post);


        //burda kullanıyoruz çünkü belkiede entrylerde aynı resim adresini kulllanıyordur.
        \File::delete($inputs['thumb']); //delete tmp image

        \Session::flash('success.message',  trans('index.successcreated'));

        return array('url' => action('PostsController@index', [$post->type, $post->slug ]));

    }



    public function CreateEditPost($id, Request $request)
    {

        $post = Posts::findOrFail($id);

        $this->getfailsvalidator($request);

        $inputs = $request->all();

        $titleslug = str_slug($inputs['title'], "-");


        if($post->thumb!==$inputs['thumb']){

            $imgWW = $this->resizepostimage($inputs['thumb'], $titleslug);

        }else{
            $imgWW=$post->thumb;
        }


        $ordertype = $inputs['ordertype'];


        if($ordertype == 'none'){
            $ordertype = null;
        }


        $post->slug = $titleslug;
        $post->title = $inputs['title'];
        $post->body = $inputs['description'];
        $post->category_id = $inputs['category'];
        $post->ordertype = $ordertype;
        $post->thumb = $imgWW;

        if(getcong('AutoEdited')=='true' or Auth::user()->usertype == 'Admin'){
            $post->approve = 'yes';
        }else{
            $post->approve = 'no';
        }

        $post->save();

        $post->entry()->forceDelete();

        $this->createentrys($request, $post);

        \Session::flash('success.message', trans('index.successupdated'));




        return array('url' => action('PostsController@index', [$post->type, $post->slug ]));
    }


    private function createentrys($request, $post){

        $inputs = $request->all();

        foreach($inputs['entrys'] as $key => $n ){
            $entryorder = $inputs['entrys'][$key];
            $entrytypey = $entryorder['type'];

            $entry = new Entrys;
            $entry->user_id = 'Me';
            $entry->order = $key;
            $entry->type = $entrytypey;
            $entry->title = $entryorder['title'];

            if($entrytypey!=="poll") {

                $entry->body =  $entryorder['body'];

                if($entrytypey!=="video" or $entrytypey!=="embed") {
                $entry->source = $entryorder['source'];
                }

            }

            if($entrytypey=="image") {

                $imgRR = $this->moveentryimage($entryorder['image'], $post->id, $key);

                $entry->image = $imgRR;
            }

            if($entrytypey=="video" or $entrytypey=="embed") {
                $entry->video = $entryorder['video'];
            }

            $post->entry()->save($entry);
        }



    }


    private function resizepostimage($imgWW, $slug)
    {

        $tmpFilePath = 'upload/media/posts/';

        $tmpFileDate =  date('Y-m') .'/'.date('d').'/';

        $tmpFileName = substr($slug,0,100).'_'.time();

        $saveFilePath = $tmpFilePath.$tmpFileDate.$tmpFileName;

        $this->makeimagedir($tmpFilePath.$tmpFileDate);


        if(substr($imgWW, 0, 4) == 'http'){

            $imgWsr = $imgWW;

        }else{

            $imgWsr = substr($imgWW, 1);

        }


        $imgWW = \Image::make($imgWsr);

        $imgWW->fit(650, 370)->save($saveFilePath.'-b.jpg');

        $imgWW->fit(300, 190)->save($saveFilePath.'-s.jpg');

        return $tmpFileDate.$tmpFileName;
    }

    private function moveentryimage($thumb, $postid, $entryorder)
    {

        $tmpFilePath = 'upload/media/entries/';

        $tmpFileDate =  date('Y-m') .'/'.date('d').'/';

        $tmpFileName = $postid.'-'.$entryorder.'-'.md5(time());

        $this->makeimagedir($tmpFilePath.$tmpFileDate);

        if(substr($thumb, 0, 4) != 'http'){

            $thumb = substr($thumb, 1);

        }


        $img = \Image::make($thumb);

        $imgmj = $img->mime();

        if($imgmj=='image/gif'){
            $ext ='.gif';
        }else {
            $ext ='.jpg';
        }

        $img->save($tmpFilePath.$tmpFileDate.$tmpFileName.$ext);



        return $tmpFileDate.$tmpFileName.$ext;


    }

    private function makeimagedir($path)
    {
        if (!file_exists(public_path() .'/'. $path )) {
            $oldmask = umask(0);
            mkdir(public_path() .'/'. $path , 0777, true);
            umask($oldmask);
        }
        return;
    }


    /**
     * Validator of question posts
     *
     * @param $inputs
     * @return array|bool
     */
    protected function Postvalidator(array $inputs)
    {

        $rules = [
            'type' => 'required',
            'title' => 'required|unique:posts|min:10|max:255',
            'category' => 'required|exists:categories,id',
            'description'  => 'required|min:10|max:255',
            'thumb' => 'required|min:10',

        ];

        return \Validator::make($inputs, $rules);

    }


    /**
     * Validator of question posts
     *
     * @param $inputs
     * @return array|bool
     */
    protected function EntryValidator(array $inputs, $entrytype)
    {
        if($entrytype=="text"){

            $rules = ['type' => 'required', 'title' => 'min:5|max:255', 'body' => 'required', 'source' => ''];

        }else if($entrytype=="image"){

            $rules = ['type' => 'required', 'title' => 'min:5|max:255', 'body' => '', 'source' => '', 'image' => 'required'];

        }else if($entrytype=="video"){

            $rules = ['type' => 'required', 'title' => 'min:5|max:255', 'body' => '', 'source' => '', 'video' => 'required|max:500'];

        }else if($entrytype=="poll"){

            $rules = ['type' => 'required', 'title' => 'required|max:255', 'body' => '', 'source' => '', 'video' => ''];

        }else if($entrytype=="embed"){

            $rules = ['type' => 'required', 'title' => 'max:255', 'body' => '', 'source' => '', 'video' => 'required|max:1000'];

        }



        return \Validator::make($inputs, $rules);

    }

    protected function getfailsvalidator($request){

        $inputs = $request->all();

        $v = $this->Postvalidator($request->only('title', 'description', 'category', 'type', 'thumb'));

        if ($v->fails()) {
            return array('status' => 'Error', 'errors' => $v->errors()->first());
        }

        foreach($inputs['entrys'] as $key => $n )
        {
            $entrytype = $inputs['entrys'][$key]['type'];

            $v = $this->EntryValidator($inputs['entrys'][$key], $entrytype);

            if ($v->fails()) {
                return array('status' => 'Error', 'errors' => 'Entry Error: '. $v->errors()->first());
            }
        }

        return 'pas';
    }



}
