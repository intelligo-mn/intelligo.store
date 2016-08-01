var Buzzy = function() {

    var handleInit = function() {

        $('.permanently').on('click', function () {
            var lohref= $(this).attr('href');
            swal({   title: "Are you sure?",   text: "You will not be able to recover this.",
                type: "warning",
                showCancelButton: true,
                closeOnConfirm: false,
                closeOnCancel: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                showLoaderOnConfirm: true
            }, function(isConfirm){
                    if (isConfirm) {

                        setTimeout(function(){
                            location.href = lohref;
                        }, 500);

                    } else {
                        swal("Cancelled", "All data is safe :)", "error");
                    }
                });
            return false;
        });
        $('.sendtrash').on('click', function () {
            var lohref= $(this).attr('href');
            swal({   title: "Are you sure?",
                text: "Sending to trash!",
                type: "warning",
                showCancelButton: true,
                closeOnConfirm: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes!",
                showLoaderOnConfirm: true
            }, function(){
                        setTimeout(function(){   location.href = lohref;  }, 500);
                });
            return false;
        });
    };

    return {

        init: function() {

            handleInit();

        }

    }

}();