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
use Illuminate\Support\Facades\Input;

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


        $product= new product();

        $product->code=$request->code;
        $product->name=$request->name;
        $product->cat_id=$request->cat_id;
        $product->description=$request->description;

        $product->save();


        $subcat= new ProductSubCat();
        $subcat->product_id=$product->id;
        $subcat->category_id=$request->cat_id;
        $subcat->sub_cat_id=$request->sub_cat_id;
        $subcat->save();



        $pro_tech= new ProductTechnology();
        $pro_tech-> product_id=$product->id;
        $pro_tech->technology_id=$request->technology_id;
        $pro_tech->save();



        $pro_col= new ProductsColor();
        $pro_col->product_id=$product->id;
        $pro_col->color_id=$request->color_id;
        $pro_col->save();



        $images=array();
        if($files=$request->file('images')){
            foreach($files as $file){
                $name=$file->getClientOriginalName();
                $file->move('pro_image',$name);
                $images[]=$name;


                $pro_image=new ProductImage();
                $pro_image->product_id=$product->id;
                $pro_image->image=$request->image.$name;
                $pro_image->save();
            }
        }


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
