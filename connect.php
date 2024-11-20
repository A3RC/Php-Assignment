<?php

$servername = 'localhost';
$username = 'root';
$password = '';

$conn = new mysqli($servername,$username,$password)
or die("Connection failed: " . mysqli_connect_error());

?>