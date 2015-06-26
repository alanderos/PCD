<?php

class JugarController extends \Phalcon\Mvc\Controller
{

    public function indexAction()
    {
         $this->view->setVar('user_id',$this->session->get('user-name'));
    }

}

