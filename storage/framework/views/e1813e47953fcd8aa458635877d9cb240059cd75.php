<?php $__env->startSection('content'); ?>
    <div class="row">
        <div class="col-lg-6">
            <form role="form" action="#" method="post">
                <div class="form-group">
                    <textarea placeholder="What's up Toroo?" name="status" class="form-control" rows="2"></textarea>
                </div>
                <button type="submit" class="btn btn-default">Яг одоо юу бодож байна</button>
            </form>
            <hr>
        </div>
    </div>
    
    <div class="row">
        <div class="col-lg-5">
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('templates.default', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>