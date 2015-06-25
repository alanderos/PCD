/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var PersonalProfile = function () {
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
        $header.append($("<span>", {text: "Nombre del jugador    " + "Puntuacion Maxima:12312312"}))
        llenaPuntuacionPeronal();
        llenaPuntuacionGlobales();
        console.log("Hola");
//        ajax("GET"
//                , "games/getgames", null,
//        function (data) {
//            console.log(data);
//        }
//        , function (data) {
//            console.error(data);
//            
//        }
//        );
    };
    function llenaPuntuacionPeronal() {
        insertaPuntuacion("Jugador: ", "Puntuacion: ", "Procedencia: ", "Fecha:", $("#contenedorPersonal"));
        for (var i = 0; i < 10; i++) {
            insertaPuntuacion("Alejandro", 123123123, "Mexico  Ags", "10/12/2015", $("#contenedorPersonal"));
            console.log("Hola no.", i);
        }
    }

    function llenaPuntuacionGlobales() {
        insertaPuntuacion("Jugador: ", "Puntuacion: ", "Procedencia: ", "Fecha:", $("#contenedorGlobal"));
        for (var i = 0; i < 30; i++) {
            insertaPuntuacion("Alejandro", 123123123, "Mexico  Ags", "10/12/2015", $("#contenedorGlobal"));
            console.log("Hola no.", i);
        }
    }

    

};