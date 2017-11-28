@extends("_admin.adminapp")
@section("content")
        <!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        {{ trans('admin.Categories') }}
        <small>{{ trans('admin.Maganeyourcategories') }}</small>
    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> {{ trans('admin.dashboard') }}</a></li>
        <li class="active">{{ trans('admin.Categories') }}</li>
    </ol>
</section>

<section class="content">
    <div class="row">
        <div class="col-md-8">
            @foreach($categories as $ci => $categorys)
            <div class="nav-tabs-custom">
                <ul class="nav nav-tabs pull-right">

                    <li class="pull-left header"><i class="fa fa-{{ $categorys->icon }}"></i> <b>{{ $categorys->name }}</b> @if($categorys->disabled==1) <span class="pull-right badge bg-red" data-toggle="tooltip" data-original-title="Deactivated on Plugins" STYLE="margin-top:7px;margin-left:10px">DISABLED</span>  @endif
                    <li class="pull-right header">
                     <a href="categories?edit={{ $categorys->id }}" class="btn btn-success" style="    display: inline-block;padding:0"><i class="fa fa-edit"></i> {{ trans('admin.edit') }}</a>
                     @if($categorys->main == 2)<a href="categories/delete/{{ $categorys->id }}" class="btn btn-success" style="  display: inline-block;padding:0"><i class="fa fa-trash"></i> {{ trans('admin.delete') }}</a>@endif
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="tab_{{ $ci }}-1">

                        @include('_admin._particles.categories._categorylist', ['altcategories' => $categorys])

                    </div><!-- /.tab-pane -->

                </div>
              </div>

            @endforeach


                                   </div><!-- /.col -->
        <div class="col-md-4">
            <div class="box ">
                <div class="nav-tabs-custom">
                    @if(!isset($category->id))
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#fa-icons" data-toggle="tab" aria-expanded="true">{{ trans('admin.AddMainCategory') }}</a></li>
                        <li class=""><a href="#glyphicons" data-toggle="tab" aria-expanded="false">{{ trans('admin.AddSubCategory') }}</a></li>
                    </ul>
                    @endif
                    <div class="tab-content">
                        <!-- Font Awesome Icons -->
                        <div class="tab-pane @if(isset($category->id)) @if($category->main==1 or $category->main==2) active @endif @else active @endif" id="fa-icons">
                            <!-- form start -->
                            {!! Form::open(array('action' => array('Admin\CategoriesController@addnew'), 'method' => 'POST')) !!}
                            <div class="box-body" style="padding:20px">
                                <input type="hidden" name="id" value="{{ isset($category->id) ? $category->id : null }}">
                                <div class="form-group">
                                    {!! Form::label('order',  trans('admin.Order') ) !!}
                                    {!! Form::text('order',  isset($category->order) ? $category->order : null, ['id' => 'order', 'class' => 'form-control input-lg', 'placeholder' => trans('admin.Entercategoryname') ]) !!}
                                </div>
                                <div class="form-group">
                                    {!! Form::label('name',trans('admin.Categoryname')) !!}
                                    {!! Form::text('name',  isset($category->name) ? $category->name : null, ['id' => 'name', 'class' => 'form-control input-lg', 'placeholder' => trans('admin.Entercategoryname') ]) !!}
                                </div>
                                <div class="form-group">
                                    {!! Form::label('name_slug',trans('admin.CategorySlug')) !!}
                                    {!! Form::text('name_slug',  isset($category->name_slug) ? $category->name_slug : null, ['id' => 'name_slug', 'class' => 'form-control input-lg', 'placeholder' => trans('admin.Entercategoryslug') ]) !!}
                                </div>
                                <div class="form-group">
                                    {!! Form::label('posturl_slug',trans('admin.PostUrlSlug')) !!}
                                    {!! Form::text('posturl_slug',  isset($category->posturl_slug) ? $category->posturl_slug : null, ['id' => 'posturl_slug', 'class' => 'form-control input-lg', 'placeholder' => trans('admin.Enterpoststitleslug')]) !!}
                                </div>
                                <div class="form-group">
                                    {!! Form::label('icon', 'icon') !!}
                                    {!! Form::text('icon',  isset($category->icon) ? $category->icon : null, ['id' => 'icon', 'class' => 'form-control input-lg', 'placeholder' => trans('admin.Enterpoststitleslug')]) !!}
                                </div>
                                <div class="form-group">
                                    {!! Form::label('description',trans('admin.CategoryDescription')) !!}
                                    {!! Form::textarea('description', isset($category->description) ? $category->description : null, ['id' => 'description', 'class' => 'form-control']) !!}
                                </div>
                                @if(isset($category->id)) @if($category->main==2)
                                <div class="form-group">
                                    {!! Form::label('disabled', trans('admin.disable')) !!}
                                    {!! Form::select('disabled', ['0' => trans('admin.no'), '1' => trans('admin.yes')], isset($category->disabled) ? $category->disabled : null , ['class' => 'form-control'])  !!}
                                </div>
                                @endif @endif
                            </div><!-- /.box-body -->

                            <div class="box-footer">
                                <button type="submit" class="btn btn-primary"> {{ trans('admin.Submit') }}</button>
                            </div>
                            {!! Form::close() !!}
                        </div>
                        <!-- /#fa-icons -->

                        <!-- glyphicons-->
                        <div class="tab-pane @if(isset($category->id)) @if(!$category->main==1 or !$category->main==2) active @endif @endif" id="glyphicons">

                            <!-- form start -->
                            {!! Form::open(array('action' => array('Admin\CategoriesController@addnew'), 'method' => 'POST')) !!}
                            <div class="box-body" style="padding:20px">
                                <input type="hidden" name="id" value="{{ isset($category->id) ? $category->id : null }}">

                                <div class="form-group">
                                    {!! Form::label('name',trans('admin.Categoryname')) !!}
                                    {!! Form::text('name',  isset($category->name) ? $category->name : null, ['id' => 'name', 'class' => 'form-control input-lg', 'placeholder' => trans('admin.Entercategoryname') ]) !!}
                                </div>
                                <div class="form-group">
                                    {!! Form::label('name_slug',trans('admin.CategorySlug')) !!}
                                    {!! Form::text('name_slug',  isset($category->name_slug) ? $category->name_slug : null, ['id' => 'name_slug', 'class' => 'form-control input-lg', 'placeholder' => trans('admin.Entercategoryslug') ]) !!}
                                </div>

                                <div class="form-group">
                                    {!! Form::label('description',trans('admin.CategoryDescription')) !!}
                                    {!! Form::textarea('description', isset($category->description) ? $category->description : null, ['id' => 'description', 'class' => 'form-control']) !!}
                                </div>
                                <div class="form-group">
                                    {!! Form::label('type',trans('admin.ContentType')) !!}
                                    {!! Form::select('type', $categories->lists('name', 'id'), isset($category->type) ? $category->type : null , ['class' => 'form-control'])  !!}
                                </div>


                            </div><!-- /.box-body -->

                            <div class="box-footer">
                                <button type="submit" class="btn btn-primary"> {{ trans('admin.Submit') }}</button>
                            </div>
                            {!! Form::close() !!}
                        </div>
                        <!-- /#ion-icons -->

                    </div>
                    <!-- /.tab-content -->
                </div>



            </div>

        </div><!-- /.col -->

    </div><!-- /.row -->

</section>
@endsection
@section("footer")

@endsection