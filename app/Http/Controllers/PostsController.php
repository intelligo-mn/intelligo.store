<?php

namespace App\Http\Controllers;

use App\Categories;
use App\Entrys;
use App\Posts;
use Carbon\Carbon;
use Validator;
use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Image;

class PostsController extends Controller
{

    public function __construct(){

        parent::__construct();

        $this->s3url=awsurl();

        $this->middleware('DemoAdmin', ['only' => ['sendtrashpost', 'CreateEditPost']]);

        $this->middleware('auth', ['except' => ['index', 'amp', 'ajax_previous', 'commentload']]);
    }


    /**
     * Show a Post
     *
     * @return \Illuminate\View\View
     */
    public function index($catname, $slug)
    {
        if(getenvcong('Siteactive')=='no'){
            return view('errors.maintenance');
        }

        $post = getposturl($catname, $slug);

        if (!$post) {
            return redirect('404');
        }

        if ($post->approve == 'no' or $post->approve == 'draft' ) {
            if (!Auth::check() or $post->user_id != Auth::user()->id and Auth::user()->usertype != 'Admin') {
                   return redirect('404');
            }
        }

      
		$post->hit();


        $entrys = $post->entry();
        if($post->pagination==null){
            $entrys =  $entrys->where('type','!=', 'answer')->orderBy('order', $post->ordertype=='desc' ? 'desc' : 'asc')->get();
        }else{
            $entrys =  $entrys->where('type','!=', 'answer')->orderBy('order', $post->ordertype=='desc' ? 'desc' : 'asc')->paginate($post->pagination);
        }

        $entrysquizquest=""; $entrysquizresults="";
        if($post->type=='quiz'){
            $entrysquizquest=$post->entry()->where('type', 'quizquestion')->oldest("order")->get();
            $entrysquizresults=$post->entry()->byType("quizresult")->oldest("order")->get();

        }
//where('published_at', '>=', Carbon::yesterday())->
        $lastTrending = Posts::approve('yes')->where('posts.id', '!=', $post->id)->typesActivete()->getStats('one_day_stats', 'DESC', 10)->get();


        $lastFeatures = Posts::approve('yes')->where('type', $post->type)->typesActivete()->getStats('one_day_stats', 'DESC', 6)->get();


        $reactions=false;
        if(getenvcong('p-reactionform') == 'on'){
        $reactions = $post->reactions;
        }
        $commentson=true;
        return view("pages/post", compact('post', 'entrys', 'reactions', 'entrysquizquest', 'entrysquizresults', 'lastTrending', 'lastFeatures', 'commentson'));
    }


    /**
     * Show a Amp Post
     *
     * @return \Illuminate\View\View
     */
    public function amp($catname, $id)
    {
        $post= Posts::where('id', $id)->first();

        if (!$post) {
            return redirect('404');
        }

        if($post->type=='quiz' || $post->type=='poll'){
            return redirect('404');
        }

        if ($post->approve == 'no' or $post->approve == 'draft' ) {
            if (!Auth::check() or $post->user_id != Auth::user()->id and Auth::user()->usertype != 'Admin') {
                   return redirect('404');
            }
        }

        $entrys = $post->entry();
        $entrys =  $entrys->where('type','!=', 'answer')->orderBy('order', $post->ordertype=='desc' ? 'desc' : 'asc')->get();


        $lastFeatures = Posts::approve('yes')->where('type', $post->type)->typesActivete()->getStats('one_day_stats', 'DESC', 6)->get();

        return view("amp/post", compact('post', 'entrys', 'lastFeatures'));
    }

    /**
     *
     * @return \Illuminate\View\View
     */
    public function ajax_previous(Request $request){

        $post ="";

        $id = $request->query('id');
        $type = $request->query('type');
        $pid = $request->query('pid');

        $posta = Posts::findOrFail($id);

        if ($posta->type=='quiz') {
            return "";
        }

        $pids = explode('|', $pid);
        $idarays = array();
        foreach($pids as $pi) {
            array_push($idarays,$pi);
        }

        $post="";
        if(!empty($posta->tags)){
            $tags = explode(',',$posta->tags);

            foreach($tags as $key) {
                $posto = Posts::approve('yes')->whereNotIn('id', $idarays)->where('tags', 'LIKE',  '%'.$key.'%')->typesActivete()->latest()->first();
                if ($posto) {
                    $post=$posto;
                }
            }

        }

        if(empty($post)){
            $categories = explode(',',$posta->categories);

            foreach($categories as $keya) {
                $posto = Posts::approve('yes')->whereNotIn('id',  $idarays)->where('type', $type)->where('categories', 'LIKE',  '%'.$keya.'%')->typesActivete()->latest()->first();
                if ($posto) {
                    $post=$posto;
                }
            }
        }

        if (!$post) {
            return "";
        }

        $entrys = $post->entry();
        if($post->pagination==null){
            $entrys =  $entrys->where('type','!=', 'answer')->orderBy('order', $post->ordertype=='desc' ? 'desc' : 'asc')->get();
        }else{
            $entrys =  $entrys->where('type','!=', 'answer')->orderBy('order', $post->ordertype=='desc' ? 'desc' : 'asc')->paginate($post->pagination);
        }

        $reactions=false;
        if(getenvcong('p-reactionform') == 'on'){
            $reactions = $post->reactions;
        }

        return view("pages.postloadpage", compact("post", 'entrys', 'reactions'));
    }

    /**
     *
     * @return \Illuminate\View\View
     */
    public function commentload(Request $request){

        $id = $request->query('id');
        $url = $request->query('url');

        return view('_forms._commentforms', compact('id', 'url'));
    }


    /**
     *
     * @return \Illuminate\View\View
     */
    public function CreateNew(Request $request){

        $neres = $request->query('new');

        if(!$neres){
            return redirect('/');
        }

        $category = Categories::where('posturl_slug', $neres)->first();

        if(!$category){
            return redirect('/');
        }

        $categories = [];

        $typene = $category->type;

        return view("posts.newCreate", compact("categories", "category", "typene"));
    }


    public function CreateEdit($id, Request $request)
    {

        $post = Posts::findOrFail($id);

        if($post->ordertype=="trivia" and $request->query('qtype')!=='trivia'){
            return redirect(action('PostsController@CreateEdit', [$post->id]).'?qtype=trivia');
        }


            if (\Gate::denies('update-post', $post)) {

                \Session::flash('error.message',  trans('index.nopermission'));

                return redirect('/');
            }

        if(getenvcong('UserEditPosts')=='no' and Auth::user()->usertype != 'Admin'){

            if(getenvcong('UserEditPosts')=='no' or $post->user_id !== Auth::user()->id){

            \Session::flash('error.message',  trans('index.nopermission'));
            return redirect('/');
            }
        }


        $entrys = $post->entry()->where('type','!=', 'answer')->oldest("order")->get();


        $typene = $post->type;



        $category = Categories::where('type', $typene)->first();



        $entrysquizquest=""; $entrysquizresults="";$entrysquizresultsseletc="";

        if($typene == 'news'){
            $typenetitle = trans('index.new-s');
        }elseif($typene == 'list'){
            $typenetitle = trans('index.list');
        }elseif($typene == 'quiz'){
            $typenetitle = trans('buzzyquiz.quiz');


            $entrysquizquest=$post->entry()->where('type', 'quizquestion')->oldest("order")->get();
            $entrysquizresults=$post->entry()->byType("quizresult")->oldest("order")->get();

        }elseif($typene == 'video'){
            $typenetitle = trans('index.video');
        }elseif($typene == 'poll'){
            $typenetitle= trans('index.poll');
        }

        return view("posts.editCreate", compact("post",
                                                "entrys",
                                                "entrysquizquest",
                                                "entrysquizresults",
                                                "category",
                                                "typene",
                                                "typenetitle"));

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

        if(getenvcong('UserDeletePosts')=='no' and Auth::user()->usertype != 'Admin'){

            \Session::flash('error.message',  trans('index.nopermission'));
            return redirect('/');
        }

        $post->approve = 'no';
        $post->delete();

        \Session::flash('success.message', trans('updates.movedtotrash'));

        return redirect('/');

    }

    /**
     * Adding new post element
     *
     * @return \Illuminate\View\View
     */
    public function CreateNewPost(Request $request){
        $inputs = $request->all();

        $okay = $this->getfailsvalidator($request);
        if($okay!='pas'){
            return $okay;
        }
        $titleslug = str_slug($inputs['title'], "-");

        if(empty($titleslug)){

            $titleslug = preg_replace("/[\s-]+/", " ", $inputs['title']);

            $titleslug = preg_replace("/[\s_]/", '-', $titleslug);

        }
        $imgWW = $this->resizepostimage($inputs['thumb'], $titleslug);

		$ordertype = null;
		if(isset($inputs['ordertype'])){
        $ordertype = $inputs['ordertype'];
        if($ordertype == 'none'){
            $ordertype = null;
        }
		}
		
        $post = new Posts;
        $post->slug = $titleslug;
        $post->title = $inputs['title'];
        $post->body = $inputs['description'];
        $post->categories = json_encode($inputs['category']);
        if(isset($inputs['pagination'])){
        $post->pagination = $inputs['pagination'] == 0 ? null : $inputs['pagination'];
        }
        $post->type = $inputs['type'];
        $post->tags = isset($inputs['tags']) ? $inputs['tags'] : '';
        $post->ordertype = $ordertype;
        $post->thumb = $imgWW;

        if($inputs['datapostt']=='draft'){
            $post->approve = 'draft';
        }elseif(getenvcong('AutoApprove')=='yes' or Auth::user()->usertype == 'Staff' or Auth::user()->usertype == 'Admin' and Auth::user()->email !== 'demo@admin.com'){
            $post->approve = 'yes';
        }else{
            $post->approve = 'no';
        }

        $post->published_at = Carbon::now();


        Auth::user()->posts()->save($post);

        $this->createentrys($request, $post);


        //burda aynı resim adresini kulllanıyordur.
        \File::delete($inputs['thumb']); //delete tmp image

        \Session::flash('success.message',  trans('index.successcreated'));

        return array('url' =>  makeposturl($post) );

    }



    public function CreateEditPost($id, Request $request)
    {
        $ordertype=null;
        $post = Posts::findOrFail($id);

        $okay = $this->getfailsvalidator($request, $id);

        if($okay!='pas'){
            return $okay;
        }

        $inputs = $request->all();

        $titleslug = str_slug($inputs['title'], "-");

        if(empty($titleslug)){

            $titleslug = preg_replace("/[\s-]+/", " ", $inputs['title']);

            // Convert whitespaces and underscore to the given separator
            $titleslug = preg_replace("/[\s_]/", '-', $titleslug);

        }
        if($post->thumb!==$inputs['thumb']){

            $imgWW = $this->resizepostimage($inputs['thumb'], $titleslug);

            \File::delete(public_path("upload/media/posts/".$post->thumb."-s.jpg"));
            \File::delete(public_path("upload/media/posts/".$post->thumb."-b.jpg"));

        }else{
            $imgWW=$post->thumb;
        }


       $ordertype = null;
		if(isset($inputs['ordertype'])){
        $ordertype = $inputs['ordertype'];
        if($ordertype == 'none'){
            $ordertype = null;
        }
		}

        $post->slug = $titleslug;
        $post->title = $inputs['title'];
        $post->body = $inputs['description'];
        $post->categories = json_encode($inputs['category']);
        if(isset($inputs['pagination'])) {
            $post->pagination = $inputs['pagination'] == 0 ? null : $inputs['pagination'];
        }
        $post->tags = isset($inputs['tags']) ? $inputs['tags'] : '';
        $post->ordertype = $ordertype;
        $post->thumb = $imgWW;

        if($inputs['datapostt']=='draft'){
            $post->approve = 'draft';
        }elseif(getenvcong('AutoEdited')=='yes' or Auth::user()->usertype == 'Staff' or Auth::user()->usertype == 'Admin' and Auth::user()->email !== 'demo@admin.com'){
            $post->approve = 'yes';
        }else{
            $post->approve = 'no';
        }

        $post->save();

        $post->entry()->forceDelete();

        $this->createentrys($request, $post);

        \Session::flash('success.message', trans('index.successupdated'));

        return array('url' => makeposturl($post) );
    }


    private function createentrys($request, $post){

        $inputs = $request->all();

        foreach($inputs['entrys'] as $key => $n ){
            $entryorder = $inputs['entrys'][$key];
            $entrytypey = $entryorder['type'];

            $entry = new Entrys;
            $entry->user_id = Auth::user()->id;
            $entry->order = $key;
            $entry->type = $entrytypey;
            $entry->title = isset($entryorder['title']) ? $entryorder['title'] : null;


				$asdsadasd ="";
				if(isset($entryorder['body'])){
					 $asdsadasd =  $entryorder['body'];
				}
			
                $entry->body =  $asdsadasd;

                if($entrytypey!="video" or $entrytypey!="embed" or $entrytypey!="tweet" or  $entrytypey!="facebookpost" or $entrytypey!="instagram" or $entrytypey!="soundcloud") {
				
					$asasf ="";
					if(isset($entryorder['source'])){
						 $asasf =  $entryorder['source'];
					}
				
					$entry->source =  $asasf;

				
                }



            if($entrytypey=="image" or $entrytypey=="poll" or  $entrytypey=="quizquestion" or   $entrytypey=="quizresult") {

                if(!empty($entryorder['image'])){
                    $imgRR = $this->moveentryimage($entryorder['image'], $post->id, $key);

                    $entry->image = $imgRR;
                }

            }


            if($entrytypey=="quizquestion" or $entrytypey=="poll") {
                $entry->video =  $entryorder['listtype'];
            }

            if($entrytypey=="video" or $entrytypey=="embed" or $entrytypey=="tweet" or $entrytypey=="facebookpost" or $entrytypey=="instagram" or $entrytypey=="soundcloud") {

                if($entrytypey=="tweet"){

                    $clean_text = "";

                    // Match Emoticons
                    $regexEmoticons = '/[\x{1F600}-\x{1F64F}]/u';
                    $clean_text = preg_replace($regexEmoticons, '', $entryorder['video']);

                    // Match Miscellaneous Symbols and Pictographs
                    $regexSymbols = '/[\x{1F300}-\x{1F5FF}]/u';
                    $clean_text = preg_replace($regexSymbols, '', $clean_text);

                    // Match Transport And Map Symbols
                    $regexTransport = '/[\x{1F680}-\x{1F6FF}]/u';
                    $clean_text = preg_replace($regexTransport, '', $clean_text);

                    // Match Miscellaneous Symbols
                    $regexMisc = '/[\x{2600}-\x{26FF}]/u';
                    $clean_text = preg_replace($regexMisc, '', $clean_text);

                    // Match Dingbats
                    $regexDingbats = '/[\x{2700}-\x{27BF}]/u';
                    $clean_text = preg_replace($regexDingbats, '', $clean_text);

                    $entry->video = $clean_text;

                }else{
                    $entry->video = $entryorder['video'];
                }


            }

            $savedidentry = $post->entry()->save($entry);

            //start answers
            if($entrytypey=="quizquestion" or $entrytypey=="poll") {

                $this->createanswers($entryorder['answers'], $post, $savedidentry->id, $entryorder['listtype']);

            }


        }


    }

  private function createanswers($request, $post, $savedidentry, $listtype){

                foreach($request as $keya => $na ){
                    $entry = new Entrys;
                    $entry->user_id = Auth::user()->id;
                    $entry->order = $keya;
                    $entry->type = 'answer';
                    $entry->title = $na['title'];

                    if($listtype!=="3"){
                    $imgRR = $this->moveanswersimage($na['image'], $post->id, 'qu-'.$savedidentry.'-answer-'.$keya);
                    $entry->image = $imgRR;
                    }

                    $entry->video = $na['assign'];
                    $entry->source = $savedidentry;

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

        $imgWW = Image::make($imgWsr);
        $imgWW2 = Image::make($imgWsr);

        $imbig= $imgWW->fit(config('buzzytheme_'.getenvcong('CurrentTheme').'.preview-image_big_width'), config('buzzytheme_'.getenvcong('CurrentTheme').'.preview-image_big_height'))->save($saveFilePath.'-b.jpg');
        $imsmal= $imgWW2->fit(config('buzzytheme_'.getenvcong('CurrentTheme').'.preview-image_small_width'), config('buzzytheme_'.getenvcong('CurrentTheme').'.preview-image_small_height'))->save($saveFilePath.'-s.jpg');


        if(env('APP_FILESYSTEM')=="s3"){

            \Storage::disk('s3')->put($saveFilePath.'-b.jpg', $imbig->stream()->__toString());

            \Storage::disk('s3')->put($saveFilePath.'-s.jpg', $imsmal->stream()->__toString());

            \File::delete(public_path($saveFilePath.'-b.jpg'));
            \File::delete(public_path($saveFilePath.'-s.jpg'));

            return $this->s3url.$saveFilePath;
        }


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

        $img = Image::make($thumb);
        $imgmj = $img->mime();

        if($imgmj=='image/gif'){
            $ext ='.gif';

            copy($thumb, $tmpFilePath.$tmpFileDate.$tmpFileName.$ext);

        }else {
            $ext ='.jpg';
            $img->save($tmpFilePath.$tmpFileDate.$tmpFileName.$ext);


            if(env('APP_FILESYSTEM')=="s3"){

                \Storage::disk('s3')->put($tmpFilePath.$tmpFileDate.$tmpFileName.$ext, $img->stream()->__toString());


                \File::delete(public_path($tmpFilePath.$tmpFileDate.$tmpFileName.$ext));

                if(substr($thumb, 0, 4) != 'http'){
                    unlink($thumb);
                }

                return $this->s3url.$tmpFilePath.$tmpFileDate.$tmpFileName.$ext;
            }
        }

        if(substr($thumb, 0, 4) != 'http'){

            unlink($thumb);

        }

        return $tmpFileDate.$tmpFileName.$ext;
    }

    private function moveanswersimage($thumb, $postid, $entryorder)
    {
        $tmpFilePath = 'upload/media/answers/';

        $tmpFileDate =  date('Y-m') .'/'.date('d').'/';

        $tmpFileName = $postid.'-'.$entryorder.'-'.md5(time());

        $this->makeimagedir($tmpFilePath.$tmpFileDate);

        if(substr($thumb, 0, 4) != 'http'){

            $thumb = substr($thumb, 1);

        }
        $img = Image::make($thumb);


        $ext ='.jpg';
        $img->fit(250, 250)->save($tmpFilePath.$tmpFileDate.$tmpFileName.$ext);

        if(substr($thumb, 0, 4) != 'http'){

          unlink($thumb);

        }

        if(env('APP_FILESYSTEM')=="s3"){

            \Storage::disk('s3')->put($tmpFilePath.$tmpFileDate.$tmpFileName.$ext, $img->stream()->__toString());

            \File::delete(public_path($tmpFilePath.$tmpFileDate.$tmpFileName.$ext));

            return $this->s3url.$tmpFilePath.$tmpFileDate.$tmpFileName.$ext;
        }

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
    protected function Postvalidator(array $inputs, $id = null)
    {
        $rules = [
            'type' => 'required',
            'title' => 'required|min:5|max:255|unique:posts',
            'category' => 'required',
            'pagination' => 'max:2',
            'description'  => 'required|min:4|max:500',
            'tags'  => 'max:2500',
            'thumb' => 'required|min:10',
        ];

        if($id==null){
            $rules2 = [
                'title' => 'required|min:10|max:255|unique:posts'
            ];
        }else{
            $rules2 = [
                'title' => 'required|min:10|max:255|unique:posts,title,'.$id,
            ];
        }

        $rules = array_merge($rules,$rules2);

        return Validator::make($inputs, $rules);

    }


    /**
     * Validator of question posts
     *
     * @param $inputs
     * @return array|bool
     */
    protected function EntryValidator(array $inputs, $entrytype)
    {
        $rules=[];
        if($entrytype=="text"){

            $rules = ['type' => 'required', 'title' => 'min:1|max:255', 'body' => 'required', 'source' => ''];

        }else if($entrytype=="image"){

            $rules = ['type' => 'required', 'title' => 'min:1|max:255', 'body' => '', 'source' => '', 'image' => 'required'];

        }else if($entrytype=="video"){

            $rules = ['type' => 'required', 'title' => 'min:1|max:255', 'body' => '', 'source' => '', 'video' => 'required|max:500'];

        }else if($entrytype=="embed" or $entrytype=="tweet"  or $entrytype=="facebookpost" or $entrytype=="instagram" or $entrytype=="soundcloud"){

            $rules = ['type' => 'required', 'title' => 'max:255', 'body' => '', 'source' => '', 'video' => 'required|max:1000'];

        }elseif($entrytype=="quizresult"){

            $rules = ['type' => 'required', 'title' => 'required|min:2|max:255', 'body' => 'required|min:5|max:500', 'image' => ''];

        }elseif($entrytype=="quizquestion"){

            $rules = ['type' => 'required', 'title' => 'min:2|max:255', 'body' => 'max:500', 'image' => '', 'listtype' => 'required'];

        }else if($entrytype=="poll"){

            $rules = ['type' => 'required', 'title' => 'max:255', 'body' => 'max:500', 'image' => '', 'listtype' => 'required'];

        }

        return Validator::make($inputs, $rules);

    }

    /**
     * Validator of question posts
     *
     * @param $inputs
     * @return array|bool
     */
    protected function QuizAnswerValidator(array $inputs, $listtype)
    {

        if($listtype=="1" or $listtype=="2"){
            $rules = ['type' => 'required', 'title' => 'max:45', 'image' => 'required', 'assign' => 'required'];
        }elseif($listtype=="3"){
            $rules = ['type' => 'required', 'title' => 'required|min:2|max:250', 'image' => '', 'assign' => 'required'];
        }

        return Validator::make($inputs, $rules);

    }

    protected function getfailsvalidator($request, $id = null){

        $inputs = $request->all();

        $v = $this->Postvalidator($request->only('title', 'description', 'category', 'tags', 'pagination',  'type', 'thumb'), $id);

        if ($v->fails()) {
            return array('status' => trans('updates.error'), 'errors' => $v->errors()->first());
        }


        //quiz validators
        if($inputs['type']=="quiz"){
            $quizresultcount = 0;
            foreach ($inputs['entrys'] as $value) {
                if ($value['type'] == 'quizresult') {
                    $quizresultcount++;
                }
            }

            if($quizresultcount < 2 and $inputs['ordertype'] !== 'trivia'){
                return array('status' => trans('buzzyquiz.quizerror'), 'errors' => trans('buzzyquiz.atlest2result'));
            }

            $quizquestioncount = 0;
            foreach ($inputs['entrys'] as $valueq) {
                if ($valueq['type'] == 'quizquestion') {
                    $quizquestioncount++;
                }
            }

            if($quizquestioncount < 1){
                return array('status' => trans('buzzyquiz.quizerror'), 'errors' => trans('buzzyquiz.atlest1question'));
            }
        }


        foreach($inputs['entrys'] as $key => $n )
        {

            $entrytype = $n['type'];


            $v = $this->EntryValidator($inputs['entrys'][$key], $entrytype);

            if ($v->fails()) {
                $keya=$key+1;


                if($entrytype=="quizresult"){

                    return array('status' => trans('buzzyquiz.quizresulterror'), 'errors' => trans('buzzyquiz.quizresulterrors', ['numberofentry' => $keya, 'error' => $v->errors()->first()]));

                }elseif($entrytype=="quizquestion"){

                    return array('status' => trans('buzzyquiz.questionerror'), 'errors' => trans('buzzyquiz.questionerrors', ['numberofentry' => $keya-$quizresultcount, 'error' => $v->errors()->first()]));

               }elseif($entrytype=="poll"){

                    return array('status' => trans('buzzyquiz.questionerror'), 'errors' => trans('buzzyquiz.questionerrors', ['numberofentry' => $keya, 'error' => $v->errors()->first()]));

               }else{
                   return array('status' => trans('updates.error'), 'errors' => trans('updates.entryerrors', ['numberofentry' => $keya, 'error' => $v->errors()->first()]));
               }

            }else{
                if($entrytype=="poll"){
                    $quizresultcount=0;
                }

                if($entrytype=="quizquestion" or $entrytype=="poll"){


                    if(!isset($n['answers']) or count($n['answers']) < 2){
                        return array('status' => trans('buzzyquiz.questionerror'), 'errors' => trans('buzzyquiz.questionerrors', ['numberofentry' => $key-$quizresultcount+1, 'error' => trans('buzzyquiz.atlest2answer')]));
                    }

                    foreach($n['answers'] as $ankey => $ann )
                    {
                        $qv = $this->QuizAnswerValidator($ann, $n['listtype']);

                        if ($qv->fails()) {
                            $keyaa=$ankey+1;
                            return array('status' => trans('buzzyquiz.answererror'), 'errors' => trans('buzzyquiz.answererrors', ['numberofentry' => $key-$quizresultcount+1, 'numberofanswer' => $keyaa, 'error' => $qv->errors()->first()]));
                        }
                    }
                }

            }


        }

        return 'pas';
    }



}
