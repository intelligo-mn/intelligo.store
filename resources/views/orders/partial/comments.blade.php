@foreach ($comments as $comment)
<div class="panel @if ($order->seller_id == $comment->user_id) panel-warning @else @endif panel-success">
	<div class="panel-heading clearfix">
	    @if ($order->seller_id == $comment->user_id)
		    
		    <span class="glyphicon glyphicon-briefcase"></span>&nbsp;
	        {{ trans('store.show_order_details_view.seller_comment_at').': '.$comment->created_at }}
		    
	    @elseif ($order->user_id == $comment->user_id)
		    
		    <span class="glyphicon glyphicon-user"></span>&nbsp;
	        {{ trans('store.show_order_details_view.user_comment_at').': '.$comment->created_at }}
		    
	    @endif
	</div>
	<div class="panel-body">
	    <span class="text-left pull-left">
	        {{ $comment->comment }}
	    </span>
	</div>
</div>
@endforeach