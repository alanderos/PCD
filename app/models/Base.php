<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Base
 *
 * @author alx
 */
abstract class Base extends \Phalcon\Mvc\Model {
    //put your code here
    public function create($data = null, $whiteList = null) {
        if($result = parent::create($data, $whiteList)){
            return $result;
        }else{
            foreach($this->getMessages() as $message){
                echo $message->getMessage();
            }
            return $result;
        }
    }

}
