<?php


class GamesController extends \Phalcon\Mvc\Controller
{

    public function indexAction()
    {
        //$games = new Games();
        
    }
    
    public function getgamesAction(){
        $this->view->disable();
        header("Content-type: application/json; charset=utf-8");
        $games =  Games::find(array(
            "order" => "points" 
        ));
        echo json_encode($games->toArray());
    }
    
    public function getGameIdAction($id_user){
        $this->view->disable();
        header("Content-type: application/json; charset=utf-8");
        $games =  Games::findFirst($id_user);
        echo json_encode($games->toArray());
    }

    public function insertGameAction($id_user,$points,$created_at){
        $this->view->disable();
    }
    
    //-------------------------------------------
    public function getGamesUsersAction()
    {	$phql = 'select Users.username as name,Users.country as country,'
                . 'Games.points as points,Games.created_at as date from Games,'
                . 'Users where Games.id_user = Users.id';
		$games = $this->modelsManager->executeQuery($phql);
                echo json_encode($games->toArray(array(
                    "order" => "points"
                )));
 
		
    }
 
    
    
    //-------------------------------------------
}

