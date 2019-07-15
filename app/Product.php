<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public $table="products";
    protected  $fillable =['code','name','cat_id','sub_id','color_id','tech_id','description'];

//    public function cat(){
//        return $this->hasOne('App\category','id','cat_id');
//    }
//
//    public function sub_cat(){
//
//        return $this->hasOne('App\subcat','id','sub_cat_id');
//    }
//    public function color(){
//
//        return $this->hasOne('App\Color','id','color_id');
//
//    }
//    public function tech(){
//
//        return $this->hasOne('App\Technology','id','tech_id');
//    }


    public function products_colors(){

        return $this->hasMany(ProductsColor::class);

    }
}