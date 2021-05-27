<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;


class TestController extends Controller
{
    public function index()
    {
        // current logged user
        $user = Auth::user();

        // $isLoggedIn = Auth::check();

        // Auth::logout();

        return view('welcome', [
            'name' => $user->name
        ]);
    }
};