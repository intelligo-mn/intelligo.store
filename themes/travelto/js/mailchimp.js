// mailchimp subscribe form js
(function($) {
    'use strict';
        // validations start here
        $('#signup').validate({

            rules: {

                subscriber_email: {
                    required: true,
                    email: true
                }
            },

            messages: {

                subscriber_email: {
                    required: 'Email must be filled out.',
                    email: 'Your email must be valid.'
                }
            },

            submitHandler: function() {

                var subscriber_email = $('#subscriber_email').val();

                var xurl = 'php/subscribe.php?action=subscribe&subscriber_email=' + subscriber_email;

                $('#subscribe_message').html('Sending...');

                $.ajax({
                    type: 'POST',
                    url: xurl,
                    dataType: 'json',
                    success: function(result) {
                        $('#subscribe_message').html(result.message);
                        $('#subscribe_message').css('color','white');
                        return false;
                    }

                });

            }

        });
}(jQuery));