<?php $__env->startSection('content'); ?>
    <h3>Таны хайсан утга "<?php echo e(Request::input('query')); ?>"</h3>
    
    
    <?php if(!$users->count()): ?>
    <p>Үр дүн олдсонгүй<p>
    <?php else: ?>
        <div class="row">
            <div class="col-lg-12">
                <?php foreach($users as $user): ?>
                    <?php echo $__env->make('user/partials/userblock', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                <?php endforeach; ?>
            </div>
        </div>
    <?php endif; ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('templates.default', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>