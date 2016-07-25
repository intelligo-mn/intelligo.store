<?php $__env->startSection('content'); ?>
<div class="row">
    <div class="col-lg-6">
        <h3>Таны найзууд</h3>
        <?php if(!$friends->count()): ?>
            <p>Таньд найз байхгүй байна.</p>
        <?php else: ?>
            <?php foreach($friends as $user): ?>
                <?php echo $__env->make('user.partials.userblock', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>
    <div class="col-lg-6">
        <h4>Найзын хүсэлт</h4>
        <?php if(!$requests->count()): ?>
            <p>Таньд найзын хүсэлт ирээгүй байна.</p>
        <?php else: ?>
            <?php foreach($requests as $user): ?>
                <?php echo $__env->make('user.partials.userblock', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('templates.default', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>