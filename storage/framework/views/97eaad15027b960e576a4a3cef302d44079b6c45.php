<div class="media">
    <a class="pull-left" href="#">
        <img class="media-object" alt="<?php echo e($user->getNameOrUsername()); ?>" src="
        <?php echo e($user->getAvatarUrl()); ?>

        ">
    </a>
    <div class="media-body">
        <h4 class="media-heading"><a href="#"><?php echo e($user->getNameOrUsername()); ?></a></h4>
        
        <?php if($user->location): ?>
            <p>
                <?php echo e($user->location); ?>

            </p>
        <?php endif; ?>
    </div>
</div>