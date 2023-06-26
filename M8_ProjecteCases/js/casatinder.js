
// document.addEventListener("deviceready", ajax());
addEventListener("DOMContentLoaded", ajax());
addEventListener("DOMContentLoaded", function () {
  setInterval(function (){
      
  let correu = sessionStorage.getItem(1);
  let cases = document.getElementsByClassName('tarjetaCasa');
  
  for (let i = 0; i < cases.length; i++) {

    let element = cases[i].getAttribute('id'); 
    
    matchajax(correu,element, function (match) {

      if(match == 'si'){
        document.getElementById(element).querySelector(".fa-handshake-o").classList.remove("no_match");
        document.getElementById(element).querySelector(".fa-handshake-o").classList.add("match");
      } else if(match == 'no'){
        document.getElementById(element).querySelector(".fa-handshake-o").classList.remove("match");
        document.getElementById(element).querySelector(".fa-handshake-o").classList.add("no_match");
      }
    })

  }

},1000)});

function matchajax(correu, id, callback) {
  
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {

    callback(xmlhttp.responseText); 
    // let match = response;

    // console.log(match + " " +element);

    // if(match == 'si'){
    //   document.getElementById(element).querySelector(".fa-handshake-o").classList.remove("no_match");
    //   document.getElementById(element).querySelector(".fa-handshake-o").classList.add("match");
    // } else if(match == 'no'){
    //   document.getElementById(element).querySelector(".fa-handshake-o").classList.remove("match");
    //   document.getElementById(element).querySelector(".fa-handshake-o").classList.add("no_match");
    // }
  };
  xmlhttp.open("GET", "php/match.php?correu="+correu+"&id="+id,true);
  xmlhttp.send();
}

function ajax() {

  correu = sessionStorage.getItem(1);

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {

    response = xmlhttp.responseText; 
    document.getElementById("main").innerHTML = response;
    
    init();

  };
  xmlhttp.open("GET", "http://www.damcostafreda04.cat/M8_ProjecteCases/php/consultaCasesSwipe.php?correu="+correu);
  xmlhttp.send();
 
}

function init() {

  let tarjeta = document.getElementsByClassName("tarjetaCasa");

  let max = tarjeta.length;
  let i = 0;

  let zona = document.getElementById("main");

  seguentCasa(i);

  var hammertime = new Hammer(zona);

  hammertime.on('swipe', function (ev) {

      if (ev.type == "swipe") {
        if (ev.direction == "4") {
          if(tarjeta[i].querySelector('#like').className=="fa fa-heart-o"){
            let correu = sessionStorage.getItem(1);
            let id = tarjeta[i].getAttribute('id');
    
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onload = function () {
    
              response = xmlhttp.responseText; 
              console.log(response);
    
            };
            xmlhttp.open("GET", "php/like.php?correu="+correu+"&id="+id);
            xmlhttp.send();
            
            tarjeta[i].querySelector('#like').classList.add("fa-heart");
            tarjeta[i].querySelector('#like').classList.remove("fa-heart-o");
          }
          
          i++
          
        }

        if (ev.direction == "2") {
          if(tarjeta[i].querySelector('#like').className=="fa fa-heart"){
            let correu = sessionStorage.getItem(1);
            let id = tarjeta[i].getAttribute('id');
    
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onload = function () {
    
              response = xmlhttp.responseText; 
              console.log(response);
            };
            xmlhttp.open("GET", "php/noLike.php?correu="+correu+"&id="+id);
            xmlhttp.send();
            
            tarjeta[i].querySelector('#like').classList.remove("fa-heart");
            tarjeta[i].querySelector('#like').classList.add("fa-heart-o");
          }
          
          i++
        }
        
        if(i >= max){
          console.log(max)
          tarjeta[i-1].classList.add('dp_none');
          i = 0;
        }

        seguentCasa(i);
          
      }
  });
}

function seguentCasa(i){

  let casa = document.getElementsByClassName("tarjetaCasa");

  if(i != 0){
    casa[i-1].classList.add('dp_none');
  }

  casa[i].classList.remove('dp_none');

}
