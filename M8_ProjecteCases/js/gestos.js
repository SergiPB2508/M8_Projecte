let casesTotals = [];
let i = 0;
let numCasa;

var app={

    init:function(){
        
        let imatge = document.getElementById("imatge");
        let titiolNoCases = document.getElementById("emptyHouse");

        recorrerCases(i);
        
        var hammertime = new Hammer(imatge);

        // a dins del hammertime on ficarem els events que volem que detecti
        hammertime.on('swipe', function(ev) {
            // console.log(ev.type);
            //info.innerHTML = ev.type;
            if(ev.type == "swipe"){

                if(ev.direction == "4"){
                    let like = true;
                    casesLike(i, like)
                    i++;
                    if(i >= localStorage.length){
                        titiolNoCases.style.display=("block");
                        imatge.style.display=("none");

                        document.getElementById("codiPostalActual").innerHTML = "";
                        document.getElementById("carrerActual").innerHTML = "";
                        document.getElementById("poblacioActual").innerHTML = "";
                    } else{
                        recorrerCases(i)
                    }
                }

                if(ev.direction == "2"){
                    let like = false;
                    casesLike(i, like)
                    i++
                    if(i >= localStorage.length){
                        titiolNoCases.style.display=("block");
                        imatge.style.display=("none");

                        document.getElementById("codiPostalActual").innerHTML = "";
                        document.getElementById("carrerActual").innerHTML = "";
                        document.getElementById("poblacioActual").innerHTML = "";
                    } else{                            
                        recorrerCases(i)
                    }
                }
            }

            imatge.addEventListener("animationend", function(){

                imatge.className = "";
            });
        })
    }
}

function recorrerCases(i) {

    let poblacioCasa = document.getElementById("poblacioActual");
    let carrerCasa = document.getElementById("carrerActual");
    let codiPostalCasa = document.getElementById("codiPostalActual");


    let llegirCases = localStorage.getItem("JSONcasa"+i);
    let obj = JSON.parse(llegirCases);

    poblacioCasa.innerHTML = "";
    carrerCasa.innerHTML = "";
    codiPostalCasa.innerHTML = "";

    imatge.src = obj.UrlImg;
    poblacioCasa.innerHTML = obj.Poblacio;
    carrerCasa.innerHTML = obj.Carrer;
    codiPostalCasa.innerHTML = obj.CodiPostal;
}

function casesLike(i,like) {

    let llegirCases = localStorage.getItem("JSONcasa"+i);
    let obj = JSON.parse(llegirCases);

    if(like == true){
        alert("S'ha afegit a Me gusta");
    } else {
        alert("S'ha afegit a No Me gusta");
    }

    obj.LikeCasa = like;

    let actualitzarCasa = {UrlImg: obj.UrlImg, Poblacio: obj.Poblacio, Carrer: obj.Carrer, CodiPostal: obj.CodiPostal, LikeCasa: obj.LikeCasa};

    let myJSON = JSON.stringify(actualitzarCasa);
    localStorage.setItem("JSONcasa"+i, myJSON);
    
    // if(i > 2){
    //     i = 0;
    //     console.log("i = 0");
    // }
    // document.getElementById("infoCasa").innerHTML += `<p id="poblacioActual">${obj.Poblacio}</p>
    //                                                         <p id="carrerActual">${obj.Carrer}</p>
    //                                                         <p id="codiPostalActual">${obj.CodiPostal}</p>`;
}


document.addEventListener('DOMContentLoaded', app.init);

// Descomenta la següent linia i comentar la de dalt quan ho vulgui executar en el mobil
// document.addEventListener('deviceready', app.init);