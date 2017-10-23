@if(\App\Widgets::where('type', $position)->where('display', 'on')->first() !== null)

        @foreach(\App\Widgets::where('type', $position)->where('display', 'on')->get() as $widget)

         {!! $widget->text !!}

        @endforeach

@endif