<!DOCTYPE html>
<html>
    <head>
        <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">-->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Phalcon PHP Framework</title>
        <base href="/PDC/"/>
    
        <?php echo $this->tag->stylesheetLink('css/cssPlantilla.css'); ?>
        <?php echo $this->tag->javascriptInclude('js/jquery-2.1.4.min.js'); ?>
        <?php echo $this->tag->stylesheetLink('css/cssProfile.css'); ?>
        <?php echo $this->tag->javascriptInclude('js/profile.js'); ?>
    
    </head>
    <body>
        <?php echo $this->getContent(); ?>
    </body>
</html>
