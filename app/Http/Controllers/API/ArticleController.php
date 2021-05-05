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
        $article = Article::findOrFail($id);
        
        if ($article->exists()) {
            $article->delete();
        }

        return response()->json($article,201);
    }

    public function update(Request $request, $id)
    {
        $article = Article::findOrFail($id);
        $article->fill($request->all());
        if (!$article->isDirty()) {
            return response()->noContent();
        }
        $article->save();

        return response()->json($category, 201);
    }

    public function show(Request $request, $id)
    {
        return Article::findOrFail($id);
    }



}