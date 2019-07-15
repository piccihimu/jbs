<?php

namespace App\Http\Controllers;

use App\Technology;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TechnologyController extends Controller
{
    public function index(){

        return view('backend.technology.add_technology');
    }

    public function TechAdd(Request $request){

        if($request->hasFile('image'))
        {

            $image=$request->file('image');

            $getimage=Str::random('30').'.'.$image->getClientOriginalName();

            $image->move('tech_image',  $getimage);

        }
        else
        {
            $getimage = "default.png";
        }


        Technology::insert([
            'name'=>$request->name,
            'image'=>$request->image.$getimage,
        ]);
        return back();
    }

    public function TechView(){

        $tech=Technology::all();

        return view('backend.technology.view_technology',compact('tech'));
    }
}
