@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">Add Color</div>
                    <form method="post" action="{{url('/color')}}">
                        @csrf
                        <div class="form-group">
                            <label>Color  Name</label>
                            <input name="color_name" class="form-control" id="" placeholder="">
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

