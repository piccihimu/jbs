<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class subcat extends Model
{
    protected $fillable=['category_id','sub_cat_name','details','slug'];

    public function AddSubCat(){

        return $this->hasOne('App\Category','category_id','id');
    }
}
