<nav class="navbar navbar-default" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Моду</a>
        </div>
        <div class="collapse navbar-collapse">
            <?php if(Auth::check()): ?>
                <ul class="nav navbar-nav">
                    <li><a href="#">Мэдээлэл</a></li>
                    <li><a href="#">Найзууд</a></li>
                </ul>
                <form class="navbar-form navbar-left" role="search" action="#">
                    <div class="form-group">
                        <input type="text" name="query" class="form-control" placeholder="Хайх үгээ бич">
                    </div>
                    <button type="submit" class="btn btn-default">Хайх</button>
                </form>
            <?php endif; ?>
            <ul class="nav navbar-nav navbar-right">
                 <?php if(Auth::check()): ?>
                    <li><a href="#">Хэрэглэгчийн нэр</a></li>
                    <li><a href="#">Мэдээллээ шинэчлэх</a></li>
                    <li><a href="#">Гарах</a></li>
                <?php else: ?>
                    <li><a href="<?php echo e(route('auth.signup')); ?>">Бүртгүүлэх</a></li>
                    <li><a href="<?php echo e(route('auth.signin')); ?>">Нэвтрэх</a></li>
                <?php endif; ?>
            </ul>
        </div>
    </div>
</nav>