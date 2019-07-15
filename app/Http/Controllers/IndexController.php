<?php

namespace App\Http\Controllers;


use App\Category;
use App\Product;

class IndexController extends Controller
{


    public function index(){

        $category=Category::limit('8')->get();

        return view('index',compact('category'));

    }


    public function category($id)
    {
        $category = Product::where('cat_id', $id)->get();
        $id_ = $id;
        return view('frontend.category_view', compact('category', 'id_'));
    }



    public function product($id){
        $category=Product::where('cat_id',$id)->get();
        $id_=$id;
        return view('frontend.category_view',compact('category','id_'));
    }


    public function single($id){

        $single_product=Product::all()->where('id',$id);

        return view('frontend.single_product',compact('single_product'));
    }


    public function about(){

        return view('frontend.about');
    }

    public function terms(){

        return view('frontend.terms');
    }

    public function tech(){

        return view('frontend.technology');
    }

}