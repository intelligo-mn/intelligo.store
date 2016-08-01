<li class="item">
    <div class="product-img" style="overflow: hidden;width:50px;">
        <img src="/upload/media/posts/{{ $item->thumb }}-s.jpg" width="auto" style="   margin-left:-10px; width: auto;">
    </div>
    <div class="product-info">
        <a href="/{{ $item->type}}/{{$item->slug }}" target="_blank" class="product-title">
            {{ $item->title }}
        </a>
        <span class="product-description" style="color:#ccc">
         <i class="fa fa-user" style="font-size:11px"></i> <a href="/profile/{{ $item->user->username_slug }}" target="_blank" style="color:#ccc">{{ $item->user->username }}</a>  <i class="fa fa-clock-o" style="margin-left:7px;font-size:11px"></i> {{ $item->created_at->diffForHumans() }}
        </span>
    </div>
</li><!-- /.item -->