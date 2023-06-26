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

    $correuLogin = $_GET["correu"];
    $passwd = $_GET["contrasenya"];

    //Consulta
    $consultar ="SELECT * from usuari where correu= '$correuLogin' and contrasenya= '$passwd'";

    $result = $con->query($consultar);

    $message = '';

    if($result->num_rows > 0){
        
        while($row = $result->fetch_assoc()){
            
            $correuUsuari = $row['correu'];
            echo $correuUsuari;
        }

    } else {
        echo "error";
    }
    
    // $con->close();
    
?>