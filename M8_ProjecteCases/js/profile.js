addEventListener("DOMContentLoaded", ajax());


function ajax() {

    correu = sessionStorage.getItem(1);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {

       response = xmlhttp.responseText; 
       document.getElementById("main").innerHTML = response;

    };
    xmlhttp.open("GET", "http://www.damcostafreda04.cat/M8_ProjecteCases/php/consultaUser.php?correu="+correu);
    xmlhttp.send();

}

function actualitzarUser(){

    let correu = document.getElementsByName('correu').item(0).value;
    let nom = document.getElementsByName('nom').item(0).value;
    let cognom = document.getElementsByName('cognom').item(0).value;
    let contra = document.getElementsByName('contrasenya').item(0).value;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {

       response = xmlhttp.responseText;
       location.href="profile.html";
       console.log(response);

    };
    xmlhttp.open("GET", "http://www.damcostafreda04.cat/M8_ProjecteCases/php/actUser.php?correu="+correu+"&nom="+nom+"&cognom="+cognom+"&contra="+contra);
    xmlhttp.send();

}

function actualitzarCasa(){
    let correu = document.getElementsByName('correu').item(0).value;
    let localitat = document.getElementsByName('localitat').item(0).value;
    let num_p = document.getElementsByName('num_persones').item(0).value;
    let img = document.getElementsByName('imatge').item(0).value;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {

       response = xmlhttp.responseText; 
       console.log(response);

    };
    xmlhttp.open("GET", "http://www.damcostafreda04.cat/M8_ProjecteCases/php/actCasa.php?correu="+correu+"&loc="+localitat+"&num_p="+num_p+"&img="+img);
    xmlhttp.send();
}
