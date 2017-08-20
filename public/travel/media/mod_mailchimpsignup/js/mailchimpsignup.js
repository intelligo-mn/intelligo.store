/**
 * Copyright (C) 2015  freakedout (www.freakedout.de)
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
**/

!function($){
    $(document).ready(function() {
        $('div.mcSignupModule input.url').blur(function() {
            if ( $(this).val() == 'http://') {
                 $(this).val('');
            } else if ($(this).val() && $(this).val().indexOf('http://') != 0) {
                $(this).val('http://' + $(this).val());
            }
        });

        $('div.mcSignupModule input.number').blur(function() {
            if ($(this).val() != parseFloat($(this).val())) {
                alert($(this).attr('title').replace(' *', '') + ' ' + mcSignupErrorNotANumber);
            }
        });

        $('.mcSignupSubmit').click(function() {
            var moduleId = $(this).data('id');
            var module = $('#mcSignupModule_' + moduleId);
            //var isMember = <?php echo $user->id;?>;

            // Validate email address with regex
            if (!mcSignupCheckEmail(module.find('input[name=fields\\[EMAIL\\]]').val())) {
                alert(mcSignupErrorInvalidEmail);
                return;
            }

            var checked = [];
            var formValid = true;

            rVal = true;

            module.find('.mcSignupRequired').each(function() {
                var title = $(this).attr('title');
                var name = $(this).attr('name');

                if ($.inArray(name, checked) > -1) {
                    return true; // continue
                }
                checked.push(name);

                if ($.inArray($(this).attr('type'), Array('checkbox', 'radio')) > -1) {
                    name = name.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
                    if (module.find('input[name=' + name + ']:checked').length == 0) {
                        alert(title.replace(' \*', '') + ' ' + mcSignupErrorRequired);
                        formValid = false;
                        return false;
                    }
                } else if ($(this).val() == '') {
                    alert(title.replace(' \*', '') + ' ' + mcSignupErrorRequired);
                    formValid = false;
                    return false;
                }
            });

            // Submit the form
            if (formValid) {
                mcSignupSubmit(module);
            }
        });

        $('.mcSignupTryAgain').click(function(e) {
            e.preventDefault();

            $('#mcSignupModule_' + $(this).data('id') + ' .mcSignupTryAgainWrapper').css('display', 'none');
            $('#mcSignupModule_' + $(this).data('id') + ' .mcSignupResult').css('display', 'none');
            $('#mcSignupModule_' + $(this).data('id') + ' .intro').css('display', 'block');
            $('#mcSignupModule_' + $(this).data('id') + ' .mcSignupFormWrapper').css('display', 'block');
        })

        function mcSignupCheckEmail(email) {
            var pattern = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return pattern.test(email);
        }

        function mcSignupSubmit(module) {
            var moduleId = module.data('id');

            $.ajax({
                url: 'index.php?option=com_joomailermailchimpintegration&task=signup&format=raw',
                type: 'post',
                dataType: 'json',
                data: module.find('form').serialize(),
                beforeSend: function() {
                    module.find('.intro').css('display', 'none');
                    module.find('.mcSignupFormWrapper').css('display', 'none');
                    module.find('.ajaxLoader').css('display', 'block');
                },
                success: function(response) {
                    module.find('.ajaxLoader').css('display', 'none');
                    module.find('.mcSignupResult').html(response.html).css('display', 'block');
                    if (response.error == true) {
                        module.find('.mcSignupTryAgainWrapper').css('display', 'block');
                    }
                }
            });

        }
    });
}(jQuery)
