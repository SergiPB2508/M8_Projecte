
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
    $nom = $_GET["nom"];
    $cognom = $_GET["cognom"];
    $contra = $_GET["contra"];

    $insertar = "UPDATE usuari SET nom='$nom',cognom='$cognom',contrasenya='$contra' WHERE correu='$correu'";
    
    $result = $con->query($insertar);

    $con->close();
?>