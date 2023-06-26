addEventListener("DOMContentLoaded", ajax());

addEventListener("DOMContentLoaded", function () {
  setInterval(function (){
      
  let correu = sessionStorage.getItem(1);
  let cases = document.getElementsByClassName('cardCasa');
  
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
     document.getElementById("listCasa").innerHTML = response;

  };
  xmlhttp.open("GET", "http://www.damcostafreda04.cat/M8_ProjecteCases/php/consultaCasesLlista.php?correu="+correu);
  xmlhttp.send();

}

document.addEventListener('click', like);

function like(e){

    // console.log(document.getElementsByClassName("like"));
    // console.log(e.target.parentElement.closest(".entrades").querySelector(".likes span"));



    // console.log(parseInt(cor.textcontent)+1);
  
    //Amb el className li canviarem la classe que al donar-li like es fiqui el altre cor
    // que estar pintat amb negre, però amb el css fem que el cor sigui vermell
    // ParentElement es si la classe pare es diu "dades_dreta"
    if(e.target.parentElement.className=="iconsLike"){
  
      //Agafem la classe més propera on fem clic i que pugui veure la p per poder accedir al span
      if(e.target.className=="fa fa-heart-o"){
        
        let correu = sessionStorage.getItem(1);
        let id = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('id');

        console.log(id);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function () {

          response = xmlhttp.responseText; 
          // console.log(response);

        };
        xmlhttp.open("GET", "http://www.damcostafreda04.cat/M8_ProjecteCases/php/like.php?correu="+correu+"&id="+id);
        xmlhttp.send();

        // console.log("Has donat like");
  
        e.target.classList.add("fa-heart");
        e.target.classList.remove("fa-heart-o");
      
      } else if(e.target.className=="fa fa-heart"){
  
        let correu = sessionStorage.getItem(1);
        let id = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('id');

        console.log(id);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function () {

          response = xmlhttp.responseText; 
          // console.log(response);

        };
        xmlhttp.open("GET", "http://www.damcostafreda04.cat/M8_ProjecteCases/php/noLike.php?correu="+correu+"&id="+id);
        xmlhttp.send();

        // console.log("Has tret el like");
    
        e.target.classList.remove("fa-heart");
        e.target.classList.add("fa-heart-o");
  
      }

      // location.reload();
    }
    

}