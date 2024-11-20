<?php
  include("connect.php");

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = $_POST["name"];
      $address = $_POST["address"];
      $email = $_POST["email"];
      $gender = $_POST["gender"]; // This will now correctly retrieve "Male" or "Female"
  
      echo "Name: $name<br>";
      echo "Address: $address<br>";
      echo "Email: $email<br>";
  }

  
?>