<?php
    // connect and login to FTP server
    $ftp_server = "ftp.damcostafreda04.cat";
    $ftp_conn = ftp_connect($ftp_server) or die("Could not connect to $ftp_server");

    $ftp_username = "ftp.damcostafreda04.cat";
    $ftp_userpass = "KVzp0LoG";
    $login = ftp_login($ftp_conn, $ftp_username, $ftp_userpass);

    // open file for reading
    $file = "img/casa1.jpg";
    $fp = fopen($file,"r");

        // upload file
        if (ftp_fput($ftp_conn, "/public/M8_ProjecteCases/img/casa1.jpg", $fp, FTP_BINARY))
        {
            echo "Successfully uploaded $file.";
        }
        else
        {
            echo "Error uploading $file.";
        }

    // close connection
    ftp_close($ftp_conn);
    fclose($fp);
?>