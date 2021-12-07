<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Buzzy | Documentation</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.5 -->
    <link rel="stylesheet" href="/adminlte/bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="/adminlte/dist/css/AdminLTE.min.css">
    <link rel="stylesheet" href="/adminlte/dist/css/skins/_all-skins.min.css">
    <link rel="stylesheet" href="/docsassets/style.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body class="skin-blue fixed" data-spy="scroll" data-target="#scrollspy">
    <div class="wrapper">

      <header class="main-header">
        <!-- Logo -->
        <!-- Logo -->
        <a href="/admin" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <span class="logo-mini"><b>B</b>P</span>
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg"><b>Buzzy</b>Admin</span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top" role="navigation">
          <!-- Sidebar toggle button-->
          <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
          </a>
          <!-- Navbar Right Menu -->
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
              <li><a href="http://buzzy.akbilisim.com">Buzzy Website</a></li>
              <li><a href="http://codecanyon.net/item/buzzy-news-viral-lists-polls-and-videos/13300279?ref=akbilisim">Buy Buzzy</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <aside class="main-sidebar">
        <div class="sidebar" id="scrollspy">

          <ul class="nav sidebar-menu">
            <li class="active"><a href="#installation"><i class="fa fa-circle-o"></i> Installation</a></li>
            <li><a href="#configuration"><i class="fa fa-circle-o"></i> Configuration</a></li>
            <li><a href="#login"><i class="fa fa-circle-o"></i> Social Login Configuration</a></li>
            <li><a href="#categories"><i class="fa fa-circle-o"></i> Category Management</a></li>
            <li><a href="#posts"><i class="fa fa-circle-o"></i> Post Management</a></li>
            <li><a href="#buzzyeditor"><i class="fa fa-circle-o"></i> BuzzyEditor</a></li>
            <li><a href="#users"><i class="fa fa-circle-o"></i> User Management</a></li>
            <li><a href="#pages"><i class="fa fa-circle-o"></i> Pages</a></li>
            <li><a href="#widgets"><i class="fa fa-circle-o"></i> Widgets</a></li>
            <li><a href="#languages"><i class="fa fa-circle-o"></i> Languages</a></li>
            <li><a href="#mail"><i class="fa fa-circle-o"></i> Mail Configuration</a></li>
            <li><a href="#easyComment"><i class="fa fa-circle-o"></i> easyComment</a></li>
            <li><a href="#AWSS3"><i class="fa fa-circle-o"></i> AWS S3 CDN Support</a></li>
            <li><a href="#FAQ"><i class="fa fa-circle-o"></i> FAQ</a></li>
            <li><a href="#license"><i class="fa fa-circle-o"></i> License</a></li>
            <li><a href="#changelog"><i class="fa fa-circle-o"></i> Changelog</a></li>
          </ul>
        </div>
        <!-- /.sidebar -->
      </aside>

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <h1>
            Buzzy Documentation
            <small>Current version 1.3.2</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">Documentation</li>
          </ol>
        </div>

<!-- Main content -->
<div class="content body">

<section id="installation">
  <h2 class="page-header" style="padding-top:0"><a href="#installation">Installation</a></h2>
    <p class="lead">
      <H3>Server Requirements</H3>
       Checking to ensure that your web host have the minimum requirements to run Buzzy.
     </p>
        <ol>
          <li>PHP &gt;= 5.5.9</li>
          <li>PDO PHP Extension</li>
          <li>OpenSSL PHP Extension</li>
          <li>Mbstring PHP Extension</li>
          <li>Tokenizer PHP Extension</li>
          <li>GD PHP Extension </li>
          <li>Fileinfo PHP Extension </li>
          <li>Zip PHP Extension </li>
        </ol>
  <hr>
    <h4>Please download "check.php" file and check your web host minimum requirements to run Buzzy with below button.</h4>
    <a class="btn btn-primary" href="http://envato.akbilisim.com/public/export/zip/check.zip">Download Check.php file!</a>
  <hr>
    <p class="lead">
    <H3>Installing Buzzy</H3>
    The following quick steps show how the installation progress. <br><br>
    </p>
    <h4>Step 1 - Unzip and Upload</h4>
    <p> Extract and copy the files from the archive you have downloaded from CodeCanyon to your server.  <a  target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/allfiles.png">Make sure you have all files</a> on your server when you have done with upload</p>
  <br>
    <h4>Step 2 - Open Installation Wizard</h4>
    <p> If you have all requirements on your server so system will redirect you to install page. <b>If install page did not show up and your getting some errors on your screen then please check <a href="#FAQ" >FAQ tab</a> and find your answer. </b> </p>
  <br>
  <h4>Step 3 - Installation Wizard Steps</h4>
  <blockquote>
    <ol>
      <li><a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/sswizard1.png">First step</a> checking requirements <br>
        All requirements must be green. If you have red with one of them. Please check <a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/sscpanelphp2.png">that page</a> on your cpanel (You can find that options on <a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/sscpanelphp1.png" >Select Php Version</a> ). If you did not find any configuration about that. Please contact with your provider.
        <br> <br>
      </li>
      <li><a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/sswizard2.png">Next step</a>, Checking your Buzzy Access. Please click "GET Buzzy Code" button and add your envato purchase code and domain name and take the Buzzy access code and check your Buzzy access code on that page.
        <br>
        <br>
      </li>
      <li><a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/sswizard3.png">On this step</a>, Our installer will check of permissions of directories. If any listed folder is not writable. Please make writable and go to next
        <br>
        <br></li>
      <li><a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/sswizard4.png">Final step</a>, you need to type your database details for creating database. <br>
        <br>
        <code>
          Host= Usualy It should be "localhost"<br>
          Database= Database name you created<br>
          Username= Mysql server login username<br>
          Password= Mysql server login password<br>
        </code>
        Okay, If you type all fields then go finish your installation.
        <br>
        <em ><b>If you have issue on this step: Please check <a href="#FAQ" >FAQ tab</a> and find open_basedir or escapeshellarg() section</b></em>
        <br> <br> </li>
        <li>That is it! All the necessary things automatically created by the wizard. Now you can exit the wizard and follow the introductions for admin panel.
        <br> <img src="/docsassets/ss/ssdonewizard.png" style="max-width:700px">

      </li>

    </ol>

  </blockquote>

</section>


<!-- ============================================================= -->


<section id="configuration">
  <h2 class="page-header"><a href="#configuration">Configuration</a></h2>
  <p class="lead">
    When your installation is complete, it’s time to configure Buzzy.
    <br><br>
    To set the site name, logo etc. go to Admin > Setting > General Settings.

    <h4>Main Configuration</h4>
    Following informations needed to be updated.
    <ul>
      <li>Site name - Your site name
      </li>
      <li>Site Logo - Pick a png logo.
      </li>
      <li>Site Favicon - Favicons like site icon. Pick a png icon
      </li>
      <li>Site Default Meta Title - This is important for search engines. Type something about your site.
      </li>
      <li>Site Default Meta Description - Same as title. Type some detail about your site.
      </li>
      <li>Terms of Use Page Url - This is uses by register form. You can create page for this. Check how to add new page <a href="#pages">here.</a>
      </li>
      <li>Site email - When we send email that email shown to user.
      </li>
    </ul>

    <h4>Advanced Configuration</h4>
    <ul>
      <li>Head Code - You can put there custom css or meta tag code etc. <br>
      </li>
      <li>Footer code - You can put there custom js or google Analytics code etc.</li>
    </ul>

    <h4>You can also configure Layout, Social Media Addresses in here. Just read the introductions below the inputs.</h4>

</section>

  <section id="login">
    <h2 class="page-header"><a href="#login">Social Login Configuration</a></h2>
    Following informations uses by logining. You can get api keys from the following social media sites.

    <h4>Facebook</h4>
    <ul>
    <li>Please check official docs from Facebook:  <a target="_blank" href="https://developers.facebook.com/docs/apps/register">https://developers.facebook.com/docs/apps/register</a>  <br>
    </li>
    <li>See example facebook app details on <a href="/docsassets/ss/sssocialface1.png" target="_blank">SS1</a>,<a href="/docsassets/ss/sssocialface4.png" target="_blank">SS2</a>,  <a href="/docsassets/ss/sssocialface2.png" target="_blank">SS3</a>,  <a href="/docsassets/ss/sssocialface3.png" target="_blank">SS4</a> </li>
      <li>When you have done with all steps you can get access token and secret. Type those to Buzzy Admin Panel > Settings > General settings > Login Configuration Facebook app </li>
    </ul>
    <p>

      Buzzy Facebook App Callback Url: <code>http://your-site-name.com/auth/social/facebook/callback</code>
    </p>

  <h4>Twitter</h4>
    <ul>
      <li>For getting app from the Twitter is easy. Just checkout following article: http://iag.me/socialmedia/how-to-create-a-twitter-app-in-8-easy-steps/ <br>
      </li>
     <li>When you have done with all steps you can get access token and secret.  Type those to Buzzy Admin Panel > Settings > General settings > Login Configuration Twitter app</li>
    </ul>

    <p>
      Buzzy Twitter App Callback Url: <code>http://your-site-name.com/auth/social/twitter/callback</code>
    </p>

  <div class="callout callout-info lead">
    <h4>Reminder!</h4>
    <p>
      If you get error <code>We cant get your email address! Please register with your email address.</code> on your Buzzy Twitter logining.<br>
      You must type your Privacy Policy URL and Terms of Service URL and App Logo.
      <a href="/docsassets/ss/sstwiterapp.jpg" target="_blank">See Full Twitter App Settings.</A>
      <br>
      Then must check "Request email addresses from users" checkbox on your Twitter App permission tab.
      <a href="/docsassets/ss/sstwitterper.jpg" target="_blank">See Full Twitter Permission Settings.</A>

    </p>
  </div>
    <div class="callout callout-info lead">
      <h4>Reminder2!</h4>
      <p>
        If you have not Privacy Policy URL and Terms of Service URL or permission tab.<br>
        Then you need get app permission from Twitter. Twitter does not share emails with apps as default.<br>
        Please read "Request a User’s Email Address": <a target="_blank" href="https://dev.twitter.com/rest/reference/get/account/verify_credentials">https://dev.twitter.com/rest/reference/get/account/verify_credentials</a>
      </p>
    </div>

  <h4>Google</h4>
    <ul>
      <li>For Google Outh app, just checkout Web Application introduction on here: <a href="https://github.com/googleads/googleads-dotnet-lib/wiki/How-to-create-OAuth2-client-id-and-secret">https://github.com/googleads/googleads-dotnet-lib/wiki/How-to-create-OAuth2-client-id-and-secret</a><br>
      </li>
     <li>When you have done with all steps you can get Client ID and Client secret.  Type those to Buzzy Admin Panel > Settings > General settings > Login Configuration Google app</li>
    </ul>
    <a href="/docsassets/ss/googleappinfo.png" target="_blank">See Full Google App Settings.</A>
    <p>
      Buzzy Google App Callback Url: <code>http://your-site-name.com/auth/social/google/callback</code>
    </p>




  </p>

</section>


<!-- ============================================================= -->

<section id="categories">
  <h2 class="page-header"><a href="#categories">Categories</a></h2>
  <p class="lead">
    Categories provide a helpful way to group related posts together,
    and to quickly tell readers what a post is about.
    Categories also make it easier for people to find your content.
  </p>
    <h3>Adding Categories</h3>
    You can add new categories and manage existing ones from Admin -> Categories. <br>

    <ul>
      <li> You will be presented with a list of your existing categories and an option to add new categories.<br>
      </li>
      <li >
        You can add a new category by filling out the fields:
        <ul>
         <li> Category name – As expected, the name of your category.<br></li>
         <li> Description – Describe what the category is for. This description will appear as a tooltip if you use the category widget. (Optional)</li>
         <li> Category Type – Select the parent type in here. This mean this category will only take that contents and listed on only that create page. </li>
        </ul>

        <div class="callout callout-danger lead">
          <h4>Tip!</h4>
          <p>You can add same name of category for other content types. For Example: Category name: Funny may be added both type as List or Videos etc.. </p>
        </div>

      </li>
    </ul>
  <h3>Managing Categories</h3>
  You can edit or delete categories. <br>
  If you click on Edit you will taken to where you can edit the name and description. This functions exactly the same as adding a category. <br> <br>

  Clicking on Delete will delete that category. When a category is deleted, all posts that were only in that category will be assigned to the top category.
</section><!-- /#introduction -->

<!-- ============================================================= -->

<section id="posts">
  <h2 class="page-header"><a href="#posts">Posts</a></h2>
  <p class="lead">
    Buzzy comes with 4 post types. News, Lists, Polls and Videos. <br>
    You can manage all of these contents on the admin panel.

    <h3>Managing Posts</h3>
    When you go inside the posts pages on the panel, you will see actions appear on the last table column. <br>

    You can Review, Edit, Approve/Unapprove, Send to Trash/Retrieve from Trash and Permanently Delete posts with those links.<br>
    You also have the access to choose the posts for the homepage and featured posts area.
    <ul>
      <li> <b>Review</b> <br> When you click the post title on the list You will be redirected to the post page in the site.</li>
      <li> <b>Editing</b> <br> If you click edit you will taken to where you can edit the post on the site. This functions exactly the same as adding a posts. You have access to edit all users posts. </li>
      <li> <b>Approve/Unapprove</b>
          <br> Approve to publish the post, Unapprove to mark as pending to posts.</li>
      <li> <b>Send to Trash/Retrieve from Trash</b>
          <br> You can soft delete posts. Those posts are listed one the panel post trash lists. Also if you want to retrieve posts from trash. You can do that to.</li>
      <li> <b>Permanently Delete</b> <br> As expected, the posts will delete permanently with entire entries and images etc. </li>

      <li> <b>Choose for Homepage</b> <br> Posts can be select for homepage. Selected posts will be display on the homepage.
        <div class="callout callout-info lead">
          <h4>Reminder!</h4>
          <p>
            This action only works when you select DISABLE for "Auto-listed on Homepage" option. You can find that configuration on the Admin > Settings > Other Settings
          </p>
        </div>
      </li>
      <li>
        <b>Featured Posts</b>
        <br>
        All featured post are shown on the homepage top and also category pages. <br>
        You must choose the posts for the featured areas. <br>

        TIP: You must also select "Choose for homepage" for displaying featured posts on the homepage.<br>
        Features posts are ordered by featured dates. First four posts shown on the category page.<br>
        Also First four selected for homepage posts show up on the Homepage.<br>
        This mean when you choose a post for featured it's not appear the homepage top.<br>
        It's only shown cagetory page. When you also choose "Choose for homepage". Post will show up homepage top.<br>

        Lastly, homepage featured posts should be chosen for featured and homepage.


      </li>
    </ul>

  </p>
</section>

  <!-- ============================================================= -->

<section id="buzzyeditor">
    <h2 class="page-header"><a href="#posts">BuzzyEditor</a></h2>
    <p class="lead">
      Buzzy comes with powerful user post editor. <br>
      With BuzzyEditor users can add their news, lists, polls and videos.


    <h3>Creating Posts</h3>
    When you open the create page of news, lists, polls or videos. You will see all available inputs. <br>
    <ul>
      <li><b>Title</b><br> Required and must be min 10 / max 255 character. <br></li>
      <li><b>Description</b> <br> Also required. Must be min 10 / max 500 character.</li>
      <li><b>Preview Image</b> <br> Required and for best results must be 650x350 pixels.</li>
      <li><b>Categories</b><br> All available categories are listed here. See how you can add more categories in <a href="#categories">here.</a></li>
      <li><b>Entries</b>
       <br>Entries are most important things on the editor. It's simpley where you can build your posts.<br>
       All different posts types has their entry types.
         <ul>
         <li><b>News</b>  can have Text, Image, Video, Iframe Entries.<br></li>
         <li><b>Lists</b>  same as news but you can order them asc or desc style.</li>
         <li><b>Polls</b> can have only Option entry.</li>
         <li><b>Videos</b> can have Video, Text, Embeds</li>
         </ul>

       <h4>Adding New Entry</h4>
       <ul>
         <li><b>Texts</b>  mostly for News. You can add large text with this. <br></li>
         <li><b>Image</b>  Adding new image is easy. Just click to pick a image and choose image from your computer. This entry great for lists.
            You can also add title, source of image and some text details of image.
         </li>
         <li><b>Video</b> For adding video, paste url to video. Supported sites: youtube, dailymotion, vimeo.</li>
         <li><b>Iframe</b> If you want to any video embed or Instagram embed, Tweet embed etc. You can use this entry.</li>
         <li><b>Option</b> entry for polls. You can add max 255 character option here.</li>
       </ul>

     </li>
    </ul>

    </p>
  </section>

<!-- ============================================================= -->

<section id="users">
  <h2 class="page-header"><a href="#users">Users</a></h2>
  <p class="lead">
    Buzzy owners have full control to users, user information.

  <h3>User Editing</h3>
  You can review and edit user account information in User Settings.  To do that click the Edit link in the Actions in the list of Admin > Users.
  <ul>
    <li> Username – Usernames must be unique. You can change user username by typing in a new one into the username field and following the instructions that appear.User usernames will display next to any posts user make in the Buzzy Script.<br></li>
    <li> Email Address – Required. One email address cannot be registered with multiple accounts.</li>
    <li> Password  – Admins and users can change this.</li>
    <li> User Details – All other user details are changeable. </li>
  </ul>
  <h3>Ban User</h3>
  To ban someone click the Lock User in the Actions in the list of users.

  <h3>Make User an Administrator</h3>
  An Administrator has full power over the site and can do absolutely everything. Administrators can create more Administrators.
  And Complete control over posts,  settings, pages, users and the whole site. Nothing is off-limits for Administrators.
  <br>
  To make someone an admin click the Make Admin in the Actions on the list of users.
  <br><br>
  <div class="callout callout-info lead">
    <p>  Also you can set user permissions. For this please check Admin > Other Settings > User Permissions
    </p>
  </div>

  </p>
</section><!-- /#introduction -->


<!-- ============================================================= -->

<section id="pages">
  <h2 class="page-header"><a href="#pages">Pages</a></h2>
  <p class="lead">
    Pages are static. That means that the information displayed on a page doesn’t change, or doesn’t change often. A great example of a page would be the Terms or About or Contact Us section of a website.


  <h3>Create a New Page</h3>
  To add a new page, navigate to Admin > Pages, then click Add Pages:

  You’ll land on the Page form, where you can add text, media, embeds, or any other content for your page. Publish your new page when you have done.
  <br><br>
  <ul>
    <li> Title – As expected, the title of your page. This is also used by title meta tag.<br></li>
    <li> Title Slug – This is url to where you can access your page.</li>
    <li> Description  – This is short description of your page. uses by meta tag.</li>
    <li> Text – All content of your page goes here. </li>
  </ul>
  <h3>Removing Pages</h3>
  You may want to delete some of your pages. To do that click the Delete link in the Actions on the list of pages.

  </p>
</section><!-- /#introduction -->


<!-- ============================================================= -->
<section id="widgets">
  <h2 class="page-header"><a href="#widgets">Widgets</a></h2>
  <p class="lead">
    Widgets are a great way to customize the sidebars (and other special widget-ready areas) of your site.
    <br><br>
    You can access your widgets from the Admin > Widgets.

    <h3>Adding and Configuring Widgets</h3>
    To add a widget, In the right widgets form show all of the available widgets areas that you can add.
  <br><br>
      <ul>
        <li> Widget Name – As expected, the name of your widget.<br></li>
        <li> Content – This is where you can put your custom html widget contents.</li>
        <li> Location – This is show all of the available widgets areas that you can add. Select the widget location in here.. </li>
        <li> Display – Widgets can be configured to visibility. </li>
      </ul>
  <h3>Removing Widgets</h3>
  If you would like to remove a widget, click the Delete link in the configuration options in the list of widgets.

  </p>
</section><!-- /#introduction -->

<!-- ============================================================= -->
<section id="languages">
  <h2 class="page-header"><a href="#languages">Languages</a></h2>
  <h4> Using exiting langauge support of Buzzy</h4>
  Buzzy has En, Tr, Ru, It, Es support out of box. Just You can use with one quick step
  <ul>
    <li>Open Config Folder > app.php and find  'locale' => 'en' line and type what you have want.</li>
  </ul>
  <h4> Create your langauge support</h4>
  <p class="lead">
    Do you want to use your Buzzy in your Languages? With few quick steps you can set up your site with your language.<br>
    You can translate the Buzzy into your native language following steps.<br>
    We need to edit some files of course.
  <br>
      <ul>
        <li>Just find lang folder in the resources directory and go inside to lang folder.<br></li>
        <li>Copy "en" folder and paste with your language name (e.g. French can be named "fr",  German can be named "de".).</li>
        <li>When you do that your language folder is ready. Go inside that and translate all files with your favourite text editor.</li>
        <li>If you finish translate all available files. You can define your language to Buzzy.</li>
        <li>Open Config Folder > app.php and find  'locale' => 'en' line and type what you have create.</li>
      </ul>

  That's it. Simple 4 steps makes your site in your language.



  <h4>Footer Multilingual Support</h4>
  <ul>
    <li>Please open app.php in config folder.</li>
    <li>See there is <a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/ssapplang1.png">language settings</a>.</li>
    <li>You can manage language on there. If you want use only specific languages please make sure you have only you want <a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/ssapplang2.png">like this</a></li>
    <li> If you don't want footer multilingual support then remove <a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/ssapplang3.png">all language strings on there</a> <br> You will only get default  one(what you select on 'locale' => 'en', ) if you leave empty this.</li>
    <li> Finally
      <br> rtl        - Set true for Right-to-Left Support<br>
      <br> wideheader - Some languages require more width for menus. Set true if language broke menus.</li>
  </ul>

  </p>

</section><!-- /#introduction -->
  <!-- ============================================================= -->

<section id="mail">
  <h2 class="page-header"><a href="#mail">Mail Configuration</a></h2>
  <p class="lead">
  We need mail configuration for registration, password reset system or post approve reminder email for post owner etc. <br>

    <h3>How can I create email on my Cpanel?</h3>
    Please open your cpanel and find <a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/sscpanelemail1.png">Email accounts</a> option on there<br>
    And  <a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/sscpanelemail2.png">create</a> your email address <br>
    Now you have  <a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/sscpanelemail3.png">mail address</a>. Please click more button and click Configure Email Settings option.<br>
    In this page you will get  <a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/sscpanelemail4.png">this information</a>. Get your mail server info and port there too.<br>

  That's it. Please open your env file on your Buzzy main directory. (Please check "I did not find my .env file!" on FAQ tab if you didn't find your env file)
    <br><br>
  Here's the final results must be like this<br>
<code>MAIL_DRIVER=smtp<br>
    MAIL_HOST=mail.buzzy.com<br>
    MAIL_PORT=25<br>
    MAIL_USERNAME=info@buzzy.com<br>
    MAIL_PASSWORD=mail password<br>
    MAIL_ENCRYPTION=<br>
  </code>
    If you have problem with mailing with this setup then please contact your provider and get help from them.

    <br><br>

 You can use Gmail SMTP service too. Use like this;<br>
    <code>
    MAIL_DRIVER=smtp<br>
    MAIL_HOST=smtp.gmail.com<br>
    MAIL_PORT=587<br>
    MAIL_USERNAME=your gmail address<br>
    MAIL_PASSWORD=your gmail password<br>
    MAIL_ENCRYPTION=tls<br>
    </code>
    If you have problem with mailing with gmail setup then please try to get Google app password  and use that password as your gmail password on MAIL_PASSWORD variable:
    <br> <a target="_blank" href="https://security.google.com/settings/security/apppasswords">https://security.google.com/settings/security/apppasswords</a>


</section><!-- /#introduction -->


  <!-- ============================================================= -->
  <section id="AWSS3">
    <h2 class="page-header"><a href="#AWSS3">AWS S3 CDN Support (For Advanced Usage)</a></h2>
    <p class="lead">
      With Buzzy 1.3.1 update allows us to upload posts images and member avatars/splash images to Amazon CDN Storage.<br>
      This is useful for more free space on your server / host.<br>

    <h3>AWS S3 env file setup</h3>
    You can find amazon api keys variables on your .env file in your Buzzy root directory. (If you was use Buzzy 1.3 so you need to add following variables as manually to env file.)<br>

    Here is the default variables We needs to set for AWS S3 support.<br>
    <code>
    APP_FILESYSTEM=local<br>
    S3_KEY=<br>
    S3_SECRET=<br>
    S3_REGION=<br>
    S3_BUCKET=<br>
    </code>
    <ul>
      <li> APP_FILESYSTEM – It takes "s3" or "local". We need to set this as "s3". If you set this local. Images will upload to your server as default<br></li>
      <li> S3_KEY – AWS key</li>
      <li> S3_SECRET  – AWS secret</li>
      <li> S3_REGION – Your Bucket Region. Regions can be: us-east-1,us-west-1,us-west-2,eu-west-1,ap-southeast-1,ap-southeast-2,ap-northeast-1,sa-east-1,us-gov-west-1</li>
      <li> S3_BUCKET – Your Bucket Name.</li>
    </ul>

    Here's the final results must be like this<br>
    <code>
      APP_FILESYSTEM=s3<br>
      S3_KEY=AKIAIYH65T3HNWOUSOGQ<br>
      S3_SECRET=oEffpw8wsjkD5LoVdb/0eUvbYbFJO<br>
      S3_REGION=eu-central-1<br>
      S3_BUCKET=buzzy-bux-go<br>
    </code>
    <br>
    <h3>AWS Tutorials</h3>
    Following links will show you how to create Aws account and  S3 Bucket<br>
    <a target="_blank" href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/GetStartedWithS3.html">Amazon Simple Storage Service</a><br>
    <a target="_blank" href=" http://www.jppinto.com/2011/12/access-denied-to-file-amazon-s3-bucket/">Access Denied Issue to files in an Amazon S3 Bucket </a>

    </p>


  </section><!-- /#introduction -->

  <!-- ============================================================= -->


  <section id="easyComment">
    <h2 class="page-header"><a href="#easyComment">easyComment</a></h2>
    <p class="lead">
      easyComment is a standalone php comment system. It's like Facebook Comment, Google Comment or Disqus Comment. easyComment actually works like one of those.
    <h3>
      Buzzy with easyComment</h3>
    Buzzy comes with Facebook Comments and Disqus Comments but also support our comments script called name <a target="_blank" href="http://codecanyon.net/item/easycomment-php-comment-script/12727003">easyComment</a><br><br>

    With easyComment plugin allows you and all buzzy users can write comments for the posts with their Buzzy accounts.<br>
    easyComment latest update gives us fully entegre comment system. <br>
    All Buzzy users can comment without second registration when you use easyComment.<br>

    <ul>
      <li> Buy easyComment from Codecanyon <a href="http://codecanyon.net/item/easycomment-php-comment-script/full_screen_preview/12727003" target="_blank">here.</a></li>
      <li> For installing easyComment, follow the instructions on the easyComment documentaion  <a href="http://easycomment.akbilisim.com/doc.html" target="_blank">here.</a>

      </li>
      <li> <code>We suggest you to install on subdomain like comments.yoursite.com. Upload your files to comments subdomain and point your browser to http://comments.yoursite.com/app/install.php.<br>
        Then you can install easyComment with separate database with this install wizard.<br>
        When you done with install. Then you can connect easyComment admin panel. Login and go settings > allowed domains section.<br>
        Add your buzzy domain as yoursite.com and www.yoursite.com. Add both to per line</code>
      </li>

      <li> When you done with easyComment side. There's not much to do.</li>
      <li>Just open your Buzzy Panel and enter the location where you install easyComment to initiation url field on the Buzzy admin panel > plugins > easyComment Plugin Settings. In our example initiation url must be this http://comments.yoursite.com/ </li>
      <li>That's it. Your easyComment works on Buzzy script just fine now!</li>
    </ul>

    </p>
  </section><!-- /#introduction -->
  <!-- ============================================================= -->


  <section id="FAQ">
    <h2 class="page-header"><a href="#FAQ">Frequently Asked Questions (FAQ)</a></h2>
    <h4>Can I run on My Server?</h4>
    <p class="lead">If you have all requirements on your server then yes you can run!. Please check requirements <a href="#installation">Installation</a> tab</p>
    <h4>Which Provider Do you recommend for Buzzy?</h4>
    <p class="lead">Buzzy will work any server if it match with our requiesment. However we suggest <a target="_blank" href="http://www.hawkhost.com">www.hawkhost.com</a>, <a target="_blank" href="http://www.bluehost.com">www.bluehost.com</a>  or <a target="_blank" href="http://www.godaddy.com">www.godaddy.com</a>  hosting for Buzzy system. We have many successful installation on one of those </p>

    <h4>Can I use this in more than one domain?</h4>
    <p class="lead">First of all, please check Envato Help Page for it. <a target="_blank" href="http://codecanyon.net/licenses/standard">http://codecanyon.net/licenses/standard</a>  With purchase license you have one domain permission. You need to get another licenses for your another domians if you want to use on more than one domain. Its same rule for any Codecanyon iitem.</p>

    <h4>Footer does not show up!</h4>
    <p class="lead">You need to add footer widget for it. Please check admin panel > widgets page.</p>

    <h4>My logo has not changed!</h4>
    <p class="lead">Please try to click f5 or clear your browser cache or try on another browser.</p>

    <h4>I did not find my .env file!</h4>
    <p class="lead">If you using file manager and did not see any file named .env. Then Please take a look <a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/sscpanelenv.png">that option</a> on your filemanager login popup. Now you can see   <a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/sscpanelenv2.png">.env file </a>. You can right-click  and edit that file on there for some configurations like mail configuration</p>

    <h4>I see some errors on Quizzes Plugin page.
     </h4>
    <p class="lead">Please download Quizzes plugin files from Codecanyon and read read me file in it</p>
     <h4>My site turned right to left!</h4>
    <p class="lead">Please turn off rtl support on admin panel > other settings.</p>
    <h4>How can I use SSL!</h4>
    <p class="lead">

    Please add  this to your your .htaccess file configuration<br>
      <code>
        RewriteCond %{HTTPS} !=on<br>
        RewriteRule ^/?(.*) https://%{HTTP_HOST}%{REQUEST_URI} [R,L]
      </code>
      <br><br>
    Full configuration must be Like this.
          <br>
      <code>  Options +FollowSymLinks<br>
          RewriteEngine On<br>

        RewriteCond %{HTTPS} !=on<br>
        RewriteRule ^/?(.*) https://%{HTTP_HOST}%{REQUEST_URI} [R,L]<br>

          RewriteRule ^(.*)$ public/$1 [L]<br>

  </code>
    <h4>How Can I change my files and theme!</h4>
    <p class="lead">Our theme files in resources/views, assets in public/assets folder. You can edit them.</p>

    <h4>My site layout turned right to left!</h4>
    <p class="lead">Please turn off rtl support on admin panel > other settings.</p>

    <h4>I need fresh install with my old data</h4>
    <p class="lead">Please install Buzzy with fresh files and new database.
      Then pleese move your old public/upload folder to new public/upload directory.
      and move your old database tables to new one

    </p>

    <h4>Issue: Parse error: syntax error, unexpected 'class' (T_CLASS), expecting > identifier (T_STRING) or variable (T_VARIABLE) or '{' or '$' in</h4>
    <p class="lead">It means you do not have PHP 5.5 or newer version. Buzzy needs PHP 5.5 / 5.6 or newer version.<br>
     <h5>Upgrade your Php</h5>
    <ul>
      <li>If you using Cpanel so you can find <a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/sscpanelphp1.png">Select Php Version</a> option on Php config section<br> <small> If you  don't have  that option on Cpanel then you need to contact with your provider. They disabled that option on your access </small></li>
      <li><a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/sscpanelphp3.png">Current PHP version:</a> must be 5.5 or 5.6 or 5.7. All good for Buzzy</li>
      <li>And again make sure  your <a target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/sscpanelphp2.png">extentions must be like this</a>  </li>
    </ul>
    </p>

    <h4>Issue: I'm Getting 500 Server Error</h4>
    <p class="lead">It could be anything. Its a server error.<br>
    <h5>Possible solutions</h5>
    <ul>
      <li>Please first delete all Buzzy files and upload check.php (You can get check.php file on <a href="#installation">Installation</a> tab). then point your url to www.yoursite.com/check.php and make sure you have all extensions we need. </li>
      <li>Could be missing files.(Here is the full main folders and files you should get from CodeCanyon <a  target="_blank" href="http://buzzy.akbilisim.com/docsassets/ss/allfiles.png">http://prntscr.com/9caxe3</a>) Make sure you have all.</li>
      <li>It may be permission issue too. If so please try to set 777 permission for storage and bootstrap folder and all folders and files on it.</li>
    </ul>

    </p>
    <h4>Issue: is_executable(): open_basedir or escapeshellarg() has been disabled for security reasons</h4>
    <p class="lead">Your server configuration different then default settings. This is normal on shared hosting<br>
    <h5>How to fix it?</h5>
    <ul>
      <li>You need to create your database manually. Please download sql file <a href="http://envato.akbilisim.com/public/export/zip/sqlfile.zip">here</a></li>
      <li>Go to Cpanel > Phpmyadmin. Open your database and go to import tab. Select sql file you downloaded. Upload to you database</li>
      <li>Than upload installed file to storage folder of Buzzy. That's it your site must be show up.</li>
    </ul>

    </p>

    <h4>Issue: Post link does not work. Getting 404 page</h4>
    <p class="lead">Please check admin panel> settings > other settings and there is post url type. Pick something and save it</p>

    <h4>Issue: on Login/Registration</h4>
    <p class="lead">It because you have not correct mail configuration. System want to sent an email to new user but blocking by missing configuration. Please check <a href="#mail">Mail Configuration</a> for mail setup.</p>

    <h4>Issue: on Video Create Page</h4>
    <p class="lead">If you get infinite loading screen when you post a video. It mean your server has mod_security option so your server does not allow us to post embed/iframe codes.
      Please turn off mod_security option on your server. If you do not know how to disable this then please contact with your hosting provider for it.</p>

    <h4>Issue: I have trouble with Facebook share </h4>
    <p class="lead">You need to set a valid Facebook app. Please check social login configuration tab for it.</p>



  </section><!-- /#introduction -->
  <!-- ============================================================= -->


  <section id="license">
  <h2 class="page-header"><a href="#license">License</a></h2>
  <p class="lead">
  <h3>Regular License</h3>
    Use, by you or one client, in a single end product which end users <b>are not</b> charged for. The total price includes the item price and a buyer fee. <br><br>

   <h3>Extended License</h3>
    Use, by you or one client, in a single end product which end users <b>can be</b> charged for. The total price inresurces
  <br>
  <br>
  <a class="btn btn-primary" href="http://codecanyon.net/item/buzzy-news-viral-lists-polls-and-videos/13300279?ref=akbilisim">Buy Now!</a>

  </p>
</section><!-- /#introduction -->

<!-- ============================================================= -->

<section id="changelog">
  <h2 class="page-header"><a href="#changelog">Changelog</a></h2>
  <p class="lead">
  <h4>v1.3.2<em> - 16/12/15</em></h4>
  - Added: Spanish Language files<br>
  - Fixed: Yes! Delete it! words on  get image from url popup<br>
  - Fixed: Amazon S3 us-east-1 region image url issue<br>
  - Fixed: Feed posts not shows correctly<br>
  - Fixed: Other small issues<br>
  <h4>v1.3.1<em> - 10/12/15</em></h4>
  - Added: Amazon S3 CDN Support for Image upload <a href="#AWSS3">Check How to use it</a><br>
  - Fixed: Issue with load more button on category pages and homepage.<br>
  <h4>v1.3<em> - 26/11/15</em></h4>
  - Added: User Follow System<br>
  - Added: Homepage Builder plugin now supports all subcategories. <br>
  - Added: "Save as Draft" Option for BuzzyEditor<br>
  - Added: Facebook Post entry for BuzzyEditor<br>
  - Added: Account activate email on user registeration.<br>
  - Added: 3 new widget area (Homepage first and second columns  and Post page share buttons below)<br>
  - Added: Now category pages has infinite scrolling<br>
  - Added: More useful design changes<br>
  - Added: Language switcher on Footer (Only changing language strings)<br>
  - Added: Turkish, Russian language support.<br>
  - Added: Google Font selection to admin panel settings.<br>
  - Rework: Poll results has more Features <br>
  - Rework: Header sections has more useful dropdown menu.<br>
  - Rework: Search button area <br>
  - Rework: Social buttons has flat design<br>
  - Rework: Login/register popup has mini connect buttons on mobile<br>
  - Fixed: Reaction vote buttons has issue on mobile<br>
  - Fixed: Search issue on admin panel post lists<br>
  - Fixed: Issue with scroll top button and quiz auto scroll on Firefox<br>
  - Fixed: Other small issues

  <h4>v1.2<em> - 05/11/15</em></h4>
  - Added: New plugin system. Now all content types can be enabled/disabled<br>
  - Added: Reaction vote plugin<br>
  - Added: Homepage Builder(beta) plugin<br>
  - Added: Pagination on post pages. Now posts can be gallery style. <br>
  - Added: Now Post url supports:  {type}/{slug} or {type}/{id} or {username}/{slug} or {username}/{id} <br>
  - Added: Prepare files for upcoming plugin Quizzes<br>
  - Added: RSS feed for all categories<br>
  - Added: Sitemap<br>
  - Added: New profile design and splash Image upload for users<br>
  - Added: VKontakte Logining <br>
  - Added: Improve login/register popup on mobile<br>
  - Added: Now footer has different logo upload option.<br>
  - Added: Staff/Editor users posts has auto approve<br>
  - Fixed: Source field not show up on text entry<br>
  - Fixed: Other small issues
  <h4>v1.1.3<em> - 26/10/15</em></h4>
  - Added: Staff/Editor role for users<br>
  - Added: User type badge on the post and user pages (Admin/Staff(Editor)/Banned)<br>
  - Added: Create Video page now support Tweet, Instagram, Soundcloud entries<br>
  - Added: Slug field on the category create form <br>
  - Fixed: Some servers automatically set posts featured issue<br>
  - Fixed: Some servers has logo upload issue<br>
  - Fixed: Issue with user setting changes<br>
  - Fixed: Twitter emoji issue with tweet entry<br>
  - Fixed: Buzzyeditor link issue<br>
  - Fixed: Other small issues
  <h4>v1.1.1</h4>
  - This update has minor bug-fixes
  <h4>v1.1</h4>
  - Added: <strong>Tweet</strong> Entry, <strong>Instagram</strong> Entry, <strong>SoundCloud </strong>Entry for BuzzyEditor<br>
  - Added: Facebook video support for BuzzyEditor Video Entry<br>
  - Added: <strong>Password reset system</strong><br>
  - Added: Infinite lists or Load more button option for panel settings<br>
  - Added: New widget area to between 2./3. entries.<br>
  - Fixed: Failed login issue<br>
  - Fixed: Some missing language strings<br>
  - Fixed: Other small issues

  <h4>v1.0.5</h4>
  - Added: <strong>"Get image from the url"</strong> support for BuzzyEditor image entry widget.<br>
  - Added: <strong>"Make preview image"</strong> for  BuzzyEditor image entry widget.<br>
  - Added: <strong>RTL support</strong> and also added option to the panel for RTL.<br>
  - Added: <strong>Scroll top</strong> button<br>
  - Added: <strong>Infinite lists</strong> on the homepage lists and post page "You may also like" area<br>
  - Removed id from the url for <strong>SEO</strong>. Now It just like example.com/{type}/{postslug}<br>
  - Fixed some small issues: alert on the poll options , search bug when you hit enter, panel banned user list, create button disappear on mobile devices.

  <h4>v1.0.0</h4>
  - Initial public release
  </p>
</section><!-- /#introduction -->



  </div><!-- /.content -->
 </div><!-- /.content-wrapper -->

      <footer class="main-footer">
          <strong>Copyright &copy; 2015 <a href="http://akbilisim.com" target="_blank">akbilisim</a>.</strong> All rights reserved.
      </footer>

    </div><!-- ./wrapper -->
  <!-- jQuery 2.1.4 -->
    <script src="/adminlte/plugins/jQuery/jQuery-2.1.4.min.js"></script>
    <!-- Bootstrap 3.3.5 -->
    <script src="/adminlte/bootstrap/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="/adminlte/plugins/fastclick/fastclick.min.js"></script>
    <!-- AdminLTE App -->
    <script src="/adminlte/dist/js/app.min.js"></script>
    <!-- SlimScroll 1.3.0 -->
    <script src="/adminlte/plugins/slimScroll/jquery.slimscroll.min.js"></script>
    <script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>
    <script src="/docsassets/docs.js"></script>
  </body>
</html>
