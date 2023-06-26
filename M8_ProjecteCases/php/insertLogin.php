<?php

    function connexioBD(){

        // COnnexio a la Basde de Dades
        $connexio = new mysqli('bbdd.damcostafreda04.cat', 'ddb201002', 'tinderCasaM8', 'ddb201002');
        // Comprovo si la connexio funciona
        if($connexio->connect_errno){
            die("No es pot fer la connexió");
        }else{
            return $connexio;
        }
    }

    $con = connexioBD();

    $nom = $_GET['nom'];
    $cognom = $_GET['cognom'];
    $correu = $_GET['correu'];
    $contrasenya = $_GET['contrasenya'];

    $localitat = $_GET['localitat'];
    $num_per = $_GET['num_p'];
    $img = $_GET['imatge'];

    if($nom == null || $cognom == null || $correu == null || $contrasenya == null || $localitat == null || $num_per == null || $img == null){
        
        echo "error";

    } else{
        $insertar = "INSERT INTO `usuari` (`correu`, `nom`, `cognom` , `contrasenya` ) VALUES ('$correu', '$nom', '$cognom', '$contrasenya')";
    
        $result = $con->query($insertar);
    
        $insertar2 = "INSERT INTO `casa` (`ID`, `localitat`, `num_persones`, `imatge`, `correu_usuari`) VALUES (DEFAULT,'$localitat','$num_per','$img','$correu')";
    
        $result2 = $con->query($insertar2);
    }

    
    // $con->close();
?>