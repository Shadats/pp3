<!DOCTYPE html>
<html lang=" {{ str_replace('_','-',app()->getLocale()) }}">
<head>
    <title></title>
</head>
<body>
    <div id="appp">
        @{{$data}}
        <script scr="{{asset('js/app.js')}}"></script>
    </div>
</body>

</html>