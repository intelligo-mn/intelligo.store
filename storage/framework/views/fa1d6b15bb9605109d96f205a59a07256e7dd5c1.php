<?php if(Session::has('info')): ?>
    <div class"alert alert-info" role="alert">
        <?php echo e(Session::get('info')); ?>

    
    </div>

<?php endif; ?>