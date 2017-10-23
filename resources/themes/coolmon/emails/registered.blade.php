<html>
<head>
    <style>
        p {
            font-size: 16px;
            color: #000;
        }
    </style>
</head>
<body>
<p>
    {!! trans('updates.registermail',  ['UserName' => Auth::user()->username, 'ActivateLink' => url('/accountactivate/'.Auth::user()->remember_token) ]) !!}
</p>
</body>
</html>