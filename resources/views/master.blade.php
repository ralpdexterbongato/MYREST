<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
      <meta charset="utf-8">
      <title>RALP DEXTER BONGATO</title>
      <base href="/">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="csrf-token" content="{{ csrf_token() }}">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="ralp dexter bongato portfolio">
      <meta name="keywords" content="Ralp Dexter Bongato,ralp dexter bongato,bongato ralp dexter,bongato ralp,
      ralp dexter bongato portfolio,bongato dexter">
      <link rel="icon" href="favicon.ico">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    </head>
    
    <body>
      <app-root></app-root>
      <script>
        $(document).ready(function()
        {
          $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                      }
          });
        });
      </script>
      <script type="text/javascript" src="dist/inline.bundle.js"></script>
        <script type="text/javascript" src="dist/polyfills.bundle.js"></script>
        <script type="text/javascript" src="dist/styles.bundle.js"></script>
        <script type="text/javascript" src="dist/vendor.bundle.js"></script>
        <script type="text/javascript" src="dist/main.bundle.js"></script>
    </body>
    
</html>
