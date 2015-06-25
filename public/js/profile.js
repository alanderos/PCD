/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var PersonalProfile = function () {
    var este = this;
    this.listaGlobal;
    this.listaPersonal;
    this.id_user = 1;
    function insertaPuntuacion(usuario, puntuacion, lugar, fecha, $contenedor) {
        var $div = $("<div>", {class: "puntuacionDiv"});
        var $usuario = $("<div>", {text: usuario, class: "campos"});
        var $puntuacion = $("<div>", {text: puntuacion, class: "campos"});
        var $lugar = $("<div>", {text: lugar, class: "campos"});
        var $fecha = $("<div>", {text: fecha, class: "campos"});
        $div.append($usuario, $puntuacion, $lugar, $fecha);
        $contenedor.append($div);
    }

    this.init = function () {
        var $header = $("header");
        $header.append($("<span>", {text: "Nombre del jugador"}), $("<span>", {text: " Puntuacion Maxima:12312312"}));
        llenaPuntuacionPeronal();

        console.log("Hola");
        ajax("POST"
                , "games/getGamesUsers", null,
                llenaPuntuacionGlobales
                , function (data) {
                    console.error(data);

                });
        ajax("POST", "games/getgamesuser", {id_user: este.id_user}, llenaPuntuacionPeronal, function (data) {
            console.error(data);
        });

    };
    function llenaPuntuacionPeronal(data) {
        console.log(data, "----");
        este.listaPersonal = data;
        insertaPuntuacion("Jugador: ", "Puntuacion: ", "Procedencia: ", "Fecha:", $("#contenedorPersonal"));
        for (var i = 0; i < 10; i++) {
            insertaPuntuacion("Alejandro", 123123123, "Mexico  Ags", "10/12/2015", $("#contenedorPersonal"));
            console.log("Hola no.", i);
        }
    }

    function llenaPuntuacionGlobales(data) {
        console.log(data, "----", data.length);
        este.listaGlobal = data;
        insertaPuntuacion("Jugador: ", "Puntuacion: ", "Procedencia: ", "Fecha:", $("#contenedorGlobal"));
//        for (var i = 0; i < data.length; i++) {
//            insertaPuntuacion(data[i].name, data[i].points, data[i].country, data[i].date, $("#contenedorGlobal"));
//            //console.log("Hola no.", i);
//        }
    }



};