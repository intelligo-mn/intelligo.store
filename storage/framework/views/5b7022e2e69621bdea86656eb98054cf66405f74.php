<?php $__env->startSection('content'); ?>
<div class="row">
    <div class="col-lg-6">
        <h3>Таны найзууд</h3>

       <!-- List of friends -->
    </div>
    <div class="col-lg-6">
        <h4>Найзын хүсэлт</h4>
        
        <!-- List of friend requests -->
    </div>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('templates.default', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>