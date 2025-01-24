<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Editando...</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    </head>
    <body style="background-color:rgb(120, 117, 117);"> 
        <h1>Soy el edit</h1>
    
        <?php print_r($article)?>
        <section class="d-flex justify-content-center">
        <article class="card col-4 m-4 p-4">
        <form method="POST" action="{{url("/articles/$article->id")}}" class="form-group">
            @csrf
            @method('PUT')
            <label class="form-label mt-2">Title: </label>
            <input type="text" id="title" name="title" placeholder="Title" value="{{$article->title}}" class="form-control">
            <label class="form-label mt-2">Description: </label>
            <input type="text" id="description" name="description" placeholder="Description"  value="{{$article->description}}" class="form-control">
            <label class="form-label mt-2">Stock: </label>
            <input type="number" id="stock" name="stock" placeholder="Stock"  value="{{$article->stock}}" class="form-control">
            <button class="btn btn-warning mt-2" type="submit">Edit</button>
        </form>
        </article>
        </section>
    </body>