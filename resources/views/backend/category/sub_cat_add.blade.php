@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9">
                <div class="card">
                    <div class="card-header">Add Sub Category</div>
                    <form method="post" action="{{url('/sub/category')}}">
                        @csrf
                        <div class="form-group">
                            <label>Sub Category Name</label>
                            <input name="sub_cat_name" class="form-control" id="" placeholder="">
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Product Category</label>
                            <select class="form-control" name="category_id" id="exampleFormControlSelect1">
                                <?php $category=DB::table('categories')->get();?>
                                @foreach($category as $value)
                                    <option value="{{$value->id}}">{{$value->cat_name}}</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Sub Category Details</label>
                            <input name="details" class="form-control" id="" placeholder="">
                        </div>

                        <div class="form-group">
                            <label>Sub Category Slug</label>
                            <input name="slug" class="form-control" id="" placeholder="">
                        </div>


                        <button type="submit" class="btn btn-primary btn-lg">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection