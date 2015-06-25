<?php
header("Content-type: application/json; charset=utf-8");

class GamesController extends \Phalcon\Mvc\Controller
{

    public function indexAction()
    {
        //$games = new Games();
        
    }
    
    public function getgamesAction(){
        $this->view->disable();
        $games =  Games::find(array(
            "order" => "points" 
        ));
        $gamesA=[];
        foreach ($games as $game){
            array_push($gamesA, $game);
        }
        echo json_encode($gamesA);
    }
    
    public function getGameIdAction($id_user){
        $this->view->disable();
        $games =  Games::find(array(
            "id_user =  ".$id_user.""
        ));
        $gamesA=[];
        foreach ($games as $game){
            array_push($gamesA, $game);
        }
        echo json_encode($gamesA);
    }

    public function insertGameAction($id_user,$points,$created_at){
        $this->view->disable();
    }
}

