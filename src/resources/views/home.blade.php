<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="csrf-token" value="{{ csrf_token() }}" />

        <title>Laravel - Home</title>

        <!-- Fonts -->
		<link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

		<link href="{{ asset('assets/css/app.css') }}" rel="stylesheet">

    </head>
    <body>
		<div id="app">
			{{-- <App></App> --}}
			{{-- <router-view></router-view> --}}
		</div>
		<script src="{{ asset('assets/js/app.js') }}"></script>
    </body>
</html>

