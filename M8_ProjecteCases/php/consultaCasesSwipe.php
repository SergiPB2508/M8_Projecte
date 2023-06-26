<?php

    function connexioBD(){
        
        // COnnexio a la Basde de Dades
        $connexio = new mysqli("bbdd.damcostafreda04.cat", "ddb201002", "tinderCasaM8", "ddb201002");
        // Comprovo si la connexio funciona
        if($connexio->connect_errno){
            die("No es pot fer la connexió");
        }else{
            return $connexio;
        }

    }

    $correu = $_GET["correu"];
    //$correu = "sergiP@gmail.com";

    $con = connexioBD();

    $consultar ="SELECT * from usuari U join casa C on C.correu_usuari = U.correu where U.correu <> '$correu'";
            
    $result = $con->query($consultar);
    while($row = $result->fetch_assoc()){
        $like = "fa fa-heart-o";
        $match = "no_match";

        $idCasa = $row['ID'];
        $consultar1 = "SELECT * FROM `megusta` WHERE correu_usuari = '$correu' and id_casa = '$idCasa'";
            
        $result1 = $con->query($consultar1);

        if($result1->num_rows > 0){

            $like = "fa fa-heart";

            $correu2 = $row['correu'];
            $consultar2 = "SELECT * FROM `megusta` WHERE correu_usuari = '$correu2' and id_casa = (SELECT id FROM casa WHERE correu_usuari = '$correu')";
            
            $result2 = $con->query($consultar2);

            if($result2->num_rows > 0){
                $match = "match";   
            }

        }

        echo '<div id="'.$idCasa.'" class="tarjetaCasa dp_none">
                <img src="http://www.damcostafreda04.cat/M8_ProjecteCases/img/'.$row['imatge'].'" alt="fotoHostal" id="imatge">
                <div id="infoCasa">
                    <p id="localitat">'.$row['localitat'].'</p>
                    <p id="num persones">'.$row['num_persones'].'
                    <i class="fa fa-users"></i></p>
                    <p id="user">'.$row['nom'].' '.$row['cognom'].'</p>
                    <div class="iconsLike">
                        <i class="fa fa-handshake-o '.$match.'" id="match"></i>
                        <i class="'.$like.'" id="like"></i>
                    </div>
                </div>
            </div>';


        // echo '<div class="cardCasa" id="'.$idCasa.'">
        //         <img src="http://www.damcostafreda04.cat/M8_ProjecteCases/img/'.$row['imatge'].'" alt="Imatge casa" id="imgHouse"/>
        //         <div class="infoCasa">
        //             <p id="localitat">'.$row['localitat'].'</p>
        //             <div id="capacitat">
        //                 <p>'.$row['num_persones'].'</p>
        //                 <i class="fa fa-users"></i>
        //             </div>
        //         </div>
        //         <div id="userHouse">
        //             <h3>PROPIETARI</h3>
        //             <div style="width: 100%;display: flex; align-items: center; justify-content: space-around;">
        //                 <div id="imgUser">
        //                     <img src="img/userWoman.png" alt="">
        //                     <p> '.$row['nom'].' '.$row['cognom'].'</p>
        //                 </div>
        //                 <div class="iconsLike">
        //                     <i class="fa fa-handshake-o '.$match.'"></i>
        //                     <i class="'.$like.'"></i>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>';
        }
        // $con->close();

?>