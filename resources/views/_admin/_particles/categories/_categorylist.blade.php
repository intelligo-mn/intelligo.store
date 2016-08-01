@if($categories!==null)
<table class="table table-striped">
    <tbody><tr>
        <th style="width: 10px">#</th>
        <th>Category</th>
        <th>Slug</th>
        <th>Created at</th>
        <th style="width: 140px">Actions</th>
    </tr>

        @foreach($categories as $i => $category)
            <tr>
                <td>{{ ceil($i+1) }}.</td>
                <td>{{ $category->name }}</td>
                <td>{{ $category->name_slug }}</td>
                <td>{{ $category->created_at }}</td>
                <td>

                    <a href="categories?edit={{ $category->id }}" class="btn btn-sm btn-success" role="button" data-toggle="tooltip" title="" data-original-title="Edit list"><i class="fa fa-edit"></i></a>

                    <a class="btn btn-sm btn-danger permanently" href="{{ url('admin/categories/delete/'.$category->id) }}" role="button" data-toggle="tooltip" data-original-title="Delete list"><i class="fa fa-times"></i></a>


                </td>
            </tr>
        @endforeach

    </tbody>
</table>
@endif