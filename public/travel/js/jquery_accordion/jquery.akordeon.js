// JavaScript Document
(function ($) {
    $.fn.extend({

        akordeon: function (options) {
			
            var settings = $.extend({ expandedItem: 0, expandedAll:false, expandSpeed: 200, toggle: false, expandText: '', collapseText: '', buttons: true, hiddenItem: -1, itemsOrder: [] }, options);
            return this.each(function () {

                var expandedItem = settings.expandedItem;
                var expandedAll = settings.expandedAll;
                var speed = settings.expandSpeed;
                var expandText = settings.expandText;
                var collapseText = settings.collapseText;
                var isToggle = settings.toggle;

                var akordeon = $(this);
                if (!akordeon.hasClass('akordeon'))
                    akordeon.addClass('akordeon');

                if (settings.itemsOrder != null && settings.itemsOrder != undefined && settings.itemsOrder.length > 0) {
                    if (settings.itemsOrder.length != akordeon.find('.akordeon-item').length) {
                        alert('Parameter value mismatch with total items');
                    }
                    else {
                        var items = akordeon.find('.akordeon-item').clone(true);
                        akordeon.find('.akordeon-item').remove();

                        $(settings.itemsOrder).each(function () {
                            akordeon.append(items.eq(this));
                        });
                    }}
                $('.akordeon-item', akordeon).each(function () {
                    var body = $(this).find('.akordeon-item-body');
                    var h = body.outerHeight();
                    body.data('h', h);
                    $(this).find('.akordeon-item-head').addClass('akordeon-border-bottom');
                    body.addClass('akordeon-border-bottom');
                    if (settings.buttons)
                        $(this).find('.akordeon-item-head-container').prepend('<div class="akordeon-icon"><span>' + collapseText + '</span></div>');
                });
                if (settings.hiddentItem > -1) {
                    var hiddenItem = $('.akordeon-item', akordeon).eq(settings.hiddenItem).hide();

                    hiddenItem.find('.akordeon-item-head', akordeon).last().removeClass('akordeon-border-bottom');
                    hiddenItem.find('.akordeon-item-body', akordeon).last().removeClass('akordeon-border-bottom');
                }
                $('.akordeon-item .akordeon-item-head', akordeon).last().removeClass('akordeon-border-bottom');
                $('.akordeon-item .akordeon-item-body', akordeon).last().removeClass('akordeon-border-bottom');
                $('.akordeon-item:first').addClass('akordeon-item-first');
                $('.akordeon-item:last').addClass('akordeon-item-last');
                $('.akordeon-item', akordeon).removeClass('expanded').addClass('collapsed');
                $('.akordeon-item.collapsed .akordeon-item-body', akordeon).css({ height: 0 });
                expandItem($('.akordeon-item', akordeon).eq(expandedItem));
                if(expandedAll){
                    $('.akordeon-item', akordeon).each(function(){
                        expandItem($(this));
                    });}

                $('.akordeon-item-head-container', akordeon).click(function () {
                    var currentItem = $(this).parents('.akordeon-item');
                    var previousItem = akordeon.find('.akordeon-item.expanded');
                    var isExpanded = currentItem.hasClass('expanded');
                    if (!isToggle) {
                        if (!isExpanded) {
                            collapseItem(previousItem);
                            expandItem(currentItem);
                        }
                    }
                    else {
                        if (isExpanded)
                            collapseItem(currentItem);
                        else
                            expandItem(currentItem);
                    }});

                function expandItem(item) {
                    var body = item.find('.akordeon-item-body');
                    var h = body.data('h');
                    body.animate({ height: h }, speed, function () {
                        item.removeClass('collapsed').addClass('expanded').find('.akordeon-icon span').html(expandText);
                    });
                }
                function collapseItem(item) {
                    var body = item.find('.akordeon-item-body');
                    body.animate({ height: 0 }, speed, function () {
                        item.removeClass('expanded').addClass('collapsed').find('.akordeon-icon span').html(collapseText);
                    });
                
           }});
        }});
})(jQuery);