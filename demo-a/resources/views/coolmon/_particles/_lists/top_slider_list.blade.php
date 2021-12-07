<li>
    <div class="right-content">
        <span class="category"><a class="cat-link" href="blog.html">Business</a></span> 
        <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"> </i>{{ $item->created_at->diffForHumans() }}</span>
        <h3><a href="{{ makeposturl($item) }}">{{ $item->title }}</a></h3>
    </div>
    <div class="right-image"><a href="blog-single.html"><img src="{{ makepreview($item->thumb, 'b', 'posts') }}" alt="{{ $item->title }}"></a></div>
</li>