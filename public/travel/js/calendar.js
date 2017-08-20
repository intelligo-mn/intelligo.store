/*
 * Title:   Travelo | Responsive HTML5 Travel Template - Calendar Js used in the detailed pages
 * Author:  http://themeforest.net/user/soaptheme
 */

function Calendar() {
    this.html = "";
}
(function ($, document, window) {
    Calendar.prototype.generateHTML = function(Month, Year, notAvailableDays, priceArr) {
        var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var daynames = new Array("sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday");
        var today = new Date();
        var thisDay = today.getDate();
        var thisMonth = today.getMonth();
        var thisYear = 1900 + today.getYear();
        if (typeof notAvailableDays == "undefined") {
            notAvailableDays = [];
        }
        if (typeof priceArr == "undefined") {
            priceArr = [];
        }
        
    
        var html = "";
        firstDay = new Date(Year, Month, 1);
        startDay = firstDay.getDay();
    
        if (((Year % 4 == 0) && (Year % 100 != 0)) || (Year % 400 == 0))
            days[1] = 29;
        else
            days[1] = 28;
    
        html += "<table><thead><tr>";
    
        for ( i = 0; i < 7; i++) {
            html += "<td>" + daynames[i] + "</td>";
        }
    
        html += "</tr></thead><tbody><tr>";
    
        var column = 0;
        var lastMonth = Month - 1;
        if (lastMonth == -1)
            lastMonth = 11;
        for ( i = 0; i < startDay; i++) {
            //html += "<td class='date-passed prev-month'><span>" + (days[lastMonth] - startDay + i + 1) + "</span></td>";
            html += "<td class='prev-month'></td>";
            column++;
        }
    
        for ( i = 1; i <= days[Month]; i++) {
            var className = "";
            if ((i == thisDay) && (Month == thisMonth) && (Year == thisYear)) {
                className +=" today";
            }
            
            var priceText = "";
            if (Year > thisYear || (Year == thisYear && Month > thisMonth) || (Year == thisYear && Month == thisMonth && i >= thisDay)) {
                if ($.inArray(i, notAvailableDays) !== -1) {
                    className += " unavailable";
                } else {
                    className += " available";
                    if (typeof priceArr[i] != "undefined") {
                        priceText += "<span class='price-text'>" + priceArr[i] + "</span>";
                    }
                }
            } else {
                className += " date-passed";
            }

            if (i < thisDay || $.inArray(i, notAvailableDays) !== -1) {
                html += "<td class='" + className + "'><span>" + i + "</span></td>";
            } else {
                html += "<td class='" + className + "'><a href='#'>" + i + priceText + "</a></td>";
            }
            
            column++;
            if (column == 7) {
                html += "</tr><tr>";
                column = 0;
            }
        }
    
        /*if (column > 0) {
            for ( i = 1; column < 7; i++) {
                html += "<td class='next-month'>" + i + "</td>";
                column++;
            }
        }*/
        html += "</tr></tbody></table>";
        this.html = html;
    };
    
    Calendar.prototype.getHTML = function() {
        return this.html;
    };
}(jQuery, document, window));