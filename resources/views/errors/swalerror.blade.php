@if (Session::has('success.message'))
    <script>
        swal({   title: "Амжилттай!", text: "{{ Session::get('success.message') }}", type: "success",  html: true });
    </script>
    @elseif (Session::has('error.message'))
    <script>
        swal({   title: "Алдаа!", text: "{{ Session::get('error.message') }}", type: "error",  html: true });
    </script>
@endif