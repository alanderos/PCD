<?php

class ProfileController extends \Phalcon\Mvc\Controller
{

  public function indexAction()
    {
        
        if ($this->session->has("user-name")) {
            //Retrieve its value
            $name = $this->session->get("user-name");
            $this->view->setVar('userName',$name);
            echo "La sesion actual la tiene: " .$name;
        }else{
            echo "no existe sesion inicializada";
        }
    }

}

