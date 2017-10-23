@if($altcategories!==null)
<table class="table table-striped">
    <tbody><tr>
        <th style="width: 10px">#</th>
        <th>{{ trans("admin.CatName") }}</th>
        <th>{{ trans("admin.Slug") }}</th>
        <th>{{ trans("admin.Createdat") }}</th>
        <th style="width: 140px">{{ trans("admin.Actions") }}</th>
    </tr>

    @foreach(\App\Categories::where('type', $altcategories->id)->get() as  $i => $cat)

            <tr>
                <td>{{ ceil($i+1) }}.</td>
                <td>{{ $cat->name }}</td>
                <td>{{ $cat->name_slug }}</td>
                <td>{{ $cat->created_at }}</td>
                <td>

                    <a href="categories?edit={{ $cat->id }}" class="btn btn-sm btn-success" role="button" data-toggle="tooltip" title="" data-original-title="{{ trans("admin.edit") }}"><i class="fa fa-edit"></i></a>

                    <a class="btn btn-sm btn-danger permanently" href="{{ url('admin/categories/delete/'.$cat->id) }}" role="button" data-toggle="tooltip" data-original-title="{{ trans("admin.delete") }}"><i class="fa fa-times"></i></a>


                </td>
            </tr>
        @endforeach

    </tbody>
</table>
@endif