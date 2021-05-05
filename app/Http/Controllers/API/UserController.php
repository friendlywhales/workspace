<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\User;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return User::get();
    }

    public function store(Request $request)
    {
        $user = User::create($request->all());

        return response()->json($user, 201);
    }

    public function destory(Request $request, $id)
    {
        $user = User::findOrFail($id);
        
        if ($user->exists()) {
            $user->delete();
        }

        return response()->json($user,201);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->fill($request->all());
        if (!$user->isDirty()) {
            return response()->noContent();
        }
        $user->save();

        return response()->json($user, 201);
    }

    public function show(Request $request, $id)
    {
        return User::findOrFail($id);
    }

    //TO-DO : where like 검색 구현(어드민)
    public function userList(Request $request, $name)
    { 
        return User::where('name' , $name)->get();
    }
}
