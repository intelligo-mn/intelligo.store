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
    {!! trans('emails.approved',  ['UserName' => $username, 'PostTitle' => $PostTitle, 'Postlink' => $Postlink]) !!}
</p>
</body>
</html>