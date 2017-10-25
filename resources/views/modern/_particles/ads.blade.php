@if(\App\Widgets::where('type', $position)->where('display', 'on')->first() !== null)
    <div class="clearfix"> </div>
    <div class="ads clearfix" >
        @foreach(\App\Widgets::where('type', $position)->where('display', 'on')->get() as $widget)

           <?php /* <div class="{!! $widget->showweb == 'off' ? 'hide-web' : 'show-web' !!} {!! $widget->showmobile == 'off' ? 'hide-phone' : 'visible-mobile' !!}"> */?>
                {!! $widget->text !!}
           <?php /* </div>*/?>

        @endforeach
    </div>
    <div class="clearfix"> </div>
@endif