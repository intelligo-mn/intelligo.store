(function(){

    var app = angular.module('AntVel'); //references to AntVel module

    var rates = angular.module('store-rate', [ ]); //create the home page module

    app.requires.push('store-rate'); //then push a new requirement to AntVel modules

    app.filter('dateToISO', function() {
        return function(input) {
            input = new Date(input).toISOString();
            return input;
        };
    });

})();