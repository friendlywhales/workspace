<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Resources\Post as PostResource;
use App\Models\Post;

class PostController extends Controller
{

    public function index()
    {
        return PostResource::collection(Post::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $post = new Post([
            'title' => $request-> title,
            'description' => $request->description,
        ]);

        $post->save();
        
        return response()-> json([
            'data' => 'Post created.'
        ]);
    }

    public function edit($id)
    {
        return new PostResource(Post::findOrfail($id));
    }


    public function update(Request $request, $id)
    {
         $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $post = Post::findOrfail($id);
        $post->title = $request->title;
        $post->description = $request->description;
        $post->save();
        
        return response()-> json([
            'data' => 'Post updated.'
        ]);
    }

    public function destroy($id)
    {
        $post = Post::findOrfail($id);
        $post->delete();
        
        return response()-> json([
            'data' => 'Post deleted.'
        ]);
    }

    public function postListAll()
    {
        return PostResource::collection(Post::all());
    }
}
