<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Моду демо хувилбар</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    </head>
    
    <body>
        <?php echo $__env->make('templates.partials.navigation', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <div class="container">
            <?php echo $__env->make('templates.partials.alerts', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
            <?php echo $__env->yieldContent('content'); ?>
        </div>
    </body>
</html>