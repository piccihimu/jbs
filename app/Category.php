<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
protected $fillable=['cat_name','cat_details','cat_slug'];



//    public function subcat(){
//        return $this->hasMany('\App\Category', 'id');
//    }
//
//    public function category(){
//        return $this->belongsTo('\App\subcats', 'id');
//    }
}
