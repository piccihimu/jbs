@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">Add Technology</div>
                    <form method="post" action="{{url('/technology')}}" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label>Technology  Name</label>
                            <input name="name" class="form-control" id="" placeholder="">
                        </div>

                        <div class="form-group">
                            <label>Image Upload</label>
                            <input type="file" id="exampleInputFile" name="image">
                        </div>

                        <button type="submit" class="btn btn-primary btn-lg">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

