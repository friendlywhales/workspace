<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Article;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        return Article::get();
    }

    public function store(Request $request)
    {
        $article = Article::create($request->all());

        return response()->json($article, 201);
    }

    public function destory(Request $request, $id)
    {

    }

    public function update(Request $request, $id)
    {

    }

    public function show(Request $request, $id)
    {
        return Article::findOrFail($id);
    }
}