<?php include 'travel-header.php' ?>

<div class="site_wrapper">
    <?php include 'travel-nav.php'?>

    <div class="breadcrumbs-section">
        <div class="container">
            <div class="row">
                <div class="moduletable  master-breadcrumbs col-md-12 col-sm-12 col-xs-12">
                    <ul class="breadcrumb">
                        <li><a href="../index-2.html" class="pathway">Home</a><span class="divider">/</span></li>
                        <li class="active"><span>Contact</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div id="brag-about-section" class="brag-about-section inner_page">
        <div class="container">
            <div class="row">

                <div class="col-md-9 col-sm-12 col-xs-12">
                    <div id="system-message-container">
                    </div>

                    <div class="contact contact_info " itemscope itemtype="http:/schema.org/Person">

                        <dl class="contact-address dl-horizontal" itemprop="address" itemscope itemtype="https:/schema.org/PostalAddress">

                        </dl>

                        <div class="contact-form">
                            <form id="contact-form" action="http:/dasinfomedia.co.uk/mojoomla/master/index.php/contact" method="post" class="form-validate form-horizontal">
                                <fieldset>

                                    <div class="control-group">
                                        <div class="control-label">
                                            <label id="jform_contact_name-lbl" for="jform_contact_name" class="hasPopover required" title="Name" data-content="Your name.">
                                                Name<span class="star">&#160;*</span></label>
                                        </div>
                                        <div class="controls">
                                            <input type="text" name="jform[contact_name]" id="jform_contact_name" value="" class="required" size="30" required aria-required="true" />
                                        </div>
                                        <br>
                                    </div>
                                    <div class="control-group">
                                        <div class="control-label">
                                            <label id="jform_contact_email-lbl" for="jform_contact_email" class="hasPopover required" title="Email" data-content="Email Address for contact.">
                                                Email<span class="star">&#160;*</span></label>
                                        </div>
                                        <div class="controls">
                                            <input type="email" name="jform[contact_email]" class="validate-email required" id="jform_contact_email" value="" size="30" autocomplete="email" required aria-required="true" />
                                        </div>
                                        <br>
                                    </div>
                                    <div class="control-group">
                                        <div class="control-label">
                                            <label id="jform_contact_emailmsg-lbl" for="jform_contact_emailmsg" class="hasPopover required" title="Subject" data-content="Enter the subject of your message here.">
                                                Subject<span class="star">&#160;*</span></label>
                                        </div>
                                        <div class="controls">
                                            <input type="text" name="jform[contact_subject]" id="jform_contact_emailmsg" value="" class="required" size="60" required aria-required="true" />
                                        </div>
                                        <br>
                                    </div>
                                    <div class="control-group">
                                        <div class="control-label">
                                            <label id="jform_contact_message-lbl" for="jform_contact_message" class="hasPopover required" title="Message" data-content="Enter your message here.">
                                                Message<span class="star">&#160;*</span></label>
                                        </div>
                                        <div class="controls">
                                            <textarea name="jform[contact_message]" id="jform_contact_message" cols="50" rows="10" class="required" required aria-required="true"></textarea>
                                        </div>
                                        <br>
                                    </div>
                                    <div class="control-group">
                                        <div class="control-label">
                                            <label id="jform_contact_email_copy-lbl" for="jform_contact_email_copy" class="hasPopover" title="Send copy to yourself" data-content="Sends a copy of the message to the address you have supplied.">
                                                Send copy to yourself</label>
                                        </div>
                                        <div class="controls">
                                            <input type="checkbox" name="jform[contact_email_copy]" id="jform_contact_email_copy" value="1" />
                                        </div>
                                        <br>
                                    </div>
                                    <legend>Send an Email. All fields with an asterisk (*) are required.</legend>
                                    <div class="control-group">
                                        <div class="control-label">
                                            <label id="jform_captcha-lbl" for="jform_captcha" class="hasPopover required" title="Captcha" data-content="Please complete the security check.">
                                                Captcha<span class="star">&#160;*</span></label>
                                        </div>
                                        <div class="controls">
                                            <div id="jform_captcha" class=" required"></div>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="form-actions">
                                        <button class="master_btn btn btn-primary validate" type="submit">Send Email</button>
                                        <input type="hidden" name="option" value="com_contact" />
                                        <input type="hidden" name="task" value="contact.submit" />
                                        <input type="hidden" name="return" value="" />
                                        <input type="hidden" name="id" value="1:contact" />
                                        <input type="hidden" name="2bfcef7bd37c807c378d8ca6861cfd77" value="1" /> </div>
                                </fieldset>
                            </form>
                        </div>

                    </div>

                </div>

                <div class="col-md-3 col-sm-6 col-xs-12 right_sidebar">
                    <div class="moduletable  k2_services">
                        <h3 class="sidebar-header">Services</h3>

                        <div class="custom">
                            <div class="icons"><span class="fa-stack fa-lg"><i class="fa fa-clock-o  fa-stack-1x"> </i></span></div>
                            <div class="desc">
                                <p>Shipping in three days since we recieved yout payment.</p>
                            </div>
                            <div class="icons"><span class="fa-stack fa-lg"><i class="fa fa-star  fa-stack-1x"> </i></span></div>
                            <div class="desc">
                                <p>Quality support by phone or comments for our products.</p>
                            </div>
                            <div class="icons"><span class="fa-stack fa-lg"><i class="fa fa-globe  fa-stack-1x"> </i></span></div>
                            <div class="desc">
                                <p>Support shipping worldwide in a couple days since you buy.</p>
                            </div>
                            <div class="icons"><span class="fa-stack fa-lg"><i class="fa fa-lock fa-stack-1x"> </i></span></div>
                            <div class="desc">
                                <p>Shipping in three days since we recieved yout payment.</p>
                            </div>
                            <div class="icons"><span class="fa-stack fa-lg"><i class="fa fa-undo fa-stack-1x"> </i></span></div>
                            <div class="desc">
                                <p>Warranty 14 days money back for your request.</p>
                            </div>
                        </div>
                    </div>
                    <div class="moduletable  k2_inc">
                        <h3 class="sidebar-header">Need Help?</h3>

                        <div class="custom">
                            <div class="need_k2">
                                <p>We would be more than happy to help you. Our team advisor are 24/7 at your service to help you.</p>
                                <a href="#" data-target="#myModal" data-toggle="modal">ASK US</a></div>
                        </div>
                    </div>
                    <div class="moduletable  k2_tag">
                        <h3 class="sidebar-header">Tags Cloud</h3>
                        <div id="k2ModuleBox96" class="k2TagCloudBlock  k2_tag">
                            <a href="component/k2/itemlist/tag/Amazing%20deals.html" style="font-size:120%" title="3 items tagged with Amazing deals">
		Amazing deals	</a>
                            <a href="component/k2/itemlist/tag/Brochure.html" style="font-size:120%" title="1 items tagged with Brochure">
		Brochure	</a>
                            <a href="component/k2/itemlist/tag/Decor.html" style="font-size:120%" title="2 items tagged with Decor">
		Decor	</a>
                            <a href="component/k2/itemlist/tag/Electronics.html" style="font-size:120%" title="1 items tagged with Electronics">
		Electronics	</a>
                            <a href="component/k2/itemlist/tag/Facilities.html" style="font-size:120%" title="2 items tagged with Facilities">
		Facilities	</a>
                            <a href="component/k2/itemlist/tag/Food.html" style="font-size:120%" title="1 items tagged with Food">
		Food	</a>
                            <a href="component/k2/itemlist/tag/Parking.html" style="font-size:120%" title="1 items tagged with Parking">
		Parking	</a>
                            <a href="component/k2/itemlist/tag/Quality.html" style="font-size:120%" title="2 items tagged with Quality">
		Quality	</a>
                            <div class="clr"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Main Content Section Over -->

    <!-- Project Section -->
    <div id="project-section" class="project-section">
        <div class="container">
            <div class="col-md-6 col-sm-6 col-xs-12 start-project">
                <div class="moduletable ">
                    <p class="news-header">have you fallen in love yet?</p>
                    <script type="text/javascript">
                        var mcSignupErrorNotANumber = "must be a number.";
                        var mcSignupErrorInvalidEmail = "Please enter a valid email address.";
                        var mcSignupErrorRequired = "is required.";
                    </script>
                    <div id="mcSignupModule_6498" data-id="6498" class="mcSignupModule ">
                        <h2>Sign up For a Newsletter        </h2>
                        <div class="mcSignupFormWrapper">
                            <form action="http:/dasinfomedia.co.uk/mojoomla/master/index.php/contact" method="post" id="mcSignupForm_6498" class="mcSignupForm" name="mcSignupForm6498" onsubmit="return false;">
                                <div>
                                    <input type="text" name="fields[EMAIL]" class="master_text submitInt inputbox mcSignupRequired" value="" title="Email Address *" placeholder="Email Address *" />
                                </div>
                                <input type="hidden" name="email_type" value="html" />
                                <div>
                                    <button type="button" class="master_button button mcSignupSubmit" data-id="6498"> <span>LET'S GO</span></button>
                                </div>

                                <input type="hidden" name="uid" value="0" />
                                <input type="hidden" name="ip" value="202.55.183.173" />
                                <input type="hidden" name="itemId" value="107" />
                                <input type="hidden" name="title" value="have you fallen in love yet?" />
                                <input type="hidden" name="2bfcef7bd37c807c378d8ca6861cfd77" value="1" /> </form>
                        </div>
                        <div class="ajaxLoader"></div>
                        <img src="../media/mod_mailchimpsignup/images/ajax-loader.gif" alt="Please wait" style="display: none;" />
                        <div class="mcSignupResult" style="display:none;"></div>
                        <div class="mcSignupTryAgainWrapper" style="display:none;">
                            <a href="#" class="mcSignupTryAgain" data-id="6498">
            Try again        </a>
                        </div>
                    </div>
                </div>

                <!--<a href="#"><span>LEt's Go</span></a>-->
                <div class="footer-item">
                    <i class="icon_mail_alt"></i>
                    <div class="footer-inner">
                        <p class="footer-item-title">Email</p>
                        <a class="footer-item-desc">Hello@maximum.com</a>

                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12 send-msg">
                <p>Want to tell us something?</p>
                <h2>Send a message</h2>
                <a href="#" data-toggle="modal" data-target="#myModal"><span>Book now</span></a>

                <div class="footer-item2">
                    <i class="icon_mobile"></i>
                    <div class="footer-inner">
                        <p class="footer-item-title">Phone</p>
                        <p class="footer-item-desc">(012)3456789</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Project Section Over -->
<?php include 'travel-footer.php'?>