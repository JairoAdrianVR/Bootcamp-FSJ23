<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Home</title>
    </head>
    <body style="background-color:rgb(120, 117, 117);"> 
        <h1>Holiwis</h1>
    
        <?php print_r($articles)?>
        <a href="{{url('/articles/create')}}"> Add articles</a>
    </body>