<?php

class IndexController extends ControllerBase
{

    public function indexAction()
    {
        $this->view->disable();
        if ($this->session->has("user-name")) {
            //Retrieve its value
            $name = $this->session->get("user-name");
            echo "La sesion actual la tiene: " .$name;
        }else{
            echo "no existe sesion inicializada";
        }
    }

}

