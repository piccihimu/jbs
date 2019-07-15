@extends('layouts.app')
@section('content')
    <div class="col-md-9">
        <div class="content-wrapper">
            <div class="box-header with-border">
                <h3 class="box-title">View Technology</h3>
            </div>
            <!-- /.box-header -->
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Tech Name</th>
                        <th scope="col">Tech Image</th>
                    </tr></thead>

                    @foreach($tech as $value)
                        <tr>
                            <td>{{$value->name}}</td>
                            <td>{{$value->image}}</td>
                        </tr>
                    @endforeach

                </table></div></div></div>


@endsection