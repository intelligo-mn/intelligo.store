<ul class="nav navbar-nav navbar-right">
    <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
            <span class="fui fui-question-circle"></span>
            {{ trans('globals.help') }}<span class="caret"></span>
        </a>
        <ul class="dropdown-menu" role="menu">
            <?php $menu=\Menu::help(true);?>
            @foreach ($menu as $item)
            <li class="{{isset($item['class'])?$item['class']:''}} {{ Utility::active($item['route']) }}" >
                <a href='{{$item['route']}}'>@if(isset($item['icon']))<span class="{{$item['icon']}}"></span>@endif {{$item['text']}} @if(isset($item['cont'])&&$item['cont']>0)<span class="badge pull-right">{{$item['cont']}}</span>@endif </a>
            </li>
            @if(isset($item['divider']))<li class="divider"></li>@endif
            @endforeach
        </ul>
    </li>
</ul>