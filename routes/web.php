<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TestController;
use App\Http\Controllers\Auth\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Auth::routes();
Route::get('login', function () {
    return view('welcome');
});
Route::post('login', [LoginController::class, "login"]);
Route::post('logout', [LoginController::class, "logout"]);
Route::get('/test', [TestController::class, "index"])->middleware('auth');
Route::get('/{any?}', function () {
    return view('welcome');
})->where('any','^(?!api).*$');