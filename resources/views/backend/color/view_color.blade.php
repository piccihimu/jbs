@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9">
                <div class="card">
                    <div class="card-header">View Color</div>
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">Color Name</th>
                        </tr>
                        </thead>
                        <tbody>

                        @foreach($color as $value)
                            <tr>
                                <th scope="row">{{$value->color_name}}</th>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection