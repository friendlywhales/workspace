<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Category;

class Article extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'main_text',
        'category1_id',
        'category2_id',
        'created_id',
        'updated_id',
    ];

    protected $with = ["category1", "category2"];

    public function category1()
    {
        return $this->hasOne(Category::class, "id", "category1_id");
    }

    public function category2()
    {
        return $this->hasOne(Category::class, "id", "category2_id");
    }
}
