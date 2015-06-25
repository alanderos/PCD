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
        $games = Games::find($id_user,array(
            "order" => "points"
        ));
        echo json_encode($games->toArray());
    }

    public function insertGameAction($id_user, $points, $created_at) {
        $this->view->disable();
    }

    //-------------------------------------------
    public function getGamesUsersAction() {
        $this->view->disable();
        $phql = 'select Users.username as name,Users.country as country,'
                . 'Games.points as points,Games.created_at as date from Games,'
                . 'Users where Games.id_user = Users.id';
        $games = $this->modelsManager->executeQuery($phql, array(
            "order" => "points"
        ));
        echo json_encode($games->toArray());
    }

    //-------------------------------------------


    public function insertPointsAction($id_user,$points) {
        $this->view->disable();
        $date = getdate();
        $date = ($date['mday']).'/'.($date['mon']).'/'.($date['year']);
        $phql = "INSERT INTO Games (id_user, points, created_at) VALUES (:userid:, :points:, :date:)";
        $this->modelsManager->executeQuery($phql, array(
            'userid' => $id_user,
            'points' => $points,
            'date' => $date
                )
        );
    }

}
