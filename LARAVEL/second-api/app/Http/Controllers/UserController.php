<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // Register a new user
    public function register(Request $request) {

    try{
        // Validate the request
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        // Create a new user
      $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
      ]);  

      return response()->json([
        'message' => 'User Registration Successful!',
        'data' => $user,
        ], 201);

    } catch (Exception $e){
        return response()->json([
            'message' => "User Registration Failed! {$e->getMessage()}", 
        ], 409);
    }

    } //Aca cerramos la funcion register
 
}
