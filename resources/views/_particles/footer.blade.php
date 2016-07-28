
@if(\App\Widgets::where('type', 'Footer')->where('display', 'on')->count() !== 0)

<div class="clear"></div>
<footer class="footer">
    <div class="container" style="border:0 ; box-shadow: none;">
        <div class="row">

            <div class="col-1">
                <img class="site-logo" src="/assets/img/logo.png" alt="">
            </div>

            <div class="col-2">
                @foreach(\App\Widgets::where('type', 'Footer')->where('display', 'on')->get() as $widget)
                      {!! $widget->text !!}
                @endforeach

            </div>
        </div>
    </div>
</footer>
@endif