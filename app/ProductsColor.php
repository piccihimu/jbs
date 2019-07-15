<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductsColor extends Model
{

    protected $fillable=['product_id','color_id'];

        public function products(){

            return $this->belongsToMany(Product::class);

        }
}
