@extends('layouts.master')
@section('page_class')@parent- {{ trans('about.contact_us') }}@stop
@section('navigation')
  @include('partial.navigation_basic')
@stop
@section('panel_left_content')
<div class="list-group">
  <?php $menu=\Menu::backend(true);?>
  @foreach ($menu as $item)
  <a class="list-group-item {{isset($item['class'])?$item['class']:''}} {{ Utility::active($item['route']) }}" href='{{$item['route']}}'>@if(isset($item['icon']))<span class="{{$item['icon']}}"></span>@endif {{$item['text']}} @if(isset($item['cont'])&&$item['cont']>0)<span class="badge pull-right">{{$item['cont']}}</span>@endif </a>
  @endforeach
</div>
@stop
@section('footer')
{{ trans('company.powered_by') }}&nbsp;<a target="_blank" href="{{ trans('company.powered_url') }}">{{ trans('company.powered_brand') }}</a>
@stop