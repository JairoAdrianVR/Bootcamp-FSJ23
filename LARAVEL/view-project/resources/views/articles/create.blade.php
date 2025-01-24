<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Home</title>
    </head>
    <body style="background-color:rgb(120, 117, 117);"> 
        <h1>Soy el create</h1>
    
        <form method="POST" action="{{url('/articles')}}">
            @csrf
            <label>Title: </label>
            <input type="text" id="title" name="title" placeholder="Title">
            <label>Description: </label>
            <input type="text" id="description" name="description" placeholder="Description">
            <label>Stock: </label>
            <input type="number" id="stock" name="stock" placeholder="Stock">
            <button type="submit">Create</button>
        </form>

    </body>