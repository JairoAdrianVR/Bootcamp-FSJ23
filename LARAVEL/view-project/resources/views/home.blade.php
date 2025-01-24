<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Home</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body class="bg-light"> 

        <?php //print_r($articles)?>
        <nav class=" bg-success">
            <h1 class="text-center text-white p-4">CRUD Blade Basiquito</h1>
        </nav>
        <section class="container">
        
        
        <a href="{{url('/articles/create')}}" class="btn btn-success m-2 col-4 "> Add articles</a>
            <table class="table table-striped m-4">
                <thead >
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                        @foreach($articles as $article)
                        <tr>
                            <td>{{$article->id}}</td>
                            <td>{{$article->title}}</td>
                            <td>{{$article->description}}</td>
                            <td>{{$article->stock}}</td>
                            <td>
                            <a class="btn btn-warning" href="{{url("/articles/$article->id")}}">Edit</a>

                            <form method="POST" action="{{url("/articles/$article->id")}}" class="d-inline">
                                @csrf
                                @method('DELETE')
                                <button class="btn btn-danger" type="submit">Delete</button>
                            </td>
                        </tr>
                        @endforeach
                </tbody>

            </table>
        </section>

    </body>