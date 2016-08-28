@if(isset($tree)&&$tree)
	<li><a href="/wpanel/category/{{ $tree->id }}">{{ $tree->name }}</a></li>
	@if($tree->child)
		@include('categories.parents_tree', ['tree' => $tree->child])
	@endif
@elseif(isset($master))
<ol class="breadcrumb">
	@include('categories.parents_tree', ['tree' => $master])
	{{ $tree=NULL }}
</ol>
@endif
