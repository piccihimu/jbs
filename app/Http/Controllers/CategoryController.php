<?php

namespace App\Http\Controllers;

use App\Category;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function index()
    {

        return view('backend.category.category_insert');
    }

    public function CatInsert(Request $request)
    {

        if($request->hasFile('image'))
        {

            $image=$request->file('image');

            $getimage=Str::random('30').'.'.$image->getClientOriginalName();

            $image->move('cat_image',  $getimage);

        }
        else
        {
            $getimage = "default.png";
        }

        Category::insert([
            'cat_name' => $request->cat_name,
            'cat_details' => $request->cat_details,
            'cat_slug' => $request->cat_slug,
            'cat_image' => $request->cat_image.$getimage,
            'created_at' => Carbon::now(),
        ]);
        return view('backend.category.category_insert');
    }



    public function ViewCategory()
    {
        $category=Category::all();

        return view('backend.category.category_view', compact('category'));

    }


    public function Edit($id)
    {

        $value = Category::findOrFail($id);

        return view('backend.category.category_edit', compact('value'));
    }



    public function update(Request $request)
    {

        Category::find($request->id)->update([

            'Cat_name' => $request->cat_name,
            'Cat_details' => $request->cat_details,
            'Cat_slug' => $request->cat_slug,
            'updated_at' => Carbon::now(),
        ]);

        return view('backend.category.category_view');

    }


    public function Delete($id)
    {
        Category::where('id', $id)->delete();
        return back()->with('delete', 'Your Data Delete Success');
    }

}
