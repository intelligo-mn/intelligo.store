@extends("_admin.adminapp")
@section("content")
        <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        {{ trans('admin.Plugins') }}
        <small>{{ trans('admin.AllmoduPlugins') }}</small>
    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> {{ trans('admin.dashboard') }}</a></li>
        <li class="active">{{ trans('admin.Plugins') }}</li>
    </ol>
</section>

<!-- Main content -->
<section class="content">

<div class="row">
    @foreach($plugins as $plugin)
        <?php $p_status = getcong('p-'.$plugin['p_code']) =='on' ? 'actived' : 'notactived' ?>
       @if($p_status=='actived')
        <div class="col-lg-4 col-md-6 col-xs-12">
        @include('_admin._particles.plugin_box', $plugin)
        </div>
        @endif
    @endforeach
</div>
<h2 style="color: #aaa;opacity: 0.7">{{ trans('admin.NotInstalled') }}</h2>
<div class="row">
@foreach($plugins as $plugin)
        <?php $p_status = getcong('p-'.$plugin['p_code']) =='on' ? 'actived' : getcong('p-'.$plugin['p_code']) =='on' ? 'actived' : 'notactived' ?>
        @if($p_status == 'notactived')
            <div class="col-lg-4 col-md-6 col-xs-12">

            @include('_admin._particles.plugin_box', $plugin)
            </div>
        @endif
@endforeach

</div>

</section><!-- /.content -->
@endsection
@section('footer')

@endsection