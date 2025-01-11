<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Post::with('user')->get();

        //Con Query Builder
        /*
        return DB::table('posts')->join('users','users.id','=','posts.user_id')
        ->select('posts.*','users.name as user_name')->get();
*/
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //Validamos los datos del request
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'user_id' => 'required|integer'
        ]);

        //Creamos un nuevo POST
        $post = $request->user()->posts()->create($request->all());

        /* Otra forma de hacerlo 
        
        $posts = Post::create([
            'title' => $request->title,
            'content' => $request->content,
            'user_id' => $request->user()->id
        ]); */

        //Hacerlo con Query builder
        /* 
        $post = DB::table('posts')->insert(
            [
                'title' => $request->title,
                'content' => $request->content,
                'user_id' => $request->user()->id
            ]
            );
        */

        return response()->json([
            'message' => 'Post Created Successfully!',
            'data' => $post
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
