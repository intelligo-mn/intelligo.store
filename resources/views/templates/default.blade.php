<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Modu</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    </head>
    
    <body>
        @include('templates.partials.navigation')
        <div class="container">
            @include('templates.partials.alerts')
            @yield('content')
        </div>
    </body>
</html>