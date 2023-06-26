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
    $id = $_GET['id'];
    //$correu = "sergiP@gmail.com";

    $con = connexioBD();

    $consultar1 = "SELECT * FROM `megusta` WHERE correu_usuari = '$correu' and id_casa = '$id'";
        
    $result1 = $con->query($consultar1);

    if($result1->num_rows > 0){
        
        $consultar2 = "SELECT * FROM `megusta` WHERE correu_usuari = (SELECT correu_usuari FROM casa WHERE ID = $id) and id_casa = (SELECT ID FROM casa WHERE correu_usuari = '$correu')";
        
        $result2 = $con->query($consultar2);

        if($result2->num_rows > 0){
            echo 'si';
        } else {
            echo 'no';
        }
    } else {
        echo 'no';
    }
    
    // $con->close();

?>