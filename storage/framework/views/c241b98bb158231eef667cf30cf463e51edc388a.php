<?php $__env->startSection('content'); ?>

<div class="row">
    <div class="col-lg-6">
        <form class="form-vertical" role="form" method="post" action="<?php echo e(route('auth.signin')); ?>">
            <div class="form-group <?php echo e($errors->has('email') ? ' has-error' : ''); ?>">
                <label for="email" class="control-label">И-мэйл</label>
                <input type="text" name="email" class="form-control" id="email">
                <?php if($errors->has('email')): ?>
                    <span class="help-block"><?php echo e($errors->first('email')); ?>

                    </span>
                <?php endif; ?>
            </div>
            <div class="form-group <?php echo e($errors->has('password') ? ' has-error' : ''); ?>">
                <label for="password" class="control-label">Нууц үг</label>
                <input type="password" name="password" class="form-control" id="password">
                <?php if($errors->has('password')): ?>
                    <span class="help-block"><?php echo e($errors->first('password')); ?>

                    </span>
                <?php endif; ?>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="remember"> Намайг сана
                </label>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-default">Нэвтрэх</button>
            </div>
            <input type="hidden" name="_token" value= "<?php echo e(Session::token()); ?>"/>
        </form>
    </div>
</div>   
<?php $__env->stopSection(); ?>

<?php echo $__env->make('templates.default', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>