<?php

namespace App\Http\Controllers;

//if(version_compare(PHP_VERSION, '7.2.0', '>=')) {
//    error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
//}

use App\Category;
use App\Color;
use App\product;
use App\ProductImage;
use App\ProductsColor;
use App\ProductSubCat;
use App\ProductTechnology;
use App\Subcat;
use App\Technology;
use Carbon\Carbon;
use Faker\Provider\Image;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index(){


        return view('backend.product.product_add');
    }


    public function AddProduct(Request $request){
        $cat=Category::orderBy('cat_name','asc')->get();
        $sub_cat=subcat::orderBy('sub_cat_name','asc')->get();
        $color=Color::orderBy('color_name','asc')->get();
        $tech=Technology::orderBy('name','asc')->get();



        Product::insert([
            'code'=>$request->code,
            'name'=>$request->name,
            'cat_id'=>$request->cat_id,
            'description'=>$request->description,
            'created_at' => Carbon::now(),

        ]);




            ProductSubCat::insert([
                'product_id' => $request->product_id,
                'category_id' => $request->category_id,
                'sub_cat_id' => $request->sub_cat_id,
            ]);


        ProductTechnology::insert([
            'product_id'=>$request->product_id,
            'technology_id'=>$request->technology_id,
        ]);

        ProductsColor::insert([
            'product_id'=>$request->product_id,
            'color_id'=>$request->color_id,
        ]);

        ProductImage::insert([
           'product_id'=>$request->product_id,
            'image'=>$request->image,

        ]);
        return view('backend.product.product_add',compact('cat','sub_cat','color','tech'));

    }



    public function  view(){

        $product=Product::all();
        return view('backend.product.product_view',compact('product'));
    }

    public function delete($id)
    {
        Product::where('id', $id)->delete();
        return back()->with('delete', 'Your Data Delete Success');
    }

}
