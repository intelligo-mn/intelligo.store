<?php $__env->startSection('content'); ?>
    <div class="row">
    <div class="col-lg-5">
        <?php echo $__env->make('user.partials.userblock', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <hr>
    </div>
    <div class="col-lg-4 col-lg-offset-3">
        <!-- Friends, friend requests -->
    </div>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('templates.default', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>