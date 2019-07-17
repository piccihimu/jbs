@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">

                    <div class="card-header">Add Product</div>
                    <form action="{{url('/product/insert')}}" method="post" enctype="multipart/form-data">
                        @csrf

                        <div class="form-group">
                            <label>Product Code</label>
                            <input name="code" class="form-control" id="" placeholder="">
                        </div>

                        <div class="form-group">
                            <label>Product Name</label>
                            <input name="name" class="form-control" id="" placeholder="">
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Product Category</label>
                            <select class="form-control" name="cat_id" id="cat_id">
                               @foreach($cat as $value)
                                <option value="{{$value->id}}">{{$value->cat_name}}</option>
                                   @endforeach
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlSelect2">Product Sub Category</label>
                            <select class="form-control select2-multi" name="sub_cat_id" id="sub_id" multiple>
                                @foreach($sub_cat as $value)
                                    <option value="{{$value->id}}">{{$value->sub_cat_name}}</option>
                                @endforeach
                            </select>
                        </div>

                    <script>
                        $('.select2-multi').select2();
                    </script>

                        <div class="form-group">
                            <label for="exampleFormControlSelect2">Product Technology</label>
                            <select multiple class="form-control select2-multi" multiple name="technology_id" id="tech_id">
                                @foreach($tech as $value)
                                    <option value="{{$value->id}}">{{$value->name}}</option>
                                @endforeach
                            </select>
                        </div>
                        <script>
                            $('.select2-multi').select2();
                        </script>

                        <div class="form-group">
                            <label for="exampleFormControlSelect2">Product Color</label>
                            <select multiple class="form-control select2-multi" multiple name="color_id[]" id="color_id">
                                @foreach($color as $value)
                                    <option value="{{$value->id}}">{{$value->color_name}}</option>
                                @endforeach
                            </select>
                        </div>
                        <script>
                            $('.select2-multi').select2();
                        </script>


                        <div class="form-group">
                            <label>Product Description</label>
                            <textarea class="form-control" rows="2" name="description"></textarea>
                        </div>








                        <div class="row">

                            <div class="col-md-6">
                                <label for="exampleFormControlSelect1">Product Color</label>
                                <select class="form-control"  name="color_id" id="color_id">
                                    @foreach($color as $value)
                                        <option value="{{$value->id}}">{{$value->color_name}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-md-6"> <label>Product Imagewww</label><input type="file" class="form-control-file" name="image[]" id="image"></div>
                            <div class="col-md-6">
                                <label for="exampleFormControlSelect1">Product Color</label>
                                <select class="form-control"  name="color_id" id="color_id">
                                    @foreach($color as $value)
                                        <option value="{{$value->id}}">{{$value->color_name}}</option>
                                    @endforeach
                                </select>
                            </div>





                            <div class="col-md-6"> <label>Product Image</label><input type="file" class="form-control-file"  name="image" id="image"></div>

                            <div class="col-md-6">
                                <label for="exampleFormControlSelect1">Product Color</label>
                                <select class="form-control"  name="color_id" id="color_id">
                                    @foreach($color as $value)
                                        <option value="{{$value->id}}">{{$value->color_name}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-md-6"> <label>Product Image</label><input type="file" class="form-control-file" name="image" id="image"></div>
                            <div class="col-md-6">
                                <label for="exampleFormControlSelect1">Product Color</label>
                                <select class="form-control"  name="color_id" id="color_id">
                                    @foreach($color as $value)
                                        <option value="{{$value->id}}">{{$value->color_name}}</option>
                                    @endforeach
                                </select>
                            </div>



                            <div class="col-md-6"> <label>Product Image</label><input type="file" class="form-control-file" name="image" id="image"></div>




                        <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>



    <script>

        $('#cat_id').on('change',function (e) {
            console.log(e);

            var cat_id = e.target.value;

                //ajax
            $.get('/AddProduct?cat_id=' + cat_id,function (data) {

                $('#sub_id').empty();
                $.each(data, function (index, subcatObj) {
                    $('#sub_id').append('<option value=" '+subcatObj.id+' ">'+subcatObj.name+'</option>');

                });

            });
        });
    </script>

@endsection