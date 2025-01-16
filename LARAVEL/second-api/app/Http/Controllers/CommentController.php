<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Exception;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Create a new comment
        try{
            $request->validate([
                'content' => 'required|string',
                'post_id' => 'required'
            ]);

            /* Forma antigua para crear un comentario
            $comment = new Comment();
            $comment->content = $request->content;
            $comment->post_id = $request->post_id;
            $comment->user_id = $request->user()->id;

            $comment->save(); */

            $comment = Comment::create([
                'content' => $request->content,
                'post_id' => $request->post_id,
                'user_id' => $request->user()->id
            ]);


        
        }catch(Exception $error){
            return response()->json([
                'message' => 'Error: '.$error->getMessage()
            ], 400);
        }
    
   
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
