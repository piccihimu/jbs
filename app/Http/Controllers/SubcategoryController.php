<?php

namespace App\Http\Controllers;

use App\Category;
use App\Subcat;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class SubcategoryController extends Controller
{
  public function index(){

      $category=Category::all();

      return view('backend.category.sub_cat_add',compact('category'));
  }
public function AddSubCat(Request $request){

      subcat::insert([
                'sub_cat_name'=>$request->sub_cat_name,
                'category_id'=>$request->category_id,
                'details'=>$request->details,
                'slug'=>$request->slug,

      ]);

      $cat_id=Input::get('cat_id');

      $subcategories= subcat::where('id','=',$cat_id)->get();
//       return Response::json($subcategories);
//      $category= Category::where(['id'=>0])->get();
      return view('backend.category.sub_cat_add',compact('subcategories'));
}

public function SubView(){

      $subcat=subcat::all();

      return view('backend.category.sub_cat_view',compact('subcat'));
}

public function update(Request $request){

      subcat::find($request->id)->update([


          'sub_name'=>$request->sub_cat_name,
          'sub_details'=>$request->sub_details,
          'sub_slug'=>$request->sub_slug,
          'updated_at'=>Carbon::now(),

      ]);

      return view('backend.category.sub_cat_edit');
}

    public function Delete($id)
    {
        subcat::where('id', $id)->delete();
        return back()->with('delete', 'Your Data Delete Success');
    }
}
