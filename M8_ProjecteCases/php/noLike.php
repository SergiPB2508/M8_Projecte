
<?php
    // ddb201002: tinderCasaM8
    // $connexio = new mysqli('bbdd.damcostafreda04.cat', 'ddb201002', 'tinderCasaM8', 'ddb201002');


    // include "conn.php";

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
    $id = $_GET["id"];

    $insertar = "DELETE FROM `megusta` WHERE correu_usuari = '$correu' and id_casa = '$id'";
    
    $result = $con->query($insertar);

    // $con->close();

?>