<?php

class RegisterController extends \Phalcon\Mvc\Controller {

    public function indexAction() {
        $this->view->setVar('error',$this->request->get('error'));
    }

    public function saveAction() {
        if ($this->request->isPost() == true) {
            //creamos instancia del modelo users
            $user = new Users();
            //obtenemos los campos del formulario pasando los filtros que queremos
            $user->name = $this->request->getPost('name', array('striptags', 'alphanum', 'trim'));
            $user->email = $this->request->getPost('email', array('striptags', 'email', 'trim'));
            $user->username = $this->request->getPost('username', array('striptags', 'alphanum', 'trim'));
            $user->password = $this->request->getPost('password', array('striptags', 'alphanum', 'trim'));
            $user->lastname = $this->request->getPost('lastname', array('striptags', 'alphanum', 'trim'));
            $user->country = $this->request->getPost('country', array('striptags', 'alphanum', 'trim'));
            $user->gender = $this->request->getPost('gender', array('striptags', 'alphanum', 'trim'));
            //si el usuario no se guarda mostramos los errores
            if (!$user->save()) {
//                foreach ($user->getMessages() as $message) {
//                    $this->flash->error($message);
//                }
//                //con forward mandamos a la acción index con los errores del formulario
//                return $this->dispatcher->forward(array("action" => "index"));
                   return $this->response->redirect('/register/?error=Faltan datos por ingresar');
            }
            //en otro caso mostramos un mensaje conforme se ha registrado y limpiamos los campos del formulario
            else {
                $this->tag->setDefault('name', '');
                $this->tag->setDefault('email', '');
                $this->tag->setDefault('username', '');
                $this->tag->setDefault('password', '');
                $this->tag->setDefault('lastname', '');
                $this->tag->setDefault('country', '');
                $this->tag->setDefault('gender', '');
                //$this->flash->success("Te has registrado correctamente.");
                echo '<script language="javascript">';
                echo 'alert("Te has registrado correctamente.")';
                echo '</script>';
                return $this->response->redirect('/sesion/');
            }
        }
        //si no es una petición post
        else {
            $this->dispatcher->forward(array(
                "action" => "index"
            ));
        }
    }

}
