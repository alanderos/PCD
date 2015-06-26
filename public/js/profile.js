/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var PersonalProfile = function () {
    var este = this;
    this.listaGlobal;
    this.listaPersonal;
    this.id_user;
    function insertaPuntuacion(usuario, puntuacion, lugar, fecha, $contenedor) {
        var $div = $("<div>", {class: "puntuacionDiv"});
        var $usuario = $("<div>", {text: usuario, class: "campos"});
        var $puntuacion = $("<div>", {text: puntuacion, class: "campos"});
        var $lugar = $("<div>", {text: lugar, class: "campos"});
        var $fecha = $("<div>", {text: fecha, class: "campos"});
        $div.append($usuario, $puntuacion, $lugar, $fecha);
        $contenedor.append($div);
    }
    
    function getUser(id,data){
        for(var i=0;i<data.length;i++){
            if(data[i].id==id){
                return data[i];
            }
        }
    }
    
    

    this.init = function () {
        este.id_user=userName;
        console.log("Hola");
        ajax("POST",
                "games/getAllGames",null,
                llenaPuntuacionGlobales
                , function (data) {
                    console.error(data);

                });
        ajax("POST", "games/getGamesUsers", {id: este.id_user}, llenaPuntuacionPeronal, function (data) {
            console.error(data);
        });

    };
    function llenaPuntuacionPeronal(data) {
        este.listaPersonal = data;
        var user =getUser(este.id_user,data);
        var games =user.games
        var $header = $("header");
        $header.append($("<span>", {id:"nombreUsuario",text: "Nombre: " +user.username}), $("<span>", {id:"puntuacionMaxima",text: " Puntuacion Maxima: "+games[games.length-1].points}));
        console.log(data, "----",user);
        var cantidad;
        if(games.length<10){
            cantidad=games.length-1;
        }else{
            cantidad=10;
        }
        insertaPuntuacion("Jugador: ", "Puntuacion: ", "Procedencia: ", "Fecha:", $("#contenedorPersonal"));
        for (var i = cantidad; i >= 0; i--) {
            insertaPuntuacion(user.username, games[i].points, user.country, games[i].created_at, $("#contenedorPersonal"));
            //console.log("Hola no.", i);
        }
    }

    function llenaPuntuacionGlobales(data) {
        console.log(data, "----", data.length);
        este.listaGlobal = data;
        hola=data;
        var cantidad;
        if(data.length<20){
            cantidad=data.length-1;
        }else{
            cantidad=20;
        }
        
        insertaPuntuacion("Jugador: ", "Puntuacion: ", "Procedencia: ", "Fecha:", $("#contenedorGlobal"));
        for (var i = cantidad; i >= 0; i--) {
            insertaPuntuacion(data[i].name, data[i].points, data[i].country, data[i].date, $("#contenedorGlobal"));
            //console.log("Hola no.", i);
        }
    }



};
