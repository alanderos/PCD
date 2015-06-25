<!DOCTYPE html>
<html>
    <head>
        <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">-->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Phalcon PHP Framework</title>
        <base href="/PCD/"/>
    {% block library %}
        {{ stylesheet_link('css/cssPlantilla.css') }}
        {{ javascript_include('js/jquery-2.1.4.min.js') }}
        {{ stylesheet_link('css/cssProfile.css') }}
        {{ javascript_include('js/general.js') }}
        {{ javascript_include('js/profile.js') }}
        
    {% endblock %}
    </head>
    <body>
        {{ content() }}
    </body>
</html>
