<?php

use App\Http\Controllers\ArticleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('articles',ArticleController::class);

/*  LARAVEL 9/10
Route::get('/articles',[ArticleController::class,'index']);
Route::post('/articles',[ArticleController::class,'store']);
Route::get('/articles/inactive',[ArticleController::class,'store']);
*/