<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Article::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $article = Article::create($request->all());
        return response()->json($article,201);
    }

    /*
    public function getInactiveArticles(){
        // QueryBuilders
        $articles = DB::table('articles')
        ->select('*')
        ->where('status','=','inactive')
        ->get();
        return $articles;
    }*/

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,string $id)
    {
        //
        $article = Article::findOrFail($id);

        $article->update($request->all());
        return response()->json($article,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $article = Article::findOrFail($id);
        $article->delete();
        return response()->json('El articulo se elimino con exito.',200);
    }
}
