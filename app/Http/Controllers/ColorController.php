<?php

namespace App\Http\Controllers;

use App\Color;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ColorController extends Controller
{

    function index()
    {
        return view('backend.color.add_color');
    }

    function AddColor(Request $request)
    {
            Color::insert([
                'color_name'=>$request->color_name,
                'created_at'=>Carbon::now(),
            ]);

            return back();
    }

    function ColorView(){

        $color=Color::all();

        return view('backend.color.view_color',compact('color'));
    }
}