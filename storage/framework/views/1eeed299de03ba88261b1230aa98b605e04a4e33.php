<?php $__env->startSection('content'); ?>
   <div class="row">
        <div class="col-lg-6">
            <form class="form-vertical" role="form" method="post" action="#">
                <div class="form-group">
                    <label for="email" class="control-label">Мэйл хаяг</label>
                    <input type="text" name="email" class="form-control" id="email" value="">
                </div>
                <div class="form-group">
                    <label for="username" class="control-label">Хэрэглэгчийн нэр</label>
                    <input type="text" name="username" class="form-control" id="username" value="">
                </div>
                <div class="form-group">
                    <label for="password" class="control-label">Нууц үг</label>
                    <input type="password" name="password" class="form-control" id="password">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-default">Бүртгүүлэх</button>
                </div>
            </form>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('templates.default', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>