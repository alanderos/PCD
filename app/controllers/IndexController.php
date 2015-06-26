<?php

class IndexController extends ControllerBase
{

   public function indexAction() {
        
            $this->view->setVar('error',$this->request->get('error'));
       
    }

    public function getUserAction() {
        if ($this->request->isPost() == true) {
            $this->view->disable();
            //consigue el valor que se encuentra en la casilla de username 
            $username = $this->request->getPost('email');//,array('striptags', 'alphanum', 'trim'));
            header("Content-type: application/json; charset=utf-8");
            //consulta para ver si existe el usuario
            $password = $this->request->getPost('contrasena');
            $founduser = Users::findFirstByusername($username);
            //if ($){}
 
            
            if (!$founduser) {
               //Falta mandar un mensaje de que no se encontro el usuario :(
               return $this->response->redirect('/sesion/?error=No se encontro el usuario');
            } else {
                
                if(!$password){
                    //Mensaje para decir que no hay contraseña                
                    return $this->response->redirect('/sesion/?error=No hay contraseña');
                }else{
                    if($password!=$founduser->password){
                        //Falta mensaje para decir que la contraseña no esta bien
                        return $this->response->redirect('/sesion/?error=La contraseña no coincide');
                    }else{
                        $aux = $founduser->id;
                        $this->session->set("user-name", $aux);
                        return $this->response->redirect('/profile/');
                    }
                }
            }
        }
        
        
    }
    
    public function logoutAction()
    {
		$this->view->disable();
        //Destroy the whole session
        $this->session->destroy();
        return $this->response->redirect('/');
    }


}

