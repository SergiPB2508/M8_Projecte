
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

    $con = connexioBD();

    $correu = $_GET["correu"];
    //$correu = "sergiP@gmail.com";
    $consultar ="SELECT * from usuari U join casa C on C.correu_usuari = U.correu where correu = '$correu'";
            
    $result = $con->query($consultar);
    if($row = $result->fetch_assoc()){

        echo '<div class="dadesUpdate">
            <h2> Dades Usuari </h2>
            <form action="" method="post" id="dadesUsuari" onsubmit="actualitzarUser()">
                <input type="text" name="correu" placeholder="Correu de l`usuari" value='.$row["correu"].' class="input" readonly/>
                <input type="text" name="nom" placeholder="Nom de l`usuari" value='.$row["nom"].' class="input"/>
                <input type="text" name="cognom" placeholder="Cognom de l`usuari" value='.$row["cognom"].' class="input"/>
                <input type="password" name="contrasenya" placeholder="Contrasenya de l`usuari" value='.$row["contrasenya"].' class="input"/>
                <input type="submit" name="submit" value="Actualitzar Dades" class="botons" id="registrarBoto"/>
            </form>
            </div>

            <div class="dadesUpdate">
                <h2> Dades Casa </h2>
                <form action="" method="post" id="dadesCasa" onsubmit="actualitzarCasa()">
                    <input type="text" name="localitat" placeholder="Localitat Casa" value='.$row["localitat"].' class="input" />
                    <input type="number" name="num_persones" placeholder="Capacitat de persones" value='.$row["num_persones"].' class="input" />
                    <input type="text" name="imatge" placeholder="URL de l`imatge" class="input" value='.$row["imatge"].' />
                    <input type="submit" name="submit" value="Actualitzar Casa" class="botons">
                </form>
            </div>';
    }
    // $con->close();
    

?>