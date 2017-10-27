@if (Session::has('success.message'))
    <script>
        swal({   title: "{{  trans('updates.success') }}"  , text: "{{ Session::get('success.message') }}", type: "success",  html: true });
    </script>
    @elseif (Session::has('error.message'))
    <script>
        swal({   title: "{{  trans('updates.error') }}", text: "{{ Session::get('error.message') }}", type: "error",  html: true });
    </script>
@endif