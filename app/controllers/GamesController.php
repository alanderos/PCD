<?php

class GamesController extends \Phalcon\Mvc\Controller {

    public function indexAction() {
        //$games = new Games();
    }

    public function getgamesAction() {
        $this->view->disable();
        header("Content-type: application/json; charset=utf-8");
        $games = Games::find(array(
                    "order" => "points"
        ));
        echo json_encode($games->toArray());
    }

    public function getGameIdAction($id_user) {
        $this->view->disable();
        header("Content-type: application/json; charset=utf-8");
        $games = Games::findFirst($id_user);
        echo json_encode($games->toArray());
    }

    public function getGamesUserAction($id_user) {
        $this->view->disable();
        header("Content-type: application/json; charset=utf-8");
        header("Content-type: application/json; charset=utf-8");
        $games = Games::find($id_user, array(
                    "order" => "points"
        ));
        echo json_encode($games->toArray());
    }

    //-------------------------------------------
    public function getGamesUsersAction($id=null) {
        $this->view->disable();
        header("Content-type: application/json; charset=utf-8");
      
        $users=Users::find($id);
        $count=count($users);
        $userOutput=array();
        for($i=0;$i<$count;$i++){
            $user=$users[$i]->toArray();
            $user['games'] = $users[$i]->getGames(array(
                    "order" => "points"
        ))->toArray();
            array_push($userOutput,$user);
        }
        echo json_encode($userOutput);
        
        /*
        $phql = 'select Users.username as name,Users.country as country,'
                . 'Games.points as points,Games.created_at as date from Games,'
                . 'Users where Games.id_user = Users.id';
        $games = $this->modelsManager->executeQuery($phql, array(
            "order" => "points"
        ));
        echo json_encode($games->toArray());
         * 
         */
    }
    
    public function getAllGamesAction(){
        $this->view->disable();
        header("Content-type: application/json; charset=utf-8");
        $phql = 'select Users.username as name,Users.country as country,'
                . 'Games.points as points,Games.created_at as date from Games,'
                . 'Users where Games.id_user = Users.id order by Games.points';
        $games = $this->modelsManager->executeQuery($phql);
        echo json_encode($games->toArray());
                
    }

    //-------------------------------------------


    public function insertPointsAction($id_user, $points) {
        $this->view->disable();
        header("Content-type: application/json; charset=utf-8");
        $game= new Games();
        $game->id_user=$id_user;
        $game->points=$points;
        echo json_encode($game->create());
        
        /*
        $date = getdate();
        $date = ($date['mday']) . '/' . ($date['mon']) . '/' . ($date['year']);
        $phql = "INSERT INTO Games (id_user, points, created_at) VALUES (:userid:, :points:, :date:)";
        $this->modelsManager->executeQuery($phql, array(
            'userid' => $id_user,
            'points' => $points,
            'date' => $date
                )
        )
         * 
         */
    }

    


}
