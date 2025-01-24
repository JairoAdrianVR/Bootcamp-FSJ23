<?php

use App\Http\Controllers\ArticleController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ArticleController::class,'index']);

Route::get('/articles/create', [ArticleController::class, 'create']);
Route::post('/articles', [ArticleController::class, 'store']);

Route::get('/articles/{id}',[ArticleController::class, 'edit']);
Route::put('/articles/{id}',[ArticleController::class, 'update']);

Route::delete('/articles/{id}',[ArticleController::class, 'destroy']);