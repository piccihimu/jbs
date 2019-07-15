@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9">
                <div class="card">
                    <div class="card-header">Sub Category Update</div>
                    <form method="post" action="{{url('/sub/category/update')}}">
                        @csrf
                        <div class="form-group">
                            <label>Sub Category Name</label>
                            <input type="text" name="cat_name" class="form-control" id="" placeholder="{{$value->cat_name}}" >
                        </div>

                        <div class="form-group">
                            <label>Sub Category Details</label>
                            <input name="cat_details" class="form-control" id="" {{$value->cat_details}}>
                        </div>

                        <div class="form-group">
                            <label>Category Slug</label>
                            <input name="cat_slug" class="form-control" id="" {{$value->cat_slug}}>
                        </div>


                        <button type="submit" class="btn btn-primary btn-lg">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection