<?php

class UsersController extends \Phalcon\Mvc\Controller
{

    public function indexAction()
    {

    }
    public function insertUsersAction($userName, $password, $name, $lastname, $country, $gender) {
        $this->view->disable();
        $date = getdate();
        $date = ($date['mday']) . '/' . ($date['mon']) . '/' . ($date['year']);
        $phql = "INSERT INTO Users (username, password, name,lastname,country,gender) VALUES (:username:, :pass:, :name:,:last:,:country:,:gender:)";
        $this->modelsManager->executeQuery($phql, array(
            'username' => $userName,
            'pass' => $password,
            'name' => $name,
            'last' => $lastname,
            'country' => $country,
            'gender' => $gender
                )
        );
    }

}

