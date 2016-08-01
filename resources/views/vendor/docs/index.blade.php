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
              <li><a href="http://codecanyon.net/item/buzzy-news-viral-lists-polls-and-videos/13300279">Buy Buzzy</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <aside class="main-sidebar">
        <div class="sidebar" id="scrollspy">

          <ul class="nav sidebar-menu">
            <li class="header">TABLE OF CONTENTS</li>
            <li class="active"><a href="#installation"><i class="fa fa-circle-o"></i> Installation</a></li>
            <li><a href="#configuration"><i class="fa fa-circle-o"></i> Configuration</a></li>
            <li><a href="#categories"><i class="fa fa-circle-o"></i> Category Management</a></li>
            <li><a href="#posts"><i class="fa fa-circle-o"></i> Post Management</a></li>
            <li><a href="#buzzyeditor"><i class="fa fa-circle-o"></i> BuzzyEditor</a></li>
            <li><a href="#users"><i class="fa fa-circle-o"></i> User Management</a></li>
            <li><a href="#pages"><i class="fa fa-circle-o"></i> Pages</a></li>
            <li><a href="#widgets"><i class="fa fa-circle-o"></i> Widgets</a></li>
            <li><a href="#languages"><i class="fa fa-circle-o"></i> Languages</a></li>
            <li><a href="#easyComment"><i class="fa fa-circle-o"></i> easyComment</a></li>
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
            <small>Current version 1.0.0</small>
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
        <p>Laravel 5.1(the framework used in our script) system requirements.</p><br><br>
        <ul>
          <li>PHP >= 5.5.9</li>
          <li>PDO PHP Extension</li>
          <li>OpenSSL PHP Extension</li>
          <li>Mbstring PHP Extension</li>
          <li>Tokenizer PHP Extension</li>
        </ul>
        <p>Buzzy system requirements.</p><br><br>
        <ul>
          <li>Gd PHP Extension (for image upload)</li>
        </ul>

    <p class="lead">
    <H3>Installing Buzzy</H3>
    The following quick steps show how the installation progress.<br><br>
    </p>
    <h4>Step 1 - Unzip and Upload</h4>
    <p> Extract and copy the files from the archive you have downloaded from CodeCanyon to your server.</p>
  <br>
    <h4>Step 2 - Open Installation Wizard</h4>
    <p> Point your web browser to the location your installation wizard. e.g. <b>http://www.example.com/install</b></p>
  <br>
  <h4>Step 3 - Installation Wizard Steps</h4>
  <p>Before getting started, we need to create an database and also set permissions for folders.</p>

  <blockquote>
    <b>Database Information.</b>
    <p>You can create database using phpMyAdmin or other database admin tools. Than you will need the following information to installation. If you don't know those informations, you can get from your hosting company.</p>
    <ol>
      <li>Database host</li>

      <li>Database name</li>

      <li>Database username</li>

      <li>Database password</li>
    </ol>
  <br>
    <b>Folder Permissions.</b>
    <p>Make sure following folders is writable by your web server. <br>
        <code>storage</code> <br>
        <code>bootstrap/cache</code> <br>
        <code>public/upload</code>
    </p>
    <br>
  <b>Let's Start</b>
  <ol>
    <li>First, skip welcome message from Installer.
    </li>
    <li>Next step, you must be enter the necessary database details.
      <br>
      <code>
      DB_HOST= <br>
      DB_DATABASE= <br>
      DB_USERNAME= <br>
      DB_PASSWORD= <br>
      </code>
      You can add mail configurations here too.
      <br>
      <code>
        MAIL_USERNAME=<br>
        MAIL_PASSWORD=<br>
      </code>

      If you enter details than <u>save changes</u> and go to next steps
    </li>

    <li>Our installer will check of server requirements. If everything's ok then go to next
    </li>

    <li>After requirements checking, Our installer will check of permissions of directories. If any listed folder is not writable. Please make writable and go to next
    </li>
    <li>That is it! All the necessary things automatically created by the wizard. Now you can exit the wizard and follow the introductions for admin panel.
      <br> <img src="/docsassets/ss/ssdonewizard.png" style="max-width:400px">
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

    <h4>Login Configuration</h4>
    Following informations uses by logining. You can get api keys from the following social media sites.

    <h5>Facebook</h5>
    <ul>
      <li>Visit <a href="https://developers.facebook.com">https://developers.facebook.com</a> click on Apps and you will see the option to "Create New App" click it <br><br>
        <img src="https://premium.wpmudev.org/forums/?bb_attachments=507162&amp;bbat=31746&amp;inline"><br>
       <img src="https://premium.wpmudev.org/forums/?bb_attachments=507162&amp;bbat=31747&amp;inline">
      </li>
      <li>Name your App. Doesn't matter what you name it, Facebook will give you a "Valid" or "Failed" notice next to the box after finish typing it.<br><br>
      <img src="https://premium.wpmudev.org/forums/?bb_attachments=507162&amp;bbat=31748&amp;inline">
      </li>
      <li>Complete the App. See the pictures below. Get the App key and secret. And type correct site url.<br><br>
       <img src="https://premium.wpmudev.org/forums/?bb_attachments=507162&amp;bbat=31749&amp;inline">
      </li>
    </ul>

  <h5>Twitter</h5>
    <ul>
      <li>For getting app from the Twitter is easy. Just checkout following article: http://iag.me/socialmedia/how-to-create-a-twitter-app-in-8-easy-steps/ <br>
      </li>
     <li>When you have done with all steps you can get access token and secret.</li>

    </ul>
  <h5>Google</h5>
    <ul>
      <li>For Google Outh app, just checkout Web Application introduction on here: https://github.com/googleads/googleads-dotnet-lib/wiki/How-to-create-OAuth2-client-id-and-secret<br>
      </li>
     <li>When you have done. Can get access token and secrets.</li>
    </ul>



  <h4>Advanced Configuration</h4>
  <ul>
    <li>Head Code - You can put there custom css or meta tag code etc. <br>
    </li>
    <li>Footer code - You can put there custom js or google Analytics code etc.</li>
  </ul>

  <h4>You can also configure Layout, Social Media Addresses in here. Just read the introductions below the inputs.</h4>


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

  </p>

  <div class="callout callout-danger lead">
    <h4 style="color:#fff">Send us your language!</h4>
    <p>Send your language files and we will support your language on the next updates. Help us for this. Thanks. <code>contact[at]akbilisim.com</code></p>
  </div>
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
    <li> For installing easyComment, follow the instructions on the easyComment documentaion  <a href="http://easycomment.akbilisim.com/doc.html" target="_blank">here.</a></li>
    <li> When you finish installation. There's not much to do.</li>
    <li>Just open your Buzzy Panel and enter the location where you install easyComment to initiation url field on the Buzzy configs <a href="/admin/config?q=others" target="_blank">here..</a> Don't forget to save your changes.</li>
    <li>That's it. Your easyComment works on Buzzy script just fine now!</li>
  </ul>

  </p>
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
  <a class="btn btn-primary" href="http://codecanyon.net/item/buzzy-news-viral-lists-polls-and-videos/13300279">Buy Now!</a>

  </p>
</section><!-- /#introduction -->

<!-- ============================================================= -->

<section id="changelog">
  <h2 class="page-header"><a href="#changelog">Changelog</a></h2>
  <p class="lead">
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
