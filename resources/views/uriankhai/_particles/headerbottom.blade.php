<div class="posts--filter-bar style--1 hidden-xs">
    <div class="container">
        <ul class="nav">
            <li>
                <a href="#"> <i class="fa fa-star-o"></i> <span>Featured News</span> </a>
            </li>
            <li>
                <a href="#"> <i class="fa fa-heart-o"></i> <span>Most Popular</span> </a>
            </li>
            <li>
                <a href="#"> <i class="fa fa-fire"></i> <span>Hot News</span> </a>
            </li>
            <li>
                <a href="#"> <i class="fa fa-flash"></i> <span>Trending News</span> </a>
            </li>
            <li>
                <a href="#"> <i class="fa fa-eye"></i> <span>Most Watched</span> </a>
            </li>
        </ul>
    </div>
</div>
<div class="news--ticker">
    <div class="container">
        <div class="title">
            <h2>Breaking news</h2>
        </div>
        <div class="news-updates--list" data-marquee="true">
            <ul class="nav">
                @foreach($lastNews as $item)
                    <li>
                        <h3 class="h3"><a href="{{ makeposturl($item) }}">{{ $item->title }}</a></h3> 
                    </li>
                @endforeach
            </ul>
        </div>
    </div>
</div>