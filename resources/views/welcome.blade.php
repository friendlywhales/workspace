<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>MEDIAIPLUS</title>

        <Link href="{{ asset('css/app.css')}}" rel="stylesheet" />
        <!-- <script>
            let name = "{{ $name ?? '' }}";
        </script> -->
    </head>
    <body>
        <div id="app">
            <script src="{{mix('/js/app.js')}}"></script>
        </div>
    </body>
</html>
