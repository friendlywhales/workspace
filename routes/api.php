<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\ArticleController;
use App\Http\Controllers\API\CustomerController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\PostController;
use App\Http\Controllers\API\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::apiResource("categories", CategoryController::class)->only(["index", "store", "update", "show"]);
Route::get("categories/{category}/articles", [CategoryController::class, "articleList"]);
Route::apiResource("customers", CustomerController::class);
Route::apiResource("articles", ArticleController::class);

//연습예제
Route::apiResource("posts", PostController::class);
Route::get("posts/{id}/edit", [PostController::class, "edit"]); 

//회원가입
Route::apiResource("users", UserController::class)->only((["store"]));