//contact form js
(function($) {
    'use strict';
        // validations start here
        $('#contact_form').validate({

            rules: {

                fname: {
                    required: true
                },
                lname: {
                    required: true
                },
                con_phone: {
                    required: true
                },
                con_country: {
                    required: true
                },
                con_message: {
                    required: true
                },
                con_email: {
                    required: true,
                    email: true
                }
            },

            messages: {

                fname: {
                    required: 'First name must be filled out.'
                },
                lname: {
                    required: 'Last name must be filled out.'
                },
                con_phone: {
                    required: 'Phone must be filled out.'
                },
                con_country: {
                    required: 'Country must be filled out.'
                },
                con_message: {
                    required: 'Message must be filled out.'
                },

                con_email: {
                    required: 'Email must be filled out.',
                    email: 'Your email must be valid.'
                }
            },

            submitHandler: function() {

                var fname = $('#fname').val();
                var lname = $('#lname').val();
                var con_phone = $('#con_phone').val();
                var con_country = $('#con_country').val();
                var con_message = $('#con_message').val();
                var con_email = $('#con_email').val();

                var xurl = 'php/send_email.php?action=sendEmail&con_email=' + con_email + '&fname=' + fname + '&lname=' + lname + '&con_phone=' + con_phone + '&con_country=' + con_country + '&con_message=' + con_message;

                $('#btn_sent').val('Sending...');
                $('#error_message').html('');
                $('#btn_sent').attr('disabled', true);

                $.ajax({
                    type: 'POST',
                    url: xurl,
                    dataType: 'json',
                    success: function(result) {
                        $('#btn_sent').prop('disabled', false);
                        $('#btn_sent').val('Send enquiry');
                        if (result.response == 'success') {
                            $('#contact_form')[0].reset();
                            $('#error_message').html(result.message);
                            $('#error_message').addClass('contact-confirmation');
                            var selectedEffect = 'blind';

                            var options = {};

                            $('#error_message').hide(selectedEffect, options, 2000);
                            return false;
                        } else if (result.response == 'error') {
                            $('#error_message').html(result.message);
                            $('#error_message').addClass('contact-confirmation');
                        }
                    }
                });
            }
        });
}(jQuery));