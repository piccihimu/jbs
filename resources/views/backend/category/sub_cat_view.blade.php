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
                            <th scope="col">Category Name</th>
                            <th scope="col">Category Details</th>
                            <th scope="col">Category Slug</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>

                        @foreach($subcat as $value)
                            <tr>
                                <th scope="row">{{$value->sub_name}}</th>
                                <td>{{$value->sub_details}}</td>
                                <td>{{$value->sub_slug}}</td>

                                <td><button  type="button" class="btn btn-outline-info"><a href="{{url('/sub/category/update/',$value->id)}}">Edit</a></button>
                                    <button type="button" class="btn btn-outline-danger"><a href="{{route('Delete',$value->id)}}">Delete</a></button>
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