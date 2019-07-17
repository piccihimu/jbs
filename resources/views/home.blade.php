@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                        <marquee style="color: #6c757d">Welcome To Jbs Ware Admin Panel</marquee>
                        <marquee behavior="scroll" direction="right" scrollamount="10" style="color: #ff1b10">Welcome To Jbs Ware Admin Panel</marquee>
                        <marquee behavior="scroll" direction="left" scrollamount="5" style="color: #9a232e">Welcome To Jbs Ware Admin Panel</marquee>
                        <marquee behavior="scroll" direction="right" scrollamount="10" style="color: #2aff5a">Welcome To Jbs Ware Admin Panelspeed</marquee>
                </div>
            </div>
        </div>
    </div>
</div>





    {{--<!-- summernote config -->--}}
    {{--<script>--}}
        {{--$(document).ready(function(){--}}

            {{--// Define function to open filemanager window--}}
            {{--var lfm = function(options, cb) {--}}
                {{--var route_prefix = (options && options.prefix) ? options.prefix : '/laravel-filemanager';--}}
                {{--window.open(route_prefix + '?type=' + options.type || 'file', 'FileManager', 'width=900,height=600');--}}
                {{--window.SetUrl = cb;--}}
            {{--};--}}

            {{--// Define LFM summernote button--}}
            {{--var LFMButton = function(context) {--}}
                {{--var ui = $.summernote.ui;--}}
                {{--var button = ui.button({--}}
                    {{--contents: '<i class="note-icon-picture"></i> ',--}}
                    {{--tooltip: 'Insert image with filemanager',--}}
                    {{--click: function() {--}}

                        {{--lfm({type: 'image', prefix: '/laravel-filemanager'}, function(lfmItems, path) {--}}
                            {{--lfmItems.forEach(function (lfmItem) {--}}
                                {{--context.invoke('insertImage', lfmItem.url);--}}
                            {{--});--}}
                        {{--});--}}

                    {{--}--}}
                {{--});--}}
                {{--return button.render();--}}
            {{--};--}}

            {{--// Initialize summernote with LFM button in the popover button group--}}
            {{--// Please note that you can add this button to any other button group you'd like--}}
            {{--$('#summernote-editor').summernote({--}}
                {{--toolbar: [--}}
                    {{--['popovers', ['lfm']],--}}
                {{--],--}}
                {{--buttons: {--}}
                    {{--lfm: LFMButton--}}
                {{--}--}}
            {{--})--}}
        {{--});--}}
    {{--</script>--}}









{{--<script src="//cdn.tinymce.com/4/tinymce.min.js"></script>--}}
{{--<textarea name="content" class="form-control my-editor">{!! old('content', $content) !!}</textarea>--}}
{{--<script>--}}
    {{--var editor_config = {--}}
        {{--path_absolute : "/",--}}
        {{--selector: "textarea.my-editor",--}}
        {{--plugins: [--}}
            {{--"advlist autolink lists link image charmap print preview hr anchor pagebreak",--}}
            {{--"searchreplace wordcount visualblocks visualchars code fullscreen",--}}
            {{--"insertdatetime media nonbreaking save table contextmenu directionality",--}}
            {{--"emoticons template paste textcolor colorpicker textpattern"--}}
        {{--],--}}
        {{--toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media",--}}
        {{--relative_urls: false,--}}
        {{--file_browser_callback : function(field_name, url, type, win) {--}}
            {{--var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;--}}
            {{--var y = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;--}}

            {{--var cmsURL = editor_config.path_absolute + 'laravel-filemanager?field_name=' + field_name;--}}
            {{--if (type == 'image') {--}}
                {{--cmsURL = cmsURL + "&type=Images";--}}
            {{--} else {--}}
                {{--cmsURL = cmsURL + "&type=Files";--}}
            {{--}--}}

            {{--tinyMCE.activeEditor.windowManager.open({--}}
                {{--file : cmsURL,--}}
                {{--title : 'Filemanager',--}}
                {{--width : x * 0.8,--}}
                {{--height : y * 0.8,--}}
                {{--resizable : "yes",--}}
                {{--close_previous : "no"--}}
            {{--});--}}
        {{--}--}}
    {{--};--}}

    {{--tinymce.init(editor_config);--}}
{{--</script>--}}



{{--@endsection--}}

@endsection
