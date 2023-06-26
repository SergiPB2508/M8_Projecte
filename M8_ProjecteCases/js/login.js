function loginUsuari(){

    let correuUsuari = document.getElementsByName('usuari').item(0).value;
    let passwd = document.getElementsByName('contra').item(0).value;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {

       response = xmlhttp.responseText;
       let correu = this.response;
    //    console.log(correu)
       if(correu == "error"){
        alert("Usuari/Contrasenya incorrectes.");
       } else{
           location.href="llistat.html";
           sessionStorage.setItem(1, correu);
       }

    };
    xmlhttp.open("GET", "http://www.damcostafreda04.cat/M8_ProjecteCases/php/consultaLogin.php?correu="+correuUsuari+"&contrasenya="+passwd);
    xmlhttp.send();

}


function registrarUsuariCasa(){
    let nom = document.getElementsByName('nom').item(0).value;
    let cognom = document.getElementsByName('cognom').item(0).value;
    let correu = document.getElementsByName('correu').item(0).value;
    let contrasenya = document.getElementsByName('contrasenya').item(0).value;
    let Localitat = document.getElementsByName('localitat').item(0).value;
    let capacitatPersones = document.getElementsByName('num_persones').item(0).value;
    let img = document.getElementsByName('inputFile').item(0).value.substring(12);
    // let img = "img.png";

    // let pathIMG = pathFile();

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {

       response = xmlhttp.responseText;
       let resposta = this.response;
       console.log(resposta)
       if(resposta == "error"){
        alert("Falta alguna dada per introduir");
       } else{
            alert("Registrat de manera correcta", "Iniciar sessió amb el seu correu + passwd");
           location.href="index.html";
       }

    };
    xmlhttp.open("GET", "http://www.damcostafreda04.cat/M8_ProjecteCases/php/insertLogin.php?nom="+nom+"&cognom="+cognom+"&correu="+correu+"&contrasenya="+contrasenya+"&localitat="+Localitat+"&num_p="+capacitatPersones+"&imatge="+img);
    xmlhttp.send();
    
}

var myForm = document.getElementById('register-form');
myForm.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent default form submission behavior
  var formData = new FormData(this); // create a new FormData object from the form data
  var xhr = new XMLHttpRequest(); // create a new XMLHttpRequest object
  xhr.open('POST', 'http://www.damcostafreda04.cat/M8_ProjecteCases/php/uploadImg.php'); // specify the URL to your server-side script that handles the file upload
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText); // handle successful upload response
    } else {
      console.log('Error: ' + xhr.status); // handle error response
    }
  };
  xhr.send(formData); // send the FormData object to the server
});
