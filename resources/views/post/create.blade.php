<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>create new post</title>

    <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
</head>
<body>
<div id="app">
    <create-post></create-post>
</div>
<script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>

