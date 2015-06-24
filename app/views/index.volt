<!DOCTYPE html>
<html>
    <head>
        <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">-->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Phalcon PHP Framework</title>
        <base href="/PDC/"/>
    {% block library %}
        {{ stylesheet_link('css/cssPlantilla.css') }}
        {{ stylesheet_link('css/cssFormulario.css') }}
    {% endblock %}
    </head>
    <body>
        {{ content() }}
    </body>
</html>
