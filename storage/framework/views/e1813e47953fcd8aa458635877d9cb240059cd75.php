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
            <?php if(!$statuses->count()): ?>
                <p>Мэдээлэл байхгүй байна</p>
            <?php else: ?>
                <?php foreach($statuses as $status): ?>
                <div class="media">
                    <a class="pull-left" href="<?php echo e(route('profile.index', ['username' => $status->user->username])); ?>">
                        <img class="media-object" alt="<?php echo e($status->user->getNameOrUsername()); ?>"
                        src="<?php echo e($status->user->getAvatarUrl()); ?>">
                    </a>
                    <div class="media-body">
                        <h4 class="media-heading">
                        <a href="<?php echo e(route('profile.index', ['username' => $status->user->username])); ?>">                    
                            <?php echo e($status->user->getNameOrUsername()); ?>

                        </a></h4>
                        <p><?php echo e($status->body); ?></p>
                        <ul class="list-inline">
                            <li><?php echo e($status->created_at->diffForHumans()); ?></li>
                            <li><a href="#">Таалагдлаа</a></li>
                            <li>10 таалагдсан</li>
                        </ul>
                
                        <div class="media">
                            <a class="pull-left" href="#">
                                <img class="media-object" alt="" src="">
                            </a>
                            <div class="media-body">
                                <h5 class="media-heading"><a href="#">Ганаа</a></h5>
                                <p>Тиймээ !</p>
                                <ul class="list-inline">
                                    <li>8 минутын өмнө.</li>
                                    <li><a href="#">таалалгдлаа</a></li>
                                    <li>4 таалагдсан</li>
                                </ul>
                            </div>
                        </div>
                
                        <form role="form" action="#" method="post">
                            <div class="form-group">
                                <textarea name="reply-1" class="form-control" rows="2" placeholder="Reply to this status"></textarea>
                            </div>
                            <input type="submit" value="Reply" class="btn btn-default btn-sm">
                        </form>
                    </div>
                </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('templates.default', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>