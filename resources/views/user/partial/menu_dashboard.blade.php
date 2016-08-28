<div class="vertical-nav">
	<div class="navbar navbar-default" role="navigation">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<span class="visible-xs navbar-brand">Dashboard</span>
		</div>
		<div class="navbar-collapse collapse sidebar-navbar-collapse">
			<ul class="nav navbar-nav list-group" >
			<?php $menu=\Menu::dashboard(true);?>
			@foreach ($menu as $item)
			    <li class="list-group-item {{isset($item['class'])?$item['class']:''}} {{ Utility::active($item['route']) }}" >
					<a href='{{$item['route']}}'>@if(isset($item['icon']))<span class="{{$item['icon']}}"></span>@endif {{$item['text']}} @if(isset($item['cont'])&&$item['cont']>0)<span class="badge pull-right">{{$item['cont']}}</span>@endif </a>
				</li>
			@endforeach
			</ul>
		</div><!--/.nav-collapse -->
	</div>
</div>