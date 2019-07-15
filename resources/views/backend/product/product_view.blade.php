@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9">
                <div class="card">
                    <div class="card-header">View Category</div>
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Code</th>
                            <th scope="col">Product Tech</th>
                            <th scope="col">Product Color</th>
                            <th scope="col">Product Details</th>
                            <th scope="col">Category Id</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>

                        @foreach($product as $value)
                            <tr>
                                <th scope="row">{{$value->name}}</th>
                                <td>{{$value->code}}</td>
                                <td>{{$value->tech_id}}</td>
                                <td>{{$value->color_id}}</td>
                                <td>{{$value->description}}</td>
                                <td>{{$value->cat_id}}</td>
                                <td>{{$value->sub_id}}</td>

                                <td><button  type="button" class="btn btn-outline-info"><a href="{{url('/category/edit',$value->id)}}">Edit</a></button>
                                    <button type="button" class="btn btn-outline-danger"><a href="{{url('/product/delete',$value->id)}}">Delete</a></button>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection