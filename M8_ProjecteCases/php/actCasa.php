
<?php

    // ddb201002: tinderCasaM8
    // $connexio = new mysqli('bbdd.damcostafreda04.cat', 'ddb201002', 'tinderCasaM8', 'ddb201002');

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
    $loc = $_GET["loc"];
    $num_p = $_GET["num_p"];
    $img = $_GET["img"];

    $insertar = "UPDATE casa SET localitat='$loc',num_persones='$num_p',imatge='$img' WHERE correu_usuari='$correu'";
    
    $result = $con->query($insertar);

    // $con->close();s
?>