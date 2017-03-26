<li class="dropdown">
		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
			<span class="glyphicon glyphicon  @if(Auth::check()){{ 'user-photo' }}@endif"
				  style="@if(Auth::check()) {{ "background-image:url('".(\Auth::user()->pic_url?\Auth::user()->pic_url:'img/no-avatar.png')."');" }} @endif">{{ trans('user.login') }}</span>
			<!-- {{ trans('user.your_account') }} -->
			 <span class="caret"></span>
		</a>
	<ul class="dropdown-menu" role="menu" >
		<?php $menu=\Menu::top(true);?>
		@foreach ($menu as $item)
		    <li class="{{isset($item['class'])?$item['class']:''}} {{ Utility::active($item['route']) }}" >
				<a href='{{$item['route']}}'>
					@if (isset($item['icon']))
						<span class="{{$item['icon']}}"></span>
					@endif
					{{$item['text']}}
					@if (isset($item['cont'])&&$item['cont']>0)
					 <span class="badge">{{$item['cont']}}</span>
					@endif
				</a>
			</li>
		@endforeach

		@if (auth()->check())
			<li>
				<form action="/logout" method="POST">
					{{ csrf_field() }}
					<button type="submit" class="btn btn-success btn-block">
						<i class="glyphicon glyphicon-log-out"></i>&nbsp;{{ trans('user.logout') }}
					</button>
				</form>
			</li>
		@endif
	</ul>
</li>