<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title', 500);
            $table->unsignedBigInteger('category1_id');
            $table->unsignedBigInteger('category2_id');
            $table->text('main_text');
            $table->unsignedBigInteger('created_id');
            $table->unsignedBigInteger('updated_id');
            $table->timestamps();

            $table->foreign('category1_id')->references('id')->on('categories');
            $table->foreign('category2_id')->references('id')->on('categories');

            $table->foreign('created_id')->references('id')->on('users');
            $table->foreign('updated_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
