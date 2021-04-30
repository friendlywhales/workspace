<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Category;
use App\Models\Article;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        return Category::get();
    }

    public function store(Request $request)
    {
        $category = Category::create($request->all());

        return response()->json($category, 201);
    }

    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);
        $category->fill($request->all());
        if (!$category->isDirty()) {
            return response()->noContent();
        }
        $category->save();

        return response()->json($category, 201);
    }

    public function show(Request $request, $id)
    {
        return Category::findOrFail($id);
    }

    public function articleList(Request $request, $id)
    {
        $category = Category::findOrFail($id);

        return Article::where('category1_id', $category->id)->get();
    }
}