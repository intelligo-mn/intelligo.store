<?php $__env->startSection('content'); ?>
    <div class="row">
        <div class="col-lg-6">
            <form role="form" action="<?php echo e(route('status.post')); ?>" method="post">
                <div class="form-group<?php echo e($errors->has('status') ? ' has-error' : ''); ?>">
                    <textarea placeholder="Юу бодож байна <?php echo e(Auth::user()->getFirstNameOrUsername()); ?> " 
                    name="status" class="form-control" rows="2">
                    </textarea>
                    <?php if($errors->has('status')): ?>
                        <span class="help-block">
                            <?php echo e($errors->first('status')); ?>

                        </span>
                    <?php endif; ?>
                </div>
                <button type="submit" class="btn btn-default">Статус шинэчлэх</button>
              <input type="hidden" name="_token" value= "<?php echo e(Session::token()); ?>"/>
       
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