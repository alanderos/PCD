/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function ajax(type, url, data, succes, error) {
        $.ajax({
            type: type,
            url: url,
            contentType: "json",
            data: data,
            success: succes,
            error: error
        });
    }