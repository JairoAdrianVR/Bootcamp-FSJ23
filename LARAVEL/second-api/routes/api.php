<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommentController;

Route::middleware('auth:sanctum')->group(function(){

    Route::post('/logout',[UserController::class,'logout']);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/posts',[PostController::class,'index']);
    Route::post('/posts',[PostController::class,'store']);

    Route::post('/comments',[CommentController::class,'store']);

});

Route::post('/register',[UserController::class,'register']);
Route::post('/login',[UserController::class,'login']);

//Route::post('/register','App\Http\Controllers\AuthController@register');
