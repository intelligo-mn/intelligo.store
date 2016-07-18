<?php $__env->startSection('content'); ?>
    <div class="row">
    <div class="col-lg-5">
        <?php echo $__env->make('user.partials.userblock', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <hr>
    </div>
    <div class="col-lg-4 col-lg-offset-3">
        <h4><?php echo e($user->getFirstNameOrUsername()); ?> таны найзууд</h4>
        
        <?php if(!$user->friends()->count()): ?>
            <p><?php echo e($user->getFirstNameOrUsername()); ?> найз байхгүй байна.</p>
        <?php else: ?>
            <?php foreach($user->friends() as $user): ?>
                <?php echo $__env->make('user/partials/userblock', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('templates.default', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>