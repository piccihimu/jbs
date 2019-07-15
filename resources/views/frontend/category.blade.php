




<div class="tile-categories">
    <h2>Product Categories</h2>
    <ul class="row">
        @foreach($category as $value)
        <li class="tile-col">
            <a href="{{url('/cat/view',$value->id)}}" class="bg-img" style="background-image:url('cat_image/{{$value->cat_image}}')">
                <div class="tile-categories-content">
                  <div class="tile-categories-title">{{$value->cat_name}}</div>
                    <div class="tile-categories-btn" href="{{'/cat/view',$value->id}}">View more</div>
                </div>
            </a>
        </li>
        @endforeach
        {{--<li class="tile-col">--}}
            {{--<a href="{{url('/')}}/assets/ppe.html" class="bg-img" style="background-image: url('{{url('/')}}/assets/images/default-source/categories/pped904.jpg?sfvrsn=b591a250_4')">--}}
                {{--<div class="tile-categories-content">--}}
                    {{--<div class="tile-categories-title">Footwear &amp; PPE</div>--}}
                    {{--<div class="tile-categories-btn">View more</div>--}}
                {{--</div>--}}
            {{--</a>--}}
        {{--</li>--}}
        {{--<li class="tile-col">--}}
            {{--<a href="{{url('/')}}/assets/workwear/hi-vis-tradewear.html" class="bg-img" style="background-image: url('{{url('/')}}/assets/images/default-source/default-album/workwear-jbs8143.jpg?sfvrsn=8083a250_2')">--}}
                {{--<div class="tile-categories-content">--}}
                    {{--<div class="tile-categories-title">Workwear</div>--}}
                    {{--<div class="tile-categories-btn">View more</div>--}}
                {{--</div>--}}
            {{--</a>--}}
        {{--</li>--}}
        {{--<li class="tile-col">--}}
            {{--<a href="podium.html" class="bg-img" style="background-image: url('{{url('/')}}/assets/images/default-source/categories/podiumc9ad.jpg?sfvrsn=c591a250_4')">--}}
                {{--<div class="tile-categories-content">--}}
                    {{--<div class="tile-categories-title">Podium Teamwear</div>--}}
                    {{--<div class="tile-categories-btn">View more</div>--}}
                {{--</div>--}}
            {{--</a>--}}
        {{--</li>--}}
        {{--<li class="tile-col">--}}
            {{--<a href="corporate.html" class="bg-img" style="background-image: url('{{url('/')}}/assets/images/default-source/categories/corporatea5c2.jpg?sfvrsn=c191a250_4')">--}}
                {{--<div class="tile-categories-content">--}}
                    {{--<div class="tile-categories-title">Corporate</div>--}}
                    {{--<div class="tile-categories-btn">View more</div>--}}
                {{--</div>--}}
            {{--</a>--}}
        {{--</li>--}}
        {{--<li class="tile-col">--}}
            {{--<a href="outerwear.html" class="bg-img" style="background-image: url('{{url('/')}}/assets/images/default-source/categories/outerwearcf9c.jpg?sfvrsn=b191a250_6')">--}}
                {{--<div class="tile-categories-content">--}}
                    {{--<div class="tile-categories-title">Outerwear</div>--}}
                    {{--<div class="tile-categories-btn">View more</div>--}}
                {{--</div>--}}
            {{--</a>--}}
        {{--</li>--}}
        {{--<li class="tile-col">--}}
            {{--<a href="hospitality.html" class="bg-img" style="background-image: url('{{url('/')}}/assets/images/default-source/categories/hospitality5b9b.jpg?sfvrsn=bd91a250_4')">--}}
                {{--<div class="tile-categories-content">--}}
                    {{--<div class="tile-categories-title">Hospitality</div>--}}
                    {{--<div class="tile-categories-btn">View more</div>--}}
                {{--</div>--}}
            {{--</a>--}}
        {{--</li>--}}
        {{--<li class="tile-col">--}}
            {{--<a href="schoolwear.html" class="bg-img" style="background-image: url('{{url('/')}}/assets/images/default-source/categories/schoolf356.jpg?sfvrsn=ad91a250_4')">--}}
                {{--<div class="tile-categories-content">--}}
                    {{--<div class="tile-categories-title">Schoolwear</div>--}}
                    {{--<div class="tile-categories-btn">View more</div>--}}
                {{--</div>--}}
            {{--</a>--}}
        {{--</li>--}}
    </ul>
</div>
</section>